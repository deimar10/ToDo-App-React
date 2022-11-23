
const TodoInput = ({ todo, setTodo, addTodo, themeSwitch }) => {

  const handleChange = (e) => {
    setTodo({...todo, activity : e.target.value});
  }

    return (
        <div class="input-section"
        style={{
          backgroundColor: themeSwitch === true ? 'hsl(236, 33%, 92%)' :
            'hsl(235, 24%, 19%)'
        }}>
          <input 
            name="todo"
            placeholder="Create a new ToDo" 
            onChange={handleChange}
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