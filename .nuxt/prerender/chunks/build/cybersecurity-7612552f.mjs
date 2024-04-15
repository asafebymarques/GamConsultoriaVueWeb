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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary">Ciberseguran\xE7a</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Servi\xE7os de Ciberseguran\xE7a da Gam Consultoria: <span class="text-color-primary"> Protegendo sua Empresa contra Amea\xE7as Digitais</span></h5><div class="sub-heading"> A Gam Consultoria oferece servi\xE7os abrangentes de ciberseguran\xE7a para proteger sua empresa contra amea\xE7as digitais em constante evolu\xE7\xE3o. Nossa equipe de especialistas em seguran\xE7a cibern\xE9tica possui o conhecimento e a experi\xEAncia necess\xE1rios para identificar, mitigar e prevenir ataques cibern\xE9ticos, garantindo a seguran\xE7a de seus dados e sistemas. <br><br> Nossos servi\xE7os de ciberseguran\xE7a incluem: <br><br><b>Auditoria de Seguran\xE7a:</b> Realizamos auditorias abrangentes de seguran\xE7a para identificar vulnerabilidades em seus sistemas e redes. <br><br><b>Gerenciamento de Vulnerabilidades:</b> Monitoramos constantemente suas redes e sistemas em busca de vulnerabilidades e aplicamos patches e atualiza\xE7\xF5es de seguran\xE7a conforme necess\xE1rio. <br><br><b>Detec\xE7\xE3o e Resposta a Incidentes:</b> Implementamos sistemas avan\xE7ados de detec\xE7\xE3o de intrusos e respondemos rapidamente a quaisquer incidentes de seguran\xE7a para minimizar danos. <br><br><b>Treinamento de Conscientiza\xE7\xE3o em Seguran\xE7a:</b> Oferecemos treinamentos especializados para conscientizar seus funcion\xE1rios sobre as melhores pr\xE1ticas de seguran\xE7a cibern\xE9tica. <br><br><b>Consultoria em Seguran\xE7a: </b> Fornecemos orienta\xE7\xE3o especializada para ajudar a desenvolver e implementar pol\xEDticas de seguran\xE7a cibern\xE9tica eficazes. <br><br> Al\xE9m disso, nossa abordagem personalizada garante que cada solu\xE7\xE3o seja adaptada \xE0s necessidades espec\xEDficas de sua empresa. Estamos comprometidos em proteger seus ativos mais valiosos e garantir a continuidade de seus neg\xF3cios, independentemente das amea\xE7as cibern\xE9ticas que possam surgir. <br><br> Se voc\xEA est\xE1 procurando um parceiro confi\xE1vel em ciberseguran\xE7a para proteger sua empresa contra amea\xE7as digitais, entre em contato conosco hoje mesmo. Estamos aqui para ajudar a manter sua empresa segura e protegida. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/cybersecurity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cybersecurity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cybersecurity as default };
//# sourceMappingURL=cybersecurity-7612552f.mjs.map
