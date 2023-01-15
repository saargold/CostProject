import React, { useRef } from 'react'

const ProductInput = (props) => {

    const itemNameRef = useRef();
    const itemSumRef = useRef();
    const itemCategoryRef = useRef();

    const onAddTask  =async () =>{
        let todoItem={
            name: itemNameRef.current.value,
            sum: itemSumRef.current.value,
            category:itemCategoryRef.current.value
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
            <option value="Drink">Drink</option>
            <option value="Food">Food</option>
            <option value="Shoes">Shoes</option>
            </select>
       <div className='my-3 text-center'>
        <button className='btn btn-success me-2' onClick={onAddTask}>Add Task</button>


      </div>
    </div>
  )
}

export default ProductInput
