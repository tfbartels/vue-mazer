import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Datatable from '../views/datatable/Datatable.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/datatable',
        name: 'datatable',
        component: Datatable
    },
]

const router = new VueRouter({
  routes
})

export default router
