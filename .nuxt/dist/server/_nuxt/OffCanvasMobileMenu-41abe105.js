import { defineComponent, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, toDisplayString } from "vue";
import { u as useNuxtApp, _ as _export_sfc, a as __nuxt_component_2$1 } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(_attrs)}><li><a href="/#home"><span>Home</span></a></li><li><a href="/#aboutUs"><span>Sobre</span></a></li><li class="has-children has-children--multilevel-submenu"><a href="/#services"><span>Serviços</span></a><ul class="submenu"><li><a href="/service/softwares-and-apps"><span>Desenvolvimento de Softwares e aplicativos</span></a></li><li><a href="/service/ecommerces"><span>Lojas Virtuais e Ecommerces</span></a></li><li><a href="/service/outsourcing"><span>Outsourcing</span></a></li><li><a href="/service/tech-consulting"><span>Consultoria em Tecnologia</span></a></li><li><a href="/service/digital-marketing"><span>Marketing Digital</span></a></li><li><a href="/service/cybersecurity"><span>Cibersegurança</span></a></li></ul></li><li><a href="/#contactUs"><span>Contato</span></a></li></ul>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0 = "" + __publicAssetsURL("images/logo/logo-dark.png");
SwiperCore.use([Autoplay]);
const _sfc_main$6 = {
  components: {
    Swiper,
    SwiperSlide,
    Navigation: __nuxt_component_4
  },
  data() {
    return {
      isSticky: false,
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      }
    };
  },
  methods: {
    // offcanvas mobile menu open
    mobileToggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_nuxt_link = __nuxt_component_2$1;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_Navigation = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home | Gam Consultoria`);
            } else {
              return [
                createTextVNode("Home | Gam Consultoria")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: _ctx.title
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Home | Gam Consultoria")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: _ctx.title
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header-area header-sticky"><div class="container"><div class="row"><div class="col-lg-12"><div class="header position-relative"><div class="header__logo top-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="Brand Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            class: "img-fluid",
            alt: "Brand Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-right flexible-image-slider-wrap"><div class="header-right-inner" id="hidden-icon-wrapper"><div class="header-search-form d-md-none d-block"><form class="search-form-top"><input class="search-field" type="text" placeholder="Search…"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div><div class="header-top-info-slider-werap top-info-slider__container"><div class="header-top-info-inner default-color">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    autoplay: { "delay": 3e3 },
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-map-marker-alt"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"${_scopeId2}> Joaquim M. F Júnior 311 </a></h6><div class="info-sub-title"${_scopeId2}><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"${_scopeId2}> Mogi das Cruzes - SP </a></div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-map-marker-alt" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, [
                    createVNode("a", {
                      href: "https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9",
                      target: "_blank"
                    }, " Joaquim M. F Júnior 311 ")
                  ]),
                  createVNode("div", { class: "info-sub-title" }, [
                    createVNode("a", {
                      href: "https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9",
                      target: "_blank"
                    }, " Mogi das Cruzes - SP ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-phone"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}><a href="tel:+551151160526"${_scopeId2}> +55 (11) 5116-0526 </a></h6><div class="info-sub-title"${_scopeId2}><a href="mailto:gam@gamconsultoria.com.br"${_scopeId2}> gam@gamconsultoria.com.br</a></div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-phone" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, [
                    createVNode("a", { href: "tel:+551151160526" }, " +55 (11) 5116-0526 ")
                  ]),
                  createVNode("div", { class: "info-sub-title" }, [
                    createVNode("a", { href: "mailto:gam@gamconsultoria.com.br" }, " gam@gamconsultoria.com.br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-clock"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>09:00 - 18:00</h6><div class="info-sub-title"${_scopeId2}>Segunda a Sexta</div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-clock" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "09:00 - 18:00"),
                  createVNode("div", { class: "info-sub-title" }, "Segunda a Sexta")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-comment-alt-lines"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>Ligar Agora</h6><div class="info-sub-title"${_scopeId2}><a href="tel:+551151160526"${_scopeId2}> +55 (11) 5116-0526 </a></div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-comment-alt-lines" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "Ligar Agora"),
                  createVNode("div", { class: "info-sub-title" }, [
                    createVNode("a", { href: "tel:+551151160526" }, " +55 (11) 5116-0526 ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-map-marker-alt" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, [
                  createVNode("a", {
                    href: "https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9",
                    target: "_blank"
                  }, " Joaquim M. F Júnior 311 ")
                ]),
                createVNode("div", { class: "info-sub-title" }, [
                  createVNode("a", {
                    href: "https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9",
                    target: "_blank"
                  }, " Mogi das Cruzes - SP ")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-phone" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, [
                  createVNode("a", { href: "tel:+551151160526" }, " +55 (11) 5116-0526 ")
                ]),
                createVNode("div", { class: "info-sub-title" }, [
                  createVNode("a", { href: "mailto:gam@gamconsultoria.com.br" }, " gam@gamconsultoria.com.br")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-clock" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "09:00 - 18:00"),
                createVNode("div", { class: "info-sub-title" }, "Segunda a Sexta")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-comment-alt-lines" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "Ligar Agora"),
                createVNode("div", { class: "info-sub-title" }, [
                  createVNode("a", { href: "tel:+551151160526" }, " +55 (11) 5116-0526 ")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="header-social-networks style-icons"><div class="inner"><a class="social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://www.facebook.com/gamconsultorianetwork" data-hover="Facebook" target="_blank"><i class="social-icon fab fa-facebook-f"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://www.instagram.com/GamNetwork" data-hover="Instagram" target="_blank"><i class="social-icon fab fa-instagram"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://www.linkedin.com/company/gamnetwork" data-hover="Linkedin" target="_blank"><i class="social-icon fab fa-linkedin"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Youtube" href="https://www.youtube.com/channel/UCQ64MG6kInNsW9raqMBDKMw" data-hover="Youtube" target="_blank"><i class="social-icon fab fa-youtube"></i></a></div></div></div><div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap bg-theme-default d-lg-block d-none"])}"><div class="container"><div class="row"><div class="col-lg-12"><div class="header-bottom-inner"><div class="header-bottom-left-wrap"><div class="header__navigation d-none d-xl-block"><nav class="navigation-menu navigation-menu--text_white">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div></div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const ctaOne = {
  title: "Transformando ideias em realidade digital. Conheça nossas soluções de TI inovadoras e personalizadas para impulsionar <span> o seu negócio!</span>",
  buttonTalk: "/",
  buttonInfo: "/"
};
const ctaTwo = {
  title: "IT Security & Computing",
  subTitle: "Challenges are just opportunities in disguise."
};
const ctaFour = {
  title: "Get a copy of brochure on <span> Brand New IT Tech.</span>",
  subTitle: "Resources",
  image: "/images/banners/managed-it-services-book-cover.png"
};
const data$1 = {
  ctaOne,
  ctaTwo,
  ctaFour
};
const _sfc_main$5 = {
  props: ["footerAbout"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-widget" }, _attrs))}><div class="footer-widget__logo mb-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.footerAbout.logo)} class="img-fluid" alt="logo" height="48px" width="160px"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.footerAbout.logo,
            class: "img-fluid",
            alt: "logo",
            height: "48px",
            width: "160px"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="footer-widget__list"><li>${ssrInterpolate($props.footerAbout.address)}</li><li><a href="mailto:gam@gamconsultoria.com.br" class="hover-style-link">${ssrInterpolate($props.footerAbout.email)}</a></li><li><a href="tel:+551151160526" class="hover-style-link text-black font-weight--bold">${ssrInterpolate($props.footerAbout.telephone)}</a></li><li><a href="https://gamconsultoria.com.br" target="_blank" class="hover-style-link text-color-primary">${ssrInterpolate($props.footerAbout.web)}</a></li></ul></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  props: ["footerApps"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-widget" }, _attrs))}><h6 class="footer-widget__title mb-30">${ssrInterpolate($props.footerApps.footerWidgetTitleFour)}</h6><ul class="footer-widget__list"><li><a${ssrRenderAttr("href", $props.footerApps.androidUrl)} target="_blank" class="image_btn"><img class="img-fluid"${ssrRenderAttr("src", $props.footerApps.android)} alt="thumbnail"></a></li><li><a${ssrRenderAttr("href", $props.footerApps.appleUrl)} target="_blank" class="image_btn"><img class="img-fluid"${ssrRenderAttr("src", $props.footerApps.apple)} alt="thumbnail"></a></li></ul></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterWidgetApps.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const footerAboutData = {
  logo: "/images/logo/dark-logo.png",
  address: "Rua Joaquim de Mello Freire Júnior, 311 - Vila Oliveira - Mogi das Cruzes - SP, 08790-330",
  telephone: "+55 (11) 5116-0526",
  email: "gam@gamconsultoria.com.br",
  web: "www.gamconsultoria.com.br"
};
const footerWidgetTitleOne = "Paginas";
const navListOne = [
  {
    navTitle: "Managed IT",
    navUrl: "/"
  },
  {
    navTitle: "IT Support",
    navUrl: "/"
  },
  {
    navTitle: "IT Consultancy",
    navUrl: "/"
  },
  {
    navTitle: "Cloud Computing",
    navUrl: "/"
  },
  {
    navTitle: "Cyber Security",
    navUrl: "/"
  }
];
const footerWidgetTitleTwo = "Quick Links";
const navListTwo = [
  {
    navTitle: "Pick up locations",
    navUrl: "/"
  },
  {
    navTitle: "Terms of Payment",
    navUrl: "/"
  },
  {
    navTitle: "Privacy Policy",
    navUrl: "/"
  },
  {
    navTitle: "Where to Find Us",
    navUrl: "/"
  },
  {
    navTitle: "Cyber Security",
    navUrl: "/"
  }
];
const footerWidgetTitleThree = "Support";
const navListThree = [
  {
    navTitle: "Forum Support",
    navUrl: "/"
  },
  {
    navTitle: "Help & FAQ",
    navUrl: "/"
  },
  {
    navTitle: "Contact Us",
    navUrl: "/"
  },
  {
    navTitle: "Pricing and plans",
    navUrl: "/"
  },
  {
    navTitle: "Cookies Policy",
    navUrl: "/"
  }
];
const footerAppData = {
  footerWidgetTitleFour: "Apps Store",
  android: "/images/icons/google-play.jpg",
  androidUrl: "https://www.android.com/",
  apple: "/images/icons/apple-store.jpg",
  appleUrl: "https://www.apple.com/"
};
const footerBottom = {
  copyright: "© 2024 GamConsultoria. All Rights Reserved.",
  fbUrl: "https://www.facebook.com/gamconsultorianetwork",
  youtubeUrl: "https://www.youtube.com/channel/UCQ64MG6kInNsW9raqMBDKMw",
  instagramUrl: "https://www.instagram.com/GamNetwork",
  linkedinUrl: "https://www.linkedin.com/company/gamnetwork"
};
const data = {
  footerAboutData,
  footerWidgetTitleOne,
  navListOne,
  footerWidgetTitleTwo,
  navListTwo,
  footerWidgetTitleThree,
  navListThree,
  footerAppData,
  footerBottom
};
const _sfc_main$3 = {
  props: ["title", "navLists"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-widget" }, _attrs))}><h6 class="footer-widget__title mb-20">${ssrInterpolate($props.title)}</h6><ul class="footer-widget__list"><!--[-->`);
  ssrRenderList($props.navLists, (nav) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: nav.navUrl,
      class: "hover-style-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(nav.navTitle)}`);
        } else {
          return [
            createTextVNode(toDisplayString(nav.navTitle), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterWidgetLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FooterWidgetLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    FooterAbout: __nuxt_component_0,
    FooterWidgetLink,
    FooterWidgetApps: __nuxt_component_1$1
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterAbout = __nuxt_component_0;
  const _component_FooterWidgetApps = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-area-wrapper bg-gray" }, _attrs))}><div class="footer-area section-space--ptb_80"><div class="container"><div class="row footer-widget-wrapper"><div class="col-lg-6 col-md-6 col-sm-6">`);
  _push(ssrRenderComponent(_component_FooterAbout, {
    footerAbout: $data.data.footerAboutData
  }, null, _parent));
  _push(`</div><div class="col-lg-6 col-md-4 col-sm-6">`);
  _push(ssrRenderComponent(_component_FooterWidgetApps, {
    footerApps: $data.data.footerAppData
  }, null, _parent));
  _push(`</div></div></div></div><div class="footer-copyright-area section-space--pb_30"><div class="container"><div class="row align-items-center"><div class="col-md-6 text-center text-md-start"><span class="copyright-text">${ssrInterpolate($data.data.footerBottom.copyright)}</span></div><div class="col-md-6 text-center text-md-end"><ul class="list ht-social-networks solid-rounded-icon"><li class="item"><a${ssrRenderAttr("href", $data.data.footerBottom.youtubeUrl)} target="_blank" aria-label="Youtube" class="social-link hint--bounce hint--top hint--primary"><i class="fab fa-youtube link-icon"></i></a></li><li class="item"><a${ssrRenderAttr("href", $data.data.footerBottom.fbUrl)} target="_blank" aria-label="Facebook" class="social-link hint--bounce hint--top hint--primary"><i class="fab fa-facebook-f link-icon"></i></a></li><li class="item"><a${ssrRenderAttr("href", $data.data.footerBottom.instagramUrl)} target="_blank" aria-label="Instagram" class="social-link hint--bounce hint--top hint--primary"><i class="fab fa-instagram link-icon"></i></a></li><li class="item"><a${ssrRenderAttr("href", $data.data.footerBottom.linkedinUrl)} target="_blank" aria-label="Linkedin" class="social-link hint--bounce hint--top hint--primary"><i class="fab fa-linkedin link-icon"></i></a></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const MobileNavMenu_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }
    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;
    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu == null ? void 0 : offcanvasMobileMenu.classList.remove("active");
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}><nav class="offcanvas-navigation" id="offcanvas-navigation"><ul><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Info Technology</span>`);
      } else {
        return [
          createVNode("span", null, "Info Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/processing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Processing</span>`);
      } else {
        return [
          createVNode("span", null, "Processing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/appointment" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Appointment</span>`);
      } else {
        return [
          createVNode("span", null, "Appointment")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Services</span>`);
      } else {
        return [
          createVNode("span", null, "Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/resolutions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Resolutions</span>`);
      } else {
        return [
          createVNode("span", null, "Resolutions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/cybersecurity" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Cybersecurity</span>`);
      } else {
        return [
          createVNode("span", null, "Cybersecurity")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Company</span>`);
      } else {
        return [
          createVNode("span", null, "Company")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>About Us</span>`);
      } else {
        return [
          createVNode("span", null, "About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Contact Us</span>`);
      } else {
        return [
          createVNode("span", null, "Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/leadership" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Leadership</span>`);
      } else {
        return [
          createVNode("span", null, "Leadership")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Services</span>`);
      } else {
        return [
          createVNode("span", null, "Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>IT Services</span>`);
      } else {
        return [
          createVNode("span", null, "IT Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-solutions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>IT Solutions</span>`);
      } else {
        return [
          createVNode("span", null, "IT Solutions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Elements</span>`);
      } else {
        return [
          createVNode("span", null, "Elements")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/accordion" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Accordion</span>`);
      } else {
        return [
          createVNode("span", null, "Accordion")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/box-icon" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Box Icon</span>`);
      } else {
        return [
          createVNode("span", null, "Box Icon")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/box-image" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Box Image</span>`);
      } else {
        return [
          createVNode("span", null, "Box Image")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/box-large-image" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Box Large Image</span>`);
      } else {
        return [
          createVNode("span", null, "Box Large Image")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/call-to-action" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Call To Action</span>`);
      } else {
        return [
          createVNode("span", null, "Call To Action")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/counters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Counters</span>`);
      } else {
        return [
          createVNode("span", null, "Counters")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/gradation" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Gradation</span>`);
      } else {
        return [
          createVNode("span", null, "Gradation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/element/teams" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Teams</span>`);
      } else {
        return [
          createVNode("span", null, "Teams")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/case-studies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Case Studies</span>`);
      } else {
        return [
          createVNode("span", null, "Case Studies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Blog</span>`);
      } else {
        return [
          createVNode("span", null, "Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Blog Details</span>`);
      } else {
        return [
          createVNode("span", null, "Blog Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul></nav></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNavMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const OffCanvasMobileMenu_vue_vue_type_style_index_0_scoped_45578e66_lang = "";
const _sfc_main = {
  components: {
    MobileNavMenu: __nuxt_component_1
  },
  methods: {
    // offcanvas menu close
    mobileToggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  const _component_MobileNavMenu = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas-menu",
    id: "offcanvas-menu"
  }, _attrs))} data-v-45578e66><div class="offcanvas-menu__inner" data-v-45578e66><div class="offcanvas-menu__header" data-v-45578e66><div class="container-fluid" data-v-45578e66><div class="row align-items-center" data-v-45578e66><div class="col-md-6 col-8" data-v-45578e66><div class="logo" data-v-45578e66>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-45578e66${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-md-6 col-4" data-v-45578e66><div class="text-right" data-v-45578e66><span class="mobile-navigation-close-icon" data-v-45578e66></span></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_MobileNavMenu, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OffCanvasMobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-45578e66"]]);
export {
  __nuxt_component_0$1 as _,
  __nuxt_component_2 as a,
  __nuxt_component_3 as b,
  data$1 as d
};
//# sourceMappingURL=OffCanvasMobileMenu-41abe105.js.map
