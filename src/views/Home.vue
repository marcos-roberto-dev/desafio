<template>
  <div class="home">
    <div class="news-container">
      <ul class="news-list">
        <Card v-for="newData in newsData" :key="newData.date" :newData="newData" />
      </ul>
    </div>
  </div>
</template>

<script>
import { API } from "@/services/api";
import Card from "@/components/Card";

export default {
  name: "home",
  data() {
    return {
      newsData: []
    };
  },

  components: { Card },
  methods: {
    async getNews() {
      const { data } = await API.get("noticias.json");
      this.newsData = [...data];
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped lang="scss">
.home {
  flex: 1;
  padding: 20px;
}

.news-list {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
  list-style: none;
}

.news-item {
}

@media screen and(max-width: 860px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and(max-width: 540px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
