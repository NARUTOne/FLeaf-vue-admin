<template>
  <div class="flv-flicon">
		<PageDemo>
			<template slot='page-title'>FireLeaf 🍂 icons</template>
			<template slot="page-quote">
				本地定制化icons, 使用详情&nbsp;
				<a href="https://www.jianshu.com/p/e6daa62c56fd" target="_blank">本地化定制icon组件</a>
			</template>
			<template slot="page-desc">
				<p>
					<a href="https://github.com/NARUTOne/FireLeaf-Vue-Scaffold" target="_blank">FireLeaf-Vue-Scaffold</a>中的icons主要采用默认组件库iview下的icons及，
					<a href="http://iconfont.cn" target="_blank">http://iconfont.cn</a>下的定制化icons
				</p>
			</template>
			<div class="flicon-search">
				<Input v-model="search" icon="ios-search" placeholder="根据icon-name查询" style="width: 500px;"></Input>
			</div>
			<div class="flicon-list">
				<Row :gutter="16">
					<Col span="3" v-for="(item, index) in filterIcons" :key="'flicon' + index">
							<dl>
								<dt><FLIcon :type="item.name"></FLIcon></dt>
								<dd>{{item.name}}</dd>
							</dl>
					</Col>
				</Row>
			</div>
		</PageDemo>
	</div>
</template>

<script>
import {Row, Col, Input} from 'iview';
import FLIcon from 'components/FLIcon/';
import PageDemo from '@/pages/main-components/page-demo';
import ICONS_LIST from './icons';

export default {
  name: 'FLIconList',
  components: {
    PageDemo, Row, Col, FLIcon, Input
  },
  data () {
    return {
      icons: ICONS_LIST,
      search: ''
    };
  },
  computed: {
    filterIcons () {
      return this.icons.filter(icon => icon.name.indexOf(this.search) > -1);
    }
  }
};
</script>

<style lang="less" scoped>
  .flv-flicon {
    .flicon-search {
      margin: 32px 0;
      text-align: center;
      input {
        margin: 0 auto;
      }
    }
    .flicon-list {
      text-align: center;
      i {
        font-size: 32px;
      }
      .ivu-col {
        margin: 16px 0;
      }
    }
  }
</style>

