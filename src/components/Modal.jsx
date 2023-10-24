import "./Modal.css";

const Modal = ({ setModal, modal }) => {
  const clickHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={() => clickHandler()}></div>
      <div className="modal-content">
        <svg
          className="close__modal"
          width="32"
          height="31"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => clickHandler()}
        >
          <g fill="#00001A" fillRule="evenodd">
            <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
            <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
          </g>
        </svg>
        <nav>
          <a href="#"> Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </nav>
      </div>
    </div>
  );
};

export default Modal;
