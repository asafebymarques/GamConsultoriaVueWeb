<template>
    <div class="tabs-wrapper bg-gray section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                        <h6 class="section-sub-title mb-20">Sobre nós</h6>
                        <h3 class="section-title">Geramos valor aos nossos clientes<br> há mais de <span class="text-color-primary"> 6 Anos</span> </h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 ht-tab-wrap">
                    <div class="text-center  ">
                        <ul class="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_mission" @click.prevent="setActive('tab_mission')" :class="{ active: isActive('tab_mission') }">Gam Consultoria</a>
                            </li>

                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_partners" @click.prevent="setActive('tab_partners')" :class="{ active: isActive('tab_partners') }">Nossos Parceiros</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content ht-tab__content">
                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_mission') }" id="tab_mission">
                            <div class="tab-history-wrap section-space--mt_40">
                                <div class="row">
                                    <div class="col-lg-6 ">
                                        <VideoPupupOne />
                                    </div>
                                    <div class="col-lg-5 offset-lg-1 ">
                                        <div class="tab-content-inner mt-30">
                                            <div class="text mb-30">
                                                <span class="text-color-primary">Gam Consultoria</span> <br>
                                                Somos uma empresa de serviços de TI que emprega a tecnologia para construir um futuro melhor para nossos clientes, colegas, meio ambiente e comunidades. Comprometemo-nos em fazer parte de um amplo ecossistema de inovação que abrange as principais verticais de mercado.<br>

                                                Oferecemos um portfólio completo de soluções, que vão desde consultoria até marketing, mobilidade e campanhas personalizadas, estamos preparados para ajudá-lo a transformar digitalmente sua empresa e expandir suas oportunidades de negócio. <br>

                                                Ao optar por nossa expertise global, você terá acesso a recursos digitais robustos e um compromisso com o sucesso de sua empresa, desde o primeiro contato até a implementação final. Contem conosco para impulsionar sua jornada digital e alcançar novos patamares de sucesso! 
                                            </div>
                                            <ul class="check-list section-space--mb_40">
                                                <li class="list-item">Inteligência artificial</li>
                                                <li class="list-item">IT Design </li>
                                                <li class="list-item">Cloud </li>
                                                <li class="list-item">Software Engineering </li>
                                                <li class="list-item">Experience (UX)</li>
                                                <li class="list-item">E outros</li>
                                            </ul>
                                            <div class="tab-button">
                                                <nuxt-link to="/#services" class="btn-text">
                                                    <span class="button-text">Saber mais <i class="fas fa-arrow-right ms-1"></i></span>
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_partners') }" id="tab_partners">
                            <div class="tab-history-wrap section-space--mt_60 brand-logo-slider__one">
                                <div class="modern-grid--6">
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/galp.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/galp.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/decskill.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/decskill.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/defendy.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/defendy.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/dxc.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/dxc.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/Alter.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/Alter.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/edp.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/edp.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/annexus.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/annexus.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/fibra.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/fibra.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/itau.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/itau.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                     <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/vector.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/vector.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/softtek.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/softtek.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                      <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/total.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/total.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
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
    import VideoPupupOne from '@/components/VideoPupupOne';
    import ServiceItemStyleThree from '@/components/ServiceItemStyleThree';

    import data from '../../data/service.json';
    export default {
        components: {
            VideoPupupOne,
            ServiceItemStyleThree
        },
        data(){
            return {
                data,
                activeItem: 'tab_mission'
            }
        },
        methods: {
            isActive (menuItem) {
                return this.activeItem === menuItem
            },
            setActive (menuItem) {
                this.activeItem = menuItem
            }
        }
    };
</script>