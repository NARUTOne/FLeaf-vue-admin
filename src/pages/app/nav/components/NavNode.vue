<template>
  <div>
    <template v-if="isCollapsed">
      <Dropdown placement="right-start" :class='dropdownClass' v-if="isChildren">
        <Submenu :name="data.url" >
          <template slot="title">
            <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
            <Icon :type="data.icon" v-else></Icon>
          </template>
        </Submenu>
        <DropdownMenu slot="list">
          <DropdownItem>
            <NavNode 
              v-for="(item, i) in data.children"
              :key="i"
              :data="item"
              :children-key="childrenKey" />
          </DropdownItem>          
        </DropdownMenu>
      </Dropdown>
      <Dropdown placement="right-start"  :class='dropdownClass' v-else>
        <MenuItem :name="data.url">
          <template>
            <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
            <Icon :type="data.icon" v-else></Icon>
          </template>
        </MenuItem>        
        <DropdownMenu slot="list">
          <DropdownItem>
            <span>{{data.name}}</span>
          </DropdownItem>         
        </DropdownMenu>
      </Dropdown>
    </template>
    <template v-else>
      <Submenu :name="data.url" v-if="isChildren">
        <template slot="title">
          <template>
            <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
            <Icon :type="data.icon" v-else></Icon>
          </template>      
          <span>{{data.name}}</span>
        </template>
        <NavNode 
          v-for="(item, i) in data.children"
          :key="i"
          :data="item"
          :children-key="childrenKey" />
      </Submenu>
      <MenuItem :name="data.url" v-else>
        <template>
          <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
          <Icon :type="data.icon" v-else></Icon>
        </template>   
        <!-- <router-link :to="data.url">{{data.name}}</router-link> -->
        <span>{{data.name}}</span>
      </MenuItem>  
    </template>
  </div>
</template>
  
<script>
import {Menu, Icon, Dropdown, DropdownMenu, DropdownItem} from "iview";
import {FLIcon} from "@/components/";
import {LAYOUT_VAR} from '@/mock/CONST';

const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

const {COLLAPSED_SIDER_W} = LAYOUT_VAR;

export default {
  name: 'NavNode',
  components: {
    MenuItem,
    Submenu,
    Icon,
    FLIcon,
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  data () {
    return {
      COLLAPSED_SIDER_W
    };
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
    },
    isCollapsed: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    isChildren () {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length ;
    },
    children () {
      return this.data[this.childrenKey];
    },
    dropdownClass () {
      return `dropdown-theme-${this.theme}`;
    },
    dropdownRelW () {
      return this.COLLAPSED_SIDER_W - 24;
    }
  }
};
</script>

<style lang="less" scoped>
  .menu-icon{
    transition: all .3s;
  }
  .menu-item span{
    display: inline-block;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu i{
    transform: translateX(8px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
</style>
<style lang='less'>
@import '~utils/style/variables.less';
@collapsed-W: 78px;

  // 全局设置
  .collapsed-menu {
    .ivu-menu-submenu-title>i:last-child {
      display: none;
      transition: all .2s ease;
    }
  }
  .ivu-menu-item {
    > i {
      margin-right: 8px;
    }
    > .ivu-icon {
      margin-right: 13px;
    }
  }

  .dropdown-theme-dark {
    color: #fff;
    >div:last-child, li {
      color: #fff;
      background-color: @flv-dark;
    }
    li::before {
      background-color: @flv-dark;
    }
    .ivu-dropdown-item-divided{
      border-top-color: #fff;
    }
    .ivu-dropdown-item{
      &:hover {
        background-color: @flv-dark-hover;
      }
      .ivu-menu-item {
        padding: 8px 0;
      }
    }
  }
</style>

