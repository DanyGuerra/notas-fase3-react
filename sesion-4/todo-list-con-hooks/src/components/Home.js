import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <div className="card frame">
      <Header
        counter={props.todos.length}
        show={props.show}
        toggleDone={props.setShow}
      />
      <TodoList
        tasks={props.todos}
        show={props.show}
        toggleFn={props.handleClickToggleDone}
        deleteFn={props.handleClickDelete}
      />
      <Form addTaskFn={props.addTask} />
    </div>
  );
};

Home.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  handleClickToggleDone: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};
export default Home;
