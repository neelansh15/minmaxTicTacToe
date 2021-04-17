<template>
  <div class="grid">
    <square v-for="(result, i) in results" :key="i" :id="i" :result="result" />
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'

import Square from "./Square.vue";

export default {
  components: { Square },
  setup() {
    const store = useStore()

    let results_array = computed(() => store.state.results_array)

    const route = useRoute();

    //For Compatibility with nested structure while maintaining clean UI
    let results = ref([]);
    
    watchEffect(() => {
      results.value = []
      results_array.value.forEach((subArray) => {
        subArray.forEach((element) => {
          results.value.push(element);
        });
      });
    });

    let next_move = computed(() => store.state.next_move)

    return {
      results,
      first_move: route.query.start,
      next_move
    };
  },
};
</script>

<style scoped>
.grid {
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.1em;

  border-radius: 50px;
  background: #b13838;
  box-shadow: 20px 20px 60px #a83030, -20px -20px 60px #e44242;
}
</style>
