import { createStore } from "vuex";
import { mainLogic, checkWinner } from "../logic/minMaxLogic";

const store = createStore({
  state() {
    return {
      next_move: "X", //TODO: Set according to route, upon mount of /play
      results_array: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  },
  mutations: {
    toggle_next_move(state, payload) {
      state.results_array[Math.floor(payload.value / 3)][payload.value % 3] =
        state.next_move;
      if (state.next_move == "O") {
        state.next_move = "X";
      } else {
        state.next_move = "O";
      }

      const raw_results_array = state.results_array;

      const winner = checkWinner(raw_results_array);
      if (!winner) {
        console.log(winner);
        alert("Result: " + winner);
      } else {
        const computer_move = mainLogic(raw_results_array);

        state.results_array[computer_move.row][computer_move.column] =
          state.next_move;
        if (state.next_move == "O") {
          state.next_move = "X";
        } else {
          state.next_move = "O";
        }
      }
    },
  },
});

export default store;
