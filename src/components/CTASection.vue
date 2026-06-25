<template>
  <section style="position:relative; padding:96px 0; overflow:hidden;">
    <div style="position:absolute; inset:0; background:linear-gradient(135deg, rgba(37,99,255,0.08), rgba(78,168,255,0.03));" />
    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:400px; height:400px; background:rgba(37,99,255,0.1); border-radius:50%; filter:blur(120px);" class="anim-glow" />

    <v-container style="position:relative; z-index:10;">
      <div class="text-center fade-up" style="max-width:700px; margin:0 auto;">
        <h2 style="font-size:2rem; font-weight:700; color:#F8FAFC; margin-bottom:16px;" class="text-sm-h2 text-md-h1">
          Vamos transformar sua <span class="text-gradient">ideia em realidade</span>?
        </h2>
        <p style="color:#B7C0CF; font-size:16px; margin-bottom:32px; max-width:500px; margin-left:auto; margin-right:auto;">
          Solicite um orçamento e descubra como podemos elevar sua presença digital.
        </p>
        <v-btn
          color="primary"
          size="x-large"
          style="padding:28px 40px; font-size:17px; text-transform:none; font-weight:600; border-radius:12px;"
          class="anim-glow"
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