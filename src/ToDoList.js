import React, { Component } from 'react';
import ToDos from './ToDos';

class ToDoList extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy some milk' },
            { id: 2, content: 'play mario kart' }
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos
        });
    }

    render() {
        return (
            <div className='ToDoList container'>
                <header><h1 className='center blue-text'>Todo's</h1></header>
                <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        );
    }
}

export default ToDoList;