import '../App.css';
import { useMemo } from 'react';

const TodoList = ({ todos, deleteTodo, themeSwitch, handleCheck, category }) => {

  const handleFilter = () => {
    if (category === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    if (category === 'active') {
      return todos.filter((todo) => !todo.completed)
    }
    return todos;
  }

  let filterTodos = useMemo(handleFilter, [category, todos])

    return (
        <div class="list-wrapper">
        <ul>
          {filterTodos.map((todo, index) => (
            <div id="list" style={{
                borderBottom: themeSwitch === true ? '1px solid  hsl(235, 21%, 11%)' :
                  '1px solid hsl(0, 0%, 98%)'
              }} key={index}>
            <input 
              value={todo.completed} 
              type="checkbox" 
              onChange={e => handleCheck(e, index)} 
            />   
            <li> {todo.activity} </li> 
            <button onClick={() => {
              deleteTodo(todo);
            }}>Delete
            </button>
            </div>
          ))}
        </ul>
      </div>
    )
}

export default TodoList;