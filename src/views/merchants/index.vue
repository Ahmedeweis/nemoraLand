<template>
  <div class="pt-32">
    <div class="px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <!-- Header Section -->
      <div class="mb-16 animate-fade-in-up">
        <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 ">
          <img src="../../assets/imgs/icons/store.svg" alt="Merchants" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Our Merchants
        </h1>
        <p class="text-[#736558] text-lg md:text-xl max-w-2xl leading-relaxed">
          Discover premium suppliers of architectural finishes, tiles, and surfaces from around the globe.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="(merchant, index) in merchants" :key="index" :to="`/merchants/${index + 1}`"
          class="bg-white rounded-[2rem] relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up block"
          :style="{ animationDelay: (index * 0.1) + 's' }">

          <!-- Image Container -->
          <div class="relative h-64 overflow-hidden rounded-t-[2rem]">
            <img :src="merchant.image" :alt="merchant.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 right-4">
              <span :class="merchant.isPublic ? 'bg-[#e7f6ed] text-[#24a148]' : 'bg-[#f4f4f4] text-[#736558]'"
                class="px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                {{ merchant.isPublic ? 'Public catalog' : 'Request Access' }}
              </span>
            </div>
          </div>
          <!-- Merchant Logo -->
          <!-- Merchant Logo -->

          <div
            class="absolute top-[13.5rem] left-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 border border-gray-50 z-10 transition-transform group-hover:scale-110">


            <div class="w-full h-full  flex items-center justify-center text-[#ff8a00] font-bold text-2xl rounded-lg">

              {{ merchant.logoLetter }}

            </div>

          </div>
          <!-- Content -->
          <div class="pt-10 pb-8 px-8">
            <div class="flex items-center gap-2 text-[#736558] text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ merchant.location }}
            </div>
            <h3 class="text-2xl font-bold text-[#1a1a1a] mb-3">{{ merchant.name }}</h3>
            <p class="text-[#736558] text-sm leading-relaxed mb-6 line-clamp-2">
              {{ merchant.description }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-[#736558] font-medium text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                  </path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                {{ merchant.productCount }} Products
              </div>
              <div
                class="text-[#ff8a00] font-bold text-sm bg-[#ff8a00]/5 px-4 py-2 rounded-xl hover:bg-[#ff8a00] hover:text-white transition-all">
                View Catalog
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = ['All', 'Ceramics', 'Sanitary Ware', 'Marble', 'Porcelain', 'Kitchen Cabinets']

const merchants = [
  {
    name: 'Ceramica Elite',
    location: 'Cairo, Egypt',
    description: 'Premium marble and natural stone surfaces for luxury interiors. Curated collections for architects and designers.',
    productCount: 150,
    isPublic: true,
    logoLetter: 'C',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835260.png',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Royal Bath & Tile',
    location: 'Dubai, UAE',
    description: 'Elite sanitary ware and designer tiles for contemporary spaces. Modern aesthetics combined with superior functionality.',
    productCount: 220,
    isPublic: false,
    logoLetter: 'R',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835251.png',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Stone Masters',
    location: 'Milan, Italy',
    description: 'Authentic Italian stone and porcelain. Pioneers in surface technology and sustainable luxury materials.',
    productCount: 310,
    isPublic: true,
    logoLetter: 'S',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835246.png',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Apex Surfaces',
    location: 'Alexandria, Egypt',
    description: 'High-durability ceramics and surfaces for residential and commercial use. Innovation at every scale.',
    productCount: 185,
    isPublic: true,
    logoLetter: 'A',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835242.png',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Vogue Interiors',
    location: 'Cairo, Egypt',
    description: 'Exclusive importer of European luxury xbath xfittings and premium porcelain tiles. Redefining modern interiors.',
    productCount: 125,
    isPublic: false,
    logoLetter: 'V',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835248.png',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Terra Cotta Co',
    location: 'Giza, Egypt',
    description: 'Traditional craftsmanship meets modern design. Eco-friendly ceramic solutions for indoor and outdoor spaces.',
    productCount: 95,
    isPublic: true,
    logoLetter: 'T',
    logo: 'https://cdn-icons-png.flaticon.com/512/5835/5835235.png',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000'
  }
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
