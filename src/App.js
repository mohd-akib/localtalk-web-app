import logo from "./logo.svg";
import "./scss/App.scss";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import Main from "./components/Main";
import RightPan from "./components/RightPan";
import Modal from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [shouldModalPopUp, setShouldModalPopUp] = useState(false);
  const [allThreads, setAllThreads] = useState([{ post: "" }]);
  function handleNewThreadButtonClick() {
    setShouldModalPopUp(true);
  }
  function handleCloseButtonClick() {
    setShouldModalPopUp(false);
  }
  function onPostSubmitHandler(event) {
    event.preventDefault();
    console.log(event);
    setAllThreads([{ post: event.target.value }, ...allThreads]);
  }
  return (
    <div className="App">
      <Sidebar key={1} />
      <TopHeader
        newThreadButtonClickHandler={handleNewThreadButtonClick}
        key={2}
      />
      <Main key={3} allThreads={allThreads} />
      <RightPan key={4} />
      <Modal
        shouldModalPopUp={shouldModalPopUp}
        handleCloseButtonClick={handleCloseButtonClick}
        key={5}
        onPostSubmitHandler={onPostSubmitHandler}
      />
    </div>
  );
}

export default App;
