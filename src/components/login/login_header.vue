<template>
  <div id="loginheader">
    <el-row :gutter="10">
      <el-col :span="24"><div class="grid-content"><span>登录博客</span></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'loginHeader'
}
</script>

<style scoped>
 .grid-content{
    /* border: solid; */
    /* margin-top: 50px; */
  }

  .grid-content span{
    font-weight: bold;
    font-size: 18pt;
    text-align: center;
  }
</style>
