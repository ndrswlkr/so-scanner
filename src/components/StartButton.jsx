import { settings } from "../lib/storage"

function StartButton (props) {
  return (
    <button
      onClick={() =>
        props.start()
      }
    >
      {settings.run ? 'stop' : 'start'}
    </button>
  )
}
export default StartButton
