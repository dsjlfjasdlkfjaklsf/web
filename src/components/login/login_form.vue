<template>
  <div id='login'>
    <el-form ref="form" :model="form" :rules="rules" label-width="110px" label-position="left">
      <el-form-item label="ID" prop="ID">
        <el-input v-model="form.ID" placeholder="请输入ID"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Password">
        <el-input type="Password" v-model="form.Password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item label-width="20px">
        <el-button @click="onRegist" id="regist-button">注册</el-button>
        <el-button type="primary" @click="onSubmit" id="submit-button">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import token from '@/util/token'
export default {
  name: 'loginForm',
  data: function () {
    var validateID = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入ID'))
      } else {
        callback()
      }
    }
    var validatePassward = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      form: {
        ID: '',
        Password: ''
      },
      rules: {
        ID: [{
          validator: validateID,
          trigger: 'blur'
        }],
        Password: [{
          validator: validatePassward,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    onRegist: function () {
      this.$router.push('/signup')
    },
    onSubmit: function () {
      let id = this.form.ID
      this.$refs['form'].validate().then(valid => {
        return this.$axios.post('/api/user/login', this.form)
      }, valid => {
        return Promise.reject(new Error('submit failed'))
      }).then(response => {
        console.log('submit!')
        // console.log(response.data)
        // let data = JSON.parse(response.data)
        let data = response.data
        if (data.state === true) {
          token.setToken(data.response, id)
          this.$router.push('/home')
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
  }
}
</script>

<style scoped>
  .el-input {
    width: 230px;
    border-color: #333333;
  }

  .el-button {
    width: 115px;
    border-radius: 10px;
  }

 #submit-button,
  #submit-button:active {
    background-color: #586990;
    border-color: #586990;
    margin-left: 80px;
  }

  #submit-button:hover,
  #submit-button:focus {
    background-color: #7987A6;
    border-color: #7987A6;
  }

  #submit-button:active {
    background-color: #586990;
    border-color: #586990;
  }

  .el-form-item {
    margin-top: 50px;
  }

  .el-form-item:first-child{
    margin-top: 20px;
  }

  .el-form-item__label {
    font-size: 15pt;
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
  }

  .el-button--text {
    color: #C8B2AA;
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
  }

  .el-button--text:focus,
  .el-button--text:hover {
    color: #E4D9D5;
  }

  .el-button--text:active {
    color: #b49a91;
  }
</style>
