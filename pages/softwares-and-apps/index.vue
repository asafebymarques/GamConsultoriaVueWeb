<template>
    <div class="main-container">

        <Header />

        <div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0">
            <div class="container">
                <div class="cybersecurity-about-box">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="modern-number-01">
                                <h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de Softwares e aplicativos</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="conact-us-wrap-one managed-it">
                                <h5 class="heading ">Desenvolvimento de Softwares e Aplicativos Personalizados pela <span class="text-color-primary"> Gam Consultoria</span></h5>

                                <div class="sub-heading">
                                    Na Gam Consultoria, somos apaixonados por transformar ideias inovadoras em realidade digital. Como especialistas em desenvolvimento de softwares e aplicativos, oferecemos soluções personalizadas para atender às necessidades exclusivas de nossos clientes.
                                    <br><br>
                                    Nossa abordagem começa com uma profunda compreensão de seus objetivos e requisitos. Através de uma análise detalhada, colaboramos com você para definir uma estratégia de desenvolvimento personalizada que atenda às suas expectativas e ultrapasse suas metas.
                                    <br><br>
                                    Utilizando as metodologias ágeis mais recentes, nossa equipe experiente garante entregas rápidas e de alta qualidade. Isso significa que você pode ver seu projeto evoluir rapidamente, com a flexibilidade de ajustar o curso conforme necessário.
                                    <br><br>
                                    Desde o desenvolvimento de aplicativos móveis para iOS e Android até sistemas web e desktop, nossa experiência abrange uma ampla gama de tecnologias e plataformas. Isso nos permite oferecer soluções abrangentes que atendem às suas necessidades de negócios específicas.
                                    <br><br>
                                    Além do desenvolvimento inicial, oferecemos serviços de manutenção e suporte contínuos para garantir que seus softwares e aplicativos permaneçam atualizados e funcionando perfeitamente.
                                    <br><br>
                                    Se você está procurando uma equipe dedicada e experiente para transformar sua visão em realidade digital, a Gam Consultoria está aqui para ajudar. Entre em contato conosco hoje para saber mais sobre como podemos colaborar no seu próximo projeto.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import AccordionTwo from '@/components/AccordionTwo';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '~/data/service.json';

    export default {
        components: {
            Header,
            AccordionTwo,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                slug: this.$route.params.slug
            }
        },
        mounted () {
            this.data = data.services.find(service => service.slug == this.slug);
        },
    };
</script>