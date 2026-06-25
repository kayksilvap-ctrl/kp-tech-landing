<template>
  <section id="sobre" style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; bottom:0; right:25%; width:256px; height:256px; background:rgba(78,168,255,0.05); border-radius:50%; filter:blur(120px);" />

    <v-container style="position:relative; z-index:10;">
      <v-row align="center">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-left">
            <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Sobre</span>
            <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC; line-height:1.2; margin-bottom:24px;" class="text-sm-h2 text-md-h1">
              Quem é <span class="text-gradient">KP_TECH</span>?
            </h2>
            <p style="color:#B7C0CF; font-size:16px; line-height:1.7; margin-bottom:32px;" class="text-md-h6">
              Sou um profissional apaixonado por tecnologia, design e marketing digital. Minha missão é transformar ideias em soluções digitais de alto impacto, combinando criatividade e estratégia para gerar resultados reais para cada cliente.
            </p>
            <v-btn
              color="primary"
              size="x-large"
              style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px;"
              @click="scrollTo('#portfolio')"
            >
              Saiba mais
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Info items -->
            <v-row class="mt-12">
              <v-col v-for="item in infoItems" :key="item.label" cols="6">
                <div style="padding:16px; border-radius:12px; background:rgba(11,19,36,0.6); border:1px solid rgba(255,255,255,0.06);">
                  <p style="font-size:1.75rem; font-weight:700; color:#2563FF; margin-bottom:4px;" class="text-sm-h3">{{ item.value }}</p>
                  <p style="font-size:12px; color:#B7C0CF;">{{ item.label }}</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Right Column - Setup Visual -->
        <v-col cols="12" lg="6">
          <div class="fade-right" style="position:relative;">
            <div style="position:relative; overflow:hidden; border-radius:16px; aspect-ratio:4/3; background:linear-gradient(135deg, rgba(11,19,36,0.8), rgba(6,11,20,0.8)); border:1px solid rgba(255,255,255,0.06);">
              <!-- Glow -->
              <div style="position:absolute; inset:-16px; background:rgba(37,99,255,0.1); border-radius:50%; filter:blur(80px); opacity:0.4;" />

              <!-- Monitor -->
              <div style="display:flex; align-items:center; justify-content:center; height:100%;">
                <div style="position:relative; width:80%; height:70%; border-radius:8px; border:1px solid rgba(255,255,255,0.08); background:rgba(6,11,20,0.8); backdrop-filter:blur(8px); overflow:hidden;">
                  <!-- Window dots -->
                  <div style="display:flex; gap:4px; padding:12px;">
                    <div style="width:10px; height:10px; border-radius:50%; background:rgba(255,59,48,0.5);" />
                    <div style="width:10px; height:10px; border-radius:50%; background:rgba(255,204,0,0.5);" />
                    <div style="width:10px; height:10px; border-radius:50%; background:rgba(52,199,89,0.5);" />
                  </div>
                  <!-- Code lines -->
                  <div style="display:flex; flex-direction:column; gap:8px; padding:12px; padding-top:0;">
                    <div v-for="w in [60, 80, 45, 90, 70]" :key="w" style="height:8px; border-radius:4px; background:linear-gradient(90deg, rgba(37,99,255,0.3), rgba(78,168,255,0.15));" :style="{ width: `${w}%` }" />
                  </div>
                  <!-- Cursor blink -->
                  <div style="position:absolute; bottom:16px; left:16px; width:12px; height:20px; background:rgba(37,99,255,0.6);" class="anim-breath" />
                  <!-- Glare -->
                  <div style="position:absolute; top:0; left:0; right:0; height:33%; background:linear-gradient(180deg, rgba(255,255,255,0.03), transparent);" />
                </div>
              </div>

              <!-- Code text overlay -->
              <div style="position:absolute; top:16px; right:16px; font-size:12px; font-family:monospace; color:rgba(37,99,255,0.3); line-height:1.8; text-align:right;">
                {'>'} npm run build<br />
                {'>'} deploy: success
              </div>

              <!-- Bottom overlay -->
              <div style="position:absolute; inset:0; background:linear-gradient(0deg, rgba(6,11,20,0.6), transparent);" />
            </div>

            <!-- Decorative blurs -->
            <div style="position:absolute; bottom:-16px; right:-16px; width:96px; height:96px; background:rgba(37,99,255,0.05); border-radius:50%; filter:blur(40px);" />
            <div style="position:absolute; top:-16px; left:-16px; width:64px; height:64px; background:rgba(78,168,255,0.05); border-radius:50%; filter:blur(30px);" />
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