import React from "react";
import PropTypes from "prop-types";
import "../css/Todo.css";
import Checkmark from "./Checkmark";
import { useHistory } from "react-router";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// class Todo extends React.Component {
function Todo(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/details/${props.id}`);
  };

  return (
    <div className={`list-item ${props.done ? "done" : ""}`}>
      <span onClick={handleClick}>{props.title}</span>
      <div className="is-pulled-right">
        <Checkmark
          // toggleFn={this.props.toggleFn}
          toggleFn={props.toggleFn}
          // done={this.props.done}
          done={props.done}
        />

        <IconButton aria-label="delete" onClick={(e) => props.deleteFn(e)}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
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
