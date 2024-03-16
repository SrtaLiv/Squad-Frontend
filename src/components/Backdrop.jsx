import "../styles/backdrop.scss";

const Backdrop = ({ showBackdrop }) => {
  return <div className={`backdrop ${showBackdrop ? "show" : ""}`}></div>;
};

export default Backdrop;
