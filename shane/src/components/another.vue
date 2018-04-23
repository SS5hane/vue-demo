<template>
  <div class="alter">
    <el-card>
      <p style="font-size: 35px;">留下您的言论</p>
      <inname ref="ie"></inname>
      <typewords ref="ws"></typewords>
      <router-link to="/">
      <el-button type="danger" @click="a">提交</el-button>
      </router-link>
    </el-card>
    <div style="height: 5px;"></div>


  </div>
</template>

<script>

  import HelloWorld from './HelloWorld'
  import Inname from './Inname'
  import Typewords from './Typewords'
    export default {
        name: "another",
      data() {
        return {
            name:'',
            note:'',
          textarea:'',
          input:'',

      };
      },
      components:{
        Typewords,Inname
      },
      methods:{
       a:function () {
         var obj={name:this.$refs.ie.name,note:this.$refs.ws.note};
         HelloWorld.form.push(obj);

       }
      }

    }
</script>

<style scoped>

</style>
