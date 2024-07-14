import { ToDoModel } from "../models/ToDoModel";

interface ToDoTableProps {
    todos:ToDoModel[];
    deleteTodo: (id:number) => void;
}

export const ToDoTable : React.FC<ToDoTableProps> = ({todos, deleteTodo}) => {

        return(
            <table className="table table-hover table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                 <tr key={todo.id}>
                    <th scope="row">{todo.id}</th>
                    <th>{todo.description}</th>
                    <th>{todo.assigned}</th>
                    <th>
                        <button className="btn btn-danger" onClick={() =>deleteTodo(todo.id)}>Delete</button>
                    </th>
               </tr>
              ))}
            </tbody>
          </table>
        );
}