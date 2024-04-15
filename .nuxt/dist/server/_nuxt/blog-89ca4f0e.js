import { _ as _export_sfc, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  props: ["items", "breadcrumbTitle"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "breadcrumb-area bg-cover",
    style: { backgroundImage: `url('/images/bg/title-bar-01-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="breadcrumb_box text-center"><h2 class="breadcrumb-title">${ssrInterpolate($props.breadcrumbTitle)}</h2><ul class="breadcrumb-list"><li class="breadcrumb-item">`);
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
  _push(`</li><li class="breadcrumb-item active">${ssrInterpolate($props.items)}</li></ul></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const sectionTitle = "Interesting articles<span> updated daily</span>";
const sectionSubTitle = "Blogs & news";
const blogPosts = [
  {
    id: 1,
    image: "/images/blog/blog-01-370x230.jpg",
    category: "Success Story, Tips",
    postDate: "February 28, 2020",
    title: "5 Ways Technology Has Improved Business Today",
    slug: "5-ways-technology-has-improved-business-today",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.",
    authorName: "Harry Ferguson",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 2,
    image: "/images/blog/blog-02-370x230.jpg",
    category: "Success Story, Tips",
    postDate: "January 15, 2020",
    title: "How Wireless Technology is Changing Business",
    slug: "how-wireless-technology-is-changing-business",
    desc: "It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption.",
    authorName: "Yeasin Rony",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 3,
    image: "/images/blog/blog-03-370x230.jpg",
    category: "Success Story, Tips",
    postDate: "March 24, 2020",
    title: "Blockchain Technology Effects on Logistics Sector?",
    slug: "blockchain-technology-effects-on-logistics-sector",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.",
    authorName: "Jon Doe",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 4,
    image: "/images/blog/blog-08-770x420.jpg",
    category: "Success Story, Tips",
    postDate: "January 18, 2019",
    postView: 320,
    title: "How Technology Made Businesses More Efficient",
    slug: "how-technology-made-businesses-more-efficient",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
    authorName: "Harry Ferguson",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 5,
    image: "/images/blog/blog-07-770x420.jpg",
    category: "Success Story, Tips",
    postDate: "February 25, 2020",
    postView: 95,
    title: "Data Secure on Transitioning to a New Office",
    slug: "data-secure-on-transitioning-to-a-new-office",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
    authorName: "Tasnim Akter",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 6,
    image: "/images/blog/blog-05-770x420.jpg",
    category: "Success Story, Tips",
    postDate: "February 25, 2020",
    postView: 56,
    title: "How Wireless Technology is Changing Business",
    slug: "how-wireless-technology-is-changing-your-business",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
    authorName: "Yeasin Rony",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 7,
    image: "/images/blog/blog-02-770x420.jpg",
    category: "Success Story, Tips",
    postDate: "July 17, 2020",
    postView: 480,
    title: "The Keys to Persuading Customers Nowadays",
    slug: "the-keys-to-persuading-customers-nowadays",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
    authorName: "xyz",
    authorThumb: "/images/team/admin.jpeg"
  },
  {
    id: 8,
    image: "/images/blog/blog-05-770x420.jpg",
    category: "Success Story, Tips",
    postDate: "March 12, 2020",
    postView: 235,
    title: "7 Ways Technology Has Improved Business Today",
    slug: "7-ways-technology-has-improved-business-today",
    desc: "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
    authorName: "Jon Doe",
    authorThumb: "/images/team/admin.jpeg"
  }
];
const blogStyletwo = {
  sectionTitle: "Latest news are <span>on top all times</span>",
  sectionSubTitle: "Latest news"
};
const blogSidebar = {
  recentPostTitle: "Recent Posts",
  widgetImage: "/images/blog/blog-sidebar-ads.jpg",
  tagTitle: "Popular Tags",
  tags: [
    {
      name: "Business",
      url: "/blog"
    },
    {
      name: "IT Service",
      url: "/blog"
    },
    {
      name: "IT Security",
      url: "/blog"
    }
  ]
};
const data = {
  sectionTitle,
  sectionSubTitle,
  blogPosts,
  blogStyletwo,
  blogSidebar
};
export {
  __nuxt_component_1 as _,
  data as d
};
//# sourceMappingURL=blog-89ca4f0e.js.map
