import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Forgot = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();
  const onForgot = (e) => {
    e.preventDefault();

    auth
      .forgotPassword(email)
      .then(() => {
        alert('이메일을 보냈습니다.');
        navigate("/");
      }); //🌟리턴되는 값 확인하기 위해
  }

  return (
    <div>
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
            </div>
            <button className="btn btn-default float-right" onClick={onForgot}>Send Email</button>
          </form>
        </div>
      </div>
      <video poster="assets/img/backgrounds/clouds.png" id="bgvid" playsInline autoPlay muted loop>
        <source src="assets/media/video/cc.webm" type="video/webm" />
        <source src="assets/media/video/cc.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Forgot;
