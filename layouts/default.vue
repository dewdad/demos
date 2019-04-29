<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped app dark>
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img
              src="https://avatars1.githubusercontent.com/u/30888544?s=460&v=4"
            />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Paul Jason Cruz</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="drawer = false">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          nuxt
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
      :color="color"
      :value="true"
      fixed
      dark
      app
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
          title: 'About',
          to: '/about'
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
