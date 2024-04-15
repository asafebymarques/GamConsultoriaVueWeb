import { d as data$4, _ as __nuxt_component_0$3, a as __nuxt_component_2$2, b as __nuxt_component_3$1 } from "./OffCanvasMobileMenu-41abe105.js";
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, resolveComponent, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_2$1 } from "../server.mjs";
import { d as data$5 } from "./service-55560f83.js";
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";
import "destr";
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
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "business-solution-form-wrap me-auto ms-auto" }, _attrs))}><div class="contact-title text-center section-space--mb_40"><h5 class="mb-10">Contate-nos</h5><p class="text">Se você tiver alguma dúvida, sugestão ou desejar mais informações sobre nossos serviços, não hesite em entrar em contato conosco. Nossa equipe está pronta para atendê-lo e oferecer a melhor solução para suas necessidades.</p></div><form method="post"><div class="contact-form__two"><div class="contact-inner"><input name="name" type="text" placeholder="Nome *"></div><div class="contact-inner"><input name="email" type="email" placeholder="Email *"></div><div class="comment-submit-btn text-center"><button class="ht-btn ht-btn-md" type="submit">Enviar</button></div></div></form></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppointmentForm.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const heroAppointment = {
  subTitle: "Gam Consultoria",
  title: "Você imagina, nós planejamos e executamos!",
  videoText: "Confira!",
  videoLink: "https://youtu.be/onOTGpDEBok?si=KKmkwfK5mSMUzDpd",
  bgImg: "/images/hero/appointment-hero-bg.jpg"
};
const data$3 = {
  heroAppointment
};
const _sfc_main$d = {
  components: {
    AppointmentForm: __nuxt_component_0$2
  },
  data() {
    return {
      data: data$3
    };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppointmentForm = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "appointment-hero-wrapper bg-cover section-space--ptb_120",
    style: { backgroundImage: `url(${$data.data.heroAppointment.bgImg})` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="appointment-hero-wrap wow move-up"><div class="appointment-hero-text"><h6 class="text-white">${ssrInterpolate($data.data.heroAppointment.subTitle)}</h6><h1 class="font-weight--reguler text-white mb-30">${$data.data.heroAppointment.title}</h1><div class="hero-button"><div class="video-popup infotech-video-box"><a href="https://youtu.be/onOTGpDEBok?si=KKmkwfK5mSMUzDpd" target="_blank" class="single-popup-wrap video-link"><div class="video-content"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div><div class="video-text">${ssrInterpolate($data.data.heroAppointment.videoText)}</div></div></a></div></div></div></div></div><div class="col-lg-5 me-auto me-auto col-md-6">`);
  _push(ssrRenderComponent(_component_AppointmentForm, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroAppointment.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  data() {
    return {
      data: data$4
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "cta-image-area_one section-space--ptb_80 cta-bg-image_two",
    style: { backgroundImage: `url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-xl-8 col-lg-7"><div class="cta-content md-text-center"><h4 class="heading">${$data.data.ctaOne.title}</h4></div></div><div class="col-xl-4 col-lg-5"><div class="cta-button-group--two text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "btn btn--white btn-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Saber Mais `);
      } else {
        return [
          createTextVNode(" Saber Mais ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "btn btn--secondary btn-two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contate-nos `);
      } else {
        return [
          createTextVNode(" Contate-nos ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaOne.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const funfactOne = [
  {
    title: "+",
    count: 6,
    text: "Anos de experiência"
  },
  {
    title: "+",
    count: 40,
    text: "Projetos Concluídos"
  },
  {
    title: "+",
    count: 40,
    text: "Clientes Satisfeitos"
  }
];
const data$2 = {
  funfactOne
};
const _sfc_main$b = {
  data() {
    return {
      data: data$2
    };
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($data.data.funfactOne, (item) => {
    _push(`<div class="col-md-4 col-sm-6 wow move-up"><div class="fun-fact--two text-center"><div class="fun-fact__count counter"><span>${ssrInterpolate(item.count)}</span></div><h6 class="fun-fact__text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFactTwo.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  props: ["title", "subTitle"]
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-title-wrap text-center" }, _attrs))}><h6 class="section-sub-title mb-20">${ssrInterpolate($props.subTitle)}</h6><h3 class="heading">${$props.title}</h3></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const SectionTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});
const _sfc_main$9 = {
  props: ["service"]
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ht-box-icon style-02 single-svg-icon-box" }, _attrs))}><div class="icon-box-wrap"><div class="icon"><div class="svg-icon"><img${ssrRenderAttr("src", $props.service.icon)} alt="icon"></div></div><div class="content"><h5 class="heading">${ssrInterpolate($props.service.heading)}</h5><div class="text">${ssrInterpolate($props.service.desc)}</div><div class="feature-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: `/service/${$props.service.slug}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="button-text"${_scopeId}>Saber Mais</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "button-text" }, "Saber Mais"),
          createVNode("i", { class: "fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleTwo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  components: {
    SectionTitle: __nuxt_component_0$1,
    ServiceItemStyleTwo: __nuxt_component_1$1
  },
  data() {
    return {
      data: data$5
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$1;
  const _component_ServiceItemStyleTwo = __nuxt_component_1$1;
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-icon-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_40",
    title: $data.data.serviceStyleTwo.sectionTitle,
    subTitle: $data.data.serviceStyleTwo.sectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="feature-list__two"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(6, 12), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_ServiceItemStyleTwo, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="col-lg-12"><div class="feature-list-button-box mt-30 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Saber Mais `);
      } else {
        return [
          createTextVNode(" Saber Mais ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md ht-btn--outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contate-nos `);
      } else {
        return [
          createTextVNode(" Contate-nos ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleTwo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ServiceStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$1 = "" + __publicAssetsURL("images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-history-image video-popup mt-30" }, _attrs))}><a href="https://www.youtube.com/watch?v=onOTGpDEBok" target="_blank" class="video-link"><div class="single-popup-wrap"><img class="img-fluid"${ssrRenderAttr("src", _imports_0$1)} alt="image"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPupupOne.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  props: ["service"]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/service/${$props.service.slug}`,
    class: "ht-large-box-images style-04"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", $props.service.image)} alt="image"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>${ssrInterpolate($props.service.heading)}</h5><div class="text"${_scopeId}>At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. </div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Saber Mais</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "large-image-box" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("div", { class: "default-image" }, [
                createVNode("img", {
                  class: "img-fluid",
                  src: $props.service.image,
                  alt: "image"
                }, null, 8, ["src"])
              ])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, toDisplayString($props.service.heading), 1),
              createVNode("div", { class: "text" }, "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. "),
              createVNode("div", { class: "box-images-arrow" }, [
                createVNode("span", { class: "button-text" }, "Saber Mais"),
                createVNode("i", { class: "fas fa-arrow-right ms-1" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleThree.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ServiceItemStyleThree = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = "" + __publicAssetsURL("images/brand/galp.png");
const _imports_1 = "" + __publicAssetsURL("images/brand/decskill.png");
const _imports_2 = "" + __publicAssetsURL("images/brand/defendy.png");
const _imports_3 = "" + __publicAssetsURL("images/brand/dxc.png");
const _imports_4 = "" + __publicAssetsURL("images/brand/Alter.png");
const _imports_5 = "" + __publicAssetsURL("images/brand/edp.png");
const _imports_6 = "" + __publicAssetsURL("images/brand/annexus.png");
const _imports_7 = "" + __publicAssetsURL("images/brand/fibra.png");
const _imports_8 = "" + __publicAssetsURL("images/brand/itau.png");
const _imports_9 = "" + __publicAssetsURL("images/brand/vector.png");
const _imports_10 = "" + __publicAssetsURL("images/brand/softtek.png");
const _imports_11 = "" + __publicAssetsURL("images/brand/total.png");
const _sfc_main$5 = {
  components: {
    VideoPupupOne: __nuxt_component_0,
    ServiceItemStyleThree
  },
  data() {
    return {
      data: data$5,
      activeItem: "tab_mission"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VideoPupupOne = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-wrapper bg-gray section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrapper text-center section-space--mb_60 wow move-up"><h6 class="section-sub-title mb-20">Sobre nós</h6><h3 class="section-title">Geramos valor aos nossos clientes<br> há mais de <span class="text-color-primary"> 6 Anos</span></h3></div></div></div><div class="row"><div class="col-lg-12 ht-tab-wrap"><div class="text-center"><ul class="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist"><li class="tab__item nav-item"><a href="#tab_mission" class="${ssrRenderClass([{ active: $options.isActive("tab_mission") }, "nav-link"])}">Gam Consultoria</a></li><li class="tab__item nav-item"><a href="#tab_partners" class="${ssrRenderClass([{ active: $options.isActive("tab_partners") }, "nav-link"])}">Nossos Parceiros</a></li></ul></div><div class="tab-content ht-tab__content"><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_mission") }, "tab-pane fade"])}" id="tab_mission"><div class="tab-history-wrap section-space--mt_40"><div class="row"><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_VideoPupupOne, null, null, _parent));
  _push(`</div><div class="col-lg-5 offset-lg-1"><div class="tab-content-inner mt-30"><div class="text mb-30"><span class="text-color-primary">Gam Consultoria</span> <br> Somos uma empresa de serviços de TI que emprega a tecnologia para construir um futuro melhor para nossos clientes, colegas, meio ambiente e comunidades. Comprometemo-nos em fazer parte de um amplo ecossistema de inovação que abrange as principais verticais de mercado.<br> Oferecemos um portfólio completo de soluções, que vão desde consultoria até marketing, mobilidade e campanhas personalizadas, estamos preparados para ajudá-lo a transformar digitalmente sua empresa e expandir suas oportunidades de negócio. <br> Ao optar por nossa expertise global, você terá acesso a recursos digitais robustos e um compromisso com o sucesso de sua empresa, desde o primeiro contato até a implementação final. Contem conosco para impulsionar sua jornada digital e alcançar novos patamares de sucesso! </div><ul class="check-list section-space--mb_40"><li class="list-item">Inteligência artificial</li><li class="list-item">IT Design </li><li class="list-item">Cloud </li><li class="list-item">Software Engineering </li><li class="list-item">Experience (UX)</li><li class="list-item">E outros</li></ul><div class="tab-button">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="button-text"${_scopeId}>Saber mais <i class="fas fa-arrow-right ms-1"${_scopeId}></i></span>`);
      } else {
        return [
          createVNode("span", { class: "button-text" }, [
            createTextVNode("Saber mais "),
            createVNode("i", { class: "fas fa-arrow-right ms-1" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_partners") }, "tab-pane fade"])}" id="tab_partners"><div class="tab-history-wrap section-space--mt_60 brand-logo-slider__one"><div class="modern-grid--6"><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_0,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_0,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_1,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_1,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_2,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_2,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_3,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_3,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_4,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_4,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_5,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_5,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_6,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_6,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_7,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_7,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_8,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_8,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_9)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_9)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_9,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_9,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_10)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_10)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_10,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_10,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_11)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_11)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_11,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_11,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TabSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TabSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  props: ["project"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/case-studies/${$props.project.id}`,
    class: "projects-wrap style-01 wow move-up"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="projects-image-box"${_scopeId}><div class="projects-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", $props.project.image)} alt="project image"${_scopeId}></div><div class="content"${_scopeId}><h6 class="heading"${_scopeId}>${ssrInterpolate($props.project.heading)}</h6><div class="post-categories"${_scopeId}>${ssrInterpolate($props.project.category)}</div><div class="text"${_scopeId}>${ssrInterpolate($props.project.desc)}</div><div class="box-projects-arrow"${_scopeId}><span class="button-text"${_scopeId}>View Case Study</span><i class="fa fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "projects-image-box" }, [
            createVNode("div", { class: "projects-image" }, [
              createVNode("img", {
                class: "img-fluid",
                src: $props.project.image,
                alt: "project image"
              }, null, 8, ["src"])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h6", { class: "heading" }, toDisplayString($props.project.heading), 1),
              createVNode("div", { class: "post-categories" }, toDisplayString($props.project.category), 1),
              createVNode("div", { class: "text" }, toDisplayString($props.project.desc), 1),
              createVNode("div", { class: "box-projects-arrow" }, [
                createVNode("span", { class: "button-text" }, "View Case Study"),
                createVNode("i", { class: "fa fa-arrow-right ms-1" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaseStudiesItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const CaseStudiesItem = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
});
const sectionTitle$1 = "Proud projects that<span> make us stand out</span>";
const sectionSubTitle$1 = "Case studies";
const projects = [
  {
    id: 1,
    image: "/images/projects/case-study-01-480x298.jpg",
    heading: "Mitech-Smart Vision",
    category: "Information Technology",
    desc: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."
  },
  {
    id: 2,
    image: "/images/projects/case-study-02-480x298.jpg",
    heading: "Mitech-Internal Networking",
    category: "Cyber Security",
    desc: "The prospects for a company operating in this new market are varied and exciting. The potential"
  },
  {
    id: 3,
    image: "/images/projects/case-study-03-480x298.jpg",
    heading: "A Freeserve case study",
    category: "Web Development",
    desc: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."
  },
  {
    id: 4,
    image: "/images/projects/case-study-04-480x298.jpg",
    heading: "Mitech-Research and Energy",
    category: "Cyber Security",
    desc: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."
  },
  {
    id: 5,
    image: "/images/projects/case-study-05-480x298.jpg",
    heading: "A Freeserve case study",
    category: "Web Development",
    desc: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."
  },
  {
    id: 6,
    image: "/images/projects/case-study-06-480x298.jpg",
    heading: "Mitech-Research and Energy",
    category: "Cyber Security",
    desc: "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."
  }
];
const projectsTwo = [
  {
    id: 1,
    image: "/images/features/case-study-image-01.png",
    alt: "image",
    heading: "Aqua Technology Case Studies",
    category: "Cyber Security",
    desc: "ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."
  },
  {
    id: 2,
    image: "/images/features/case-study-image-02.png",
    alt: "image",
    heading: "Mitech-Smart Vision",
    category: "Information Technology",
    desc: "ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."
  }
];
const underHeading = "Challenges are just opportunities in disguise.";
const link = "/";
const caseStudies = {
  bgImg: "/images/bg/single-case-study-bg-01.jpg"
};
const data$1 = {
  sectionTitle: sectionTitle$1,
  sectionSubTitle: sectionSubTitle$1,
  projects,
  projectsTwo,
  underHeading,
  link,
  caseStudies
};
SwiperCore.use([Pagination]);
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle: () => Promise.resolve().then(function() {
      return SectionTitle;
    }),
    CaseStudiesItem: () => Promise.resolve().then(function() {
      return CaseStudiesItem;
    })
  },
  data() {
    return {
      data: data$1,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-project",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$1;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_CaseStudiesItem = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "projects-wrapper projectinfotechno-bg section-space--ptb_100",
    style: { backgroundImage: `url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_40",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="projects-wrap">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    breakpoints: $data.swiperOptions.breakpoints,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.projects, (project) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: project.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_CaseStudiesItem, { project }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_CaseStudiesItem, { project }, null, 8, ["project"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.projects, (project) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: project.id
            }, {
              default: withCtx(() => [
                createVNode(_component_CaseStudiesItem, { project }, null, 8, ["project"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination swiper-pagination-project mt_20 text-center"></div></div><div class="section-under-heading text-center section-space--mt_40">${ssrInterpolate($data.data.underHeading)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Take the challenge!`);
      } else {
        return [
          createTextVNode("Take the challenge!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CaseStudiesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CaseStudiesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const sectionTitle = "Why do people praise about<span> Mitech?</span>";
const sectionSubTitle = "Testimonials";
const testimonials = [
  {
    subject: "The Mitech team works really hard to ensure high level of quality",
    desc: "There are thousands of IT service companies in the US. But there’s nothing like @Mitech. Their popularity and reputation are just evident.",
    thumb: "/images/testimonial/testimonial-01-70x70.jpg",
    name: "Maggie Strickland",
    designation: ""
  },
  {
    subject: "The Mitech team works really hard to ensure high level of quality",
    desc: "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
    thumb: "/images/testimonial/testimonial-02-70x70.jpg",
    name: "Robert Amplilian",
    designation: ""
  },
  {
    subject: "The Mitech team works really hard to ensure high level of quality",
    desc: "There are thousands of IT service companies in the US. But there’s nothing like @Mitech. Their popularity and reputation are just evident.",
    thumb: "/images/testimonial/testimonial-03-70x70.jpg",
    name: "Stephen Mearsley",
    designation: ""
  },
  {
    subject: "The Mitech team works really hard to ensure high level of quality",
    desc: "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
    thumb: "/images/testimonial/testimonial-04-70x70.jpg",
    name: "Monica Blews",
    designation: ""
  }
];
const data = {
  sectionTitle,
  sectionSubTitle,
  testimonials
};
SwiperCore.use([Pagination]);
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle: () => Promise.resolve().then(function() {
      return SectionTitle;
    })
  },
  data() {
    return {
      data,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-t01",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$1;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial-slider-area section-space--ptb_120 bg-gray" }, _attrs))}><div class="container"><div class="row"><div class="col-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_60",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`<div class="testimonial-slider"><div class="testimonial-slider__container"><div class="testimonial-slider__wrapper">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    breakpoints: $data.swiperOptions.breakpoints,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.testimonials, (testimonial) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: testimonial.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial-slider__one wow move-up"${_scopeId2}><div class="testimonial-slider--info"${_scopeId2}><div class="testimonial-slider__media"${_scopeId2}><img${ssrRenderAttr("src", testimonial.thumb)} class="img-fluid" alt="client thumbnail"${_scopeId2}></div><div class="testimonial-slider__author"${_scopeId2}><div class="testimonial-rating"${_scopeId2}><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span></div><div class="author-info"${_scopeId2}><h6 class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</h6></div></div></div><div class="testimonial-slider__text"${_scopeId2}>${ssrInterpolate(testimonial.desc)}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial-slider__one wow move-up" }, [
                    createVNode("div", { class: "testimonial-slider--info" }, [
                      createVNode("div", { class: "testimonial-slider__media" }, [
                        createVNode("img", {
                          src: testimonial.thumb,
                          class: "img-fluid",
                          alt: "client thumbnail"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "testimonial-slider__author" }, [
                        createVNode("div", { class: "testimonial-rating" }, [
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" })
                        ]),
                        createVNode("div", { class: "author-info" }, [
                          createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.testimonials, (testimonial) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: testimonial.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial-slider__one wow move-up" }, [
                  createVNode("div", { class: "testimonial-slider--info" }, [
                    createVNode("div", { class: "testimonial-slider__media" }, [
                      createVNode("img", {
                        src: testimonial.thumb,
                        class: "img-fluid",
                        alt: "client thumbnail"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "testimonial-slider__author" }, [
                      createVNode("div", { class: "testimonial-rating" }, [
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" })
                      ]),
                      createVNode("div", { class: "author-info" }, [
                        createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="swiper-pagination swiper-pagination-t01 section-space--mt_30 text-center"></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TestimonialTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TestimonialTwo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-us-area appointment-contact-bg section-space--ptb_100",
    style: { backgroundImage: `url('/images/bg/home-appointment-contact-bg-image.png')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="contact-title section-space--mb_50"><h3 class="mb-20">Entre em Contato Conosco</h3><p class="sub-title">Estamos aqui para ajudar você a impulsionar o sucesso de seu negócio com soluções de tecnologia inovadoras e eficazes. Entre em contato conosco hoje mesmo para agendar uma consulta ou para saber mais sobre nossos serviços. Nossa equipe de especialistas está pronta para atender às suas necessidades e ajudar a transformar suas ideias em realidade digital. A Gam Consultoria é o seu parceiro confiável em tecnologia.</p></div></div></div><div class="row"><div class="col-lg-6"><div class="contact-form-wrap"><form id="contact-form"><div class="contact-form__two"><div class="contact-input"><div class="contact-inner"><input name="con_name" type="text" placeholder="Nome *"></div><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="contact-inner contact-message"><textarea name="con_message" placeholder="Mensagem..."></textarea></div><div class="comment-submit-btn"><button class="ht-btn ht-btn-md" type="submit">Enviar</button><p class="form-messege"></p></div></div></form></div></div><div class="col-lg-5 ms-auto"><div class="contact-info-three text-left"><h6 class="heading font-weight--reguler">Entre em contato agora!</h6><h3 class="call-us"><a href="tel:+551151160526">+55 (11) 5116-0526</a></h3><div class="text">Sejam bem-vindos à próxima fase da jornada da GAM Consultoria - uma jornada de excelência, inovação e crescimento mútuo.</div><div class="location-button mt-20"><button class="location-text-button"><span class="button-icon"></span><span class="button-text"><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"> Gam Consultoria </a></span></button></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$3,
    HeroAppointment: __nuxt_component_1$2,
    ServiceStyleTwo,
    TabSection,
    CtaOne: __nuxt_component_2,
    CaseStudiesSection,
    TestimonialTwo,
    FunFactTwo: __nuxt_component_3,
    ContactUs,
    Footer: __nuxt_component_2$2,
    OffCanvasMobileMenu: __nuxt_component_3$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$3;
  const _component_HeroAppointment = __nuxt_component_1$2;
  const _component_ServiceStyleTwo = resolveComponent("ServiceStyleTwo");
  const _component_TabSection = resolveComponent("TabSection");
  const _component_CtaOne = __nuxt_component_2;
  const _component_FunFactTwo = __nuxt_component_3;
  const _component_ContactUs = resolveComponent("ContactUs");
  const _component_Footer = __nuxt_component_2$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, { id: "home" }, null, _parent));
  _push(ssrRenderComponent(_component_HeroAppointment, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleTwo, { id: "services" }, null, _parent));
  _push(ssrRenderComponent(_component_TabSection, { id: "aboutUs" }, null, _parent));
  _push(ssrRenderComponent(_component_CtaOne, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFactTwo, { id: "contactUs" }, null, _parent));
  _push(ssrRenderComponent(_component_ContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-b8f26095.js.map
