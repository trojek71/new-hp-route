/* eslint-disable-next-line */
<template>
  <table>
    <thead>
      <tr>
        <th class="text-left">Tytuł</th>
        <th class="text-left">Reżyser</th>
        <th class="text-left">Muzyka</th>
        <th class="text-left">Premiera</th>
      </tr>
    </thead>
    <thead></thead>

    <tbody>
      <tr v-for="movie in movies" :key="movie.id">
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.composer }}</td>
        <td>{{ movie.release_date }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
//import MovieItem from "./MovieItem";
import gql from "graphql-tag";
const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      director
      composer
      release_date
    }
  }
`;
export default {
  name: "MoviesList",
  //components: { MovieItem },
  data() {
    return {
      movies: []
    };
  },
  apollo: {
    movies: {
      query: GET_MOVIES
    }
  },

  computed: {
    columns: function columns() {
      if (this.movies.length == 0) {
        return [];
      }
      return Object.keys(this.movies[0]);
    }
  }
};
</script>
<style>
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
