<template>
  <div class="home">
    <div class="news-container">
      <ul class="news-list">
        <Card v-for="newData in newArr" :key="newData.date" :newData="newData" />
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["newsData"]),
    newArr() {
      return this.sort(this.newsData);
    }
  },
  components: { Card },
  methods: {
    sort(arr) {
      return arr.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  flex: 1;
  padding: 20px;
  display: flex;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px 0;
  list-style: none;
}

@media screen and(max-width: 960px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and(max-width: 700px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
