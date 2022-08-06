/*
 Highstock JS v10.2.0 (2022-07-05)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(h){a(h);a.Highcharts=h;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function h(a,e,d,h){a.hasOwnProperty(e)||(a[e]=h.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,
module:a[e]}})))}a=a?a._modules:{};h(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var d=a.seriesTypes.sma.prototype,h=e.defined,n=e.error,r=e.merge,g;(function(a){function e(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function y(b,l){var a=[];(b.pointArrayMap||[]).forEach(function(b){b!==l&&a.push(e(b))});return a}function c(){var b=this,l=b.linesApiNames,a=b.areaLinesNames,f=b.points,c=b.options,w=b.graph,v={options:{gapSize:c.gapSize}},
g=[],p=y(b,b.pointValKey),q=f.length,k;p.forEach(function(b,a){for(g[a]=[];q--;)k=f[q],g[a].push({x:k.x,plotX:k.plotX,plotY:k[b],isNull:!h(k[b])});q=f.length});if(b.userOptions.fillColor&&a.length){var m=p.indexOf(e(a[0]));m=g[m];a=1===a.length?f:g[p.indexOf(e(a[1]))];p=b.color;b.points=a;b.nextPoints=m;b.color=b.userOptions.fillColor;b.options=r(f,v);b.graph=b.area;b.fillGraph=!0;d.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=p}l.forEach(function(a,l){g[l]?(b.points=
g[l],c[a]?b.options=r(c[a].styles,v):n('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+a],d.drawGraph.call(b),b["graph"+a]=b.graph):n('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=f;b.options=c;b.graph=w;d.drawGraph.call(b)}function w(b){var a,c=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((a=d.getGraphPath.call(this,
this.nextPoints))&&a.length){a[0][0]="L";c=d.getGraphPath.call(this,b);a=a.slice(0,c.length);for(var f=a.length-1;0<=f;f--)c.push(a[f])}}else c=d.getGraphPath.apply(this,arguments);return c}function v(b){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(b[c])});return a}function p(){var b=this,a=this.pointArrayMap,c=[],f;c=y(this);d.translate.apply(this,arguments);this.points.forEach(function(l){a.forEach(function(a,e){f=l[a];b.dataModify&&(f=b.dataModify.modifyValue(f));null!==f&&(l[c[e]]=
b.yAxis.toPixels(f,!0))})})}var g=[],k=["bottomLine"],m=["top","bottom"],z=["top"];a.compose=function(b){if(-1===g.indexOf(b)){g.push(b);var a=b.prototype;a.linesApiNames=a.linesApiNames||k.slice();a.pointArrayMap=a.pointArrayMap||m.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||z.slice();a.drawGraph=c;a.getGraphPath=w;a.toYData=v;a.translate=p}return b}})(g||(g={}));return g});h(a,"Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,d){var h=this&&this.__extends||function(){var a=function(e,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(e,c)};return function(e,c){function d(){this.constructor=e}a(e,c);e.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),n=e.seriesTypes.sma,r=d.correctFloat,g=d.extend,x=d.merge;d=function(a){function d(){var c=
null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}h(d,a);d.prototype.init=function(){e.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=x({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)};d.prototype.getValues=function(a,d){var c=d.period,g=d.periodATR,h=d.multiplierATR,k=a.yData;k=k?k.length:0;var m=[];d=e.seriesTypes.ema.prototype.getValues(a,{period:c,index:d.index});var n=e.seriesTypes.atr.prototype.getValues(a,
{period:g}),b=[],l=[],t;if(!(k<c)){for(t=c;t<=k;t++){var f=d.values[t-c];var u=n.values[t-g];var q=f[0];a=r(f[1]+h*u[1]);u=r(f[1]-h*u[1]);f=f[1];m.push([q,a,f,u]);b.push(q);l.push([a,f,u])}return{values:m,xData:b,yData:l}}};d.defaultOptions=x(n.defaultOptions,{params:{index:0,period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},
marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1});return d}(n);g(d.prototype,{nameBase:"Keltner Channels",areaLinesNames:["top","bottom"],nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"});a.compose(d);e.registerSeriesType("keltnerchannels",d);"";return d});h(a,"masters/indicators/keltner-channels.src.js",[],function(){})});
//# sourceMappingURL=keltner-channels.js.map