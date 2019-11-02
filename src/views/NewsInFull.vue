<template>
  <h1>{{newData}}</h1>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NewsInFull",
  props: ["filter"],
  methods: {
    ...mapActions(["addClick"]),
    getFilterDate(date) {
      return this.newsData.find(item => item.date === +date);
    }
  },
  computed: {
    ...mapState(["newsData"]),
    newData() {
      return this.getFilterDate(this.filter);
    }
  },
  created() {
    if (this.newData) this.addClick(this.newData.date);
    else;
  }
};
</script>

<style>
</style>