<template>
    <div class="grid">
        <div v-for="n in 9" :key="n" class="square">{{n}}</div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.grid{
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.square{
    width: 6em;
    height: 6em;
    background-color: #eee;

    display: grid;
    place-items: center;
}
.square:nth-child(odd){
    background-color: #ccc;
}
</style>
