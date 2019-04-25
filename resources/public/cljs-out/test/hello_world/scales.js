// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.scales');
goog.require('cljs.core');
goog.require('cljsjs.d3');
hello_world.scales.xScale = (function hello_world$scales$xScale(x){
var getXCoord = d3.scaleLinear().domain([(0),(1000)]).range([(0),(500)]);
return getXCoord.call(null,x);
});

//# sourceMappingURL=scales.js.map
