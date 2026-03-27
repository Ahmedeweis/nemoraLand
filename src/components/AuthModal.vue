<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="close"></div>

      <!-- Modal Container -->
      <div class="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in">
        <!-- Close Button -->
        <button @click="close"
          class="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-[#1a1a1a] transition-colors bg-white/10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div class="flex flex-col md:flex-row min-h-[600px]">
          <!-- Left Side: Image (Only for Login & Verify) -->
          <div v-if="step !== 'success'" class="hidden md:block md:w-1/2 relative">
            <img src="../assets/imgs/login.png" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/10"></div>
          </div>

          <!-- Right Side: Content -->
          <div :class="step === 'success' ? 'w-full' : 'w-full md:w-1/2'"
            class="p-12 md:p-16 flex flex-col justify-center">

            <!-- Step 1: Login -->
            <div v-if="step === 'login'" class="animate-fade-in">
              <h2 class="text-4xl font-bold font-dm-sans text-[#7b6b5c] mb-3 text-center md:text-left">Welcome To Nimora
                !</h2>
              <p class="text-[#7C7977] text-lg mb-12 text-center md:text-left">We’ll send you a verification code.</p>

              <div class="space-y-8">
                <div>
                  <label class="block text-sm font-bold text-[#1a1a1a] mb-3 uppercase tracking-wide">Email</label>
                  <div class="relative">
                    <input type="email" placeholder="Enter your email"
                      class="w-full bg-white border border-gray-200 rounded-2xl py-5 px-6 focus:outline-none focus:ring-4 focus:ring-[#7b6b5c]/5 focus:border-[#7b6b5c] transition-all text-[#1a1a1a] placeholder-gray-400 font-medium" />
                    <svg xmlns="http://www.w3.org/2000/svg"
                      class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>

                <div class="py-2">
                  <span class="text-sm font-bold text-[#7b6b5c] uppercase tracking-widest">OR</span>
                </div>

                <div>
                  <label class="block text-sm font-bold text-[#1a1a1a] mb-3 uppercase tracking-wide">Phone
                    number</label>
                  <div class="flex gap-4">
                    <div class="relative flex-1">
                      <div class="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/sa.png" class="w-5 h-5 rounded-sm object-cover" />
                        <span class="text-[#1a1a1a] font-bold">+966</span>
                      </div>
                      <input type="tel" placeholder="(000) 000-000"
                        class="w-full bg-white border border-gray-200 rounded-2xl py-5 pl-28 pr-12 focus:outline-none focus:ring-4 focus:ring-[#7b6b5c]/5 focus:border-[#7b6b5c] transition-all text-[#1a1a1a] placeholder-gray-400 font-medium" />
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" width="22" height="22"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <rect width="14" height="20" x="5" y="2" rx="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button @click="step = 'verify'"
                  class="w-full bg-[#7b6b5c] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#68594b] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#7b6b5c]/20">
                  Login
                </button>
              </div>
            </div>

            <!-- Step 2: Verify -->
            <div v-if="step === 'verify'" class="animate-fade-in text-center md:text-left">
              <h2 class="text-4xl font-bold text-[#7b6b5c] mb-3 font-dm-sans">Enter Verification code</h2>
              <div class="flex items-center justify-center md:justify-start gap-2 text-[#7C7977] text-lg mb-12">
                <span>Sent code to +966151318 148</span>
                <button @click="step = 'login'" class="text-[#E66B1A] font-bold hover:underline">Change</button>
              </div>

              <div class="space-y-12">
                <div>
                  <label class="block text-sm font-bold text-[#1a1a1a] mb-6 uppercase tracking-wide">Enter the 5-digit
                    code</label>
                  <div class="flex justify-center md:justify-start gap-4">
                    <input v-for="i in 5" :key="i" type="text" maxlength="1"
                      class="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 rounded-xl text-center text-2xl font-bold text-[#1a1a1a] focus:outline-none focus:ring-4 focus:ring-[#7b6b5c]/5 focus:border-[#7b6b5c] transition-all shadow-sm" />
                  </div>
                  <p class="mt-6 text-[#7C7977]">Didn’t receive it? <button
                      class="text-[#E66B1A] font-bold hover:underline">Resend</button></p>
                </div>

                <button @click="step = 'success'"
                  class="w-full bg-[#7b6b5c] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#68594b] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#7b6b5c]/20">
                  Confirm
                </button>
              </div>
            </div>

            <!-- Step 3: Success -->
            <div v-if="step === 'success'" class="animate-fade-in text-center max-w-sm mx-auto">
              <div
                class="w-24 h-24 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-10 text-[#7b6b5c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Verification Successful</h2>
              <p class="text-[#736558] text-lg mb-12">Your code has been verified. You are now logged in.</p>

              <button @click="close"
                class="w-full bg-[#7b6b5c] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#68594b] transition-all">
                Done
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isVisible: Boolean
})

const emit = defineEmits(['close'])

const step = ref('login')

const close = () => {
  emit('close')
  // Reset after transition
  setTimeout(() => {
    step.value = 'login'
  }, 300)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fade-in 0.5s ease forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
