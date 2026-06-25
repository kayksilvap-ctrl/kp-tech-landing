<template>
  <section id="portfolio" style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; top:50%; left:0; width:192px; height:192px; background:rgba(78,168,255,0.05); border-radius:50%; filter:blur(100px);" />

    <v-container style="position:relative; z-index:10;">
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Portfólio</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC;" class="text-sm-h2 text-md-h1">
          Projetos que geram impacto
        </h2>
      </div>

      <v-row>
        <v-col v-for="(item, i) in projects" :key="item.title" cols="12" sm="6" lg="4">
          <div
            class="hover-card portfolio-card fade-up"
            :class="`delay-${i + 1}`"
            style="position:relative; overflow:hidden; border-radius:12px; border:1px solid rgba(255,255,255,0.06); cursor:pointer;"
          >
            <div class="portfolio-image" style="aspect-ratio:16/10; display:flex; align-items:flex-end; background:linear-gradient(135deg, rgba(37,99,255,0.1), rgba(11,19,36,0.8));">
              <div style="padding:20px; width:100%; position:relative; z-index:2;">
                <span style="font-size:12px; font-weight:700; color:#2563FF; text-transform:uppercase; letter-spacing:1px;">{{ item.category }}</span>
                <h4 style="font-size:16px; font-weight:600; color:#F8FAFC; margin-top:4px;">{{ item.title }}</h4>
                <p style="font-size:12px; color:#B7C0CF; margin-top:4px;">{{ item.description }}</p>
              </div>
            </div>
            <!-- Hover overlay -->
            <div class="portfolio-overlay" style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(6,11,20,0.7); backdrop-filter:blur(4px);">
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
.portfolio-image {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.portfolio-card:hover .portfolio-image {
  transform: scale(1.05);
  filter: blur(2px);
}

.portfolio-overlay {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}
</style>