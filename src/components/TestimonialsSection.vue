<template>
  <section style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; top:0; right:25%; width:256px; height:256px; background:rgba(37,99,255,0.05); border-radius:50%; filter:blur(120px);" />

    <v-container style="position:relative; z-index:10;">
      <div class="text-center mb-12 fade-up">
        <span style="display:inline-block; font-size:12px; font-weight:700; color:#2563FF; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px;">Depoimentos</span>
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC;" class="text-sm-h2 text-md-h1">O que nossos clientes dizem</h2>
      </div>

      <v-row>
        <v-col v-for="(testimonial, i) in testimonials" :key="testimonial.name" cols="12" md="4">
          <div
            class="hover-card fade-up"
            :class="`delay-${i + 1}`"
            style="padding:24px; border-radius:12px; background:rgba(11,19,36,0.6); border:1px solid rgba(255,255,255,0.06); backdrop-filter:blur(12px); height:100%;"
          >
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <v-avatar size="48" :color="avatarColors[i]" style="font-weight:700; color:white;">
                {{ testimonial.avatar }}
              </v-avatar>
              <div>
                <p style="font-size:15px; font-weight:600; color:#F8FAFC; margin-bottom:0;">{{ testimonial.name }}</p>
                <p style="font-size:12px; color:#B7C0CF; margin-bottom:0;">{{ testimonial.company }}</p>
              </div>
            </div>
            
            <div style="display:flex; margin-bottom:12px;">
              <v-icon v-for="star in 5" :key="star" size="16" color="warning">mdi-star</v-icon>
            </div>

            <p style="font-size:14px; color:#B7C0CF; line-height:1.7;">"{{ testimonial.text }}"</p>
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