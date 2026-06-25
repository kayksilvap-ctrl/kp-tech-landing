<template>
  <section id="hero" style="position:relative; min-height:100vh; display:flex; align-items:center; overflow:hidden; padding-top:64px;">
    <!-- Background Effects -->
    <div style="position:absolute; inset:0;" class="bg-grid" />
    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:800px; height:800px; background:radial-gradient(ellipse at center, rgba(37,99,255,0.15) 0%, transparent 70%);" />
    <div style="position:absolute; top:33%; right:25%; width:128px; height:128px; background:rgba(37,99,255,0.1); border-radius:50%; filter:blur(80px);" class="anim-pulse" />
    <div style="position:absolute; bottom:33%; left:25%; width:96px; height:96px; background:rgba(78,168,255,0.1); border-radius:50%; filter:blur(60px); animation-delay:2s;" class="anim-pulse" />

    <v-container style="position:relative; z-index:10;">
      <v-row align="center">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-up">
            <!-- Badge -->
            <div style="display:inline-flex; align-items:center; gap:8px; padding:8px 16px; border-radius:50px; background:rgba(255,255,255,0.03); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); margin-bottom:32px;">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563FF; display:inline-block;" class="anim-breath" />
              <span style="font-size:12px; font-weight:500; color:#B7C0CF; letter-spacing:2px;">TECNOLOGIA • DESIGN • ESTRATÉGIA</span>
            </div>

            <!-- Title -->
            <h1 style="font-size:2.5rem; font-weight:700; line-height:1.1; margin-bottom:24px; color:#F8FAFC;" class="text-sm-h2 text-md-h1">
              Soluções digitais que
              <br />
              <span class="text-gradient">impulsionam resultados.</span>
            </h1>

            <!-- Description -->
            <p style="color:#B7C0CF; font-size:16px; line-height:1.7; max-width:560px; margin-bottom:32px;" class="text-md-h6">
              Unindo tecnologia, design e estratégia para criar experiências digitais que geram valor para empresas modernas.
            </p>

            <!-- Buttons -->
            <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:48px;">
              <v-btn
                color="primary"
                size="x-large"
                style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px;"
                @click="scrollTo('#servicos')"
              >
                Conheça meus serviços
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px;"
                @click="scrollTo('#portfolio')"
              >
                Ver portfólio
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>

            <!-- Benefits -->
            <div style="display:flex; flex-wrap:wrap; gap:16px;">
              <div v-for="benefit in benefits" :key="benefit" style="display:flex; align-items:center; gap:8px; font-size:13px; color:#B7C0CF;">
                <v-icon size="16" color="primary">mdi-check</v-icon>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Right Column - Hero Visual -->
        <v-col cols="12" lg="6" style="position:relative; min-height:400px;">
          <div class="fade-right" style="display:flex; align-items:center; justify-content:center; height:100%;">
            <div style="position:relative;">
              <!-- Animated glow -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:280px; height:280px; background:rgba(37,99,255,0.15); border-radius:50%; filter:blur(100px);" class="anim-glow" />

              <!-- Outer ring -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:400px; height:400px; border:1px solid rgba(255,255,255,0.03); border-radius:50%;" class="anim-spin" />
              
              <!-- Middle ring -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:300px; height:300px; border:1px solid rgba(255,255,255,0.05); border-radius:50%;" class="anim-spin-reverse" />

              <!-- KP Logo -->
              <div style="position:relative; width:160px; height:160px; border-radius:16px; background:linear-gradient(135deg, rgba(37,99,255,0.15), rgba(78,168,255,0.05)); border:1px solid rgba(255,255,255,0.08); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center;" class="anim-float-slow">
                <span style="font-size:64px; font-weight:900; color:#F8FAFC; letter-spacing:-3px;">KP</span>
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
@media (max-width: 599px) {
  h1 {
    font-size: 2.25rem !important;
  }
}
</style>