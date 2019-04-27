<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <Sidebar />
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Markdown Notes</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div class="main-content-wrapper">
        <Nuxt></Nuxt>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  components: { Sidebar },
  data: () => ({
    drawer: null
  })
}
</script>
<style>
.main-content-wrapper {
  width: 100%;
  height: 100%;
}
</style>
