<template>
  <div>
    <div class="links">
        <nuxt-link exact to="/">Home</nuxt-link>        
        <nuxt-link exact to="/Filters">Filters</nuxt-link>
      </div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getPeople");
  }
};
</script>


<style>
.links,
a {
  display: flex;
  justify-content: space-around;
  align-content: center;
  color: #ddd;
  background-color: #222;
  padding: 8px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
