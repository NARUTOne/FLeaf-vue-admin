<template>
  <Header :class="headerClass">
    <Row :gutter="16">
      <Col :xs="12" :sm="12" :md="6" :lg="6" >
        <Logo v-if="isLogo"></Logo>
        <Icon
          v-else
          @click.native="collapsedSider" 
          :class="rotateIcon" 
          :style="{margin: '20px 20px 0'}" 
          type="navicon-round" 
          size="24"></Icon>
      </Col>
      <Col :xs="0" :sm="0" :md="12" :lg="12">
        <!-- <div class="t-center default-color header-title">FireLeaf-Vue-Scaffold</div> -->
      </Col>
      <Col :xs="12" :sm="12" :md="6" :lg="6">
        <div class="t-right clear-float">
          <div class="left header-config">
            <Dropdown :class='dropdownClass'>
              <div><Icon type="gear-a"></Icon>&nbsp;设置</div>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <dl>
                    <dt>菜单布局</dt>
                    <dd>
                      <RadioGroup :value="layout" @on-change="setLayoutChange">
                        <Radio label="left">
                          <Icon type="arrow-left-a"></Icon>
                          <span>左侧</span>
                        </Radio>
                        <Radio label="top">
                          <Icon type="arrow-up-a"></Icon>
                          <span>顶部</span>
                        </Radio>
                      </RadioGroup>
                    </dd>
                  </dl>
                </DropdownItem>
                <DropdownItem>
                  <dl>
                    <dt>主题</dt>
                    <dd>
                      <RadioGroup :value="theme" @on-change="setThemeChange">
                        <Radio label="dark">
                          <span>夜空</span>
                        </Radio>
                        <Radio label="light">
                          <span>明亮</span>
                        </Radio>
                      </RadioGroup>
                    </dd>
                  </dl>
                </DropdownItem>
                <DropdownItem divided>系统配置</DropdownItem>                  
              </DropdownMenu>
            </Dropdown>
          </div>
          <div class="left header-user ">
            <Dropdown :class='dropdownClass'>
              <div><Avatar class="default-bg" icon="person" />&nbsp; {{user ? user.userName : ''}} &nbsp;&nbsp;</div>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <template>
                    <Icon type='log-out' v-if="isLogin" class='header-log-icon' title='登出' @click.native="handleLoginOut()"/>
                    <Icon type='log-in' v-else class='header-log-icon' title='登录' @click.native="handleLogin()"/>
                  </template>
                </DropdownItem>                
              </DropdownMenu>
            </Dropdown>
          </div>          
        </div>
      </Col>
    </Row>
  </Header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import {Layout, Row, Col, Avatar, Icon, Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio } from 'iview';
  import Logo from '../logo/';
  import NavMenu from '../nav/';

  const Header = Layout.Header;

  export default {
    name: 'FLHeader',
    data() {
      return {
      
      };
    },
    components: {
      Header,
      Row,
      Col,
      Avatar,
      Icon,
      Dropdown,
      DropdownMenu,
      DropdownItem,
      RadioGroup,
      Radio,
      Logo,
      NavMenu
    },
    computed: {
      ...mapGetters('login', {
        user: 'getUser',
      }),
      ...mapGetters({
        theme: 'theme',
        layout: 'layout',
        isCollapsed: 'isCollapsed'
      }),
      headerClass() {
        return `header header-theme-${this.theme}`;
      },
      dropdownClass() {
        return `dropdown-theme-${this.theme}`;
      },
      isLogin () {
        return this.user && this.user.userName;
      },
      isLogo() {
        return this.layout == 'top';
      },
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
    },
    methods: {
       ...mapActions('login', [
        'toLogout'
      ]),
      ...mapActions(['handleThemeChange', 'handleLayoutChange']),
      setLayoutChange(value) {
        const obj = {
          layout: value
        };

        this.handleLayoutChange(obj);
      },
      setThemeChange(value) {
        const obj = {
          theme: value
        };

        this.handleThemeChange(obj);
      },
      handleLogin() {
        this.handleLoginOut();
      },
      handleLoginOut() {
        this.toLogout().then((msg) => {
          this.$Message.success(msg || 'success!');
          this.$router.push('/login');
        }).catch(() => {
          this.$Message.error('error!');
        });
      },
      collapsedSider() {
        this.$store.commit('handleCollapsedSider', {
          isCollapsed: !this.isCollapsed
        });
      }
    }
  };
</script>

<style lang='less'>
  @import '~utils/style/variables.less';

  .header {
    height: 60px;
    padding: 8px 16px;
    line-height: 42px;
    box-shadow: 0 2px 8px @flv-shadow-color;
    transition: all 0.3s;
    .header-title {
      font-size: 18px;
      font-weight: 600;
    }
    .header-user {
      margin-left: 16px;
      font-size: 16px;
      .header-log-icon {
        cursor: pointer;
      }
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
  }
  .header-theme-dark {
    color: #fff;
    .dropdown-theme-dark {
      color: #fff;
      background-color: @flv-dark;
      >div, li {
        color: #fff;
        background-color: @flv-dark;
      }
      li::before {
        background-color: @flv-dark;
      }
      .ivu-dropdown-item-divided{
        border-top-color: #fff;
      }
    }
  }
  .header-theme-light {
    background-color: #fff;
  }
</style>


