import Vue from 'nativescript-vue';
import store from './store';
import index from './router';

import VueDevtools from 'nativescript-vue-devtools';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

Vue.prototype.$routes = index;
Vue.prototype.$router = {
  to: (to, params) => {
    const options = {
      clearHistory: true,
      ...params,
    };
    Vue.prototype.$navigateTo(Vue.prototype.$routes[to], options);
  },
  back: () => {
    Vue.prototype.$navigateBack();
  }
};

new Vue({
  store,
  render (h) {
    return h('frame', [h(this.$routes['login'])])
  }
}).$start();
