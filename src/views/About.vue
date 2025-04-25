<template>
  <div class="about">
    <section class="hero">
      <h1>About Us</h1>
      <p class="subtitle">Transforming the Future of Financial Technology</p>
    </section>

    <section class="content">
      <div class="story-section">
        <div class="icon">
          <i class="fas fa-building"></i>
        </div>
        <h2>Our Story</h2>
        <p>DynaWorld AI Technologies is a pioneering fintech company dedicated to revolutionizing cross-border payments through cutting-edge AI solutions. Founded with a vision to transform global financial transactions, we combine deep financial expertise with advanced artificial intelligence to create innovative payment solutions that are secure, efficient, and scalable.</p>
      </div>

      <div class="vision-mission">
        <div class="vision">
          <div class="icon">
            <i class="fas fa-eye"></i>
          </div>
          <h2>Our Vision</h2>
          <p>To revolutionize global financial transactions by creating an intelligent, seamless, and secure payment ecosystem that connects businesses and individuals across borders. We envision a world where financial transactions are instant, transparent, and accessible to all, powered by cutting-edge AI technology.</p>
        </div>

        <div class="mission">
          <div class="icon">
            <i class="fas fa-bullseye"></i>
          </div>
          <h2>Our Mission</h2>
          <p>To harness the power of AI and financial expertise to deliver cutting-edge, scalable, and secure payment solutions that drive innovation, efficiency, and financial inclusion worldwide.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
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

.content {
  display: grid;
  gap: 3rem;
}

.story-section {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.vision-mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.vision, .mission {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.icon {
  font-size: 2.5rem;
  color: #000080;
  margin-bottom: 1rem;
}

h2 {
  color: #000080;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .vision-mission {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
}
</style> 