<template>
  <h1>{{newData}}</h1>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewsInFull",
  props: ["filter", "newData"],
  methods: {
    ...mapActions(["addClick"])
  },
  created() {
    this.addClick(this.newData.date);
  }
};
</script>

<style>
</style>