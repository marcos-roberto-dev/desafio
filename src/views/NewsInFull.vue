<template>
  <CardFull :data="newData" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardFull from "@/components/CardFull";

export default {
  name: "NewsInFull",
  props: ["filter"],
  components: {
    CardFull
  },
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
  }
};
</script>

<style>
</style>