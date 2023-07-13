import axios from "axios"

const baseUrl="https://to-doapp-backend-zmtk.onrender.com/"

export const getAllTodo =(setToDo)=>{
    axios
     .get(baseUrl)
     .then(({data})=>{
        console.log('data',data)
      setToDo(data)
     })
}
export const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}

export const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}
 
 
export const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}


 


