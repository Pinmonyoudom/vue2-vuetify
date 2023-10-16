<template>
  <v-app>
    <v-main>
      <SideBar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  name: "App",

  components: {
    SideBar,
  },

  data: () => ({}),
};
</script>
