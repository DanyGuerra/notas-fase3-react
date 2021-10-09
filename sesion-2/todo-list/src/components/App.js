import React, {Component} from "react";
import Header from "./Header"
import Form from "./Form"
import TodoList from "./TodoList"

class App extends Component{
  state = {
    tasks: []

  }

  createTodo(todoContent){
    // console.log(this)
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, todoContent]
    })) // ESet state tiene un estado previo

  }

  render(){
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header> Hay {this.state.tasks.length} tareas</Header>
          <Form onCreateTodo={(value)=>{
            this.createTodo(value)
            }}/>
          <TodoList tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}

export default App;
