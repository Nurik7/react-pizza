import React from 'react';
import classNames from "classnames";

export const CartButton = ({children, className, outline}) => {
  return (
    <button className={classNames('button', className, {
      'button-outline': outline
    })}>
      {children}
    </button>
  );
};