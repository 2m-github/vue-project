<template>
  <v-app>
    
    <top-bar />
    <v-main>
      <router-view />
    </v-main>
    <navigation />
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue';
import TopBar from './components/TopBar.vue';

export default {
  name: 'App',

  components: {
    Navigation,
    TopBar
  },

  data: () => ({
    //
  }),
};
</script>
