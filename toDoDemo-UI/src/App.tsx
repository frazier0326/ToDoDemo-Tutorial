
import './App.css'
import { ToDoAddForm } from './components/ToDoAddForm';
import { ToDoTable } from './components/ToDoTable';
import { ToDoModel } from './models/ToDoModel'
import { useEffect, useState } from 'react';
import { fetchTodos, deleteTodo, addTodo} from './services/todoService';

function App() {
  const [todos,setTodos] = useState<ToDoModel[]>([]);

  useEffect(() => {
  fetchTodos()
  .then(setTodos)
    .catch((error) => {
      console.error("There was an error fetching the todos!", error);
    });
}, [todos]);

  // const fetchTodos = async () : Promise<ToDoModel[]> => {
  //   const response = await axios.get<ToDoModel[]>("http://localhost:8080/api/todos");
  //   return response.data;
  // }

  const handleAddToDo = (description:string, assigned:string) => {
    addTodo(description, assigned)
    .then((newTodo) => {
      setTodos([...todos, newTodo]);
    })
    .catch((error) => {
      console.error("There was an error creating the todo!", error);
    });
  };

  const handleDeleteTodo = (todoId: number) => {
    deleteTodo(todoId)
    .then(() => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    })
    .catch((error: any) => {
      console.error("There was an error deleting the todo!", error);
    });
  };


  return (
    <>
     <ToDoTable todos={todos} deleteTodo={handleDeleteTodo}/>
     <ToDoAddForm addTodo={handleAddToDo} />
     
    </>
  )
}

export default App
