<template>
  <div class="container">
    <router-view />
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: #c63939;
}
.container {
  height: 90vh;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
