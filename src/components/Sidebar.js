import "../scss/App.scss";
function Sidebar() {
  return (
    <div className="sidebar">
      <span>#topics</span>
      <ul>
        <li className="sidebar_li">Software Engineering</li>
        <li className="sidebar_li">Mathematics</li>
        <li className="sidebar_li">Daily Life</li>
        <li className="sidebar_li">Bangalore News</li>
        <li className="sidebar_li">Sport</li>
        <li className="sidebar_li">Latest</li>
      </ul>
    </div>
  );
}
export default Sidebar;
