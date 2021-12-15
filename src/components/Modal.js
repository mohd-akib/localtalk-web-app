import "../scss/App.scss";
import React, { useState } from "react";

function Modal(props) {
  const [post, setPost] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    props.onPostSubmitHandler(post);
  }

  function onChangeHandler(event) {
    event.preventDefault();
    setPost(event.target.value);
  }

  if (props.shouldModalPopUp) {
    return (
      <div>
        <div className="backdrop" />
        <div className="modal">
          <form onSubmit={submitHandler}>
            <textarea
              id="txtArea"
              className="postTextArea"
              placeholder="please type your post.."
              rows="20"
              cols="80"
              onChange={onChangeHandler}
            />
            <br />
            <br />

            <button
              type="button"
              className="button"
              onClick={props.handleCloseButtonClick}
            >
              close
            </button>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  return null;
}
export default Modal;
