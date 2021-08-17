import Menu from "./components/Menu";
import Product from "./components/Product";
import NewArrival from "./components/NewArrival";

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage:`url("${process.env.PUBLIC_URL}/assets/img/bg.jpg")`,
        backgroundSize:`cover`
        }}>
       <Menu />
       <section className="main-section">
         <Product />
         <NewArrival />
       </section>
    </div>
  );
}

export default App;
