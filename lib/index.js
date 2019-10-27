// 定义我们的插件
const afElement = {    
    install (Vue, options) {
        const components = require.context('../lib', true, /[\w-]+.vue$/);
        components.keys().forEach(item => {
            var file = components(item);
            Vue.component('af-' + file.default.name, file.default)
        });

    }
}

// 最后将插件导出，并在main.js中通过Vue.use()即可使用插件
export default afElement