<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">Portal z filmami</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <h4 class="text-white m-2">Menu</h4>
        <MovieMenu />
      </div>
      <div class="col-9 bg-success p-2">
        <h4 class="text-white m-2">Detale</h4>

        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import MovieMenu from "./MovieMenu.vue";
//import HelloWord from "./HelloWorld";
//import MovieList from "./MoviesList";
export default {
  name: "Movie",
  components: {
    MovieMenu
    //MovieList
  }
};
</script>
