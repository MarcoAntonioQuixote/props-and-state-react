import React from 'react'

function Tile({todo, isCompleted, setToDos, setDoneList}) {

    const handleToDo = () => {
        setToDos(prev => prev.filter(t => t !== todo));
        setDoneList(prev => [...prev, todo]);
    }

    return (
        <div onClick={handleToDo}>
            <h4>{isCompleted ? `✅` : `❌`} {todo}</h4>
        </div>
    )
}

export default Tile