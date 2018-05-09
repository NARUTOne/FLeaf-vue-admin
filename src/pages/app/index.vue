<template>
  <div id="app">
    <div class="wrapper">
      <Layout class="app-layout">
        <Sider 
					hide-trigger 
					collapsible
					:class="siderClass"
					:collapsed-width="COLLAPSED_SIDER_W" 
					ref='sider' v-model="isCollapsedSider" 
					v-show='isShowSider'>
          <div class="sider-logo" :style="{height: HEADER_H + 'px'}">
            <Logo :isCollapsed="isCollapsed"/>
          </div>
          <NavMenu :isCollapsed="isCollapsed" :layout="layout" :theme="theme"/>
        </Sider>
        <Layout>
          <FLHeader v-show="isLogin"/>
          <Body><router-view></router-view></Body>
          <FLFooter />
        </Layout>    
      </Layout>
    </div>    
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {Layout} from 'iview';
import NavMenu from './nav/';
import FLHeader from './header/';
import Body from './body/';
import FLFooter from './footer/';
import Logo from './logo/';
import auth from 'utils/auth';
import {LAYOUT_VAR} from '@/mock/CONST';

const Sider = Layout.Sider;
const {COLLAPSED_SIDER_W, HEADER_H} = LAYOUT_VAR;

export default {
	name: 'App',
	components: {
		Layout,
		Sider,
		FLHeader,
		Body,
		FLFooter,
		NavMenu,
		Logo
	},
	data: function() {
		return {
			COLLAPSED_SIDER_W,
			HEADER_H,
			isLogin: true,
			isCollapsedSider: false
		};
	},
	created: function() {
		this.checkRouter();
	},
	mounted: function() {
		// console.log(this.$store.state.login.state);
		if(auth.user && auth.isLoginIn()) {
			const data = auth.user;
			this.$store.commit('login/LOGIN_SUCCESS', data);
		}
		else {
			this.$router.push('/login');
		}
	},
	computed: {
		...mapGetters({
			isCollapsed: 'isCollapsed',
			layout: 'layout',
			theme: 'theme'
		}),
		isShowSider () {
			return this.layout == 'left' && this.isLogin;
		},
		siderClass () {
			return `sider-${this.theme}`;
		}
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'checkRouter',
		isCollapsed: 'collapsedSider'
	},
	methods: {
		checkRouter() {
			const path = this.$route.path;
			// console.log(path);
			if (path === '/login' || path === '/*') {
				this.isLogin = false;
			}
			else {
				this.isLogin = true;
			}
		},
		collapsedSider () {        
			this.$refs.sider.toggleCollapse();
		}
	}
};
</script>

<style lang="less" >
  @import '~utils/style/common.less';
  .wrapper {
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;    
    overflow: hidden;
    animation: wrapper--fade .25s cubic-bezier(.455,.03,.515,.955);
    .app-layout {
      flex: 1;
    }
  }
  @keyframes wrapper--fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .sider-logo {
    overflow: hidden;
	}
	.sider-dark {
		background-color: @flv-dark;
		color: #fff;
	}
	.sider-light {
		position: relative;
		background-color: #fff !important;
		color: #333 ;
		&::after {
			content: '';
			height: calc(~'100% - @{flv-header-height}');
			width: 1px;
			position: absolute;
			top: @flv-header-height;
			right: 0;
			background: #dddee1;
		}
	}
</style>