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
  color: #2c3e50;
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
.add-btn {
  background:#9A7EE6;
  color: #fff;
}
.add-btn:hover {
  background: rgb(165, 141, 231);
} 
.search-btn {
  background: rgb(49, 199, 141);
  color: #fff;

}
.search-btn:hover {
  background: rgb(62, 192, 142);
}
*:focus {
  outline: none;
}
</style>
