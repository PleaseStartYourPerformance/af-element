import Vue from 'vue'
const components = require.context('../lib', true, /[\w-]+.vue$/);
components.keys().forEach(item => {
var file = components(item);
Vue.component('af-' + file.default.name, file.default)
});