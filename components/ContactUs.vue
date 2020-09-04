<template>
  <div>
    <OnlineGuide />
    <a-row>
      <a-col :lg="8" :xs="2"></a-col>
      <a-col :lg="8" :xs="20">
        <h3>联系我们</h3>
        <a-form-model layout="vertical" ref="ruleForm" :model="ruleForm" :rules="rules"  class="form">
          <a-form-model-item label="">
            <a-input v-model="ruleForm.phone" placeholder="您的手机号码" prop='phone' />
          </a-form-model-item>
          <a-form-model-item label="">
            <a-input v-model="ruleForm.name"  placeholder="您的姓名" />
          </a-form-model-item>
          <a-form-model-item label="">
            <a-input v-model="ruleForm.company"  placeholder="请输入所在公司和职位" />
          </a-form-model-item>
          <a-form-model-item label="您希望解决什么问题">
            <a-input v-model="ruleForm.problem" type='textarea' :row='8' placeholder="请输入您的合作需求，以便我们更好的理解您当前遇到的问题" />
          </a-form-model-item>
          <a-form-model-item >
            <button @click="submitForm('ruleForm')">提交</button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :lg="8" :xs="2"></a-col>
    </a-row>
  </div>
</template>

<script>
import OnlineGuide from './onlines/OnlineGuide'
export default {
  components:{
    OnlineGuide
  },
  data() {
    return {
      ruleForm: {
        phone: '',
        name: '',
        company: '',
        problem: ''
      },
      rules: {
        phone: [{ required: true, trigger: 'change',message:'请输入正确的手机号' }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(formName);
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .ant-form-item-children {
  input {
    line-height: 50px;
    height: 50px;
    background-color: #f7f7f7;
  }
  textarea{
    height: 200px;
    background-color: #f7f7f7;
  }
}
h3 {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
}
h4 {
  padding-left: 10px;
  font-size: 20px;
}
.form {
  button {
    background-color: #cbaa77;
    line-height: 54px;
    color: #fff;
    font-size: 22px;
    display: block;
    width: 100%;
    border-radius: 4px;
  }
  &__label {
    height: 48px;
    line-height: 48px;
    margin-bottom: 30px;
    padding: 0 20px;
    border-radius: 4px;
    display: flex;
    background-color: #f7f7f7;
    border: 1px solid #d5d4d2;
    &.textarea {
      height: 200px;
    }
    span {
      color: #f00;
      font-size: 30px;
    }
    input,
    textarea {
      flex: 1;
      background: none;
      border: none;
      &::placeholder {
        color: #c1c0be;
      }
    }
    textarea {
      height: 100px;
    }
  }
}
</style>
