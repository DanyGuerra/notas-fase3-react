import React, {Component} from "react";
import Header from "./Header"
import Form from "./Form"
import TodoList from "./TodoList"

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header/>
        <Form/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
