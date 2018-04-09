<template>
  <Submenu :name="data.url" v-if="isChildren">
    <template slot="title">
      <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
      <Icon :type="data.icon" v-else></Icon>
      <router-link :to="data.url">{{data.name}}</router-link>
    </template>
    <NavNode 
      v-for="(item, i) in data.children"
      :key="i"
      :data="item"
      :children-key="childrenKey" />
  </Submenu>
  <MenuItem :name="data.url" v-else>
    <router-link :to="data.url">{{data.name}}</router-link>
  </MenuItem>  
</template>

<script>
import {Menu, Icon} from "iview";
import {FLIcon} from "@/components/";
const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

export default {
  name: 'NavNode',
  components: {
    MenuItem,
    Submenu,
    Icon,
    FLIcon
  },
  props: {
    data: {
      type: Object,
      default () {
        return {};
      }
    },
    childrenKey: {
      type: String,
      default: 'children'
    }
  },
  computed: {
    isChildren() {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length ;
    },
    children() {
      return this.data[this.childrenKey];
    }
  }
};
</script>

<style lang="less" scoped>

</style>
