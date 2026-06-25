<template>
  <v-app>
    <div class="noise-overlay" />
    <Particles />
    <NavBar />
    
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>

    <FooterSection />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Particles from './components/Particles.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CTASection from './components/CTASection.vue'
import FooterSection from './components/FooterSection.vue'

// Initialize scroll animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  // Observe elements after DOM is ready
  setTimeout(() => {
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
})
</script>