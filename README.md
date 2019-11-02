# af-element
UI-开源组件库，会封装一些element-ui的组件，使其更方便达到我们的需求，也会独自开发一些组件使用，因时间有限不定期更新中
# 安装

```
npm i af-elements
```
# 在main.js引入
```
import afComponents from 'af-element'
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

# 结语
持续更新中
