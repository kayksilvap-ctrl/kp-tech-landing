<template>
  <section id="servicos" style="position:relative; padding:96px 0; overflow:hidden; background:rgba(11,19,36,0.3);">
    <div style="position:absolute; top:0; left:25%; width:192px; height:192px; background:rgba(37,99,255,0.05); border-radius:50%; filter:blur(100px);" />
    <div style="position:absolute; bottom:0; right:25%; width:192px; height:192px; background:rgba(124,58,237,0.05); border-radius:50%; filter:blur(100px);" />

    <v-container style="position:relative; z-index:10;">
      <!-- Section Header -->
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Serviços</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC; line-height:1.2;" class="text-sm-h2 text-md-h1 glow-text">
          Tecnologia a serviço<br class="d-sm-none" /> das ideias
        </h2>
        <p style="color:#B7C0CF; font-size:16px; margin-top:16px; max-width:600px; margin-left:auto; margin-right:auto;">
          Soluções completas para transformar seu negócio digitalmente
        </p>
      </div>

      <!-- Cards Grid -->
      <v-row>
        <v-col v-for="(service, i) in services" :key="service.title" cols="12" sm="6" lg="3">
          <div
            class="hover-card tilt-card fade-up"
            :class="`delay-${i + 1}`"
            style="padding:32px; border-radius:12px; background:rgba(11,19,36,0.6); border:1px solid rgba(255,255,255,0.06); height:100%; cursor:default; position:relative; overflow:hidden;"
            @mousemove="handleTilt($event, i)"
            @mouseleave="resetTilt(i)"
          >
            <!-- Hover gradient overlay -->
            <div style="position:absolute; inset:0; background:linear-gradient(135deg, rgba(37,99,255,0.05), transparent); opacity:0; transition:opacity 0.4s;" class="hover-overlay" />
            
            <!-- Icon with rotation -->
            <div style="width:56px; height:56px; border-radius:12px; background:rgba(37,99,255,0.1); display:flex; align-items:center; justify-content:center; margin-bottom:24px; transition:transform 0.5s ease;" class="icon-rotate">
              <v-icon size="28" color="primary">{{ service.icon }}</v-icon>
            </div>
            <h3 style="font-size:18px; font-weight:600; color:#F8FAFC; margin-bottom:12px;">{{ service.title }}</h3>
            <p style="font-size:14px; color:#B7C0CF; line-height:1.7;">{{ service.description }}</p>
            
            <!-- Bottom accent line -->
            <div style="position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg, transparent, #2563FF, transparent); transform:scaleX(0); transition:transform 0.5s ease; transform-origin:center;" class="accent-line" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'mdi-earth',
    title: 'Desenvolvimento Web',
    description: 'Criamos sites e plataformas web modernas, responsivas e de alta performance utilizando as tecnologias mais recentes do mercado.',
  },
  {
    icon: 'mdi-palette',
    title: 'Design Gráfico',
    description: 'Design estratégico que comunica a essência da sua marca, com identidade visual criativa e materiais gráficos de alto impacto.',
  },
  {
    icon: 'mdi-trending-up',
    title: 'Gestão de Tráfego',
    description: 'Campanhas otimizadas para maximizar seu ROI, com segmentação precisa e análise contínua de resultados.',
  },
  {
    icon: 'mdi-lightbulb-on-outline',
    title: 'Estratégia Digital',
    description: 'Planejamento estratégico completo para transformar sua presença digital em resultados concretos para o negócio.',
  },
]

const handleTilt = (e: MouseEvent, index: number) => {
  const cards = document.querySelectorAll('.tilt-card')
  const card = cards[index] as HTMLElement
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / centerY * -5
  const rotateY = (x - centerX) / centerX * 5
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
}

const resetTilt = (index: number) => {
  const cards = document.querySelectorAll('.tilt-card')
  const card = cards[index] as HTMLElement
  if (!card) return
  card.style.transform = ''
}
</script>

<style scoped>
.tilt-card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  will-change: transform;
}

.tilt-card:hover .icon-rotate {
  transform: rotateY(180deg) scale(1.1);
}

.tilt-card:hover .hover-overlay {
  opacity: 1 !important;
}

.tilt-card:hover .accent-line {
  transform: scaleX(1) !important;
}
</style>