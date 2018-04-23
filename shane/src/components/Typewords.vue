<template>
  <div>
  <p>留言内容：</p>
  <el-input type="textarea"  :rows="5" placeholder="请输入内容" v-model="note" >{{note}}</el-input>
  <div class="height:6px;"></div>
  </div>
</template>

<script>
    export default {
        name: "typewords",
      data()
      {
        return{
          note:this.GLOBAL.bb
        }
      }
    }
</script>

<style scoped>

</style>
