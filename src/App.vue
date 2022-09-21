<template>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  /* overflow: visible; */
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /* overflow: hidden; */
}

nav {
  padding: 30px;
}
a{
  text-decoration: none;
  color:inherit;
}
 

a.router-link-exact-active {
  color: #2c3e50;

}
</style>
