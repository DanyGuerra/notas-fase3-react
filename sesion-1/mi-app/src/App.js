import "./styles.css"
import Footer from './footer';
import Header from './header';
import Content from './content'

function App(){
  return (
    <div className="layout">
      <Header MyNiceColor="coral"/>
      <Content/>
      <Footer year="2022"/>
    </div>
  );
}

export default App;
