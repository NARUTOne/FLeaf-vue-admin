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
              <DocLine type="bug">异步数据展示，不展开下拉</DocLine>
              <DocLine>解决：设置默认值<code>{{'[""]'}}</code></DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
        <Demo dark>
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
          <div slot="footer">
            <Doc>
              <DocLine type="bug">异步数据展示，下拉设置默认初始值，匹配不上</DocLine>
              <DocLine><a href="https://github.com/iview/iview/issues/3722">Asynchronous creation of [Bug Report]select filterable #3722</a></DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
    </Row>
    <Row :gutter="8">
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
          <div slot="footer">
            <Doc>
              <DocLine type="bug"><code>DatePicker</code>类型为 daterange 无法重置输入的值，可以重置选择的日期</DocLine>
              <DocLine>解决：设置<code>editable:false</code></DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
        <Demo>
          <div slot="header">Select-if</div>
          <div slot="body">
            <Select v-model="statisMode" style="width: 300px" placeholder="请选择统计方式" v-if="switch1">
              <Option value="1">32</Option>
              <Option value="2">汇总同评分不区分版本</Option>
              <Option value="3">区分评分和版本</Option>
            </Select>
            <Select v-model="statisMode" style="width: 300px" placeholder="请选择统计方式" v-else>
              <Option value="4">122</Option>
              <Option value="5">汇总本</Option>
              <Option value="6">区分版本</Option>
            </Select>
            <iSwitch v-model="switch1" @on-change="handleSwitchchange"></iSwitch>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine type="bug"><code>v-if</code>进行选择渲染 <code>select</code> 在同 <code>v-model</code>下，出现选中文本错乱显示</DocLine>
              <DocLine>解决：改为<code>v-show</code> 或 采用 <code>data</code> 循环渲染</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
    </Row>
    <Row :gutter="8">
      <Col :md="12" :xs="24">
        <Demo>
          <div slot="header">Table-render</div>
          <div slot="body">
            <Table :columns="columns1" :data="tableData"></Table>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine type="warn"><code>Table-render</code>渲染需要采用virtual-dom, 使用了vue中的render函数</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24"></Col>
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
  Option, Switch, Table
} from "iview";
import { FLIcon } from "components";

const tableData = [
  {
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
  },
  {
    name: 'Jim Green',
    age: 24,
    address: 'London No. 1 Lake Park',
    date: '2016-10-01'
  },
  {
    name: 'Joe Black',
    age: 30,
    address: 'Sydney No. 1 Lake Park',
    date: '2016-10-02'
  },
  {
    name: 'Jon Snow',
    age: 26,
    address: 'Ottawa No. 2 Lake Park',
    date: '2016-10-04'
  }
];

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
    Demo, Doc, DocLine,
    'iSwitch': Switch, Table
  },
  data () {
    return {
      value1: "",
      data1: [],
      selectVal: 'null',
      asynSelect: '',
      asynSelectList: [],
      formValidate: {
        date: '',
        date2: ''
      },
      statisMode: '',
      switch1: false,
      columns1: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            const {name} = params.row;
            const text = 'FL-' + name;
            return h( 'span', [text]);
          }
        },
        {
          title: 'Age',
          key: 'age',
          render: (h, params) => {
            const {age} = params.row;
            const text = 'FL-' + age;
            return (<span>{text}</span>);
          }
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      tableData: tableData
    };
  },
  mounted () {
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
    handleSearch1 (value) {
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
    },
    handleSwitchchange (bol) {
      this.switch1 = bol;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~utils/style/variables.less";

.iview-pits {
  > div {
    margin-bottom: 8px;
  }
}
</style>

