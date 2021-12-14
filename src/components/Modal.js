import "../scss/App.scss";
function Modal(props) {
  if (props.shouldModalPopUp) {
    return (
      <div>
        <div className="backdrop" />
        <div className="modal">
          <form>
            ​
            <textarea
              id="txtArea"
              className="postTextArea"
              placeholder="please type your post.."
              rows="20"
              cols="80"
            />
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              onSubmit={props.onPostSubmitHandler}
            />
          </form>
          <button className="button" onClick={props.handleCloseButtonClick}>
            close
          </button>
        </div>
      </div>
    );
  }
  return null;
}
export default Modal;
