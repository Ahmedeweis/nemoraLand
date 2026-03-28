<template>
  <div class="min-h-screen bg-white text-[#1a1a1a]">
    <!-- Merchant Hero -->
    <section class="relative h-[65vh] min-h-[550px] flex items-end pb-16 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img :src="merchant.heroImage" class="w-full h-full object-cover transition-transform duration-1000"
          alt="Merchant Background" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <!-- Breadcrumbs -->
        <nav class="hidden md:flex items-center gap-2 text-white/70 text-sm mb-10 animate-fade-in-up">
          <NuxtLink to="/merchants" class="hover:text-white transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Catalog
          </NuxtLink>
          <span>/</span>
          <span class="hover:text-white cursor-pointer transition-colors">{{ merchant.category }}</span>
          <span>/</span>
          <span class="text-white font-medium">{{ merchant.name }}</span>
        </nav>

        <div class="flex flex-col md:flex-row items-start md:items-end gap-10 animate-fade-in-up"
          style="animation-delay: 0.1s">
          <!-- Logo -->
          <div
            class="hidden md:flex w-36 h-36 bg-white rounded-3xl shadow-2xl items-center justify-center p-5 border border-white/20">
            <div
              class="w-full h-full bg-white flex items-center justify-center text-[#ff8a00] font-bold text-5xl rounded-xl">
              {{ merchant.logoLetter }}
            </div>
          </div>

          <!-- Name & Info -->
          <div class="flex-1 pb-2">
            <div class="flex items-center gap-2 text-[#ff8a00] font-bold mb-3 uppercase tracking-widest text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ merchant.location }}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              {{ merchant.name }}
              <span class="text-white/50 font-normal text-2xl md:text-3xl ml-4">{{ merchant.category }}</span>
            </h1>
            <p class="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              {{ merchant.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Controls & Filters Bar -->
    <section
      class="sticky top-24 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-4 transition-all duration-300">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-center justify-between">
        <!-- View Toggles & categories -->
        <div class="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div class="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm shrink-0">
            <button @click="view = 'grid'"
              :class="view === 'grid' ? 'bg-[#736558] text-white shadow-sm' : 'text-[#736558] hover:bg-gray-50 hover:text-[#1a1a1a]'"
              class="px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
              </svg>
              Grid View
            </button>
            <button @click="view = 'list'"
              :class="view === 'list' ? 'bg-[#736558] text-white shadow-sm' : 'text-[#736558] hover:bg-gray-50 hover:text-[#1a1a1a]'"
              class="px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              Catalog View
            </button>
          </div>

          <div class="h-8 w-px bg-gray-200 hidden sm:block"></div>

          <div class="flex flex-wrap gap-2.5">
            <button v-for="cat in productCategories" :key="cat"
              :class="cat === 'All Products' ? 'bg-[#3f3934] text-white border-[#3f3934]' : 'text-[#736558] border-gray-200 bg-white hover:border-[#1a1a1a] hover:text-[#1a1a1a]'"
              class="px-5 py-2 rounded-xl border text-[13px] font-bold transition-all shadow-sm whitespace-nowrap">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full lg:w-[350px] group shrink-0 mt-1 lg:mt-0">
          <input type="text" placeholder="Search by name ..."
            class="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#736558]/10 focus:border-[#736558] transition-all text-sm text-[#1a1a1a] placeholder-gray-400 font-medium shadow-sm" />
          <svg xmlns="http://www.w3.org/2000/svg"
            class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#736558] transition-colors"
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-12 px-6 max-w-7xl mx-auto">
      <!-- Grid View -->
      <div v-if="view === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 text-white">
        <div v-for="(product, index) in products" :key="index" @click="$router.push(`/products/${index + 1}`)"
          class="cursor-pointer group relative bg-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-fade-in-up h-[450px]"
          :style="{ animationDelay: (index * 0.1) + 's' }">

          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 z-0" />

          <!-- Top Gradient  -->
          <div
            class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10">
          </div>

          <!-- Bottom Gradient  -->
          <div
            class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10">
          </div>

          <!-- Top Content -->
          <div class="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">
            <!-- Left Info -->
            <div>
              <h3 class="text-xl font-bold mb-1.5 leading-tight tracking-wide drop-shadow-md">{{ product.name }}</h3>
              <p class="text-white/90 text-sm font-medium mb-1 drop-shadow-md">{{ product.category }}</p>
              <p class="text-white/80 text-xs drop-shadow-md">{{ product.specs }}</p>
            </div>
            <!-- Right Merchant Name -->
            <span class="text-white/80 text-xs font-medium drop-shadow-md">Merchant name</span>
          </div>

          <!-- Bottom Actions -->
          <div class="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-30 pointer-events-auto">
            <!-- Interested Button -->
            <button @click.stop
              class="bg-white/95 backdrop-blur-md text-[#1a1a1a] px-4 py-2.5 rounded-full text-xs font-bold hover:bg-white transition-all flex items-center gap-1.5 group/btn shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                class="group-hover/btn:scale-110 transition-transform">
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                </path>
              </svg>
              Interested
            </button>

            <!-- Carousel Dots -->
            <div class="flex gap-1.5 items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a00]"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
            </div>

            <div @click.stop>
              <NuxtLink :to="`/products/${index + 1}`" style="background-color: white;"
                class="bg-white text-[#E66B1A] px-4 py-2.5 rounded-full text-xs font-bold  transition-all flex items-center gap-1.5 group/btn2 shadow-lg">
                More Details
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                  class="group-hover/btn2:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="space-y-6 mb-20 text-white">
        <div v-for="(product, index) in products" :key="index" @click="$router.push(`/products/${index + 1}`)"
          class="cursor-pointer group relative bg-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-fade-in-up h-[400px] md:h-[450px]"
          :style="{ animationDelay: (index * 0.1) + 's' }">

          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 z-0" />

          <!-- Top Gradient -->
          <div
            class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none z-10">
          </div>

          <!-- Bottom Bar Background -->
          <div
            class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none z-10">
          </div>

          <!-- Top Content -->
          <div
            class="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-20 pointer-events-none">
            <!-- Left Info -->
            <div>
              <h3 class="text-2xl font-bold mb-1.5 leading-tight tracking-wide drop-shadow-md">{{ product.name }}</h3>
              <p class="text-white/90 text-sm font-medium drop-shadow-md">{{ product.category }}</p>
            </div>
            <!-- Right Merchant Name -->
            <span class="text-white/80 text-sm font-medium drop-shadow-md">Merchant name</span>
          </div>

          <!-- Bottom Actions Bar -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between z-30 pointer-events-auto gap-4">
            <!-- Left Specs -->
            <div class="flex items-center gap-6 text-white/90 text-xs md:text-sm font-medium">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  class="opacity-70">
                  <path d="M15 3h6v6"></path>
                  <path d="M9 21H3v-6"></path>
                  <path d="M21 3l-7 7"></path>
                  <path d="M3 21l7-7"></path>
                </svg>
                <span>{{ product.specs.split(' - ')[0] }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  class="opacity-70">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                  </path>
                </svg>
                <span>White, Grey-veined</span>
              </div>
              <div class="flex items-center gap-2">
                <span>Floor</span>
              </div>
            </div>

            <!-- Right Actions -->
            <div class="flex items-center gap-3" @click.stop>
              <NuxtLink :to="`/products/${index + 1}`" style="background-color: white; color: #E66B1A;"
                class=" px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 group/btn2 shadow-lg hover:shadow-xl hover:scale-105">
                More Details
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                  class="group-hover/btn2:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NuxtLink>

              <button
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  class="opacity-80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                  </path>
                </svg>
              </button>

              <button
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  class="opacity-80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>

              <span class="text-white/60 text-xs font-semibold ml-2">1/2</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-gray-100 pt-16">
        <span class="text-[#736558] text-sm font-medium">Showing 5 of 1060 products</span>
        <div class="flex items-center gap-2">

          <!-- First -->
          <button
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#736558] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all bg-white hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </button>

          <!-- Prev -->
          <button
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#736558] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all bg-white hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <!-- Numbers -->
          <button class="w-10 h-10 rounded-full bg-[#E66B1A] text-white font-medium text-sm shadow-md">1</button>
          <button
            class="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#736558] font-medium text-sm hover:bg-gray-50 hover:text-[#1a1a1a] transition-all hover:shadow-sm">2</button>
          <button
            class="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#736558] font-medium text-sm hover:bg-gray-50 hover:text-[#1a1a1a] transition-all hover:shadow-sm">3</button>

          <span class="text-[#736558] mx-1 font-medium tracking-widest text-sm">...</span>

          <button
            class="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#736558] font-medium text-sm hover:bg-gray-50 hover:text-[#1a1a1a] transition-all hover:shadow-sm">10</button>

          <!-- Next -->
          <button
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#736558] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all bg-white hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <!-- Last -->
          <button
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#736558] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all bg-white hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const view = ref('grid') // 'grid' or 'list'

import bathImg from '../../assets/imgs/bath.png';

// Mock merchant data
const merchant = {
  name: 'Ceramica Elite',
  category: 'Ceramic & Porcelain',
  location: 'Cairo, Egypt',
  description: 'Premium marble and natural stone surfaces for luxury interiors. Curated collections for architects and designers worldwide.',
  logoLetter: 'C',
  heroImage: bathImg
}

const productCategories = ['All Products', 'Marble', 'Porcelain']

const products = [
  {
    name: 'Carrara Marble',
    category: 'Marble',
    specs: '24x24, 36x36 - Floor',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Statuary White',
    category: 'Marble',
    specs: '12x24, 24x48 - Wall',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Calacatta Gold',
    category: 'Marble',
    specs: 'Slabs - Kitchen Countertop',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Beige Travertine',
    category: 'Porcelain',
    specs: 'Outdoor - Anti-slip',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Onyx Blue',
    category: 'Marble',
    specs: 'Decorative - Backlit ready',
    image: 'https://images.unsplash.com/photo-1616489953149-8c9e075fa985?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Industrial Grey',
    category: 'Porcelain',
    specs: 'Commercial - High traffic',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000'
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
.scroll-hide::-webkit-scrollbar {
  display: none;
}

.scroll-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
