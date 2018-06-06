<template>
  <div class="iview-pits">
    <Row :gutter="8">
      <Col :md="12" :xs="24">
        <Demo>
          <div slot="header">AutoComputed-async</div>
          <div slot="body">
            <AutoComplete
              v-model="value1"
              :data="data1"
              @on-search="handleSearch1"
              clearable
              placeholder="input here"
              style="width:200px">
            </AutoComplete>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine warn>异步数据展示，不展开下拉</DocLine>
              <DocLine>解决：设置默认值<code>{{'[""]'}}</code></DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
        <Demo>
          <div slot="header"></div>
          <div slot="body">
            <Select v-model="selectVal" :style="{width: '300px'}">
              <Option value="null">全部</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
            <Select v-model="asynSelect" :style="{width: '300px'}">
              <Option v-for="(item, index) in asynSelectList" :value="item.id" :key="index">{{item.name}}</Option>
            </Select>
            <Button @click="handleAsynSelect">异步数据</Button>
          </div>
          <div slot="footer"></div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
        <Demo>
          <div slot="header">Form-reset-datePicker</div>
          <div slot="body">
            <Form ref="formValidate" :model="formValidate">
              <FormItem prop="date"><DatePicker type="date" placeholder="贷款到日" v-model="formValidate.date"></DatePicker></FormItem>
              <FormItem prop="date2"><DatePicker :editable="false" v-model="formValidate.date2" type="daterange" placeholder="选择日期"></DatePicker></FormItem>
            </Form>
            <Button @click="handleReset">重置</Button>
          </div>
          <div slot="footer"></div>
        </Demo>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Demo, Doc, DocLine} from '@/components/';
import {
  Row, Col,
  Form,
  FormItem,
  DatePicker,
  Icon,
  Spin,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  AutoComplete,
  Select,
  Option
} from "iview";
import { FLIcon } from "components";

export default {
  name: "IviewPits",
  components: {
    Row, Col,
    Icon,
    Spin,
    FLIcon,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    AutoComplete,
    Select,
    Option,
    Form,
    FormItem,
    DatePicker,
    Demo, Doc, DocLine
  },
  data() {
    return {
      value1: "",
      data1: [],
      selectVal: 'null',
      asynSelect: '',
      asynSelectList: [],
      formValidate: {
        date: '',
        date2: ''
      }
    };
  },
  mounted() {
    this.$Message.info("iview-message");
  },
  methods: {
    handleReset () {
      this.$refs['formValidate'].resetFields();
      this.formValidate.date = '';
      this.formValidate.date2 = '';
    },
    handleAsynSelect () {
      setTimeout(() => {
        this.asynSelectList = [
          {
            id: '0',
            name: 'label-0'
          },
          {
            id: '1',
            name: 'label-1'
          },
          {
            id: '2',
            name: 'label-2'
          },
          {
            id: '3',
            name: 'label-3'
          },
          {
            id: '4',
            name: 'label-4'
          }
        ];
        this.asynSelect = '1';
      }, 600);
      // this.asynSelect = '1';
    },
    handleSearch1(value) {
      if (!value) {
        this.data1 = [];
      } else {
        this.data1 = [""];
        setTimeout(() => {
          this.data1 = !value
            ? []
            : [value + "32", value + value, value + value + value];
        }, 500);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~utils/style/variables.less";

.iview-pits {
}
</style>

