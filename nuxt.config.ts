export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  pages: true,
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.css'],
  app: {
    head: {
      title: 'Ucanspeak',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          // Inter + кириллица + 500
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap&subset=latin,cyrillic'
        }
      ]
    }
  }
})
