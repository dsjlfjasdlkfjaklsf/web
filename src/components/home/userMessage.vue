<template>
  <div id='userMessage'>
    <el-row>
      <el-col :span="24"><div class="title">博客</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message">ID: {{this.user.ID}}</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message">用户名: {{this.user.Name}}</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message">简历: <div>{{this.user.Bio}}</div></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="message">等级: {{this.user.Level}}</div></el-col>
    </el-row>
    <el-row>
      <el-button @click="onExit" id="exit-button">退出</el-button>
      <el-button type="primary" @click="onManage" id="manage-button">博客管理</el-button>
    </el-row>
  </div>
</template>

<script>
import token from '@/util/token'
export default {
  name: 'userMessage',
  data: function () {
    return {
      user : {
        ID: 'ID',
        Name: 'Name',
        Bio: '',
        Level: ''
      }
    }
  },
  methods: {
     getUser: function () {
      let api = '/api/user/' + token.getID() + '/info'
      this.$axios.get(api).then(response => {
        console.log('get user info')
        // let data = JSON.parse(response.data)
        let data = response.data
        if (data.state === true) {
          this.user = data.response
        } else {
          this.$notify.error({
            title: '错误',
            message: data.response
          })
        }
      }).catch(failResponse => {
          console.log(failResponse)
        })
     },
     onExit: function () {
      token.clealToken()
      this.$router.push('/login')
     },
     onManage: function () {
       this.$router.push('/blogManage')
     }
  },
  created: function () {
    this.getUser()
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
