import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}