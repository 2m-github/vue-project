<template>
  <v-app>
    
    <top-bar />
    <v-main>
      <router-view />
    </v-main>
    <navigation />
    <confirm-dialog v-if="$store.state.confirmDialog" />
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue';
import TopBar from './components/TopBar.vue';
import ConfirmDialog from './components/ConfirmDialog.vue'

export default {
  name: 'App',

  components: {
    Navigation,
    TopBar,
    ConfirmDialog
  },

  data: () => ({
    //
  }),
};
</script>
