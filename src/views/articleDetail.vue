<template>
    <div style="width: 100%">
    <div class="article clearfix">
        <div class="header">
          <h1 class="title">{{articleDetail.Title}}</h1>
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
            <div class="abstract">
                <span class="publish-time">
                摘要： {{articleDetail.Abstract}}
                </span>
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
                <div  v-for="(comment,index) in comments" :key=index>
                    <span style="font-size: 17px;"><b>发布人:{{ comment.ownName }}</b></span>
                    <span style="margin-left: 10px; color: darkgray">发布时间:{{ comment.commentTime }}</span>
                    <p style="padding: 10px">内容: {{ comment.content }}</p>
                  
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
            "BlogID": "c113456181",
            "AuthorID": "u010389391",
            "AuthorName": "作者",
            "CreateTime": 1608107600,
            "Title": "标题党",
            "Abstract": "摘要",
            "Content": "这是一段博客内容"
      },
      tags: [],
      commentText: '',
      comments: [],
      user : {
        ID: '',
        Name: '',
        Bio: '',
        Level: ''
      }
    }
  },
  created: function() {
    this.getBlogData()
    this.getBlogComment()
    this.getBlogTag()
  },
  methods:{
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
      let api ='/api/blog/'+this.$route.params.blogID;
      this.$axios.get(api).then(response => {
        console.log('get userss info')
        let data=response.data;
        if(data.state === true){
          this.articleDetail=data.response
          console.log(data.response)
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

    let api = '/api/user/' + token.getID() + '/info'
     this.$axios.get(api).then(response => {
       console.log('get user info')
       // let data = JSON.parse(response.data)
       let data = response.data
       if (data.state === true) {
          this.user = data.response
          let name = this.user.Name   
          let params = new Object()
          params.OwnName=name
          params.Content=this.commentText
          let api ='/api/comment/'+this.$route.params.blogID;
          console.log(api)
          console.log(params)
          return this.$axios.post(api,params)
       } else {
         this.$notify.error({
           title: '错误',
           message: data.response
         })
         return Promise.reject(new Error('addComment failed'))
       }
     }).catch(failResponse => {
         console.log(failResponse)
       }).then(res => {
        let data=res.data;
        if(data.state === true){
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
      // let params = new Object()
      // params.ownName=name
      // params.content=this.commentText
      //  let api ='/api/comment/'+this.$route.params.blogID;
      //  console.log(params)
      // this.$axios.post(api,params).then(res => {
      //   let data=res.data;
      //   if(data.state === true){
      //     this.commentText = ''
      //     this.getBlogComment()
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
    },
    getBlogComment () {
      console.log('getBlogComment')
      let api='/api/comment/'+this.$route.params.blogID
      this.$axios.get(api).then(res =>{
        let data=res.data;
        console.log(res)
        if(data.state === true){
          this.comments=data.response
          console.log(data.response)
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
      let api='/api/tag/'+this.$route.params.blogID
      this.$axios.get(api,{
      }).then(res =>{
        let data=res.data;
        if(data.state === true){
          this.tags=data.response
          console.log(data.response)
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
    line-height: 50px;
    width: auto;
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
