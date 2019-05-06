// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.scales');
goog.require('cljs.core');
goog.require('cljs.core.constants');
hello_world.scales.xScale = (function hello_world$scales$xScale(x){
var getXCoord = d3.scaleLinear().domain([(0),(1000)]).range([(0),(500)]);
return (getXCoord.cljs$core$IFn$_invoke$arity$1 ? getXCoord.cljs$core$IFn$_invoke$arity$1(x) : getXCoord.call(null,x));
});
