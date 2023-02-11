import Navbar from "./navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Gallery from "./pages/gallery";
import About from "./pages/About";
let App = () => {
  return (
    <div>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Order"></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};
export default App;
