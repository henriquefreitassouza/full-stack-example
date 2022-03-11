import React, { useState } from "react";
import { login } from "../../api";

function Login({ onLoginSuccessful }) {
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);

    const loginResult = await login();

    if (!loginResult) setHasError(true);
    else {
      const { name, token } = loginResult;

      localStorage.setItem("name", name);
      localStorage.setItem("token", token);

      onLoginSuccessful();
    }
  }

  return (
    <div>
      <strong>Login</strong>
      <p>Clique no botão para recuperar seu token</p>
      <form onSubmit={onSubmit}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
