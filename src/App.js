import './App.css';
import background from '../src/images/bg-desktop-dark.jpg'
import sun from '../src/images/icon-sun.svg'

function App() {
return (
<div class="main-section">
<div class="heading-section" style={{ 
      backgroundImage: `url(${background})` 
    }}>
    <div class="tst">
  <h1>TODO</h1>
  <img src={sun} alt=""/>
  </div>
</div>
<div class="body-section">
  <div class="input-section">
    <input placeholder="Create a new ToDo"></input>
  </div>
  <div class="list">
    <ul>
    <li>Jog around</li>
    <li>Jog around</li>
    <li>Jog around</li>
    </ul>
  </div>
  <div class="bottom-section">
    <p id="count">5 Items Left</p>
    <div id="btns">
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
    </div>
    <button>Clear Completed</button>
  </div>
</div>
</div>
  )
}

export default App;
