import React, { useState } from "react";
import WhiteLogo from "../../assets/WhiteLogo.png";
import SubPic from "../../assets/SubPic.png";
import "./Register.scss";
import axios from "axios";
import { SERVER } from '../../config/config.json';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const history = useHistory();

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  }

  const Register = async () => {
    try {
      const res = await axios.post(`${SERVER}/auth/signup`, {
        id,
        pw,
        name,
        nickName,
      });
      if (res.data.status === 200) {
        Swal.fire({
          title: '성공',
          text: '회원가입 성공',
          icon: 'success'
        });
      }
      history.push('/');
    } catch (err) {
      if (err.response.status === 401) {
        Swal.fire({
          title: '실패',
          text: '이미 존재하는 ID',
          icon: 'error'
        });
      }
    }
  }

  return (
    <>
      <div className="SignUp">
        <img src={WhiteLogo} alt="WhiteLogo" />
        <div className="menu">
          <span className="reg">회원가입</span>
          <a className="home" href="/">
            홈(로그인)
          </a>
        </div>
      </div>
      <img src={SubPic} alt="subPic" className="subPic" />
      <div className="signUp">
        <div className="signUpForm">
          <span className="signUpSpan">회원가입</span>
          <div className="signUpInfo">
            <span className="infoSpan" >이름(본명)</span> <br />
            <input className="infoInput" type="text" placeholder="ex)홍길동" onChange={onChangeName} /> <br />
            <span className="infoSpan">닉네임</span> <br />
            <input className="infoInput" type="text" placeholder="ex)아잉" onChange={onChangeNickName} /> <br />
            <span className="infoSpan">아이디</span> <br />
            <input className="idInput" type="text" placeholder="아이디" onChange={onChangeId} /><br />
            <span className="infoSpan">비밀번호</span> <br />
            <input className="password" type="password" placeholder="비밀번호" onChange={onChangePw} /> <br />
            <button className="signUpBtn" onClick={Register}>가입하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
