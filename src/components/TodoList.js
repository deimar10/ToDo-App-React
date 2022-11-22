import '../App.css';

const TodoList = ({ todos, deleteTodo, themeSwitch, checked, handleCheck }) => {

  const isChecked = (todo) => 
  checked.includes(todo) ? "checked-item" : "not-checked-item";

    return (
        <div class="list-wrapper">
        <ul>
          {todos.map((todo, index) => (
            <div id="list" style={{
                borderBottom: themeSwitch === true ? '1px solid  hsl(235, 21%, 11%)' :
                  '1px solid hsl(0, 0%, 98%)'
              }}>
            <input value={todo} type="checkbox" onChange={handleCheck} />   
            <li key={index} className={isChecked(todo)}> {todo} </li> 
            <button onClick={() => {
              deleteTodo(todo);
            }}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    )
}

export default TodoList;