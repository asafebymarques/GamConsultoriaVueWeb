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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de Softwares e aplicativos</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Desenvolvimento de Softwares e Aplicativos Personalizados pela <span class="text-color-primary"> Gam Consultoria</span></h5><div class="sub-heading"> Na Gam Consultoria, somos apaixonados por transformar ideias inovadoras em realidade digital. Como especialistas em desenvolvimento de softwares e aplicativos, oferecemos soluções personalizadas para atender às necessidades exclusivas de nossos clientes. <br><br> Nossa abordagem começa com uma profunda compreensão de seus objetivos e requisitos. Através de uma análise detalhada, colaboramos com você para definir uma estratégia de desenvolvimento personalizada que atenda às suas expectativas e ultrapasse suas metas. <br><br> Utilizando as metodologias ágeis mais recentes, nossa equipe experiente garante entregas rápidas e de alta qualidade. Isso significa que você pode ver seu projeto evoluir rapidamente, com a flexibilidade de ajustar o curso conforme necessário. <br><br> Desde o desenvolvimento de aplicativos móveis para iOS e Android até sistemas web e desktop, nossa experiência abrange uma ampla gama de tecnologias e plataformas. Isso nos permite oferecer soluções abrangentes que atendem às suas necessidades de negócios específicas. <br><br> Além do desenvolvimento inicial, oferecemos serviços de manutenção e suporte contínuos para garantir que seus softwares e aplicativos permaneçam atualizados e funcionando perfeitamente. <br><br> Se você está procurando uma equipe dedicada e experiente para transformar sua visão em realidade digital, a Gam Consultoria está aqui para ajudar. Entre em contato conosco hoje para saber mais sobre como podemos colaborar no seu próximo projeto. </div></div></div></div></div></div></div>`);
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
export {
  softwaresAndApps as default
};
//# sourceMappingURL=softwares-and-apps-14a7dc64.js.map
