<template>
  <Dropdown placement="right-start" @on-click="handleMenuClick"  :class='dropdownClass'>
    <slot name='dropContent'></slot>
    <DropdownMenu slot="list">
      <template v-for="(item, index) in data">
        <DropdownItem v-if='!item.children || !item.children.length' :key="'dpchild' + index" :name="item.name">
          <template>
            <FLIcon :type="item.icon" v-if="item.isFLIcon"></FLIcon>
            <Icon :type="item.icon" v-else></Icon>
          </template>      
          <span class="dropdown-menu-title">{{item.title}}</span>
        </DropdownItem>
        <PDropdownMenu v-else 
          :key="'dpchildren' + index"
          :data="item.children"
          :theme="theme"
          :children-key="childrenKey"
          @on-select="handleMenuClick">
          <template slot="dropContent">
            <div class="dp-children menu-hover">
              <template>
                <FLIcon :type="item.icon" v-if="item.isFLIcon"></FLIcon>
                <Icon :type="item.icon" v-else></Icon>
              </template>      
              <span class="dropdown-menu-title">{{item.title}}</span>
              <Icon type="ios-arrow-right" class='dp-right-icon'></Icon>
            </div>            
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
  data () {
    return {};
  },
  props: {
    data: {
      type: [Object, Array]
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
    dropdownClass () {
      return `dropdown-theme dropdown-theme-${this.theme}`;
    }
  },
  methods: {
    handleMenuClick (name) {
      this.$emit('on-select', name);
    }
  }
};
</script>

<style lang="less" scoped>
  
</style>
