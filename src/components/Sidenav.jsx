import "../styles/sidenav.scss";

const Sidenav = ({ showSidenav, setSidenav, children }) => {
  return (
    <div className={`sidenav ${showSidenav ? "open" : ""}`}>
      <div className="header">
        <button className="icon-btn" id="close-sidenav-btn" onClick={() => setSidenav(!showSidenav)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {children}
    </div>
  );
};

export default Sidenav;
