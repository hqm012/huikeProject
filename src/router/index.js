import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/item',
    component: Layout,
    redirect: '/item/itemlist',
    name: 'Item',
    meta: { title: '公益项目', icon: 'el-icon-umbrella' },
    children: [
      {
        path: 'itemadd',
        name: 'ItemAdd',
        component: () => import('@/views/itemAdd/index'),
        meta: { title: '新增' }
      },
      {
        path: 'itemlist',
        name: 'ItemList',
        component: () => import('@/views/itemList/index'),
        meta: { title: '项目列表' },
        children: [
          {
            path: 'itemdetail',
            name: 'ItemDetail',
            component: () => import('@/views/itemList/itemDetail'),
            meta: { title: '项目详情' },
            hidden: true
          }
        ]
      },

    ]
  },

  {
    path: '/news',
    component: Layout,
    redirect: '/news/newslist',
    name: 'News',
    meta: { title: '新闻动态', icon: 'el-icon-news' },
    children: [
      {
        path: 'newsadd',
        name: 'NewsAdd',
        component: () => import('@/views/newsAdd/index'),
        meta: { title: '新增' }
      },
      {
        path: 'newslist',
        name: 'NewsList',
        component: () => import('@/views/newsList/index'),
        meta: { title: '新闻动态列表' }
      }
    ]
  },

  {
    path: '/story',
    component: Layout,
    redirect: '/story/storylist',
    name: 'Story',
    meta: { title: '公益故事', icon: 'el-icon-ship' },
    children: [
      {
        path: 'storyadd',
        name: 'StoryAdd',
        component: () => import('@/views/storyAdd/index'),
        meta: { title: '新增' }
      },
      {
        path: 'storylist',
        name: 'StoryList',
        component: () => import('@/views/storyList/index'),
        meta: { title: '公益故事列表' }
      }
    ]
  },

  {
    path: '/information',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Information',
        component: () => import('@/views/information/index'),
        meta: { title: '信息公开', icon: 'el-icon-view' }
      }
    ]
  },

  {
    path: '/carousel',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Carousel',
        component: () => import('@/views/carousel/index'),
        meta: { title: '轮播图管理', icon: 'el-icon-picture-outline-round' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
