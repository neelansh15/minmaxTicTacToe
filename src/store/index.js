import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      next_move: "O", //TODO: Set according to route, upon mount of /play
      results_array: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  },
  mutations: {
    toggle_next_move(state, payload) {
      state.results_array[Math.floor(payload.value / 3)][payload.value % 3] = state.next_move
      if (state.next_move == "O") {
        state.next_move = "X";
      } else {
        state.next_move = "O";
      }
    },
  },
});

export default store;
