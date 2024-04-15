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
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0"><span class="text-color-primary">Consultoria em Tecnologia</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Consultoria de Tecnologia da Gam Consultoria: <span class="text-color-primary"> Impulsionando a Inovação e o Sucesso Empresarial</span></h5><div class="sub-heading"> A Gam Consultoria é uma empresa especializada em consultoria de tecnologia, dedicada a ajudar empresas de todos os tamanhos a alcançar seus objetivos por meio da inovação e da eficiência tecnológica. Com uma equipe de especialistas experientes e apaixonados por tecnologia, estamos prontos para enfrentar os desafios mais complexos e fornecer soluções que impulsionem o sucesso de sua empresa. <br><br> Nossa abordagem começa com uma análise abrangente de suas necessidades e objetivos de negócios. Compreendemos que cada empresa é única, e é por isso que desenvolvemos soluções personalizadas que atendem às suas necessidades específicas. Seja você uma startup em busca de orientação tecnológica ou uma empresa estabelecida procurando otimizar suas operações, estamos aqui para ajudar. <br><br> Nossos serviços de consultoria abrangem uma ampla gama de áreas, incluindo estratégia de tecnologia, transformação digital, gerenciamento de projetos, segurança cibernética, análise de dados e muito mais. Trabalhamos em estreita colaboração com você para entender suas necessidades e desenvolver soluções práticas e eficazes que impulsionem o crescimento e a inovação em sua empresa. <br><br> Além disso, nossa abordagem centrada no cliente garante que você receba o mais alto nível de atendimento e suporte em todos os momentos. Estamos comprometidos em fornecer soluções de consultoria de tecnologia que não apenas atendam, mas excedam suas expectativas. <br><br> Se você está procurando uma consultoria de tecnologia confiável e experiente para ajudar a impulsionar o sucesso de sua empresa, a Gam Consultoria é a escolha certa. Entre em contato conosco hoje mesmo para saber mais sobre como podemos ajudar você a alcançar seus objetivos de negócios por meio da tecnologia. </div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/tech-consulting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const techConsulting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  techConsulting as default
};
//# sourceMappingURL=tech-consulting-44e17f10.js.map
