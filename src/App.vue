<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">FakeVue</router-link>
        <router-link class="link" to="/">Noticias</router-link>
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
  font-family: "Merriweather", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.02);
}

#nav {
  padding: 20px;
  background: #42b983;
  width: 100%;

  .link {
    font-size: 18px;
    text-transform: uppercase;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 38px;
  }
}

nav {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer {
  background: #42b983;
  text-align: center;
  line-height: 5;
  height: 80px;
  color: #fff;
  font-size: 18px;
}

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
