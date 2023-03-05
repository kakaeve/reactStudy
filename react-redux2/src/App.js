import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";

import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "보내는중",
          message: "카트에 정보를 보내는 중",
        })
      );
      const res = await fetch(process.env.REACT_APP_END_POINT + "/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!res.ok) {
        throw new Error("전송 실패");
      }
      const resData = res.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "성공",
          message: "전달 성공!",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(e => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "에러",
          message: "전달 실패...ㅠㅜ",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
