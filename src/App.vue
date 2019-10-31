<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">FakeNews</router-link>
      </nav>
    </div>
    <router-view />
    <footer>Todos os direitos</footer>
  </div>
</template>

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
}

#nav {
  padding: 20px;
  background: #42b983;

  a {
    font-weight: bold;
    color: #2c3e50;

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
}
</style>
