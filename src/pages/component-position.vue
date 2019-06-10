<template>
  <div class="demo-container">
    <h1>Top offset</h1>
    <div id="meeting-scroll-container" @scroll="onItemsScroll" class="overflow-auto h-screen mt-20 border-2">
      <div
        class="list-item-tracked w-full border"
        :style="{height: randomHeight(i)}"
        v-for="i in 10"
        :key="'item-' + i"
        :id="'item-' + i"
      >
        <div> {{i}} </div>
      </div>
      <div class="h-64 bg-gray-800" />
    </div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
export default {
    data(){
      return {
        meetingContainerTopOffset: null
      }
    },
    mounted(){
      this.meetingContainerTopOffset = document.querySelector('#meeting-scroll-container').getBoundingClientRect().y
    },
    methods:{
      randomHeight: () => (Math.random() * (12 - 4) + 4)+'rem',
      onItemsScroll: debounce(function(evt){
        const items = evt.target.querySelectorAll('.list-item-tracked')
        const meetingContainerTopOffset = document.querySelector('#meeting-scroll-container').getBoundingClientRect().y
        let nearestToTopItem = null
        let nearestToTopValue = Infinity
        for(let i=0, len = items.length; i<len; i++){
          let itemOffsetFromTop = Math.abs(items[i].getBoundingClientRect().y - meetingContainerTopOffset)
          if(itemOffsetFromTop < nearestToTopValue){
            nearestToTopValue = itemOffsetFromTop;
            nearestToTopItem = items[i];
          }else break
        }
        window.topItemId = nearestToTopItem.id
        console.log({id: nearestToTopItem.id, offset: nearestToTopItem.getBoundingClientRect().y - meetingContainerTopOffset})
      }, 300)
    }
}
</script>