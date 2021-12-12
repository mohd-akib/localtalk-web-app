import "../scss/App.scss";
import Thread from "./Thread";

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(<Thread />);
}
function Main() {
  return (
    <div className="main">
      <span>main</span>
      <ul>{arr}</ul>
    </div>
  );
}

export default Main;
