import React from 'react'
import Tile from './Tile'

function ToDoList({todos, setToDos, setDoneList}) {

    const showTodos = todos.map(todo => {
        return (
            <Tile todo={todo} isCompleted={false} setToDos={setToDos} setDoneList={setDoneList}/>
        )
    })

    return (
        <div className='toDoList'>
            {showTodos}
        </div>
    )
}

export default ToDoList