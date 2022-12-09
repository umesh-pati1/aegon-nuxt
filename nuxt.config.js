export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "aegon-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope-SemiBold.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope-Medium.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope-ExtraBold.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope-Bold.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "~/assets/fonts/Manrope-Light.ttf",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-stencil", "@nuxt/http"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  stencil: {
    /**
     * Required options
     */

    // Your library name, or the path to its root folder.
    lib: "core-common-widgets",

    // The prefix to whitelist
    prefix: "agn-",

    /**
     * Options below are optional
     */

    // Stencil rendering options
    renderOptions: {},

    // By default, it takes the lib name. e.g: bulmil/dist/hydrate
    hydratePath: "core-common-widgets/hydrate",

    // By default, it takes the lib name. e.g: bulmil/dist/loader
    loaderPath: "core-common-widgets/loader",

    // By default, it takes the prefix. e.g: [/bm-\w*/]
    ignoredElements: null,
  },
};
