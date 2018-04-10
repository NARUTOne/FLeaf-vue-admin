<template>
  <router-link to='/' class='header-logo'>
    system name
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
};
</script>

<style lang="less" scoped>
  .header-logo {
    display: block;
    font-size: 22px;
    padding-left: 66px;
    height: 42px;
    line-height: 42px;
    font-family: cursive;
    font-weight: 600;
    background: url('~static/img/logo.png') left center no-repeat;
    background-size: 42px 42px;
  }
</style>
