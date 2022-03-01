export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'programsmagic - Learning, Solution for your problems',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Get Free courses with get solutions for regular problem in programmers life, Be A Experts in Programming, Do Something Different, Learn Logic Skills Etc..'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.11.0/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Righteous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js'
      },
      {
        type: 'text/javascript',
        src: 'https://platform-api.sharethis.com/js/sharethis.js#property=6213202133b750001954103a&product=sticky-share-buttons',
        async: 'async'
      },
      {
        src: './assets/js/bootstrap.min.js'
      },
      {
        src: './assets/js/jquery.min.js'
      },
      {
        src: './assets/js/ie10-viewport-bug-workaround.js'
      },
      {
        src: './assets/js/bootstrap.min.js'
      },
      { src: './assets/js/jquery.min.js' },
      { src: './assets/js/ie10-viewport-bug-workaround.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/bootstrap.min.css', './assets/css/mediumish.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-gtag',
    '@/plugins/configure'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@/modules/generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://programsmagic.in',
    gzip: true,
    exclude: [
      '/loginPage',
      '/post1',
      '/post_o'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleAnalytics: {
    id: 'G-K8FB55XTTC'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-K8FB55XTTC'
    }
  },

  loading: {
    color: 'blue',
    height: '5px'
  }
}
