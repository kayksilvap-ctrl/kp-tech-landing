<template>
  <section id="portfolio" class="position-relative py-16 py-sm-16 overflow-hidden">
    <div class="position-absolute" style="top: 50%; left: 0; width: 192px; height: 192px; background: rgba(78,168,255,0.05); border-radius: 50%; filter: blur(100px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <div class="text-center mb-12 fade-up">
        <span class="d-inline-block text-caption font-weight-bold text-primary tracking-wider text-uppercase mb-4" style="letter-spacing: 0.2em;">Portfólio</span>
        <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white">
          Projetos que geram impacto
        </h2>
      </div>

      <v-row>
        <v-col v-for="(item, i) in projects" :key="item.title" cols="12" sm="6" lg="4">
          <div class="portfolio-card position-relative overflow-hidden rounded-xl fade-up" :style="{ transitionDelay: `${i * 0.1}s` }">
            <!-- Image placeholder -->
            <div class="portfolio-image d-flex align-end" style="aspect-ratio: 16/10; background: linear-gradient(135deg, rgba(37,99,255,0.1), rgba(11,19,36,0.8));">
              <div class="pa-5 w-100 position-relative" style="z-index: 2;">
                <span class="text-caption font-weight-bold text-primary text-uppercase tracking-wider">{{ item.category }}</span>
                <h4 class="text-h6 font-weight-semibold text-white mt-1">{{ item.title }}</h4>
                <p class="text-caption text-gray mt-1">{{ item.description }}</p>
              </div>
            </div>
            <!-- Hover overlay -->
            <div class="portfolio-overlay position-absolute inset-0 d-flex align-center justify-center">
              <v-icon size="32" color="white">mdi-arrow-top-right</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    category: 'Desenvolvimento Web',
    title: 'SaaS Platform',
    description: 'Plataforma completa de gestão empresarial com dashboard analítico.',
  },
  {
    category: 'Design Gráfico',
    title: 'Identidade Visual',
    description: 'Branding completo para startup de tecnologia inovadora.',
  },
  {
    category: 'Estratégia Digital',
    title: 'Campanha Integrada',
    description: 'Estratégia de marketing digital com resultados mensuráveis.',
  },
  {
    category: 'Desenvolvimento Web',
    title: 'E-commerce',
    description: 'Loja virtual de alto desempenho com taxa de conversão otimizada.',
  },
  {
    category: 'Design Gráfico',
    title: 'UI/UX Design',
    description: 'Interface moderna e intuitiva para aplicativo mobile.',
  },
  {
    category: 'Gestão de Tráfego',
    title: 'Performance Ads',
    description: 'Campanhas pagas que geraram 300% de ROAS para o cliente.',
  },
]
</script>

<style scoped>
.inset-0 {
  inset: 0;
}

.portfolio-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.5s ease;
  cursor: pointer;
}

.portfolio-card:hover {
  border-color: rgba(37, 99, 255, 0.3);
  box-shadow: 0 0 30px rgba(37, 99, 255, 0.15);
}

.portfolio-image {
  transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-image {
  transform: scale(1.05);
  filter: blur(2px);
}

.portfolio-overlay {
  background: rgba(6, 11, 20, 0.7);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}
</style>