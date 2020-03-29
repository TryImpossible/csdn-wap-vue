<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import { Navbar } from '@/components';
export default {
  components: {
    navbar: Navbar
  }
};
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
