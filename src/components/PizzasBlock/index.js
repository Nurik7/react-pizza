import React from "react";
import { useSelector } from "react-redux";
import PizzaBlockItem from "./PizzaBlockItem";

const PizzasBlock = () => {
  const pizzas = useSelector(({ home }) => home.pizzas);

  return (
    <div className="content__items">
      {pizzas.length > 0 &&
        pizzas.map((el) => <PizzaBlockItem key={el.id} {...el} />)}
    </div>
  );
};

export default PizzasBlock;
