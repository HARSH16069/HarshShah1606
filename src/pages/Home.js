// import { Link } from "react-router-dom";
import MainItem from "../item/mainitem";
import "./Home.css";
import img4 from "./main.png";
let Home = () => {
  return (
    <div>
      <div id="ovel"></div>
      <div id="ovel1"></div>
      <div id="flex">
        <div className="box">
          <h1 id="h11">Food Made With Love</h1>
          <p id="desption">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, aut!
            Dignissimos temporibus nobis cum maxime corporis rerum commodi ullam
            tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eos
          </p>
          <br></br>
          <div class="container1">
            <div class="button1 button2">About</div>
          </div>
        </div>
        <img src={img4} id="Homeimg"></img>
      </div>
      <div id="background-color">
        <center>
          <h1 id="h1">Here You see our menu and Order the Food</h1>
        </center>
        <MainItem />
      </div>
    </div>
  );
};
export default Home;
