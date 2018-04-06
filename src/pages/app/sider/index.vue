<template>
  <Sider hide-trigger>
    <Menu>
      <SiderNode
        v-for="(item, i) in navsData"
        :key="i"
        :data="item"
        :children-key="childrenKey"/>
    </Menu>
  </Sider>
</template>

<script>
import {Layout, Menu} from 'iview';
import {NAV_LIST} from '@/mock/CONST';
import SiderNode from "./siderNode";

const Sider = Layout.Sider;

export default {
  name: 'FLSider',
  data: function() {
    return {
      navsData: NAV_LIST,
      childrenKey: 'children'
    };
  },
  components: {
    Sider,
    Menu,
    SiderNode
  }
};
</script>

<style lang="less" scoped>

</style>

