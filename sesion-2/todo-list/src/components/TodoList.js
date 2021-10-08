import "../css/TodoList.css"
import Todo from "./Todo"

const tasks = ["Hacer la tarea", "Correr", "Dormir", "Sacar a pasear al perro", "Ir al mercado", "Mandar correo", "Recoger las fotos", "Agendar cita con el Doc", "Pagar la luz"]

function TodoList (){
  return(
    <div className="list-wrapper">
      {tasks.map((task)=>(
        <Todo task={task}/>
      ))}
    </div>
  )
}

export default TodoList
