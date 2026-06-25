<template>
  <section id="hero" class="position-relative min-vh-100 d-flex align-center overflow-hidden pt-16">
    <!-- Background Effects -->
    <div class="position-absolute inset-0 bg-grid opacity-50" />
    <div class="position-absolute top-50 start-50 translate-middle" style="width: 800px; height: 800px; background: radial-gradient(ellipse at center, rgba(37,99,255,0.15) 0%, transparent 70%);" />
    <div class="position-absolute" style="top: 33%; right: 25%; width: 128px; height: 128px; background: rgba(37,99,255,0.1); border-radius: 50%; filter: blur(80px);" />
    <div class="position-absolute" style="bottom: 33%; left: 25%; width: 96px; height: 96px; background: rgba(78,168,255,0.1); border-radius: 50%; filter: blur(60px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <v-row align="center" class="gy-8">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-up">
            <!-- Badge -->
            <div class="d-inline-flex align-center gap-2 px-4 py-2 rounded-pill glass-light mb-8">
              <span class="w-2 h-2 rounded-circle bg-[#2563FF] animate-pulse-glow d-inline-block" />
              <span class="text-caption font-weight-medium text-gray tracking-wider">TECNOLOGIA • DESIGN • ESTRATÉGIA</span>
            </div>

            <!-- Title -->
            <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold lh-sm mb-6" style="line-height: 1.1;">
              Soluções digitais que
              <span class="text-gradient">impulsionam resultados.</span>
            </h1>

            <!-- Description -->
            <p class="text-gray text-body-1 text-md-h6 max-w-lg mb-8" style="line-height: 1.7;">
              Unindo tecnologia, design e estratégia para criar experiências digitais que geram valor para empresas modernas.
            </p>

            <!-- Buttons -->
            <div class="d-flex flex-wrap gap-4 mb-12">
              <v-btn
                color="primary"
                size="x-large"
                class="text-capitalize font-weight-semibold px-8 py-6"
                @click="scrollTo('#servicos')"
              >
                Conheça meus serviços
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                class="text-capitalize font-weight-semibold px-8 py-6"
                @click="scrollTo('#portfolio')"
              >
                Ver portfólio
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>

            <!-- Benefits -->
            <div class="d-flex flex-wrap gap-4">
              <div v-for="benefit in benefits" :key="benefit" class="d-flex align-center gap-2 text-caption text-gray">
                <v-icon size="16" color="primary">mdi-check</v-icon>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Right Column -->
        <v-col cols="12" lg="6" class="position-relative" style="min-height: 400px;">
          <div class="d-flex align-center justify-center h-100 fade-right">
            <div class="position-relative">
              <!-- Glow behind logo -->
              <div class="position-absolute top-50 start-50 translate-middle" style="width: 200px; height: 200px; background: rgba(37,99,255,0.2); border-radius: 50%; filter: blur(100px);" />

              <!-- Animated rings -->
              <div class="position-absolute top-50 start-50 translate-middle border rounded-circle animate-spin-slow" style="width: 350px; height: 350px; border-color: rgba(255,255,255,0.03);" />
              <div class="position-absolute top-50 start-50 translate-middle border rounded-circle animate-spin-slow" style="width: 250px; height: 250px; border-color: rgba(255,255,255,0.05); animation-direction: reverse; animation-duration: 25s;" />

              <!-- Logo KP -->
              <div class="position-relative rounded-3xl d-flex align-center justify-center" style="width: 160px; height: 160px; background: linear-gradient(135deg, rgba(37,99,255,0.15), rgba(78,168,255,0.05)); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px);">
                <span class="text-h2 font-black text-white" style="letter-spacing: -2px;">KP</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  'Desenvolvimento moderno',
  'Design estratégico',
  'Performance',
  'Alta conversão',
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.inset-0 {
  inset: 0;
}

.max-w-lg {
  max-width: 560px;
}

@media (max-width: 599px) {
  h1 {
    font-size: 2.25rem !important;
  }
}
</style>