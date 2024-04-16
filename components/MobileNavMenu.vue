<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li>
                    <nuxt-link to="/#home">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/#aboutUs">
                        <span>Sobre</span>
                    </nuxt-link>
                </li>
                <li class="menu-item-has-children">
                    <nuxt-link to="/#services">
                        <span>Serviços</span>
                    </nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/softwares-and-apps">
                                <span>Desenvolvimento de Softwares e aplicativos</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/ecommerces">
                                <span>Lojas Virtuais e Ecommerces</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/outsourcing">
                                <span>Outsourcing</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/tech-consulting">
                                <span>Consultoria em Tecnologia</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/digital-marketing">
                                <span>Marketing Digital</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cybersecurity">
                                <span>Cibersegurança</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/#contactUs">
                        <span>Contato</span>
                    </nuxt-link>
                </li>
                
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    /* offcanvas mobile menu */
    .mobile-navigation {
        padding: 30px 20px;
    }
    .offcanvas-navigation {
         ul {
            li {
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.3s;
                    }
                    &.active {
                        .sub-menu {
                            height: 100%;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 14px;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $theme-color--two;
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    a {
                        color: $white;
                        font-size: 13px;
                        padding: 5px 0;
                        &:hover {
                            color: $theme-color--two;
                        }
                    }
                }
            }
            li {
                a {
                    text-transform: uppercase;
                }

                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid #ffffff;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>