<template>
  <section class="position-relative py-16 py-sm-16 overflow-hidden" style="background: rgba(11, 19, 36, 0.3);">
    <v-container class="position-relative" style="z-index: 10;">
      <div class="text-center mb-12 fade-up">
        <span class="d-inline-block text-caption font-weight-bold text-primary tracking-wider text-uppercase mb-4" style="letter-spacing: 0.2em;">Processo</span>
        <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white">Como trabalhamos</h2>
      </div>

      <div class="position-relative" style="max-width: 800px; margin: 0 auto;">
        <!-- Vertical Line -->
        <div class="position-absolute d-none d-md-block" style="left: 120px; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, rgba(37,99,255,0.5), rgba(78,168,255,0.1));" />

        <v-row v-for="(step, i) in steps" :key="step.step" class="align-center py-6">
          <v-col cols="12" md="3" class="text-center text-md-end">
            <div class="fade-left" :style="{ transitionDelay: `${i * 0.15}s` }">
              <span class="text-h3 font-weight-black text-primary">{{ step.step }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="1" class="d-none d-md-flex justify-center position-relative">
            <div class="rounded-circle border-2" style="width: 16px; height: 16px; background: #060B14; border-color: #2563FF !important; z-index: 2;" />
          </v-col>
          <v-col cols="12" md="8">
            <div class="fade-right" :style="{ transitionDelay: `${i * 0.15}s` }">
              <h3 class="text-h5 font-weight-semibold text-white mb-2">{{ step.title }}</h3>
              <p class="text-body-1 text-gray">{{ step.description }}</p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { step: '01', title: 'Planejamento', description: 'Análise de requisitos e definição de estratégia para garantir o melhor resultado.' },
  { step: '02', title: 'Design', description: 'Criação de protótipos e identidade visual alinhados com sua marca.' },
  { step: '03', title: 'Desenvolvimento', description: 'Codificação e implementação utilizando as melhores práticas do mercado.' },
  { step: '04', title: 'Entrega', description: 'Testes rigorosos, deploy e suporte contínuo para garantir sua satisfação.' },
]
</script>