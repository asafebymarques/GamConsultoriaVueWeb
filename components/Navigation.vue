<template>
    <ul>
        <li>
            <a href="http://localhost:3000/#home">
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="http://localhost:3000/#aboutUs">
                <span>Sobre</span>
            </a>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <a href="http://localhost:3000/#services">
                <span>Serviços</span>
            </a>
            <ul class="submenu">
                <li>
                    <a href="/service/efficient-database-security-one">
                        <span>Efficient Database Security</span>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="http://localhost:3000/#contactUs">
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