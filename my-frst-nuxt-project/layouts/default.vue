<template>
  <div class="root-container">
    <div class="nav">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/pricing">Pricing</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style>
.root-container .VueToNuxtLogo {
  background: purple;
}

.nav a {
  height: 100px;
  background: #3b8070;
  text-decoration: none;
  font-size: 36px;
  padding: 15px;
  color: white;  
  cursor: pointer; 
}

.nav .nuxt-link-exact-active {
  background: #35495e;
}

.nav {
  margin-bottom: 15px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
