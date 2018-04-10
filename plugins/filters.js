import Vue from "vue";

Vue.filter("upperCase", function upperCase(value) {
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
});

Vue.filter("upperCaseAll", function(value) {
  return value.toUpperCase();
});

Vue.filter("lowerCase", function(val) {
  return val.toLowerCase();
});

Vue.filter("toCamelCase", function(val) {
  let newVal = val.toLowerCase().split(" ");
  return newVal.reduce(
    (acc, cur) => `${acc}${cur[0].toUpperCase() + cur.substring(1)}`
  );
});
