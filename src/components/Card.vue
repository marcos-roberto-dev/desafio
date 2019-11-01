<template>
  <li class="news-item">
    <router-link :to="`/${newData.date}`" class="news-title">{{newData.title}}</router-link>
    <p class="news-date">{{ date}}</p>
    <p class="news-content">{{content}}...</p>
    <a :href="newData.source" class="news-source">{{newData.source}}</a>
    <div class="box-container">
      <p>{{newData.comments}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: ["newData"],
  computed: {
    date() {
      return this.toLocaleDate(this.newData.date);
    },
    content() {
      return this.simpleText(this.newData.content);
    }
  },
  methods: {
    toLocaleDate(text) {
      return new Date(text).toLocaleDateString("pt-BR");
    },
    simpleText(text) {
      return text.substring(text.indexOf("."), 1);
    }
  }
};
</script>

<style lang="scss" scoped>
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

@media screen and(max-width: 860px) {
  .news-item:nth-last-child(1) {
    grid-column: span 2;
  }
}

@media screen and(max-width: 540px) {
  .news-item:nth-last-child(1) {
    grid-column: span 1;
  }
}
</style>