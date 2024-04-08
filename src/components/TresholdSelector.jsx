import { For } from 'solid-js'
import { settings, setSettings } from '../lib/storage'
function TresholdSelector () {
  let treshValues = [30, 40, 50, 60, 70, 80, 90]

  return (
    <select
      onChange={e => setSettings(settings => ({ treshold: Number(e.target.value) }))}
    >
      <For each={treshValues}>
        {val => (
          <option value={val} selected={val === Number(settings.treshold)}>
            {val}% filter treshold
          </option>
        )}
      </For>
    </select>
  )
}
export default TresholdSelector
