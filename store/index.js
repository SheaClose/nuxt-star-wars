import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      people: [],
      next: "",
      previous: "",
      count: 0
    },
    mutations: {
      setPeople(state, payload) {
        Object.keys(state).forEach(key => (state[key] = payload[key]));
      }
    },
    actions: {
      getPeople({ commit }) {
        axios.get("https://swapi.co/api/people").then(res => {
          setPeople(commit, res);
        });
      },
      getNextPeople({ commit, state }) {
        axios.get(state.next).then(res => {
          setPeople(commit, res);
        });
      },
      getLastPeople({ commit, state }) {
        axios.get(state.previous).then(res => {
          setPeople(commit, res);
        });
      }
    }
  });
};

export default createStore;

function setPeople(commit, res) {
  commit("setPeople", {
    people: res.data.results,
    next: res.data.next,
    previous: res.data.previous,
    count: res.data.count
  });
}
