<template>
  <li v-if="isChildren" class="level-menu-root">
    <Dropdown placement="bottom" @on-click="handleMenuClick" :class='dropdownClass'>
      <div class="menu-hover level-menu-root-title" @click="handleClick(data.name)">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
        <span>{{data.title}}</span>
      </div>
      <DropdownMenu slot="list">
        <template v-for="(item, index) in data.children">
          <DropdownItem v-if='!item.children || !item.children.length' :key="'dpchild' + index" :name="item.name">
            <template>
              <FLIcon :type="item.icon" v-if="item.isFLIcon"></FLIcon>
              <Icon :type="item.icon" v-else></Icon>
            </template>
            <span class="dropdown-menu-title">{{item.title}}</span>
          </DropdownItem>
          <PDropdownMenu v-else
            :key="'dpchildren' + index"
            :data="item"
            :children-key="childrenKey"
            :theme='theme'
            @on-select="handleMenuClick">
            <template slot="dropContent">
              <div class="dp-children">
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
  </li>
  <li v-else class="level-menu-root">
    <div class="menu-hover level-menu-root-title" @click="handleClick(data.name)">
      <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
      <Icon :type="data.icon" v-else></Icon>  
      <span>{{data.title}}</span>
    </div>
  </li>
</template>

<script>
import {Icon, Dropdown, DropdownMenu, DropdownItem} from "iview";
import {FLIcon} from "@/components/";
import PDropdownMenu from './PDropdownMenu';

export default {
  name: 'LevelMenu',
  components: {
    Dropdown, DropdownMenu, DropdownItem, Icon, FLIcon, PDropdownMenu
  },
  data () {
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
    }
  },
  computed: {
    isChildren () {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length ;
    },
    dropdownClass () {
      return `dropdown-theme-${this.theme}`;
    } 
  },
  methods: {
    handleClick (name) {
      this.$emit('on-select', name);
    },
    handleMenuClick (name) {
      this.$emit('on-select', name);
    }
  }
};
</script>
