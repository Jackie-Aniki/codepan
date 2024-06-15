new Vue({
  el: "#app",
  data: function () {
    return { count: 0 };
  },
  methods: {
    inc() {
      this.count++;
    },
    dec() {
      this.count--;
    },
  },
});
