import { createRouter, createWebHistory } from 'vue-router'
import Screen0 from '../components/Screen0.vue'
import Screen1 from '../components/Screen1.vue'
import Screen2 from '../components/Screen2.vue'
import Screen3 from '../components/Screen3.vue'
import Screen4 from '../components/Screen4.vue'
import Screen5 from '../components/Screen5.vue'
import Screen6 from '../components/Screen6.vue'
import Screen7 from '../components/Screen7.vue'
import Screen8 from '../components/Screen8.vue'
import Screen9 from '../components/Screen9.vue'
import Screen10 from '../components/Screen10.vue'
import Screen11 from '../components/Screen11.vue'
import Screen12 from '../components/Screen12.vue'
import Screen13 from '../components/Screen13.vue'
import Screen14 from '../components/Screen14.vue'
import Screen15 from '../components/Screen15.vue'
import Screen16 from '../components/Screen16.vue'
import Screen17 from '../components/Screen17.vue'
import Screen18 from '../components/Screen18.vue'
import Screen19 from '../components/Screen19.vue'
import Screen20 from '../components/Screen20.vue'
import Screen21 from '../components/Screen21.vue'
import Screen22 from '../components/Screen22.vue'
import Screen23 from '../components/Screen23.vue'
import Screen24 from '../components/Screen24.vue'
import Screen25 from '../components/Screen25.vue'


const routes = [
  { path: '/', name: 'Screen0', component: Screen0 },
  { path: '/1', name: 'Screen1', component: Screen1 },
  { path: '/2', name: 'Screen2', component: Screen2 },
  { path: '/3', name: 'Screen3', component: Screen3 },
  { path: '/4', name: 'Screen4', component: Screen4 },
  { path: '/5', name: 'Screen5', component: Screen5 },
  { path: '/6', name: 'Screen6', component: Screen6 },
  { path: '/7', name: 'Screen7', component: Screen7 },
  { path: '/8', name: 'Screen8', component: Screen8 },
  { path: '/9', name: 'Screen9', component: Screen9 },
  { path: '/10', name: 'Screen10', component: Screen10 },
  { path: '/11', name: 'Screen11', component: Screen11 },
  { path: '/12', name: 'Screen12', component: Screen12 },
  { path: '/13', name: 'Screen13', component: Screen13 },
  { path: '/14', name: 'Screen14', component: Screen14 },
  { path: '/15', name: 'Screen15', component: Screen15 },
  { path: '/16', name: 'Screen16', component: Screen16 },
  { path: '/17', name: 'Screen17', component: Screen17 },
  { path: '/18', name: 'Screen18', component: Screen18 },
  { path: '/19', name: 'Screen19', component: Screen19 },
  { path: '/20', name: 'Screen20', component: Screen20 },
  { path: '/21', name: 'Screen21', component: Screen21 },
  { path: '/22', name: 'Screen22', component: Screen22 },
  { path: '/23', name: 'Screen23', component: Screen23 },
  { path: '/24', name: 'Screen24', component: Screen24 },
  { path: '/25', name: 'Screen25', component: Screen25 },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.path}`);
  next();
});

export default router
