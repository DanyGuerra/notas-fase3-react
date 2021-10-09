# Sesion 2: Estado (State) y Propiedades (Props)
## Propiedades
Son la manera que tienen los componentes de comunicarse entre si. Cualquier componente puede invocar a otro al que podemos definir como su hijo y pasarle propiedades que conformaran datos que este va a recibir y poder gestionar de manera interna.

## Estado
Se situa dentro del componente y influye tambien en la salida, en forma de vista que acabara devolviendo dicho componente. El componente se puede apoyar en este estado para interacciones, tanto por parte del usuario con la propia vista, como por parte de la lógica interna que hayamos podido definir para dicho componente. El estado puede ser de dos tipos.
  - **Estado de componente:** cada componente tiene su propio estado que puede compartir solo a sus componetes hijos.
  - **Estado global de la apliacion:** informacion del estado de todos los componentes por medio de la cual estos puden comunicarse.

## ¿Qué es this.state?
Es una variable de class (disponible en toda la clase que usa esto) que necesita declarar e inicializar dentro del método del constructor de clases. React.js volverá a representar el DOM completo cada vez que actualice esa variable en particular.

## ¿Debería usar Function o Class?

¡Ambos! Depende de cuán complejo sea su componente:

- Las funciones son super simples y pequeñas pero muy limitadas, trate de usarlas siempre a menos que esté obligado a usar una Clase.
- Las clases son para componentes más grandes que requieren más lógica. Tienen un estado local (this.state) y métodos de ciclo de vida de componentes.

`Nota:` La unica diferencia entre usar una clase y usar una función es que a la clase pueden asignarle estados y a las funciones no, ademas en el return en una clase es necesario especificar el metodo Render().

`Nota:` Es mejor asignar un componente usando clase aunque un componente no use estados es mejor definirlo con una clase por si en un futuro es necesario asignarle estados.

### Definicion de un componente usando clase y funcion

#### Usando funcion

```javascript
function Todo(props) {
  return(
    <div>{props.task}</div>
  )
}
```
#### Usando clase
Definiendo un componente como clase pueden asignarle estados al componente.

```javascript
import React from 'react'

class Todo extends React.Component {

  state = {
    done: false,
    isChecked: false
  }

  render() {
    return (
      <div>{this.props.task}</div>
    );
  }
}
```


## Eventos en React

Evento en Javascript

```javascript
  <div onclick="handleClick()">click me</div>
  function handleClick() {
    alert('clicked');
    return false:
  }

```

Para hacer este evento en React tenemos que hacer estos cambios:

- El nombre del evento tiene que ser camelCase y no minúscula.
- Al evento se le pasa la función y no una cadena de texto.
- En react si quieres prevenir un comportamiento por defecto o la propagación de un evento debes hacerlo explícitamente llamando los métodos preventDefault() y stopPropagation() respectivamente.
- Y se antepone la palabra on.



```javascript
  <div onClick={handleClick}>click me</div>
  function handleClick(event) {
    alert('clicked');
    event.preventDefault();
    event.stopPropagation();
  }
```

### Eventos sintéticos
En este caso event es un evento sintético de React, en React todos los manejadores de eventos son instancias de SyntheticEvents.

Los eventos sintéticos son una envoltura de los eventos nativos del navegador, por lo que estos eventos cuentan con la misma interfaz de los eventos nativos, como por ejemplo preventDefault() y stopPropagation(), con la ventaja de que todos estos eventos funcionan idénticamente en la mayoría de los navegadores.


## Errores comunes
`Warning: Each child in a list should have a unique "key" prop.`

Es por el metodo `map()` se soluciona pasandole en key el index del map de la siguiente manera, esto para que react sepa que indece del arreglo es y no tenga que repintar todo.

```javascript
function TodoList (){
  return(
    <div className="list-wrapper">
      {tasks.map((task,index)=>(
        <Todo task={task} key={index}/>
      ))}
    </div>
  )
}
```

Se puede solucionar de la siguiente manera, usando el mismo contenido del arreglo pero con la desventaja que si se tiene le mismo contenido marcara un error por usar la misma `key`

```javascript
const tasks = ["Hacer la tarea", "Correr", "Dormir", "Correr"]
function TodoList (){
  return(
    <div className="list-wrapper">
      {tasks.map((task)=>(
        <Todo task={task} key={task}/>
      ))}
    </div>
  )
}
```
En este caso la key `Correr` se repitiria en dos elementos por lo que hay que tener cuidado al usar esta solucion.