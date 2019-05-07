// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.scales');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('hello_world.model');
hello_world.scales.maxValue = (function hello_world$scales$maxValue(values){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(values))) | (0));
});
hello_world.scales.xScale = (function hello_world$scales$xScale(x){
var getXCoord = d3.scaleLinear().domain([(0),hello_world.scales.maxValue.call(null,cljs.core.deref.call(null,hello_world.model.model))]).range([(0),(500)]);
return getXCoord.call(null,x);
});

//# sourceMappingURL=scales.js.map
