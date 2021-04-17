import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Board from '../components/Board.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/play', component: Board}
]

export default createRouter({
    history: createWebHistory(),
    routes
})
