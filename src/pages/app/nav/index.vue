<template>
  <Menu theme="dark" width="auto" @on-select="handleMenuClick">
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
  },
  methods: {
    handleMenuClick(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="less" scoped>

</style>

