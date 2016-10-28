'use strict';

const router5 = require('router5');
const loggerPlugin = require('router5').loggerPlugin;
const browserPlugin = require('router5/plugins/browser').default;

const routes = [
      { name: 'index', path: '/'},
      { name: 'sign-in', path: '/sign-in' },
];

const options = {
    defaultRoute: 'index',
};

const router = router5.createRouter(routes, options)
  .usePlugin(loggerPlugin)
  .usePlugin(browserPlugin({
    useHash: true,
    hashPrefix: '!',
  }))
  ;

router.useMiddleware(require('./dom').transition);

module.exports = router;
