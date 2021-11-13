import {Header} from "./components/Header";
import React, {useEffect, useState} from "react";
import {Home} from "./pages/Home/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import axios from "axios";


function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    async function getPizzas() {
      const response = await axios.get('http://localhost:3000/db.json')
      setPizzas(response.data.pizzas)
    }

    getPizzas().then()
  }, [])
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path={'/'} component={() => <Home pizzas={pizzas}/>}/>
          <Route exact path={'/cart'} component={() => <Cart/>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
