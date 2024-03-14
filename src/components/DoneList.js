import React from 'react'
import Tile from './Tile';

function DoneList({doneList}) {

    const showToDones = doneList.map(doneThing => {
        return (
            <Tile todo={doneThing} isCompleted={true}/>
        )
    })
    
    return (
        <div className='doneList'>
            {showToDones}
        </div>
    )
}

export default DoneList