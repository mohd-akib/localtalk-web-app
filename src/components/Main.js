import "../scss/App.scss";
import Thread from "./Thread";

function prepareAllThreads(allThreads) {
  let arr = [];
  for (let i = 0; i < allThreads.length; i++) {
    arr.push(<Thread post={allThreads[i]} />);
  }
}
function Main(props) {
  return (
    <div className="main">
      <span>main</span>
      <ul>{prepareAllThreads(props.allThreads)}</ul>
    </div>
  );
}

export default Main;
