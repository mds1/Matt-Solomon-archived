
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/HomePage.vue'),
        meta: {
          title: 'Home - Matt Solomon',
        },
      },
      // {
      //   name: 'blockchain',
      //   path: '/blockchain',
      //   component: () => import('pages/BlockchainPage.vue'),
      // },
      // {
      //   name: 'automation',
      //   path: '/automation',
      //   component: () => import('pages/AutomationPage.vue'),
      // },
      {
        name: 'blog',
        path: '/blog',
        component: () => import('pages/BlogPage.vue'),
        meta: {
          title: 'Blog - Matt Solomon',
        },
      },
      {
        name: 'resources',
        path: '/resources',
        component: () => import('pages/ResourcesPage.vue'),
        meta: {
          title: 'Resources - Matt Solomon',
        },
      },
      {
        name: 'docker',
        path: '/docker',
        component: () => import('pages/DockerPage.vue'),
        meta: {
          title: 'Docker Installation - Matt Solomon',
        },
      },
      {
        name: 'contact',
        path: '/contact',
        component: () => import('pages/Contact.vue'),
        meta: {
          title: 'Contact - Matt Solomon',
        },
      },
      {
        name: 'compound-rates',
        path: '/compound-rates',
        component: () => import('pages/CompoundRatesPage.vue'),
        meta: {
          title: 'Compound Rates - Matt Solomon',
        },
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
