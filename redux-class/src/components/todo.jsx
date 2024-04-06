import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../features/todo/todoSlice";
import AddForm from "./AddForm";

export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler=(id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    }

    return(
        <>
        <h2>Todo List App</h2>
        <AddForm/>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}&nbsp;&nbsp;
                <button onClick={()=> clickHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    );
}