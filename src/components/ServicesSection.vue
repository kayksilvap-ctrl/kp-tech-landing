<template>
  <section id="servicos" class="position-relative py-16 py-sm-16 overflow-hidden" style="background: rgba(11, 19, 36, 0.3);">
    <div class="position-absolute top-0" style="left: 25%; width: 192px; height: 192px; background: rgba(37,99,255,0.05); border-radius: 50%; filter: blur(100px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <!-- Section Header -->
      <div class="text-center mb-12 fade-up">
        <span class="d-inline-block text-caption font-weight-bold text-primary tracking-wider text-uppercase mb-4" style="letter-spacing: 0.2em;">Serviços</span>
        <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white">
          Tecnologia a serviço<br class="d-sm-none" /> das ideias
        </h2>
        <p class="mt-4 text-gray text-body-1 max-w-lg mx-auto">
          Soluções completas para transformar seu negócio digitalmente
        </p>
      </div>

      <!-- Cards Grid -->
      <v-row>
        <v-col v-for="(service, i) in services" :key="service.title" cols="12" sm="6" lg="3">
          <div
            class="service-card pa-8 rounded-xl h-100"
            :class="`fade-up`"
            :style="{ transitionDelay: `${i * 0.1}s` }"
          >
            <div class="w-14 h-14 rounded-xl d-flex align-center justify-center mb-6" style="background: rgba(37,99,255,0.1);">
              <v-icon size="28" color="primary">{{ service.icon }}</v-icon>
            </div>
            <h3 class="text-h6 font-weight-semibold text-white mb-3">{{ service.title }}</h3>
            <p class="text-body-2 text-gray">{{ service.description }}</p>
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
</script>

<style scoped>
.service-card {
  background: rgba(11, 19, 36, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.5s ease;
  cursor: default;
}

.service-card:hover {
  border-color: rgba(37, 99, 255, 0.3);
  box-shadow: 0 0 30px rgba(37, 99, 255, 0.15), 0 0 60px rgba(37, 99, 255, 0.05);
  transform: translateY(-4px);
}
</style>