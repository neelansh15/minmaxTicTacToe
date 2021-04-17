<template>
    <div class="square">
        <div :class="result">
            <span v-if="result == 'X'">X</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['id', 'result'],
    setup() {
    },
}
</script>

<style scoped>
.square {
  background: #c63939;
  width: 6em;
  height: 6em;

  display: grid;
  place-items: center;
}
.X{
    display: grid;
    place-items: center;
    color: #a83636;
    font-size: 2.5em;
    width: 80%;
    height: 80%;
}
.O{
    background: inherit;
    border: 0.25em solid #a83636;
    width: 30%;
    height: 30%;
    border-radius: 100%;
}
</style>
