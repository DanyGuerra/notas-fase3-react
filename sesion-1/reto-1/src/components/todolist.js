const itemsTodo = [{
    title: "Esta es una actividad a realizar",
    status: false
  },{
    title: "Lavar la ropa",
    status: true
  },{
    title: "Sacar a pasear al perro",
    status: false
  },{
    title: "Mandar correo a la division",
    status: true
  },{
    title: "Agendar cita con el Doc",
    status: false
  },{
    title: "Ir al mercado a comprar el mandado",
    status: true
  },{
    title: "Pagar la luz",
    status: false
  }

]

const ItemsList = ({items})=>{
  return(
    <>
      {items.map(anItem => (
        <div className = "item">
          <div className = "item-title">{anItem.title}</div>
          <div className = "item-status" style = { {backgroundColor: anItem.status ? 'green' : 'red'}}>{anItem.status ? 'Realizado' : 'Pendiente'}</div>
        </div>
      ))}
    </>
  )
}

const Todolist = () =>{
  return (
   <div className="todo-items">
     <ItemsList items = {itemsTodo}/>
   </div>
  )
}

export default Todolist