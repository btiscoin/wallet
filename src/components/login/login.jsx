import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.scoped.css';
// import '../../public/assets/css/page-login-alt.css'

const Login = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onGoogleLogin = (e) => {
    e.preventDefault();

    auth
      .login("Google")
      .then(console.log); //🌟리턴되는 값 확인하기 위해
  }

  const onLoginWithEmail = (e) => {
    e.preventDefault();
    auth
      .loginWithEmail(email, password)
      .then(console.log);
  }

  const goToHome = userId => {
    navigate("/home", { state: { id: userId } })
    // .push({  //🌞
    //     pathname:'/home',
    //     state:{id:userId},
    // });
  }
  useEffect(() => {
    // auth.js로 가서 onAuthChange 함수를 만들어주자.

    document.body.classList.add("loginPage");
    auth
      .onAuthChange(user => { //🌈
        user && goToHome(user.uid);
      })
      return () => {
        document.body.classList.remove("loginPage");
      }
  });

  return (
    <div className="login">
      <div className="blankpage-form-field">
        <div className="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
          <a className="page-logo-link press-scale-down d-flex align-items-center">
            <img src="assets/img/logo.png" alt="BTIS Wallet" aria-roledescription="logo" />
            <span className="page-logo-text mr-1">BTIS Wallet</span>
          </a>
        </div>
        <div className="card p-4 border-top-left-radius-0 border-top-right-radius-0">
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="username">Email</label>
              <input type="email" id="username" className="form-control" placeholder="email"

                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                type="text" />
              <span className="help-block">
                Your email
              </span>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password" />
              <span className="help-block">
                Your password
              </span>
            </div>
            <div className="form-group text-left">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="rememberme" />
                <label className="custom-control-label" htmlFor="rememberme"> Remember me for the next 30 days</label>
              </div>
            </div>
            <button className="btn btn-default float-right" onClick={onLoginWithEmail}>Login</button>
          </form>

          <button className="btn btn-default float-right" onClick={onGoogleLogin}>Google Login</button>
        </div>
        <div className="blankpage-footer text-center">
          <a onClick={() => navigate("forgot")}><strong>Recover Password</strong></a> | <a onClick={() => navigate("signup")}><strong>Register Account</strong></a>
        </div>
      </div>
      <video poster="assets/img/backgrounds/clouds.png" id="bgvid" playsInline autoPlay muted loop>
        <source src="assets/media/video/cc.webm" type="video/webm" />
        <source src="assets/media/video/cc.mp4" type="video/mp4" />
      </video>
    </div>
  );

  {/* return (
        <div>
            <Header />

            <h1>Login</h1>
            <input
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                type="text"
                placeholder="email"
            />
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder="password"
            />
            <button onClick={onLoginWithEmail}>Login</button>
            <ul>
                <li><button onClick={onLogin}>Google</button></li>
            </ul>
        </div>
    ); */}
};

export default Login;
