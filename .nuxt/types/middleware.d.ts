import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}