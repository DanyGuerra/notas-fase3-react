import React from "react";
import "../css/Todo.css";
class Todo extends React.Component {
  render() {
    return (
      <div className={`list-item ${this.props.task.done ? "done" : ""}`}>
        {this.props.task.content}

        <input
          type="checkbox"
          checked={this.props.done}
          onClick={() => this.props.doTask(this.props.task.id)}
        />
      </div>
    );
  }
}

export default Todo;
