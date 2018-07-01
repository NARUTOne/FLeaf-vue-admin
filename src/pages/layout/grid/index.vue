<template>
  <div class="layout-grid">
    <Row :gutter="8" class-name="margin-b-1">
      <Col :md="24" :xs="24">
        <Demo>
          <span slot="header">CSS grid</span>
          <div slot="body">
            <div class="css-grid">
              <div class="grid-column" v-for="(item, i) in gridItem">
                <span>{{item}}</span>
              </div>
            </div>            
          </div>
          <div slot="footer">
            <Doc>
              <DocLine>利用<code>grid</code>进行页面布局, <a href="http://www.css88.com/archives/8510" target="_blank">CSS Grid</a></DocLine>
              <DocLine type="warn">采用 <code>fr</code> 代表一个片段的灵活长度单位, 浏览器会分割开放空间并根据 fr 倍数将区域分配给列</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Demo, Doc, DocLine} from '@/components/';
import {Row, Col} from 'iview';
export default {
  name: 'LayoutGrid',
  components: {Demo, Doc, DocLine, Row, Col},
  data () {
    return {
      gridItem: []
    };
  },
  mounted () {
    this.creadGrids();
  },
  methods: {
    creadGrids () {
      const arr = Array.apply(null, Array(100)).map( (item, i) => {
        return i;
      });
      this.gridItem = [...arr];
    }
  }
};
</script>

<style lang="less" scoped>
@import '~utils/style/variables.less';
  .layout-grid {
    .css-grid {
      display: grid;
      grid-template-rows: repeat(4, 1fr); 
      grid-auto-columns: calc((600px - 3em) / 4);
      grid-auto-flow: column;
      grid-gap: 1em;
      height: 600px;
    }
    .grid-column {
      display: grid;
      grid-template-columns: 2fr 3fr 5fr;
      grid-column-gap: 16px;
      background-color: #ddd;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: calc((600px - 3em) / 4);
      span {
        grid-column: 2;
      }
    }

    .grid-column:nth-child(3n) {
      background-color: @flv-default-color;
    }

    .grid-column:nth-child(3n + 2) {
      background-color: @flv-success-color;
    }
  }
</style>


