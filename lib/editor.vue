<template>
  <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)"  class="er">
  </quill-editor>
</template>
<script>
  import { quillEditor, Quill } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    name: 'editor',
    components: {
      quillEditor
    },
    props:{
      noun:String,
      editorOption:{
        type:'Object',
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        content: null,

      }
    },
    watch:{
      noun:{
        handler(str){
          this.content = str
        }
      }
    },
    methods: {
      onEditorChange(content) {
        //内容改变事件
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style lang="css" scoped>
  .quill-editor >>> {
    height: 150px;
    margin-bottom: 10px;
  }
  .er{
    line-height: 20px;
  }
</style>