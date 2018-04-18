<template>
  <section>
    <div>
      <div class="card_container btns">
        <button class="btn" @click="retreatPage" :disabled="$store.state.previous ? false : true">Back</button>
        <h1>
          Home
        </h1>
        <button class="btn" @click="advancePage" :disabled="$store.state.next ? false : true">Forward</button>
      </div>
      <div class="card_container">
        <nuxt-link :to="personPath(ind)" class="card" :class="person.gender === 'Female' ? 'girl' : 'boy'" :key="ind" v-for="(person, ind) in people">
          <center>
            <img :src="person.img_url" alt="">
          </center>
          Name: {{ person.name }}<br>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // people: this.$store.state.people || [],
      page: 1,
      personPath(id) {
        return `/About/${id}`;
      }
    };
  },
  methods: {
    advancePage() {
      this.$store.dispatch("getNextPeople");
    },
    retreatPage() {
      this.$store.dispatch("getLastPeople");
    }
  },
  computed: {
    people() {
      return this.$store.state.people || [];
    }
  }
};
</script>

<style scoped>
  img {
    display: block;
    margin: 15px;
  }
  .card {
    overflow: hidden;
    width: 27%;
    padding: 15px;
    display: inline-block;
    height: 200px;
    margin: 25px auto;
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
  .btn:hover {
    opacity: 0.8;
  }
  .btn:disabled {
    opacity: 0.2;
  }
  .btns {
    display: flex;
    justify-content: space-around;
    /* transform: translate(0, 50%); */
  }
  .card_container {
    width: 80%;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  h1 {
    text-align: center;
  }
  .boy {
    background-color: #00bfff;
  }
  .girl {
    background-color: #ff00ee;
  }
</style>
