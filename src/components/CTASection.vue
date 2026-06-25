<template>
  <section class="position-relative py-16 overflow-hidden">
    <div class="position-absolute inset-0" style="background: linear-gradient(135deg, rgba(37,99,255,0.08), rgba(78,168,255,0.03));" />
    <div class="position-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 400px; background: rgba(37,99,255,0.1); border-radius: 50%; filter: blur(120px);" />

    <v-container class="position-relative" style="z-index: 10;">
      <div class="text-center fade-up" style="max-width: 700px; margin: 0 auto;">
        <h2 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white mb-4">
          Vamos transformar sua <span class="text-gradient">ideia em realidade</span>?
        </h2>
        <p class="text-body-1 text-gray mb-8" style="max-width: 500px; margin: 0 auto 32px;">
          Solicite um orçamento e descubra como podemos elevar sua presença digital.
        </p>
        <v-btn
          color="primary"
          size="x-large"
          class="text-capitalize font-weight-semibold px-10 py-6"
          style="font-size: 1.1rem;"
          href="https://wa.me/5511999999999"
          target="_blank"
        >
          Falar no WhatsApp
          <v-icon end size="24">mdi-whatsapp</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>