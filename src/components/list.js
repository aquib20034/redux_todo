import React, {useState} from "react";
import { editTodo, deleteTodo } from '../actions';
import { useDispatch } from 'react-redux';



const List =({data}) =>{
    const [inputData, setInputData]   = useState();
    const [editState, setEditState]   = useState();
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteTodo(id));
    }

    const handleEdit = (task) =>{
        try{
            if(!task) throw "Empty Field" 
            const payload ={
                title: task,
                id:data.id

            }
            const action = editTodo(payload);   
            dispatch(action);
            setEditState(!editState)

            console.log("payload",payload);
        }catch(error){
            console.log("error", error)
        }
    }


    return (
        <div>
            <div>
                    {data.title}
                    <button onClick={() =>  setEditState(!editState)}> 
                        Edit  
                    </button>
                    {
                        editState 
                            ?
                                <>
                                    <input value={inputData} onChange={(e) =>setInputData(e.target.value)}/>
                                    <button onClick={() =>  handleEdit(inputData)}> 
                                        Update  
                                    </button>
                                </>
                            :
                                <></>
                                


                    }

                    <button onClick={() => handleDelete(data.id)}> 
                        Delete 
                    </button>
            </div>
        </div>
    )
}

export default List