require('./bootstrap');


import Vue from 'vue'
//import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')


window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'))
Vue.component('App', require('./components/App.vue'))
Vue.component('Destination', require('./components/DestinationCard.vue'))
Vue.component('Property', require('./components/PropertyCard.vue'))