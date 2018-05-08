<template>
  <Submenu :name="data.url" v-if="isChildren" :class='dropdownSubmenuClass'>
    <template slot="title">
      <template>
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
      </template>      
      <span>{{data.name}}</span> 
    </template>
    <LevelMenu 
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

<script>
import {Menu, Icon} from "iview";
import {FLIcon} from "@/components/";

const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

export default {
	name: 'LevelMenu',
	components: {
		MenuItem, Submenu, Icon, FLIcon
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
		},
		dropdownSubmenuClass() {
			return `dropdown-submenu-theme-${this.theme}`;
		}
	}
};
</script>

<style lang="less" scoped>
  
</style>


