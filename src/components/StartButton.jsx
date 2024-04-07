import {settings, setSettings} from '../lib/storage'


function StartButton () {
  return (
    <button
      onClick={() =>
        setSettings(settings => ({
          run: !settings.run
        }))
      }
    >
      {settings.run ? 'stop' : 'start'}
    </button>
  )
}
export default StartButton
