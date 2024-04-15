<template>
    <ul>
        <li>
            <a href="/#home">
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="/#aboutUs">
                <span>Sobre</span>
            </a>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <a href="/#services">
                <span>Serviços</span>
            </a>
            <ul class="submenu">
                <li>
                    <a href="/service/softwares-and-apps">
                        <span>Desenvolvimento de Softwares e aplicativos</span>
                    </a>
                </li>
                 <li>
                    <a href="/service/ecommerces">
                        <span>Lojas Virtuais e Ecommerces</span>
                    </a>
                </li>
                 <li>
                    <a href="/service/outsourcing">
                        <span>Outsourcing</span>
                    </a>
                </li>
                 <li>
                    <a href="/service/tech-consulting">
                        <span>Consultoria em Tecnologia</span>
                    </a>
                </li>
                 <li>
                    <a href="/service/digital-marketing">
                        <span>Marketing Digital</span>
                    </a>
                </li>
                 <li>
                    <a href="/service/cybersecurity">
                        <span>Cibersegurança</span>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="/#contactUs">
                <span>Contato</span>
            </a>
        </li>
        <!-- <li>
            <nuxt-link href="/blog">
                <span>Blog</span>
            </nuxt-link>
        </li> -->
    </ul>
</template>