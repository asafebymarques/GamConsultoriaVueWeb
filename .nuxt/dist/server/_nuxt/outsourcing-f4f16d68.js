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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary">Outsourcing</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Serviços de Outsourcing de TI da Gam Consultoria: <span class="text-color-primary"> Sua Solução em Tecnologia</span></h5><div class="sub-heading"> A Gam Consultoria é líder em fornecer soluções de outsourcing de TI que impulsionam a eficiência, reduzem os custos e aumentam a produtividade para empresas de todos os tamanhos. Nossa abordagem centrada no cliente e nossa expertise em tecnologia nos tornam o parceiro ideal para suas necessidades de outsourcing de TI. <br><br> Nossos serviços de outsourcing abrangem uma ampla gama de áreas, incluindo suporte técnico, desenvolvimento de software, gerenciamento de rede, segurança cibernética e muito mais. Com uma equipe altamente qualificada de profissionais de TI, estamos prontos para enfrentar qualquer desafio e fornecer soluções personalizadas que atendam às suas necessidades específicas. <br><br> Ao optar pelo outsourcing de TI da Gam Consultoria, você terá acesso a uma equipe de especialistas dedicados que estão comprometidos em garantir que suas operações de TI funcionem sem problemas. Isso permite que você se concentre em seus principais negócios, enquanto nós cuidamos de todos os aspectos de sua infraestrutura de TI. <br><br> Além disso, nossa abordagem flexível e personalizada garante que você receba exatamente os serviços de que precisa, quando precisa, sem comprometer a qualidade. Estamos aqui para ajudá-lo a alcançar seus objetivos de negócios e impulsionar o sucesso de sua empresa por meio de soluções de TI inovadoras e eficazes. <br><br> Se você está procurando um parceiro confiável em outsourcing de TI, entre em contato conosco hoje mesmo. Estamos ansiosos para colaborar com você e impulsionar o sucesso de sua empresa por meio de soluções de tecnologia de ponta. </div></div></div></div></div></div></div>`);
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
export {
  outsourcing as default
};
//# sourceMappingURL=outsourcing-f4f16d68.js.map
