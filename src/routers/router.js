import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie/movieRouter'
import cinemaRouter from './cinema/cinemaRouter'
import mineRouter from './mine/mineRouter'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
