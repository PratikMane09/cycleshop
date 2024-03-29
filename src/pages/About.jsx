import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
//import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import about from "../assets/all-images/aboutus.jpg";
//import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
// import Cycleanmi from "../components/UI/Cycleanmi";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="AboutUs" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={about} alt="" className="w-100 rounded-3 " />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  At our Prakash Cycle Mart, we are unwaveringly committed to
                  providing safe ride solutions for cyclists of all levels. Our
                  dedication to safety goes beyond merely offering high-quality
                  bicycles; it extends to ensuring that every customer is
                  equipped with the knowledge and accessories necessary to enjoy
                  a secure cycling experience. We prioritize the well-being of
                  our customers by offering a wide range of safety gear,
                  including helmets, reflective gear, and lights. Our
                  knowledgeable staff is always ready to assist customers in
                  selecting the right equipment and providing valuable insights
                  on safe cycling practices. Whether you are a casual rider or a
                  seasoned cyclist, our cycle shop is dedicated to fostering a
                  culture of safety, ensuring that every journey on two wheels
                  is both enjoyable and secure.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+918806582924</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <BecomeDriverSection /> */}

      <section>
        <Container>
          {/* <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row> */}
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
