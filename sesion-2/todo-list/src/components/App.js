import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    tasks: [
      { id: 1, content: "pasear al perro", done: false },
      { id: 2, content: "correr", done: false },
      { id: 3, content: "correr", done: false },
    ],
  };

  createTodo(todoContent, idParameter) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: todoContent, content: todoContent, done: false },
      ],
    });
  }

  doTask(idParameter) {
    const taskIndex = this.state.tasks.findIndex(
      (item) => item.id === idParameter
    );
    const tasksCopy = [...this.state.tasks];
    tasksCopy[taskIndex] = {
      ...tasksCopy[taskIndex],
      done: !this.state.tasks[taskIndex].done,
    };
    this.setState({ tasks: tasksCopy });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header>
            {" "}
            Hay {this.state.tasks.length} tareas ,{" "}
            {this.state.tasks.filter((task) => !task.done).length} pendientes
          </Header>
          <Form
            createTodo={(value) => {
              this.createTodo(value);
            }}
          />
          <TodoList tasks={this.state.tasks} doTask={(id) => this.doTask(id)} />
        </div>
      </div>
    );
  }
}

export default App;
