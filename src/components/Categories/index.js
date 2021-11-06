import React, {useState} from 'react';

export const Categories = ({items}) => {
  const [active, setActive] = useState(0)
  console.log('rendered')
  return (
    <div className="categories">
      <ul>
        {items.map((el, index) => (
          <li onClick={() => setActive(index)}
              className={active === index ? 'active' : ''}
              key={`${el}_${index}`}>
            {el}
          </li>))}
      </ul>
    </div>
  );
};