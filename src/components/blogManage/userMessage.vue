<template>
  <div id='userMessage'>
    <el-row>
      <el-col :span="24"><div class="title">博客管理</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message"><div class="tag">ID:</div> <div class="detail">{{this.ID}}</div></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message"><div class="tag">用户名:</div> <div class="detail">{{this.Name}}</div></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userMessage',
  data: function () {
    return {
      ID: 'ID',
      Name: 'Name'
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>

<style>

#userMessage{
  min-height: 600px;
}
.title{
  font-weight: bold;
  font-size: 25pt;
  line-height: 100px;
}
.message{
  font-size: 20pt;
  line-height: 50px;
}
.tag{
  text-align: left;
  width: 100px;
  display: inline-block;
}
.detail{
  text-align: left;
  min-width: 60px;
  display: inline-block;
}
</style>
