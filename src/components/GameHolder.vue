<template>
  <div>
    <Selector v-if="state === 'PLAYING'"/>
    <GameStartWindow v-if="state === 'START'"/>
    <Question v-if="state === 'QUESTION'"/>
    <Loading v-if="state === 'LOADING'"/>
  </div>
</template>

<script>
import Selector from './Selector'
import GameStartWindow from './GameStartWindow'
import Question from './Question'
import Loading from './Loading'

export default {
  name: "Holder",
  components: {
    Selector,
    GameStartWindow,
    Question,
    Loading
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
          count: 3
        }
     }).then(res => this.initCategories(res.data))
    },
    selectQuestion(catId, value){
     this.state = "QUESTION";
     this.saveState();
    },
    saveState(){
      this.$store.commit("game/setState", this.state)
    },
    initCategories(list){
      list.forEach(i => {
        i.values = [100,200,300,400,500]
      })
      this.$store.commit("game/setCategories", list)
      this.state = "PLAYING";
      this.saveState();
    },
    loading(){
      this.state = "LOADING";
    }
  },
  mounted() {

    this.state = this.$store.getters["game/someGetter"]
  }
}
</script>
