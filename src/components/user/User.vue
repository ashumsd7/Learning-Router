<template>
  <div class="home">
    <h2>Welcome 2 User page!!</h2>
    <p>Et c'est encore aux décor qu'elle mettrait grande la voici «la. Masque en pauvre pleure robuste c'est et moqueur et. </p>
  <button class="btn btn-success" @click="navigate">Go to Home</button>
  <br>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>
export default {

  methods: {
    navigate(){
      this.$router.push('/');
    },
  }
}

</script>


<style scoped>

</style>
