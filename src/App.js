import "./App.css";
import "../src/assets/css/Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Story from "./components/Story";
import Community from "./components/Community";
import Friends from "./components/Friends";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import StartUp from "./components/StartUp";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Melodies from "./components/Melodies";
import shadow_bottom from "../src/assets/imgs/png/header_shadow.png";

function App() {
  return (
    <>
      <div className="bg_img position-relative overflow-hidden  ">
        <span className=" position-absolute bottom-0">
          <img className=" w-100" src={shadow_bottom} alt="shadow_bottom" />
        </span>
        <span className="orange_shadow position-absolute pos_shadow_1_orange d-none d-lg-flex "></span>
        <span className=" purple_shadow position-absolute pos_shadow_1_purple d-none d-md-flex  "></span>
        <span className=" purple_shadow position-absolute pos_shadow_2_purple d-none d-lg-flex  "></span>
        <Nav />
        <Header />
      </div>
      <Story />
      <Friends />
      <Community />
      <StartUp />
      <Roadmap />
      <Melodies />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
