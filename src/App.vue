<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './view/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #484848;
  margin-top: 10px;
}
.btn {
  border:none;
  padding: 10px 35px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}
h1,h2,h3,h4,h5 {
    color: #484848;

}
.add-btn {
  background:#9A7EE6;
  color: #fff;
}
.add-btn:hover {
  background: rgb(165, 141, 231);
} 
.search-btn {
  background: #5EC993;
  color: #fff;

}
.search-btn:hover {
  background: rgb(62, 192, 142);
}
*:focus {
  outline: none;
}
</style>
