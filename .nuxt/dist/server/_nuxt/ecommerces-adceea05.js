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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de E-Commerces e Lojas Virtuais</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Desenvolvimento de E-Commerces e Lojas Virtuais pela <span class="text-color-primary"> Gam Consultoria</span></h5><div class="sub-heading"> Na Gam Consultoria, estamos comprometidos em ajudar empresas a expandir sua presença online e impulsionar suas vendas por meio de e-commerces e lojas virtuais de alta qualidade e desempenho. Com nossa experiência e conhecimento técnico, podemos transformar sua visão em uma plataforma de comércio eletrônico eficaz e lucrativa. <br><br> Nosso processo de desenvolvimento começa com uma análise detalhada de suas necessidades e objetivos de negócios. Compreendemos que cada empresa é única, e é por isso que desenvolvemos soluções personalizadas que atendem às suas necessidades específicas. Desde a escolha da plataforma certa até o design e a integração de recursos, estamos aqui para ajudar em cada etapa do processo. <br><br> Utilizando as mais recentes tecnologias e melhores práticas do setor, garantimos que seu e-commerce seja seguro, fácil de usar e otimizado para conversões. Desde a integração de sistemas de pagamento até a implementação de estratégias de marketing digital, nossa equipe está preparada para enfrentar qualquer desafio e garantir o sucesso de sua loja virtual. <br><br> Além do desenvolvimento inicial, oferecemos serviços de suporte contínuo e manutenção para garantir que seu e-commerce permaneça atualizado e funcione perfeitamente. Estamos comprometidos em fornecer a você as ferramentas e o suporte necessários para alcançar o sucesso online. <br><br> Se você está pronto para levar sua empresa para o próximo nível com um e-commerce de alto desempenho, entre em contato conosco hoje mesmo. Estamos ansiosos para colaborar com você e transformar sua visão em realidade digital. </div></div></div></div></div></div></div>`);
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
export {
  ecommerces as default
};
//# sourceMappingURL=ecommerces-adceea05.js.map
