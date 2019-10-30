<template>
  <div>
    <button
    :class="['af-button',afColor,afSize,afRound]"
    @click="handleClick"
    :type="type"
    :disabled="disabled"
    >
    <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'button',
  props:{
      type:{
        type:String,
        default:'none'
      },
      size:{
          type:String,
          default:'mini'
      },
      round:{
        type:Boolean,
        default:false
      },
    disabled:{
      type:Boolean,
      default:false
    }
     
  },
  computed:{
    afColor(){
      const CLASS = this.type === 'primary'?'af-button-primary' : 
                    this.type==='success' ? 'af-button-success' :
                    this.type === 'info' ? 'af-button-info':
                    this.type === 'warning'? 'af-button-warning' :
                    this.type === 'danger'? 'af-button-danger' : ''
      return CLASS                    
    },
    afSize(){
      const SIZE = this.size === 'mini' ? 'af-size-mini' :
                  this.size === 'small ' ? 'af-size-small ' : ''
      return SIZE
    },
    afRound(){
      const round = this.round ? 'af-button-round' : ''
      return round
    }
  },
  methods:{
    handleClick(data){
      this.$emit('click',data)
    }
  }

}
</script>

<style scoped>
  @import '@/public/css/index.css';
  .af-button{
    display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      }
  .af-button-primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .af-button-success{
     color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
    .af-button-info{
     color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
    .af-button-warning{
     color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
    .af-button-danger{
     color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  .af-size-mini{
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  .af-size-small{
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  .af-button-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
</style>