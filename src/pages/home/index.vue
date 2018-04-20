<template>
  <div class="home">
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
  </div>
</template>

<script>
  import { Icon, Spin, Button, Dropdown, DropdownMenu, DropdownItem, AutoComplete } from 'iview';
  import { FLIcon } from 'components';

  export default {
    name: 'Home',
    components: {
      Icon,
      Spin,
      FLIcon,
      Button,
      Dropdown,
      DropdownMenu,
      DropdownItem,
      AutoComplete
    },
    data () {
      return {
        value1: '',
        data1: []
      };
    },
    mounted() {
      this.$Message.info('flv');
    },
    methods: {
      showMessage() {
        console.log(1);
        this.$Message.success('$Message:');
        this.$Message.error('hello world');
      },
      handleSearch1 (value) {
        if(!value) {
          this.data1 = [];
        }
        else {
          this.data1 = [''];
          setTimeout(() => {
            this.data1 = !value ? [] : [
              value+ '32',
              value + value,
              value + value + value
            ];
          }, 500);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';

  .home {
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

