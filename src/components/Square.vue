<template>
  <div class="square" :class="disable_hover" @click="onSquareClick">
    <div :class="result">
      <span v-if="result == 'X'">X</span>
    </div>
  </div>
</template>

<script>
import { toRefs, computed } from "vue";
import { useStore } from "vuex";

import { mainLogic, checkWinner } from "../logic/minMaxLogic";

export default {
  props: ["id", "result"],
  setup(props) {
    let { result, id } = toRefs(props);
    const store = useStore();

    const disable_hover = computed(() =>
      result.value == "" ? "can_hover" : ""
    );
    let raw_results_array = []
    const onSquareClick = () => {
      if (result.value == "") {
        store.commit("toggle_next_move", id);

        //Main logicc
        let results_array = computed(() => store.state.results_array);
        results_array.value.forEach(element => {
            let temp = []
            element.forEach(val => {
                temp.push(val)
            })
            raw_results_array.push(temp)
        })

        console.log(raw_results_array)

        const winner = checkWinner(raw_results_array);
        if (!winner) {
          console.log(winner);
          alert("Result: " + winner);
        } else {
          const computer_move = mainLogic(raw_results_array);

          commit("toggle_comupter_move", computer_move);
        }
      }
    };

    return {
      disable_hover,
      onSquareClick,
      id,
      raw_results_array,
    };
  },
};
</script>

<style scoped>
.square {
  background: #c63939;
  width: 6em;
  height: 6em;

  display: grid;
  place-items: center;

  transition: 0.25s;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.can_hover:hover {
  cursor: pointer;
  background: #d33f3f;
}
.X {
  display: grid;
  place-items: center;
  color: #a83636;
  font-size: 2.5em;
  width: 80%;
  height: 80%;
}
.O {
  background: inherit;
  border: 0.25em solid #a83636;
  width: 30%;
  height: 30%;
  border-radius: 100%;
}
</style>
