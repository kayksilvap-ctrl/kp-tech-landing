<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="bg-dark-secondary border-l border-white/5"
    width="280"
  >
    <template #prepend>
      <v-list-item class="pt-6 px-4">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563FF] to-[#4EA8FF] flex items-center justify-center font-bold text-white text-sm">K</div>
          <span class="text-lg font-semibold text-white tracking-tight">KP_<span class="text-[#2563FF]">TECH</span></span>
        </div>
      </v-list-item>
    </template>

    <v-list nav density="compact" class="px-3">
      <v-list-item
        v-for="link in navLinks"
        :key="link.href"
        @click="scrollTo(link.href)"
        class="text-gray hover:text-white rounded-lg mb-1"
      >
        <template #title>
          <span class="text-sm font-medium">{{ link.label }}</span>
        </template>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="pa-4 pt-6 border-t border-white/5">
        <v-btn
          block
          color="primary"
          size="large"
          class="text-capitalize font-semibold"
          href="https://wa.me/5511999999999"
          target="_blank"
        >
          Vamos conversar
          <v-icon end>mdi-whatsapp</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-app-bar
    flat
    :class="['navbar', { 'navbar-scrolled': scrolled }]"
    height="64"
    class="px-4"
  >
    <template #prepend>
      <a
        href="#hero"
        @click.prevent="scrollTo('#hero')"
        class="flex items-center gap-2 text-decoration-none"
      >
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563FF] to-[#4EA8FF] flex items-center justify-center font-bold text-white text-sm">K</div>
        <span class="text-lg font-semibold text-white tracking-tight hidden sm:inline">KP_<span class="text-[#2563FF]">TECH</span></span>
      </a>
    </template>

    <template #default>
      <div class="hidden lg:flex items-center gap-8 mx-auto">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
          class="text-sm font-medium text-gray hover:text-white transition-colors duration-200 text-decoration-none relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2563FF] transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </template>

    <template #append>
      <div class="flex items-center gap-3">
        <v-btn
          class="hidden lg:flex text-capitalize font-medium"
          color="primary"
          variant="outlined"
          size="small"
          rounded="xl"
          href="https://wa.me/5511999999999"
          target="_blank"
        >
          Vamos conversar
          <v-icon end size="18">mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          class="lg:hidden"
          variant="text"
          icon
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const scrollTo = (href: string) => {
  drawer.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let scrollHandler: (() => void) | null = null

onMounted(() => {
  scrollHandler = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>

<style scoped>
.navbar {
  background: transparent !important;
  transition: all 0.5s ease !important;
  z-index: 50 !important;
}

.navbar-scrolled {
  background: rgba(6, 11, 20, 0.8) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
}
</style>