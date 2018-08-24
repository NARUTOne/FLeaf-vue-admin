<template>
  <div v-if="isChildren" :class="pdClass">
    <PDropdownMenu
      :data="data"
      :children-key="childrenKey"
      :theme="theme"
      @on-select="handleMenuClick">
      <div slot="dropContent" class="shrink-menu-root">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
      </div>
    </PDropdownMenu>
  </div>
  <div v-else :class="pdClass">
    <Dropdown placement="right-start" @on-click="handleMenuClick" :class='dropdownClass'>
      <DropdownItem class="menu-hover" :name="data.name">
         <div class="shrink-menu-root">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
      </div>
      </DropdownItem>
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
    pdClass () {
      return [
        'shrink-menu',
        'shrink-menu-' + this.theme
      ];
    },
    dropdownClass () {
      return `dropdown-theme-${this.theme}`;
    },
    isChildren () {
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
