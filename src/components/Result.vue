<template>
  <div>
    <div v-if="result">
      Success
      <br>
      Score => {{ score }} + {{ question.value }} = {{ score + question.value }}
    </div>
    <div v-else>
      Fail <br>
      Score => {{ score }}
    </div>
    <br>
    <q-btn label="OK" @click="next()" color="primary"/>
  </div>
</template>

<script>
export default {
  name: 'result',
  mounted() {
    this.result = this.$store.getters["game/getResult"]
    this.question = Object.assign({}, this.$store.getters["game/getQuestion"][0])
    this.score = this.$store.getters["game/getScore"]
  },
  data() {
    return {
      result: false,
      score: 0,
      question: {}
    }
  },
  methods: {
    next() {
      if (this.result) {
        this.$store.commit('game/addScore', this.question.value)
      }
      this.$parent.main()
    }
  }
}
</script>
