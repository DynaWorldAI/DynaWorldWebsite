<template>
  <div class="platform">
    <section class="platform-hero">
      <h1>Our Payment Solutions</h1>
      <p>Empowering businesses with secure, fast, and reliable payment solutions</p>
    </section>

    <section class="payment-products">
      <div class="product-card">
        <h2>Paid</h2>
        <p class="product-description">The Payments platform that empowers businesses and individuals to move money across borders with speed, security, and confidence. Leveraging the trusted SWIFT network, our platform enables fast, reliable, and trackable international payments.</p>
        
        <div class="product-features">
          <h3>⚡ Why Choose Us?</h3>
          <div class="feature-grid">
            <div class="feature-item">
              <h4>Global Reach, Local Impact</h4>
              <p>Access over 11,000+ financial institutions in 200+ countries through the SWIFT network. Pay partners, vendors, and employees anywhere with ease.</p>
            </div>
            <div class="feature-item">
              <h4>Speed that Keeps You Ahead</h4>
              <p>We utilize SWIFT gpi (Global Payments Innovation) to ensure same-day or next-day delivery of funds — with real-time tracking every step of the way.</p>
            </div>
            <div class="feature-item">
              <h4>Built for Business, Trusted by Banks</h4>
              <p>Our secure infrastructure is compliant with global banking standards and optimized for high-volume transactions.</p>
            </div>
            <div class="feature-item">
              <h4>Full Transparency</h4>
              <p>Know your payment's journey. Track end-to-end status, fees, and delivery time right from your dashboard.</p>
            </div>
          </div>
        </div>

        <div class="use-cases">
          <h3>🌐 Use Cases</h3>
          <ul>
            <li>Cross-border payroll and supplier payments</li>
            <li>Marketplace and ecommerce payouts</li>
            <li>Global treasury and liquidity operations</li>
            <li>Investment and remittance flows</li>
          </ul>
        </div>

        <div class="security">
          <h3>🔒 Security You Can Trust</h3>
          <p>Powered by bank-grade encryption, robust KYC/AML processes, and the globally recognized SWIFT network, our platform ensures your money moves safely and compliantly.</p>
        </div>
      </div>

      <div class="product-card">
        <h2>PayVerse</h2>
        <p class="product-description">Welcome to PayVerse - Borderless Payments. Unified Experience. PayVerse is your next-generation payments platform, purpose-built for global transactions across C2C, C2B, B2B, and B2C use cases.</p>
        
        <div class="product-features">
          <h3>💸 Pay Anyone, Anywhere</h3>
          <p>From MENA to Europe, India to North America — we simplify global money movement. With deep banking integrations and support for SWIFT, local rails, and emerging payment systems, PayVerse ensures your transactions are fast, traceable, and compliant.</p>
        </div>

        <div class="product-features">
          <h3>🚀 Why PayVerse?</h3>
          <div class="feature-grid">
            <div class="feature-item">
              <h4>Truly Global Reach</h4>
              <p>Send and receive payments across key corridors: Middle East, Europe, India, and North America.</p>
            </div>
            <div class="feature-item">
              <h4>Multi-Rail Payment Engine</h4>
              <p>SWIFT, SEPA, Faster Payments, UPI, and more — all from a single platform.</p>
            </div>
            <div class="feature-item">
              <h4>All Payment Models Supported</h4>
              <p>C2C | C2B | B2B | B2C — we've got every use case covered.</p>
            </div>
            <div class="feature-item">
              <h4>Speed, Transparency & Compliance</h4>
              <p>Real-time tracking, transparent FX rates, and end-to-end regulatory adherence.</p>
            </div>
          </div>
        </div>

        <div class="product-features">
          <h3>One API. Infinite Possibilities.</h3>
          <p>Integrate PayVerse into your app, platform, or workflow with ease.</p>
        </div>

        <div class="security">
          <h3>🔐 Built for Scale. Trusted for Security.</h3>
          <p>Whether you're scaling a global fintech, running a multinational enterprise, or managing remittances for a community — PayVerse offers the infrastructure, speed, and security to keep your payments flowing, globally.</p>
        </div>

        <div class="cta">
          <h3>Join the Payment Revolution. Step into the PayVerse.</h3>
        </div>
      </div>

      <div class="product-card">
        <h2>Verified!</h2>
        <p class="product-description">Welcome to Verified! - Simplify Compliance. Strengthen Trust. Verified! is a powerful, API-first platform designed to make KYC (Know Your Customer) and KYB (Know Your Business) onboarding fast, secure, and fully compliant for financial institutions and payment platforms.</p>
        
        <div class="product-features">
          <h3>🔍 Know More. Risk Less.</h3>
          <p>From instant identity verification to automated document checks, AML screening, and dynamic Risk Ratings, Verified! empowers your compliance teams with actionable insights and end-to-end transparency.</p>
        </div>

        <div class="product-features">
          <h3>💡 Key Features</h3>
          <div class="feature-grid">
            <div class="feature-item">
              <h4>Seamless KYC & KYB Onboarding</h4>
              <p>Automate onboarding with document capture, facial recognition, and business verification in minutes.</p>
            </div>
            <div class="feature-item">
              <h4>Real-Time AML Screening</h4>
              <p>Screen against global watchlists, PEPs, sanctions, and adverse media — in real time.</p>
            </div>
            <div class="feature-item">
              <h4>Dynamic Risk Ratings</h4>
              <p>Continuously assess and rate customer or business risk with customizable scoring models.</p>
            </div>
            <div class="feature-item">
              <h4>Global Coverage</h4>
              <p>Built for cross-border operations — with multilingual support and jurisdiction-specific compliance modules.</p>
            </div>
            <div class="feature-item">
              <h4>Audit-Ready Reports</h4>
              <p>Get full visibility with compliance-ready logs and detailed onboarding trails.</p>
            </div>
          </div>
        </div>

        <div class="security">
          <h3>🏦 Built for Financial Institutions</h3>
          <p>Whether you're a bank, fintech, payment processor, or lending platform, Verified! helps you comply with regulations without slowing down business.</p>
        </div>

        <div class="cta">
          <p>Compliance is no longer a barrier. With Verified!, it's your competitive edge.</p>
          <p>Let's make trust easy.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Platform'
}
</script>

