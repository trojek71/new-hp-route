<template>
  <div>
    <tr :key="movie.id">
      <td>{{ movie.title }}</td>
      <td>{{ movie.director }}</td>
      <td>{{ movie.composer }}</td>
      <td>{{ movie.release_date }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"]
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
