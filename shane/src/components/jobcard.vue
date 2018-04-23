<template>
  <el-card style="width:60%;background-color: whitesmoke">
    <div>
      <span style="font-size:25px;font-weight: bold" class="name"><i class="el-icon-document"/> {{name}}</span>
    </div>

    <div style="height:16px;" class="blank"></div>

    <div class="brief" style="font-weight:normal">
      <table border="0" style="width: 100%;height:40px;">
        <tr style="font-weight:normal;height:20px;">
          <th style="width: 10%;float:left;height:20px;font-weight:normal"><p style="float:left;">工作地点:</p></th>
          <th style="width:10%;float:left;height:20px;font-weight:normal"><p style="float: left;">{{address}}</p> </th>
          <th style="width: 10%;float:left;height:20px;font-weight:normal"></th>
          <th style="width: 10%;float:left;height:20px;font-weight:normal"><p style="float:left">招聘人数:</p></th>
          <th style="width:10%;float:left;height:20px;font-weight:normal"><p style="float:left">{{number}}</p> </th>
          <th style="width: 10%;float:left;height:20px;font-weight:normal"></th>
          <th style="width: 10%;float:left;height:20px;font-weight:normal"><p style="float:left">职位类型:</p></th>
          <th style="width:10%;float:left;height:20px;font-weight:normal"><p style="float:left">{{direction}}</p> </th>
        </tr>
      </table>
    </div>

    <div style="height:20px;" class="blank"></div>

    <div id="example-1">
      <transition name="slide-fade" style="position: absolute">
      <el-button @click="Ashow=!Ashow;k=!k;" type="success" icon="el-icon-arrow-right" v-show="k" circle size="small">查看详情</el-button>

<      </transition>
      <transition name="slide-fade">
        <div v-if="Ashow" >
          <div style="height: 14px;"></div>

          <div class="ttext">
            <p>工作职责：</p>
            <p>{{responsibility}}</p>
          </div>

          <div style="height: 10px;"></div>

          <div class="ttext">
            <p>职位要求：</p>
            <p>{{requirment}}</p>
          </div>

          <div style="height:10px;"></div>

          <el-button type="danger" icon="el-icon-check" size="small">立即投递</el-button>
          <el-button @click="Ashow=!Ashow;k=!k;" type="success" icon="el-icon-arrow-up" v-show="p" circle size="small">收起面板</el-button>
        </div>

      </transition>
    </div>
  </el-card>
</template>

<script>
  import ElCard from "element-ui/packages/card/src/main";

  export default {
    components: {ElCard},
    data: () => ({
      p:true,
      k:true,
      Ashow:false,
      name:'后端开发',
      address:'厦门',
      number:5,
      direction:'技术',
      responsibility:'-负责研发/测试工程效率工具的开发和维护工作\n' +
      '\n' +
      '-负责CI相关工具开发和维护工作\n' +
      '\n' +
      '-负责测试环境管理和环境部署自动化工具的开发工作\n' +
      '\n' +
      '-负责其他相关工具开发和维护工作',
      requirment:'-计算机基础知识扎实，掌握数据结构、操作系统、网络、数据库知识\n' +
      '\n' +
      '-至少精通PHP或者Java其中之一，有项目经验\n' +
      '\n' +
      '-熟悉linux环境，能够熟练使用Linux常用命令，能够基于Linux开发和部署项目\n' +
      '\n' +
      '-熟练掌握至少一门脚本语言python/ruby/shell，能用脚本编写简单工具\n' +
      '\n' +
      '-非常热爱互联网及其相关技术\n' +
      '\n' +
      '-逻辑思考能力强，思维缜密，有责任心与时间观念\n' +
      '\n' +
      '-具有团队合作精神及良好的口头与书面的交流能力\n' +
      '\n' +
      '-有web前端及服务端开发经验优先\n' +
      '\n' +
      '-有CI流程工具开发和维护经验优先'
    }),
    methods: {}

  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }

  .ttext{
    font-size:14px;
    color: dimgray;
    font-family: "Adobe 仿宋 Std R";
    width:80%;
  }

</style>
