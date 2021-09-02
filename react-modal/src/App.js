import "./styles.css";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

export default function App() {
  const [open, setOpen] = useState(false);
  const customStyle = {
    overlay: {
      backgroundColor: "grey"
    },
    content: {
      color: "orange",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "200px",
      height: "150px"
    }
  };

  const buttonStyle = {
    backgroundColor: "hsl(24, 100%, 50%)",
    border: "1px solid hsl(24,100%,30%)",
    outline: "none",
    cursor: "pointer",
    padding: ".5em 1em",
    color: "white",
    fontSize: "inherit"
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}> Open Modal</button>
      <Modal isOpen={open} style={customStyle}>
        <h2>Modal title</h2>
        <p>Modal body</p>
        <button
          className="modalButton"
          style={buttonStyle}
          onClick={() => setOpen(false)}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
}
