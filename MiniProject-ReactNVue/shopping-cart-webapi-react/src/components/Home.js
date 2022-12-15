import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Corosals from "./Corosals";
import Navbars from "./Navbars";

// import Navbars from "./components/Navbars";
// import Corosals from "./components/Corosals";

const Home = () => {
  return (
    <div>
      <div>
        <Navbars />
        <Corosals />
      </div>

      <div class="container-flex" style={{ width: "550rem" }}>
        <div class=" card-deck " style={{ width: "550px", height: "100px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div class="col-lg-6 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://rukminim1.flixcart.com/image/200/200/kpydrbk0/bedsheet/7/d/4/designer-3d50016-flat-iws-original-imag42k8xfjmf3x8.jpeg?q=70"
                  width="50"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title">Bedsheets</h5>
                  <p class="card-text">Min. 50% off</p>
                  <p>
                    <button class="btn btn-success">4.7⭐</button>4 Ratings & 8
                    Reviews
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://rukminim1.flixcart.com/image/200/200/ki6bgcw0-0/book/5/h/p/be-my-perfect-ending-original-imafyyhvz9zfpddn.jpeg?q=70"
                  width="50"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title">Study Books</h5>
                  <p class="card-text">
                    BBD Special Edition Quantitative Aptitude For Competitive
                    
                  </p>
                  <p>
                    <button class="btn btn-success">3.7⭐</button>15 Ratings & 2
                    Reviews
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l2arp8w0/bath-towel/t/o/t/premium-quality-ultra-soft-baby-bath-towel-for-new-born-baby-boy-original-imagdzftxgnknh5p.jpeg?q=70"
                  width="50"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title">Baby Towel</h5>
                  <p class="card-text">
                    My New Born Cotton 200 GSM Bath, Hand, Face Towel Set (Pack
                    of 2)
                  </p>
                  <p>
                    <button class="btn btn-success">4.7⭐</button>3 Ratings & 2
                    Reviews
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://rukminim1.flixcart.com/image/416/416/kzogn0w0/projector/a/z/q/k9-hd-amazon-fire-tv-stick-10-e10k62-led-projector-egate-original-imagbmrjq6q3nf3z.jpeg?q=70"
                  width="50"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title">Projector</h5>
                  <p class="card-text">
                    Egate K9 HD + Amazon Fire TV Stick (4000 lm / 2 Speaker )
                    
                  </p>
                  <p>
                    <button class="btn btn-success">3.7⭐</button>15 Ratings & 2
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODRrXoe5sCwh8CG6zZvp1VOn_FOet1u5HzQ&usqp=CAU"
                  width="50"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title">Iphone</h5>
                  <p class="card-text">
                    IPHONE-14 PRO MAX
                  </p>
                  <p>
                    <button class="btn btn-success">4.7⭐</button>15 Ratings & 2
                    Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
