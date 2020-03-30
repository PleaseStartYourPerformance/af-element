<template>
  <div>
    <div :class="['diglog-tab']" :style="{marginLeft:num,...diglog_tab1_style} ">
      <div class="diglog-tab2" @click="leftClick" :style="diglog_tab2_style">
        <i :class="['icon-class',mar_lef ? 'el-icon-caret-left': 'el-icon-caret-right']"></i>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      diglog_tab1_style:{
        type:Object,
        default(){
          return []
        }
      },
      diglog_tab2_style:{
        type:Object,
        default(){
          return []
        }
      },
      show_style:{
        type:String,
        default:''
      },
      hide_style:{
        type:String,
        default:''
      },
    },
    data(){
      return {
        mar_lef:false,
        num:'0'
      }
    },
    methods: {
      leftClick(){
        this.mar_lef = !this.mar_lef;
        this.num = this.mar_lef ?  this.show_style : this.hide_style
      },
    },
    created() {
      this.num = this.hide_style
    }
  };
</script>
<style scoped lang="scss">
  .diglog-tab{
    position: absolute;
    cursor: pointer;
    width: 250px;
    height: 172px;
    top:67%;
    left:0;
    background: #fff;
    border: 1px solid #ebeef5;
    z-index: 10;
    transition: all 500ms linear 0ms;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .diglog-tab2{
    position: absolute;
    top: 40%;
    right:-12px;
    width: 13px;
    height: 60px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #ebeef5;
    background: #fff;
    border-left: 0;
    z-index: 999;
  }
  .icon-class{
    line-height: 56px;
    font-size: 18px;
    color:#999;
    margin-left: -2px;
  }
</style>