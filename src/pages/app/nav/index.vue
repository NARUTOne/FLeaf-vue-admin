<template>
  <Menu :mode='menuMode' theme="dark" width="auto" @on-select="handleMenuClick" :class="menuitemClasses">
    <NavNode
      v-for="(item, i) in navsData"
      :key="i"
      :data="item"
      :isCollapsed="isCollapsed"
      :children-key="childrenKey" />
  </Menu>
</template>

<script>
import {Menu} from 'iview';
import {NAV_LIST} from '@/mock/CONST';
import NavNode from "./components/NavNode";

export default {
	name: 'NavMenu',
	data: function() {
		return {
			navsData: NAV_LIST,
			childrenKey: 'children'
		};
	},
	components: {
		Menu,
		NavNode
	},
	props: {
		isCollapsed: {
			type: Boolean,
			default: false
		},
		layout: {
			type: String,
			default: 'left'
		}
	},
	computed: {
		menuitemClasses () {
			return [
				'menu-item',
				this.isCollapsed ? 'collapsed-menu' : ''
			];
		},
		menuMode() {
			return this.layout == 'left'? 'vertical' : 'horizontal';
		}
	},
	methods: {
		handleMenuClick(url) {
			this.$router.push(url);
		}
	}
};
</script>

<style lang="less" scoped>
  .menu-item {
    // overflow: hidden;
  }
</style>

