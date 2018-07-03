import  * as d3 from 'd3';
import $ from 'jquery';
import ContextMenu from '@/components/ContextMenu/';

const EXEC_STATUS = [{
  code: -1,
  title: '未运行',
  color: '#1b6d85'
}, {
  code: 1,
  title: '提交',
  color: '#30abdc'
}, {
  code: 2,
  title: '等待',
  color: '#eead2e'
}, {
  code: 3,
  title: '执行',
  color: '#8193e8'
}, {
  code: 4,
  title: '成功完成',
  color: '#98de91'
}, {
  code: 5,
  title: '失败',
  color: '#e4393c'
}, {
  code: 6,
  title: '被关闭',
  color: '#e6af5f'
}];

class ChartDrag {
  constructor (config) {
    this.config = config;
    this.container = config.container;
    this.orgData = config.dragData;
    this.width = config.options.width || this.container.clientWidth ;
    this.height = config.options.height || this.container.clientHeight ;

    const defaultOption = {
      zoom: {
        scale: 1.0, 
        x: 0, 
        y: 0
      },
      isDragNode: false,
      isDragLink: false,
      isLock: false,
      isShowLegend: true
    };
    this.options = Object.assign(defaultOption, config.options);

    this.init();
  }
 
  init () {
    const chartData = this.orgData;
    this.chart(chartData);
  }

  getTypeName (type) {
    let typeName = '';

    switch(type) {
    case '0':
      typeName = 'task';
      break;
    case '1':
      typeName = 'code';
      break;
    case '-1':
      typeName = 'vir';
      break;
    case '-2':
      typeName = 'vir';
      break;
    default:
      break;
    }
    return typeName;
  }
  
  getSize (type) {
    const typeName = this.getTypeName(type);
    let w = 60;
    const h = 36;
    
    switch(typeName) {
    case 'task':
      w = 120;
      break;
    case 'code':
      w = 120;
      break;
    case 'vir':
      w = 60;
      break;
    default:
      break;
    }

    return {
      w,
      h
    };
  }

