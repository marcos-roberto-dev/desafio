<template>
  <div class="card-full-container">
    <h1 class="card-full-title">{{data.title}}</h1>
    <div class="card-full-date-count">
      <div class="card-full-date-source">
        <p class="card-full-date">{{date}}</p>
        <a :href="data.source" target="_blank">{{data.source}}</a>
      </div>
      <div class="card-full-count-container">
        <p title="Comentarios">
          <i class="lni-comment"></i>
          {{data.comments}}
        </p>
        <p title="Cliques">
          <i class="lni-bolt"></i>
          {{data.click}}
        </p>
      </div>
    </div>
    <p class="card-full-content">{{data.content}}</p>
  </div>
</template>

<script>
import { dateText } from "@/components/help/mixinDateText";
export default {
  name: "CardFull",
  props: ["data"],
  mixins: [dateText],
  computed: {
    date() {
      return this.toLocaleDate(this.data.date);
    }
  },
  created() {
    console.log("CARD FULL: ", this.data);
  }
};
</script>

<style lang="scss" scoped>
.card-full-container {
  margin: 60px auto;
  padding: 30px;
  box-shadow: 0 0 3px 1px rgba($color: #000000, $alpha: 0.2);
}

.card-full-title {
  font-size: 32px;
}

.card-full-date {
  margin: 10px 20px 10px 0;
  font-size: 18px;
}

.card-full-content {
  font-size: 16px;
  font-style: italic;
  text-align: justify;
}

.card-full-date-count {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-full-date-source {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 20px;
}

.card-full-count-container {
  display: flex;
}

@media screen and (max-width: 680px) {
  .card-full-title {
    font-size: 28px;
  }

  .card-full-date {
    font-size: 16px;
  }

  .card-full-content {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .card-full-date-count {
    margin: 10px 0;
  }

  .card-full-date-source {
    margin: 5px 0;
  }
}

@media screen and (max-width: 500px) {
  .card-full-title {
    font-size: 18px;
  }

  .card-full-date {
    font-size: 14px;
  }

  .card-full-content {
    font-size: 12px;
  }
}
</style>