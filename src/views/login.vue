<template>
  <div id="login">
    <el-container>
        <el-header><loginheader></loginheader></el-header>
        <el-main><login></login></el-main>
    </el-container>
  </div>
</template>

<script>
import Login from '@/components/login/login_form'
import Loginheader from '@/components/login/login_header'
export default {
  name: 'Login',
  data: () => {
    return {
    }
  },
  components: {
    'login': Login,
    'loginheader': Loginheader
  }
}
</script>

<style scoped>
.el-container,.el-main,.el-header,#login{
    /* border: solid; */
  }

.el-header {
    text-align: center;
    line-height: 60px;
    /* margin-top: 100px; */
    width: 485px;
    height: 50px;
    margin: 0 auto;
  }

  .el-main {
    color:#66667F;
    text-align: left;
    line-height: 160px;
    padding-left: 80px;
    padding-top: 0;
    width: 485px;
    margin: 0 auto;
  }

  #login {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .el-container {

      height: 100%;
      margin: 120px;
      font-family:"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑";
  }
</style>
