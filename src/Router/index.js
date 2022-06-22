import { createRouter, createWebHistory } from 'vue-router'


import { environment } from "../../environment";
import store from '../Store'
import guest from './Middleware/Guest'
import auth from './Middleware/Auth'
import middlewarePipeline from './Middleware/MiddlewarePipeline'

import HomeView from '../Views/Pages/Home/Home.vue'
import Article from '../Views/Pages/Article/Content.vue'
import Staff from '../Views/Pages/Community/Staff.vue'
import Highscores from '../Views/Pages/Community/Highscores.vue'
import SignUp from '../Views/Pages/Auth/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',  name: 'home', component: HomeView },
    { path: '/articles/:id/:slug', name: 'article', component: Article },
    { path: '/community/staff', name: 'staff', component: Staff },
    { path: '/community/highscores', name: 'highscores', component: Highscores },
    { path: '/auth/sign-up', name: 'signup', component: SignUp },
    { path: '/hotel', name: 'hotel', component: HomeView, meta: { middleware: [auth] },
      beforeEnter: (to, from, next) => {
        if (!store.getters['client/loaded']) {
          store.dispatch('client/setClient', true)
        }
        next()
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    let documentTitle = `${environment.hotelName} - ${to?.name ? to.name.charAt(0).toUpperCase() + to.name.slice(1) : 0}`
    if (to.params.title) {
      documentTitle += ` - ${to.params.title}`
    }
    document.title = documentTitle
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }


  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })

})

export default router;
