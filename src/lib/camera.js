import { createWorker } from 'tesseract.js'
import { settings, setSettings, matches, setMatches } from './storage'
import { createSignal } from 'solid-js'
import { setLastDetected } from './storage'
export const [deviceList, setDeviceList] = createSignal([
  { label: 'none', id: null }
])

let width
let height
let streaming
let video
let videoPreview
let videoAnalyze
let lastTimestamp = 0
let worker

export async function setUp (v, vp, va) {
  video = v
  videoPreview = vp
  videoAnalyze = va
  width = 640
  height = 0
  streaming = false
  worker = await createWorker('eng', 1) //, {logger: function(m){console.log(m)}})
  
}

export async function getDeviceList () {
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    })

    let devices = await navigator.mediaDevices.enumerateDevices()

    devices.forEach(device => {
      if (device.kind == 'videoinput')
        setDeviceList([
          ...deviceList(),
          { label: device.label, id: device.deviceId }
        ])
    })
  } catch (e) {
    console.log('error in getting device list', e)
  }
}

export async function getStream () {
  console.log('getting stream ', settings.selectedDevice)
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: settings.selectedDevice },
      audio: false
    })
    console.log(video)
    video.srcObject = stream
    video.play()

    video.addEventListener(
      'canplay',
      ev => {
        if (!streaming) {
          height = (video.videoHeight / video.videoWidth) * width
          video.setAttribute('width', width)
          video.setAttribute('height', height)
          videoPreview.setAttribute('width', width)
          videoPreview.setAttribute('height', height)
          videoAnalyze.setAttribute('width', width) //* .555)
          videoAnalyze.setAttribute('height', height * 0.333) // * .333)

          streaming = true
        }
      },
      false
    )
  } catch (e) {
    console.log('error getting stream ', e)
  }
}

function drawVideoPreview () {
  let context = videoPreview.getContext('2d', { willReadFrequently: true })
  context.drawImage(
    video,
    0,
    0,
    video.videoWidth,
    video.videoHeight,
    0,
    0,
    width,
    height
  )
  thresholdFilter(context)
  context.rect(width * 0.111, height * 0.333, width * 0.777, height * 0.333)
  context.lineWidth = 6
  context.strokeStyle = 'green'
  context.stroke()
}

function nextTresh (current) {
  return settings.treshold
  let nexttresh = current + 10
  if (nexttresh > 80) return 40
  //return nexttresh
}

function thresholdFilter (context) {
  let imageData = context.getImageData(
    0,
    0,
    videoPreview.width,
    videoPreview.height
  )
  let pixels = imageData.data
  let level = 0.5
  if (level === undefined) {
    level = 0.5
  }
  //settings.treshold = nextTresh(settings.treshold)
  const thresh = Math.floor((settings.treshold / 100) * 255)
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b
    let val
    if (gray >= thresh) {
      val = 255
    } else {
      val = 0
    }
    pixels[i] = pixels[i + 1] = pixels[i + 2] = val
  }
  context.putImageData(imageData, 0, 0)
}

export function startAnalyze () {
  window.requestAnimationFrame(step)
}

async function step (timestamp) {
  if (timestamp - lastTimestamp > 600) {
    lastTimestamp = timestamp
    drawVideoPreview()
    if (settings.run) await analize()
  }
  if (settings.run) window.requestAnimationFrame(step)
}

async function analize () {
  let context = videoAnalyze.getContext('2d')
  context.drawImage(
    videoPreview,
    videoPreview.width * 0.111,
    videoPreview.height * 0.333,
    videoPreview.width * 0.777,
    videoPreview.height * 0.333,
    0,
    0,
    width,
    height * 0.333
  )
  let image = new Image()
  image.src = videoAnalyze.toDataURL('image/png')

  const r = await worker.recognize(
    image,
    { rotateAuto: true },
    { imageColor: true, imageGrey: true, imageBinary: true }
  )

  if (r?.data?.confidence > 70) extractData(r)
}

function extractData (r) {
  r.data.lines.forEach(l => {
    l.words.forEach(w => {
      let match = w.text.match(/\d{8}/)
      if (match) {
       // setMatches(matches => [...matches, match[0]])
       setLastDetected(match[0])
      }
    })
  })
}
