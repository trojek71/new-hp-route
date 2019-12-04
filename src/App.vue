<template>
  <movie />
</template>

<script>
import Movie from "./components/Movie.vue";

export default {
  name: "app",
  components: {
    Movie
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
