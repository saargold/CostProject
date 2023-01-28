import React, { useRef,useState } from 'react'

export default function FilterData(props) {

    const filterByMonthRef = useRef();
    const filterByYearRef = useRef();
    const filterBtnMonth  =async () =>{
        let param=0;
        if( filterByMonthRef!= null){
            param=filterByMonthRef.current.value;
            await props.addFilterByMonth(param)

            
            
    

        }

    }


    const filterBtnYear  =async () =>{
        let param=0;
        if(filterByYearRef!= null){
            param=filterByYearRef.current.value;
            await props.addFilterByYear(param)
    

        }

    }




  return (
    <div>
      
      <div className='col-lg-6 p-3 mx-auto '>
      
    <input type="text" placeholder='Enter Month Value' className="form-control mb-2 mt-2" ref={filterByMonthRef}/>
    <button className='btn btn-info me-2 text-light mb-2 mt-2"' onClick={filterBtnMonth} >Filter By Month</button>

    <input type="text" placeholder='Enter Year Value' className="form-control mb-2 mt-2" ref={filterByYearRef}/>
    <button className='btn btn-danger me-2 text-light mb-2' onClick={filterBtnYear}>Filter By Year</button>

    </div>

    </div>
  )
}
