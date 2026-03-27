<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
      
      <!-- Heart Icon Header -->
      <div class="mb-16 animate-fade-in-up">
        <div class="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#736558" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-tight">Interest List</h1>
        <p class="text-[#736558] text-lg max-w-2xl leading-relaxed">
          Browse catalogs from premium suppliers of architectural finishes, tiles, and surfaces.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-16 animate-fade-in-up" style="animation-delay: 0.1s">
        <!-- Products List (Left) -->
        <div class="flex-1 space-y-8">
          <div v-for="(item, index) in items" :key="index"
               class="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all duration-500">
            <div class="flex flex-col sm:flex-row gap-8 items-start relative">
              <!-- Delete Icon -->
              <button class="absolute top-0 right-0 p-2 text-red-500 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>

              <!-- Image -->
              <div class="w-full sm:w-32 h-32 rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
              </div>

              <!-- Info -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-2">{{ item.name }}</h3>
                <div class="flex items-center gap-2 text-[#736558] text-sm mb-4">
                  <span class="text-[#ff8a00] font-bold">{{ item.category }}</span>
                  <span class="text-gray-300">•</span>
                  <span>{{ item.merchant }}</span>
                </div>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="(tag, tIdx) in item.tags" :key="tIdx" 
                        :class="tIdx === 0 ? 'bg-[#f1f1f1] border-[#f1f1f1]' : 'bg-white border-[#f1f1f1] hover:bg-gray-50'"
                        class="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a] px-3 py-1.5 rounded-full border">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Reason for Interest Field -->
            <div class="mt-8">
              <label class="text-xs font-bold text-[#1a1a1a] uppercase tracking-widest mb-3 block">Reason for Interest</label>
              <div class="relative">
                <input 
                  type="text"
                  placeholder="Describe your project, quantities needed, timeline, or any specific..."
                  class="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4.5 pl-12 pr-6 focus:outline-none focus:ring-4 focus:ring-[#736558]/5 focus:border-[#736558] transition-all text-[#1a1a1a] placeholder-[#7C7977] font-medium"
                />
                <svg width="18" height="18" class="absolute left-4 top-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58867 0 0 3.58867 0 8C0 12.4113 3.58867 16 8 16H16V8C16 3.58867 12.4113 0 8 0ZM14.6667 14.6667H8C4.324 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.324 1.33333 8 1.33333C11.676 1.33333 14.6667 4.324 14.6667 8V14.6667ZM9 8C9 8.552 8.552 9 8 9C7.448 9 7 8.552 7 8C7 7.448 7.448 7 8 7C8.552 7 9 7.448 9 8ZM12.3333 8C12.3333 8.552 11.8853 9 11.3333 9C10.7813 9 10.3333 8.552 10.3333 8C10.3333 7.448 10.7813 7 11.3333 7C11.8853 7 12.3333 7.448 12.3333 8ZM5.66667 8C5.66667 8.552 5.21867 9 4.66667 9C4.11467 9 3.66667 8.552 3.66667 8C3.66667 7.448 4.11467 7 4.66667 7C5.21867 7 5.66667 7.448 5.66667 8Z" fill="#AEADAB"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Inquiry Form (Right Sidebar) -->
        <div class="lg:w-[450px]">
          <div class="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-xl shadow-black/5 sticky top-24">
            <h2 class="text-2xl font-bold mb-8 tracking-tight">Send to marchant</h2>
            
            <form class="space-y-8">
              <div>
                <label class="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Name*</label>
                <input 
                  type="text" 
                  placeholder="e.g. Salma"
                  class="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 focus:outline-none focus:ring-4 focus:ring-[#736558]/5 focus:border-[#736558] transition-all text-[#1a1a1a] placeholder-[#7C7977] font-medium"
                />
              </div>

              <div>
                <label class="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Email*</label>
                <input 
                  type="email" 
                  placeholder="e.g. Salma@gmail.com"
                  class="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 focus:outline-none focus:ring-4 focus:ring-[#736558]/5 focus:border-[#736558] transition-all text-[#1a1a1a] placeholder-[#7C7977] font-medium"
                />
              </div>

              <div>
                <label class="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Message to marchant</label>
                <input 
                  type="text"
                  placeholder="Describe your project, quantities needed, timeline, or any specific..."
                  class="w-full bg-white border border-gray-100 rounded-2xl py-4.5 px-6 focus:outline-none focus:ring-4 focus:ring-[#736558]/5 focus:border-[#736558] transition-all text-[#1a1a1a] placeholder-[#7C7977] font-medium"
                />
              </div>

              <button 
                type="submit"
                class="w-full bg-[#736558] text-white px-8 py-5 rounded-[1.5rem] font-bold text-lg hover:bg-[#5d5247] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-[#736558]/20 flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                Send ({{ items.length }} products)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    name: 'Carrara Marble',
    category: 'Marble',
    merchant: 'Merchant Name',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    tags: ['24x24', 'White', 'Floor']
  },
  {
    name: 'Carrara Marble',
    category: 'Marble',
    merchant: 'Merchant Name',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    tags: ['24x24', 'White', 'Floor']
  },
  {
    name: 'Carrara Marble',
    category: 'Marble',
    merchant: 'Merchant Name',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    tags: ['24x24', 'White', 'Floor']
  }
])
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
