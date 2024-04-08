import './drawer.css'
import { classList } from 'solid-js/web'
function Drawer (props) {
  return (
    <aside
      id="menu-drawer"
      onClick={() => props.setShowDrawer(false)}
      classList={{ drawer: true, card: true, show: props.showDrawer }}
    >
      {props.children}
    </aside>
  )
}
export default Drawer
