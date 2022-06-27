<template>
    <div>
        <ul class="menu">
            <div  v-for="(item, index) in itens" :key="index">
            <li class="sidebar-title" v-if="item.type == 'title'">{{item.name}}</li>

            <li v-if="item.type == 'item'"
                class="sidebar-item  ">
                <div class='sidebar-link'>
                    <i :class="item.icon"></i>
                    <router-link :to="item.routelink"><span>{{item.name}}</span></router-link>
                </div>
            </li>

            <li v-if="item.type == 'item-submenu'"
                class="sidebar-item  has-sub">
                <div class='sidebar-link'>
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </div>
                <ul class="submenu">
                    <li class="submenu-item" v-for="(subitem, index) in item.submenu"  :key="index">
                        <router-link :to="subitem.routelink"><span>{{subitem.name}}</span></router-link>
                    </li>
                </ul>
            </li>
            </div>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Menu',

    props: {
        itens: []
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
