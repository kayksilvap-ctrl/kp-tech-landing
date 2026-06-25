<template>
  <section style="position:relative; padding:48px 0; overflow:hidden; background:rgba(11,19,36,0.5);">
    <v-container>
      <v-row>
        <v-col v-for="(stat, i) in stats" :key="stat.label" cols="6" lg="3">
          <div class="text-center fade-up" :class="`delay-${i + 1}`">
            <p style="font-size:2rem; font-weight:700; color:#2563FF; margin-bottom:4px;" class="text-sm-h2">{{ stat.number }}</p>
            <p style="font-size:14px; color:#B7C0CF;">{{ stat.label }}</p>
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