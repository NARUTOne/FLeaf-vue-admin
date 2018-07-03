<template>
  <Form ref="formModal" :model="formModal" :rules="ruleInline">
    <FormItem prop="label">
      <Input type="text" v-model="formModal.label" placeholder="节点名称" ></Input>
    </FormItem>
  </Form>
</template>

<script>
import {Form, FormItem, Input} from 'iview';
export default {
  name: 'NodeModal',
  components: {Form, FormItem, Input},
  props: {
    data: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      formModal: {},
      ruleInline: {
        label: [
          { required: true, message: '请输入节点名称', trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    data () {
      this.formModal = Object.assign({}, this.data);
    }
  },
  mounted () {
    this.formModal = Object.assign({}, this.data);
  },
  methods: {
    getFormData () {
      return new Promise((resolve, reject) => {
        this.$refs['formModal'].validate((valid) => {
          if (valid) {
            const params = Object.assign({}, this.formModal);
            resolve(params);
          } else {
            reject();
          }
        });
      });
    },
    resetFields () {
      this.$refs["formModal"].resetFields();
    }
  }
};
</script>
