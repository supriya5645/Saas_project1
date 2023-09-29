import React from 'react';
import "./Pricing.css"

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-header">
        <h1>Cloud Pricing</h1>
        <p>Choose the plan that fits your needs</p>
      </div>

      <div className="pricing-plans">
        <div className="pricing-plan">
          <h2>Basic Plan</h2>
          <p>Perfect for small projects</p>
          <div className="price">$9.99/month</div>
          <ul>
            <li>10 GB Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Basic Support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="pricing-plan">
          <h2>Pro Plan</h2>
          <p>Great for growing businesses</p>
          <div className="price">$19.99/month</div>
          <ul>
            <li>50 GB Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Premium Support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="pricing-plan">
          <h2>Enterprise Plan</h2>
          <p>For large enterprises</p>
          <div className="price">$49.99/month</div>
          <ul>
            <li>100 GB Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>24/7 Priority Support</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
