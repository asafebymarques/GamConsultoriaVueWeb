<template>
    <Head>
        <Title>Home | Gam Consultoria</Title>
        <Meta name="description" :content="title" />
    </Head>
    <div class="main-container">
        <Header id="home"/>
        <HeroAppointment />
        <ServiceStyleTwo id="services"/>
        <TabSection id="aboutUs"/>
        <CtaOne />
        <FunFactTwo id="contactUs" />
        <ContactUs/>
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import HeroAppointment from '@/components/HeroAppointment';
    import ServiceStyleTwo from '@/components/sections/ServiceStyleTwo';
    import TabSection from '@/components/sections/TabSection';
    import CtaOne from '@/components/CtaOne';
    import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import FunFactTwo from '@/components/FunFactTwo';
    import ContactUs from '@/components/sections/ContactUs';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            HeroAppointment,
            ServiceStyleTwo,
            TabSection,
            CtaOne,
            CaseStudiesSection,
            TestimonialTwo,
            FunFactTwo,
            ContactUs,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>