  chart (data) {
    const _this = this;
    const {nodes, edges} = data;
    const W = this.width;
    const H = this.height;
    let dragingLink;
    let dragingLinkObj;

    d3.select(this.container).html('');

    // 获取 node
    function getIndexNode (index) {
      return nodes.find(item => item.id == index);
    }

    // 设计连线路径
    const pathLink = (d) => {
      const p = new Array();

      if (d.sourceId && d.targetId){
        const source = getIndexNode(d.sourceId);
        const target = getIndexNode(d.targetId);

        const sPoint = _this.getPointPath(source, d.sAnchor);
        const tPoint = _this.getPointPath(target, d.tAnchor);

        const  sourceY = sPoint.y;
        const  sourceX = sPoint.x;
        const  targetY = tPoint.y;
        const  targetX = tPoint.x;

        const m = (sourceX + targetX)/2;
        const n = (sourceY + targetY)/2;
        p[1] = m + "," + sourceY;
        p[2] = m + "," + n;

        p[0] =  sourceX + "," + sourceY;
        p[3] = targetX + "," + targetY;

        if(sourceY >= (targetY - 30) && sourceY <= (targetY + 30)) { 
          return "M" + p[0] + "L" + p[2] + "L" + p[3];
        }
        else {
          return "M" + p[0] + "Q" + p[1] + " " + p[2] + " T" + p[3];
        }
      }
    };

    const dragPathLink = (d) => {
      const p = new Array();

      if (d.source && d.target){
        const  sourceY = d.source.posY  ;
        const  sourceX = d.source.posX ;
        const  targetY = d.target.posY ;
        const  targetX= d.target.posX ;

        const m = (sourceX + targetX) / 2;
        const n = (sourceY + targetY) / 2;
        p[1] = m+ ","+sourceY;
        p[2] = m + "," + n;

        p[0] =  sourceX + "," + sourceY;
        p[3] = targetX + "," + targetY;

        return "M" + p[0] + "Q" + p[1] + " " + p[2] + " T" + p[3];
      }
    };

    // 绘制拖拽线
    const drawDragingLink = (linkData) => {
      dragingLink = gLink.append("path")
        .attr("d", dragPathLink(linkData))
        .attr("class", "drag-path link")
        .attr("marker-start", "url(#circlePoint)")
        .attr("marker-mid", "url(#arrow)")
        .attr("marker-end", "url(#circlePoint)");
    };

    // zoom 
    function zoom () {
      _this.options.zoom.x = d3.event.transform.x;
      _this.options.zoom.y = d3.event.transform.y;
      _this.options.zoom.scale = d3.event.transform.k;

      // console.log(d3.event.transform);
      svgCenter.attr("transform", d3.event.transform);
    }
    var t = d3.zoomIdentity.translate(_this.options.zoom.x, _this.options.zoom.y).scale(_this.options.zoom.scale);

    const zoomListener = d3.zoom()
      .scaleExtent([0.2, 3])
      .on("zoom", zoom);     

    // 拖拽 drag
    const dragEvent = d3.drag()
      .on('start', () => {
        if(_this.options.isLock) return;

        d3.event.sourceEvent.stopPropagation();
        const targetElement = d3.select(d3.event.sourceEvent.target);

        // links
        if(targetElement.classed('point')) {
          _this.options.isDragLink = true;
          _this.options.isDragNode = false;

          dragingLinkObj = {};
          const gParent = $(d3.event.sourceEvent.target).eq(0).parents('.g-point').eq(0)[0];
          const index = gParent.dataset.index;
          const sNode = getIndexNode(index);

          if(targetElement.classed('point-top')) {
            const sPoint = _this.getPointPath(sNode, 0);

            dragingLinkObj.source = {posX: sPoint.x, posY: sPoint.y, sId: sNode.id, sAnchor: 0};
            dragingLinkObj.target = {posX: sPoint.x, posY: sPoint.y, tId: sNode.id, tAnchor: 0};
          }

          else if(targetElement.classed('point-right')) { 
            const sPoint = _this.getPointPath(sNode, 1);   

            dragingLinkObj.source = {posX: sPoint.x, posY: sPoint.y, sId: sNode.id, sAnchor: 1};
            dragingLinkObj.target = {posX: sPoint.x, posY: sPoint.y, tId: sNode.id, tAnchor: 1};
          }

          else if(targetElement.classed('point-bottom')) {
            const sPoint = _this.getPointPath(sNode, 2);

            dragingLinkObj.source = {posX: sPoint.x, posY: sPoint.y, sId: sNode.id, sAnchor: 2};
            dragingLinkObj.target = {posX: sPoint.x, posY: sPoint.y, tId: sNode.id, tAnchor: 2};
          }

          else if(targetElement.classed('point-left')) {
            const sPoint = _this.getPointPath(sNode, 3);

            dragingLinkObj.source = {posX: sPoint.x, posY: sPoint.y, sId: sNode.id, sAnchor: 3};
            dragingLinkObj.target = {posX: sPoint.x, posY: sPoint.y, tId: sNode.id, tAnchor: 3};
          }

          drawDragingLink(dragingLinkObj);
        }
        else {
          _this.options.isDragNode = true;
          _this.options.isDragLink = false;
        }
      })
      .on('drag', function (d) {
        if(_this.options.isLock) return;

        if(_this.options.isDragNode) {
          d.posX += d3.event.dx;
          d.posY += d3.event.dy;
          d3.select(this).attr('transform', `translate(${d.posX},${d.posY})`);

          gLink.selectAll('.link')
            .filter(function (l) {
              return l.sourceId == d.id || l.targetId == d.id;
            })
            .attr("d", pathLink);
        }
        else if(_this.options.isDragLink) {
          const [pageX, pageY] = d3.mouse(svgCenter.node());
          dragingLinkObj.target = {posX: pageX-5, posY: pageY-5, tAnchor: 0};

          dragingLink.attr("d", dragPathLink(dragingLinkObj));
        }
        else {
          _this.options.isDragLink = false;
          _this.options.isDragNode = false;
        }
      })
      .on('end', () => {
        if(_this.options.isLock) return;

        if(_this.options.isDragLink) {
          const targetElement = d3.select(d3.event.sourceEvent.target);
          if(targetElement.classed('point')) {
            const gParent = $(d3.event.sourceEvent.target).eq(0).parents('.g-point').eq(0)[0];
            const index = gParent.dataset.index;
            const tNode = getIndexNode(index);

            const obj = {};
            obj.sourceId = dragingLinkObj.source.sId;
            obj.targetId = tNode.id;
            obj.sAnchor = dragingLinkObj.source.sAnchor;
            
            if(targetElement.classed('point-top')) {
              obj.tAnchor = 0;
            }
            else if(targetElement.classed('point-right')) {
              obj.tAnchor = 1;
            }
            else if(targetElement.classed('point-bottom')) {
              obj.tAnchor = 2;
            }
            else if(targetElement.classed('point-left')) {
              obj.tAnchor = 3;
            }

            let isRepeat = false;
            
            edges.forEach((item) => {
              if(item.sourceId == obj.sourceId && item.targetId == obj.targetId) {
                isRepeat = true;
              }
            });

            if(!isRepeat) {
              edges.push(obj);
              _this.config.linksChange && _this.config.linksChange(data.edges);
              drawLink(edges);
            }
            else {
              d3.selectAll('.drag-path').remove();
            }

          }
          else {
            d3.selectAll('.drag-path').remove();

            _this.options.isDragLink = false;
            _this.options.isDragNode = false;
            return;
          }
        }
        else if (_this.options.isDragNode) {
          _this.config.nodesChange && _this.config.nodesChange(data.nodes);
        }

        _this.options.isDragLink = false;
        _this.options.isDragNode = false;
      });
    
   
    // 绘制svg
    const svg = d3.select(this.container)
      .append("svg")
      .attr("width", W)
      .attr("height", H)
      .attr("id", "force-svg")
      .attr('viewBox', `0,0,${W},${H}`)
      .call(zoomListener)
      .on('dblclick.zoom', null);   
      
      // 自定义提示框
    const tip = d3.select(this.container)
      .append("div")
      .attr('class', 'tooltips');

    // 箭头
    const arrowPath = 'M2,2 L8,5 L2,8 L5,5 L2,2';
    const defs = svg.append('defs');
    const arrowMarker = defs.append('marker')
      .attr("id", "arrow")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", "10")
      .attr("markerHeight", "10")
      .attr("viewBox", "0 0 12 12")
      .attr("refX", "8")
      .attr("refY", "5")
      .attr("orient", "auto");

    arrowMarker.append('path')
      .attr('d', arrowPath)
      .attr('fill', '#666');

    // 线首尾点
    const circleMarker = defs.append('marker')
      .attr("id", "circlePoint")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", "12")
      .attr("markerHeight", "12")
      .attr("viewBox", "0 0 12 12")
      .attr("refX", "6")
      .attr("refY", "6")
      .attr("orient", "auto");
    
    circleMarker.append('circle')
      .attr('r', '2')
      .attr('cx', '6')
      .attr('cy', '6')
      .attr('fill', '#33a9dd');    

    const svgCenter = svg.append("g")
      .attr('id', 'svg-center')
      .attr('class', 'g-group')
      // .style("transform-origin", "50% 50% 0")
      .attr("transform", "translate(" + [_this.options.zoom.x, _this.options.zoom.y] + ")scale(" + _this.options.zoom.scale + ")" );

    // svgCenter.append('rect')
    //   .attr("x", 0)
    //   .attr("y", 0)
    //   .attr("width", W)
    //   .attr("height", H)
    //   .attr('class', 'svg-rect')
    //   .call(zoomListener)
    //   .on('dblclick.zoom', null);

    zoomListener.transform( svg, t); 
    
    // 绘制 图例
    const svgLegend = svg.append('g')
      .attr('class', 'svg-legend')
      .classed('hide', () => !_this.options.isShowLegend);

    const gLegend = svgLegend
      .selectAll('.g-legend')
      .data(EXEC_STATUS)
      .enter()
      .append('g')
      .attr('class', 'g-legend')
      .attr('transform', (d, i) => {
        const x = 10;
        const y = 30 + i * 20;
        return `translate(${x},${y})`;
      });
    
    gLegend.append('circle')
      .attr('class', 'node-status node_breath')
      .attr('r', 8)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr("fill", d => d.color);
    
    gLegend.append("text")
      .attr("font-size", '1em')
      .attr("font-family", "simsun")
      .attr('font-weight', 'bold')
      .attr("stroke-width", 0)
      .attr('fill', '#333')
      .attr("x", 22)
      .attr("y", 3)
      .text(function (d){
        return d.title;
      });

    // 绘制节点
    const gNode = svgCenter
      .append('g')
      .attr('class', 'node-box')
      .selectAll('.g-node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'g-node')
      .classed('active', d => {return d.active ;})
      .attr('transform', d => `translate(${d.posX || W/2},${d.posY || H/2})`)
      .attr('data-title', d => d.label)
      .call(dragEvent)
      .on("contextmenu", function (d) {
        if(_this.options.isLock) return;
        
        const e = d3.event;
        e.preventDefault();
        e.stopPropagation();

        tip.style('display', 'none');
        _this.addContextMenu('.g-node', e, d, 'node');
      })
      .on('mouseover', (d) => {
        d3.event.stopPropagation();
        tip.html(`${d.label}`)
          .style('left', `${d3.mouse(this.container)[0] + 20}px`)
          .style('top', `${d3.mouse(this.container)[1] + 20}px`)
          .style('display', 'block');
      })
      .on('mousemove', () => {
        tip.style('left', `${d3.mouse(this.container)[0] + 20}px`)
          .style('top', `${d3.mouse(this.container)[1] + 20}px`);
      })
      .on('mouseout', () => {
        tip.style('display', 'none');
      });

    gNode.append('rect')
      .attr('class', d => {
        const name = _this.getTypeName(d.type);
        return 'node-rect node-' + name;
      })
      .attr('width', d => {const size = _this.getSize(d.type); return size.w;})
      .attr('height', d => {const size = _this.getSize(d.type); return size.h;})
      .attr('rx', 10)
      .attr('ry', 10)
      .attr("fill", d => {
        if(d.type >= 0) {
          const obj = EXEC_STATUS.find(item => item.code == d.status);
          const color = obj ? obj.color : 'transparent';
          return color;
        }
        else {
          return 'transparent';
        }
        
      })
      .attr("stroke-width", 2);
    
    // gNode.append('circle')
    //   .attr('class', 'node-status node_breath')
    //   .classed('hide', d => d.type < 0)
    //   .attr('r', 10)
    //   .attr('cx', d => {const size = _this.getSize(d.type); return size.w})
    //   .attr('cy', 0)
    //   .attr("fill", d => {
    //     const obj = EXEC_STATUS.find(item => item.code == d.status);
    //     const color = obj.color || 'transparent';

    //     return color;
    //   });

    gNode.append("text")
      .attr("font-size", '1.2em')
      .attr("font-family", "simsun")
      .attr('font-weight', 'bold')
      .attr("stroke-width", 0)
      .attr('fill', d => {
        if('status' in d && d.type >= 0) {
          return '#fff';
        }
        return '#999';
      })
      .attr("x", 10)
      .attr("y", 24)
      .text(function (d){
        return  _this.textShow(d, d.label);
      });
    
    // 连线吸附区域

    function addPoint (direction) {
      const gPoint = gNode.append('g')
        .attr('class', 'g-point')
        .attr('data-index', d => d.id);
      
      gPoint.append('path')
        .attr('class', 'point-adsorb')
        .attr('fill', 'transparent')
        .attr("stroke-width", 1)
        .attr('d', d => {
          const path = _this.getPath(d, direction);
          return path;
        });
      
      gPoint.append('path')
        .attr('class', 'point point-'+ direction)
        .attr('fill', 'transparent')
        .attr("stroke-width", 1)
        .attr('d', d => {
          const path = _this.getPoint(d, direction);
          return path;
        });
    }

    // top   0
    addPoint('top');

    // right  1 
    addPoint('right');

    // bottom  2 
    addPoint('bottom');

    // left   3
    addPoint('left');
    
    // 绘制连线
    const gLink = svgCenter
      .insert("g")
      .attr("class", "link-box");

    // 绘制连线 function
    const drawLink = (data) => {
      const linksData = data;
      gLink.selectAll('.drag-path').remove();

      if(linksData.length) {
        gLink.selectAll(".link")
          .data(linksData)
          .enter()
          .append("path")
          .attr("d", pathLink)
          .attr("class", "draw-path link")
          .attr("marker-start", "url(#circlePoint)")
          .attr("marker-mid", "url(#arrow)")
          .attr("marker-end", "url(#circlePoint)")
          .on("contextmenu", function (d) {
            if(_this.options.isLock) return;
            const e = d3.event;
            e.preventDefault();
            e.stopPropagation();
            
            _this.addContextMenu('.draw_path', e, d, 'line');
          });
      }        
    };

    drawLink(edges); 
  }

  // 获取点坐标
  getPointPath (d, anchor) {
    let x = 0;
    let y = 0;
    const size = this.getSize(d.type);

    switch(anchor) {
    case 0:
      x = d.posX + size.w/2;
      y = d.posY;
      break;
    case 1:
      x = d.posX + size.w;
      y = d.posY + size.h/2;
      break;
    case 2:
      x = d.posX + size.w/2;
      y = d.posY + size.h;
      break;
    case 3:
      x = d.posX;
      y = d.posY + size.h/2;
      break;
    default:
      break;
    }

    return {
      x,
      y
    };
  } 

  // 吸附区path
  getPath (d, direction) {
    const size = this.getSize(d.type);
    let path = '';
    switch(direction) {
    case 'top':
      path = 'M0,0 L0,-10 L' + size.w + ',-10 L' + size.w + ',0 Z';
      break;
    case 'right':
      path = `M${size.w},0 L${size.w + 10},0 L${size.w + 10},${size.h} L${size.w},${size.h} Z`;
      break;
    case 'bottom':
      path = `M0,${size.h} L0,${size.h + 10} L${size.w},${size.h + 10} L${size.w},${size.h} Z`;
      break;
    case 'left':
      path = `M0,0 L-10,0 L-10,${size.h} L0,${size.h} Z`;
      break;
    default:
      break;
    }

    return path;
  }

  // 吸附区point
  getPoint (d, direction) {
    const size = this.getSize(d.type);
    let path = '';
    switch(direction) {
    case 'top':
      path = `M${size.w/2 - 10},0 A10,10,0,0,1,${size.w/2 + 10},0`;
      break;
    case 'right':
      path = `M${size.w},${size.h/2 -10} A10,10,0,0,1,${size.w},${size.h/2 + 10}`;
      break;
    case 'bottom':
      path = `M${size.w/2 - 10},${size.h} A10,10,0,0,0,${size.w/2 + 10},${size.h}`;
      break;
    case 'left':
      path = `M0,${size.h/2 -10} A10,10,0,0,0,0,${size.h/2 + 10}`;
      break;
    default:
      break;
    }

    return path;
  }

  // 截取字符串显示
  textShow (d, str) {
    const size = this.getSize(d.type);
    const num = parseInt( size.w / 12);
    const len = str.length, result = [];
    let long = 0, charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if ((charCode >= 0 && charCode <= 128) || /^((?=[\x21-\x7e]+)[^A-Za-z0-9]){1}$/.test(i)) {
        result.push(str.charAt(i));
        long ++;
        if(long >= num) {
          break;
        }
      }
      else{
        result.push(str.charAt(i));
        long += 2;
        if(long >= num) {
          break;
        }
      }
    }
    return result.join('');
  }

  addContextMenu (selection, e, d, type) {
    const _this = this;
    if(type == 'node') {
      ContextMenu.init({preventDoubleContext: false});
      ContextMenu.destroy(selection);

      if(d.type == 1) {
        ContextMenu.attach(selection, e, [
          {text: '编辑', action: function (){
            _this.config.editNode && _this.config.editNode(d);
          }},
          {text: '删除', action: function (){
            _this.config.deleteNode && _this.config.deleteNode(d);
          }}
        ]);
      }
      else {
        ContextMenu.attach(selection, e, [
          {text: '删除', action: function (){
            _this.config.deleteNode && _this.config.deleteNode(d);
          }}
        ]);
      }
    }
    else if(type == 'line') {
      ContextMenu.init({preventDoubleContext: false});
      ContextMenu.destroy(selection);
      ContextMenu.attach(selection, e, [
        {text: '删除', action: function (){
          _this.config.deleteLink && _this.config.deleteLink(d);
        }}
      ]);
    }
    else {
      return false;
    }
  }

  // 自适应布局

}

export default ChartDrag;