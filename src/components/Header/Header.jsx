import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className="header page__section">
      <img src={logo} alt="Around the U.S logo" className="logo header__logo" />
      <img
        src="../../images/line.png"
        alt="linha decorativa"
        className="header__line"
      />
    </header>
  );
}
