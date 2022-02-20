import { Component } from "react/cjs/react.production.min";
import Category from "./components/Category";
import Home from "./components/Home"
import SideBar from "./components/SideBar";
import Jarvis from "./components/Jarvis";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div style={{height: 'auto', width: '100%'}}>
        <Home/>
        <Category/>
        <Jarvis/>
        <Movies/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
