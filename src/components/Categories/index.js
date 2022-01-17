import React, { memo, useState } from "react";

export const Categories = memo(({ items, onChooseCategory }) => {
  const [active, setActive] = useState(0);
  const setCategory = (index) => {
    setActive(index);
    onChooseCategory(index);
  };

  console.log('RENDER CATEGORIES')
  return (
    <div className="categories">
      <ul>
        {items.map((el, index) => (
          <li
            onClick={() => setCategory(index)}
            className={active === index ? "active" : ""}
            key={`${el}_${index}`}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
})
