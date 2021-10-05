import "./styles.css"
import Footer from './footer';
import Header from './header';

function App(){
  return (
    <div classname="layout">
      <Header MyNiceColor="gray"/>
      <main> My page Shop</main>
      <Footer year="2022"/>
    </div>
  );
}

export default App;
