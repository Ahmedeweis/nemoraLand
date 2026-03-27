<template>
  <section class="hero-bg relative flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">


    <!-- Overlay added to match the image's dark moody feel if the original image is too bright -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <div class="relative z-10 max-w-5xl animate-fade-in-up">
      <p class="text-white/90 text-lg mb-4 font-medium flex items-center gap-3">
        AI-Powered Ceramic Marketplace
      </p>
      <h1
        class="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-semibold leading-[100%] tracking-normal align-middle mb-8"
        style="font-family: 'DM Sans', sans-serif;">
        Where Architecture Meets <br />
        Craftsmanship
      </h1>
      <p class="text-white/80 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 text-balance">
        Discover premium ceramic, porcelain, and sanitary ware from <br> verified suppliers worldwide. <span
          class="text-white font-medium">Built for professionals.</span>
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-4">
        <button
          class="bg-[#7b6b5c]/90 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#68594b] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group shadow-xl">
          Explore Stores
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
            class="group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button
          class="bg-[#dcd7d2] text-[#1a1a1a] px-10 py-3.5 rounded-xl font-bold text-base hover:bg-[#cec6bf] transition-all hover:scale-105 active:scale-95 shadow-xl">
          Contact US
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hero-bg {
  /* مسار الصورة */
  background-image: url('../../assets/imgs/bath.png');
  /* تغطية السيكشن بالكامل */
  background-size: cover;
  /* توسيط الصورة */
  background-position: center;
  background-repeat: no-repeat;
  /* تثبيت الخلفية عند السكرول (اختياري لشكل احترافي) */
  background-attachment: fixed;
  height: 100vh;
}
</style>