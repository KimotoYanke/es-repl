import Vue from 'vue'
import VueCodemirror  from 'vue-codemirror-lite'
import IndexVue from './index.vue'
Vue.use(VueCodemirror)

new Vue({
  el: '#app',
  components: {
    codemirror: VueCodemirror.codemirror,
    IndexVue
  },
  render: h => h(IndexVue)
})
