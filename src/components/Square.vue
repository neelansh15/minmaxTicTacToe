<template>
  <div class="square" :class="disable_hover">
    <div :class="result">
      <span v-if="result == 'X'">X</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["result"],
  setup(props) {
      const result = props.result
      const disable_hover = (result == '') ? 'can_hover' : ''
      return{
          disable_hover
      }
  },
};
</script>

<style scoped>
.square {
  cursor: pointer;
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
