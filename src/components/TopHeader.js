import "../scss/App.scss";

function TopHeader(props) {
  return (
    <div className="topHeader">
      <button
        className="button button--newthread"
        onClick={props.newThreadButtonClickHandler}
      >
        Start a new Thread
      </button>
    </div>
  );
}
export default TopHeader;
