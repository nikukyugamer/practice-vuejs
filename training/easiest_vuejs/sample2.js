const app = new Vue({
  el: '#app',
  data: {
    msg1: 'はじめての Vue.js !',
    msg2: 'Vue.js'
  },
  methods: {
    changeMsg1: function() {
      this.msg1 = 'こんにちは、Vue.js!';
    }
  }
});
