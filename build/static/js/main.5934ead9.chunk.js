(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=(n(16),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),h=n(9),f=n(6),p=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return a.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(r.Component));p.defaultProps={flipCellsAroundMe:null,isLit:!1};var m=p,b=(n(18),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"createBoard",value:function(){var e=this.props,t=e.nrows,n=e.ncols,r=e.chanceLightStartsOn;return Array.from(Array(t),function(){return Array.from(Array(n),function(e){return Math.random()<=r})})}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,r=t.nrows,a=this.state.board,o=e.split("-").map(Number),c=Object(h.a)(o,2),i=c[0],l=c[1];function s(e,t){t>=0&&t<n&&e>=0&&e<r&&(a[e][t]=!a[e][t])}s(i,l),s(i,l-1),s(i,l+1),s(i-1,l),s(i+1,l);var u=a.every(function(e){return e.every(function(e){return!e})});this.setState({board:a,hasWon:u})}},{key:"render",value:function(){var e,t=this;return e=Array.from(Array(this.props.nrows),function(e,n){return a.a.createElement("tr",{key:n},Array.from(Array(t.props.ncols),function(e,r){var o="".concat(n,"-").concat(r);return a.a.createElement(m,{key:o,isLit:t.state.board[n][r],flipCellsAroundMe:function(){return t.flipCellsAround(o)}})}))}),a.a.createElement("div",{className:"Board"},a.a.createElement("h1",{className:"Board-heading"},"Lights Out"),a.a.createElement("table",{className:"Board-table"},a.a.createElement("tbody",null,e)))}}]),t}(r.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.2};var v=b,y=(n(19),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.5934ead9.chunk.js.map