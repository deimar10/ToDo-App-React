import './App.css';
import backgroundDark from '../src/images/bg-desktop-dark.jpg'
import backgroundLight from '../src/images/bg-desktop-light.jpg'
import sun from '../src/images/icon-sun.svg'
import moon from '../src/images/icon-moon.svg'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [themeSwitch, setThemeSwitch] = useState(false);
  let imageURL = "";

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    } else {
      alert("Cant add a empty todo!")
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }

  if (themeSwitch === true) {
    imageURL = moon;
  } else {
    imageURL = sun;
  }

  return (
    <body style={{
      backgroundColor: themeSwitch === true ? 'hsl(0, 0%, 98%)' :
        'hsl(235, 21%, 11%)',
      color: themeSwitch === true ? 'hsl(235, 19%, 35%)' :
        'white'
    }}>
      <div class="main-section" >
        <div class="heading-section" style={{
          backgroundImage: themeSwitch === true ? `url(${backgroundLight})` :
            `url(${backgroundDark})`
        }}>
          <div class="tst">
            <h1>TODO</h1>
            <button onClick={e => setThemeSwitch(!themeSwitch)} class="toggle-theme">
              <img src={imageURL} alt="" />
            </button>
          </div>
        </div>
        <div class="body-section" style={{
          backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
            'hsl(235, 24%, 19%)'
        }}>
          <div class="input-section"
          style={{
            backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
              'hsl(235, 24%, 19%)'
          }}>
            <button onClick={addTodo}>Add</button>
            <input 
            name="todo"
            value={todo}
            placeholder="Create a new ToDo" 
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            style={{
              backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
                'hsl(235, 24%, 19%)'
            }}>
            </input>
          </div>
          <div class="list">
            <ul>
              {todos.map((todo, index) => (
                <div>
                <li key={index}
                style={{
                  borderBottom: themeSwitch === true ? '1px solid  hsl(235, 21%, 11%)' :
                    '1px solid hsl(0, 0%, 98%)'
                }}> {todo} </li> 

                <button onClick={() => {
                  deleteTodo(todo);
                }}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
          <div class="bottom-section" style={{
            backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
              'hsl(235, 24%, 19%)'
          }}>
            <p id="count">{todos.length} Items Left</p>
            <div id="btns">
              <button style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                  color: themeSwitch === true ? 'black' :
                  ''
              }}>
                All
              </button>
              <button style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                  color: themeSwitch === true ? 'black' :
                  ''
              }}>
                Active
              </button>
              <button style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                  color: themeSwitch === true ? 'black' :
                  ''
              }}>
                Completed
              </button>
            </div>
            <button style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                  color: themeSwitch === true ? 'black' :
                  ''
              }}>
                Clear Completed
                </button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App;
