import React from "react";
import WhiteLogo from "./WhiteLogo.png";
import SubPic from "./SubPic.png";
import "./SignUp.scss";

const SignUp = () => {
	return (
		<>
			<header>
				<img src={WhiteLogo} alt="WhiteLogo" />
				<div className="menu">
					<a href="#">회원가입</a>
					<a href="#">홈(로그인)</a>
				</div>
			</header>
			<img src={SubPic} alt="subPic" className="subPic" />
			<div className="signUp">
				<div className="signUpForm">
					<span className="signUpSpan">회원가입</span>
					<div className="signUpInfo">
						<span className="infoSpan">이름(본명)</span> <br />
						<input className="infoInput" type="text" placeholder="ex)홍길동" /> <br />
						<span className="infoSpan">닉네임</span> <br />
						<input className="infoInput" type="text" placeholder="ex)아잉" /> <br />
						<span className="infoSpan">아이디</span> <br />
						<input className="idInput" type="text" placeholder="아이디" />
						<button className="checkBtn">중복확인</button> <br />
						<span className="infoSpan">비밀번호</span> <br />
						<input className="password" type="text" placeholder="비밀번호" /> <br />
						<input className="checkPassword" type="text" placeholder="비밀번호 클릭" /> <br />
						<button className="signUpBtn">가입하기</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;