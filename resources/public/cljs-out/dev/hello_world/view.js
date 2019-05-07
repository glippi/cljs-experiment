// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hello_world.scales');
goog.require('clojure.string');
goog.require('hello_world.controller');
hello_world.view.barHeight = (20);
hello_world.view.idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
hello_world.view.mapBars = (function hello_world$view$mapBars(bar){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hello_world.view.idx,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(hello_world.view.idx) * hello_world.view.barHeight)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,hello_world.scales.xScale(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(bar)),cljs.core.cst$kw$height,(hello_world.view.barHeight - (1)),cljs.core.cst$kw$fill,"red"], null)], null)], null);
});
hello_world.view.screen_component = (function hello_world$view$screen_component(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$bg_DASH_gold$sans_DASH_serif_GT_div$mw9$center$pa4$pt5_DASH_ns$ph7_DASH_l,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$f2$f1_DASH_m$f_DASH_headline_DASH_l$measure_DASH_narrow$lh_DASH_title$mv0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bg_DASH_black_DASH_90$lh_DASH_copy$white$ph2$pv1$tracked_DASH_tight,"ClojureScript + D3 = "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bg_DASH_black_DASH_90$lh_DASH_copy$white$ph2$pv1$tracked_DASH_tight$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,"&#10084;"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$f3$fw1$georgia$i,"A simple barchart experiment"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_row$justify_DASH_center$align_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"1px solid",cljs.core.cst$kw$background,"white",cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$height,(hello_world.view.barHeight * cljs.core.count(cljs.core.cst$kw$bars.cljs$core$IFn$_invoke$arity$1(state)))], null)], null),(function (){var iter__4324__auto__ = (function hello_world$view$screen_component_$_iter__17191(s__17192){
return (new cljs.core.LazySeq(null,(function (){
var s__17192__$1 = s__17192;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__17192__$1);
if(temp__5457__auto__){
var s__17192__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17192__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__17192__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__17194 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__17193 = (0);
while(true){
if((i__17193 < size__4323__auto__)){
var bar = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__17193);
cljs.core.chunk_append(b__17194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(bar)], null)));

var G__17195 = (i__17193 + (1));
i__17193 = G__17195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17194),hello_world$view$screen_component_$_iter__17191(cljs.core.chunk_rest(s__17192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17194),null);
}
} else {
var bar = cljs.core.first(s__17192__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(bar)], null)),hello_world$view$screen_component_$_iter__17191(cljs.core.rest(s__17192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.cst$kw$bars.cljs$core$IFn$_invoke$arity$1(state));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return hello_world.controller.add_year((2005),(113133));
})], null)], null)], null);
});
