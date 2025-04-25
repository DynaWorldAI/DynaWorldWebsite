<template>
  <div id="app">
    <AnimatedBackground />
    <nav class="navbar">
      <div class="nav-brand">
        <div class="logo-container">
          <img src="./assets/dynaworld-logo.png" alt="DynaWorld Logo" class="logo" />
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/platform">Platform</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/whitepapers">Whitepapers</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/api-docs">API Docs</router-link>
        <router-link to="/try-us">Try Us</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </div>
    </nav>
    <div class="breadcrumbs">
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span class="current">{{ currentRoute }}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AnimatedBackground from './components/AnimatedBackground.vue'

export default {
  name: 'App',
  components: {
    AnimatedBackground
  },
  computed: {
    currentRoute() {
      const route = this.$route.path.slice(1)
      return route.charAt(0).toUpperCase() + route.slice(1) || 'Home'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
}

/* Global font styles */
* {
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

p, span, a, div {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.navbar {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 30px 30px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo-container {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #00ffff, #008080);
  box-shadow: 0 4px 15px rgba(0, 128, 128, 0.2);
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.brand-name {
  font-family: Calibri, 'Segoe UI', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000080;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  background: linear-gradient(135deg, #008080, #006666);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.navbar a:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.navbar a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-weight: 600;
}

.breadcrumbs {
  margin-top: 100px;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.breadcrumbs a {
  color: #000080;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumbs a:hover {
  color: #0066cc;
}

.separator {
  color: #666;
}

.current {
  color: #000080;
  font-weight: 600;
}

/* Add padding to account for fixed navbar and breadcrumbs */
main {
  padding-top: 140px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0 0 20px 20px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.5rem;
  }
  
  .navbar a {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
  
  .breadcrumbs {
    margin-top: 150px;
    padding: 0.8rem;
    font-size: 0.85rem;
  }
  
  main {
    padding-top: 180px;
  }
}
</style> 