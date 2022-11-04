import Vue from 'vue'
import VueRouter from 'vue-router'

import Ingreso from './components/FormularioGastos.vue'
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/ingreso' },
        { path: '/ingreso', component: Ingreso },
        { path: '/respuestas', component: Respuestas },
    ]
})