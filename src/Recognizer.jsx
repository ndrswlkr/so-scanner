import { createSignal, onMount, createEffect, For, onCleanup, on } from 'solid-js'
import { Portal } from 'solid-js/web'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './Recognizer.css'

import {
  settings,
  setSettings,
  loadSettings,
  saveSettings,
  matches, setMatches, lists, setLists, saveLists, loadLists,
  lastDetected, setLastDetected
} from './lib/storage'

import { getDeviceList, setUp, startAnalyze, getStream } from './lib/camera'
import DeviceSelector from './components/DeviceSelector'
import TresholdSelector from './components/TresholdSelector'
import StartButton from './components/StartButton'

let video, videoPreview, videoAnalyze, bell

function Recognizer () {
  const [lastSO, setLastSO] = createSignal('nothing detected')
  
  function toggleStart() {
      setSettings(settings => ({...settings, run: !settings.run}))
     if (settings.run) startAnalyze()
  }

  onMount(async () => {
    loadSettings()
    setUp(video, videoPreview, videoAnalyze)
    await getDeviceList()
  })

  onCleanup(() => {
    setSettings(settings => ({ ...settings, run: false }))
    if(matches.length){

    }
    console.log("you left")
  })
  createEffect(() => {
    saveSettings(settings)
  })

  createEffect(() => {
    if (settings.selectedDevice) getStream()
  })


  createEffect( on( () => lastDetected(),() => {
    if (!lastDetected()) return
    
    //setLastSO(matches[matches.length - 1])
    setMatches(matches => [...matches, lastDetected()])
    bell.play()
    setSettings(settings => ({ ...settings, run: false }))
    setTimeout(() => {
      toggleStart()
      setLastDetected(null)
    }, 3000)
  }))

  return (
    <>
      <Portal mount={document.getElementById('menu-drawer')}>
        <article>
          <DeviceSelector />
        </article>
      </Portal>
      <div id='controls' role="group">
        <TresholdSelector />
        <StartButton start={toggleStart}/>
      </div>
      <audio ref={bell} id='bell' src='achievement-bell.wav'></audio>
      <div id='video-div'>
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
          <h3 id='lastSO'>{lastDetected() ? lastDetected() : 'nothing detected'}</h3>
        </div>
        <ul id='resultView'>
          <For each={matches}>{match => <li>{match}</li>}</For>
        </ul>
      </div>
    </>
  )
}

export default Recognizer
