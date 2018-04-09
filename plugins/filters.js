import Vue from "vue";

Vue.filter("upperCase", function upperCase(value) {
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
});
