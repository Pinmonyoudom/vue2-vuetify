<template>
  <v-navigation-drawer app>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="activateItem(index)"
        :class="{ active: activeIndex === index }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home Page", icon: "mdi-view-dashboard" },
        { title: "Purchase Order", icon: "mdi-cart" },
        { title: "Generate PDF", icon: "mdi-file-pdf-box" },        
      ],
      // activeIndex: null,
      activeIndex: -1
    };
  },
  methods: {
    activateItem(index) {
      this.activeIndex = index;
      if (this.items[index].title === 'Home Page') {
        this.$router.push({ name: 'home' });
      }
      if (this.items[index].title === 'Purchase Order') {
        this.$router.push({ name: 'purchase-order' });
      }
      if (this.items[index].title === 'Generate PDF') {
        this.$router.push({ name: 'generate-pdf' });
      }
    }
  },
  mounted(){
    if(this.$route.name === 'home'){
      this.activeIndex = 0
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #93a2b1;
  color: white;
}
</style>
