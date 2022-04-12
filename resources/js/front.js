window.Vue = require('vue');
window.axios = require('axios');
window.axios.default.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import App from './views/App';

//per implementare vue-router
import router from './router';

const app = new Vue({

    el: '#root',
    render: h => h(App),
    router

});

