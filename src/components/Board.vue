<template>
  <div class="grid">
    <square v-for="result in results" :key="result" :id="n" :result="result" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import Square from './Square.vue';
export default {
  components: { Square },
  setup() {
      let results_array = ref([
          ['X', 'O', 'X'],
          ['X', 'O', 'X'],
          ['O', 'X', 'O'],
      ])

    const route = useRoute()

    //For Compatibility with nested structure while maintaining clean UI
    let results = ref([])
    results_array.value.forEach(subArray => {
        subArray.forEach(element => {
            results.value.push(element)
        })
    })
      
      return{
          results,
          first_move: route.query.start
      }
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
