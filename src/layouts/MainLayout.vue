<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>JGame</q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="tab">
        <q-tab name="main" label="Main" ></q-tab>
        <q-tab name="stats" label="Stats" ></q-tab>
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        transition-prev="jump-right"
        transition-next="jump-left">
        <q-tab-panel name="main">
          <GameHolder/>
        </q-tab-panel>
        <q-tab-panel name="stats">
          <Stats/>
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import GameHolder from 'components/GameHolder'
import Stats from 'src/components/Stats'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    GameHolder,
    Stats
  },

  setup () {
    return {
      tab: ref('main')
    }
  }
})
</script>
