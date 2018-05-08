<template>
  <div v-if="isChildren" :class="pdClass">
    <PDropdownMenu  
      :data="data.children"
      :children-key="childrenKey">
      <div slot="dropContent" class="pd-content">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>          
      </div>
    </PDropdownMenu>         
  </div>
  <div v-else :class="pdClass">
    <Dropdown placement="right-start" @on-click="handleMenuClick" :class='dropdownClass'>
      <div class="pd-content">
        <Button type='text' >
          <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
          <Icon :type="data.icon" v-else></Icon>
        </Button>  
      </div>
      <DropdownMenu slot="list">
        <DropdownItem :name="data.name">{{data.title}}</DropdownItem>
      </DropdownMenu>
    </Dropdown>   
  </div>  
</template>

<script>
import {Menu, Icon, Dropdown, DropdownMenu, DropdownItem, Button} from "iview";
import {FLIcon} from "@/components/";
import PDropdownMenu from './PDropdownMenu';

const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

export default {
  name: 'ShrinkMenu',
  components: {
    MenuItem, Submenu, Icon, FLIcon, PDropdownMenu, Dropdown, DropdownMenu, DropdownItem, Button
  },
  data() {
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
    pdClass () {
      return [
        'shrink-menu',
        'shrink-menu-' + this.theme
      ];
    },
    dropdownClass () {
      return `dropdown-theme-${this.theme}`;
    },
    isChildren() {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length;
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
  @import '~utils/style/variables.less';
  .shrink-menu {
    padding: 16px 0;
    .ivu-dropdown {
      display: block;
    }
    .pd-content {
      text-align: center;
      i {
        font-size: 20px;
      }
    }
  }
  .shrink-menu-dark {
    color: #fff;
    background-color: @flv-dark;
    * {
      color: #fff
    }
  }
  .shrink-menu-light {
    background-color: #fff;
  }
  
</style>

