import React from "react";
import PropTypes from "prop-types";
import "../css/header.css";
import ShowHide from "./ShowHide";

function Header(props) {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">Hay {props.counter} tareas</h1>
      <ShowHide show={props.show} toggleDone={props.toggleDone} />
    </div>
  );
}

Header.propTypes = {
  counter: PropTypes.number,
};

Header.defaultProps = {
  counter: 0,
};

export default Header;
