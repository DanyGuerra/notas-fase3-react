import React from "react";
import PropTypes from "prop-types";
import "../css/form.css";

// class Form extends React.Component {

function Form(props) {
  // state = { value: '' }
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addTaskFn(this.state.value);
    props.addTaskFn(value);
    // this.setState({ value: '' });
    setValue("");
  };

  // render() {
  return (
    // <form onSubmit={this.handleSubmit} >
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Agrega una tarea"
        // onChange={this.handleChange}
        onChange={handleChange}
        // value={this.state.value}
        value={value}
      />
      <button className="button">Enviar</button>
    </form>
  );
  // };
}

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired,
};

export default Form;
