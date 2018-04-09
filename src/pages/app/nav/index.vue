<template>
  <Menu theme="dark" width="auto">
    <NavNode
      v-for="(item, i) in navsData"
      :key="i"
      :data="item"
      :children-key="childrenKey" />
  </Menu>
</template>

<script>
import { Menu} from 'iview';
import {NAV_LIST} from '@/mock/CONST';
import NavNode from "./NavNode";

export default {
  name: 'NavMenu',
  data: function() {
    return {
      navsData: NAV_LIST,
      childrenKey: 'children'
    };
  },
  components: {
    Menu,
    NavNode
  }
};
</script>

<style lang="less" scoped>

</style>

