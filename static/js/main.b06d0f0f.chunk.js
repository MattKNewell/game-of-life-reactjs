(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{14:function(t,e,r){},8:function(t,e,r){t.exports=r(9)},9:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(2),s=r(4),a=r(3),l=r(5),i=r(0),c=r.n(i),u=r(7),p=r.n(u),f=(r(14),function(t){function e(){var t,r;Object(o.a)(this,e);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(r=Object(s.a)(this,(t=Object(a.a)(e)).call.apply(t,[this].concat(l)))).selectBox=function(){r.props.selectBox(r.props.row,r.props.col)},r}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.selectBox})}}]),e}(c.a.Component)),h=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){for(var t=16*this.props.cols,e=[],r="",o=0;o<this.props.rows;o++)for(var n=0;n<this.props.cols;n++){var s=o+"_"+n;r=this.props.gridFull[o][n]?"box on":"box off",e.push(c.a.createElement(f,{boxClass:r,key:s,boxId:s,row:o,col:n,selectBox:this.props.selectBox}))}return c.a.createElement("div",{className:"grid",style:{width:t}},e)}}]),e}(c.a.Component),d=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(a.a)(e).call(this))).selectBox=function(e,r){var o=b(t.state.gridFull);o[e][r]=!o[e][r],t.setState({gridFull:o})},t.seed=function(){for(var e=b(t.state.gridFull),r=0;r<t.rows;r++)for(var o=0;o<t.cols;o++)1===Math.floor(4*Math.random())&&(e[r][o]=!0);t.setState({gridFull:e})},t.playButton=function(){t.intervalId=setInterval(t.play,t.speed)},t.play=function(){for(var e=t.state.gridFull,r=b(t.state.gridFull),o=0;o<t.rows;o++)for(var n=0;n<t.cols;n++){var s=0;o>0&&e[o-1][n]&&s++,o>0&&n>0&&e[o-1][n-1]&&s++,o>0&&n<t.cols-1&&e[o-1][n+1]&&s++,n<t.cols-1&&e[o][n+1]&&s++,n>0&&e[o][n-1]&&s++,o<t.rows-1&&e[o+1][n]&&s++,o<t.rows-1&&n>0&&e[o+1][n-1]&&s++,o<t.rows-1&&n<t.cols-1&&e[o+1][n+1]&&s++,e[o][n]&&(s<2||s>3)&&(r[o][n]=!1),e[o][n]||3!==s||(r[o][n]=!0)}t.setState({gridFull:r,generation:t.state.generation+1})},t.speed=100,t.rows=30,t.cols=50,t.state={generation:0,gridFull:Array(t.rows).fill().map((function(){return Array(t.cols).fill(!1)}))},t}return Object(l.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Conway's Game of Life"),c.a.createElement(h,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),c.a.createElement("h2",null,"Generations: ",this.state.generation))}}]),e}(c.a.Component);function b(t){return JSON.parse(JSON.stringify(t))}p.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.b06d0f0f.chunk.js.map