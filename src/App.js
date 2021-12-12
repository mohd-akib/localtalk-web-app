import logo from "./logo.svg";
import "./scss/App.scss";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import Main from "./components/Main";
import RightPan from "./components/RightPan";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <TopHeader />
      <Main />
      <RightPan />
    </div>
  );
}

export default App;
