
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UsersPage.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/ChatPage.vue') },
      { path: '/auth', component: () => import('pages/AuthPage.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
