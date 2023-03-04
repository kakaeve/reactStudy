import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === "";
const isFiveChar = val => val.trim().length === 5;

const Checkout = props => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const porstalInputRef = useRef();
  const askInputRef = useRef();
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    ask: true,
  });

  const confirmHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = porstalInputRef.current.value;
    const enteredAsk = askInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChar(enteredPostal);
    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
    });
    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      ask: enteredAsk,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>유효한 이름을 넣어주세요!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">주소</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>유효한 주소를 넣어주세요!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" ref={porstalInputRef} />
        {!formInputValidity.postal && <p>유효한 우편번호를 넣어주세요!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="ask">요청사항</label>
        <input type="text" id="ask" ref={askInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button className={classes.submit}>보내기</button>
      </div>
    </form>
  );
};

export default Checkout;
