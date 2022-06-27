<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

#app {
  background: url(/img/back2.svg);
  background-size: cover;
}
#app {
  font-family: "Roboto";
}
</style>
