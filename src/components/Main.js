import "../scss/App.scss";
import Thread from "./Thread";
import React, { useEffect, useState } from "react";

function Main(props) {
  const [allThreads, setAllThreads] = useState([]);

  function onPostSubmitHandler(newPost) {
    setAllThreads((prevState) => {
      const newList = [];
      for (let i = 0; i < prevState.length; i++) {
        newList.push(prevState[i]);
      }
      newList.push({ post: newPost, id: Math.random() });
      console.log("previous state length: " + prevState.length);
      console.log("new state length: " + newList.length);
      return newList;
    });
  }

  console.log("props received in Main" + JSON.stringify(props));
  function onDeleteHandler(id) {
    console.log("inside ondeletehandler " + id);
    const newList = [];
    for (let i = 0; i < allThreads.length; i++) {
      if (allThreads[i].id != id) {
        newList.push(allThreads[i]);
      }
    }
    setAllThreads(newList);
  }

  if (props.newPost) {
    onPostSubmitHandler(props.newPost);
  }

  return (
    <div className="main">
      <span>main</span>
      {allThreads.map((thread) => {
        console.log("appending posts in list");
        console.log(thread.post);
        return (
          <Thread
            post={thread.post}
            id={thread.id}
            onDeleteThread={onDeleteHandler}
          />
        );
      })}
    </div>
  );
}

export default Main;
