import { Component } from "react/cjs/react.production.min";
import Category from "./components/Category";
import Home from "./components/Home"
import SideBar from "./components/SideBar";
import Jarvis from "./components/Jarvis";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div style={{height: 'auto', width: '100%'}}>
        <Home/>
        <Category/>
        <Jarvis/>
        {/* <Settings/> */}
      </div>
    </div>
  );
}

export default App;
