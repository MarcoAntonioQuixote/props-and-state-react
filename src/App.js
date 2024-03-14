import { useState } from 'react';
import './App.css';
import DoneList from './components/DoneList';
import ToDoList from './components/ToDoList';

function App() {

    const [name,setName] = useState('Mark')
    const [todos, setToDos] = useState([
        "Do laundry",
        "Wash dishes",
        "Sweep floors",
        "Buy groceries",
        "Call mom",
        "Finish report",
        "Exercise for 30 minutes",
        "Read a chapter of a book",
        "Water the plants",
        "Pay bills",
    ])
    const [doneList, setDoneList] = useState(['Walk Dog','Buy Groceries','Paint House']);

    return (
        <div className="App-header">
            This is {name}'s To-Do List ✅
            <div className="container">
                <ToDoList todos={todos} setToDos={setToDos} setDoneList={setDoneList} />
                <DoneList doneList={doneList} />
            </div>

            <button onClick={() => setName('Anthony')}>Change Name to Anthony</button>
        </div>
    );
}

export default App;
