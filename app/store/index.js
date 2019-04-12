import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let debug = process.env.NODE_ENV !== 'production';

let store = new Vuex.Store({
    modules: {
    },
    strict: debug,
});

Vue.prototype.$store = store;

export default store;
