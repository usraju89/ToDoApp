import React from 'react'

function TodoItem(props) {
    const {todo} = props;
    console.log(props)
  return (
    <div>
      <p>
        {todo.id} - {todo.todo}
        <button onClick={() => props.changeComplete}>Mark as { !todo.completed ? 'Completed' : 'Not Completed' }</button>
      </p>
    </div>
  )
}

export default TodoItem
