import React from 'react'
import "../css/Todo.css"


//Usando funcion

// function Todo(props) {
//   return(
//     <div>{props.task}
//       <button style={{ height: 15, width: 10 }}>

//       </button>
//     </div>
//   )
// }

//Usando clase con la clase podemos usar estados

class Todo extends React.Component {

  state = {
    done: false,
    isChecked: false
  }

  render() {
    return (
      <div className={`list-item ${this.state.done ? 'done' : '' }`}>
        {this.props.task}

        <button
          onClick={()=>{
            // this.setState({done: !this.state.done})
            this.setState((prevState)=>({done:!prevState.done})) //Usando Arrow function se obtiene el estado previo se puede hacer de estas dos maneras
          }}
          style={{ height: 15, width: 10 }}
        />

        {/* <input
          type="checkbox"
          checked={this.state.isChecked}
          onClick={()=>{
            this.setState({
              isChecked: !this.state.isChecked
            })
          }}
        /> */}

      </div>
    );
  }
}

export default Todo