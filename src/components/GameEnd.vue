<template>
  <div>
    Your score: {{ score }}<br>
    Game end => start again?<br>
    <q-btn @click="$parent.toStart()">
      to start
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "end",
  mounted() {
    this.score = this.$store.getters["game/getScore"]
  },
  data(){
    return{
      score: 0
    }
  }
}
</script>
