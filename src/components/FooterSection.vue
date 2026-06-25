<template>
  <footer class="position-relative py-12 overflow-hidden" style="background: rgba(6, 11, 20, 0.8); border-top: 1px solid rgba(255, 255, 255, 0.06);">
    <v-container>
      <v-row class="gy-8">
        <!-- Logo & Description -->
        <v-col cols="12" md="4">
          <div class="d-flex align-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563FF] to-[#4EA8FF] d-flex align-center justify-center font-weight-bold text-white" style="width: 32px; height: 32px; font-size: 14px;">K</div>
            <span class="text-h6 font-weight-semibold text-white">KP_<span class="text-[#2563FF]">TECH</span></span>
          </div>
          <p class="text-body-2 text-gray" style="max-width: 280px;">
            Transformando ideias em soluções digitais de alto impacto. Tecnologia, design e estratégia para o seu negócio.
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="6" md="2">
          <p class="text-caption font-weight-bold text-white text-uppercase mb-4" style="letter-spacing: 0.1em;">Links</p>
          <div class="d-flex flex-column gap-2">
            <a v-for="link in quickLinks" :key="link.label" :href="link.href" @click.prevent="scrollTo(link.href)" class="text-caption text-gray text-decoration-none hover-text-white" style="transition: color 0.2s;">
              {{ link.label }}
            </a>
          </div>
        </v-col>

        <!-- Contact -->
        <v-col cols="6" md="3">
          <p class="text-caption font-weight-bold text-white text-uppercase mb-4" style="letter-spacing: 0.1em;">Contato</p>
          <div class="d-flex flex-column gap-2">
            <p class="text-caption text-gray mb-0">contato@kptech.com.br</p>
            <p class="text-caption text-gray mb-0">(11) 99999-9999</p>
            <p class="text-caption text-gray mb-0">São Paulo, SP</p>
          </div>
        </v-col>

        <!-- Social -->
        <v-col cols="12" md="3">
          <p class="text-caption font-weight-bold text-white text-uppercase mb-4" style="letter-spacing: 0.1em;">Redes Sociais</p>
          <div class="d-flex gap-3">
            <v-btn
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              variant="text"
              icon
              size="small"
              class="text-gray hover-text-primary"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8" style="border-color: rgba(255,255,255,0.06);" />

      <div class="text-center">
        <p class="text-caption text-gray mb-0">
          &copy; {{ new Date().getFullYear() }} KP_TECH. Todos os direitos reservados.
        </p>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
]

const socials = [
  { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com/kp_tech' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com/company/kp-tech' },
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/kp-tech' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hover-text-white:hover {
  color: #F8FAFC !important;
}
.hover-text-primary:hover {
  color: #2563FF !important;
}
</style>