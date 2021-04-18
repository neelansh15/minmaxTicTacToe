import { createStore } from 'vuex'
import { mainLogic, checkWinner } from '../logic/minMaxLogic'

const store = createStore({
	state() {
		return {
			next_move: 'X', //TODO: Set according to route, upon mount of /play
			results_array: [
                ["X", "O", ""],
                ["", "", ""],
                ["", "", ""],
            ],
			api_url: 'http://localhost:5000'
		}
	},
	mutations: {
		toggle_next_move(state, payload) {
			state.results_array[Math.floor(payload.value / 3)][payload.value % 3] =
				state.next_move
			if (state.next_move == 'O') {
				state.next_move = 'X'
			} else {
				state.next_move = 'O'
			}
		},
		toggle_computer_move(state, payload) {
			state.results_array[payload.row][payload.column] = state.next_move
			if (state.next_move == 'O') {
				state.next_move = 'X'
			} else {
				state.next_move = 'O'
			}
		},
	},
})

export default store
