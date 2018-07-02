import React, {Component} from 'react';
// import classnames from 'classnames';
import ChartDrag from './main';
import shouldComponentUpdate from 'src/utils/shouldComponentUpdate';
import './index.less';

class DragChart extends Component {
  constructor () {
    super();
    this.state = {
			
    };
  }

  componentDidMount () {
    this.renderChart(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if('data' in nextProps && this.props != nextProps) {
      this.renderChart(nextProps);
    }
  }

	shouldComponentUpdate = shouldComponentUpdate

	EditData (data) {
	  const obj = {};
	  obj.nodes = data.nodes;
	  obj.edges = data.edges;

	  obj.nodes.forEach((item, i) => {
	    item.id = item.id || i + 'node' + new Date().getTime();
	  });
		
	  return obj;
	}

	renderChart (props) {
	  const data = this.EditData(props.data);
	  new ChartDrag({
	    container: this.refs.dragChart,
	    dragData: data,
	    ...props
	  });
	}

	render () {
	  return (
	    <div className='drag-chart'>
	      <div className='drag-chart-box' ref='dragChart'>
	      </div>
	    </div>
	  );
	}
}

export default DragChart;