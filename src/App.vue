<template>
  <div id="app">
    <navbar />
    <router-view />
    <div-footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Foot from "./components/Foot.vue";
export default {
  components: { navbar: Navbar, "div-footer": Foot },
  computed: {
    navHeight() {
      var nav = document.querySelector("nav");
      return 153 + "px";
    }
  }
};
</script>


<style lang="scss">
#app {
  position: relative;
  overflow: hidden;
}
</style>
