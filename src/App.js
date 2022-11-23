import './App.css';
import backgroundDark from '../src/images/bg-desktop-dark.jpg'
import backgroundLight from '../src/images/bg-desktop-light.jpg'
import sun from '../src/images/icon-sun.svg'
import moon from '../src/images/icon-moon.svg'
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState({
    activity: '',
    completed: false
  });
  const [todos, setTodos] = useState([]);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [category, setCategory] = useState("");
  let imageURL = "";

  const addTodo = () => {
    if (todo.activity !== "") {
      setTodos([...todos, todo])
    } else {
      alert("Cant add a empty todo!")
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const clearTodos = todos.filter((todo) => 
      todo.completed === false
    );
    setTodos(clearTodos);
  }

  const handleCheck = (event, index) => {
    setTodos((prev) => {
      const updatedTodo = prev.map((obj, objIndex) => {
        if (index === objIndex) {
          return {...obj, completed : !obj.completed};
        }
        return obj;
      });
      return updatedTodo;
    });
  };

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
          <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} themeSwitch={themeSwitch} />

          <TodoList todo={todo} todos={todos} deleteTodo={deleteTodo} themeSwitch={themeSwitch} handleCheck={handleCheck} category={category} />

          <div class="bottom-section" style={{
            backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
              'hsl(235, 24%, 19%)'
          }}>
            <p id="count">{todos.length} Items Left</p>
            <div id="btns">
              <button name="all" onClick={e => setCategory(e.target.name)} style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                color: themeSwitch === true ? 'black' :
                  ''
              }}>
                All
              </button>
              <button name="active" onClick={e => setCategory(e.target.name)} style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                color: themeSwitch === true ? 'black' :
                  ''
              }}>
                Active
              </button>
              <button name="completed" onClick={e => setCategory(e.target.name)} style={{
                border: themeSwitch === true ? 'none' :
                  'none',
                color: themeSwitch === true ? 'black' :
                  ''
              }}>
                Completed
              </button>
            </div>
            <button name="clear" onClick={e => setCategory(e.target.name)}
            onClick={() => {
              deleteCompleted();
            }}
             style={{
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
