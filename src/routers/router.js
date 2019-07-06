import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from '@/routers/movie/movieRouter'
import cinemaRouter from '@/routers/cinema/cinemaRouter'
import mineRouter from '@/routers/mine/mineRouter'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        movieRouter,
        cinemaRouter,
        mineRouter
    ]
})
