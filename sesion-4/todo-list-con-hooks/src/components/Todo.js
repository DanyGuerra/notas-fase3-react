import React from "react";
import PropTypes from "prop-types";
import "../css/Todo.css";
import Checkmark from "./Checkmark";

// class Todo extends React.Component {
function Todo(props) {
  // render () {
  return (
    // <div className={`list-item ${this.props.done ? 'done' : ''}`}>
    <div className={`list-item ${props.done ? "done" : ""}`}>
      {/* {this.props.title} */}
      {props.title}
      <div className="is-pulled-right">
        <Checkmark
          // toggleFn={this.props.toggleFn}
          toggleFn={props.toggleFn}
          // done={this.props.done}
          done={props.done}
        />
        <button
          className="delete is-pulled-right"
          // onClick={e => this.props.deleteFn(e)}
          onClick={(e) => props.deleteFn(e)}
        />
      </div>
    </div>
  );
  // }
}

Todo.propTypes = {
  deleteFn: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
};

export default Todo;
