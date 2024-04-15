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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary">Outsourcing</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Servi\xE7os de Outsourcing de TI da Gam Consultoria: <span class="text-color-primary"> Sua Solu\xE7\xE3o em Tecnologia</span></h5><div class="sub-heading"> A Gam Consultoria \xE9 l\xEDder em fornecer solu\xE7\xF5es de outsourcing de TI que impulsionam a efici\xEAncia, reduzem os custos e aumentam a produtividade para empresas de todos os tamanhos. Nossa abordagem centrada no cliente e nossa expertise em tecnologia nos tornam o parceiro ideal para suas necessidades de outsourcing de TI. <br><br> Nossos servi\xE7os de outsourcing abrangem uma ampla gama de \xE1reas, incluindo suporte t\xE9cnico, desenvolvimento de software, gerenciamento de rede, seguran\xE7a cibern\xE9tica e muito mais. Com uma equipe altamente qualificada de profissionais de TI, estamos prontos para enfrentar qualquer desafio e fornecer solu\xE7\xF5es personalizadas que atendam \xE0s suas necessidades espec\xEDficas. <br><br> Ao optar pelo outsourcing de TI da Gam Consultoria, voc\xEA ter\xE1 acesso a uma equipe de especialistas dedicados que est\xE3o comprometidos em garantir que suas opera\xE7\xF5es de TI funcionem sem problemas. Isso permite que voc\xEA se concentre em seus principais neg\xF3cios, enquanto n\xF3s cuidamos de todos os aspectos de sua infraestrutura de TI. <br><br> Al\xE9m disso, nossa abordagem flex\xEDvel e personalizada garante que voc\xEA receba exatamente os servi\xE7os de que precisa, quando precisa, sem comprometer a qualidade. Estamos aqui para ajud\xE1-lo a alcan\xE7ar seus objetivos de neg\xF3cios e impulsionar o sucesso de sua empresa por meio de solu\xE7\xF5es de TI inovadoras e eficazes. <br><br> Se voc\xEA est\xE1 procurando um parceiro confi\xE1vel em outsourcing de TI, entre em contato conosco hoje mesmo. Estamos ansiosos para colaborar com voc\xEA e impulsionar o sucesso de sua empresa por meio de solu\xE7\xF5es de tecnologia de ponta. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/outsourcing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const outsourcing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { outsourcing as default };
//# sourceMappingURL=outsourcing-f4f16d68.mjs.map
