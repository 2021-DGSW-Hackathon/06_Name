import React, { useState } from "react";
import "./Login.scss";
import { IoIosArrowForward } from "react-icons/io";
import MainPic from "../../assets/MainPic.png";
import axios from "axios";
import { SERVER } from '../../config/config.json';
import Cookies from "js-cookie";
import Swal from 'sweetalert2';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [check, setCheck] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
  }

  const onCheck = () => {
    setCheck(!check);
  }

  const Login = async () => {
    try {
      const res = await axios.post(`${SERVER}/auth/signin`, {
        id,
        pw
      });
      if (res.data.status === 200) {
        Swal.fire({
          title: '성공',
          text: '로그인 성공',
          icon: 'success'
        });
      }
      if (check === true && res.data.status === 200) {
        Cookies.set('authorization', res.data.data.token, 7);
        sessionStorage.setItem('authorization', res.data.data.token);
      } else if (res.data.status === 200) {
        sessionStorage.setItem('authorization', res.data.data.token);
      }
    } catch (err) {
      if (err.response.status === 401) {
        Swal.fire({
          text: '실패',
          text: '로그인에 실패했어요',
          icon: 'error'
        });
      }
    }
  }

  const token = sessionStorage.getItem('authorization');

  return (
    <>
      <div>
        <img src={MainPic} alt="subPic" className="MainPic" />
        <div className="LoginForm">
          <div className="LoginInfo">
            <span className="LoginSpan" >ID</span> <br />
            <input className="LoginId" type="text" onChange={onChangeId} value={id} /> <br />
            <span className="LoginSpan">Password</span> <br />
            <input className="LoginPw" type="password" onChange={onChangePw} value={pw} /> <br />
            <input className="LoginCb" type="checkbox" onClick={onCheck} />
            <span className="rememberSpan">로그인 기억하기</span> <br />
            <button className="LoginBtn" onClick={Login}>로그인</button> <br />
            <span className="noInfo">아직 계정이 없다면</span>
            <span className="loginIcon">
              <IoIosArrowForward />
            </span>
            <a className="registerBtn" href="/register">
              회원가입
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
