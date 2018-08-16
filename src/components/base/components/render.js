/**
 * ! vue render, fun-component
 * @params {render}
 * ? use render dom
 */

export default {
  name: 'RenderDom',
  functional: true,
  props: {
    render: Function
  },
  render: (h, ctx) => { // 提供第二个参数作为上下文
    return ctx.props.render(h);
  }
};
