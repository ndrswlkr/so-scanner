import { createSignal, onMount, createEffect, For, on } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  settings,
  setSettings,
  loadSettings,
  saveSettings,
  matches
} from './lib/storage'

import { getDeviceList, setUp, startAnalyze, getStream } from './lib/camera'
import DeviceSelector from './components/DeviceSelector'
import TresholdSelector from './components/TresholdSelector'
import StartButton from './components/StartButton'

let video, videoPreview, videoAnalyze, bell

function App () {
  const [lastSO, setLastSO] = createSignal('nothing detected')
  onMount(async () => {
    loadSettings()
    setUp(video, videoPreview, videoAnalyze)
    await getDeviceList()
  })

  createEffect(() => {
    saveSettings(settings)
  })

  createEffect(() => {
    if (settings.selectedDevice) getStream()
  })

  createEffect(() => {
    if (settings.run) {
      startAnalyze()
    }
  })

  createEffect(() => {
    if (!matches.length) return
    setLastSO(matches[matches.length - 1])
    setSettings(settings => ({ ...settings, run: false }))
    bell.play()
    setTimeout(() => {
      setSettings(settings => ({ ...settings, run: true }))
      setLastSO("nothing detected")
    }, 3000)
  })

  return (
    <>
      <div id='controls'>
        <DeviceSelector />
        <TresholdSelector />
        <StartButton />
      </div>
      <audio ref={bell} id='bell' src='achievement-bell.wav'></audio>
      <div>
        <video ref={video} id='video' width='640' height='640' hidden='true'>
          Video stream not available.
        </video>

        <div id='pile'>
          <canvas
            id='videoPreview'
            ref={videoPreview}
            width='360'
            height='360'
          ></canvas>
          <canvas id='videoAnalyze' ref={videoAnalyze} hidden='true'></canvas>
          <h3 id='lastSO'>{lastSO()}</h3>
        </div>
        <ul id='resultView'>
          <For each={matches}>{match => <li>{match}</li>}</For>
        </ul>
      </div>
    </>
  )
}

export default App
