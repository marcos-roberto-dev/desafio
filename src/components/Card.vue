<template>
  <router-link
    :to="{name: 'news', params: {filter: newData.date, newData}}"
    tag="a"
    class="news-item"
  >
    <h1 class="news-title">{{newData.title}}</h1>
    <p class="news-date">{{ date}}</p>
    <p class="news-content">{{content}}...</p>
    <a :href="newData.source" class="news-source">{{newData.source}}</a>
    <div class="box-container">
      <div class="news-comment-container">
        <i class="icon lni-comment"></i>
        <p>{{newData.comments}}</p>
      </div>
      <div class="news-click-container">
        <i class="icon lni-bolt"></i>
        <p>{{newData.click}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { dateText } from "@/components/help/mixinDateText";
export default {
  name: "Card",
  mixins: [dateText],
  props: ["newData"],
  computed: {
    date() {
      return this.toLocaleDate(this.newData.date);
    },
    content() {
      return this.simpleText(this.newData.content);
    }
  }
};
</script>

<style lang="scss" scoped>
.news-item {
  box-shadow: 0 0 3px 1px rgba($color: #000000, $alpha: 0.2);
  padding: 20px;
  color: #2c3e50;
  text-decoration: none;
}

.news-title {
  font-size: 20px;
  font-weight: 800;
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

.news-comment-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.icon {
  margin-right: 5px;
}

.news-click-container {
  display: flex;
  align-items: center;
}

.box-container {
  margin-top: 10px;
  display: flex;

  p {
    & + p {
      margin-left: 10px;
    }
  }
}

@media screen and(max-width: 860px) {
  .news-item:nth-last-child(1) {
    grid-column: span 2;
  }
}

@media screen and(max-width: 680px) {
  .news-item:nth-last-child(1) {
    grid-column: span 1;
  }
}
</style>