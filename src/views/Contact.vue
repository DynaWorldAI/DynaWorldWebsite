<template>
  <div class="contact">
    <section class="contact-hero">
      <h1>Contact Us</h1>
      <p>Get in touch with our team</p>
    </section>

    <section class="contact-content">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>#54, Kandappa Layout, RR Nagar, Bangalore - 98</p>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>+91 1234567890</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>info@dynaworld.com</p>
        </div>
      </div>

      <div class="contact-form">
        <h2>Send us a Message</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

.contact-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 2;
}

.contact-hero h1 {
  font-size: 3rem;
  color: #000080;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.contact-hero p {
  font-size: 1.5rem;
  color: #000080;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.contact-info {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  color: #000080;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.info-item i {
  font-size: 1.5rem;
  color: #000080;
  margin-right: 1rem;
  width: 30px;
}

.info-item p {
  color: #000080;
  font-size: 1.1rem;
  margin: 0;
}

.contact-form {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  color: #000080;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #000080;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000080;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #000080;
  font-size: 1rem;
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background: #000080;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #0000b3;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 