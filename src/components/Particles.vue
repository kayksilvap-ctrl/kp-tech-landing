<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none" style="z-index: 0; opacity: 0.9;"></canvas>
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
  hue: number
  pulse: number
  pulseSpeed: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  life: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number = 0
let mouseX = -1000
let mouseY = -1000

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let particles: Particle[] = []
  let shootingStars: ShootingStar[] = []
  let frameCount = 0

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticles = () => {
    const count = Math.min(Math.floor(window.innerWidth * 0.06), 100)
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.1,
      hue: Math.random() > 0.7 ? 270 : 210, // blue or purple
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }))
  }

  const spawnShootingStar = () => {
    shootingStars.push({
      x: Math.random() * canvas.width * 0.8 + canvas.width * 0.2,
      y: Math.random() * canvas.height * 0.3,
      length: 60 + Math.random() * 100,
      speed: 8 + Math.random() * 12,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      opacity: 0.8 + Math.random() * 0.2,
      life: 1,
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    frameCount++

    // Spawn shooting stars occasionally
    if (frameCount % 180 === 0 && shootingStars.length < 2) {
      spawnShootingStar()
    }

    // Draw shooting stars
    shootingStars = shootingStars.filter((star) => {
      star.life -= 0.005
      if (star.life <= 0) return false

      ctx.beginPath()
      const tailX = star.x - Math.cos(star.angle) * star.length * star.life
      const tailY = star.y - Math.sin(star.angle) * star.length * star.life
      
      const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * star.life})`)
      gradient.addColorStop(0.3, `rgba(78, 168, 255, ${star.opacity * star.life * 0.5})`)
      gradient.addColorStop(1, 'transparent')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2 * star.life
      ctx.beginPath()
      ctx.moveTo(star.x, star.y)
      ctx.lineTo(tailX, tailY)
      ctx.stroke()

      // Glow at tip
      ctx.beginPath()
      ctx.arc(star.x, star.y, 3 * star.life, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * star.life})`
      ctx.fill()

      star.x += Math.cos(star.angle) * star.speed
      star.y += Math.sin(star.angle) * star.speed

      return star.x > 0 && star.y > 0
    })

    // Draw and update particles
    particles.forEach((p, i) => {
      p.pulse += p.pulseSpeed
      const pulseFactor = 0.5 + 0.5 * Math.sin(p.pulse)
      
      // Mouse interaction - particles flee from cursor
      const dx = p.x - mouseX
      const dy = p.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 200) {
        const force = (200 - dist) / 200 * 2
        p.speedX += (dx / dist) * force * 0.02
        p.speedY += (dy / dist) * force * 0.02
      }

      // Apply speed limits
      const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
      if (speed > 2) {
        p.speedX = (p.speedX / speed) * 2
        p.speedY = (p.speedY / speed) * 2
      }

      p.x += p.speedX
      p.y += p.speedY

      // Damping
      p.speedX *= 0.99
      p.speedY *= 0.99

      // Wrap around
      if (p.x < -10) p.x = canvas.width + 10
      if (p.x > canvas.width + 10) p.x = -10
      if (p.y < -10) p.y = canvas.height + 10
      if (p.y > canvas.height + 10) p.y = -10

      // Draw particle
      const alpha = p.opacity * (0.6 + 0.4 * pulseFactor)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * (0.8 + 0.4 * pulseFactor), 0, Math.PI * 2)
      
      // Color based on hue
      const color = p.hue === 270 
        ? `rgba(124, 58, 237, ${alpha})` 
        : `rgba(78, 168, 255, ${alpha})`
      ctx.fillStyle = color
      ctx.fill()

      // Glow
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
      ctx.fillStyle = p.hue === 270
        ? `rgba(124, 58, 237, ${alpha * 0.15})`
        : `rgba(78, 168, 255, ${alpha * 0.15})`
      ctx.fill()

      // Connect nearby particles
      particles.slice(i + 1).forEach((p2) => {
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(78, 168, 255, ${0.04 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  const onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  resize()
  createParticles()
  animate()

  window.addEventListener('resize', () => {
    resize()
    createParticles()
  })
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>