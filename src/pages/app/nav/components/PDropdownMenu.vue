<template>
  <Dropdown placement="right-start">
    <slot name='dropContent'></slot>
    <DropdownMenu slot="list">
      <template v-for="(item, index) in data">
        <DropdownItem v-if='!item.children || !item.children.length' :key="'child' + index">
          <template>
            <FLIcon :type="item.icon" v-if="item.isFLIcon"></FLIcon>
            <Icon :type="item.icon" v-else></Icon>
          </template>      
          <span class="dropdown-menu-title">{{item.name}}</span>
        </DropdownItem>
        <PDropdownMenu v-else 
          :key="'children' + index"
          :data="item.children"
          :children-key="childrenKey">
          <template slot="dropContent">
            <template>
              <FLIcon :type="item.icon" v-if="item.isFLIcon"></FLIcon>
              <Icon :type="item.icon" v-else></Icon>
            </template>      
            <span class="dropdown-menu-title">{{item.name}}</span>
            <Icon type="ios-arrow-right" class='right'></Icon>
          </template>  
        </PDropdownMenu>
      </template>
    </DropdownMenu>  
  </Dropdown>
</template>

<script>
import {Dropdown, DropdownMenu, DropdownItem, Icon} from 'iview';
import {FLIcon} from "@/components/";

export default {
  name: 'PDropdownMenu',
  components: {Dropdown, DropdownMenu, DropdownItem, Icon, FLIcon},
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
};
</script>

<style lang="less" scoped>
  .dropdown-menu-title {
    margin: 0 24px;
  }
</style>

