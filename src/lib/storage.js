import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

export const [settings, setSettings] = createStore({
  treshold: 70,
  run: false,
  selectedDevice: null
})

export function saveSettings (settings) {
  localStorage.setItem('settings', JSON.stringify(settings))
}

export const loadSettings = () => {
  const store = localStorage.getItem('settings')
  if (!store) return
  setSettings(JSON.parse(store))
  setSettings( settings => ({...settings, run: false}))
}

////matches

export const [matches, setMatches] = createStore([])