<style scoped>
.platform {
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

.platform-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 2;
}

.platform-hero h1 {
  font-size: 3rem;
  color: #000080;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.platform-hero p {
  font-size: 1.5rem;
  color: #000080;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.payment-products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.product-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card h2 {
  color: #000080; /* Navy blue */
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-description {
  color: #000080; /* Navy blue */
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-features h3,
.use-cases h3,
.security h3 {
  color: #000080; /* Navy blue */
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.feature-item h4 {
  color: #000080; /* Navy blue */
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: #000080; /* Navy blue */
  line-height: 1.6;
}

.use-cases ul {
  list-style-type: none;
  padding-left: 0;
}

.use-cases ul li {
  color: #000080; /* Navy blue */
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.use-cases ul li::before {
  content: "•";
  color: #000080; /* Navy blue */
  position: absolute;
  left: 0;
}

.security p {
  color: #000080; /* Navy blue */
  line-height: 1.6;
}

.cta {
  margin-top: 2rem;
  text-align: center;
}

.cta p {
  color: #000080; /* Navy blue */
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .payment-products {
    grid-template-columns: 1fr;
  }
}

.flying-mobiles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mobile {
  position: absolute;
  animation: flyMobile linear infinite;
}

.phone-body {
  width: 40px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  position: relative;
}

.phone-body:before {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  top: 10px;
  left: 5px;
}

.phone-body:after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  bottom: 10px;
  left: 10px;
}

.wing {
  position: absolute;
  width: 30px;
  height: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  animation: flapWing 0.3s ease-in-out infinite;
}

.wing-left {
  top: 20px;
  left: -30px;
  transform-origin: right center;
}

.wing-right {
  top: 20px;
  right: -30px;
  transform-origin: left center;
}

.mobile1 {
  top: 20%;
  left: -50px;
  animation-duration: 15s;
  animation-delay: 0s;
}

.mobile2 {
  top: 50%;
  left: -50px;
  animation-duration: 18s;
  animation-delay: 2s;
}

.mobile3 {
  top: 80%;
  left: -50px;
  animation-duration: 20s;
  animation-delay: 4s;
}

@keyframes flyMobile {
  0% {
    transform: translateX(-100px) translateY(0) rotate(0deg);
  }
  25% {
    transform: translateX(25%) translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateX(50%) translateY(0) rotate(0deg);
  }
  75% {
    transform: translateX(75%) translateY(20px) rotate(-5deg);
  }
  100% {
    transform: translateX(calc(100% + 100px)) translateY(0) rotate(0deg);
  }
}

@keyframes flapWing {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
}
</style> 
