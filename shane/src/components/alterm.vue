<template>
  <div class="alter">
    <el-card>
      <p style="font-size:35px;">修改您的留言</p>
      <inname ref="ie"></inname>
      <typewords ref="ws"></typewords>
      <router-link to="/">
        <el-button type="danger" @click="b">提交</el-button>
      </router-link>
    </el-card>
    <div style="height: 5px;"></div>


  </div>
</template>

<script>
import ddata from './Global'
  import HelloWorld from './HelloWorld'
  import Inname from './Inname'
  import Typewords from './Typewords'
  export default {
    name: "alterm",
    data() {
      return {
        name:'',
        note:'',
        textarea:'',
        input:'',

      };
    },
    components:{
      Typewords,Inname,HelloWorld,ddata
    },
    methods:{
      b:function () {
        HelloWorld.form[this.GLOBAL.ind].name=this.$refs.ie.name;
        HelloWorld.form[this.GLOBAL.ind].note=this.$refs.ws.note;

      }
    }

  }
</script>

<style scoped>

</style>
