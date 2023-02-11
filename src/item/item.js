import "./item.css";
import { Link } from "react-router-dom";

let Item = (props) => {
  return (
    <div className="Harsh">
      <div className="harshshah">
        <div id="item">
          <center>
            <img src={props.Image} alt="Item" className="img"></img>
          </center>
          <div id="text">
            <div id="Title">
              {props.Title}
              <div id="Cost">Cost: {props.Cost}Rs</div>
            </div>
            <div className="rate">Rate: {props.Rate} Star</div>
          </div>
          <div id="Cart">
            <Link id="Cart1">Add to Cart</Link>
          </div>
        </div>
      </div>
      <div className="harshshah">
        <div id="item">
          <center>
            <img src={props.Image} alt="Item" className="img"></img>
          </center>
          <div id="text">
            <div id="Title">
              {props.Title1}
              <div id="Cost">Cost: {props.Cost1}Rs</div>
            </div>
            <div className="rate">Rate: {props.Rate1} Star</div>
          </div>
          <div id="Cart">
            <Link id="Cart1">Add to Cart</Link>
          </div>
        </div>
      </div>
      <div className="harshshah1">
        <div id="item">
          <center>
            <img src={props.Image} alt="Item" className="img"></img>
          </center>
          <div id="text">
            <div id="Title">
              {props.Title1}
              <div id="Cost">Cost: {props.Cost1}Rs</div>
            </div>
            <div className="rate">Rate: {props.Rate1} Star</div>
          </div>
          <div id="Cart">
            <Link id="Cart1">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
