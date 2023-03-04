import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `￦${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async userData => {
    setIsSubmiting(true);
    const res = await fetch(process.env.REACT_APP_END_POINT + "/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    });
    if (!res.ok) {
      throw new Error("잘못 보내짐");
    }
    setIsSubmiting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        닫기
      </button>
      {hasItems && (
        <button className={classes.order} onClick={orderHandler}>
          주문하기
        </button>
      )}
    </div>
  );

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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>총 가격</span>
        <sapn>{totalAmount}</sapn>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>주문중...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>주문이 완료되었습니다!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onClose}>
          닫기
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmittingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
