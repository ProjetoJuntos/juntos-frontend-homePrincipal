import React from "react";
import { useState } from 'react';
import juntos_logo from '../../img/juntos_logo.png';
import style from '../../css/loginStyle.module.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id='login'>
    <div className={style.container}>
      <div className={style.containerLogin}>
        <div className={style.wrapLogin}>
          <form className={style.loginForm}>
            <span className={style.loginFormTitle}> Bem vindo </span>

            <span className={style.loginFormTitle}>
              <img src={juntos_logo} alt="Juntos Logo" />
            </span>

            <div className={style.wrapInput}>
              <input
                className={style.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={style.focusInput} data-placeholder="Email"></span>
            </div>

            <div className={style.wrapInput}>
              <input
                className={style.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={style.focusInput} data-placeholder="Password"></span>
            </div>

            <div className={style.containerLoginFormBtn}>
              <button className={style.loginFormBtn}>Login</button>
            </div>

            <div className={style.textCenter}>
              <span className={style.txt1}>Não possui conta? </span>
              <a className={style.txt2} href="#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;