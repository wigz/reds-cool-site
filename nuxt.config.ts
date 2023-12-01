// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [
        {
          "rel": "stylesheet",
          "href": "https://use.typekit.net/lia3vcg.css"
        }
      ],
      "style": [],
      "script": [],
      "noscript": []
    }
  },
  css: [
    '@/assets/styles/app.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/styles/_use.scss',
      '@/assets/styles/_fonts.scss',
      '@/assets/styles/_vars.scss',
      '@/assets/styles/_grid.scss',
    ]
  },
})
