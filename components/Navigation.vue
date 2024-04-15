<template>
    <ul>
        <li>
            <a href="http://localhost:3000/#home">
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="http://localhost:3000/#aboutUs">
                <span>About Us</span>
            </a>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <a href="http://localhost:3000/#services">
                <span>Services</span>
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
                <span>Contact</span>
            </a>
        </li>
        <!-- <li>
            <nuxt-link href="/blog">
                <span>Blog</span>
            </nuxt-link>
        </li> -->
    </ul>
</template>