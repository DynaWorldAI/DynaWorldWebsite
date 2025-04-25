<template>
  <div class="blog">
    <section class="hero">
      <h1>Blog</h1>
      <p class="subtitle">Latest Insights in Financial Technology</p>
    </section>

    <section class="blog-grid">
      <div class="blog-card">
        <div class="blog-image ai-image">
          <div class="image-placeholder">
            <i class="fas fa-robot"></i>
          </div>
        </div>       <div class="blog-content">
          <div class="blog-meta">
            <span class="date">March 15, 2024</span>
            <span class="category">AI Technology</span>
          </div>
          <h2>The Future of AI in Financial Services</h2>
          <p>Exploring how artificial intelligence is transforming traditional banking and payment systems, creating more efficient and secure financial solutions.</p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-image payment-image">
          <div class="image-placeholder">
            <i class="fas fa-money-bill-wave"></i>
          </div>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="date">March 10, 2024</span>
            <span class="category">Payments</span>
          </div>
          <h2>Revolutionizing Cross-Border Payments</h2>
          <p>How modern technology is breaking down barriers in international transactions, making them faster, cheaper, and more accessible.</p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-image security-image">
          <div class="image-placeholder">
            <i class="fas fa-shield-alt"></i>
          </div>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="date">March 5, 2024</span>
            <span class="category">Security</span>
          </div>
          <h2>Enhancing Security in Digital Payments</h2>
          <p>Latest developments in payment security and how they're protecting users in an increasingly digital financial landscape.</p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style scoped>
.blog {
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.ai-image {
  background: linear-gradient(135deg, #4a90e2, #357abd);
}

.payment-image {
  background: linear-gradient(135deg, #50c878, #3aa665);
}

.security-image {
  background: linear-gradient(135deg, #ff6b6b, #e05555);
}

.image-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder i {
  font-size: 2.5rem;
  color: white;
}

.blog-content {
  padding: 1.5rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.category {
  color: #000080;
  font-weight: 600;
}

h2 {
  color: #000080;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #000080;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.read-more:hover {
  background: #0066cc;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .blog-grid {
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