<template>
  <Header :class="headerClass">
    <Row :gutter="16">
      <Col :xs="12" :sm="12" :md="4" :lg="4" >
        <Logo v-if="isLogo"></Logo>
        <Icon
          v-else
          @click.native="collapsedSider" 
          :class="rotateIcon" 
          :style="{margin: '20px 20px 0'}" 
          type="navicon-round" 
          size="24"></Icon>
      </Col>
      <Col :xs="0" :sm="0" :md="14" :lg="14">
        <div class="t-center default-color header-title" v-show="layout == 'left'">FireLeaf-Vue-Admin</div>
        <NavMenu v-show="layout == 'top'" :layout="layout" :theme="theme"></NavMenu>
      </Col>
      <Col :xs="12" :sm="12" :md="6" :lg="6" class='t-center'>
        <Row type="flex" justify="end" class="header-config">
          <Col span='3'>
            <Icon type="arrow-resize" class='pointer' title='全屏' @click.native="handleScreenFull"></Icon>
          </Col>
          <Col span='6'>
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
                <DropdownItem>
                  <dl>
                    <dt>布局固定</dt>
                    <dd>
                      <Switch :value="isFix" @on-change="handleFixChange">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                      </Switch>
                    </dd>
                  </dl>
                </DropdownItem>
                <DropdownItem divided>系统配置</DropdownItem>                  
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col span='12'>
            <div class=" header-user ">
              <Dropdown :class='dropdownClass'>
                <div><Avatar class="default-bg" src='https://i.loli.net/2018/05/12/5af662c33a177.jpg' />&nbsp; {{user ? user.userName : ''}}</div>
                <DropdownMenu slot="list">
                  <DropdownItem>
                    <template  v-if="isLogin">
                      <Icon type='log-out' class='header-log-icon' title='登出' @click.native="handleLoginOut()"/>&nbsp;登出
                    </template>
                    <template v-else>
                      <Icon type='log-in'  class='header-log-icon' title='登录' @click.native="handleLogin()"/>&nbsp;登录
                    </template>
                  </DropdownItem>                
                </DropdownMenu>
              </Dropdown>
            </div>          
          </Col>
        </Row>            
      </Col>
    </Row>
  </Header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {Layout, Row, Col, Avatar, Icon, Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Switch } from 'iview';
import Logo from '../logo/';
import NavMenu from '../nav/';
import screenfull from 'screenfull';

const Header = Layout.Header;

export default {
	name: 'FLHeader',
	data() {
		return {
		
		};
	},
	components: { 
		Header, Row, Col, Avatar, Icon, Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Logo, NavMenu, Switch 
	},
	computed: {
		...mapGetters('login', {
			user: 'getUser',
		}),
		...mapGetters({
			isFix: 'isFix',
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
		...mapActions([
			'handleThemeChange',
			'handleLayoutChange',
			'handleLayoutFixChange'
		]),
		setLayoutChange(value) {
			const obj = {
				layout: value
			};
      
			this.$Loading.start();
			this.handleLayoutChange(obj).then(() => {
				this.$Loading.finish();
			});
		},
		setThemeChange(value) {
			const obj = {
				theme: value
			};

			this.$Loading.start();
			this.handleThemeChange(obj).then(() => {
				this.$Loading.finish();
			});
		},
		handleFixChange (bol) {
			const obj = {
				isFix: bol
			};

			this.$Loading.start();
			this.handleLayoutFixChange(obj).then(() => {
				this.$Loading.finish();
			});
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
		},
		handleScreenFull() {
			if (screenfull.enabled) {
				screenfull.request();
			}
		}
	}
};
</script>

<style lang='less' scoped>
  @import '~utils/style/variables.less';
  .header {
    height: @flv-header-height;
    padding: 0 16px;
    font-size: 14px;
    line-height: 60px;
    box-shadow: 0 2px 8px @flv-shadow-color;
    transition: all 0.3s;
    .header-title {
      font-size: 18px;
      font-weight: 600;
    }
    .header-user {
      margin-left: 16px;
      font-size: 14px;
      .header-log-icon {
        cursor: pointer;
      }
    }
    .menu-icon{
			transition: all .3s;
			cursor: pointer;
    }
    .rotate-icon{
      transform: rotate(-90deg);
    }
  }
  .header-theme-dark {
    color: #fff;
  }
  .header-theme-light {
    background-color: #fff;
  }
</style>


