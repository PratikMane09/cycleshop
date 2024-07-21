import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import Cards from "../components/UI/Cards";
import Brand from "../components/UI/Brand";
import Cardslick from "../components/UI/Cardslick";
//import Cards from "../components/UI/Cards";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      {/* <Cards className="mt-0" /> */}

      {/* =========== kids men section ================ */}
      <section className="mt-0">
        <Cards />
      </section>
      {/* ========== services section ============ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
              <h6 className="section__subtitle" style={{ color: "black" }}>
                Prakash Cycle Mart
              </h6>
              <h2 className="section__title">Our Facilities & Features</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: "grey" }}>
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
              <h6 className="section__subtitle" style={{ color: "black" }}>
                Prakash Cycle Mart
              </h6>
              <h2 className="section__title">Our Best Product</h2>
            </Col>

            <Cardslick />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
              <h6
                className="section__subtitle"
                style={{ color: "white", background: "black" }}
              >
                SHOP BY BRANDS
              </h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <Brand />
          </Row>
        </Container>
      </section>

      <section></section>
    </Helmet>
  );
};

export default Home;
