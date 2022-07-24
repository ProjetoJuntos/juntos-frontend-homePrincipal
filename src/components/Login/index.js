import React from "react";
import { useState } from 'react';
import juntos_logo from '../../img/juntos_logo.png';
import style from '../../css/loginStyle.module.css';
import authService from "../../services/auth.service";

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  sendLogin = async (event) => {
    event.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      let res = await authService.authenticate(data)
      console.log("res", res.data)
      authService.setLoggedUser(res.data)
    } catch (error) {
      console.log("error", error)
      alert("Email ou senha incorretos")
    }
  }

  render() {
    return (
      <div id='login'>
      <div className={style.container}>
        <div className={style.containerLogin}>
          <div className={style.wrapLogin}>
            <form onSubmit={this.sendLogin} className={style.loginForm}>
              <span className={style.loginFormTitle}> Bem vindo </span>

              <span className={style.loginFormTitle}>
                <img src={juntos_logo} alt="Juntos Logo" />
              </span>

              <div className={style.wrapInput}>
                <input
                  className={style.input}
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <span className={style.focusInput} data-placeholder="Email"></span>
              </div>

              <div className={style.wrapInput}>
                <input
                  className={style.input}
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
}

export default Login;