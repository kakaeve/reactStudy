import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const endPoint = process.env.REACT_APP_END_POINT + "/cart.json";

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(endPoint);
      if (!res.ok) {
        throw new Error("데이터를 못받았어요");
      }
      const data = await res.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "에러",
          message: "정보 받기 실패",
        })
      );
    }
  };
};

export const sendCartData = cartData => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "보내는중",
        message: "카트에 정보를 보내는 중",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(endPoint, {
        method: "PUT",
        body: JSON.stringify({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
        }),
      });
      if (!res.ok) {
        throw new Error("전송 실패");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "성공",
          message: "전달 성공!",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "에러",
          message: "전달 실패...ㅠㅜ",
        })
      );
    }
  };
};
