import React, {useState} from 'react'
import "./App.css";
import ToDoForm from './components/todoForm';
import ToDoList from './components/todoList';

const App = () => {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const editToDo = todos.find((i)=>i.id===editId);
      const updatedToDo = todos.map(
        (t) => t.id === editToDo.id 
        ? (t = { id: t.id, todo}) 
        : {id: t.id, todo: t.todo}
        );
        setToDos(updatedToDo);
        setEditId(0);
        setToDo("");
        return;
    }

    if(todo !== ''){
      setToDos([{id:`${todo}-${Date.now()}` , todo}, ...todos]);
      setToDo("");
    }
  }

  const handleDelete = (id) => {

    const delToDo = todos.filter((to) => to.id !== id);
    setToDos([...delToDo]);
  }

  const handleEdit = (id) => {

    const editToDo = todos.find((i) => i.id === id);
    setToDo([editToDo.todo]);
    setEditId(id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>

        <ToDoForm handleSubmit={handleSubmit} todo={todo} setToDo={setToDo} editId={editId} />

        <ToDoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />

      </div>
    </div>
  )
}

export default App
