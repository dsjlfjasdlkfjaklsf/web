<template>
  <div>
    <div class="comment">
      标题
      <el-input placeholder="标题"
                    type="textarea"
                    v-model="titleText"></el-input>
    </div>
    <div class="comment">
      摘要
      <el-input placeholder="摘要"
                    type="textarea"
                    v-model="abstractText"></el-input>
    </div>
    <div class="comment">
      正文
      <el-input placeholder="正文"
                    type="textarea"
                    v-model="contentText"></el-input>
    </div>
    <el-button style="margin-top: 15px"
                     type="primary"
                     @click="addBlog">提交</el-button>
  </div>
</template>
<script>
export default {
  name: 'createBlog',
  data: () => {
    return {
      titleText: '',
      abstractText: '',
      contentText: ''
    }
  },
  methods: {
    addBlog () {
      let params = URLSearchParams()
      params.append('Title','${titleText}')
      params.append('Abstract','${abstractText}')
      params.append('Content','${contentText}')
      this.$axios.post('/api/blog',params).then(res => {
        let data=res.data;
        if(data.state === true){
          this.$Message.success('添加成功')
          this.$router.push('/')
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
    }
  }

}
</script>