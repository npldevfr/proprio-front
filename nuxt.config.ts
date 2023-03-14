// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon', 'nuxt-vitest'],

    // @ts-ignore
    css: [
        '~/assets/scss/reset.scss',
        '~/assets/scss/root.scss',
        '~/assets/scss/transitions.scss',
    ],
})
