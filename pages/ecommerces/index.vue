<template>
    <Head>
        <Title>Ecommerces | Gam Consultoria</Title>
        <Meta name="description" :content="title" />
      </Head>
    <div class="main-container">

        <Header />

        <div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0">
            <div class="container">
                <div class="cybersecurity-about-box">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="modern-number-01">
                                <h3 class="heading mt-0"><span class="text-color-primary"> Desenvolvimento de E-Commerces e Lojas Virtuais</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="conact-us-wrap-one managed-it">
                                <h5 class="heading ">Desenvolvimento de E-Commerces e Lojas Virtuais pela <span class="text-color-primary"> Gam Consultoria</span></h5>

                                <div class="sub-heading">
                                    Na Gam Consultoria, estamos comprometidos em ajudar empresas a expandir sua presença online e impulsionar suas vendas por meio de e-commerces e lojas virtuais de alta qualidade e desempenho. Com nossa experiência e conhecimento técnico, podemos transformar sua visão em uma plataforma de comércio eletrônico eficaz e lucrativa.
                                    <br><br>
                                    Nosso processo de desenvolvimento começa com uma análise detalhada de suas necessidades e objetivos de negócios. Compreendemos que cada empresa é única, e é por isso que desenvolvemos soluções personalizadas que atendem às suas necessidades específicas. Desde a escolha da plataforma certa até o design e a integração de recursos, estamos aqui para ajudar em cada etapa do processo.
                                    <br><br>
                                    Utilizando as mais recentes tecnologias e melhores práticas do setor, garantimos que seu e-commerce seja seguro, fácil de usar e otimizado para conversões. Desde a integração de sistemas de pagamento até a implementação de estratégias de marketing digital, nossa equipe está preparada para enfrentar qualquer desafio e garantir o sucesso de sua loja virtual.
                                    <br><br>
                                    Além do desenvolvimento inicial, oferecemos serviços de suporte contínuo e manutenção para garantir que seu e-commerce permaneça atualizado e funcione perfeitamente. Estamos comprometidos em fornecer a você as ferramentas e o suporte necessários para alcançar o sucesso online.
                                    <br><br>
                                    Se você está pronto para levar sua empresa para o próximo nível com um e-commerce de alto desempenho, entre em contato conosco hoje mesmo. Estamos ansiosos para colaborar com você e transformar sua visão em realidade digital.
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