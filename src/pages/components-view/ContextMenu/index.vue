<template>
  <div class="components-contextmenu">
    <PageDemo>
			<template slot='page-title'>FireLeaf-Vue 🍂 Components</template>
			<template slot="page-quote">
				vue-context-menu 组件&nbsp;
			</template>
			<template slot="page-desc">
        <Row :gutter="8" class-name="margin-b-1">
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">ContextMenu-basic</span>
              <div slot="body">
                <a href="javascript:;" ref="contextExam">右键测试</a>
                <VueContextMenu class="right-menu"  :target="$refs['contextExam']" @show-change="handleShowChange" :show="visibel">
                  <a href="javascript:;" @click="handleClick('复制')">复制</a>
                  <a href="javascript:;" @click="handleClick('引用')">引用</a>
                  <a href="javascript:;" @click="handleClick('删除')">删除</a>
                </VueContextMenu>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>ContextMenu</code>基本折叠，默认可以同时展开多个面板，可以设置默认展开第几个。</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">iview-Dropdown-click</span>
              <div slot="body">
                <Dropdown trigger="click" style="margin-left: 20px;" @on-click="handleDropClick">
                  <a href="javascript:void(0)">
                      right click
                      <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem name="返回">返回</DropdownItem>
                      <DropdownItem style="color: #ed4014;" name="删除">删除</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine type="warn"><code>iview3.x 以上支持Dropdown</code>右键模拟。</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
        </Row>
			</template>
    </PageDemo>
  </div>
</template>

<script>
import {Row, Col, Button, Icon, Dropdown, DropdownMenu, DropdownItem} from 'iview';
import {Demo, Doc, DocLine, VueContextMenu} from '@/components/';
import PageDemo from '@/pages/main-components/page-demo';
export default {
  name: 'CContextMenu',
  components: {Row, Col, Button, Icon, Demo, Doc, DocLine, PageDemo, VueContextMenu, Dropdown, DropdownMenu, DropdownItem},
  data () {
    return {
      visibel: false
    };
  },
  methods: {
    handleShowChange (bol) {
      console.log(bol);
      this.visibel = bol;
    },
    handleDropClick (name) {
      this.$Message.info(name);
    },
    handleClick (name) {
      this.$Message.info(name);
    }
  }
};
</script>

<style>
.right-menu {
  background: #fff;
  border: solid 1px rgba(0, 0, 0, .2);
  border-radius: 3px;
  z-index: 999;
}
.right-menu a {
  width: 75px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
}
</style>

