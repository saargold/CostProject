import React, { useRef,useState } from 'react'
import CostItem from './CostItem'
import FilterData from './FilterData';

export default function CostsList(props) {
  const [checked, setChecked] = useState(false); 
  const [filterMonth, setFilterMonth] = useState(null); 
  const [filterYear, setFilterYear] = useState( null); 
  const [isFilterMonth, setIsFilterMonth] = useState(false); 
  const [isFilterYear, setIsFilterYear] = useState(false); 


  const handleChange = () => { 
    
    setChecked(!checked); 
    
  }; 

  const addFilterByMonth =  (_monthFilter)=>{
    console.log(_monthFilter)
    if(_monthFilter!= null){
      setFilterMonth(_monthFilter)
      setIsFilterMonth(true)
      setIsFilterYear(false)
      setChecked(false)
    }

}

const addFilterByYear =  (_yearFilter)=>{

  console.log(_yearFilter)
  if(_yearFilter!= null){
    setFilterYear(_yearFilter)
    setIsFilterYear(true)
    setIsFilterMonth(false)
    setChecked(false)


  }

}




  const filterData = props.items_ar.filter(item => {
    if(isFilterMonth){
      return item.month == filterMonth;
    }
    else{
      console.log(filterYear)
      return item.year == filterYear;

    }

      
  });

  return (
    
    <div>
        <div className="form-check">
  <input className="form-check-input" type="checkbox"  onChange={handleChange} id="defaultCheck1"/>
  <label className="form-check-label">
  Filter Data
  </label>
</div>
    <p>
        {checked ? <FilterData addFilterByMonth={addFilterByMonth}  addFilterByYear={addFilterByYear}/>    : ' '}
      </p> 
      {isFilterMonth? <h2> Filter By Month {filterMonth}</h2> : ''}
      {isFilterYear? <h2> Filter By Year {filterYear}</h2> : ''}

      {!isFilterMonth && !isFilterYear?<h2 className='display-4'>Costs you added:</h2>: '' }



      {isFilterMonth||isFilterYear ?
        filterData.map(item =>{
  return(
      <CostItem  sortByMonth={props.sortByMonth} key={item.id} item={item}/>

  )
}): props.items_ar.map(item =>{
  return(
      <CostItem  sortByMonth={props.sortByMonth} key={item.id} item={item}/>

  )
})

      }
    </div>
  )
}
