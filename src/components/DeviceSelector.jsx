import { setSettings, settings } from '../lib/storage'
import { deviceList } from '../lib/camera'
function DeviceSelector () {
  return (
    <div>
      <label for="device-selector">select device</label>
      <select
        id="device-selector"
        onChange={e =>
          setSettings(settings => ({
            selectedDevice: e.target.value
          }))
        }
      >
        <For each={deviceList()}>
          {device => (
            <option
              value={device.id}
              selected={device.id === settings.selectedDevice}
            >
              {device.label}{' '}
            </option>
          )}
        </For>
      </select>
    </div>
  )
}
export default DeviceSelector
