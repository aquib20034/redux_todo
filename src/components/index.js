import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo, deleteAll} from "../actions/index";
import List from "./list";
import { v4 as uuid} from 'uuid';



const Todo  = () =>{
    const [inputData, setInputData] = useState();

    const list = useSelector((val) =>{
        return val.todoReducer.todoList
    }) 

    const dispatch = useDispatch();
    const handleTodo = (task) =>{
        try{
            if(!task) throw "Empty Field" 
            const payload ={
                title: task,
                id:uuid()

            }
            const action = addTodo(payload);   
            dispatch(action);

            console.log("payload",payload);
        }catch(error){
            console.log("error", error)
        }
    }
    
    const handleDeleteAll = ()=>{
        dispatch(deleteAll());
    }

    console.log("list", list);
    return (
        <div>
            <div>
                <input value={inputData} onChange={(e) =>setInputData(e.target.value)}/>
                <button onClick={()=>handleTodo(inputData)}> Add Todo </button>
                <button onClick={()=>handleDeleteAll(inputData)}> Delete All </button>
            </div>
            {
                list.map((item) =>{
                    return(
                        <List data={item} />
                    )
                })
            }
        </div>
    )
}

export default Todo