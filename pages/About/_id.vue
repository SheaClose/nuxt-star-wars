<template>
<div>
  <nuxt-link class="nuxt_btn" to="/">
    <button class="btn">Back</button>
  </nuxt-link>
  <div class="person">
    <ul>
      <div>Name: {{ person.name }} </div>
      <div>Gender: {{ person.gender }} </div>
      <div>Year of Birth: {{ person.birth_year }} </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      people: []
    };
  },
  computed: {
    person() {
      const { id } = this.$router.history.current.params;
      return this.people[id] || {};
    }
  },
  components: {},
  mounted() {
    this.people = this.$store.state.people;
  }
};
</script>

<style scoped>
.nuxt_btn {
  background-color: transparent;
}
.person {
  width: 80vw;
  margin: auto;
  padding: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.person div {
  padding: 10px;
}
.btn {
  background-color: #0088ff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
