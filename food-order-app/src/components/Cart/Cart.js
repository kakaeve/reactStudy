import React, { useContext } from "react";
import Modal from "../UI/Modal";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `￦${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 가격</span>
        <sapn>{totalAmount}</sapn>
      </div>
      <div className={classes.actions}>
        <button className={classes["bitton--alt"]} onClick={props.onClose}>
          닫기
        </button>
        {hasItems && <button className={classes.order}>주문하기</button>}
      </div>
    </Modal>
  );
};

export default Cart;
