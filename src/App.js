import { Header } from "./components/Header";
import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home/Home";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { connect } from "react-redux";
import { setPizzas as loadPizzas } from "./Redux/actions/homeActions";

function App({ loadPizzas, home }) {
  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    loadPizzas();
  }, []);

  useEffect(() => {
    setPizzasList(home.pizzas);
    // debugger
  }, [home.pizzas]);
  console.log(pizzasList);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path={"/"}
            component={() => <Home pizzas={pizzasList} />}
          />
          <Route exact path={"/cart"} component={() => <Cart />} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { loadPizzas })(App);
