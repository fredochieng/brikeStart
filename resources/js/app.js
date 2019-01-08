/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Import Moment js for date
import moment from 'moment';

// Import VForm for form validation
import { Form, HasError, AlertError } from 'vform'

// SweetAlert
import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
// Display the toast
window.toast = toast;

// Display Forms/ Access anywhere in the window
window.Form = Form;

// Create a Custome Event
window.Fire = new Vue();
// Register Global Component
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
    // Import vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Import Progress Bar
import VueProgressBar from 'vue-progressbar'

// Define the Vue Progress Bar
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
})

// Define routes/ Register the Vue Components
let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/profile', component: require('./components/Profile.vue') }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

// Vue Filter for Uppercase and Lowercase
Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
});

// Moment js for date
Vue.filter('myDate', function(created) {
    return moment(created).format('MMMM Do YYYY');
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

Vue.component('example-component', require('./components/ExampleComponent.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});