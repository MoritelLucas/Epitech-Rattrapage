import './Header.css';
import { Link } from "react-router-dom"

function Header() {
  return (
    <div class="BodyHeader">
      <a href="/dashboard">
        <img class="HomeHeader"
          src="home.png"
          alt="GoToHomepage" width="50" />
      </a>
      <p class="AREATitle">Dashboard</p>
    </div>
  );
}

export default Header;