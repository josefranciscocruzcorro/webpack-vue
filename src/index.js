import '../node_modules/bootstrap/scss/bootstrap.scss'

window.$ = require('jquery');
require('popper.js');
require('bootstrap');

import Vue from 'vue';

Vue.component('example-component', require('./components/example.vue').default);

window.onload = function () {
    new Vue({
        el: '#app'
    });
}
