<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none" style="z-index: 0; opacity: 0.8;"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number = 0

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let particles: Particle[] = []

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticles = () => {
    const count = Math.min(Math.floor(window.innerWidth * 0.05), 80)
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((p, i) => {
      p.x += p.speedX
      p.y += p.speedY

      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(78, 168, 255, ${p.opacity})`
      ctx.fill()

      particles.slice(i + 1).forEach((p2) => {
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(78, 168, 255, ${0.06 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  resize()
  createParticles()
  animate()

  window.addEventListener('resize', () => {
    resize()
    createParticles()
  })
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>