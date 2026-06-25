<template>
  <footer style="position:relative; padding:48px 0; overflow:hidden; background:rgba(6,11,20,0.8); border-top:1px solid rgba(255,255,255,0.06);">
    <v-container>
      <v-row>
        <!-- Logo & Description -->
        <v-col cols="12" md="4">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
            <div style="width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#2563FF,#4EA8FF); display:flex; align-items:center; justify-content:center; font-weight:700; color:white; font-size:14px;">K</div>
            <span style="font-size:18px; font-weight:600; color:#F8FAFC;">KP_<span style="color:#2563FF;">TECH</span></span>
          </div>
          <p style="font-size:14px; color:#B7C0CF; max-width:280px; line-height:1.6;">
            Transformando ideias em soluções digitais de alto impacto. Tecnologia, design e estratégia para o seu negócio.
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="6" md="2">
          <p style="font-size:12px; font-weight:700; color:#F8FAFC; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:16px;">Links</p>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <a v-for="link in quickLinks" :key="link.label" :href="link.href" @click.prevent="scrollTo(link.href)" style="font-size:13px; color:#B7C0CF; text-decoration:none; transition:color 0.2s; cursor:pointer;" class="footer-link">
              {{ link.label }}
            </a>
          </div>
        </v-col>

        <!-- Contact -->
        <v-col cols="6" md="3">
          <p style="font-size:12px; font-weight:700; color:#F8FAFC; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:16px;">Contato</p>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <p style="font-size:13px; color:#B7C0CF; margin-bottom:0;">contato@kptech.com.br</p>
            <p style="font-size:13px; color:#B7C0CF; margin-bottom:0;">(11) 99999-9999</p>
            <p style="font-size:13px; color:#B7C0CF; margin-bottom:0;">São Paulo, SP</p>
          </div>
        </v-col>

        <!-- Social -->
        <v-col cols="12" md="3">
          <p style="font-size:12px; font-weight:700; color:#F8FAFC; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:16px;">Redes Sociais</p>
          <div style="display:flex; gap:12px;">
            <v-btn
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              variant="text"
              icon
              size="small"
              style="color:#B7C0CF; transition:color 0.2s;"
              class="social-btn"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider style="margin:32px 0; border-color:rgba(255,255,255,0.06);" />

      <div class="text-center">
        <p style="font-size:12px; color:#B7C0CF; margin-bottom:0;">
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
.footer-link:hover {
  color: #F8FAFC !important;
}
.social-btn:hover {
  color: #2563FF !important;
}
</style>