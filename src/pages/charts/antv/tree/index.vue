<template>
  <div class="antv-tree">
    <PageDemo>
			<template slot='page-title'>FireLeaf 🍂 AntV Tree</template>
			<template slot="page-quote">
        树形图&nbsp;<a href="https://antv.alipay.com/zh-cn/index.html" target="_blank">AntV</a>
			</template>
      <template slot="page-desc">
        利用antv下的G2或G6进行图形开发
      </template>
    </PageDemo>
  </div>
</template>

<script>
import PageDemo from '@/pages/main-components/page-demo';

export default {
  name: 'AntvTree',
  components: {PageDemo}
};
</script>

<style lang="less" scoped>

</style>

