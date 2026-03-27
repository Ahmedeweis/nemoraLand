<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20 animate-fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
          How It Works
        </h2>
        <p class="text-[#736558] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Three simple steps to source premium materials for your <br>
          projects.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="w-24 h-24 bg-[#f5f4f0] rounded-full flex items-center justify-center mb-8 shadow-sm">
            <img :src="storeIcon" class="w-9 h-9" alt="Browse Stores" />
          </div>
          <span class="text-[#ff8a00] font-bold uppercase tracking-widest text-sm mb-4">Step 1</span>
          <h3 class="text-[20px] font-medium leading-[100%] tracking-normal text-center align-middle text-[#1a1a1a] mb-4" style="font-family: 'DM Sans', sans-serif;">Browse Stores</h3>
          <p class="text-[#736558] leading-relaxed max-w-[280px]">
            Explore verified suppliers and their curated catalogs from across the globe.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="w-24 h-24 bg-[#f5f4f0] rounded-full flex items-center justify-center mb-8 shadow-sm">
            <img :src="boxIcon" class="w-9 h-9" alt="Select Products" />
          </div>
          <span class="text-[#ff8a00] font-bold uppercase tracking-widest text-sm mb-4">Step 2</span>
          <h3 class="text-[20px] font-medium leading-[100%] tracking-normal text-center align-middle text-[#1a1a1a] mb-4" style="font-family: 'DM Sans', sans-serif;">Select Products</h3>
          <p class="text-[#736558] leading-relaxed max-w-[280px]">
            Find the perfect tiles and fixtures with detailed specs and AI visualization.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center animate-fade-in-up" style="animation-delay: 0.6s">
          <div class="w-24 h-24 bg-[#f5f4f0] rounded-full flex items-center justify-center mb-8 shadow-sm">
            <img :src="fileIcon" class="w-9 h-9" alt="Request Quote / Order" />
          </div>
          <span class="text-[#ff8a00] font-bold uppercase tracking-widest text-sm mb-4">Step 3</span>
          <h3 class="text-[20px] font-medium leading-[100%] tracking-normal text-center align-middle text-[#1a1a1a] mb-4" style="font-family: 'DM Sans', sans-serif;">Request Quote / Order</h3>
          <p class="text-[#736558] leading-relaxed max-w-[280px]">
            Get B2B pricing or add to cart for direct purchase with transparent pricing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import storeIcon from '../../assets/imgs/icons/store.svg'
import boxIcon from '../../assets/imgs/icons/box.svg'
import fileIcon from '../../assets/imgs/icons/file.svg'
</script>
