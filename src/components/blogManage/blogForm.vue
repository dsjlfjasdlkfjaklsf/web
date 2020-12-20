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
      width="250"
      align="center"
      prop="Title">
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
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    handleDelete: function (index, row) {
      console.log(row.BlogID)
      let api = '/api/blog/' + row.BlogID
      this.$axios.delete(api).then(response => {
       console.log('delete blog')
       // let data = JSON.parse(response.data)
       let data = response.data
       if (data.state === true) {
         alert('删除成功')
         this.getBlog()
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
     let api = '/api/blog/' + token.getID() + '/all'
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
