<template>
  <div class="vue">
    <Row :gutter="8">
      <Col :md="12" :xs="24">
        <Demo>
          <div slot='header'>
            <span class="default-color">v-if</span>
            &nbsp;&nbsp;vs&nbsp;&nbsp;
            <span class="default-color">v-show</span>
          </div>
          <div slot="body">
            <div class="margin-b-1">
              <p class="margin-b-1">
                <b>message:</b> 
                <template v-if="vIf === '0'">v-if</template>
                <template v-else-if="vIf === '1'">v-else-if</template>
                <template v-else>v-else</template>
              </p>
              <RadioGroup v-model="vIf" type="button">
                <Radio label="0">v-if</Radio>
                <Radio label="1">v-else-if</Radio>
                <Radio label="2">v-else</Radio>
              </RadioGroup>
            </div>
            <div class="margin-b-1">
              <p class="margin-b-1">
                <b>message:</b> 
                <span v-show="isVShow0">v-show-0</span>
                <span v-show="isVShow1">v-show-1</span>
                <span v-show="isVShow2">v-show-2</span>
              </p>
              <CheckboxGroup v-model="vShow" >
                <Checkbox  label="0">v-show-0</Checkbox >
                <Checkbox  label="1">v-show-1</Checkbox >
                <Checkbox  label="2">v-show-2</Checkbox >
              </CheckboxGroup>
            </div>
          </div>
          <p slot="footer">
            <Doc>
              <DocLine><code>v-if</code>惰性的、条件渲染，监听进行销毁和重建</DocLine>
              <DocLine><code>v-show</code>条件显隐，监听进行css显隐切换</DocLine>
              <DocLine>
                一般来说，<code>v-if</code> 有更高的切换开销，而 <code>v-show</code> 有更高的初始渲染开销。
                因此，如果需要非常频繁地切换，则使用 <code>v-show</code> 较好；如果在运行时条件很少改变，则使用 <code>v-if</code> 较好。
              </DocLine>
              <DocLine type="warn"><code>v-show</code>不支持 <code>{{'template'}}</code> 元素，也不支持 <code>v-else</code></DocLine>
            </Doc>
          </p>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
      </Col>
    </Row>
  </div>
</template>

<script>
import {Demo, Doc, DocLine} from '@/components/';
import {Button, RadioGroup, Radio, Row, Col, CheckboxGroup, Checkbox } from 'iview';

export default {
  name: 'Vue',
  components: {
    Demo, Doc, DocLine, Button, RadioGroup, Radio, Row, Col, CheckboxGroup, Checkbox 
  },
  data () {
    return {
      vIf: '0',
      vShow: ['0']
    };
  },
  computed: {
    isVShow0 () {
      return this.vShow.indexOf('0') >= 0;
    },
    isVShow1 () {
      return this.vShow.indexOf('1') >= 0;
    },
    isVShow2 () {
      return this.vShow.indexOf('2') >= 0;
    }
  }
};
</script>

<style lang="less" scoped>

</style>

