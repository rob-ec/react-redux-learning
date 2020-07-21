import React from 'react';

const ToDos = ({ todos, deleteTodo }) => {

    const todoList = (todos.length) ? (todos.map(todo => {
        return (
            <article className='collection-item' key={todo.id}>
                <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
            </article>
        );
    })
    ) : (
            <p className='center'>You've complete all todo's! Yay!!!</p>
        );

    return (
        <div className='todos collection'>
            {todoList}
        </div>
    );
}

export default ToDos;