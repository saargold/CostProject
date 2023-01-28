const CostItem = (props) => {
    let {name,sum,id,month,year,category}= props.item;

    

  return (

    
    <div className='shadow my-2 p-2'>
    <h4> {name} </h4>
    <span>{sum }</span>

    <span>{ category}</span>
    <span> {month}  / {year}</span>
    </div>
  )
}

export default CostItem