import React from 'react';
import './Features.css'; 

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <i className="fas fa-cloud"></i>
        <h3>Cloud Storage</h3>
        <p>Store your data securely in the cloud.</p>
      </div>
      <div className="feature">
        <i className="fas fa-cloud-download-alt"></i>
        <h3>Easy Access</h3>
        <p>Access your files from anywhere, anytime.</p>
      </div>
      <div className="feature">
        <i className="fas fa-shield-alt"></i>
        <h3>Security</h3>
        <p>Robust security measures to protect your data.</p>
      </div>
    </section>
  );
}

export default Features;
