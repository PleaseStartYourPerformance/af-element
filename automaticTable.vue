<template>
  <div class="ts-table__wrapper" style="overflow: auto">
    <table
        class="ts-auto-table"
    >
      <thead>
      <tr>
        <th
            v-for="(item , index) in header"
            :key="item.title + '/' + index"
        >
          <div class="ts-cell":style="{'width':( index===1 ? 100+'px':170+'px')}">
            {{item.title}}
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          class="crude"
          v-for="(item,index) in delayerBody"
          :key="index">
        <td
            v-for="(child,childIndex ) in item.list"
            :key="childIndex"
        >
          <div
              class="ts-cell"
              :style="{
                            'text-align':isNaN(child) ? 'left' : 'right',
                            'text-indent':childIndex===0 ? ((item.level-1)*30)+'px':'',
                            'font-weight':item.level===1 ? 600 : 0
                        }">
            {{child || '-'}}
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { delayer } from '@/assets/js/tool'
  export default {
    name: "automaticTable",
    data(){
      return {
        isLoading:true
      }
    },
    props:{
      header:{
        type:Array,
        default(){ return [] },
        required:true
      },
      body:{
        type: Array,
        default(){ return [] },
        required: true
      }
    },
    computed:{
      isEmpty(){
        return  !!this.header.length && !!this.body.length;
//            :style="{width:(index == 0 ? 200+ 'px' : 'auto')}"
      },
      subHeader(){
        let children = [];
        this.header.forEach(item =>{
          if(item.children){
            children=children.concat(item.children)
          }
        });
        return children;
      },
      delayerBody(){
        return delayer(this.body);
      }
    },
    updated(){
      if(this.isEmpty){
        this.$nextTick(()=>{
          this.isLoading=false;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .ts-auto-table /deep/{
    table-layout: fixed;
    border: 1px solid #ebeef5;
    border-collapse: separate;
    min-width: 100%;
    & td,
    & th{
      padding: 12px 0;
      border-bottom: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
    }
    .ts-cell{
      display: inline-block;
      width: 100%;
      padding: 0 10px;
    }
  }
  .ts-table__empty /deep/{
    border: 1px solid #ebeef5;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }
  .crude>td:not(:first-child)>div /deep/{
    font-weight: 400 !important;
  }


</style>
