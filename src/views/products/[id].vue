<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-[#736558] text-[13px] mb-8 animate-fade-in-up font-medium">
        <NuxtLink @click="$router.back()"
          class="hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Catalog
        </NuxtLink>
        <span class="text-gray-300">/</span>
        <NuxtLink to="/merchants" class="hover:text-[#1a1a1a] transition-colors">Merchant Name Catalog</NuxtLink>
        <span class="text-gray-300">/</span>
        <span class="text-[#1a1a1a] font-bold">{{ product.name }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 animate-fade-in-up" style="animation-delay: 0.1s">
        <!-- Image Section -->
        <div>
          <div class="relative group rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] lg:aspect-auto lg:h-[650px]">
            <img :src="activeImage" :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

            <div
              class="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/50 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-60"></span>
              <span class="text-[#736558]">Premium</span>
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-3 mt-4">
            <button v-for="(img, idx) in product.images" :key="idx" @click="activeImage = img"
              :class="activeImage === img ? 'ring-2 ring-[#E66B1A] border-transparent p-[3px]' : 'border border-transparent p-0'"
              class="w-20 h-20 rounded-2xl overflow-hidden transition-all bg-white shrink-0">
              <img :src="img" class="w-full h-full object-cover rounded-[0.85rem]" />
            </button>
          </div>
        </div>

        <!-- Details Section -->
        <div class="flex flex-col pt-2 lg:pt-5 w-full max-w-lg">
          <div class="mb-8">
            <span class="text-[#E66B1A] font-bold text-sm mb-2 block">{{ product.category }}</span>
            <h1 class="text-3xl lg:text-[2.2rem] leading-tight font-bold text-[#1a1a1a] mb-2 tracking-tight">
              {{ product.name }}
            </h1>
            <p class="text-[#736558] text-[15px]">by {{ product.merchant }}</p>
          </div>

          <div class="h-px bg-gray-200 w-full mb-8"></div>

          <!-- Specs -->
          <div class="space-y-8 mb-10">
            <!-- Sizes -->
            <div>
              <div class="flex items-center gap-2 text-[#736558] mb-4 text-[13px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                Available Sizes
              </div>
              <div class="flex flex-wrap gap-3 text-[#1a1a1a] text-[13px] font-medium">
                <span v-for="(size, index) in product.sizes" :key="size"
                  :class="index === 0 ? 'bg-[#f1f1f1] border-[#f1f1f1]' : 'bg-white border-[#f1f1f1] hover:bg-gray-50'"
                  class="px-4 py-1.5 rounded-full border transition-all cursor-default">
                  {{ size }}
                </span>
              </div>
            </div>

            <!-- Colors -->
            <div>
              <div class="flex items-center gap-2 text-[#736558] mb-4 text-[13px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                  </path>
                </svg>
                Available Colors
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="(color, index) in product.colors" :key="color"
                  :class="index === 0 ? 'bg-[#f1f1f1] border-[#f1f1f1]' : 'bg-white border-[#f1f1f1] hover:bg-gray-50'"
                  class="text-[#1a1a1a] px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all cursor-default">
                  {{ color }}
                </span>
              </div>
            </div>

            <!-- Applications -->
            <div>
              <div class="text-[#736558] mb-4 text-[13px] font-medium">
                Applications
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="(app, index) in product.applications" :key="app"
                  :class="index === 0 ? 'bg-[#f1f1f1] border-[#f1f1f1]' : 'bg-white border-[#f1f1f1] hover:bg-gray-50'"
                  class="text-[#1a1a1a] px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all cursor-default">
                  {{ app }}
                </span>
              </div>
            </div>
          </div>

          <div class="h-px bg-gray-200 w-full mb-8"></div>

          <!-- Actions -->
          <div class="space-y-5">
            <button
              class="w-full bg-[#736558] text-white px-6 py-3.5 rounded-xl text-[14px] font-bold hover:bg-[#5d5247] transition-all flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                </path>
              </svg>
              Add to Interest List
            </button>

            <!-- Info Box -->
            <div class="bg-[#f5f5f5] rounded-xl p-5 border border-transparent mt-5">
              <h4 class="font-bold text-[#1a1a1a] mb-1.5 text-[13px]">How it works</h4>
              <p class="text-[#736558] text-[13px] leading-relaxed">
                Add products to your interest list, then send a single inquiry to the merchant with all selected
                products and your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const activeImage = ref('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500')

const product = {
  name: 'Carrara Marble',
  merchant: 'Ceramica Elite',
  category: 'Marble',
  sizes: ['24x24', '36x36'],
  colors: ['White', 'Grey-veined'],
  applications: ['Floor', 'Wall'],
  images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1500'
  ]
}
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
