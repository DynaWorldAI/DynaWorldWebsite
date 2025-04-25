<template>
  <div class="services">
    <section class="hero">
      <h1>Our Services</h1>
      <p class="subtitle">Comprehensive Financial Technology Solutions</p>
    </section>

    <section class="services-grid">
      <div class="service-card">
        <div class="icon">
          <i class="fas fa-money-bill-wave"></i>
        </div>
        <h2>Payments</h2>
        <p>Advanced payment processing solutions for seamless cross-border transactions. Our AI-powered platform ensures fast, secure, and cost-effective payment processing with real-time tracking and analytics.</p>
        <ul class="features">
          <li>Cross-border payment processing</li>
          <li>Real-time transaction tracking</li>
          <li>Multi-currency support</li>
          <li>Automated reconciliation</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="icon">
          <i class="fas fa-hand-holding-usd"></i>
        </div>
        <h2>Lending</h2>
        <p>Intelligent lending solutions powered by AI for accurate credit assessment and risk management. Our platform enables automated loan processing with enhanced security and compliance.</p>
        <ul class="features">
          <li>AI-driven credit scoring</li>
          <li>Automated loan processing</li>
          <li>Risk assessment tools</li>
          <li>Portfolio management</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="icon">
          <i class="fas fa-user-check"></i>
        </div>
        <h2>Onboarding</h2>
        <p>Streamlined customer onboarding process with advanced identity verification and KYC solutions. Our platform ensures quick and secure customer acquisition while maintaining regulatory compliance.</p>
        <ul class="features">
          <li>Digital identity verification</li>
          <li>Automated KYC processes</li>
          <li>Document verification</li>
          <li>Real-time validation</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h2>AML Compliance</h2>
        <p>Comprehensive Anti-Money Laundering solutions with real-time monitoring and risk assessment. Our AI-powered system helps detect and prevent financial crimes effectively.</p>
        <ul class="features">
          <li>Transaction monitoring</li>
          <li>Risk scoring</li>
          <li>Alert management</li>
          <li>Compliance reporting</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="icon">
          <i class="fas fa-balance-scale"></i>
        </div>
        <h2>Regulator Technologies</h2>
        <p>Advanced regulatory technology solutions for seamless compliance management. Our platform helps financial institutions stay compliant with evolving regulations efficiently.</p>
        <ul class="features">
          <li>Regulatory reporting</li>
          <li>Compliance monitoring</li>
          <li>Policy management</li>
          <li>Audit trail</li>
        </ul>
      </div>
    </section>

    <section class="service-benefits">
      <h2>Why Choose Our Services?</h2>
      <div class="benefits-list">
        <div class="benefit-item">
          <h3>Expert Team</h3>
          <p>Our team consists of industry-leading AI specialists</p>
        </div>
        <div class="benefit-item">
          <h3>Proven Results</h3>
          <p>Track record of successful AI implementations</p>
        </div>
        <div class="benefit-item">
          <h3>Custom Solutions</h3>
          <p>Tailored to your specific business needs</p>
        </div>
        <div class="benefit-item">
          <h3>Ongoing Support</h3>
          <p>Continuous assistance and maintenance</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.hero h1 {
  font-size: 3rem;
  color: #000080;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  color: #000080;
  margin-bottom: 1rem;
}

h2 {
  color: #000080;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 0.5rem 0;
  color: #000080;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.features li:before {
  content: "✓";
  color: #000080;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}

.service-benefits {
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.5);
}

.service-benefits h2 {
  text-align: center;
  color: var(--teal-light);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.benefit-item h3 {
  color: var(--teal-light);
  margin-bottom: 1rem;
}

.benefit-item p {
  color: #fff;
  line-height: 1.6;
}
</style> 