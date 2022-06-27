<template>
    <div id="app">
        <Sidebar> </Sidebar>
        <div id="main" class='layout-navbar'>
            <Header></Header>
            <div id="main-content">
                <router-view/>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/layouts/Sidebar.vue';
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';

export default {
    name: 'HomeView',
    components: {
        Sidebar,
        Header,
        Footer
    },

    mounted() {
        let Script = document.createElement("script");
        Script.setAttribute("src", "./assets/js/app.js");
        document.head.appendChild(Script);
    }

}
</script>


