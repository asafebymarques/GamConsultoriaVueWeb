import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
const _imports_0 = "" + __publicAssetsURL("images/other/page-404-image.png");
const error_vue_vue_type_style_index_0_scoped_83ddc765_lang = "";
const _sfc_main = {
  props: ["error"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "error404 bg-cover",
    style: { backgroundImage: `url('/images/bg/page-404-bg.jpg')` }
  }, _attrs))} data-v-83ddc765><div class="container" data-v-83ddc765><div class="row" data-v-83ddc765><div class="col-md-12 text-center" data-v-83ddc765><div class="error-image" data-v-83ddc765><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="Not Found Image" data-v-83ddc765></div>`);
  if ($props.error.statusCode === 404) {
    _push(`<h1 class="error-404-title font-weight--light text-white" data-v-83ddc765>Oops! Page not found!</h1>`);
  } else {
    _push(`<h1 class="error-404-title font-weight--light text-white" data-v-83ddc765>An error occurred</h1>`);
  }
  _push(`<div class="error-buttons section-space--mt_30" data-v-83ddc765><button class="ht-btn ht-btn-md" data-v-83ddc765><span class="button-icon mr-2" data-v-83ddc765><i class="fa fa-home" data-v-83ddc765></i></span><span class="button-text" data-v-83ddc765>Go back to homepage</span></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-83ddc765"]]);
export {
  error as default
};
//# sourceMappingURL=error-component-25b41708.js.map
