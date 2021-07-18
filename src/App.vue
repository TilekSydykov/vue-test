<template>
  <Block/>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import Block from 'components/Block';

export default defineComponent({
  name: 'App',
  components:{
    Block
  }
})
</script>
