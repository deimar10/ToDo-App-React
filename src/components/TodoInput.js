
const TodoInput = ({ todo, setTodo, addTodo, themeSwitch }) => {
    return (
        <div class="input-section"
        style={{
          backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
            'hsl(235, 24%, 19%)'
        }}>
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
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default TodoInput;