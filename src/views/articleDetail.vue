<template>
    <div style="width: 100%">
    <div class="article clearfix">
        <div class="header">
          <h1 class="title">{{articleDetail.title}}</h1>
          <div class="author">
            <div class="info">
              <span class="name">
                <span>{{articleDetail.AuthorName}}</span>
              </span>
              <div props-data-classes="user-follow-button-header"
                   data-author-follow-button="" />
              <div class="meta">
                <span class="publish-time">
                  {{articleDetail.CreateTime? articleDetail.CreateTime: ''}}
                </span>
              </div>
            </div>
            <div class="tags "
                 title="标签">
              <el-tag size="mini"
                      v-for="tag in articleDetail.tags"
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
                    v-model="content"></el-input>
          <el-button style="margin-top: 15px"
                     type="primary"
                     @click="handleAddComment">发 送</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'articleDetail',
  data: () => {
    return {
      articleDetail: {
          title:"biaoti",
          AuthorName:"yzdl",
          CreateTime:"9527",
          Title:"yzdltql",
          Content:"yzdl6666666666",
          tags:[1,2]
      },
      content: ''
    }
  },
  methods:{
      handleAddComment(){

      }
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
