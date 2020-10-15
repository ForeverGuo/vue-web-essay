import { createStore } from "vuex";

const store = createStore({
  state: {
    spinning: false
  },
  mutations: {
    changeSpinning(state) {
      state.spinning = !state.spinning;
    }
  },
  actions: {},
  modules: {}
});

export default store;
