<template>
  <div>
    <h1 class="heading">Ticc Tacc Towe</h1>
    <div class="buttons">
      <button @click="play(1)">Play the first move</button>
      <button @click="play(0)">Let computer play the first move</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
      const router = useRouter()          
      const play = (num) => {
          router.push(`/play?start=${num}`)
      }

      return{
          play
      }
  },
};
</script>

<style scoped>
.heading {
  color: white;
  font-size: 4em;
  text-align: center;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
button {
  font-weight: bold;
  color: #521c1c;
  border: none;
  font-size: 1em;
  padding: 1em 2em;
  cursor: pointer;
  background: #c63939;
  box-shadow: 20px 20px 60px #a83030, -20px -20px 60px #e44242;
  transition: 0.5s;
}
button:hover {
  background: #bd3838;
}
</style>
