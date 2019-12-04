<template>
  <div class="container-fluid">
    <div id="MovieMenu">
      <ul>
        <li>
          <router-link to="/">Moje Filmy</router-link>
        </li>
        <li>
          <router-link to="/lista">Lista filmów</router-link>
        </li>
        <li>
          <router-link to="/dodaj">Dodaj film</router-link>
        </li>
        <li>
          <router-link to="/kasuj">Kasuj film</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//import MoviesList from "./components/MoviesList.vue";
//import AddMovie from "./components/AddMovie.vue";
export default {
  name: "MovieMenu"
};
</script>
<style>
li {
  list-style-type: none;
}
</style>