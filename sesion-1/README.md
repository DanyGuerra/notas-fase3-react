# Sesión 1 - Fundamentos básicos en React

## Introduccion
La web tradicionalmente se ha construido en HTML, Javascript y CCS, separados en distintas carpetas lo que hace que sea complicado escalar y extraer ciertas funcionalidades debido a las dependencias de entre estos lenguajes.

Un dia se crea React y propuso meter todo en un solo paquete llamado **componente**. Esto se propone para poder separar por funcionalidad y no por codigo.

## MVC
Es una arquitectura de software que permite organizar las partes de una aplicacion de la siguiente manera:

- **Modelo:** Los datos de la aplicacion y el acceso a ellos
- **Vista:** La interfaz con la que interactúa el usuario con los datos entregados por el modelo.
- **Controlador**: La lógica de negocio, lo que debe de hacer la aplicación. Es el intermediario entre el modelo y vista.

## Qué es React?
React también llamda ReactJS es una librería de Javascript creada por Facebook y pupblicada como OpenSource que se diseño para desarrollar aplicaciones SPA (Single Page Aplications).

`Nota: React esta basado en un paradigma llamado programación orientada a componentes en el que cada componente es una pieza con la que el usuario puede interactuar. Estas piezas se crean usando una sintaxis llamada JSX.`

## Qué es JSX?
**JSX** es un lenguaje, el cual es una extensión al lenguaje **JavaScript** que permite agregar etiquetas XML en un fragmento de código JavaScript. Esto nos permite definir el código HTML de nuestro componente directamente en el archivo Javascript.

Debido a que los navegadores no entienden JSX es necesario usar Babel para traducir este código a JavaScript regular.

JSX es ahorra mucho tiempo en la creación de componentes, estos componentes son reutilizables y se combinan para crear componententes mayores hasta configurar una web completa.

## Sintaxis básica de React.js

```javascript
import React from 'react' //importando React

const Saludo = ({nombre}) => (  //El objeto {nombre} trae los atributos del componente , Declaracion del componente Saludo (Los componentes van en mayuscula)
  <span>
    {`Hola ${nombre}`}
  </span>

  //Se retorna un unico elemento con sintaxis JSX; dentro de las llaves se escribe JavaScript
)

export default Saludo //Se exporta el componente
```

```javascript
<Saludo nombre = 'Bedu'/> //Se invoca el componente pasandole las props
```

### Virtual DOM (Document Object Model)
El DOM es la representación gráfica de nuestra aplicación. Por lo que cada vez que nuestra aplicación cambia dicha interfaz tambien lo hace. Actualizar el DOM es una tarea costosa en cuanto a rendimientopor lo que entre más cambios de estado mas lento irá nuestra web.

El DOM posee un estructura en forma de árbol, lo que provoca que al modificar un elemento dentro de él todos sus hijos tengan que ser repintados. Lo que hace que sea una tarea costosa.

El virtual DOM es una representación en memoria del DOM real que actúa de intermediario entre el estado de la aplicación y el DOM de la interfaz gráfica que esta viendo el usuario. Cuando se realiza un cambio en cualquiera de los elementos se compara el DOM real con el virutal optimizando este proceso de repintado de la interfaz gráfica ya que renderiza los menos cambios posibles.

React es **unidireccional** lo que significa que el flujo de información a traves de los componentes de React es unidireccional. Cada componente pasa información a sus componentes hijos y no alrevés (A diferencia del framework de Google Angular que lo hace de manera bidireccional)



## Que es un componente
Los componentes son para usar interfaces de usuario, son reutilizables, possen y manejan su propio estado.

`LLamamos estado (state) a las caracteristicas propias de un componente. Por ejemplo, un componente que hace request a un server, puede tener dos estados posibles, pendiente o finalizado`

`Los componentes nacen, crecen, se renderizan y mueren`

Un componente se define como funcion o como class. Cada componente es como una apliación de React mas pequeña que tiene su propia logica y tiene como proposito final mostar (Render) algo.

La filosofia de React es separar el proyecto por piezas de tal manera que el codigo pueda ser reutilizable, por ejemplo, si necesito un botón reutilizo el componente que genera un botón.

`Nota: los props son innmutables y siempre se pasan de componentes superiores a componentes inferiores`

## Creando una aplicacion de REACT
Para crear una aplicacion usando React es necesario usar el comando `npx create-react-app my-app`

Una vez creada la aplicacion corremos el comando `npm start` en la carpeta `my-app` y comenzara a correr la aplicacion de React.

## Children
Para pasarle hijos se hace de la siguiente manera. En este ejemplo le estamos pasando `button` y `h3` como hijos.

```javascript
const StoreItem = ({item, children})=>{
  return(
    <div style={{border: "1px solid grey", borderRadius:10, width: 120}}>
        <h2>{item.title}</h2>
        <img src={item.img} style={{width:'100%'}} alt='imagen'/>
        <p>
          {item.description}
        </p>
        <span> price: {item.price}</span>
        {children}
    </div>
  )
}

const ItemList = ({items})=>{
  return(
    <>
      {items.map(anItem => (
      <StoreItem item = {anItem}>
          <button> Buy </button>
          <h3>Children</h3>
       </StoreItem>
      ))}
    </>
  )
}
```
