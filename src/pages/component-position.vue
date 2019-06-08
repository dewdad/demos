<template>
  <div class="demo-container">
    <h1>Top offset</h1>
    <div id="container-7384" class="overflow-auto h-screen">
      <div
        class="list-item-tracked w-full h-56 "
        v-for="i in 10"
        :key="'item-' + i"
        :id="'item-' + i"
      >
        <div> {{i}} </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    mounted(){
        var options = {
            root: document.querySelector('#container-7384'),
            rootMargin: '0px',
            threshold: 1.0
        }

        var observer = new IntersectionObserver(this.scrollHandler, options);
        var target = document.querySelector('#item-1');
        observer.observe(target)
    },
    methods:{
        scrollHandler(entries, observer){
            console.log({entries, observer})

            const firstEntry = entries[0];
            if (firstEntry.isIntersecting) {
                // Handle intersection here...
            }
        }
    }
}
</script>