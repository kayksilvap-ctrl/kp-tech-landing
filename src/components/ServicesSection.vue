<template>
  <section id="servicos" style="position:relative; padding:96px 0; overflow:hidden; background:rgba(11,19,36,0.3);">
    <div style="position:absolute; top:0; left:25%; width:192px; height:192px; background:rgba(37,99,255,0.05); border-radius:50%; filter:blur(100px);" />

    <v-container style="position:relative; z-index:10;">
      <!-- Section Header -->
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Serviços</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC; line-height:1.2;" class="text-sm-h2 text-md-h1">
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
            class="hover-card"
            :class="`fade-up delay-${i + 1}`"
            style="padding:32px; border-radius:12px; background:rgba(11,19,36,0.6); border:1px solid rgba(255,255,255,0.06); height:100%; cursor:default;"
          >
            <div style="width:56px; height:56px; border-radius:12px; background:rgba(37,99,255,0.1); display:flex; align-items:center; justify-content:center; margin-bottom:24px;">
              <v-icon size="28" color="primary">{{ service.icon }}</v-icon>
            </div>
            <h3 style="font-size:18px; font-weight:600; color:#F8FAFC; margin-bottom:12px;">{{ service.title }}</h3>
            <p style="font-size:14px; color:#B7C0CF; line-height:1.7;">{{ service.description }}</p>
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