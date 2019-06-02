<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/calendar">V-Calendar Demo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="postcss">

h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}
</style>

<style lang="stylus" scoped>
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>

