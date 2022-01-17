import { Header } from "./components/Header";
import React, { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { useDispatch } from "react-redux";
import { setPizzas } from "./Redux/actions/homeActions";

function App() {
  const dispatch = useDispatch();
  window.test = () => dispatch(setPizzas());
  useEffect(() => {
    dispatch(setPizzas());
  }, []);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path={"/"} component={() => <Home />} />
          <Route exact path={"/cart"} component={() => <Cart />} />
        </div>
      </div>
    </div>
  );
}

export default App;
