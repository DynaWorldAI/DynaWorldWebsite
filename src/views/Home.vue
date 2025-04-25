<template>
  <div class="home">
    <section class="hero">
      <h1>Revolutionizing Global Payments</h1>
      <p class="subtitle">Seamless, Secure, and Smart Cross-Border Payment Solutions</p>
      <div class="cta-buttons">
        <a href="#learn-more" class="cta-primary">Learn More</a>
        <a href="/try-us" class="cta-secondary">Try Our Platform</a>
      </div>
    </section>

    <section id="learn-more" class="features">
      <h2>Why Choose DynaWorld AI?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-globe"></i>
          </div>
          <h3>Global Reach</h3>
          <p>Connect with 200+ countries and territories worldwide. Process payments in 135+ currencies with real-time exchange rates.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Lightning Fast</h3>
          <p>Experience instant settlements and same-day cross-border transfers powered by our advanced AI infrastructure.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Bank-Grade Security</h3>
          <p>Enterprise-level encryption and multi-layer security protocols protect every transaction.</p>
        </div>
      </div>
    </section>

    <section class="solutions">
      <h2>Payment Solutions</h2>
      <div class="solutions-grid">
        <div class="solution-card">
          <h3>Cross-Border Payments</h3>
          <ul>
            <li>Real-time currency conversion</li>
            <li>Competitive exchange rates</li>
            <li>Same-day international transfers</li>
            <li>Multi-currency accounts</li>
          </ul>
        </div>

        <div class="solution-card">
          <h3>Business Payments</h3>
          <ul>
            <li>Bulk payment processing</li>
            <li>Automated reconciliation</li>
            <li>Invoice management</li>
            <li>Vendor payment solutions</li>
          </ul>
        </div>

        <div class="solution-card">
          <h3>Payment Methods</h3>
          <ul>
            <li>Bank transfers (SWIFT, SEPA)</li>
            <li>Credit/Debit cards</li>
            <li>Digital wallets</li>
            <li>Local payment methods</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat-card">
        <h3>200+</h3>
        <p>Countries Served</p>
      </div>
      <div class="stat-card">
        <h3>135+</h3>
        <p>Currencies Supported</p>
      </div>
      <div class="stat-card">
        <h3>99.99%</h3>
        <p>Uptime</p>
      </div>
      <div class="stat-card">
        <h3>24/7</h3>
        <p>Support</p>
      </div>
    </section>

    <section class="benefits">
      <h2>Benefits of AI-Powered Payments</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <h3>Smart Routing</h3>
          <p>Our AI automatically selects the fastest and most cost-effective payment routes based on real-time network conditions.</p>
        </div>
        <div class="benefit-card">
          <h3>Fraud Prevention</h3>
          <p>Advanced machine learning algorithms detect and prevent fraudulent transactions before they occur.</p>
        </div>
        <div class="benefit-card">
          <h3>Automated Compliance</h3>
          <p>AI-driven compliance checks ensure all transactions meet international regulations and standards.</p>
        </div>
        <div class="benefit-card">
          <h3>Predictive Analytics</h3>
          <p>Get insights into payment patterns and optimize your payment strategy with AI-powered analytics.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to Transform Your Payments?</h2>
      <p>Join thousands of businesses already using DynaWorld AI for their payment needs.</p>
      <div class="cta-buttons">
        <a href="/try-us" class="cta-primary">Get Started</a>
        <a href="/contact" class="cta-secondary">Contact Sales</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 4rem;
  background: rgba(224, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.hero h1 {
  font-size: 3.5rem;
  color: #000080;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.cta-primary, .cta-secondary {
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-primary {
  background: linear-gradient(135deg, #008080, #006666);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 128, 128, 0.3);
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #008080;
  border: 2px solid #008080;
}

.cta-primary:hover, .cta-secondary:hover {
  transform: translateY(-2px);
}

.features, .solutions, .benefits {
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(224, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

h2 {
  text-align: center;
  color: #000080;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.features-grid, .solutions-grid, .benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card, .solution-card, .benefit-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover, .solution-card:hover, .benefit-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  color: #008080;
  margin-bottom: 1.5rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(224, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  font-size: 2.5rem;
  color: #008080;
  margin-bottom: 0.5rem;
}

.solution-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.solution-card li {
  padding: 0.5rem 0;
  color: #444;
  position: relative;
  padding-left: 1.5rem;
}

.solution-card li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #008080;
}

.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(224, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .feature-card, .solution-card, .benefit-card {
    padding: 1.5rem;
  }
}
</style> 