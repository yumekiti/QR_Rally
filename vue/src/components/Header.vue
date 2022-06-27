<template>
  <div>
    <v-app-bar
      app
      color="#ffffff"
      elevation="0"
      style="box-shadow: 0px 4px 20px rgba(205, 205, 205, 0.5) !important"
    >
      <v-toolbar-title @click="this.indexLink"> QR_Rally </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="6" sm="4" style="margin-top: 20px">
        <v-select
          :items="this.$store.state.Language"
          item-text="lang"
          item-value="value"
          label="Language"
          prepend-icon="mdi-translate"
          single-line
          @change="language($event)"
          style="font-size: 16px !important"
        ></v-select>
      </v-col>
    </v-app-bar>
  </div>
</template>
<script>
import Cookies from "js-cookie";

export default {
  name: "Header",
  props: {
    title: String,
    card: Boolean,
    lang: Boolean,
  },
  methods: {
    indexLink() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    language(value) {
      Cookies.set("language", value);
      this.$i18n.locale = value;
    },
  },
  mounted() {
    this.$i18n.locale = Cookies.get("language");
  },
};
</script>
