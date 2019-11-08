<template>
  <div>
    <el-button
        type="primary"
        size="mini"
        @click="excelExport">{{buttonName}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'button',
    props:{
      buttonName:{
        type:String,
        default:'导出'
      },
      path:{
        type:String,
        default:''
      },
      data:{
        type:Object,
        default(){
          return {}
        }
      },
      type:{
        type:String,
        default:'get'
      },
      fileName:{
        type:String,
        default:'文件'
      },
      fileSuffix:{
        type:String,
        default:'.xls'
      }
    },
    methods:{
      excelExport(){
        if(this.type === 'get'){
          this.axios.get(this.path,{
            params:this.data,
            responseType:"blob" // get方式blob放在这里
          }).then(res=>{
            const url = URL.createObjectURL(res.data);
            const el = document.createElement("a");
            el.href = url;
            el.style.display = "none";
            el.setAttribute("download", decodeURI(this.fileName + this.fileSuffix));
            document.body.appendChild(el);
            el.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(el);
          })
        }else{
          this.axios.post(this.path,{data:this.data,},{
            responseType:"blob"
          }).then(res=>{
            const url = URL.createObjectURL(res.data);
            const el = document.createElement("a");
            el.href = url;
            el.style.display = "none";
            el.setAttribute("download", decodeURI(this.fileName + this.fileSuffix));
            document.body.appendChild(el);
            el.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(el);
          })
        }

      }
    }

  }
</script>

<style scoped>

</style>