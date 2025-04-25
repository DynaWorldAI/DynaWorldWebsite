<template>
  <div class="app">
    <AnimatedBackground />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/platform">Platform</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/whitepapers">Whitepapers</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/try-us">Try Us</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import AnimatedBackground from './components/AnimatedBackground.vue'

export default {
  name: 'App',
  components: {
    AnimatedBackground
  }
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

nav a.router-link-exact-active {
  color: #000080;
  background: rgba(0, 0, 128, 0.1);
}
</style> 