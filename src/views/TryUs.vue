<template>
  <div class="try-us">
    <section class="try-us-hero">
      <h1>Try Our AI Solutions</h1>
      <p>Experience the power of our AI platform with a free demo</p>
    </section>

    <section class="demo-form">
      <div class="form-container">
        <h2>Request a Demo</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company" v-model="form.company" required>
          </div>
          <div class="form-group">
            <label for="interest">Area of Interest</label>
            <select id="interest" v-model="form.interest" required>
              <option value="">Select an option</option>
              <option value="ml">Machine Learning</option>
              <option value="nlp">Natural Language Processing</option>
              <option value="cv">Computer Vision</option>
              <option value="analytics">Data Analytics</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-btn">Request Demo</button>
        </form>
      </div>
    </section>

    <section class="demo-features">
      <h2>What to Expect in Your Demo</h2>
      <div class="features-grid">
        <div class="feature-item">
          <h3>Live Platform Tour</h3>
          <p>Interactive walkthrough of our AI platform's capabilities</p>
        </div>
        <div class="feature-item">
          <h3>Custom Use Cases</h3>
          <p>See how our solutions can address your specific needs</p>
        </div>
        <div class="feature-item">
          <h3>Technical Deep Dive</h3>
          <p>Detailed explanation of our technology stack</p>
        </div>
        <div class="feature-item">
          <h3>Q&A Session</h3>
          <p>Get answers to all your questions from our experts</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TryUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        interest: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Here you would typically send the form data to your backend
      alert('Thank you for your interest! We will contact you shortly.')
      this.form = {
        name: '',
        email: '',
        company: '',
        interest: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.try-us {
  padding-top: 80px;
}

.try-us-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

.try-us-hero h1 {
  font-size: 3rem;
  color: var(--teal-light);
  margin-bottom: 1rem;
}

.try-us-hero p {
  font-size: 1.5rem;
  color: #fff;
}

.demo-form {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
}

.form-container h2 {
  color: var(--teal-light);
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--teal-light);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: var(--teal);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: var(--teal-light);
  transform: translateY(-2px);
}

.demo-features {
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.5);
}

.demo-features h2 {
  text-align: center;
  color: var(--teal-light);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-item h3 {
  color: var(--teal-light);
  margin-bottom: 1rem;
}

.feature-item p {
  color: #fff;
  line-height: 1.6;
}
</style> 