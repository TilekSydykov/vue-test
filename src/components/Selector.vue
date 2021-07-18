<template>
  <div class="q-pa-md">
    <q-list class="list">
      <q-item class="item" v-for="(item, index) in game.categories" :key="item.id">
        <div class="button question">
          {{ index + 1 }} - {{ item.title }}
        </div>
        <div class="button variant" v-for="i in 5" :key="i" @click="questionSelect(index, i * 100)">
          {{ i * 100 }}
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  methods: {
    questionSelect(categoryIndex, value){
      console.log(categoryIndex, value)
    }
  },
  data(){
    return{
        game: {
          categories: [],
        }
    }
  },
  mounted() {
    this.game = Object.assign({}, this.$store.state.game)
  }
}
</script>

<style lang="scss" scoped>
.button{
  padding: 20px;
  background: #cdcdcd;
  margin: 5px;
}
.question {
  width: 200px;
}
.variant{
  cursor: pointer;
}
</style>

