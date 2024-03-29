export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Shubham Ojha's Portfolio",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/reset.css', '@/assets/styles/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // environment variables
    '@nuxtjs/dotenv',
    // fontawesome
    '@nuxtjs/fontawesome',
    // google fonts
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // icons to load in fontawesome
  fontawesome: {
    component: 'fa',
    icons: {
      brands: [
        'faFacebook',
        'faFacebookF',
        'faInstagram',
        'faLinkedin',
        'faLinkedinIn',
        'faGithub',
      ],
      regular: [
        'faEnvelope', // mail
      ],
      solid: [
        'faAddressCard', // about
        'faAtom', // newzera internship
        'faBook', // blog
        'faCodeFork', // project
        'faDesktop', // citrix internship
        'faGlobe', // umic web manager por
        'faGraduationCap', // college
        'faHouse', // home
        'faMoneyBill', // moodI por
        'faPersonSkiing', // on index page
        'faPhone', // contact
        'faRobot', // erc por
        'faSchool', // school
        'faXmark', // close button
        'faGripLines', // navbar opener
      ],
    },
  },

  // fonts to load from google fonts
  googleFonts: {
    families: {
      'Nunito+Sans': true,
      'Open+Sans': true,
      Poppins: true,
    },
  },
}
