import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import MapInfo from '@/components/MapInfo'
import Download from '@/components/Download'
import Wiki from '@/components/Wiki'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MapList from '@/components/MapList'
import SetPassword from '@/components/SetPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/map',
      name: 'MapList',
      component: MapList
    },
    {
      path: '/map/:id',
      name: 'MapInfo',
      component: MapInfo
    },
    {
      path: '/setpassword/:token',
      name: 'SetPassword',
      component: SetPassword
    }
  ]
})
