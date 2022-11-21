
const TodoList = ({ todos, deleteTodo, themeSwitch }) => {
    return (
        <div class="list-wrapper">
        <ul>
          {todos.map((todo, index) => (
            <div id="list" style={{
                borderBottom: themeSwitch === true ? '1px solid  hsl(235, 21%, 11%)' :
                  '1px solid hsl(0, 0%, 98%)'
              }}>
            <li key={index}> {todo} </li> 
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