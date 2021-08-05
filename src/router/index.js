import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AddEntry from '../views/AddEntry.vue'
import EditEntry from '../views/EditEntry.vue'
import Settings from '../views/Settings.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/addentry',
    name: 'AddEntry',
    component: AddEntry
  },
  {
    path: '/editentry/:entryID',
    name: 'EditEntry',
    component: EditEntry
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/notfound',
    name: 'Error404',
    component: Error404
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/notfound'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
