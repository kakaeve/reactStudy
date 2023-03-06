import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "에러발생!!";
  let message = "뭔가 잘못되었습니다.";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "페이지를 찾을 수 없습니다.";
    message = "리소스나 자원을 찾을 수 없습니다.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
