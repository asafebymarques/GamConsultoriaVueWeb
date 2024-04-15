import{g as Se,$ as H,d as ke,S as Y,c as Z,e as Q,_ as ee,a as te,b as se}from"./OffCanvasMobileMenu.900e9b00.js";import{_ as x,o as p,c as b,a as e,t as y,d as l,n as q,f as U,w as m,e as E,g as B,F as V,r as G,h as N,j as R,k as J,l as W,i as O}from"./entry.3da30842.js";import{d as ae}from"./service.627b068f.js";function je(t,u,i,g){const o=Se();return t.params.createElements&&Object.keys(g).forEach(c=>{if(!i[c]&&i.auto===!0){let n=t.$el.children(`.${g[c]}`)[0];n||(n=o.createElement("div"),n.className=g[c],t.$el.append(n)),i[c]=n,u[c]=n}}),i}function P(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function oe({swiper:t,extendParams:u,on:i,emit:g}){const o="swiper-pagination";u({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:s=>s,formatFractionTotal:s=>s,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let c,n=0;function _(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function $(s,a){const{bulletActiveClass:f}=t.params.pagination;s[a]().addClass(`${f}-${a}`)[a]().addClass(`${f}-${a}-${a}`)}function h(){const s=t.rtl,a=t.params.pagination;if(_())return;const f=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let d;const C=t.params.loop?Math.ceil((f-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(d=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),d>f-1-t.loopedSlides*2&&(d-=f-t.loopedSlides*2),d>C-1&&(d-=C),d<0&&t.params.paginationType!=="bullets"&&(d=C+d)):typeof t.snapIndex<"u"?d=t.snapIndex:d=t.activeIndex||0,a.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const v=t.pagination.bullets;let T,j,z;if(a.dynamicBullets&&(c=v.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",`${c*(a.dynamicMainBullets+4)}px`),a.dynamicMainBullets>1&&t.previousIndex!==void 0&&(n+=d-(t.previousIndex-t.loopedSlides||0),n>a.dynamicMainBullets-1?n=a.dynamicMainBullets-1:n<0&&(n=0)),T=Math.max(d-n,0),j=T+(Math.min(v.length,a.dynamicMainBullets)-1),z=(j+T)/2),v.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${a.bulletActiveClass}${I}`).join(" ")),r.length>1)v.each(I=>{const M=H(I),S=M.index();S===d&&M.addClass(a.bulletActiveClass),a.dynamicBullets&&(S>=T&&S<=j&&M.addClass(`${a.bulletActiveClass}-main`),S===T&&$(M,"prev"),S===j&&$(M,"next"))});else{const I=v.eq(d),M=I.index();if(I.addClass(a.bulletActiveClass),a.dynamicBullets){const S=v.eq(T),X=v.eq(j);for(let w=T;w<=j;w+=1)v.eq(w).addClass(`${a.bulletActiveClass}-main`);if(t.params.loop)if(M>=v.length){for(let w=a.dynamicMainBullets;w>=0;w-=1)v.eq(v.length-w).addClass(`${a.bulletActiveClass}-main`);v.eq(v.length-a.dynamicMainBullets-1).addClass(`${a.bulletActiveClass}-prev`)}else $(S,"prev"),$(X,"next");else $(S,"prev"),$(X,"next")}}if(a.dynamicBullets){const I=Math.min(v.length,a.dynamicMainBullets+4),M=(c*I-c)/2-z*c,S=s?"right":"left";v.css(t.isHorizontal()?S:"top",`${M}px`)}}if(a.type==="fraction"&&(r.find(P(a.currentClass)).text(a.formatFractionCurrent(d+1)),r.find(P(a.totalClass)).text(a.formatFractionTotal(C))),a.type==="progressbar"){let v;a.progressbarOpposite?v=t.isHorizontal()?"vertical":"horizontal":v=t.isHorizontal()?"horizontal":"vertical";const T=(d+1)/C;let j=1,z=1;v==="horizontal"?j=T:z=T,r.find(P(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${j}) scaleY(${z})`).transition(t.params.speed)}a.type==="custom"&&a.renderCustom?(r.html(a.renderCustom(t,d+1,C)),g("paginationRender",r[0])):g("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](a.lockClass)}function k(){const s=t.params.pagination;if(_())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,f=t.pagination.$el;let r="";if(s.type==="bullets"){let d=t.params.loop?Math.ceil((a-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&d>a&&(d=a);for(let C=0;C<d;C+=1)s.renderBullet?r+=s.renderBullet.call(t,C,s.bulletClass):r+=`<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`;f.html(r),t.pagination.bullets=f.find(P(s.bulletClass))}s.type==="fraction"&&(s.renderFraction?r=s.renderFraction.call(t,s.currentClass,s.totalClass):r=`<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`,f.html(r)),s.type==="progressbar"&&(s.renderProgressbar?r=s.renderProgressbar.call(t,s.progressbarFillClass):r=`<span class="${s.progressbarFillClass}"></span>`,f.html(r)),s.type!=="custom"&&g("paginationRender",t.pagination.$el[0])}function A(){t.params.pagination=je(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const s=t.params.pagination;if(!s.el)return;let a=H(s.el);a.length!==0&&(t.params.uniqueNavElements&&typeof s.el=="string"&&a.length>1&&(a=t.$el.find(s.el),a.length>1&&(a=a.filter(f=>H(f).parents(".swiper")[0]===t.el))),s.type==="bullets"&&s.clickable&&a.addClass(s.clickableClass),a.addClass(s.modifierClass+s.type),a.addClass(t.isHorizontal()?s.horizontalClass:s.verticalClass),s.type==="bullets"&&s.dynamicBullets&&(a.addClass(`${s.modifierClass}${s.type}-dynamic`),n=0,s.dynamicMainBullets<1&&(s.dynamicMainBullets=1)),s.type==="progressbar"&&s.progressbarOpposite&&a.addClass(s.progressbarOppositeClass),s.clickable&&a.on("click",P(s.bulletClass),function(r){r.preventDefault();let d=H(this).index()*t.params.slidesPerGroup;t.params.loop&&(d+=t.loopedSlides),t.slideTo(d)}),Object.assign(t.pagination,{$el:a,el:a[0]}),t.enabled||a.addClass(s.lockClass))}function L(){const s=t.params.pagination;if(_())return;const a=t.pagination.$el;a.removeClass(s.hiddenClass),a.removeClass(s.modifierClass+s.type),a.removeClass(t.isHorizontal()?s.horizontalClass:s.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(s.bulletActiveClass),s.clickable&&a.off("click",P(s.bulletClass))}i("init",()=>{t.params.pagination.enabled===!1?F():(A(),k(),h())}),i("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&h()}),i("snapIndexChange",()=>{t.params.loop||h()}),i("slidesLengthChange",()=>{t.params.loop&&(k(),h())}),i("snapGridLengthChange",()=>{t.params.loop||(k(),h())}),i("destroy",()=>{L()}),i("enable disable",()=>{const{$el:s}=t.pagination;s&&s[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),i("lock unlock",()=>{h()}),i("click",(s,a)=>{const f=a.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!H(f).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&f===t.navigation.nextEl||t.navigation.prevEl&&f===t.navigation.prevEl))return;const d=r.hasClass(t.params.pagination.hiddenClass);g(d===!0?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}});const K=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),A(),k(),h()},F=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),L()};Object.assign(t.pagination,{enable:K,disable:F,render:k,update:h,init:A,destroy:L})}const Me={},Ae={class:"business-solution-form-wrap me-auto ms-auto"},Ie=e("div",{class:"contact-title text-center section-space--mb_40"},[e("h5",{class:"mb-10"},"Contate-nos"),e("p",{class:"text"},"Se você tiver alguma dúvida, sugestão ou desejar mais informações sobre nossos serviços, não hesite em entrar em contato conosco. Nossa equipe está pronta para atendê-lo e oferecer a melhor solução para suas necessidades.")],-1),we=e("form",{method:"post"},[e("div",{class:"contact-form__two"},[e("div",{class:"contact-inner"},[e("input",{name:"name",type:"text",placeholder:"Nome *"})]),e("div",{class:"contact-inner"},[e("input",{name:"email",type:"email",placeholder:"Email *"})]),e("div",{class:"comment-submit-btn text-center"},[e("button",{class:"ht-btn ht-btn-md",type:"submit"},"Enviar")])])],-1),Oe=[Ie,we];function Ee(t,u){return p(),b("div",Ae,Oe)}const ie=x(Me,[["render",Ee]]),Be={subTitle:"Gam Consultoria",title:"Você imagina, nós planejamos e executamos!",videoText:"Confira!",videoLink:"https://youtu.be/onOTGpDEBok?si=KKmkwfK5mSMUzDpd",bgImg:"/images/hero/appointment-hero-bg.jpg"},Pe={heroAppointment:Be},Le={components:{AppointmentForm:ie},data(){return{data:Pe}}},ze={class:"container"},He={class:"row align-items-center"},Ue={class:"col-lg-6 col-md-6"},De={class:"appointment-hero-wrap wow move-up"},Fe={class:"appointment-hero-text"},Re={class:"text-white"},qe=["innerHTML"],Ve={class:"hero-button"},Ge={class:"video-popup infotech-video-box"},Ne={href:"https://youtu.be/onOTGpDEBok?si=KKmkwfK5mSMUzDpd",target:"_blank",class:"single-popup-wrap video-link"},Ke={class:"video-content"},We=U('<div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div>',1),Xe={class:"video-text"},Je={class:"col-lg-5 me-auto me-auto col-md-6"};function Ye(t,u,i,g,o,c){const n=ie;return p(),b("div",{class:"appointment-hero-wrapper bg-cover section-space--ptb_120",style:q({backgroundImage:`url(${o.data.heroAppointment.bgImg})`})},[e("div",ze,[e("div",He,[e("div",Ue,[e("div",De,[e("div",Fe,[e("h6",Re,y(o.data.heroAppointment.subTitle),1),e("h1",{class:"font-weight--reguler text-white mb-30",innerHTML:o.data.heroAppointment.title},null,8,qe),e("div",Ve,[e("div",Ge,[e("a",Ne,[e("div",Ke,[We,e("div",Xe,y(o.data.heroAppointment.videoText),1)])])])])])])]),e("div",Je,[l(n)])])])],4)}const ne=x(Le,[["render",Ye]]),Ze={data(){return{data:ke}}},Qe={class:"container"},et={class:"row align-items-center"},tt={class:"col-xl-8 col-lg-7"},st={class:"cta-content md-text-center"},at=["innerHTML"],ot={class:"col-xl-4 col-lg-5"},it={class:"cta-button-group--two text-center"};function nt(t,u,i,g,o,c){const n=B;return p(),b("div",{class:"cta-image-area_one section-space--ptb_80 cta-bg-image_two",style:q({backgroundImage:"url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')"})},[e("div",Qe,[e("div",et,[e("div",tt,[e("div",st,[e("h4",{class:"heading",innerHTML:o.data.ctaOne.title},null,8,at)])]),e("div",ot,[e("div",it,[l(n,{to:"/contact",class:"btn btn--white btn-one"},{default:m(()=>[E(" Saber Mais ")]),_:1}),l(n,{to:"/about",class:"btn btn--secondary btn-two"},{default:m(()=>[E(" Contate-nos ")]),_:1})])])])])],4)}const le=x(Ze,[["render",nt]]),lt=[{title:"+",count:6,text:"Anos de experiência"},{title:"+",count:40,text:"Projetos Concluídos"},{title:"+",count:40,text:"Clientes Satisfeitos"}],ct={funfactOne:lt},rt={data(){return{data:ct}}},dt={class:"fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60"},_t={class:"container"},mt={class:"row"},pt={class:"fun-fact--two text-center"},ut={class:"fun-fact__count counter"},gt={class:"fun-fact__text"};function ht(t,u,i,g,o,c){return p(),b("div",dt,[e("div",_t,[e("div",mt,[(p(!0),b(V,null,G(o.data.funfactOne,n=>(p(),b("div",{class:"col-md-4 col-sm-6 wow move-up",key:n.id},[e("div",pt,[e("div",ut,[e("span",null,y(n.count),1)]),e("h6",gt,y(n.text),1)])]))),128))])])])}const ce=x(rt,[["render",ht]]),vt={props:["title","subTitle"]},bt={class:"section-title-wrap text-center"},ft={class:"section-sub-title mb-20"},$t=["innerHTML"];function xt(t,u,i,g,o,c){return p(),b("div",bt,[e("h6",ft,y(i.subTitle),1),e("h3",{class:"heading",innerHTML:i.title},null,8,$t)])}const D=x(vt,[["render",xt]]),re=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),yt={props:["service"]},Ct={class:"ht-box-icon style-02 single-svg-icon-box"},Tt={class:"icon-box-wrap"},St={class:"icon"},kt={class:"svg-icon"},jt=["src"],Mt={class:"content"},At={class:"heading"},It={class:"text"},wt={class:"feature-btn"},Ot=e("span",{class:"button-text"},"Saber Mais",-1),Et=e("i",{class:"fas fa-arrow-right ms-1"},null,-1);function Bt(t,u,i,g,o,c){const n=B;return p(),b("div",Ct,[e("div",Tt,[e("div",St,[e("div",kt,[e("img",{src:i.service.icon,alt:"icon"},null,8,jt)])]),e("div",Mt,[e("h5",At,y(i.service.heading),1),e("div",It,y(i.service.desc),1),e("div",wt,[l(n,{to:`/service/${i.service.slug}`},{default:m(()=>[Ot,Et]),_:1},8,["to"])])])])])}const de=x(yt,[["render",Bt]]),Pt={components:{SectionTitle:D,ServiceItemStyleTwo:de},data(){return{data:ae}}},Lt={class:"feature-icon-wrapper section-space--ptb_100"},zt={class:"container"},Ht={class:"row"},Ut={class:"col-lg-12"},Dt={class:"row"},Ft={class:"col-12"},Rt={class:"feature-list__two"},qt={class:"row"},Vt={class:"col-lg-12"},Gt={class:"feature-list-button-box mt-30 text-center"};function Nt(t,u,i,g,o,c){const n=D,_=de,$=B;return p(),b("div",Lt,[e("div",zt,[e("div",Ht,[e("div",Ut,[l(n,{class:"text-center section-space--mb_40",title:o.data.serviceStyleTwo.sectionTitle,subTitle:o.data.serviceStyleTwo.sectionSubTitle},null,8,["title","subTitle"])])]),e("div",Dt,[e("div",Ft,[e("div",Rt,[e("div",qt,[(p(!0),b(V,null,G(o.data.services.slice(6,12),h=>(p(),b("div",{class:"col-lg-4 col-md-6 wow move-up",key:h.id},[l(_,{service:h},null,8,["service"])]))),128))])])]),e("div",Vt,[e("div",Gt,[l($,{to:"/contact",class:"ht-btn ht-btn-md"},{default:m(()=>[E(" Saber Mais ")]),_:1}),l($,{to:"/contact",class:"ht-btn ht-btn-md ht-btn--outline"},{default:m(()=>[E(" Contate-nos ")]),_:1})])])])])])}const Kt=x(Pt,[["render",Nt]]),Wt=""+globalThis.__publicAssetsURL("images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"),Xt={},Jt={class:"tab-history-image video-popup mt-30"},Yt=U('<a href="https://www.youtube.com/watch?v=onOTGpDEBok" target="_blank" class="video-link"><div class="single-popup-wrap"><img class="img-fluid" src="'+Wt+'" alt="image"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a>',1),Zt=[Yt];function Qt(t,u){return p(),b("div",Jt,Zt)}const _e=x(Xt,[["render",Qt]]),es={props:["service"]},ts={class:"large-image-box"},ss={class:"box-image"},as={class:"default-image"},os=["src"],is={class:"content"},ns={class:"heading"},ls=e("div",{class:"text"},"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. ",-1),cs=e("div",{class:"box-images-arrow"},[e("span",{class:"button-text"},"Saber Mais"),e("i",{class:"fas fa-arrow-right ms-1"})],-1);function rs(t,u,i,g,o,c){const n=B;return p(),N(n,{to:`/service/${i.service.slug}`,class:"ht-large-box-images style-04"},{default:m(()=>[e("div",ts,[e("div",ss,[e("div",as,[e("img",{class:"img-fluid",src:i.service.image,alt:"image"},null,8,os)])]),e("div",is,[e("h5",ns,y(i.service.heading),1),ls,cs])])]),_:1},8,["to"])}const ds=x(es,[["render",rs]]),me=""+globalThis.__publicAssetsURL("images/brand/galp.png"),pe=""+globalThis.__publicAssetsURL("images/brand/decskill.png"),ue=""+globalThis.__publicAssetsURL("images/brand/defendy.png"),ge=""+globalThis.__publicAssetsURL("images/brand/dxc.png"),he=""+globalThis.__publicAssetsURL("images/brand/Alter.png"),ve=""+globalThis.__publicAssetsURL("images/brand/edp.png"),be=""+globalThis.__publicAssetsURL("images/brand/annexus.png"),fe=""+globalThis.__publicAssetsURL("images/brand/fibra.png"),$e=""+globalThis.__publicAssetsURL("images/brand/itau.png"),xe=""+globalThis.__publicAssetsURL("images/brand/vector.png"),ye=""+globalThis.__publicAssetsURL("images/brand/softtek.png"),Ce=""+globalThis.__publicAssetsURL("images/brand/total.png"),_s={components:{VideoPupupOne:_e,ServiceItemStyleThree:ds},data(){return{data:ae,activeItem:"tab_mission"}},methods:{isActive(t){return this.activeItem===t},setActive(t){this.activeItem=t}}},ms={class:"tabs-wrapper bg-gray section-space--ptb_100"},ps={class:"container"},us=U('<div class="row"><div class="col-lg-12"><div class="section-title-wrapper text-center section-space--mb_60 wow move-up"><h6 class="section-sub-title mb-20">Sobre nós</h6><h3 class="section-title">Geramos valor aos nossos clientes<br> há mais de <span class="text-color-primary"> 6 Anos</span></h3></div></div></div>',1),gs={class:"row"},hs={class:"col-lg-12 ht-tab-wrap"},vs={class:"text-center"},bs={class:"nav justify-content-center ht-tab-menu ht-tab-menu_two",role:"tablist"},fs={class:"tab__item nav-item"},$s={class:"tab__item nav-item"},xs={class:"tab-content ht-tab__content"},ys={class:"tab-history-wrap section-space--mt_40"},Cs={class:"row"},Ts={class:"col-lg-6"},Ss={class:"col-lg-5 offset-lg-1"},ks={class:"tab-content-inner mt-30"},js=U('<div class="text mb-30"><span class="text-color-primary">Gam Consultoria</span> <br> Somos uma empresa de serviços de TI que emprega a tecnologia para construir um futuro melhor para nossos clientes, colegas, meio ambiente e comunidades. Comprometemo-nos em fazer parte de um amplo ecossistema de inovação que abrange as principais verticais de mercado.<br> Oferecemos um portfólio completo de soluções, que vão desde consultoria até marketing, mobilidade e campanhas personalizadas, estamos preparados para ajudá-lo a transformar digitalmente sua empresa e expandir suas oportunidades de negócio. <br> Ao optar por nossa expertise global, você terá acesso a recursos digitais robustos e um compromisso com o sucesso de sua empresa, desde o primeiro contato até a implementação final. Contem conosco para impulsionar sua jornada digital e alcançar novos patamares de sucesso! </div><ul class="check-list section-space--mb_40"><li class="list-item">Inteligência artificial</li><li class="list-item">IT Design </li><li class="list-item">Cloud </li><li class="list-item">Software Engineering </li><li class="list-item">Experience (UX)</li><li class="list-item">E outros</li></ul>',2),Ms={class:"tab-button"},As=e("span",{class:"button-text"},[E("Saber mais "),e("i",{class:"fas fa-arrow-right ms-1"})],-1),Is={class:"tab-history-wrap section-space--mt_60 brand-logo-slider__one"},ws={class:"modern-grid--6"},Os={class:"brand-logo brand-logo--slider"},Es=e("div",{class:"brand-logo__image"},[e("img",{src:me,class:"img-fluid",alt:"image"})],-1),Bs=e("div",{class:"brand-logo__image-hover"},[e("img",{src:me,class:"img-fluid",alt:"image"})],-1),Ps={class:"brand-logo brand-logo--slider"},Ls=e("div",{class:"brand-logo__image"},[e("img",{src:pe,class:"img-fluid",alt:"image"})],-1),zs=e("div",{class:"brand-logo__image-hover"},[e("img",{src:pe,class:"img-fluid",alt:"image"})],-1),Hs={class:"brand-logo brand-logo--slider"},Us=e("div",{class:"brand-logo__image"},[e("img",{src:ue,class:"img-fluid",alt:"image"})],-1),Ds=e("div",{class:"brand-logo__image-hover"},[e("img",{src:ue,class:"img-fluid",alt:"image"})],-1),Fs={class:"brand-logo brand-logo--slider"},Rs=e("div",{class:"brand-logo__image"},[e("img",{src:ge,class:"img-fluid",alt:"image"})],-1),qs=e("div",{class:"brand-logo__image-hover"},[e("img",{src:ge,class:"img-fluid",alt:"image"})],-1),Vs={class:"brand-logo brand-logo--slider"},Gs=e("div",{class:"brand-logo__image"},[e("img",{src:he,class:"img-fluid",alt:""})],-1),Ns=e("div",{class:"brand-logo__image-hover"},[e("img",{src:he,class:"img-fluid",alt:"image"})],-1),Ks={class:"brand-logo brand-logo--slider"},Ws=e("div",{class:"brand-logo__image"},[e("img",{src:ve,class:"img-fluid",alt:"image"})],-1),Xs=e("div",{class:"brand-logo__image-hover"},[e("img",{src:ve,class:"img-fluid",alt:"image"})],-1),Js={class:"brand-logo brand-logo--slider"},Ys=e("div",{class:"brand-logo__image"},[e("img",{src:be,class:"img-fluid",alt:""})],-1),Zs=e("div",{class:"brand-logo__image-hover"},[e("img",{src:be,class:"img-fluid",alt:"image"})],-1),Qs={class:"brand-logo brand-logo--slider"},ea=e("div",{class:"brand-logo__image"},[e("img",{src:fe,class:"img-fluid",alt:""})],-1),ta=e("div",{class:"brand-logo__image-hover"},[e("img",{src:fe,class:"img-fluid",alt:"image"})],-1),sa={class:"brand-logo brand-logo--slider"},aa=e("div",{class:"brand-logo__image"},[e("img",{src:$e,class:"img-fluid",alt:""})],-1),oa=e("div",{class:"brand-logo__image-hover"},[e("img",{src:$e,class:"img-fluid",alt:"image"})],-1),ia={class:"brand-logo brand-logo--slider"},na=e("div",{class:"brand-logo__image"},[e("img",{src:xe,class:"img-fluid",alt:""})],-1),la=e("div",{class:"brand-logo__image-hover"},[e("img",{src:xe,class:"img-fluid",alt:"image"})],-1),ca={class:"brand-logo brand-logo--slider"},ra=e("div",{class:"brand-logo__image"},[e("img",{src:ye,class:"img-fluid",alt:""})],-1),da=e("div",{class:"brand-logo__image-hover"},[e("img",{src:ye,class:"img-fluid",alt:"image"})],-1),_a={class:"brand-logo brand-logo--slider"},ma=e("div",{class:"brand-logo__image"},[e("img",{src:Ce,class:"img-fluid",alt:""})],-1),pa=e("div",{class:"brand-logo__image-hover"},[e("img",{src:Ce,class:"img-fluid",alt:"image"})],-1);function ua(t,u,i,g,o,c){const n=_e,_=B;return p(),b("div",ms,[e("div",ps,[us,e("div",gs,[e("div",hs,[e("div",vs,[e("ul",bs,[e("li",fs,[e("a",{class:R(["nav-link",{active:c.isActive("tab_mission")}]),href:"#tab_mission",onClick:u[0]||(u[0]=J($=>c.setActive("tab_mission"),["prevent"]))},"Gam Consultoria",2)]),e("li",$s,[e("a",{class:R(["nav-link",{active:c.isActive("tab_partners")}]),href:"#tab_partners",onClick:u[1]||(u[1]=J($=>c.setActive("tab_partners"),["prevent"]))},"Nossos Parceiros",2)])])]),e("div",xs,[e("div",{class:R(["tab-pane fade",{"active show":c.isActive("tab_mission")}]),id:"tab_mission"},[e("div",ys,[e("div",Cs,[e("div",Ts,[l(n)]),e("div",Ss,[e("div",ks,[js,e("div",Ms,[l(_,{to:"/",class:"btn-text"},{default:m(()=>[As]),_:1})])])])])])],2),e("div",{class:R(["tab-pane fade",{"active show":c.isActive("tab_partners")}]),id:"tab_partners"},[e("div",Is,[e("div",ws,[e("div",Os,[l(_,{to:"/"},{default:m(()=>[Es,Bs]),_:1})]),e("div",Ps,[l(_,{to:"/"},{default:m(()=>[Ls,zs]),_:1})]),e("div",Hs,[l(_,{to:"/"},{default:m(()=>[Us,Ds]),_:1})]),e("div",Fs,[l(_,{to:"/"},{default:m(()=>[Rs,qs]),_:1})]),e("div",Vs,[l(_,{to:"/"},{default:m(()=>[Gs,Ns]),_:1})]),e("div",Ks,[l(_,{to:"/"},{default:m(()=>[Ws,Xs]),_:1})]),e("div",Js,[l(_,{to:"/"},{default:m(()=>[Ys,Zs]),_:1})]),e("div",Qs,[l(_,{to:"/"},{default:m(()=>[ea,ta]),_:1})]),e("div",sa,[l(_,{to:"/"},{default:m(()=>[aa,oa]),_:1})]),e("div",ia,[l(_,{to:"/"},{default:m(()=>[na,la]),_:1})]),e("div",ca,[l(_,{to:"/"},{default:m(()=>[ra,da]),_:1})]),e("div",_a,[l(_,{to:"/"},{default:m(()=>[ma,pa]),_:1})])])])],2)])])])])])}const ga=x(_s,[["render",ua]]),ha={props:["project"]},va={class:"projects-image-box"},ba={class:"projects-image"},fa=["src"],$a={class:"content"},xa={class:"heading"},ya={class:"post-categories"},Ca={class:"text"},Ta=e("div",{class:"box-projects-arrow"},[e("span",{class:"button-text"},"View Case Study"),e("i",{class:"fa fa-arrow-right ms-1"})],-1);function Sa(t,u,i,g,o,c){const n=B;return p(),N(n,{to:`/case-studies/${i.project.id}`,class:"projects-wrap style-01 wow move-up"},{default:m(()=>[e("div",va,[e("div",ba,[e("img",{class:"img-fluid",src:i.project.image,alt:"project image"},null,8,fa)]),e("div",$a,[e("h6",xa,y(i.project.heading),1),e("div",ya,y(i.project.category),1),e("div",Ca,y(i.project.desc),1),Ta])])]),_:1},8,["to"])}const Te=x(ha,[["render",Sa]]),ka=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),ja="Proud projects that<span> make us stand out</span>",Ma="Case studies",Aa=[{id:1,image:"/images/projects/case-study-01-480x298.jpg",heading:"Mitech-Smart Vision",category:"Information Technology",desc:"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."},{id:2,image:"/images/projects/case-study-02-480x298.jpg",heading:"Mitech-Internal Networking",category:"Cyber Security",desc:"The prospects for a company operating in this new market are varied and exciting. The potential"},{id:3,image:"/images/projects/case-study-03-480x298.jpg",heading:"A Freeserve case study",category:"Web Development",desc:"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."},{id:4,image:"/images/projects/case-study-04-480x298.jpg",heading:"Mitech-Research and Energy",category:"Cyber Security",desc:"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."},{id:5,image:"/images/projects/case-study-05-480x298.jpg",heading:"A Freeserve case study",category:"Web Development",desc:"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."},{id:6,image:"/images/projects/case-study-06-480x298.jpg",heading:"Mitech-Research and Energy",category:"Cyber Security",desc:"At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution."}],Ia=[{id:1,image:"/images/features/case-study-image-01.png",alt:"image",heading:"Aqua Technology Case Studies",category:"Cyber Security",desc:"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."},{id:2,image:"/images/features/case-study-image-02.png",alt:"image",heading:"Mitech-Smart Vision",category:"Information Technology",desc:"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."}],wa="Challenges are just opportunities in disguise.",Oa="/",Ea={bgImg:"/images/bg/single-case-study-bg-01.jpg"},Ba={sectionTitle:ja,sectionSubTitle:Ma,projects:Aa,projectsTwo:Ia,underHeading:wa,link:Oa,caseStudies:Ea};Y.use([oe]);const Pa={components:{Swiper:Z,SwiperSlide:Q,SectionTitle:()=>W(()=>Promise.resolve().then(()=>re),void 0,import.meta.url),CaseStudiesItem:()=>W(()=>Promise.resolve().then(()=>ka),void 0,import.meta.url)},data(){return{data:Ba,swiperOptions:{pagination:{el:".swiper-pagination-project",type:"bullets",clickable:!0},breakpoints:{1200:{slidesPerView:3},768:{slidesPerView:2},575:{slidesPerView:1}}}}}},La={class:"container"},za={class:"row"},Ha={class:"col-lg-12"},Ua={class:"row"},Da={class:"col-12"},Fa={class:"projects-wrap"},Ra=e("div",{class:"swiper-pagination swiper-pagination-project mt_20 text-center"},null,-1),qa={class:"section-under-heading text-center section-space--mt_40"};function Va(t,u,i,g,o,c){const n=D,_=Te,$=O("swiper-slide"),h=O("swiper"),k=B;return p(),b("div",{class:"projects-wrapper projectinfotechno-bg section-space--ptb_100",style:q({backgroundImage:"url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')"})},[e("div",La,[e("div",za,[e("div",Ha,[l(n,{class:"text-center section-space--mb_40",title:o.data.sectionTitle,subTitle:o.data.sectionSubTitle},null,8,["title","subTitle"])])]),e("div",Ua,[e("div",Da,[e("div",Fa,[l(h,{"space-between":30,speed:1e3,loop:!1,breakpoints:o.swiperOptions.breakpoints,pagination:o.swiperOptions.pagination},{default:m(()=>[(p(!0),b(V,null,G(o.data.projects,A=>(p(),N($,{key:A.id},{default:m(()=>[l(_,{project:A},null,8,["project"])]),_:2},1024))),128))]),_:1},8,["breakpoints","pagination"]),Ra]),e("div",qa,[E(y(o.data.underHeading)+" ",1),l(k,{to:"/"},{default:m(()=>[E("Take the challenge!")]),_:1})])])])])],4)}const Ga=x(Pa,[["render",Va]]),Na="Why do people praise about<span> Mitech?</span>",Ka="Testimonials",Wa=[{subject:"The Mitech team works really hard to ensure high level of quality",desc:"There are thousands of IT service companies in the US. But there’s nothing like @Mitech. Their popularity and reputation are just evident.",thumb:"/images/testimonial/testimonial-01-70x70.jpg",name:"Maggie Strickland",designation:""},{subject:"The Mitech team works really hard to ensure high level of quality",desc:"I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",thumb:"/images/testimonial/testimonial-02-70x70.jpg",name:"Robert Amplilian",designation:""},{subject:"The Mitech team works really hard to ensure high level of quality",desc:"There are thousands of IT service companies in the US. But there’s nothing like @Mitech. Their popularity and reputation are just evident.",thumb:"/images/testimonial/testimonial-03-70x70.jpg",name:"Stephen Mearsley",designation:""},{subject:"The Mitech team works really hard to ensure high level of quality",desc:"I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",thumb:"/images/testimonial/testimonial-04-70x70.jpg",name:"Monica Blews",designation:""}],Xa={sectionTitle:Na,sectionSubTitle:Ka,testimonials:Wa};Y.use([oe]);const Ja={components:{Swiper:Z,SwiperSlide:Q,SectionTitle:()=>W(()=>Promise.resolve().then(()=>re),void 0,import.meta.url)},data(){return{data:Xa,swiperOptions:{pagination:{el:".swiper-pagination-t01",type:"bullets",clickable:!0},breakpoints:{992:{slidesPerView:2},320:{slidesPerView:1}}}}}},Ya={class:"testimonial-slider-area section-space--ptb_120 bg-gray"},Za={class:"container"},Qa={class:"row"},eo={class:"col-12"},to={class:"testimonial-slider"},so={class:"testimonial-slider__container"},ao={class:"testimonial-slider__wrapper"},oo={class:"testimonial-slider__one wow move-up"},io={class:"testimonial-slider--info"},no={class:"testimonial-slider__media"},lo=["src"],co={class:"testimonial-slider__author"},ro=e("div",{class:"testimonial-rating"},[e("span",{class:"fa fa-star"}),e("span",{class:"fa fa-star"}),e("span",{class:"fa fa-star"}),e("span",{class:"fa fa-star"}),e("span",{class:"fa fa-star"})],-1),_o={class:"author-info"},mo={class:"name"},po={class:"testimonial-slider__text"},uo=e("div",{class:"swiper-pagination swiper-pagination-t01 section-space--mt_30 text-center"},null,-1);function go(t,u,i,g,o,c){const n=D,_=O("swiper-slide"),$=O("swiper");return p(),b("div",Ya,[e("div",Za,[e("div",Qa,[e("div",eo,[l(n,{class:"text-center section-space--mb_60",title:o.data.sectionTitle,subTitle:o.data.sectionSubTitle},null,8,["title","subTitle"]),e("div",to,[e("div",so,[e("div",ao,[l($,{"space-between":30,speed:1e3,loop:!1,breakpoints:o.swiperOptions.breakpoints,pagination:o.swiperOptions.pagination},{default:m(()=>[(p(!0),b(V,null,G(o.data.testimonials,h=>(p(),N(_,{key:h.id},{default:m(()=>[e("div",oo,[e("div",io,[e("div",no,[e("img",{src:h.thumb,class:"img-fluid",alt:"client thumbnail"},null,8,lo)]),e("div",co,[ro,e("div",_o,[e("h6",mo,y(h.name),1)])])]),e("div",po,y(h.desc),1)])]),_:2},1024))),128))]),_:1},8,["breakpoints","pagination"])])]),uo])])])])])}const ho=x(Ja,[["render",go]]),vo={},bo=U('<div class="container"><div class="row"><div class="col-lg-12"><div class="contact-title section-space--mb_50"><h3 class="mb-20">Entre em Contato Conosco</h3><p class="sub-title">Estamos aqui para ajudar você a impulsionar o sucesso de seu negócio com soluções de tecnologia inovadoras e eficazes. Entre em contato conosco hoje mesmo para agendar uma consulta ou para saber mais sobre nossos serviços. Nossa equipe de especialistas está pronta para atender às suas necessidades e ajudar a transformar suas ideias em realidade digital. A Gam Consultoria é o seu parceiro confiável em tecnologia.</p></div></div></div><div class="row"><div class="col-lg-6"><div class="contact-form-wrap"><form id="contact-form"><div class="contact-form__two"><div class="contact-input"><div class="contact-inner"><input name="con_name" type="text" placeholder="Nome *"></div><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="contact-inner contact-message"><textarea name="con_message" placeholder="Mensagem..."></textarea></div><div class="comment-submit-btn"><button class="ht-btn ht-btn-md" type="submit">Enviar</button><p class="form-messege"></p></div></div></form></div></div><div class="col-lg-5 ms-auto"><div class="contact-info-three text-left"><h6 class="heading font-weight--reguler">Entre em contato agora!</h6><h3 class="call-us"><a href="tel:+551151160526">+55 (11) 5116-0526</a></h3><div class="text">Sejam bem-vindos à próxima fase da jornada da GAM Consultoria - uma jornada de excelência, inovação e crescimento mútuo.</div><div class="location-button mt-20"><button class="location-text-button"><span class="button-icon"></span><span class="button-text"><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"> Gam Consultoria </a></span></button></div></div></div></div></div>',1),fo=[bo];function $o(t,u){return p(),b("div",{class:"contact-us-area appointment-contact-bg section-space--ptb_100",style:q({backgroundImage:"url('/images/bg/home-appointment-contact-bg-image.png')"})},fo,4)}const xo=x(vo,[["render",$o]]),yo={components:{Header:ee,HeroAppointment:ne,ServiceStyleTwo:Kt,TabSection:ga,CtaOne:le,CaseStudiesSection:Ga,TestimonialTwo:ho,FunFactTwo:ce,ContactUs:xo,Footer:te,OffCanvasMobileMenu:se}},Co={class:"main-container"};function To(t,u,i,g,o,c){const n=ee,_=ne,$=O("ServiceStyleTwo"),h=O("TabSection"),k=le,A=ce,L=O("ContactUs"),K=te,F=se;return p(),b("div",Co,[l(n,{id:"home"}),l(_),l($,{id:"services"}),l(h,{id:"aboutUs"}),l(k),l(A,{id:"contactUs"}),l(L),l(K),l(F)])}const Mo=x(yo,[["render",To]]);export{Mo as default};