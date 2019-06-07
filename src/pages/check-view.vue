<template>
  <div class="demo-container">
    <h1>Scroll to view animations. Total 1001 items.</h1>
    <div class="overflow-auto h-screen">
      <div
        class="item"
        v-view="viewHandler"
        v-view.once
        v-for="i in 100"
        :key="'item-' + i"
        :id="'item=' + i"
      >
        Percents of this element ({{ i }}): type - {{ viewEvent.type }}, in view - {{ viewEvent.percentInView }}, top view - {{ viewEvent.percentTop }}, center - {{ viewEvent.percentCenter }}
        <br>
        Once datetime: {{ onceTime && onceTime.toISOString() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onceTime: null,
      viewEvent: {
        type: "",
        percentInView: 0,
        percentTop: 0,
        percentCenter: 0
      }
    };
  },
  methods: {
    viewHandler(e) {
      console.log(e);
      if (e.type === "exit") return;
      Object.assign(this.viewEvent, e);
    },
    onceHandler(e) {
      console.log(e);
      this.onceTime = new Date();
    }
  }
};
</script>

<style scoped>
.item {
  color: #ccc;
  margin-top: 1rem;
  border: 1px solid #333;
  opacity: 0.2;
  background-color: #555;
  height: 25vh;
  transition: opacity 1s 0.1s, border 1s, background-color 1s, color 1s 0.2s;
}
.item.view-in--gt-half {
  color: #333;
  border: 1px solid blue;
  opacity: 0.5;
}
.item.view-in--full {
  opacity: 1;
  background-color: #fff;
  color: #333;
  border: 1px solid #0f0;
}
</style>