<template>
  <div class="display">
      <el-container class="dis">
        <el-header class="header">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <span style="width: 30%;font-size: 35px;">XXXX论坛</span>
            <router-link to="/ano">
            <el-button type="danger" style="margin-left:70%;" @click="zero">新建</el-button>
            </router-link>
          </el-menu>
        </el-header>

        <el-main>

          <div v-for="(info,index) in form">
            <div style="height:8px;"></div>
            <span style="width:20%;left: 10%;">用户：{{info.name}}</span>

            <router-link to="/al">
            <el-button type="primary" @click="des(index)">修改</el-button>
            </router-link>
            <el-button type="danger" @click="del(info)">删除</el-button>

            <el-card>
              <p>{{info.note}}</p>
            </el-card>
          </div>
        </el-main>

      </el-container>
  </div>
</template>

<script>
import ElHeader from "element-ui/packages/header/src/main";
import another from './another'
import alterm from './alterm'

var form=[{name:'小明',note:'一天都是课有点难受'}];

var num=0;
var name='';
var note='';

export default {
  form,
  components: {ElHeader,another,alterm},
  name: 'HelloWorld',

  data () {

    return {

      form
    }},
      methods: {
        del: function (info) {
          this.form.splice(this.form.indexOf(info), 1);
        },
        des:function (index) {
         this.GLOBAL.aa=form[index].name;
         this.GLOBAL.bb=form[index].note;
         this.GLOBAL.ind=index;
        },
        zero:function () {
          this.GLOBAL.aa='';
          this.GLOBAL.bb='';

        }

      }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
