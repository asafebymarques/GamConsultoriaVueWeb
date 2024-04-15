import { _ as __nuxt_component_0, a as __nuxt_component_2, b as __nuxt_component_3 } from "./OffCanvasMobileMenu-41abe105.js";
import { _ as __nuxt_component_1 } from "./CtaThree-da488cf3.js";
import { A as AccordionTwo } from "./AccordionTwo-4a2c0c94.js";
import { d as data } from "./service-55560f83.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "destr";
import "swiper/vue";
import "swiper/core";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
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
  const _component_Header = __nuxt_component_0;
  const _component_CtaThree = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  const _component_OffCanvasMobileMenu = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary">Cibersegurança</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Serviços de Cibersegurança da Gam Consultoria: <span class="text-color-primary"> Protegendo sua Empresa contra Ameaças Digitais</span></h5><div class="sub-heading"> A Gam Consultoria oferece serviços abrangentes de cibersegurança para proteger sua empresa contra ameaças digitais em constante evolução. Nossa equipe de especialistas em segurança cibernética possui o conhecimento e a experiência necessários para identificar, mitigar e prevenir ataques cibernéticos, garantindo a segurança de seus dados e sistemas. <br><br> Nossos serviços de cibersegurança incluem: <br><br><b>Auditoria de Segurança:</b> Realizamos auditorias abrangentes de segurança para identificar vulnerabilidades em seus sistemas e redes. <br><br><b>Gerenciamento de Vulnerabilidades:</b> Monitoramos constantemente suas redes e sistemas em busca de vulnerabilidades e aplicamos patches e atualizações de segurança conforme necessário. <br><br><b>Detecção e Resposta a Incidentes:</b> Implementamos sistemas avançados de detecção de intrusos e respondemos rapidamente a quaisquer incidentes de segurança para minimizar danos. <br><br><b>Treinamento de Conscientização em Segurança:</b> Oferecemos treinamentos especializados para conscientizar seus funcionários sobre as melhores práticas de segurança cibernética. <br><br><b>Consultoria em Segurança: </b> Fornecemos orientação especializada para ajudar a desenvolver e implementar políticas de segurança cibernética eficazes. <br><br> Além disso, nossa abordagem personalizada garante que cada solução seja adaptada às necessidades específicas de sua empresa. Estamos comprometidos em proteger seus ativos mais valiosos e garantir a continuidade de seus negócios, independentemente das ameaças cibernéticas que possam surgir. <br><br> Se você está procurando um parceiro confiável em cibersegurança para proteger sua empresa contra ameaças digitais, entre em contato conosco hoje mesmo. Estamos aqui para ajudar a manter sua empresa segura e protegida. </div></div></div></div></div></div></div>`);
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
export {
  cybersecurity as default
};
//# sourceMappingURL=cybersecurity-7612552f.js.map
