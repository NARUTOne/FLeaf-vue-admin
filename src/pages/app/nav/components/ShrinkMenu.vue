<template>
  <div v-if="isChildren" :class="pdClass">
    <PDropdownMenu  
      :data="data.children"
      :children-key="childrenKey"
      @on-select="handleMenuClick">
      <div slot="dropContent" class="pd-content" @click="handleClick(data.name)">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>          
      </div>
    </PDropdownMenu>
  </div>
  <div v-else :class="pdClass">
    <Dropdown placement="right-start" @on-click="handleMenuClick" :class='dropdownClass'>
      <div class="pd-content" @click="handleClick(data.name)">
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>  
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
		handleClick (name) {
			this.$emit('on-select', name);
		},
		handleMenuClick (name) {
			this.$emit('on-select', name);
		}
	}
};
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';
  .shrink-menu {
    padding: 8px 0;
    .ivu-dropdown {
      display: block;
    }
    .pd-content {
      padding: 12px 8px;
      text-align: center;
      cursor: pointer;
      transition: all .3s ease-in-out;
      i {
        font-size: 20px;        
      }
      &:hover {
        background-color: @flv-dark-hover;
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

