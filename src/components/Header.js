import reactLogo from "../images/logo512.png";

const Header = function () {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav--logo_container">
            <img
              src={reactLogo}
              alt="logo"
              className="nav--logo"
              width="40px"
            />{" "}
            <h2 className="nav--logo_text">ReactFacts</h2>
          </div>
          <p className="nav--title">React Course - Project 1</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
