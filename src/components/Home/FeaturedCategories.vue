<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-[32px] font-semibold leading-[100%] tracking-normal text-center align-middle text-[#1a1a1a] mb-6"
          style="font-family: 'DM Sans', sans-serif;">
          Featured Categories
        </h2>
        <p class="text-[#736558] text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our curated collections across the most popular ceramic and sanitary ware categories.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 h-[800px] lg:h-[500px] animate-fade-in-up"
        style="animation-delay: 0.2s">

        <div v-for="(cat, index) in categories" :key="index" @mouseenter="activeIndex = index"
          @click="activeIndex = index" :class="[
            'relative group overflow-hidden rounded-[2rem] shadow-sm transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer',
            activeIndex === index ? 'flex-expand' : 'flex-collapse opacity-90 hover:opacity-100'
          ]">
          <img :src="cat.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
            :class="{ 'scale-110': activeIndex === index, 'scale-100': activeIndex !== index }" :alt="cat.name" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700"
            :class="activeIndex === index ? 'opacity-100' : 'opacity-80'"></div>

          <!-- Merchant Badge (Visible only on active) -->
          <div class="absolute top-8 left-8 transition-opacity duration-500"
            :class="activeIndex === index ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'">
            <span
              class="text-white bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              {{ cat.merchant }}
            </span>
          </div>

          <!-- Bottom Text Logic -->
          <div class="absolute bottom-10 left-8 right-8 transition-all duration-500 transform"
            :class="activeIndex === index ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0 hidden lg:block pointer-events-none'">
            <h3 class="text-white font-bold mb-2 transition-all duration-500"
              :class="activeIndex === index ? 'text-3xl' : 'text-xl whitespace-nowrap overflow-hidden text-ellipsis'">
              {{ cat.name }}
            </h3>
            <p class="text-white/70 text-lg transition-opacity duration-500"
              :class="activeIndex === index ? 'opacity-100' : 'opacity-0'">
              {{ cat.count }} products
            </p>
          </div>

          <!-- Mobile Inactive State Text -->
          <div class="absolute inset-0 flex items-center justify-center lg:hidden transition-opacity duration-500"
            :class="activeIndex !== index ? 'opacity-100' : 'opacity-0 pointer-events-none'">
            <h3 class="text-white text-2xl font-bold tracking-wider">{{ cat.name }}</h3>
          </div>

          <!-- Desktop Collapsed state text (vertical) -->
          <div class="absolute inset-0 hidden lg:flex items-center justify-center transition-opacity duration-300"
            :class="activeIndex !== index ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'">
            <div class="-rotate-90 text-white text-xl font-bold whitespace-nowrap tracking-wider drop-shadow-lg">
              {{ cat.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import img0 from '../../assets/imgs/featured/0.jpg'
import img1 from '../../assets/imgs/featured/1.jpg'
import img3 from '../../assets/imgs/featured/3.jpg'
import img4 from '../../assets/imgs/featured/4.jpg'

const activeIndex = ref(0) // Default active is the first one

const categories = [
  {
    name: 'Floor Tiles',
    count: '2,400+',
    merchant: 'Ceramica Elite',
    image: img0
  },
  {
    name: 'Wall Tiles',
    count: '1,800+',
    merchant: 'Marchant',
    image: img1
  },
  {
    name: 'Porcelain',
    count: '1,200+',
    merchant: 'Marchant',
    image: img3
  },
  {
    name: 'Bathroom Fixtures',
    count: '950+',
    merchant: 'Marchant',
    image: img4
  }
]
</script>

<style scoped>
.flex-expand {
  flex: 7 1 0%;
}

.flex-collapse {
  flex: 1.6 1 0%;
}

@media (max-width: 1024px) {
  .flex-expand {
    flex: 4 1 0%;
  }

  .flex-collapse {
    flex: 1 1 0%;
  }
}
</style>
