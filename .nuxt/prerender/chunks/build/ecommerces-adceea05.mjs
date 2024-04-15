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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de E-Commerces e Lojas Virtuais</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Desenvolvimento de E-Commerces e Lojas Virtuais pela <span class="text-color-primary"> Gam Consultoria</span></h5><div class="sub-heading"> Na Gam Consultoria, estamos comprometidos em ajudar empresas a expandir sua presen\xE7a online e impulsionar suas vendas por meio de e-commerces e lojas virtuais de alta qualidade e desempenho. Com nossa experi\xEAncia e conhecimento t\xE9cnico, podemos transformar sua vis\xE3o em uma plataforma de com\xE9rcio eletr\xF4nico eficaz e lucrativa. <br><br> Nosso processo de desenvolvimento come\xE7a com uma an\xE1lise detalhada de suas necessidades e objetivos de neg\xF3cios. Compreendemos que cada empresa \xE9 \xFAnica, e \xE9 por isso que desenvolvemos solu\xE7\xF5es personalizadas que atendem \xE0s suas necessidades espec\xEDficas. Desde a escolha da plataforma certa at\xE9 o design e a integra\xE7\xE3o de recursos, estamos aqui para ajudar em cada etapa do processo. <br><br> Utilizando as mais recentes tecnologias e melhores pr\xE1ticas do setor, garantimos que seu e-commerce seja seguro, f\xE1cil de usar e otimizado para convers\xF5es. Desde a integra\xE7\xE3o de sistemas de pagamento at\xE9 a implementa\xE7\xE3o de estrat\xE9gias de marketing digital, nossa equipe est\xE1 preparada para enfrentar qualquer desafio e garantir o sucesso de sua loja virtual. <br><br> Al\xE9m do desenvolvimento inicial, oferecemos servi\xE7os de suporte cont\xEDnuo e manuten\xE7\xE3o para garantir que seu e-commerce permane\xE7a atualizado e funcione perfeitamente. Estamos comprometidos em fornecer a voc\xEA as ferramentas e o suporte necess\xE1rios para alcan\xE7ar o sucesso online. <br><br> Se voc\xEA est\xE1 pronto para levar sua empresa para o pr\xF3ximo n\xEDvel com um e-commerce de alto desempenho, entre em contato conosco hoje mesmo. Estamos ansiosos para colaborar com voc\xEA e transformar sua vis\xE3o em realidade digital. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/ecommerces.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ecommerces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ecommerces as default };
//# sourceMappingURL=ecommerces-adceea05.mjs.map
