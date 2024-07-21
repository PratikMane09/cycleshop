import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/refund",
    display: "Refund And Returns Policy",
  },
  {
    path: "/shipping",
    display: "Shipping Policy",
  },
  {
    path: "/termscondition",
    display: "Terms And Conditions",
  },
  {
    path: "/privacy",
    display: "Privacy Policy",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  {/* <i class="ri-car-line"></i> */}
                  <span>Prakash Cycle Mart</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              your ultimate destination for all things cycling. We're more than
              just a bike shop; we're a community of passionate cyclists
              dedicated to providing top-notch bikes, gear, and accessories. Our
              curated selection, expert staff, and commitment to customer
              satisfaction make us your go-to resource for all your cycling
              needs. Join us on the road to adventure and excellence.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Garkheda Parisar Aurangabad</p>
              <p className="office__info">Phone:+917038698440</p>

              <p className="office__info">Email: pravinmane111@gmail.com</p>

              <p className="office__info">Office Time: 6am - 9pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Prakash cycle Mart. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
