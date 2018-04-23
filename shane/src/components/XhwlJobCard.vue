<template>
<el-card class="box-card" style="width:50%;">
  <div slot="header" class="clearfix">
    <span style="font-size: 25px;font-weight: bold"><i class="el-icon-news"></i> {{name}}</span>
    <div class="button" style="float:right;">
    <el-button style="font-size:12px;" type="primary" @click="showToggle" v-text="btnText"></el-button>
    <el-button style="font-size: 12px;" type="danger" @click="ApplyJob" plain>投递简历</el-button>
    </div>
  </div>
  <div class="intro">
    <div class="job-address">
      <p ><i class="el-icon-info"></i>职位方向：{{direction}}</p>
    </div>
    <p> </p>
    <div class="job-direction">
      <p><i class="el-icon-question"></i>工作地点：{{address}}</p>
    </div>
    <div class="job-func">
      <p><i class="el-icon-success"></i>面试方式：{{func}}</p>

    </div>
    <p v-show="Show">...</p>
  </div>
  <div class="table-expand" v-show="isShow">
    <div class="job-passage">
      <p><i class="el-icon-tickets"></i>工作要求: </p>
      <p class="content" style="font-size:14px;">{{requirments}}</p>
    </div>
  </div>
</el-card>
</template>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

<script>
    export default {
        name: "XhwlJobCard",
        data()
        {
          return{
            jobid:1,            //职位编号
            name:'后端开发岗位',    //职位名称
            direction:'后端开发方向',   //职位方向
            address:'厦门',       //工作地点
            btnText:'查看详情',
            func:'线上面试',      //面试方式
            requirments:'编程基本功扎实，掌握C/C++/JAVA等开发语言、常用算法和数据结构' +'\n'+        //工作要求
            '熟悉TCP/UDP网络协议及相关编程、进程间通讯编程； \n ' +
            '了解Python、Shell、Perl等脚本语言； \n ' +
            '了解MYSQL及SQL语言、编程，了解NoSQL, key-value存储原理； \n ' +
            '全面、扎实的软件知识结构，掌握操作系统、软件工程、设计模式、数据结构、数据库系统、网络安全等专业知识； \n ' +
            '了解分布式系统设计与开发、负载均衡技术，系统容灾设计，高可用系统等知识。 \n ' +
            ' \n ' +
            '注：招聘城市根据项目类型有所不同，其中，暑期实习招聘城市为下方除补录外全部“招聘城市”，mini实习招聘城市为：北京，成都，杭州，合肥，南京，上海，武汉，西安，天津。校园招聘（2018届）招聘城市请选择：补录。该岗位“招聘城市”在简历投递截止日前会有部分调整，请密切关注，腾讯公司对招聘信息保留最终解释权。',
            isShow:false,
            Show:true
          }
        },
      methods:{
          showToggle:function(){
            this.isShow=!this.isShow;
            this.Show=!this.Show;
            if(this.isShow){
              this.btnText='收起面板'
            }
            else{
              this.btnText='查看详情'
            }
          },
        ApplyJob:function(){
          //投递简历的鼠标点击事件
          // jobid是职位的编号
        }
      }
    }
</script>
