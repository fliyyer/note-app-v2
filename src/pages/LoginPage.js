import React from "react";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const LoginPage = ({ loginSuccess }) =>  {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <main className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </main>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;
