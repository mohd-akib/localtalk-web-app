import { useState } from "react/cjs/react.development";
import "../scss/App.scss";
function Thread(props) {
  const [post, setPost] = useState(props.post);
  const [id, setId] = useState(props.id);
  console.log("reached thread method");
  const [isDeleted, setIsDeleted] = useState(false);
  function deleteHandler() {
    setIsDeleted(true);
    props.onDeleteThread(id);
  }
  return (
    <div className="thread">
      {post}
      <button className="button" onClick={deleteHandler}>
        delete
      </button>
    </div>
  );
}
export default Thread;
