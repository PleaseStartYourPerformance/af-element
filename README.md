# af-element
UI-开源组件库，会封装一些element-ui的组件，使其更方便达到我们的需求，
也会独自开发一些组件使用，因时间有限不定期更新中
项目无法启动请下载后自行查看代码使用
# 安装

```
npm i af-elements
npm i element-ui -S
```
# 在main.js引入
```
import afComponents from 'af-element'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(afComponents)
```
# 使用示例
```
<af-button ><af-button/>
```

# 按钮

参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
size|按钮size|String|mini/small/medium|mini
type|按钮类型|String|primary/success/info/warning/danger|无类型
round|是否圆角|Boolean|true/false|false
@click|点击事件|-|-|-



# slot

名称|说明
--:|--:
-|自定义内容

# biglog弹框（使用element封装）
参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
show|显示隐藏|Boolean|true/false|false
title|主标题名|String|自定义|新建方案向导
tabs|左侧标签页|Array|无|[]
ruleFun|内部校验回调|Function|无|false

tabs预览
```js
  var tabs=[
          {
            label:'xxx1',//tabs名字
            name:"1",//第一步 必须是"1"
            disable:false,//是否禁用
            slot:'setmsg'//父组件具名插槽名称
          },
          {
            label:'xxx2',
            name:"2",
            disable:true,
            slot:'setmonth'
          },
          {
            label:'xxx3',
            name:"3",
            disable:true,
            slot:'setpower'
          },
          {
            label:'xxx4',
            name:"4",
            disable:true,
            slot:'setbuy'
          },
        ]
```

总体预览

```html
  <af-biglog
        ref="bigLog"
        :title="digTitle"
        :show.sync="digShow"
        @nextCallback="nextCallback"
  
        @computedSave ="computedSave"
        :tabs.sync="tabs"
        :ruleFun="ruleFun"
    >
          <!--nextCallback为下一步回调返回值res为第几步-->
         <!--computedSave未保存回调-->
      <div slot="setmsg" class="biglog-class">
        
      </div>
      <div slot="setmonth">
     
      </div>
      <div slot="setpower"> </div>
      <div slot="setbuy"> </div>
    </af-biglog>
```
# drawer查询面板（使用element封装）
参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
name|名称|String|自定义|查询面板
modal|显示隐藏|Boolean|true,false|false


```html
    <base-drawer >
   
    </base-drawer>
```
# 导出（使用element封装）

记得引入axios

参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
buttonName|按钮名称|String|自定义|导出
path|接口路径|String|自定义|''
data|接口参数|Object|无|{}
type|接口类型|get/post|无|get
fileName|文件名字|String|自定义|文件
fileSuffix|文件后缀|String|自定义|.xls

# 大屏标签展示
```html
<af-tabCard
  :data="data"
  :topStyle="topStyle"
  :bottomStyle="bottomStyle"
/>
```


参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
data|数据结构|Object|{val:'',text:''}|{}
topStyle|上文字样式|String|自定义|'font-size: 32px;'
bottomStyle|下文字样式|String|自定义|'font-size: 16px;color: #a9a9a9;'

slot:自定义

# 以列为表头的表格（可包含子集）

```html
      <div style="width: 100%">
        <automaticTable
            :header="header"
            :body="body"
        />
      </div>
```
参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
header|表头|Array|header:[{title:'123'},{title:'qaq'},{title:'qwe'}]|[]
body|列|Array| body:[{list:['测试1',2,3,4], level:1},{list:['测试2',6,7,8], level:2},{list:['测试3',29,39,49], level:3}|[]

> 注若以列为表头可设置header=[],body可以为[qaq:{chidren:[]}]包含chidren的格式内部有做数组扁平化操作
> import { delayer } from '@/assets/js/tool' 可以去我的github引入tools.js
> github地址：https://github.com/PleaseStartYourPerformance/js-tools/tree/master/src

# Vue富文本编译器vue-quill-editor组件封装
```html
     <edit
     :noun="noun"
     >
     </edit>
```
参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
noun|无|String|自定义|null
editorOption|工具栏|Object|自定义|{}

>学习文章----https://blog.csdn.net/div_ma/article/details/79536634

# Echarts组件封装

```html
 <charts 
     style="height: 200px" 
     :option="lineOption" 
     id="pieChart1" />
```

参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
id|用到得id不传会使用随机数|String|自定义|随机数
option|option|Object|自定义|{}
citys|地图json|Object|自定义|{}
className|class类|String|自定义|chart
width|宽|String|自定义|'100%'
height|高|String|自定义|'100%'

# 日历组件-vue版本

含有接口联调具体请看具体代码默认数据都包含

# 左侧弹框组件
```html
 <diglogLeft 
     :diglog_tab1_style="diglog_tab1_style" 
    :diglog_tab2_style="diglog_tab2_style" 
    :show_style="0"
    :show_style="200"
     />
```

参数|说明|类型|可选值|默认值
--|:--:|--:|--:|--:
diglog_tab1_style|自定义最外层div样式(可设置宽高)|Object|自定义|{}
diglog_tab2_style|自定义按钮div样式|Object|自定义|{}
show_style|弹出距离（原理margin-left）|String|自定义|'0'
hide_style|隐藏的距离|String|自定义|'0'

 结语
持续更新中
