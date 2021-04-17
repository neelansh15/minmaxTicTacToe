<template>
  <div class="container">
    <board />
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  components: {
    Board,
  },
  setup() {},
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body{
  background: black;
}
.container {
  height: 90vh;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
