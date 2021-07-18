<template>
  <div>
    <h5>{{ question.question }}</h5>
    Time left: {{ timeLeft }}
    <div class="form">
      <q-form @submit="onSubmit">
        <q-input
          type="text"
          v-model="answer"
          label="Your answer"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>
        <br>
        <q-btn label="Submit" type="submit" color="primary"/>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: [
    'id',
    'value'
  ],
  mounted() {
    this.question = Object.assign({}, this.$store.getters["game/getQuestion"][0]);
    this.$store.commit("game/startQuestion");
    this.timer = Object.assign({}, this.$store.getters["game/getTimer"])
    this.tick();
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.tick, 1000);
  },
  unmounted() {
    clearInterval(this.intervalID)
  },
  data(){
    return {
      question: {},
      answer: '',
      timeLeft: 60,
      timer: {},
      intervalID: 0
    }
  },
  methods: {
    tick(){
      this.timeLeft = 60 - Math.floor(( Date.now() - this.timer.startedTime ) / 1000);
      if(this.timeLeft <= 0){
        this.onSubmit();
      }
    },
    onSubmit(){
      this.$store.commit("game/setLastResult", this.question.answer === this.answer)
      this.$parent.goToResult()
    },
  }
}
</script>
