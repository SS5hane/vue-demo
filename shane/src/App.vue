<template>

  <div id="app">
    <router-view/>
  <!--  <el-container>
      <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <span style="width: 30%">XXXX论坛</span>
        <div style="width: 30%;left: 60%">
        <el-button type="danger">新建</el-button>
        </div>
      </el-menu>
      </el-header>

    </el-container>-->
  </div>

</template>

<script>
import ElHeader from "element-ui/packages/header/src/main";

export default {
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods:{
      handleSelect(key, keyPath) {
      console.log(key, keyPath);
  }},
  components: {ElHeader},
  name: 'App'

}
</script>

<style>

</style>
