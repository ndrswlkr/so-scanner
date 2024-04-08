import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

///settings
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
export const [lastDetected, setLastDetected] = createSignal(null)
///lists

export const [lists, setLists] = createStore({})

export const saveLists = () => {
    localStorage.setItem('lists', JSON.stringify(lists))
}

export const loadLists = () => {
    const store = localStorage.getItem('lists')
    if (!store) return
    setLists(JSON.parse(store))
}