<template>
  <v-container fluid fill-height>
    <v-layout
      v-touch="{
        left: () => doDrag,
        right: () => doDrag,
        up: () => doDrag,
        down: () => doDrag
      }"
      class="container-home"
      column
      justify-center
      align-center
      @mousemove="doDrag"
    >
      <v-flex xs12 sm8 md6>
        <div
          class="title-home display-4 hidden-sm-and-down"
          :style="titleStyle"
        >
          PAUL CRUZ DEVELOPER
        </div>
        <div class="title-home display-2 hidden-sm-and-up" :style="titleStyle">
          PAUL CRUZ DEVELOPER
        </div>
        <div class="subtitle-home"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      traX: 0,
      traY: 0,
      titleStyle: {
        backgroundPosition: ''
      }
    }
  },
  methods: {
    doDrag(e) {
      this.mouseX = e.pageX
      this.mouseY = e.pageY
      this.traX = (4 * this.mouseX) / 570 + 40
      this.traY = (4 * this.mouseY) / 570 + 50
      this.titleStyle.backgroundPosition = this.traX + '%' + this.traY + '%'
    }
  }
}
</script>

<style scoped>
.container-home {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.title-home {
  font-weight: 800;
  color: transparent;
  background: url('../assets/rainbow-nebula.jpg') repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  position: relative;
  text-align: center;
  line-height: 110px;
  letter-spacing: -8px;
  -webkit-text-stroke: 1px white;
}
.subtitle-home {
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px;
}
</style>
