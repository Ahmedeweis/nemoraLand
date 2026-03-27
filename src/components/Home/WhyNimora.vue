<template>
  <section class="py-24 bg-[#f5f4f0]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Why Nimora
        </h2>
        <p class="text-[#736558] text-lg max-w-2xl mx-auto leading-relaxed">
          Built specifically for the ceramic and construction industry.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
             :style="{ animationDelay: (index * 0.2) + 's' }">
          
          <!-- Icon -->
          <div class="mb-8 text-[#736558] group-hover:scale-110 transition-transform duration-500">
            <component :is="feature.icon" class="w-10 h-10" />
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            {{ feature.title }}
          </h3>
          <p class="text-[#736558] leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const features = [
  {
    title: 'AI-Powered Visuals',
    description: 'Visualize products in your space before ordering with our AI room preview tool.',
    icon: {
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('path', { d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' }),
        h('circle', { cx: '12', cy: '12', r: '3' })
      ])
    }
  },
  {
    title: 'Verified Suppliers',
    description: 'Every store on Nimora is verified for quality, reliability, and authenticity.',
    icon: {
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z' }),
        h('path', { d: 'm9 12 2 2 4-4' })
      ])
    }
  },
  {
    title: 'B2B Pricing Control',
    description: 'Set tiered pricing, manage bulk discounts, and control visibility per buyer segment.',
    icon: {
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('line', { x1: '18', y1: '20', x2: '18', y2: '10' }),
        h('line', { x1: '12', y1: '20', x2: '12', y2: '4' }),
        h('line', { x1: '6', y1: '20', x2: '6', y2: '14' })
      ])
    }
  }
]
</script>
