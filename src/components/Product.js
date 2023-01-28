import React ,{useState,useEffect} from 'react'
import ProductInput from './ProductInput';
import {sortBy} from 'lodash'
import CostsList from './CostsList';
import FilterData from './FilterData';


export default function Product() {

    let [items_ar,setItemAr]=useState([]);
    useEffect(()=>{
        // בודקים אם קיים בהתחלה משימות בלוקאל 
        if(localStorage["itemsTests"]){
            // אם קיים מגדירים אותו בסטייס של הטאסק
            setItemAr(JSON.parse(localStorage["itemsTests"]))
        }

    },[])
    const addTask =  (_itemTask)=>{
      let sort_ar = [...items_ar,_itemTask];
       sort_ar=sortBy(sort_ar,"category");
       saveLocal(sort_ar)
      // מוסיף את המערך הקודם ומוסיף את המשימה החדשה

  }
  const saveLocal = (_ar) =>{
     localStorage.setItem("itemsTests",JSON.stringify(_ar));
     setItemAr(_ar)
    
}
const removeAllTasks =()=>{
  saveLocal([])
}

const sortByMonth =(_id)=>{
  let temp_ar = items_ar.filter(item =>item.name == _id);
  saveLocal(temp_ar)
}



  return (

    <div className='container'>
    <div  className='col-lg-6 p-3 mx-auto '>
    <ProductInput addTask={addTask} removeAllTasks={removeAllTasks} />




    <CostsList items_ar={items_ar} sortByMonth={sortByMonth}  />

      </div>
    </div>
  )
}
