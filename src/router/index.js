import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from '@/views/homeView.vue';
import articleView from '@/views/articleView.vue';
import addNewArticle from '@/views/addNewArticle.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home-view',
    component: homeView
  },
  {
    path: '/article/:id',
    name: 'article-view',
    component: articleView,
    props: true
  },
  {
    path: '/create-new-article',
    name: 'create-new-article',
    component: addNewArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
