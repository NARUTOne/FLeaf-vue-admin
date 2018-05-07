<template>
  <Submenu :name="data.url" v-if="isChildren">
    <template slot="title">
      <DropdownMenu  
        :data="data.children"
        :children-key="childrenKey">
        <template slot="dropContent">
          <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
          <Icon :type="data.icon" v-else></Icon>
        </template>
      </DropdownMenu>           
    </template>
  </Submenu>
  <MenuItem :name="data.url" v-else>
    <Dropdown placement="right-start">
      <template>
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
      </template>
      <DropdownMenu slot="list">
        <DropdownItem>{{data.name}}</DropdownItem>
      </DropdownMenu>
    </Dropdown>   
  </MenuItem>  
</template>

<script>
import {Menu, Icon, Dropdown, DropdownMenu, DropdownItem} from "iview";
import {FLIcon} from "@/components/";
import PDropdownMenu from './DropdownMenu';

const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

export default {
  name: 'ShrinkMenu',
  components: {
    MenuItem, Submenu, Icon, FLIcon, PDropdownMenu, Dropdown, DropdownMenu, DropdownItem
  },
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default () {
        return {};
      }
    },
    theme: {
      type: String,
      default: 'dark'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
  },
  computed: {
    isChildren() {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length ;
    }
  }
};
</script>

<style lang="less" scoped>

</style>

