<template>
  <router-link to='/' :class='logoClasses'>
    <span class='layout-logo-title'>FLVadmin</span>
  </router-link>
</template>

<script>

export default {
	name: 'Logo',
	props: {
		isCollapsed: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		logoClasses () {
			return [
				'layout-logo',
				this.isCollapsed ? 'layout-logo-collapsed' : ''
			];
		}
	}
};
</script>

<style lang="less" scoped>
@import '~utils/style/variables.less';
  .layout-logo {
    display: block;
    width: 100%;
    height: @flv-header-height;
    padding: 8px 0 8px 66px;
    line-height: 42px;
    font-size: 22px;
    font-family: cursive;
    font-weight: 600;
    background: url('~static/img/logo.png') left center no-repeat;
    background-size: contain;
    border-radius: 6px;
    .layout-logo-title {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: width .2s ease .2s;
    }
  }
  .layout-logo-collapsed {
    background: url('~static/img/logo.png') center no-repeat;
    background-size: contain;
    transition: all .2s base;
    .layout-logo-title {
      width: 0px;
      transition: width .2s ease;
    }
  }
</style>
