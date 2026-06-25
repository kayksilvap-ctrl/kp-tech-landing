<template>
  <section style="position:relative; padding:96px 0; overflow:hidden; background:rgba(11,19,36,0.3);">
    <v-container style="position:relative; z-index:10;">
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Processo</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC;" class="text-sm-h2 text-md-h1">Como trabalhamos</h2>
      </div>

      <div style="position:relative; max-width:800px; margin:0 auto;">
        <!-- Vertical Line -->
        <div class="d-none d-md-block" style="position:absolute; left:120px; top:0; bottom:0; width:2px; background:linear-gradient(180deg, rgba(37,99,255,0.5), rgba(78,168,255,0.1));" />

        <v-row v-for="(step, i) in steps" :key="step.step" align="center" class="py-6">
          <v-col cols="12" md="3" class="text-center text-md-end">
            <div class="fade-left" :class="`delay-${i + 1}`">
              <span style="font-size:2rem; font-weight:900; color:#2563FF;" class="text-h3">{{ step.step }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="1" class="d-none d-md-flex justify-center" style="position:relative;">
            <div style="width:16px; height:16px; border-radius:50%; background:#060B14; border:2px solid #2563FF; z-index:2;" />
          </v-col>
          <v-col cols="12" md="8">
            <div class="fade-right" :class="`delay-${i + 1}`">
              <h3 style="font-size:20px; font-weight:600; color:#F8FAFC; margin-bottom:8px;">{{ step.title }}</h3>
              <p style="font-size:16px; color:#B7C0CF;">{{ step.description }}</p>
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