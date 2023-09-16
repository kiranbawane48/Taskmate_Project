import Logo from "../assest/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
