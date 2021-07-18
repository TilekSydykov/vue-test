<template>
    <div class="selector">
      <div class="list">
        <div  class="item" v-for="(item, index) in game.categories" :key="item.id">
          <div class="btn-cont">
            <div class="button question">
              {{ item.title }}
            </div>
          </div>
          <div class="bnt-cont" v-for="i in 5" :key="i">
            <div class="button variant" v-if="item.values.includes(i * 100)" @click="questionSelect(index, i * 100)">
              {{ i * 100 }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    questionSelect(categoryIndex, value){
      this.$parent.selectQuestion(this.game.categories[categoryIndex].id, value)
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
    let count = 0;
    this.game.categories.forEach(r => {
      count += r.values.length;
    })
    if(count === 0){
      this.$parent.end();
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  background: #cdcdcd;
  padding: 20px;
  margin: 5px;
}
.bnt-cont{
  min-width: 100px;
}
.question {
  width: 200px;
  background: #31CCEC;
}
.item{
  display: inline-flex;
}
.variant{
  cursor: pointer;
}
.selector{
  margin: 0 auto;
  width: auto;
}
</style>

