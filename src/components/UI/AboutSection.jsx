import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cycleimg/aboutcyclepic.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "150px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Prakash Cycle Mart</h2>
              <p className="section__description">
                your ultimate destination for all things cycling. We're more
                than just a bike shop; we're a community of passionate cyclists
                dedicated to providing top-notch bikes, gear, and accessories.
                Our curated selection, expert staff, and commitment to customer
                satisfaction make us your go-to resource for all your cycling
                needs. Join us on the road to adventure and excellence.
                <br /> welcome to the world of cycling at its best!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-75" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
