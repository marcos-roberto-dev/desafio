<template>
  <div>
    <h1>{{data.title}}</h1>
    <p>{{date}}</p>
    <p>{{data.content}}</p>
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

<style>
</style>