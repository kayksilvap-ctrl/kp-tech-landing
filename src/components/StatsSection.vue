<template>
  <section class="position-relative py-12 overflow-hidden" style="background: rgba(11, 19, 36, 0.5);">
    <v-container>
      <v-row>
        <v-col v-for="(stat, i) in stats" :key="stat.label" cols="6" lg="3">
          <div class="text-center fade-up" :style="{ transitionDelay: `${i * 0.1}s` }">
            <p class="text-h3 text-sm-h2 font-weight-bold text-primary mb-1">{{ stat.number }}</p>
            <p class="text-body-2 text-gray">{{ stat.label }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { number: '22+', label: 'Projetos concluídos' },
  { number: '3.744+', label: 'Pessoas impactadas' },
  { number: '14+', label: 'Clientes' },
  { number: '100%', label: 'Compromisso com qualidade' },
]
</script>