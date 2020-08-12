<template>
  <div id="app">
    <h5>Welcome!!!!</h5>
    <hr>
    <!-- <appHeader></appHeader> -->
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <hr>
     <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>

// import Header from './components/Header'
export default {
  name: 'App',
 components:{
    // appHeader:Header
 }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
