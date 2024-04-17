<template>

    <Head>
        <Title>CiberSegurança | Gam Consultoria</Title>
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
                                <h3 class="heading mt-0"><span class="text-color-primary">Cibersegurança</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="conact-us-wrap-one managed-it">
                                <h5 class="heading ">Serviços de Cibersegurança da Gam Consultoria: <span class="text-color-primary"> Protegendo sua Empresa contra Ameaças Digitais</span></h5>

                                <div class="sub-heading">
                                A Gam Consultoria oferece serviços abrangentes de cibersegurança para proteger sua empresa contra ameaças digitais em constante evolução. Nossa equipe de especialistas em segurança cibernética possui o conhecimento e a experiência necessários para identificar, mitigar e prevenir ataques cibernéticos, garantindo a segurança de seus dados e sistemas.
                                <br><br>
                                Nossos serviços de cibersegurança incluem:
                                <br><br>
                                <b>Auditoria de Segurança:</b> Realizamos auditorias abrangentes de segurança para identificar vulnerabilidades em seus sistemas e redes.
                                <br><br>                                
                                <b>Gerenciamento de Vulnerabilidades:</b> Monitoramos constantemente suas redes e sistemas em busca de vulnerabilidades e aplicamos patches e atualizações de segurança conforme necessário.
                                <br><br>                                
                                <b>Detecção e Resposta a Incidentes:</b> Implementamos sistemas avançados de detecção de intrusos e respondemos rapidamente a quaisquer incidentes de segurança para minimizar danos.
                                <br><br>                                
                                <b>Treinamento de Conscientização em Segurança:</b> Oferecemos treinamentos especializados para conscientizar seus funcionários sobre as melhores práticas de segurança cibernética.
                                <br><br>                               
                                <b>Consultoria em Segurança: </b> Fornecemos orientação especializada para ajudar a desenvolver e implementar políticas de segurança cibernética eficazes.
                                <br><br>
                                Além disso, nossa abordagem personalizada garante que cada solução seja adaptada às necessidades específicas de sua empresa. Estamos comprometidos em proteger seus ativos mais valiosos e garantir a continuidade de seus negócios, independentemente das ameaças cibernéticas que possam surgir.
                                <br><br>
                                Se você está procurando um parceiro confiável em cibersegurança para proteger sua empresa contra ameaças digitais, entre em contato conosco hoje mesmo. Estamos aqui para ajudar a manter sua empresa segura e protegida.
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