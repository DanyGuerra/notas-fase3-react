// import Star from './star.png';


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

const ItemList = ({items, children})=>{
  return(
    <>
      {items.map(anItem => (
      <StoreItem item = {anItem}>
          <button> Buy </button>
       </StoreItem>
      ))}
    </>
  )
}

const sku = [
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },

  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },

  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },

  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },

  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  },
  {
  title: 'Perrito',
  price:200,
  description: 'un perrito',
  img:'https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg'
  }
]

const Content = () =>{

  return (
    <main className="content">
      <h1>My shopify </h1>
      <p>This is my awesome page for shopping</p>
      <div style={{display: "flex", gap: 10, flexWrap: 'wrap'}}>
        <ItemList items={sku}>
        </ItemList>
      </div>
    </main>
  )
}

export default Content;