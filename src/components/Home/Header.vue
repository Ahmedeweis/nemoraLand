<template>
  <header class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    <div
      class="w-full max-w-7xl bg-[#efede8]/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-8 py-4 flex items-center justify-between shadow-lg transition-all duration-300 animate-fade-in-down-no-translate">


      <!-- Logo Section -->
      <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity group">
        <div
          class="w-10 h-10 bg-[#1a1a1a] rounded-[14px] flex items-center justify-center group-hover:rotate-6 transition-transform">
          <span class="text-white font-bold text-xl">N</span>
        </div>
        <span class="text-[#1a1a1a] font-bold text-xl tracking-tight">Nimora Studio</span>
      </NuxtLink>

      <!-- Desktop Navigation & Actions -->
      <div class="hidden lg:flex items-center gap-8 ml-auto">
        <nav class="flex items-center gap-8 border-r border-gray-100 pr-8 mr-2">
          <NuxtLink to="/merchants"
            class="flex items-center gap-2 text-[#736558] hover:text-[#1a1a1a] transition-all font-bold group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              class="opacity-60 group-hover:opacity-100">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Merchant
          </NuxtLink>
          <NuxtLink to="/interest-list"
            class="flex items-center gap-2 text-[#736558] hover:text-[#1a1a1a] transition-all font-bold group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              class="opacity-60 group-hover:opacity-100">
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
              </path>
            </svg>
            Interest List
          </NuxtLink>
          <NuxtLink to="/about"
            class="flex items-center gap-2 text-[#736558] hover:text-[#1a1a1a] transition-all font-bold group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              class="opacity-60 group-hover:opacity-100">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            About
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <button
            @click="showAuthModal = true"
            class="bg-[#7b6b5c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#68594b] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
            Login
          </button>
          <div
            class="flex items-center gap-1.5 text-[#1a1a1a] cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
              </path>
            </svg>
            <span class="text-sm font-bold">US</span>
          </div>
        </div>
      </div>

      <!-- Mobile Toggle Button -->
      <button @click="isOpen = !isOpen"
        class="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 text-[#1a1a1a] transition-all active:scale-95 overflow-hidden">
        <div class="relative w-6 h-5">
          <span :class="isOpen ? 'rotate-45 translate-y-2' : ''"
            class="absolute top-0 left-0 w-full h-0.5 bg-current transition-transform duration-300"></span>
          <span :class="isOpen ? 'opacity-0 -translate-x-4' : ''"
            class="absolute top-[9px] left-0 w-full h-0.5 bg-current transition-all duration-300"></span>
          <span :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-[-20px]">
      <div v-if="isOpen"
        class="mt-4 lg:hidden bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
        <div class="flex flex-col gap-8">
          <nav class="flex flex-col gap-6">
            <NuxtLink to="/merchants" @click="isOpen = false"
              class="text-2xl font-bold text-[#1a1a1a] flex items-center justify-between group">
              Merchant
              <span
                class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </NuxtLink>
            <NuxtLink to="/interest-list" @click="isOpen = false"
              class="text-2xl font-bold text-[#1a1a1a] flex items-center justify-between group">
              Interest
              <span
                class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </NuxtLink>
            <NuxtLink to="/about" @click="isOpen = false"
              class="text-2xl font-bold text-[#1a1a1a] flex items-center justify-between group">
              About
              <span
                class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </NuxtLink>
          </nav>

          <div class="h-px bg-gray-100"></div>

          <div class="flex items-center justify-between gap-4">
            <button
              @click="showAuthModal = true"
              class="flex-1 bg-[#7b6b5c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#68594b] transition-all shadow-xl shadow-black/10">
              Login
            </button>
            <div
              class="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 text-[#1a1a1a]">
              <span class="text-lg font-bold">US</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Auth Modal -->
    <AuthModal :isVisible="showAuthModal" @close="showAuthModal = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import AuthModal from '../AuthModal.vue'

const isOpen = ref(false)
const showAuthModal = ref(false)
</script>
