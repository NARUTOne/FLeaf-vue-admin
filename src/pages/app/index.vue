<template>
  <div id="app">
    <div :class="wrapClass">
      <Layout class="app-layout">
        <Sider 
					hide-trigger 
					collapsible
          :width="200"
					:class="siderClass"
					:collapsed-width="COLLAPSED_SIDER_W" 
					ref='sider' v-model="isCollapsedSider"
					v-show='isShowSider'>
          <div class="sider-logo" :style="{height: HEADER_H + 'px'}">
            <Logo :isCollapsed="isCollapsed"/>
          </div>
          <NavMenu :isCollapsed="isCollapsed" :layout="layout" :theme="theme" :style="`height: calc(100% - ${HEADER_H}px)`"/>
        </Sider>
        <template>
          <Layout v-if="isLogin" class="layout-right">
            <FLHeader />
            <Body :style="{width: bodyWidth + 'px'}">
              <PBreadcrump ></PBreadcrump>
              <div class="body-content"><router-view></router-view></div>	
            </Body>
            <FLFooter />
          </Layout> 
          <Layout v-else>
            <Body :style="{width: bodyWidth + 'px'}">
              <router-view></router-view>
            </Body>
          </Layout>
        </template>
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
import {PBreadcrump} from 'components';

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
    Logo,
    PBreadcrump
  },
  data: function () {
    return {
      COLLAPSED_SIDER_W,
      HEADER_H,
      isLogin: true,
      isCollapsedSider: false,
      bodyWidth: 0,
    };
  },
  created: function () {
    this.checkRouter();
  },
  mounted: function () {
    // console.log(this.$store.state.login.state);
    if(auth.user && auth.isLoginIn()) {
      const data = auth.user;
      this.$store.commit('login/LOGIN_SUCCESS', data);
      this.renderBodyWidth();
    }
    else {
      this.$router.push('/login');
    }

    window.onresize = () => {
      this.renderBodyWidth();
    };
  },
  computed: {
    ...mapGetters({
      isCollapsed: 'isCollapsed',
      layout: 'layout',
      theme: 'theme',
      isFix: 'isFix'
    }),
    wrapClass () {
      return [
        'wrapper',
        this.isFix ? 'wrapper-fixed' : 'wrapper-scroll'
      ];
    },
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
    isCollapsed: 'collapsedSider',
    isShowSider: 'renderBodyWidth',
    isCollapsedSider: 'renderBodyWidth'
  },
  methods: {
    renderBodyWidth () {
      let width = 0;
      const W = window.innerWidth;
      if(this.isShowSider) {
        if(this.isCollapsedSider) {
          width = W - COLLAPSED_SIDER_W;
        } else {
          width = W - 200;
        }
      }
      else {
        width = W;
      }
      
      this.bodyWidth = width;
    },
    checkRouter () {
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
    width: 100%;
    overflow: hidden;
    animation: wrapper--fade .25s cubic-bezier(.455,.03,.515,.955);
    .app-layout {
      flex: 1;
    }
  }
  .wrapper-scroll {
    min-height: 100vh;
    overflow-y: auto;
  }
  .wrapper-fixed {
    height: 100vh;
    > div {
      height: 100%;
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
  // .layout-right {
  //   height: 100%;
  //   overflow: hidden;
  //   overflow-y: auto;
  // }
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
	.body-content {
    padding: 8px;
		> div {
			padding: 8px;
			border-radius: 6px;
			border: 1px solid #efefef;
			background-color: #fff;			
		}
	}
</style>