<template>
  <div>
    <!-- Global CTA Section (repeating before footer) -->
    <section class="py-24 bg-transparent px-6">
      <div
        class="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden h-[500px] flex items-center justify-center text-center animate-fade-in-up">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            class="w-full h-full object-cover" alt="CTA Background" />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 px-8">
          <h2 class="text-[48px] font-bold text-white mb-8 tracking-normal leading-[100%] align-middle text-center"
            style="font-family: 'DM Sans', sans-serif;">
            Ready to Transform Your Sourcing?
          </h2>
          <p class="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of professionals using Nimora to discover, compare, and order premium ceramic and sanitary
            ware.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              class="bg-white border text-black px-12 py-4 rounded-xl text-lg  transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Register
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button @click="navigateToMerchants"
              class="bg-white/60 border  text-black px-12 py-4 rounded-xl text-lg hover:bg-white/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Explore Merchant
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="bg-[#4a4138] text-white pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <!-- Brand Section -->
          <div class="lg:col-span-5">
            <h2 class="text-3xl font-bold mb-8">Nimora</h2>
            <p class="text-white/60 text-lg leading-relaxed max-w-sm">
              The AI-powered ceramic and sanitary ware marketplace connecting designers, contractors, and suppliers
              worldwide.
            </p>
          </div>

          <!-- Links Section -->
          <div class="lg:col-span-7">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 class="text-xl font-bold mb-8">Platform</h3>
                <ul class="space-y-6">
                  <li class="mb-2">
                    <NuxtLink to="/merchants" class="text-white/60 hover:text-white transition-colors text-lg">Marchant
                    </NuxtLink>
                  </li>
                  <li class="mb-2">
                    <NuxtLink to="/interest-list" class="text-white/60 hover:text-white transition-colors text-lg">
                      Interest List</NuxtLink>
                  </li>
                  <li class="mb-2">
                    <NuxtLink to="/about" class="text-white/60 hover:text-white transition-colors text-lg">About Nimora
                    </NuxtLink>
                  </li>
                  <li class="mb-2">
                    <NuxtLink to="#" class="text-white/60 hover:text-white transition-colors text-lg">Contact</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-12 border-t border-white/10 text-center">
          <p class="text-white/40 text-sm">
            © {{ new Date().getFullYear() }} Nimora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
