<template>
  <v-app>
    <div class="noise-overlay" />
    <div class="spotlight" ref="spotlightRef" />
    <div class="custom-cursor" ref="cursorRef" />
    <div class="custom-cursor-dot" ref="cursorDotRef" />
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
import { ref, onMounted } from 'vue'
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

const cursorRef = ref<HTMLElement | null>(null)
const cursorDotRef = ref<HTMLElement | null>(null)
const spotlightRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Custom cursor + spotlight
  const cursor = cursorRef.value
  const dot = cursorDotRef.value
  const spotlight = spotlightRef.value

  if (!cursor || !dot || !spotlight) return

  const onMouseMove = (e: MouseEvent) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
    dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
    spotlight.style.setProperty('--mouse-x', `${e.clientX}px`)
    spotlight.style.setProperty('--mouse-y', `${e.clientY}px`)
  }

  document.addEventListener('mousemove', onMouseMove)

  // Scroll animations
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

  setTimeout(() => {
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
})
</script>