import "../css/TodoList.css"
import Todo from "./Todo"

function TodoList (props){
  return(
    <div className="list-wrapper">
      {props.tasks.map((task,index)=>(
        <Todo task={task} key={index}/>
      ))}
    </div>
  )
}

export default TodoList
