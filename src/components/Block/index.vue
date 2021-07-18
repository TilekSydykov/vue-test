<template >
<div class="blocker" v-if="name === '' || name === undefined || name === null">
  <div class="form">
    <q-form @submit="onSubmit">
      <q-input
          type="text"
          v-model="submitName"
          label="Your name *"
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
  mounted(){
    this.name = window.localStorage.getItem("name")
  },
  data(){
    return{
      name: '',
      submitName: ''
    }
  },
  methods: {
    onSubmit(){
      if(this.submitName.match(/[a-zA-Z0-9а-яА-Я_]/gi).join('') === this.submitName){
        this.name = this.submitName
        window.localStorage.setItem("name", this.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blocker{
  position: absolute;
  z-index: 100000000;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
}
.form{
  width: 500px;
  margin: 100px auto;
}
</style>
