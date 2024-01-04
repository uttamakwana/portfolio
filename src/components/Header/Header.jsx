import './header.css';

const Header = () => {
  return (
    <header className="header flex-between pi-1">
      <div className="header-logo-container">
        {/* <img src="" alt="logo" /> */}
        <h1 className="font-bold clr-secondary fs-3">MU</h1>
      </div>
      <div className="header-flag-container">
        <img
          src="https://cdn.pixabay.com/animation/2022/08/21/20/03/20-03-41-348_512.gif"
          alt="flag"
          id='header-flag'
        />
      </div>
    </header>
  );
};

export default Header;
