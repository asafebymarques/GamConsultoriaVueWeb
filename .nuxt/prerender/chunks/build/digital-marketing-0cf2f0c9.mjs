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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Marketing Digital</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Servi\xE7os de Marketing Digital da Gam Consultoria: <span class="text-color-primary"> Impulsionando o Sucesso Online</span></h5><div class="sub-heading"> A Gam Consultoria oferece servi\xE7os completos de marketing digital para ajudar empresas a alcan\xE7ar seus objetivos de crescimento online. Nossa equipe de especialistas em marketing digital utiliza estrat\xE9gias comprovadas e pr\xE1ticas recomendadas para aumentar a visibilidade da sua marca, gerar leads qualificados e impulsionar as vendas. <br><br> Nossos servi\xE7os de marketing digital incluem: <br><br><b>SEO (Search Engine Optimization):</b> Otimizamos seu site para os mecanismos de busca, ajudando voc\xEA a alcan\xE7ar uma classifica\xE7\xE3o mais alta nos resultados de pesquisa e a atrair mais tr\xE1fego org\xE2nico. <br><br><b>PPC (Pay-Per-Click):</b> Criamos e gerenciamos campanhas de PPC eficazes para aumentar o tr\xE1fego qualificado para o seu site e gerar leads de alta qualidade. <br><br><b>Marketing de Conte\xFAdo:</b> Criamos conte\xFAdo relevante e envolvente para atrair seu p\xFAblico-alvo e construir uma base s\xF3lida de seguidores e clientes. <br><br><b>M\xEDdias Sociais:</b> Desenvolvemos estrat\xE9gias de m\xEDdia social personalizadas para aumentar o engajamento, expandir sua presen\xE7a online e fortalecer o relacionamento com seus clientes. <br><br><b>E-mail Marketing:</b> Criamos campanhas de e-mail marketing eficazes para nutrir leads, promover produtos e servi\xE7os e manter seus clientes informados e engajados. <br><br> Al\xE9m disso, nossa abordagem centrada no cliente garante que cada estrat\xE9gia seja personalizada de acordo com as necessidades e objetivos espec\xEDficos de sua empresa. Estamos comprometidos em fornecer resultados mensur\xE1veis e um retorno sobre o investimento tang\xEDvel. <br><br> Se voc\xEA est\xE1 procurando uma maneira eficaz de aumentar sua presen\xE7a online e impulsionar suas vendas, entre em contato conosco hoje mesmo. Estamos ansiosos para ajudar voc\xEA a alcan\xE7ar o sucesso online. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/digital-marketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digitalMarketing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { digitalMarketing as default };
//# sourceMappingURL=digital-marketing-0cf2f0c9.mjs.map
