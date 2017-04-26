import Vue from 'vue'
import {Time} from './time'

new Vue({
  el: '#app',
  data: {
    times:[
      new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
      new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
      new Time('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
   ]
  }
})
