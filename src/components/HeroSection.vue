<template>
  <section id="hero" style="position:relative; min-height:100vh; display:flex; align-items:center; overflow:hidden; padding-top:64px;">
    <!-- Aurora Background -->
    <div class="aurora-bg" />
    
    <!-- Grid overlay -->
    <div style="position:absolute; inset:0;" class="bg-grid" />
    
    <!-- Radial gradient -->
    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:800px; height:800px; background:radial-gradient(ellipse at center, rgba(37,99,255,0.15) 0%, transparent 70%);" />

    <v-container style="position:relative; z-index:10;">
      <v-row align="center">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-up">
            <!-- Badge -->
            <div style="display:inline-flex; align-items:center; gap:8px; padding:8px 16px; border-radius:50px; background:rgba(255,255,255,0.03); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); margin-bottom:32px;" class="anim-border-glow">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563FF; display:inline-block;" class="anim-breath" />
              <span style="font-size:12px; font-weight:500; color:#B7C0CF; letter-spacing:2px;">TECNOLOGIA • DESIGN • ESTRATÉGIA</span>
            </div>

            <!-- Title -->
            <h1 style="font-size:2.5rem; font-weight:700; line-height:1.1; margin-bottom:24px; color:#F8FAFC;" class="text-sm-h2 text-md-h1 glow-text">
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
                style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px; position:relative; overflow:hidden;"
                class="anim-glow"
                @click="scrollTo('#servicos')"
              >
                <span style="position:relative; z-index:2;">Conheça meus serviços</span>
                <v-icon end style="position:relative; z-index:2;">mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px; border-color:rgba(255,255,255,0.2);"
                class="hover-card"
                @click="scrollTo('#portfolio')"
              >
                Ver portfólio
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>

            <!-- Benefits -->
            <div style="display:flex; flex-wrap:wrap; gap:16px;">
              <div v-for="benefit in benefits" :key="benefit" style="display:flex; align-items:center; gap:8px; font-size:13px; color:#B7C0CF;">
                <div style="width:22px; height:22px; border-radius:6px; background:rgba(37,99,255,0.15); display:flex; align-items:center; justify-content:center;">
                  <v-icon size="14" color="primary">mdi-check</v-icon>
                </div>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Right Column - Hero Visual -->
        <v-col cols="12" lg="6" style="position:relative; min-height:500px;">
          <div class="fade-right" style="display:flex; align-items:center; justify-content:center; height:100%;">
            <div style="position:relative;">
              <!-- Animated glow - multiple layers -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:300px; height:300px; background:rgba(37,99,255,0.12); border-radius:50%; filter:blur(120px);" class="anim-glow" />
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:200px; height:200px; background:rgba(124,58,237,0.08); border-radius:50%; filter:blur(100px); animation-delay:1s;" class="anim-glow" />

              <!-- Three rings with different speeds -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:420px; height:420px; border:1px solid rgba(255,255,255,0.03); border-radius:50%;" class="anim-spin" />
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:320px; height:320px; border:1px solid rgba(78,168,255,0.06); border-radius:50%;" class="anim-spin-reverse" />
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:220px; height:220px; border:1px solid rgba(37,99,255,0.08); border-radius:50%; animation: continuous-spin 15s linear infinite;" />

              <!-- Orbiting dots -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:370px; height:370px; border-radius:50%;" class="anim-spin">
                <div style="position:absolute; top:-4px; left:50%; width:8px; height:8px; border-radius:50%; background:#4EA8FF; transform:translateX(-50%); box-shadow:0 0 10px #4EA8FF, 0 0 20px rgba(78,168,255,0.3);" />
              </div>
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:270px; height:270px; border-radius:50%;" class="anim-spin-reverse">
                <div style="position:absolute; top:-3px; left:50%; width:6px; height:6px; border-radius:50%; background:#7C3AED; transform:translateX(-50%); box-shadow:0 0 10px #7C3AED;" />
              </div>

              <!-- KP Logo -->
              <div style="position:relative; width:160px; height:160px; border-radius:20px; background:linear-gradient(135deg, rgba(37,99,255,0.2), rgba(124,58,237,0.08)); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(12px); display:flex; align-items:center; justify-content:center;" class="anim-float-slow">
                <!-- Inner glow -->
                <div style="position:absolute; inset:10px; border-radius:12px; background:radial-gradient(ellipse at center, rgba(37,99,255,0.2), transparent);" />
                <span style="font-size:64px; font-weight:900; color:#F8FAFC; letter-spacing:-3px; position:relative; z-index:2; text-shadow:0 0 40px rgba(37,99,255,0.3);">KP</span>
                <!-- Corner accents -->
                <div style="position:absolute; top:-1px; left:-1px; width:20px; height:20px; border-top:2px solid #2563FF; border-left:2px solid #2563FF; border-radius:4px 0 0 0;" />
                <div style="position:absolute; bottom:-1px; right:-1px; width:20px; height:20px; border-bottom:2px solid #7C3AED; border-right:2px solid #7C3AED; border-radius:0 0 4px 0;" />
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