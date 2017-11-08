<template>
  <div>
    <head-top></head-top>
    <h1>数据0</h1>
    <el-input v-model="testNumber" placeholder="请输入内容"
    ></el-input>

  </div>
</template>

<script>
  import headTop from '@/components/headTop'
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";
  export default {
    data() {
      return{
        testNumber: 10
      }
    },
    components: {headTop}
  }
</script>

<style>
</style>

