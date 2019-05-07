// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.scales');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hello_world.model');
hello_world.scales.maxValue = (function hello_world$scales$maxValue(values){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.cst$kw$bars.cljs$core$IFn$_invoke$arity$1(values))) | (0));
});
hello_world.scales.xScale = (function hello_world$scales$xScale(x){
var getXCoord = d3.scaleLinear().domain([(0),hello_world.scales.maxValue(cljs.core.deref(hello_world.model.model))]).range([(0),(500)]);
return (getXCoord.cljs$core$IFn$_invoke$arity$1 ? getXCoord.cljs$core$IFn$_invoke$arity$1(x) : getXCoord.call(null,x));
});
