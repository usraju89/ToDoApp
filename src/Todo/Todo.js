import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {
    state = {
        newTodo: "",
        todos: [
            {
                id: 2019231232,
                todo: 'Learn JS',
                completed: false
            }
        ]
    }
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.newTodoChange = this.newTodoChange.bind(this);
        this.changeComplete = this.changeComplete.bind(this);
    }
    addTodo() {
        this.setState({
            todos: [...this.state.todos, { id: new Date().getTime(), todo: this.state.newTodo }],
            newTodo: ""
        })
    }
    newTodoChange(event) {
        this.setState({
            newTodo: event.target.value
        });
    }
    changeComplete() {
        alert("changeComplete");
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.newTodo} onChange={this.newTodoChange} />
                <button onClick={this.addTodo}>Add ToDo</button>
                {this.state.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} changeComplete={this.changeComplete} />
                })}
            </div>
        );
    }

}

export default Todo;
