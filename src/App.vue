<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">FakeNews</router-link>
      </nav>
    </div>

    <router-view class="container" />
    <footer>Todos os direitos</footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchDataNews"])
  },
  created() {
    this.fetchDataNews("/noticias.json");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#nav {
  padding: 20px;
  background: #42b983;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 38px;

    &.router-link-exact-active {
    }
  }
}

nav {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

footer {
  margin-top: 60px;
  background: #42b983;
  text-align: center;
  line-height: 5;
  height: 80px;
  color: #fff;
  font-size: 18px;
}

.container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>
