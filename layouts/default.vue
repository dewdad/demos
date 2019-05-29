<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          flat
          dark
          nuxt
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <transition name="fade">
          <nuxt />
        </transition>
      </v-container>
    </v-content>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      dark
      app
      class="hidden-md-and-up"
    >
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        flat
        dark
        nuxt
        :to="item.to"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      bottomNav: 0,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'V-Calendar',
          to: '/v-calendar'
        },
        // {
        //   icon: 'collections',
        //   title: 'Portfolio',
        //   to: '/portfolio'
        // },
        {
          icon: 'call_end',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
