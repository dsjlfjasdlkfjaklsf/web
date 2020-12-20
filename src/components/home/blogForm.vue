<template>
  <div id='blogForm'>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="600px"
    border
    stripe>
    <el-table-column
      label="标题"
      width="200"
      align="center"
      prop="Title">
    </el-table-column>
    <el-table-column
      label="作者"
      width="100"
      align="center"
      prop="AuthorName">
    </el-table-column>
    <el-table-column
      label="创建时间"
      width="100"
      align="center"
      prop="CreateTime">
    </el-table-column>
    <el-table-column
      label="摘要"
      align="center"
      prop="Abstract">
    </el-table-column>
    <el-table-column
    label="操作"
    width="180"
    align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleLookUp(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import token from '@/util/token'
export default {
  name: 'blogForm',
  data: function () {
    return {
      tableData: [],
      user : {
        ID: 'ID',
        Name: 'Name',
        Bio: '',
        Level: ''
      }
    }
  },
  methods: {
    handleLookUp: function (index, row) {
      console.log(row.BlogID)
      this.$router.push('/articleDetail/' + row.BlogID)
    },
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
    getBlog: function () {
     let api = '/api/blogs/all'
     this.$axios.get(api).then(response => {
       console.log('get blog ')
       // let data = JSON.parse(response.data)
       let data = response.data
       if (data.state === true) {
         this.tableData = data.response
       } else {
         this.$notify.error({
           title: '错误',
           message: data.response
         })
       }
     }).catch(failResponse => {
         console.log(failResponse)
       })
    }
  },
  created: function () {
    this.getBlog()
  }
}
</script>

<style>
</style>
