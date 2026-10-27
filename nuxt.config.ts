// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Bristol Technical Contracting',
      meta: [
        {
          name: 'theme-color',
          content: '#002f65',
        },
        {
          name: 'description',
          content:
            'Bristol Technical Contracting provides professional Mechanical, Electrical, Plumbing (MEP), HVAC and Interior Fit-out solutions in the UAE.',
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.png`,
        },
      ],

    },
  },

  devtools: { enabled: true }
})
