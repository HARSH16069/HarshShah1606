import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import img100 from "./1.jpg";
import img101 from "./2.png";
let Navbar = () => {
  let [isvalue, setValue] = useState(false);

  return (
    <div>
      <nav id={isvalue ? "nav active" : "nav"}>
        <div id="innav">
          <h1 id="logo">S & S Food</h1>
          <div id="allspan">
            <img
              src={img100}
              alt="logo"
              className={isvalue ? "disb active" : "disb"}
              onClick={() => setValue(true)}
            ></img>
            <img
              src={img101}
              alt="logo "
              className={isvalue ? "disn active" : "disn"}
              onClick={() => setValue(false)}
            ></img>
          </div>
          <ul id={isvalue ? "underh1 block" : "underh1"}>
            <div id="inul">
              <li className="ulli" onClick={() => setValue(false)}>
                <Link to="/" className="lia">
                  Home
                </Link>
              </li>
              <li className="ulli" onClick={() => setValue(false)}>
                <Link to="/Gallery" className="lia">
                  Gallery
                </Link>
              </li>
              <li className="ulli" onClick={() => setValue(false)}>
                <Link to="/Order" className="lia">
                  Order Now
                </Link>
              </li>
              <li className="ulli" onClick={() => setValue(false)}>
                <Link to="/Cart" className="lia">
                  Cart
                </Link>
              </li>

              <li className="ulli" onClick={() => setValue(false)}>
                <Link to="/About" className="lia">
                  About
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
