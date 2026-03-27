<template>
  <div class="min-h-screen bg-white">
    <!-- Hero / Intro Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <div class="mb-16 animate-fade-in-up">
        <div
          class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-8 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#736558" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <h1 class="text-3xl md:text-[2.6rem] font-bold text-[#1a1a1a] mb-5 tracking-tight">About us</h1>
        <p class="text-[#736558] text-[17px] md:text-lg max-w-3xl leading-relaxed font-medium">
          Nimora Studio was born from a simple idea: merchants deserve beautiful, intelligent tools to showcase their
          products — without the complexity.
        </p>
      </div>

      <!-- Values & Collage Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <!-- Values (Left) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 animate-fade-in-up" style="animation-delay: 0.1s">
          <div v-for="(value, idx) in values" :key="idx" class="space-y-1">
            <span class="text-6xl font-bold text-[#7D6C5C] block mb-1">{{ value.number }}.</span>
            <div class="space-y-1.5">
              <h3 class="text-[1.35rem] font-bold text-[#7D6C5C]">{{ value.title }}</h3>
              <p class="text-[#736558] text-[15px] leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Image Collage (Right) -->
        <div class="grid grid-cols-2 gap-3 h-[500px] animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="flex flex-col gap-3">
            <div class="h-[28%] rounded-2xl overflow-hidden">
              <img src="../assets/imgs/about/1.png" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 rounded-2xl overflow-hidden">
              <img src="../assets/imgs/about/2.png" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex-1 rounded-2xl overflow-hidden">
              <img src="../assets/imgs/about/3.png" class="w-full h-full object-cover" />
            </div>
            <div class="h-[30%] rounded-2xl overflow-hidden">
              <img src="../assets/imgs/about/4.png" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Nimora Section -->
    <section class="bg-[#f5f3f0] py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-5 tracking-tight">Why Nimora</h2>
          <p class="text-[#736558] text-[15px] md:text-lg">Built specifically for the ceramic and construction industry.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style="animation-delay: 0.1s">
          <!-- Feature 1: AI-Powered Visuals -->
          <div class="bg-white p-10 rounded-[2rem] border-transparent shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
              <img src="../assets/imgs/icons/eyes.svg" class="w-6 h-6" alt="AI-Powered Visuals" />
            </div>
            <h3 class="text-[1.35rem] font-bold text-[#1a1a1a] mb-3">AI-Powered Visuals</h3>
            <p class="text-[#736558] text-[15px] leading-relaxed">
              Visualize products in your space before ordering with our AI room preview tool.
            </p>
          </div>

          <!-- Feature 2: Verified Suppliers -->
          <div class="bg-white p-10 rounded-[2rem] border-transparent shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
              <img src="../assets/imgs/icons/shield.svg" class="w-6 h-6" alt="Verified Suppliers" />
            </div>
            <h3 class="text-[1.35rem] font-bold text-[#1a1a1a] mb-3">Verified Suppliers</h3>
            <p class="text-[#736558] text-[15px] leading-relaxed">
              Every store on Nimora is verified for quality, reliability, and authenticity.
            </p>
          </div>

          <!-- Feature 3: B2B Pricing Control -->
          <div class="bg-white p-10 rounded-[2rem] border-transparent shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
              <img src="../assets/imgs/icons/analysis.svg" class="w-6 h-6" alt="B2B Pricing Control" />
            </div>
            <h3 class="text-[1.35rem] font-bold text-[#1a1a1a] mb-3">B2B Pricing Control</h3>
            <p class="text-[#736558] text-[15px] leading-relaxed">
              Set tier list pricing, manage bulk discounts, and control visibility per buyer segment.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    number: '1',
    title: 'Precision',
    description: 'Every detail matters. We craft tools that help merchants present their products with accuracy and elegance.'
  },
  {
    number: '2',
    title: 'Simplicity',
    description: 'No clutter, no complexity. Just clear, intuitive tools that get out of your way.'
  },
  {
    number: '3',
    title: 'Innovation',
    description: 'AI-powered visualizations that transform how customers experience products before buying.'
  },
  {
    number: '4',
    title: 'Partnership',
    description: 'We grow alongside our merchants, building features that solve real business challenges.'
  }
]
</script>

<style scoped>
.animate-fade-in-up {
  animation: scroll-reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  opacity: 0;
}

@keyframes scroll-reveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
