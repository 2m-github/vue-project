<template>
  <v-app>
    

    <v-main>
      <router-view />
      
    </v-main>
    <navigation />
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
