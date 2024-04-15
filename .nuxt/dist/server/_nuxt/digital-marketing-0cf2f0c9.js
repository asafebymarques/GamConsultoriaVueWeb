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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary"> Marketing Digital</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Serviços de Marketing Digital da Gam Consultoria: <span class="text-color-primary"> Impulsionando o Sucesso Online</span></h5><div class="sub-heading"> A Gam Consultoria oferece serviços completos de marketing digital para ajudar empresas a alcançar seus objetivos de crescimento online. Nossa equipe de especialistas em marketing digital utiliza estratégias comprovadas e práticas recomendadas para aumentar a visibilidade da sua marca, gerar leads qualificados e impulsionar as vendas. <br><br> Nossos serviços de marketing digital incluem: <br><br><b>SEO (Search Engine Optimization):</b> Otimizamos seu site para os mecanismos de busca, ajudando você a alcançar uma classificação mais alta nos resultados de pesquisa e a atrair mais tráfego orgânico. <br><br><b>PPC (Pay-Per-Click):</b> Criamos e gerenciamos campanhas de PPC eficazes para aumentar o tráfego qualificado para o seu site e gerar leads de alta qualidade. <br><br><b>Marketing de Conteúdo:</b> Criamos conteúdo relevante e envolvente para atrair seu público-alvo e construir uma base sólida de seguidores e clientes. <br><br><b>Mídias Sociais:</b> Desenvolvemos estratégias de mídia social personalizadas para aumentar o engajamento, expandir sua presença online e fortalecer o relacionamento com seus clientes. <br><br><b>E-mail Marketing:</b> Criamos campanhas de e-mail marketing eficazes para nutrir leads, promover produtos e serviços e manter seus clientes informados e engajados. <br><br> Além disso, nossa abordagem centrada no cliente garante que cada estratégia seja personalizada de acordo com as necessidades e objetivos específicos de sua empresa. Estamos comprometidos em fornecer resultados mensuráveis e um retorno sobre o investimento tangível. <br><br> Se você está procurando uma maneira eficaz de aumentar sua presença online e impulsionar suas vendas, entre em contato conosco hoje mesmo. Estamos ansiosos para ajudar você a alcançar o sucesso online. </div></div></div></div></div></div></div>`);
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
export {
  digitalMarketing as default
};
//# sourceMappingURL=digital-marketing-0cf2f0c9.js.map
