/* @refresh reload */
import { render, classList } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import './index.css'
import Recognizer from './Recognizer'
import Home from './Home'
import Latest from './Latest'
import Older from './Older'
import pico from '@picocss/pico'
import Drawer from './components/Drawer'
import { createSignal } from 'solid-js'

const root = document.getElementById('root')
const [showDrawer, setShowDrawer] = createSignal(false)

render(
  () => (
    <div class="container">
      <nav>
        <ul>
          <div class="symbol-button" onClick={() => setShowDrawer(!showDrawer())}>
            <h3 id='symbol'>SO</h3>
          </div>
        </ul>
      </nav>
      <Drawer showDrawer={showDrawer()} setShowDrawer={setShowDrawer}>
        <nav>
          <li>
            <a href='/so-scanner/'>home</a>
          </li>
          <li>
            <a href='/so-scanner/scan'>start scanning</a>
          </li>
          <li>
            <a href='/so-scanner/latest'>latest list</a>
          </li>
          <li>
            <a href='/so-scanner/older'>older lists</a>
          </li>
        </nav>
      </Drawer>
      <Router>
        <Route path='/so-scanner/' component={Home} />
        <Route path='/so-scanner/scan' component={Recognizer} />
        <Route path='/so-scanner/latest' component={Latest} />
        <Route path='/so-scanner/older' component={Older} />
      </Router>
    </div>
  ),
  root
)
