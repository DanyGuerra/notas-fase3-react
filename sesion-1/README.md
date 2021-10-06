# Sesión 1 - Fundamentos básicos en React

Para crear una aplicacion usando React es necesario usar el comando `npx create-react-app my-app`

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
