import axios from "axios";
import { ToDoModel } from "../models/ToDoModel";

const BASEAPIURL = "http://localhost:8080/api";

export const fetchTodos = async () : Promise<ToDoModel[]> => {
    try {
        const response = await axios.get<ToDoModel[]>(`${BASEAPIURL}/api/todos`);
        return response.data;
    }catch (error) {
        console.error("There was an error fetching the todos!", error);
        throw error;
    }
};

export const addTodo = async (
    description: string,
    assigned: string
) : Promise<ToDoModel> => {
    try {
        const response = await axios.post<ToDoModel> (
            `${BASEAPIURL}/api/todos/new`,
            null,
            {
                params: {description, assigned},
            }
        );
        return response.data;
    }catch (error) {
        console.error("There was an error creating the todo!", error);
        throw error;
    }
};

export const deleteTodo = async (todoId: number): Promise<void> => {
    try {
        await axios.post(`${BASEAPIURL}/todos/delete`, null, {
            params: {todoId},
        }); 
    }catch (error) {
        console.error("There was an error deleting the todo!", error);
    }
};
