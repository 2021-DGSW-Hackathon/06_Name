import WhiteLogo from "../../assets/WhiteLogo.png";
import { GoSearch } from "react-icons/go";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header>
        <img src={WhiteLogo} alt="WhiteLogo" />
        <div className="menu">
          <a className="HeaderA" href="/">
            홈
          </a>
          <a className="HeaderA" href="/community">
            커뮤니티
          </a>
          <a className="HeaderA" href="/storagebox">
            보관함
          </a>
          <a className="HeaderA" href="/Calendar">
            캘린더
          </a>
          <a className="HeaderA" href="/intro">
            OD9 소개
          </a>
        </div>
        <span className="icon">
          <GoSearch />
        </span>
        <input type="text" placeholder="검색어를 입력하세요" className="inputBox" />
      </header>
    </div>
  );
};

export default Header;
