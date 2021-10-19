# Hooks y useState()

- Stateful (Componentes de clase)

  ```javascript
  class Form extends React.Component {
    state = { value: "" };

    handleChange = (e) => {
      this.setState({ value: "hola" });
    };
  }
  ```

- Stateless(No tienen estado) pero con hooks se pueden usar con estados.

  ```javascript
  function Example() {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [value, setValue] = useState(0);

    return (
      <div>
        <p>You clicked {value} times</p>
        <button onClick={() => setCount(value + 1)}>Click me</button>
      </div>
    );
  }
  ```
