<template>
    <div style="width: 100%">
    <div class="article clearfix">
        <div class="header">
          <h1 class="title">{{articleDetail.title}}</h1>
          <div class="author">
            <div class="info">
              <span class="name">
                作者： <span>{{articleDetail.AuthorName}}</span>
              </span>
              <div props-data-classes="user-follow-button-header"
                   data-author-follow-button="" />
              <div class="meta">
                <span class="publish-time">
                发表时间： {{articleDetail.CreateTime? articleDetail.CreateTime: ''}}
                </span>
              </div>
            </div>
            <div class="tags "
                 title="标签">
              <el-tag size="small"
                      v-for="tag in tags"
                      :key="tag"
                      effect="light"
                      type="success">{{tag}}</el-tag>
            </div>
            <span class="clearfix" />
          </div>
        <div class="content">
          <div id="content"
               class="article-detail"
               v-html="articleDetail.Content">
          </div>
        </div>
        <div class="comment">
          <el-input placeholder="文明社会，理性评论"
                    type="textarea"
                    v-model="commentText"></el-input>
          <el-button style="margin-top: 15px"
                     type="primary"
                     @click="addComment">发 送</el-button>
        </div>
        <div style="overflow: hidden">
                <p slot="title">评论</p>
                <div v-for="(item, index) in comment" :key="item" >
                    <span style="font-size: 17px;"><b>发布人:{{ item.ownName }}</b></span>
                    <span style="margin-left: 10px; color: darkgray">发布时间:{{ item.commentTime }}</span>
                    <p style="padding: 10px">内容: {{ item.content }}</p>
                    <Divider dashed/>
                </div>
              
                <br>
        </div>
        <el-button style="margin-top: 15px"
                     type="primary"
                     @click="returnLogin">返回</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import token from '@/util/token'
export default {
  name: 'articleDetail',
  data: () => {
    return {
      articleDetail: {
          title:"bissaoti",
          BlogId:"ssss",
          AuthorID:"sss",
          AuthorName:"yzdl",
          CreateTime:"9527",
          Title:"yzdltsssql",
          Content:"yz66ssssssssssssssssssssssssssssssssssssssssssss",
          Abstract:"sss"
      },
      tags: ['sss','sss','life'],
      commentText: '',
      comment: [{
          BlogId:'sss',
          ownName: 'pmlpml',
          commentTime:'123',
          content:'thank'
      }],
      BlogId: 'c113456181'
    }
  },
  created () {
    this.BlogId = this.$route.params.blogID
    this.getBlogData()
    this.getBlogComment()
  },
  methods:{
    getBlogData () {
      // getBlogById({
      //   $config: {
      //   headers: {
      //       'Authorization': token
      //   }
      //   },
      // BlogId: this.articleDetail.BlogId
      // }).then(res => {
      //   let data=res.data;
      //   if(data.state === true){
      //     this.articleDetail=res.response
      //   }
      //   else{
      //     this.$notify.error({
      //       title: '错误',
      //       message: data.response
      //     })
      //   }
      // }).catch(err =>{
      //   console.log(err)
      // })
      let api ='apit/blog'+this.blogID;
      this.$axios.get(api,{
    
      }).then(res => {
        let data=res.data;
        if(data.state === true){
          this.articleDetail=res.response
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
    addComment () {
      let name = token.getID()
      // createComment({
      //   CommentName: name,
      //   content: this.commentText
      // }).then(res =>{
      //   let data=res.data;
      //   if(data.state === true){
      //     this.articleDetail=res.response
      //   }
      //   else{
      //     this.$notify.error({
      //       title: '错误',
      //       message: data.response
      //     })
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
      let params = new URLSearchParams()
      params.append('ownName',name)
      params.append('content',this.commentText)
       let api ='apit/comment'+this.blogID;
      this.$axios.post(api,params).then(res => {
        let data=res.data;
        if(data.state === true){
          this.$Message.success('评论成功')
          this.commentText = ''
          this.getBlogComment()
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
    getBlogComment () {
      let api='api/comment'+blogID
      this.$axios.get(api,{
      }).then(res =>{
        let data=res.data;
        if(data.state === true){
          this.comment=res.response
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
    getBlogTag () {
      let api='api/tag'+blogID
      this.$axios.get(api,{
      }).then(res =>{
        let data=res.data;
        if(data.state === true){
          this.comment=res.response
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

<style scoped>
.el-container,.el-main,.el-header,#login{
    /* border: solid; */
  }
  .div{
    margin: 0px;
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
  .header{
    padding-top: 20px;
  }
  #login {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .name{
    padding: 10px;
  }
  .meta{
    padding: 10px;
  }
  .tags{
    padding: 10px;
  }
  .content{
    padding: 50px;
    text-align: left;
    line-height: 100px;
    width: 500px;
  }
  .comment{
    margin-top: -10px;
  }
  .el-container {

      height: 100%;
      margin: 120px;
      font-family:"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑";
  }
</style>
