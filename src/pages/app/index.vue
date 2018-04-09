<template>
  <div id="app">
    <div class="wrapper">
      <Layout class="app-layout">
        <Sider hide-trigger collapsible :collapsed-width="78">
          <NavMenu />
        </Sider>
        <Layout>
          <FLHeader v-show="isHeader"/>
          <Body><router-view></router-view></Body>
          <FLFooter />
        </Layout>    
      </Layout>      
    </div>    
  </div>
</template>
<script>
  import {Layout} from 'iview';
  import NavMenu from './nav/';
  import FLHeader from './header/';
  import Body from './body/';
  import FLFooter from './footer/';
  import auth from 'utils/auth';

  const Sider = Layout.Sider;
  
  export default {
    name: 'App',
    components: {
      Layout,
      Sider,
      FLHeader,
      Body,
      FLFooter,
      NavMenu
    },
    data: function() {
      return {
        isHeader: true
      };
    },
    created: function() {
      this.checkRouter();
    },
    mounted: function() {
      // console.log(this.$store.state.login.state);
      if(auth.user && auth.isLoginIn()) {
        const data = auth.user;
        this.$store.commit('LOGIN_SUCCESS', data);
      }
      else {
        this.$router.push('/login');
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'checkRouter'
    },
    methods: {
      checkRouter() {
        const path = this.$route.path;
        // console.log(path);
        if (path === '/login' || path === '/*') {
          this.isHeader = false;
        }
        else {
          this.isHeader = true;
        }
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
</style>