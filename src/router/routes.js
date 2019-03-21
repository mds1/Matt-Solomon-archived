
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/HomePage.vue') },
      {
        name: 'blockchain',
        path: '/blockchain',
        component: () => import('pages/BlockchainPage.vue'),
      },
      {
        name: 'automation',
        path: '/automation',
        component: () => import('pages/AutomationPage.vue'),
      },
      {
        name: 'blog',
        path: '/blog',
        component: () => import('pages/BlogPage.vue'),
      },
      {
        name: 'resources',
        path: '/resources',
        component: () => import('pages/ResourcesPage.vue'),
      },
      {
        name: 'docker',
        path: '/docker',
        component: () => import('pages/DockerPage.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('layouts/BaseLayout.vue'),
    children: [{
      path: '*',
      component: () => import('pages/Error404.vue'),
    }],
  });
}

export default routes;
