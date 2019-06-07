<template>
  <div class="demo-container">
    <h1>Top offset</h1>
    <div id="container-7384" class="overflow-auto h-screen">
      <div
        v-view:container-7384="viewHandler"
        class="w-full h-56 "
        v-for="i in 10"
        :key="'item-' + i"
        :id="'item=' + i"
      >
        <div> {{i}} </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        viewHandler (e) {
            console.log(e) // 'enter', 'exit', 'progress'
        }
    }
}
</script>