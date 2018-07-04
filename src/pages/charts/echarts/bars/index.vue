<template>
  <div class="echarts-bars">
    <PageDemo>
			<template slot='page-title'>FireLeaf 🍂 Echarts Bars</template>
			<template slot="page-quote">
        条形图&nbsp;<a href="http://echarts.baidu.com/" target="_blank">echarts</a>
			</template>
      <template slot="page-desc">
        封装vue-echarts, 条形图bars示例
      </template>
    </PageDemo>
  </div>
</template>

<script>
import PageDemo from '@/pages/main-components/page-demo';

export default {
  name: 'EchartsBars',
  components: {PageDemo}
};
</script>

<style lang="less" scoped>

</style>

