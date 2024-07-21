import React from "react";
import m1 from "../../assets/all-images/cycleimg/mountain.webp";
import k1 from "../../assets/all-images/cycleimg/kids.jpeg";
import h1 from "../../assets/all-images/cycleimg/hybrid.jpeg";
import r1 from "../../assets/all-images/cycleimg/road.jpeg";
import "../../styles/cards.css";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <>
      <div class="cardcontainer ">
        <div class="cards grid">
          <div class="card">
            <div className="img-box">
              <img src={m1} alt="image" class="card__img" />
            </div>
            <div className="card-content">
              <h1 className="card-heading">Mountain Bike</h1>
              <p class="card-text">
                {/* <button className="btn reserve__btn mt-6 ">
                  <Link to="/cars" className="text">
                    Shop Now
                  </Link>
                </button> */}
                <button class="button">
                  <span class="button_lg">
                    <span class="button_sl"></span>
                    <Link to="/Shop">
                      <span class="button_text">Shop Now</span>
                    </Link>
                  </span>
                </button>
              </p>
            </div>
          </div>

          <div class="card">
            <div className="img-box">
              <img src={k1} alt="image" class="card__img" />
            </div>
            <div className="card-content">
              <h1 className="card-heading">Kids bikes</h1>
              <p class="card-text">
                <button class="button">
                  <span class="button_lg">
                    <span class="button_sl"></span>
                    <Link to="/Shop">
                      <span class="button_text">Shop Now</span>
                    </Link>
                  </span>
                </button>
              </p>
            </div>
          </div>

          <div class="card">
            <div className="img-box">
              <img src={h1} alt="image" class="card__img" />
            </div>
            <div className="card-content">
              <h1 className="card-heading">Hybrid Bikes</h1>
              <p class="card-text">
                <button class="button">
                  <span class="button_lg">
                    <span class="button_sl"></span>
                    <Link to="/Shop">
                      <span class="button_text">Shop Now</span>
                    </Link>
                  </span>
                </button>
              </p>
            </div>
          </div>

          <div class="card">
            <div className="img-box">
              <img src={r1} alt="image" class="card__img" />
            </div>
            <div className="card-content">
              <h1 className="card-heading">Road Bikes</h1>
              <p class="card-text">
                <button class="button">
                  <span class="button_lg">
                    <span class="button_sl"></span>
                    <Link to="/Shop">
                      <span class="button_text">Shop Now</span>
                    </Link>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
