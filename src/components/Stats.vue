<template>
  <div>
    Your name: {{ name }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.name = localStorage.getItem("name")
  },
  data(){
    return{
      name: ''
    }
  }
}
</script>
