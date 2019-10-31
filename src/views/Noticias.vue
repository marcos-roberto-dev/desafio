<template>
  <div class="News">
    <h1>Noticias</h1>
    {{newsItem}}
  </div>
</template>

<script>
export default {
  name: "Noticias",
  data() {
    return {
      newsData: [],
      newsItem: {}
    };
  },
  props: ["filter"],
  created() {
    fetch("http://10.50.42.145:8080/noticias.json")
      .then(r => r.json())
      .then(r => {
        this.newsData = r;
      });
  },
  mounted() {
    let select = this.newsData.filter(item => item.date === this.filter);
    this.newsItem = { ...select };
  }
};
</script>

<style>
</style>