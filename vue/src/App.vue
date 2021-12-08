<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style>
#app {
  background: url(/img/back2.svg);
  background-size: cover;
}
#app {
  font-family: 'Source Sans Pro', sans-serif, MyYuGothicM, YuGothic, sans-serif;
}
</style>