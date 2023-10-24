import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import News from "./components/News";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="main__container">
      <Header setModal={setModal} modal={modal} />
      <News />
      {modal && <Modal setModal={setModal} modal={modal} />}
    </div>
  );
}

export default App;
