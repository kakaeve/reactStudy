import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const searchPareams = new URL(request.url).searchParams;
  const mode = searchPareams.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "지원하지 않는 모드" }, { status: 422 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const res = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (res.status === 422 || res.status === 401) {
    return res;
  }

  if (!res.ok) {
    throw json({ message: "인증되지 않은 유저입니다." }, { status: 500 });
  }

  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expration = new Date();
  expration.setHours(expration.getHours() + 1);
  localStorage.setItem("expiration", expration.toISOString());

  return redirect("/");
}
