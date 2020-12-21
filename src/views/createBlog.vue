<template>
  <div>
    <div class="comment">
      标题
      <el-input placeholder="标题"
                    type="textarea"
                    v-model="Title"></el-input>
    </div>
    <div class="comment">
      摘要
      <el-input placeholder="摘要"
                    type="textarea"
                    v-model="Abstract"></el-input>
    </div>
    <div class="comment">
      正文
      <el-input placeholder="正文"
                    type="textarea"
                    rows='10'
                    v-model="contentText"></el-input>
    </div>
    <el-button style="margin-top: 15px"
                     type="primary"
                     @click="addBlog">提交</el-button>
       <el-button style="margin-top: 15px"
                     type="primary"
                     @click="returnLogin">返回</el-button>
  </div>
 
</template>
<script>
export default {
  name: 'createBlog',
  data: () => {
    return { 
      Title: '',
      Abstract: '',
      contentText: ''
    }
  },
  methods: {
    addBlog () {
      let params = new Object()
      params.Title=this.Title
      params.Abstract=this.Abstract
      params.Content=this.contentText

      this.$axios.post('/api/blog',params).then(res => {
        let data=res.data;
        if(data.state === true){
          this.$router.push('/home')
        }
        else{
          this.$notify.error({
            title: '错误',
            message: data.response
          })
        }
      }).catch(err =>{
        console.log(err)
      })
    },
    returnLogin () {
      this.$router.push('/home')
    }
  }

}
</script>