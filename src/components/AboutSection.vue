<template>
  <section id="sobre" class="position-relative py-16 py-sm-16 overflow-hidden">
    <div class="position-absolute bottom-0" style="right: 25%; width: 256px; height: 256px; background: rgba(78,168,255,0.05); border-radius: 50%; filter: blur(120px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <v-row align="center" class="gy-8">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-left">
            <span class="d-inline-block text-caption font-weight-bold text-primary tracking-wider text-uppercase mb-4" style="letter-spacing: 0.2em;">Sobre</span>
            <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white mb-6">
              Quem é <span class="text-gradient">KP_TECH</span>?
            </h2>
            <p class="text-gray text-body-1 text-md-h6 mb-8" style="line-height: 1.7;">
              Sou um profissional apaixonado por tecnologia, design e marketing digital. Minha missão é transformar ideias em soluções digitais de alto impacto, combinando criatividade e estratégia para gerar resultados reais para cada cliente.
            </p>
            <v-btn
              color="primary"
              size="x-large"
              class="text-capitalize font-weight-semibold px-8"
              @click="scrollTo('#portfolio')"
            >
              Saiba mais
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Info items -->
            <v-row class="mt-12">
              <v-col v-for="item in infoItems" :key="item.label" cols="6">
                <div class="pa-4 rounded-xl" style="background: rgba(11,19,36,0.6); border: 1px solid rgba(255,255,255,0.06);">
                  <p class="text-h4 text-sm-h3 font-weight-bold text-primary">{{ item.value }}</p>
                  <p class="text-caption text-gray mt-1">{{ item.label }}</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Right Column -->
        <v-col cols="12" lg="6">
          <div class="fade-right position-relative">
            <div class="position-relative overflow-hidden rounded-2xl" style="aspect-ratio: 4/3; background: linear-gradient(135deg, rgba(11,19,36,0.8), rgba(6,11,20,0.8)); border: 1px solid rgba(255,255,255,0.06);">
              <!-- Glow -->
              <div class="position-absolute" style="inset: -16px; background: rgba(37,99,255,0.1); border-radius: 50%; filter: blur(80px); opacity: 0.4;" />

              <!-- Monitor -->
              <div class="d-flex align-center justify-center h-100">
                <div class="position-relative overflow-hidden rounded-lg" style="width: 80%; height: 70%; border: 1px solid rgba(255,255,255,0.08); background: rgba(6,11,20,0.8); backdrop-filter: blur(8px);">
                  <!-- Dots -->
                  <div class="d-flex gap-1 pa-3">
                    <div class="rounded-circle" style="width: 10px; height: 10px; background: rgba(255,59,48,0.5);" />
                    <div class="rounded-circle" style="width: 10px; height: 10px; background: rgba(255,204,0,0.5);" />
                    <div class="rounded-circle" style="width: 10px; height: 10px; background: rgba(52,199,89,0.5);" />
                  </div>
                  <!-- Code lines -->
                  <div class="d-flex flex-column gap-2 pa-3 pt-0">
                    <div v-for="w in [60, 80, 45, 90, 70]" :key="w" class="rounded" style="height: 8px; background: linear-gradient(90deg, rgba(37,99,255,0.3), rgba(78,168,255,0.15));" :style="{ width: `${w}%` }" />
                  </div>
                  <!-- Cursor -->
                  <div class="position-absolute animate-pulse" style="bottom: 16px; left: 16px; width: 12px; height: 20px; background: rgba(37,99,255,0.6);" />
                  <!-- Glare -->
                  <div class="position-absolute top-0 start-0 end-0" style="height: 33%; background: linear-gradient(180deg, rgba(255,255,255,0.03), transparent);" />
                </div>
              </div>

              <!-- Code text -->
              <div class="position-absolute text-caption font-monospace" style="top: 16px; right: 16px; color: rgba(37,99,255,0.3); line-height: 1.8; text-align: right;">
                {'>'} npm run build<br />
                {'>'} deploy: success
              </div>

              <!-- Overlay -->
              <div class="position-absolute inset-0" style="background: linear-gradient(0deg, rgba(6,11,20,0.6), transparent);" />
            </div>

            <!-- Decorative blurs -->
            <div class="position-absolute rounded-circle" style="bottom: -16px; right: -16px; width: 96px; height: 96px; background: rgba(37,99,255,0.05); filter: blur(40px);" />
            <div class="position-absolute rounded-circle" style="top: -16px; left: -16px; width: 64px; height: 64px; background: rgba(78,168,255,0.05); filter: blur(30px);" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const infoItems = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '14+', label: 'Clientes satisfeitos' },
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
</style>