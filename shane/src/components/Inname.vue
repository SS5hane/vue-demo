<template>
  <div>
  <span style="width:20%;">用户名：</span>
  <el-input type="input" v-model="name" style="width: 40%">{{name}}</el-input>
  </div>
</template>

<script>


    export default {
        name: "typename",
        data(){
          return{
            name:this.GLOBAL.aa

          }
        }
    }
</script>

<style scoped>

</style>
