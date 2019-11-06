<template>
  <div>
    <el-dialog
        :title="title"
        :visible.sync="isShow"
        width="60%"
        :before-close="digClose">
      <el-tabs v-model="activeName" tab-position="left" class="tabls">
        <el-tab-pane v-for="(item,index) in tabs" :key="index" :label="item.label" :name="item.name" :disabled="item.disable" class="tabs">
          <slot :name="item.slot"></slot>
        </el-tab-pane>
        <span  class="dialog-foot">
          <el-button size="mini" @click="backGo" :disabled="activeName==='1' ? true : false">返回</el-button>
          <el-button size="mini" type="primary" @click="nextTo">{{nextButton}}</el-button>
        </span>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: "biglog",
    data() {
      return {
        isShow:false,
        nextButton:'下一步',
        activeName:'1'
      }
    },
    props:{
      show:{
        type:Boolean,
        default:false,
      },
      title:{
        type:String,
        default:'新建方案向导',
      },
      tabs:{
        type:Array,
        default:()=>{
          return []
        }
      },
      ruleFun:{
        type:Function,
        default:()=>{
          return false
        }
      },
    },
    watch:{
      show(val){
        this.isShow = val
      },
    },
    methods: {
      backGo(){
        if(+this.activeName < this.tabs.length+1){
          let data =  +this.activeName-1;
          this.setTabs(data)
        }
        this.$emit('update:tabs',this.tabs)
      },
      nextTo(){
        console.log(this.ruleFun());
        if(this.ruleFun()){
          if(+this.activeName < this.tabs.length){
            let data =  +this.activeName+1;
            this.setTabs(data)
            this.$emit('nextCallback',this.activeName)
          }else{
            this.$emit('computedSave')
          }
          this.$emit('update:tabs',this.tabs)
        }else{
          this.msg('warning','校验失败，请验证校验规则')
        }
      },
      setTabs(data){
        this.activeName = data.toString();
        this.tabs.forEach((item)=>{
          if( item.name === this.activeName){
            item.disable = false
          }
        })
        this.tabs.length === +this.activeName ?
            this.nextButton = '计算保存' :
            this.nextButton = '下一步';
      },
      //关闭弹框
      digClose(){
        this.isShow = false
        this.$emit('update:show',false)
      },
      msg(type,msg){
        this.$message({
          type:type,
          message:msg
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .ts-block {
    height: 100%;
  }
  /deep/.el-tabs .el-tabs__header{
    height: 500px;
    background: #ECF5FF;
  }
  /deep/.el-tabs__item.is-disabled{
    color: #c0c4cc;
    font-size: 12px!important;
  }
  /deep/.el-tabs__item{
    font-size: 12px!important;
  }
  /deep/.el-tabs--left .el-tabs__item.is-left{
    text-align: left;
  }
  /deep/.el-dialog__body{
    padding:0
  }
  /deep/.el-dialog__footer{
    padding:0
  }
  /deep/.el-tabs__content{
    height: 500px;
  }
  /deep/.el-tabs__item.is-active {
    color: #fff;
    background: #409eff;
  }
  /deep/.el-dialog__title{
    font-size: 22px;
  }
  /deep/.el-dialog__header{
    padding: 15px 20px 20px 20px;
    font-weight: 600;
  }
  .dialog-foot{
    position: absolute;
    bottom: 15px;
    float: right;
    right: 20px;
  }
  .tabls{
    position: relative;
  }
</style>