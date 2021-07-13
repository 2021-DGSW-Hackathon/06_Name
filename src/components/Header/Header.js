import WhiteLogo from '../../assets/WhiteLogo.png';
import { GoSearch } from 'react-icons/go';
import './Header.scss';

const Header = () => {

	return (
		<div>
			<header>
				<img src={WhiteLogo} alt="WhiteLogo" />
				<div className="menu">
					<a href="/">홈</a>
					<a href="/community">커뮤니티</a>
					<a href="#">보관함</a>
					<a href="#">캘린더</a>
					<a href="#">덕무비</a>
					<a href="#">OD9 소개</a>
				</div>
				<span className="icon">
					<GoSearch />
				</span>
				<input type="text" placeholder="검색어를 입력하세요" className="inputBox" />
			</header>
		</div>
	)
}

export default Header;