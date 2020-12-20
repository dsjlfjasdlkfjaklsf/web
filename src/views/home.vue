<template>
  <el-container>
    <el-aside width="400px"><userMessage></userMessage></el-aside>
    <el-main><blogForm></blogForm></el-main>
  </el-container>
</template>

<script>
import userMessage from '@/components/home/userMessage'
import blogForm from '@/components/home/blogForm'
export default {
  name: 'blogManage',
  components: {
    'userMessage': userMessage,
    'blogForm': blogForm
  }
}
</script>

<style>
/*  .el-container,.el-main,.el-aside,#login{
      border: solid;
    } */
.el-aside {
  background-color: #D3DCE6;
  color: #333;
/*  text-align: center; */
/*  line-height: 200px; */
}

/* .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

.el-container {
  margin-bottom: 40px;
}
</style>
