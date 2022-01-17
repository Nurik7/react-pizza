import React, { useCallback } from "react";
import { Categories } from "../../components/Categories";
import { SortPopup } from "../../components/SortPopup";
import PizzaBlock from "../../components/PizzasBlock";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/actions/filtersActions";
import { categories } from "../../utils/constants";

export const Home = () => {
  const dispatch = useDispatch();
  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories onChooseCategory={onSelectCategory} items={categories} />
        <SortPopup
          items={[
            { type: "popularity", name: "популярности" },
            { type: "price", name: "цене" },
            { type: "alphabet", name: "алфавиту" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaBlock />
    </div>
  );
};
