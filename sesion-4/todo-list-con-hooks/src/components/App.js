import React from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "../css/App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setTodos([
      { title: "Sesión 1 (JSX)", done: true },
      { title: "Sesión 2 (Estado y propiedades)", done: true },
      { title: "Sesión 3 (Ciclo de vida)", done: true },
      { title: "Sesión 4 (Hooks)", done: false },
      { title: "Sesión 5 (Hooks)", done: false },
      { title: "Sesión 6 (Rutas)", done: false },
      { title: "Sesión 7 (PWA)", done: false },
      { title: "Sesión 8 (Material UI)", done: false },
    ]);
  }, []);

  const handleClickDelete = (e, index) => {
    const t = [...todos];
    t.splice(index, 1);
    setTodos(t);
  };

  const handleClickToggleDone = (e, index) => {
    const t = [...todos];
    todos[index].done = !todos[index].done;
    setTodos(t);
  };

  const addTask = (title) => {
    const exists = todos.find((e) => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return;
    }

    setTodos(todos.concat([{ title, done: false }]));
  };

  const filtered = todos.filter((e) => !e.done || e.done === show);

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header counter={filtered.length} show={show} toggleDone={setShow} />
        <TodoList
          tasks={filtered}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={addTask} />
      </div>
    </div>
  );
}

export default App;
