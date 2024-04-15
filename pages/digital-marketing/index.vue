<template>
    <div class="main-container">

        <Header />

        <div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0">
            <div class="container">
                <div class="cybersecurity-about-box">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="modern-number-01">
                                <h3 class="heading mt-0"><span class="text-color-primary"> Marketing Digital</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="conact-us-wrap-one managed-it">
                                <h5 class="heading ">Serviços de Marketing Digital da Gam Consultoria: <span class="text-color-primary"> Impulsionando o Sucesso Online</span></h5>

                                <div class="sub-heading">
                                    A Gam Consultoria oferece serviços completos de marketing digital para ajudar empresas a alcançar seus objetivos de crescimento online. Nossa equipe de especialistas em marketing digital utiliza estratégias comprovadas e práticas recomendadas para aumentar a visibilidade da sua marca, gerar leads qualificados e impulsionar as vendas. 
                                    <br><br>

                                    Nossos serviços de marketing digital incluem: <br><br>

                                    <b>SEO (Search Engine Optimization):</b> Otimizamos seu site para os mecanismos de busca, ajudando você a alcançar uma classificação mais alta nos resultados de pesquisa e a atrair mais tráfego orgânico.
                                    <br><br>
                                    <b>PPC (Pay-Per-Click):</b> Criamos e gerenciamos campanhas de PPC eficazes para aumentar o tráfego qualificado para o seu site e gerar leads de alta qualidade.
                                    <br><br>
                                    <b>Marketing de Conteúdo:</b> Criamos conteúdo relevante e envolvente para atrair seu público-alvo e construir uma base sólida de seguidores e clientes.
                                    <br><br>
                                    <b>Mídias Sociais:</b> Desenvolvemos estratégias de mídia social personalizadas para aumentar o engajamento, expandir sua presença online e fortalecer o relacionamento com seus clientes.
                                    <br><br>
                                    <b>E-mail Marketing:</b> Criamos campanhas de e-mail marketing eficazes para nutrir leads, promover produtos e serviços e manter seus clientes informados e engajados.
                                    <br><br>
                                    Além disso, nossa abordagem centrada no cliente garante que cada estratégia seja personalizada de acordo com as necessidades e objetivos específicos de sua empresa. Estamos comprometidos em fornecer resultados mensuráveis e um retorno sobre o investimento tangível.
                                    <br><br>
                                    Se você está procurando uma maneira eficaz de aumentar sua presença online e impulsionar suas vendas, entre em contato conosco hoje mesmo. Estamos ansiosos para ajudar você a alcançar o sucesso online.
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