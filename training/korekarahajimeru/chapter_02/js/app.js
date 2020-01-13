const a = new Vue({
  el: '#a',
  data: {
    message: 'Hello, Korekarahajimaru World!',
  },
});

const b = new Vue({
  el: '#b',
  data: {
    disabledFlag: true,
  },
});

const c = new Vue({
  el: '#c',
  data: {
    current: new Date(),
  },
  created: function() {
    const that = this;
    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  },
});

const d = new Vue({
  el: '#d',
  data: {
    author: {
      name: '山田',
      company: '', // 明示的に指定しないと、新規に追加した場合に表示されない
    },
  },
  created: function() {
    const that = this;
    this.timer = setTimeout(function() {
      that.author.company = 'WINGSプロジェクト';
    }, 3000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  },
});

const e = new Vue({
  el: '#e',
  data: {
    author: {
      name: '山田',
    },
  },
  mounted: function() {
    this.$set(this.author, 'company', '会社名です');
    const that = this;
    this.$nextTick().then(function() {
      // ビューへの反映を待ってから確認
      console.log(that.$el.textContent.includes(that.author.company));
    });
  },
});

const f = new Vue({
  el: '#f',
  data: {
    name: '',
    // upperName: '',
  },
  created: function() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  // watch: {
  //   name: function(newValue, oldValue) {
  //     this.delayFunc();
  //   },
  // },
  computed: {
    upperName: function() {
      return this.name.toUpperCase();
    },
  },
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    },
  },
});
