<template>
  <section class="position-relative py-16 py-sm-16 overflow-hidden">
    <div class="position-absolute" style="top: 0; right: 25%; width: 256px; height: 256px; background: rgba(37,99,255,0.05); border-radius: 50%; filter: blur(120px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <div class="text-center mb-12 fade-up">
        <span class="d-inline-block text-caption font-weight-bold text-primary tracking-wider text-uppercase mb-4" style="letter-spacing: 0.2em;">Depoimentos</span>
        <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white">O que nossos clientes dizem</h2>
      </div>

      <v-row>
        <v-col v-for="(testimonial, i) in testimonials" :key="testimonial.name" cols="12" md="4">
          <div class="testimonial-card pa-6 rounded-xl h-100 fade-up" :style="{ transitionDelay: `${i * 0.15}s` }">
            <div class="d-flex align-center gap-3 mb-4">
              <v-avatar size="48" :color="avatarColors[i]" class="font-weight-bold text-white">
                {{ testimonial.avatar }}
              </v-avatar>
              <div>
                <p class="text-subtitle-1 font-weight-semibold text-white mb-0">{{ testimonial.name }}</p>
                <p class="text-caption text-gray mb-0">{{ testimonial.company }}</p>
              </div>
            </div>
            
            <div class="d-flex mb-3">
              <v-icon v-for="star in 5" :key="star" size="16" color="warning">mdi-star</v-icon>
            </div>

            <p class="text-body-2 text-gray" style="line-height: 1.7;">"{{ testimonial.text }}"</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const avatarColors = ['#2563FF', '#4EA8FF', '#7C3AED']

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'TechFlow Solutions',
    avatar: 'CM',
    text: 'A KP_TECH transformou nossa presença digital. O resultado superou todas as expectativas. Profissionalismo e qualidade excepcionais.',
  },
  {
    name: 'Ana Oliveira',
    company: 'Digital Corp',
    avatar: 'AO',
    text: 'Trabalhar com a KP_TECH foi uma experiência incrível. Entregaram um produto moderno e funcional que elevou nossa marca.',
  },
  {
    name: 'Roberto Lima',
    company: 'InnovaTech',
    avatar: 'RL',
    text: 'Equipe extremamente talentosa e comprometida. O projeto foi entregue no prazo com uma qualidade que nos surpreendeu.',
  },
]
</script>

<style scoped>
.testimonial-card {
  background: rgba(11, 19, 36, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
}

.testimonial-card:hover {
  border-color: rgba(37, 99, 255, 0.2);
  box-shadow: 0 0 20px rgba(37, 99, 255, 0.1);
  transform: translateY(-2px);
}
</style>