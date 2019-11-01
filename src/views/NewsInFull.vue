<template>
  <h1>{{fetchData}}</h1>
</template>

<script>
import { API } from "@/services/api";

export default {
  name: "NewsInFull",
  data() {
    return {
      fetchData: {}
    };
  },
  props: ["filter"],
  methods: {
    async newsInFull() {
      const { data } = await API.get("/noticias.json");
      const select = data.find(news => news.date === this.filter);
      this.fetchData = { ...select };
    }
  },
  created() {
    this.newsInFull();
  }
};
</script>

<style>
</style>