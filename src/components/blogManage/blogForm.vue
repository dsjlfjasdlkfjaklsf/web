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
      prop="title">
    </el-table-column>
    <el-table-column
      label="摘要"
      align="center"
      prop="abstract">
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
export default {
  name: 'blogForm',
  data: function () {
    return {
      tableData: [
        {
          BlogID: 'dagwewewfcwfedcwe',
          AuthorID: '32183921@qq.com',
          AuthorName: 'PmlPml',
          createtime: '2020-12-13 16:25:48',
          title: '测试文章',
          abstract: '12312312',
          content: 'hellow world'
        },
        {
          BlogID: 'dagwewewfcwfedcwf',
          AuthorID: '32183921@qq.com',
          AuthorName: 'PmlPml',
          createtime: '2020-12-13 16:25:48',
          title: '测试文章',
          abstract: '12312312',
          content: 'hellow world'
        }
      ]
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(row.BlogID)
    }
  }
}
</script>

<style>
</style>
