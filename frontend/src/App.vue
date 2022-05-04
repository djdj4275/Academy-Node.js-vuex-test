<template>
  <div id="app">
    <div v-if="$store.state.user">
      <span>{{$store.state.user}}님 환영합니다</span>
      <button>로그아웃</button>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
