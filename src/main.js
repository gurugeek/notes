import Vue      from 'vue'
import Modal    from 'vue-js-modal'
import Popover  from 'vue-js-popover'
import Icon     from './components/Icon'

import App      from './App'
import store    from './store'
import router   from './router'

import './filters'
import 'font-awesome/scss/font-awesome.scss'

Vue.component('Icon', Icon)

Vue.use(Popover)
Vue.use(Modal)

Vue.config.devtools = true
Vue.config.performance = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
