<template>
  <div class="iview-pits">
    <h1>FLV &nbsp; <FLIcon type='travel'/></h1>
    <h2 class='home-hi'><Spin size="large" fix/> hello, world ! </h2>
    <p class="home-text"><Icon type='ionic' /> &nbsp; &nbsp;welcome! Fire Leaf Vue Scaffold !</p>
    <Button type="success" @click="showMessage">$Message 测试</Button>
    <Dropdown placement="right">
      <a href="javascript:void(0)">
        下拉菜单
        <Icon type="arrow-down-b"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <AutoComplete
      v-model="value1"
      :data="data1"
      @on-search="handleSearch1"
      clearable
      placeholder="input here"
      style="width:200px"></AutoComplete>
    <Select v-model="selectVal" :style="{width: '300px'}">
      <Option value="null">全部</Option>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
    </Select>
    <Select v-model="asynSelect" :style="{width: '300px'}">
      <Option v-for="(item, index) in asynSelectList" :value="item.id" :key="index">{{item.name}}</Option>
    </Select>
    <Form ref="formValidate" :model="formValidate">
      <FormItem prop="date"><DatePicker type="date" placeholder="贷款到日" v-model="formValidate.date"></DatePicker></FormItem>
      <FormItem prop="date2"><DatePicker :editable="false" v-model="formValidate.date2" type="daterange" placeholder="选择日期"></DatePicker></FormItem>
    </Form>
    <Button @click="handleReset">重置</Button>
  </div>
</template>

<script>
import {
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
    DatePicker
  },
  data() {
    return {
      value1: "",
      data1: [],
      selectVal: 'null',
      asynSelect: '2',
      asynSelectList: [],
      formValidate: {
        date: '',
        date2: ''
      }
    };
  },
  mounted() {
    this.$Message.info("flv");
    this.handleAsynSelect();
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
        // this.asynSelect = '1';
      }, 600);
      this.asynSelect = '1';
    },
    showMessage() {
      console.log(1);
      this.$Message.success("$Message:");
      this.$Message.error("hello world");
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
  text-align: center;
  padding-top: 15%;
  .home-hi {
    position: relative;
    font-size: 30px;
    color: @flv-warn-color;
  }
  .home-text {
    font-size: 16px;
    color: @flv-default-color;
  }
}
</style>

