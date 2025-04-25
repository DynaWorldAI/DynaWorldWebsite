<template>
  <div class="whitepapers">
    <section class="hero">
      <h1>Whitepapers</h1>
      <p class="subtitle">In-Depth Analysis of Financial Technology Solutions</p>
    </section>

    <section class="papers-grid">
      <div class="paper-card">
        <div class="icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <h2>AI in Cross-Border Payments</h2>
        <p>Exploring the transformative impact of artificial intelligence on international payment processing and settlement systems.</p>
        <a href="#" class="download-btn">Download PDF</a>
      </div>

      <div class="paper-card">
        <div class="icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h2>Security in Digital Payments</h2>
        <p>Comprehensive analysis of security measures and best practices in modern digital payment systems.</p>
        <a href="#" class="download-btn">Download PDF</a>
      </div>

      <div class="paper-card">
        <div class="icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h2>Future of FinTech</h2>
        <p>Predictive analysis of emerging trends and technologies shaping the future of financial services.</p>
        <a href="#" class="download-btn">Download PDF</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Whitepapers'
}
</script>

<style scoped>
.whitepapers {
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

.papers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.paper-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.paper-card:hover {
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

.download-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #000080;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: #0066cc;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .papers-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}
</style> 