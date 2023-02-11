import "./Cart.css";
import image from "./z.png";

let Cart = () => {
  let price = 50;
  let price1 = 50;
  let price2 = 50;
  let total = price + price1 + price2;
  return (
    <div>
      <center>
        <div className="small-container cart-page">
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price}</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price1}</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>{" "}
            <tr>
              <td>
                <div className="cart-info">
                  <img src={image}></img>
                  <div>
                    <p>Samosa</p>

                    <small>Price: $50.00</small>
                    <br></br>
                    <a href={image}> Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>${price2}</td>
            </tr>
          </table>
          <div className="total-price">
            <table>
              <tr>
                <td>Subtotal</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$35.00</td>
              </tr>
              <tr>
                <td>total</td>
                <td>${total}</td>
              </tr>
            </table>
          </div>
        </div>
      </center>
    </div>
  );
};
export default Cart;
