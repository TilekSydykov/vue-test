<template>
  <div>
    Your name: {{ name }}<br>
    Your score: {{ score }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.name = localStorage.getItem("name")
    this.score = this.$store.getters["game/getScore"]
  },
  data(){
    return{
      name: '',
      score: 0
    }
  }
}
</script>
