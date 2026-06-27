<template>
  <section id="sobre" style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; bottom:0; right:25%; width:256px; height:256px; background:rgba(78,168,255,0.05); border-radius:50%; filter:blur(120px);" />

    <v-container style="position:relative; z-index:10;">
      <v-row align="center">
        <!-- Left Column -->
        <v-col cols="12" lg="6">
          <div class="fade-left">
            <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Sobre</span>
            <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC; line-height:1.2; margin-bottom:24px;" class="text-sm-h2 text-md-h1 glow-text">
              Quem é <span class="text-gradient">KP_TECH</span>?
            </h2>
            <p style="color:#B7C0CF; font-size:16px; line-height:1.7; margin-bottom:32px;" class="text-md-h6">
              Sou um profissional apaixonado por tecnologia, design e marketing digital. Minha missão é transformar ideias em soluções digitais de alto impacto, combinando criatividade e estratégia para gerar resultados reais para cada cliente.
            </p>
            <v-btn
              color="primary"
              size="x-large"
              style="padding:24px 32px; font-size:15px; text-transform:none; font-weight:600; border-radius:12px;"
              class="anim-glow"
              @click="scrollTo('#portfolio')"
            >
              Saiba mais
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Animated Info items -->
            <v-row class="mt-12">
              <v-col v-for="(item, i) in infoItems" :key="item.label" cols="6">
                <div class="hover-card fade-up" :class="`delay-${i + 1}`" style="padding:20px; border-radius:12px; background:rgba(11,19,36,0.6); border:1px solid rgba(255,255,255,0.06);">
                  <div ref="counterRefs" :data-target="item.value">
                    <p style="font-size:2rem; font-weight:700; color:#2563FF; margin-bottom:4px;" class="text-sm-h3">{{ item.value }}</p>
                  </div>
                  <p style="font-size:12px; color:#B7C0CF;">{{ item.label }}</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Right Column - Terminal Visual -->
        <v-col cols="12" lg="6">
          <div class="fade-right" style="position:relative;">
            <div style="position:relative; overflow:hidden; border-radius:16px; aspect-ratio:4/3; background:linear-gradient(135deg, rgba(11,19,36,0.9), rgba(6,11,20,0.9)); border:1px solid rgba(37,99,255,0.15);" class="anim-border-glow">
              <!-- Glow -->
              <div style="position:absolute; inset:-16px; background:rgba(37,99,255,0.08); border-radius:50%; filter:blur(80px); opacity:0.4;" />

              <!-- Terminal Monitor -->
              <div style="display:flex; align-items:center; justify-content:center; height:100%; padding:16px;">
                <div style="width:100%; height:100%; border-radius:8px; border:1px solid rgba(37,99,255,0.15); background:rgba(0,0,0,0.6); backdrop-filter:blur(8px); overflow:hidden; display:flex; flex-direction:column;">
                  <!-- Terminal Header -->
                  <div style="display:flex; align-items:center; gap:6px; padding:10px 12px; background:rgba(255,255,255,0.03); border-bottom:1px solid rgba(255,255,255,0.05);">
                    <div style="width:10px; height:10px; border-radius:50%; background:#FF3B30;" />
                    <div style="width:10px; height:10px; border-radius:50%; background:#FFCC00;" />
                    <div style="width:10px; height:10px; border-radius:50%; background:#34C759;" />
                    <span style="font-size:11px; color:rgba(255,255,255,0.3); margin-left:12px; font-family:monospace;">bash — kp-tech@portfolio: ~</span>
                  </div>
                  
                  <!-- Terminal Content -->
                  <div style="flex:1; padding:12px; font-family:monospace; font-size:12px; line-height:1.8; overflow:hidden;">
                    <div style="color:rgba(37,99,255,0.6);">$ <span style="color:#4EA8FF;">cd</span> about-kptech</div>
                    <div style="color:rgba(37,99,255,0.6);">$ <span style="color:#4EA8FF;">cat</span> profile.md</div>
                    <div><span style="color:#34C759;">►</span> <span style="color:rgba(255,255,255,0.7);">Desenvolvedor Full Stack</span></div>
                    <div><span style="color:#34C759;">►</span> <span style="color:rgba(255,255,255,0.7);">Designer UI/UX</span></div>
                    <div><span style="color:#34C759;">►</span> <span style="color:rgba(255,255,255,0.7);">Estrategista Digital</span></div>
                    <div style="margin-top:4px;"><span style="color:#FFCC00;">└─</span> <span style="color:rgba(255,255,255,0.5);">Status:</span> <span style="color:#34C759;">Disponível para projetos</span></div>
                    <div style="margin-top:8px; color:rgba(78,168,255,0.8);" class="anim-typing-cursor">$ <span style="color:#4EA8FF;">npm</span> run deploy --success</div>
                  </div>
                </div>
              </div>

              <!-- Code rain effect subtle -->
              <div style="position:absolute; top:16px; right:16px; font-size:10px; font-family:monospace; color:rgba(37,99,255,0.08); line-height:1.4; text-align:right; opacity:0.5; user-select:none;" class="anim-breath">
                <div v-for="n in 8" :key="n" style="opacity: 0.3 + (n * 0.08);">{{ codeLines[n - 1] }}</div>
              </div>
            </div>

            <!-- Decorative blurs -->
            <div style="position:absolute; bottom:-16px; right:-16px; width:96px; height:96px; background:rgba(37,99,255,0.08); border-radius:50%; filter:blur(40px);" />
            <div style="position:absolute; top:-16px; left:-16px; width:64px; height:64px; background:rgba(78,168,255,0.08); border-radius:50%; filter:blur(30px);" />
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

const codeLines = [
  'function createImpact() {',
  '  const strategy = new Strategy();',
  '  const design = new Design();',
  '  const tech = new Technology();',
  '  return strategy.combine(design, tech);',
  '}',
  '',
  '// Deploying...',
  'system.deploy(createImpact());',
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>