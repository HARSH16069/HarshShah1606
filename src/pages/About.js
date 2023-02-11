import "./About.css";
let About = () => {
  return (
    <div className="bg">
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Valsad , Don`t</div>
              <div class="text-two">Savita Vila 05</div>
            </div>
            <div class="details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+919925090015</div>
              <div class="text-two">+919925090015</div>
            </div>
            <div class="details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">hrshah1606@gmail.com</div>
              <div class="text-two">hrshah1606@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Hello, How are you? </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              facere cum dolorum voluptatum mollitia hic quae? Sit, incidunt
              illum, ad culpa ut, deserunt
            </p>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box message-box">
                <input type="text" placeholder="Enter your Message"></input>
              </div>
              <div class="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
