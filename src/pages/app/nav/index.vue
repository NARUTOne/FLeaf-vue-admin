<template>
  <div class="nav-box">
    <template v-if="layout == 'left'">
      <div :class="navThemeClass" >
        <Menu 
					v-show="!isCollapsed" 
					mode='vertical' 
					width="auto"
					:class="menuitemClasses"
					:theme="theme"
					:active-name="activeName"
					:open-names="openNames"
					@on-select="handleMenuClick" 
					>
          <ExpandMenu 
            v-for="(item, i) in navsData"
            :key="'expand' + i"
            :data="item"
            :children-key="childrenKey" />
        </Menu>
        <ShrinkMenu 
          v-show="isCollapsed"
          v-for="(item, i) in navsData"
          :data="item"
          :key="'shrink' + i"
					:theme="theme"
          :children-key="childrenKey"
          @on-select="handleMenuClick"/>  
      </div>
    </template> 
    <template v-else>
      <div :class="navThemeClass" id="sd" >
        <Menu 
					mode="horizontal" 
					width="auto"
					:class="menuitemClasses"
					:theme="theme" 					
					:active-name="activeName"
					:open-names="openNames"
					@on-select="handleMenuClick" 
					>
          <LevelMenu 
            v-for="(item, i) in navsData"
            :key="'level' + i"
            :data="item"
						:theme="theme"
            :children-key="childrenKey" />
        </Menu>
      </div>
    </template>   
  </div>  
</template>

<script>
import {Menu} from 'iview';
import {NAV_LIST} from '@/mock/CONST';
// import NavNode from "./components/NavNode";
import ExpandMenu from './components/ExpandMenu';
import ShrinkMenu from './components/ShrinkMenu';
import LevelMenu from './components/LevelMenu';

export default {
	name: 'NavMenu',
	data: function() {
		return {
			navsData: NAV_LIST,
			childrenKey: 'children',
			activeName: '',
			openNames: []
		};
	},
	components: {
		Menu,
		// NavNode,
		ExpandMenu,
		ShrinkMenu,
		LevelMenu
	},
	props: {
		isCollapsed: {
			type: Boolean,
			default: false
		},
		layout: {
			type: String,
			default: 'left'
		},
		theme: {
			type: String,
			default: 'dark'
		}
	},
	watch: {
		$route () {
			this.setMenuName();
		}
	},
	created () {
		this.setMenuName();
	},
	computed: {
		navThemeClass () {
			return [
				'nav-theme-' + this.theme
			];
		},
		menuitemClasses () {
			return [
				'nav-expand-menu',
				this.isCollapsed ? 'collapsed-menu' : ''
			];
		}
	},
	methods: {
		setMenuName () {
			const {name, matched} = this.$route;
			// console.log(this.$route.matched);
			const openName = matched[1].name;
			
			this.activeName = name;
			this.openNames = [openName];
		},
		handleMenuClick(name) {
			if(name.indexOf('/') < 0) {
				this.$router.push({name});
			} else {
				this.$router.push(name);
			}
		}
	}
};
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';
  .nav-theme-dark {
    color: #fff;
    background-color: @flv-dark;
  }
  .nav-theme-light {
    background-color: #fff;
  }
</style>

