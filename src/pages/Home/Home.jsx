import React from "react";
import { Categories } from "../../components/Categories";
import { SortPopup } from "../../components/SortPopup";
import PizzaBlock from "../../components/PizzaBlock";

export const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
        <SortPopup
          items={[
            { type: "popularity", name: "популярности" },
            { type: "price", name: "цене" },
            { type: "alphabet", name: "алфавиту" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.length > 0 &&
          pizzas.map((el) => <PizzaBlock key={el.id} {...el} />)}
      </div>
    </div>
  );
};
