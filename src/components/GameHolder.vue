<template>
  <div class="cont">
    <Selector v-if="state === 'PLAYING'"/>
    <GameStartWindow v-if="state === 'START'"/>
    <Question v-if="state === 'QUESTION'"/>
    <Loading v-if="state === 'LOADING'"/>
    <Result v-if="state === 'RESULT'"/>
    <End v-if="state === 'END'"/>
  </div>
</template>

<script>
import Selector from './Selector'
import GameStartWindow from './GameStartWindow'
import Question from './Question'
import Result from './Result'
import Loading from './Loading'
import End from './GameEnd'

export default {
  name: "Holder",
  components: {
    Selector,
    GameStartWindow,
    Question,
    Loading,
    Result,
    End
  },
  data() {
    return {
      state: "START"
    }
  },
  methods: {
    startGame(){
      this.loading();
     this.$api.get("/categories", {
        params: {
          count: 10
        }
     }).then(res => this.initCategories(res.data))
    },
    selectQuestion(catId, value){
      this.loading()
      this.$api.get("/clues", {
        params: {
          value: value,
          category: catId
        }
      }).then(res => {
        this.$store.commit("game/setQuestion", res.data)
        this.$store.commit("game/removeQuestionValue", {catId, value})
        this.state = "QUESTION";
        this.saveState();
      })
    },
    saveState(){
      this.$store.commit("game/setState", this.state)
    },
    main(){
      this.state = "PLAYING";
      this.saveState()
    },
    initCategories(list){
      list.forEach(i => {
        i.values = [100,200,300,400,500]
      })
      this.$store.commit("game/setCategories", list)
      this.state = "PLAYING";
      this.saveState();
    },
    goToResult() {
      this.state = "RESULT";
      this.saveState()
    }
    ,
    loading(){
      this.state = "LOADING";
    },
    end(){
      this.state = "END";
      this.saveState();
    },
    toStart(){
      this.state = "START";
      this.saveState();
    }
  },
  mounted() {
    this.state = this.$store.getters["game/someGetter"]
  }
}
</script>

<style scoped>
.cont{
  text-align: center;
}
</style>
