<template>
  <section id="portfolio" style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; top:50%; left:0; width:192px; height:192px; background:rgba(78,168,255,0.05); border-radius:50%; filter:blur(100px);" />
    <div style="position:absolute; top:20%; right:10%; width:128px; height:128px; background:rgba(124,58,237,0.05); border-radius:50%; filter:blur(80px);" />

    <v-container style="position:relative; z-index:10;">
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Portfólio</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC;" class="text-sm-h2 text-md-h1 glow-text">
          Projetos que geram impacto
        </h2>
      </div>

      <v-row>
        <v-col v-for="(item, i) in projects" :key="item.title" cols="12" sm="6" lg="4">
          <div
            class="hover-card portfolio-card fade-up tilt-card"
            :class="`delay-${i + 1}`"
            style="position:relative; overflow:hidden; border-radius:12px; border:1px solid rgba(255,255,255,0.06); cursor:pointer;"
            @mousemove="handleTilt($event, i)"
            @mouseleave="resetTilt(i)"
          >
            <!-- Premium gradient placeholder background -->
            <div class="portfolio-image" :style="{ aspectRatio: '16/10', display: 'flex', alignItems: 'flex-end', background: gradients[i % gradients.length] }">
              <!-- Decorative pattern -->
              <div style="position:absolute; inset:0; opacity:0.1;">
                <div style="position:absolute; top:-20px; right:-20px; width:100px; height:100px; border:1px solid rgba(255,255,255,0.1); border-radius:50%;" />
                <div style="position:absolute; bottom:-30px; left:-30px; width:120px; height:120px; border:1px solid rgba(255,255,255,0.08); border-radius:50%;" />
              </div>
              
              <!-- Tech tags -->
              <div style="position:absolute; top:12px; left:12px; display:flex; gap:4px; flex-wrap:wrap;">
                <span v-for="tag in item.tags" :key="tag" style="padding:3px 8px; border-radius:4px; font-size:10px; font-weight:600; background:rgba(6,11,20,0.7); backdrop-filter:blur(4px); color:#4EA8FF; border:1px solid rgba(78,168,255,0.15);">
                  {{ tag }}
                </span>
              </div>
              
              <div style="padding:20px; width:100%; position:relative; z-index:2; background:linear-gradient(0deg, rgba(6,11,20,0.9), transparent);">
                <span style="font-size:12px; font-weight:700; color:#2563FF; text-transform:uppercase; letter-spacing:1px;">{{ item.category }}</span>
                <h4 style="font-size:16px; font-weight:600; color:#F8FAFC; margin-top:4px;">{{ item.title }}</h4>
                <p style="font-size:12px; color:#B7C0CF; margin-top:4px;">{{ item.description }}</p>
              </div>
            </div>
            <!-- Premium hover overlay -->
            <div class="portfolio-overlay" style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; background:rgba(6,11,20,0.8); backdrop-filter:blur(8px);">
              <div style="width:48px; height:48px; border-radius:12px; background:rgba(37,99,255,0.2); display:flex; align-items:center; justify-content:center; border:1px solid rgba(37,99,255,0.3);">
                <v-icon size="24" color="primary">mdi-eye-outline</v-icon>
              </div>
              <span style="font-size:13px; font-weight:500; color:#F8FAFC;">Ver Projeto</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const gradients = [
  'linear-gradient(135deg, rgba(37,99,255,0.15), rgba(11,19,36,0.9))',
  'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(11,19,36,0.9))',
  'linear-gradient(135deg, rgba(78,168,255,0.15), rgba(11,19,36,0.9))',
  'linear-gradient(135deg, rgba(37,99,255,0.15), rgba(124,58,237,0.1))',
  'linear-gradient(135deg, rgba(78,168,255,0.12), rgba(11,19,36,0.9))',
  'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,255,0.08))',
]

const projects = [
  {
    category: 'Desenvolvimento Web',
    title: 'SaaS Platform',
    description: 'Plataforma completa de gestão empresarial.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
  },
  {
    category: 'Design Gráfico',
    title: 'Identidade Visual',
    description: 'Branding completo para startup de tecnologia.',
    tags: ['Figma', 'Illustrator', 'Branding'],
  },
  {
    category: 'Estratégia Digital',
    title: 'Campanha Integrada',
    description: 'Estratégia de marketing digital com resultados.',
    tags: ['Meta Ads', 'Google Ads', 'Analytics'],
  },
  {
    category: 'Desenvolvimento Web',
    title: 'E-commerce',
    description: 'Loja virtual de alto desempenho.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    category: 'Design Gráfico',
    title: 'UI/UX Design',
    description: 'Interface moderna para aplicativo mobile.',
    tags: ['Figma', 'Prototype', 'Usability'],
  },
  {
    category: 'Gestão de Tráfego',
    title: 'Performance Ads',
    description: 'Campanhas com 300% de ROAS.',
    tags: ['Meta Ads', 'TikTok Ads', 'ROI'],
  },
]

const handleTilt = (e: MouseEvent, index: number) => {
  const cards = document.querySelectorAll('.portfolio-card')
  const card = cards[index] as HTMLElement
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  card.style.transform = `perspective(1000px) rotateX(${(y - centerY) / centerY * -3}deg) rotateY(${(x - centerX) / centerX * 3}deg)`
}

const resetTilt = (index: number) => {
  const cards = document.querySelectorAll('.portfolio-card')
  const card = cards[index] as HTMLElement
  if (!card) return
  card.style.transform = ''
}
</script>

<style scoped>
.portfolio-card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  will-change: transform;
}

.portfolio-image {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.portfolio-card:hover .portfolio-image {
  transform: scale(1.05);
}

.portfolio-overlay {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}
</style>