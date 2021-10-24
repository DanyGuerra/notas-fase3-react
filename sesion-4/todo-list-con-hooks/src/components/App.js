import React from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "../css/App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    // setTodos([
    //   { title: "Sesión 1 (JSX)", done: true },
    //   { title: "Sesión 2 (Estado y propiedades)", done: true },
    //   { title: "Sesión 3 (Ciclo de vida)", done: true },
    //   { title: "Sesión 4 (Hooks)", done: false },
    //   { title: "Sesión 5 (Hooks)", done: false },
    //   { title: "Sesión 6 (Rutas)", done: false },
    //   { title: "Sesión 7 (PWA)", done: false },
    //   { title: "Sesión 8 (Material UI)", done: false },
    // ]);
    const URL = "http://localhost:4000/todos";
    const getData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setTodos(data);
    };

    getData();
  }, []);

  const handleClickDelete = (e, index) => {
    const t = [...todos];
    t.splice(index, 1);
    setTodos(t);
  };

  const handleClickToggleDone = (e, index) => {
    const el = todos.find((e) => e.id === index);

    const value = !el.done;
    console.log(value);

    try {
      fetch(`http://localhost:4000/todos/${el.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: value }),
      });

      const t = [...todos];
      todos[index].done = !todos[index].done;
      setTodos(t);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = (title) => {
    const exists = todos.find((e) => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return;
    }

    setTodos(todos.concat([{ title, done: false }]));
  };

  // const filtered = todos.filter((e) => !e.done || e.done === show);

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header counter={todos.length} show={show} toggleDone={setShow} />
        <TodoList
          tasks={todos}
          show={show}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={addTask} />
      </div>
    </div>
  );
}

export default App;
