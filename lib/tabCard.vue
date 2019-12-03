<template>
  <div>
    <div class="tab-text">
      <div v-for="item in data" :key="item.key">
        <div class="top-size" :style="topStyle">{{item.val}}</div>
        <div  class="bottom-size" :style="bottomStyle">{{item.text}}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:Array,
        default(){
          return []
        }
      },
      topStyle:{
        type:String,
        default:'font-size: 32px;'
      },
      bottomStyle:{
        type:String,
        default:'font-size: 16px;color: #a9a9a9;'
      },

    },
  }
</script>

<style scoped>
  .tab-text{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .top-size{
    text-align: center;
  }
  .bottom-size{
    text-align: center;
    margin-top: 10px;
  }
</style>