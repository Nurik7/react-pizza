import React, {useState} from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";


const PizzaBlock = ({imageUrl, name, price, sizes, types}) => {
  const [activeType, setActiveType] = useState(types[0])
  const pizzaTypes = ['тонкое', 'традиционное']
  const [activeSize, setActiveSize] = useState(sizes[0])
  const pizzaSizes = [26, 30, 40]
  // debugger
  return (
    <div className="pizza-block">
      <img
        loading="lazy"
        className="pizza-block__image"
        src={imageUrl}
        alt={name}
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((type, index) =>
            <li
              key={index}
              className={classNames({
                active: index === activeType,
                disabled: !types.includes(index)
              })} onClick={() => setActiveType(index)}>
              {type}
            </li>)}
        </ul>
        <ul>
          {pizzaSizes.map((el, index) =>
            <li
              className={classNames({
                active: index === activeSize,
                disabled: !sizes.includes(el)
              })}
              onClick={() => setActiveSize(index)}
              key={index}>
              {el} см.
            </li>)}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} руб.</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};


PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default PizzaBlock;