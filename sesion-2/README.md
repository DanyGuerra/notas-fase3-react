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