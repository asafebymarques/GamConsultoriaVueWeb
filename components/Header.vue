<template>
    <div class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header position-relative">
                        <!-- brand logo -->
                        <div class="header__logo top-logo">
                            <nuxt-link to="/">
                                <img src="/images/logo/logo-dark.png" class="img-fluid" alt="Brand Logo">
                            </nuxt-link>
                        </div>

                        <div class="header-right flexible-image-slider-wrap">

                            <div class="header-right-inner" id="hidden-icon-wrapper">
                                <!-- Header Search Form -->
                                <div class="header-search-form d-md-none d-block">
                                    <form class="search-form-top">
                                        <input class="search-field" type="text" placeholder="Search…">
                                        <button class="search-submit">
                                            <i class="search-btn-icon fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <!-- Header Top Info -->
                                <div class="header-top-info-slider-werap top-info-slider__container">
                                    <div class="header-top-info-inner default-color">
                                        <swiper
                                            :space-between="30"
                                            :speed="1000"
                                            :loop="false"
                                            :autoplay="{'delay': 3000}"
                                            :breakpoints="swiperOptions.breakpoints"
                                        >
                                            <swiper-slide class="info-item">
                                                <div class="info-icon">
                                                    <span class="fa fa-map-marker-alt"></span>
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="info-title"><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"> Joaquim M. F Júnior 311 </a></h6>
                                                    <div class="info-sub-title"><a href="https://maps.app.goo.gl/J3SZAFUMdEvCXJCe9" target="_blank"> Mogi das Cruzes - SP </a></div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide class="info-item">
                                                <div class="info-icon">
                                                    <span class="fa fa-phone"></span>
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="info-title"><a href="tel:+551151160526"> +55 (11) 5116-0526 </a></h6>
                                                    <div class="info-sub-title"><a href="mailto:gam@gamconsultoria.com.br"> gam@gamconsultoria.com.br</a></div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide class="info-item">
                                                <div class="info-icon">
                                                    <span class="fa fa-clock"></span>
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="info-title">09:00 - 18:00</h6>
                                                    <div class="info-sub-title">Segunda a Sexta</div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide class="info-item">
                                                <div class="info-icon">
                                                    <span class="fa fa-comment-alt-lines"></span>
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="info-title">Ligar Agora</h6>
                                                    <div class="info-sub-title"><a href="tel:+551151160526"> +55 (11) 5116-0526 </a></div>
                                                </div>
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>

                                <!-- Header Social Networks -->
                                <div class="header-social-networks style-icons">
                                    <div class="inner">
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://www.facebook.com/gamconsultorianetwork" data-hover="Facebook" target="_blank">
                                            <i class="social-icon fab fa-facebook-f"></i>
                                        </a>
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://www.instagram.com/GamNetwork" data-hover="Instagram" target="_blank">
                                            <i class="social-icon fab fa-instagram"></i>
                                        </a>
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://www.linkedin.com/company/gamnetwork" data-hover="Linkedin" target="_blank">
                                            <i class="social-icon fab fa-linkedin"></i>
                                        </a>
                                            <a class=" social-link hint--black hint--bottom-left" aria-label="Youtube" href="https://www.youtube.com/channel/UCQ64MG6kInNsW9raqMBDKMw" data-hover="Youtube" target="_blank">
                                            <i class="social-icon fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <!-- mobile menu -->
                            <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger" @click="mobileToggleClass('addClass', 'active')">
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom-wrap bg-theme-default d-lg-block d-none" :class="{'is-sticky': isSticky}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-bottom-inner">
                            <div class="header-bottom-left-wrap">
                                <!-- navigation menu -->
                                <div class="header__navigation d-none d-xl-block">
                                    <nav class="navigation-menu navigation-menu--text_white">
                                        <Navigation />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay} from 'swiper/core';
    SwiperCore.use([Autoplay]);

    import Navigation from '@/components/Navigation';
    
    export default {
        components: {
            Swiper,
            SwiperSlide,
            Navigation
        },
        data () {
            return {
                isSticky: false,
                swiperOptions: {
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },

                        992:{
                            slidesPerView : 2
                        },

                        575:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        },
        methods: {
            // offcanvas mobile menu open
            mobileToggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>