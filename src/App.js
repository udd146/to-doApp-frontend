 import './App.css';
 import { Todo } from './components/todo';
 import { useEffect, useState } from 'react';
 import { getAllTodo,addToDo,updateToDo, deleteToDo } from './utilities/fetchApi';
function App() {
  
  const [todo,setToDo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
   useEffect(()=>{
    getAllTodo(setToDo)
   },[]) 
   
   const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
   return (
    <div className="App">
       <header>    
        <h1>Todo-Application</h1>
       </header>
  <div className='TodoForm'>
     <input placeholder='enter the task' value={text} onChange={(e)=>setText(e.target.value)}>
    </input>
    <button onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>  {isUpdating ? "Update" : "Add"}</button>
    </div> 
    {
      todo.map((item)=> <Todo
       key={item._id}
       text={item.text}
       updateMode = {() => updateMode(item._id, item.text)}
       deleteToDo = {() => deleteToDo(item._id, setToDo)}
      />)
    }
  </div>
  );
}

export default App;
