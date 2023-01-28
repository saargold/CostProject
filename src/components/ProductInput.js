import React, { useRef,useState } from 'react'
import { v4 as uuid } from 'uuid';
import { IconName,BiDrink} from "react-icons/bi";

const ProductInput = (props) => {

    const itemNameRef = useRef();
    const itemSumRef = useRef();
    const itemCategoryRef = useRef();
    let newDate = new Date()
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)

    const onAddTask  =async () =>{
        let todoItem={
            id:small_id,
            name: itemNameRef.current.value,
            sum: itemSumRef.current.value,
            category:itemCategoryRef.current.value,
            month:month,
            year:year
        }
        await props.addTask(todoItem)
        

    }
  return (
    <div>
      <h3>Item Name:</h3>
      <input ref={itemNameRef} type="text" className='form-control' />
      <h3>Item Sum:</h3>
      <input  ref={itemSumRef} type="text"  className='form-control' /> 
                  
     <h3>Choose Category</h3>
     <select ref={itemCategoryRef}  className='form-select'>
    <option  value="Drink">Drink </option> 
            <option value="Food">Food</option>
            <option value="Shoes">Shoes</option>
            </select>
       <div className='my-3 text-center'>
        <button className='btn btn-success me-2' onClick={onAddTask}>Add Task</button>
        
        <button className='btn btn-danger' onClick={
            () =>{  
            {props.removeAllTasks()}}}>Reset  Task</button>
 
      </div>
    </div>
  )
}

export default ProductInput
