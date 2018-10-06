import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import MapInfo from '@/components/MapInfo'
import Download from '@/components/Download'
import Wiki from '@/components/Wiki'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      name: 'MapInfo',
      component: MapInfo
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/wiki',
      name: 'Wiki',
      component: Wiki
    }
  ]
})
