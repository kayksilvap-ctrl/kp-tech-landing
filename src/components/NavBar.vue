<template>
  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    style="background: #0B1324; border-left: 1px solid rgba(255,255,255,0.05);"
    width="280"
  >
    <template #prepend>
      <v-list-item class="pt-6 px-4">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#2563FF,#4EA8FF); display:flex; align-items:center; justify-content:center; font-weight:700; color:white; font-size:14px;">K</div>
          <span style="font-size:18px; font-weight:600; color:white; letter-spacing:-0.5px;">KP_<span style="color:#2563FF;">TECH</span></span>
        </div>
      </v-list-item>
    </template>

    <v-list nav density="compact" class="px-3">
      <v-list-item
        v-for="link in navLinks"
        :key="link.href"
        @click="scrollTo(link.href)"
        style="color:#B7C0CF; border-radius:8px; margin-bottom:4px;"
        class="mobile-nav-item"
      >
        <template #title>
          <span style="font-size:14px; font-weight:500;">{{ link.label }}</span>
        </template>
      </v-list-item>
    </v-list>

    <template #append>
      <div style="padding:16px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.05);">
        <v-btn
          block
          color="primary"
          size="large"
          style="text-transform:none; font-weight:600; border-radius:12px;"
          href="https://wa.me/5511999999999"
          target="_blank"
        >
          Vamos conversar
          <v-icon end>mdi-whatsapp</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <!-- Top App Bar -->
  <v-app-bar
    flat
    :class="['navbar', { 'navbar-scrolled': scrolled }]"
    height="64"
    style="padding: 0 16px;"
  >
    <template #prepend>
      <a
        href="#hero"
        @click.prevent="scrollTo('#hero')"
        style="display:flex; align-items:center; gap:8px; text-decoration:none;"
      >
        <div style="width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#2563FF,#4EA8FF); display:flex; align-items:center; justify-content:center; font-weight:700; color:white; font-size:14px;">K</div>
        <span style="font-size:18px; font-weight:600; color:white; letter-spacing:-0.5px;" class="d-none d-sm-inline">KP_<span style="color:#2563FF;">TECH</span></span>
      </a>
    </template>

    <template #default>
      <!-- Desktop Navigation - fixed width container for centering -->
      <div class="d-none d-lg-flex" style="gap:32px; margin:0 auto;">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
          style="font-size:14px; font-weight:500; color:#B7C0CF; text-decoration:none; transition:color 0.2s; position:relative;"
          class="nav-link"
        >
          {{ link.label }}
          <span style="position:absolute; bottom:-4px; left:0; width:0; height:2px; background:#2563FF; transition:width 0.3s;" />
        </a>
      </div>
    </template>

    <template #append>
      <div style="display:flex; align-items:center; gap:12px;">
        <v-btn
          class="d-none d-lg-flex"
          color="primary"
          variant="outlined"
          size="small"
          style="text-transform:none; font-weight:500; border-radius:12px;"
          href="https://wa.me/5511999999999"
          target="_blank"
        >
          Vamos conversar
          <v-icon end size="18">mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          class="d-lg-none"
          variant="text"
          icon
          @click="drawer = !drawer"
          style="color:#B7C0CF;"
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
  background: rgba(6, 11, 20, 0.85) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
}

.nav-link:hover {
  color: #F8FAFC !important;
}

.nav-link:hover span {
  width: 100% !important;
}

.mobile-nav-item:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  color: #F8FAFC !important;
}
</style>