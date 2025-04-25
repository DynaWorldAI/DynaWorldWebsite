import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Platform from '../views/Platform.vue'
import Services from '../views/Services.vue'
import TryUs from '../views/TryUs.vue'
import Contact from '../views/Contact.vue'
import Whitepapers from '../views/Whitepapers.vue'
import Blog from '../views/Blog.vue'
import ApiDocs from '../views/ApiDocs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/platform',
    name: 'Platform',
    component: Platform
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/try-us',
    name: 'TryUs',
    component: TryUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/whitepapers',
    name: 'Whitepapers',
    component: Whitepapers
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/api-docs',
    name: 'ApiDocs',
    component: ApiDocs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 