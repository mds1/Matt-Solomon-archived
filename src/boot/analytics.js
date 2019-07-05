import VueAnalytics from 'vue-analytics';

const isProduction = process.env.NODE_ENV === 'production';

// leave the export, even if you don't use it
export default async ({ router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-143337720-1',
    router, // necessary to automatically track all routes
    debug: {
      enabled: !isProduction, // only debug during development
      sendHitTask: isProduction, // avoid sending data during development
    },
    // Automatically track exceptions and screen
    // IMPORTANT: the auto tracking script uses Vue.config.errorHandler, if you
    // need to add your handler, do it before installing the plugin or will be overwritten
    // source: https://matteogabriele.gitbooks.io/vue-analytics/content/docs/exception-tracking.html
    autoTracking: {
      exception: true,
      screenview: true,
    },
  });
};
