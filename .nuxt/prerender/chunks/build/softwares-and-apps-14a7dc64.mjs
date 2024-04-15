import { _ as __nuxt_component_0$1, a as __nuxt_component_2, b as __nuxt_component_3 } from './OffCanvasMobileMenu-41abe105.mjs';
import { _ as __nuxt_component_1 } from './CtaThree-da488cf3.mjs';
import { A as AccordionTwo } from './AccordionTwo-4a2c0c94.mjs';
import { d as data } from './service-55560f83.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/h3/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ufo/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/destr/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/hookable/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/klona/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/scule/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/defu/dist/defu.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ohash/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/pathe/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/swiper/vue/swiper-vue.js';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/swiper/swiper.esm.js';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unctx/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    AccordionTwo,
    CtaThree: __nuxt_component_1,
    Footer: __nuxt_component_2,
    OffCanvasMobileMenu: __nuxt_component_3
  },
  data() {
    return {
      data,
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.data = data.services.find((service) => service.slug == this.slug);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_CtaThree = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  const _component_OffCanvasMobileMenu = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de Softwares e aplicativos</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Desenvolvimento de Softwares e Aplicativos Personalizados pela <span class="text-color-primary"> Gam Consultoria</span></h5><div class="sub-heading"> Na Gam Consultoria, somos apaixonados por transformar ideias inovadoras em realidade digital. Como especialistas em desenvolvimento de softwares e aplicativos, oferecemos solu\xE7\xF5es personalizadas para atender \xE0s necessidades exclusivas de nossos clientes. <br><br> Nossa abordagem come\xE7a com uma profunda compreens\xE3o de seus objetivos e requisitos. Atrav\xE9s de uma an\xE1lise detalhada, colaboramos com voc\xEA para definir uma estrat\xE9gia de desenvolvimento personalizada que atenda \xE0s suas expectativas e ultrapasse suas metas. <br><br> Utilizando as metodologias \xE1geis mais recentes, nossa equipe experiente garante entregas r\xE1pidas e de alta qualidade. Isso significa que voc\xEA pode ver seu projeto evoluir rapidamente, com a flexibilidade de ajustar o curso conforme necess\xE1rio. <br><br> Desde o desenvolvimento de aplicativos m\xF3veis para iOS e Android at\xE9 sistemas web e desktop, nossa experi\xEAncia abrange uma ampla gama de tecnologias e plataformas. Isso nos permite oferecer solu\xE7\xF5es abrangentes que atendem \xE0s suas necessidades de neg\xF3cios espec\xEDficas. <br><br> Al\xE9m do desenvolvimento inicial, oferecemos servi\xE7os de manuten\xE7\xE3o e suporte cont\xEDnuos para garantir que seus softwares e aplicativos permane\xE7am atualizados e funcionando perfeitamente. <br><br> Se voc\xEA est\xE1 procurando uma equipe dedicada e experiente para transformar sua vis\xE3o em realidade digital, a Gam Consultoria est\xE1 aqui para ajudar. Entre em contato conosco hoje para saber mais sobre como podemos colaborar no seu pr\xF3ximo projeto. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/softwares-and-apps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const softwaresAndApps = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { softwaresAndApps as default };
//# sourceMappingURL=softwares-and-apps-14a7dc64.mjs.map
