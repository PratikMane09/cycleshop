import React from "react";
import "../styles/policy.css";
function Privacy() {
  return (
    <div className="policy-container">
      <h2 className="policy-title">Privacy Policy</h2>
      <div className="policy-content">
        <p>
          This privacy notice explains how we handle your information at
          www.prakashcycle.in.
        </p>
        <h3>Information Collection</h3>
        <p>
          We only collect information directly from you, such as through email
          or direct contact. We do not gather data from any other source.
        </p>
        <h3>Use and Sharing</h3>
        <p>
          We use your information solely to respond to your inquiries or
          requests. We do not share your information with third parties, except
          when necessary to fulfill your requests (e.g., shipping orders).
        </p>
        <h3>Communication</h3>
        <p>
          We may contact you via email for promotions, new products/services, or
          changes to our privacy policy. You can opt-out at any time.
        </p>
        <h3>Your Control Over Information</h3>
        <ul>
          <li>See what data we have about you.</li>
          <li>Update or correct any data we have about you.</li>
          <li>Request us to delete any data we have about you.</li>
          <li>Express any concerns about our use of your data.</li>
        </ul>
        <h3>Security</h3>
        <p>
          We protect your information both online and offline, including
          encryption of sensitive data and limiting access to authorized
          personnel only.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
