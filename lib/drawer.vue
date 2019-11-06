<template>
  <!--v-clickoutside="close"-->
  <div class="ts-drawer">
    <transition  name="fade-in-linear">
      <div
          class="ts-drawer__modal"
          ref="drawerModal"
          v-if="modal"
          v-show="visible"
          @click.stop="close">
      </div>
    </transition>
    <div class="ts-drawer__inner" :class="{'is-show':visible}">
      <div class="ts-drawer__header">
                <span class="ts-drawer__button"  @click.stop="handleClick">
                    <slot name="header">{{name}}</slot>
                </span>
      </div>
      <transition name="el-zoom-in-top">
        <div class="ts-drawer__span" v-show="visible">
          <div class="ts-drawer__body">
            <slot></slot>
          </div>
          <div class="ts-drawer__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  // import Clickoutside from 'element-ui/src/utils/clickoutside';
  export default {
    name: "drawer",
    // directives: { Clickoutside },
    data(){
      return {
        visible:false,
      }
    },
    props:{
      name:{
        type:String,
        default:'查询面板'
      },
      modal:{
        type:Boolean,
        default:true
      }
    },
    watch:{
      visible:'toggleScrollBar'
    },
    methods:{
      handleClick(){
        this.visible=!this.visible;
      },
      close(){
        this.visible=false;
      },
      setModalStyle(){
        const parentEl=this.$parent.$el;
        if(!parentEl)return;
        const clientRect= parentEl.clientHeight;
        const modalDom=this.$refs.drawerModal;
        modalDom.style.height=clientRect + 'px';
      },
      addEvent(eventName,event){
        window.addEventListener(eventName,event)
      },
      removeEvent(eventName,event){
        window.removeEventListener(eventName,event)
      },
      toggleScrollBar(){
        const domStyle=this._parentEl;
        const scrollHeight=domStyle.scrollHeight;
        const clientHeight=domStyle.clientHeight;
        if(this.visible && scrollHeight > clientHeight){
          domStyle.style.overflow='hidden';
        }else{
          domStyle.style.overflow='';
        }
      },
      destroy(){
        this.close();
        this.removeEvent('resize',this.setModalStyle);
      }
    },
    created(){
      this.addEvent('resize',this.setModalStyle)
    },
    mounted(){
      this.setModalStyle();
      if(!this._parentEl){
        this._parentEl=this.$parent.$el;
      }
    },
    deactivated(){
      this.close();
    },
    destroyed(){
      this.destroy();
      this._parentEl=null;
    }
  }
</script>

<style lang="scss">

  .ts-drawer{
    position: relative;
    width: 100%;
    height: 25px;
  }
  .ts-drawer__header{
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    border-top: 2px solid $--color-primary;
    .ts-drawer__button{
      display: inline-block;
      padding: 2px 20px 4px;
      background-color: $--color-primary;
      border-radius: 0 0 50% 50%;
      cursor: pointer;
      user-select: none;
    }
  }
  .ts-drawer__inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1001;
    color:$--color-text-regular;
    @at-root {
      .ts-drawer__inner.is-show{
        background: $--block-background-color;
      }
    }
  }
  .ts-drawer__span{
    padding:5px 20px 25px;
  }
  .ts-drawer__footer{
    padding: 5px 0;
    margin-top: 5px;
    border-top: 1px solid $--border-color-base;
  }
  .ts-drawer__modal{
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 1000;
  }
</style>
