<template>
  <div class="home">
    <div class="news-container">
      <ul class="news-list">
        <li class="news-item" v-for="newData in newsData" :key="newData.date">
          <router-link :to="`/${newData.date}`" class="news-title">{{newData.title}}</router-link>
          <p class="news-date">{{new Date(newData.date).toLocaleDateString("pt-BR")}}</p>
          <p class="news-content">{{newData.content.substring(newData.content.indexOf("."), 1 )}}</p>
          <a :href="newData.source" class="news-source">{{newData.source}}</a>
          <div class="box-container">
            <p>{{newData.comments}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newsData: []
    };
  },

  components: {},
  methods: {},
  created() {
    fetch("http://10.50.42.145:8080/noticias.json")
      .then(r => r.json())
      .then(r => {
        this.newsData = r;
        console.log(r);
      });
  }
};
</script>

<style scoped lang="scss">
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
  border: 1px solid black;
  padding: 20px;
}

.news-title {
  font-size: 20px;
}

.news-date {
  margin: 10px 0;
}

.news-content {
  margin-bottom: 10px;
}

.news-source {
  text-decoration: none;
  margin-bottom: 10px;
}

.box-container {
  margin-top: 10px;
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
