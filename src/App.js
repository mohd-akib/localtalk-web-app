import "./scss/App.scss";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import Main from "./components/Main";
import RightPan from "./components/RightPan";
import Modal from "./components/Modal";
import React, { useEffect, useState } from "react";

function App() {
  const [shouldModalPopUp, setShouldModalPopUp] = useState(false);
  const [newPost, setNewPost] = useState();
  function handleNewThreadButtonClick() {
    setShouldModalPopUp(true);
  }
  function handleCloseButtonClick() {
    setShouldModalPopUp(false);
  }

  function onPostSubmitHandler(newPost) {
    console.log("before preventDefault");
    setNewPost(newPost);
    handleCloseButtonClick();
  }
  return (
    <div className="App">
      {/* <Sidebar key={1} /> */}
      <TopHeader
        newThreadButtonClickHandler={handleNewThreadButtonClick}
        key={2}
      />
      <Main newPost={newPost} key={3} />
      {/* <RightPan key={4} /> */}
      <Modal
        shouldModalPopUp={shouldModalPopUp}
        handleCloseButtonClick={handleCloseButtonClick}
        onPostSubmitHandler={onPostSubmitHandler}
        key={5}
      />
    </div>
  );
}

export default App;
