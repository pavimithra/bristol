<script setup lang="ts">
const route = useRoute()
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact-us' },
]
const menuOpen = ref(false)
watch(() => route.path, () => { menuOpen.value = false })
const year = new Date().getFullYear()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white font-nunito text-slate-700 antialiased">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-lexend focus:font-semibold text-[#002f65]">Skip to content</a>
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_2px_18px_rgba(0,47,101,0.04)] backdrop-blur-md">
      <nav class="relative mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <NuxtLink to="/" class="inline-flex shrink-0 items-center rounded-sm" aria-label="Bristol Technical Contracting — Home"><img src="/images/Logo.png" alt="Bristol Technical Contracting" class="h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[220px]" /></NuxtLink>
        <div class="hidden items-center gap-7 lg:flex xl:gap-9">
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" :aria-current="route.path === item.to ? 'page' : undefined" class="inline-flex h-[78px] items-center border-b-[3px] pt-[3px] font-lexend text-[12px] font-semibold uppercase tracking-[0.075em] transition-colors duration-200" :class="route.path === item.to ? 'border-[#c03400] text-[#002f65]' : 'border-transparent text-slate-600 hover:border-[#c03400]/60 hover:text-[#002f65]'">{{ item.label }}</NuxtLink>
        </div>
        <NuxtLink to="/contact-us" class="hidden shrink-0 items-center gap-3 rounded-md bg-[#c03400] px-5 py-3 font-lexend text-xs font-semibold uppercase tracking-wide text-white shadow-[0_5px_12px_rgba(192,52,0,0.16)] transition-all hover:bg-[#a82e00] lg:inline-flex">Get a Quote <span aria-hidden="true">→</span></NuxtLink>
        <div class="lg:hidden">
          <button type="button" class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-slate-200 text-[#002f65]" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
            <svg v-if="!menuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <div v-if="menuOpen" class="absolute inset-x-0 top-full z-50 border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-[0_18px_30px_rgba(0,47,101,0.12)] sm:px-6">
            <div class="flex flex-col gap-1"><NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" class="rounded-md px-4 py-3 font-lexend text-sm font-semibold" :class="route.path === item.to ? 'border-l-[3px] border-[#c03400] bg-[#002f65]/[0.06] text-[#002f65]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#002f65]'">{{ item.label }}</NuxtLink></div>
            <NuxtLink to="/contact-us" class="mt-4 flex w-full items-center justify-center rounded-md bg-[#c03400] px-5 py-3.5 font-lexend text-sm font-semibold text-white">Get a Quote →</NuxtLink>
          </div>
        </div>
      </nav>
    </header>
    <main id="main-content" class="w-full flex-1"><slot /></main>
    <footer class="bg-[#001e40] text-white">
      <div class="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-8"><div class="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-5"><NuxtLink to="/" class="inline-flex rounded-md bg-white px-3 py-2" aria-label="Bristol Technical Contracting — Home"><img src="/images/Logo.png" alt="Bristol Technical Contracting" loading="lazy" class="h-12 w-auto max-w-[215px] object-contain" /></NuxtLink><p class="mt-6 max-w-sm font-nunito text-[15px] leading-8 text-slate-300">Integrated Mechanical, Electrical, Plumbing, and Interior Fit-out solutions focused on quality, reliable execution, and lasting performance.</p><div class="mt-6 h-[3px] w-12 bg-[#c03400]"></div></div>
        <div class="lg:col-span-3"><h2 class="font-lexend text-sm font-semibold uppercase tracking-[0.12em]">Quick Links</h2><ul class="mt-6 space-y-3"><li v-for="item in navigation" :key="item.to"><NuxtLink :to="item.to" class="font-nunito text-sm text-slate-300 transition-colors hover:text-white">{{ item.label }}</NuxtLink></li></ul></div>
        <div class="lg:col-span-4"><h2 class="font-lexend text-sm font-semibold uppercase tracking-[0.12em]">Our Services</h2><ul class="mt-6 space-y-3 font-nunito text-sm text-slate-300"><li>Mechanical &amp; HVAC Works</li><li>Electrical Works</li><li>Plumbing Works</li><li>Fit-out &amp; Interiors</li></ul><NuxtLink to="/contact-us" class="mt-7 inline-flex items-center gap-2 border-b border-[#c03400] pb-1 font-lexend text-xs font-semibold uppercase tracking-wide text-white hover:text-orange-200">Discuss Your Project →</NuxtLink></div>
      </div></div>
      <div class="border-t border-white/10 bg-[#001830]"><div class="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8"><p class="font-nunito text-xs text-slate-400">© {{ year }} Bristol Technical Contracting. All rights reserved.</p><p class="font-nunito text-xs text-slate-400">Mechanical • Electrical • Plumbing • Interiors</p></div></div>
    </footer>
  </div>
</template>
