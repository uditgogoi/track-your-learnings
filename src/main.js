import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './view/Home.vue';
import RecordDetail from './view/DetailPage.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/', component:Home},
  {path:'/detail', component: RecordDetail}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
