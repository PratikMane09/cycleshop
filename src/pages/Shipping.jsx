import React from "react";
import "../styles/policy.css";
import Refund from "./Refund";
import Contact from "./Contact";
function Shipping() {
  return (
    <div className="terms-container">
      <h2 className="terms-title">SHIPPING & DELIVERY POLICY</h2>
      <div className="terms-content">
        <p>
          Please carefully review our Shipping & Delivery Policy when purchasing
          our products. This policy will apply to any order you place with us.
        </p>
        <h3>Free Shipping</h3>
        <p>We offer free shipping on all orders.</p>
        <h3>WHAT HAPPENS IF MY ORDER IS DELAYED?</h3>
        <p>
          If delivery is delayed for any reason we will let you know as soon as
          possible and will advise you of a revised estimated date for delivery.
        </p>
        <h3>QUESTIONS ABOUT RETURNS?</h3>
        <p>
          If you have questions about returns, please review our Return Policy:
        </p>
        <h3>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h3>
        <p>
          If you have any further questions or comments, you may contact us by:
        </p>
        <ul>
          <li>Email: prakshcyclesecom@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Shipping;
