// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
    container: "body",
    duration: 400,
    easing: "ease-in",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});
//
const vVisible = {
    install(Vue) {
        Vue.directive('visible', (el, binding) => {
            var value = binding.value;
            if (!!value) {
                el.style.visibility = 'visible';
            } else {
                el.style.visibility = 'hidden';
            }
        });
    }
};
Vue.use(vVisible)
    //
Vue.mixin({
        methods: {
            getScroll: function() {
                return {
                    left: window.pageXOffset || document.documentElement.scrollLeft,
                    top: window.pageYOffset || document.documentElement.scrollTop
                }
            },
            getOffset: function(el) {
                el = el.getBoundingClientRect();
                return {
                    left: el.left + window.scrollX,
                    top: el.top + window.scrollY
                }
            },
            addClass: function(el, className) {
                if (el.classList)
                    el.classList.add(className)
                else if (!hasClass(el, className))
                    el.className += " " + className;
            },
            removeClass: function(el, className) {
                if (el.classList)
                    el.classList.remove(className)
                else if (hasClass(el, className)) {
                    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                    el.className = el.className.replace(reg, ' ');
                }
            },
            hasClass: function(el, className) {
                if (el.classList)
                    return el.classList.contains(className);
                return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
            },
        }
    })
    //
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    lazyComponent: true
});
//
import {
    Collapse,
    Button
} from 'bootstrap-vue/es/components'
Vue.use(Collapse)
Vue.use(Button)
    // styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/core.scss'
//
Vue.config.productionTip = false
    /* eslint-disable no-new */

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

router.afterEach(function(to) {

        if (isLocalhost) {
            console.log('isLocalhost and pageview sent');
            console.log(location.pathname + '/' + location.hash);
        } else if (window.ga) {
            var value = document.location.pathname + to.fullPath;
            window.ga('set', 'page', value) //  to.fullPath
            window.ga('send', 'pageview')
        } else {
            console.log(ga);
            console.log('ga error');
        }
    })
    // GA pageviews

new Vue({
    el: '#app',
    router,
    mounted: function() {
        function init() {
            var email = document.getElementById("en__field_supporter_emailAddress"),
                phone = document.getElementById("en__field_supporter_phoneNumber");
            if (email !== null && phone !== null) {
                email.setAttribute("type", "email");
                phone.setAttribute("type", "tel");
            }
        }
        init();
    },
    template: '<App/>',
    components: {
        App
    }
})