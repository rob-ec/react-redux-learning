import React, { Component } from 'react';
import ToDos from './ToDos';
import AddTodo from './AddTodo';

class ToDoList extends Component {
    state = {
        todos: [
            { id: 1, content: 'write a new to do and press enter' },
            { id: 2, content: 'click on todo to delete it' }
        ]
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({ todos });
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
                <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default ToDoList;