// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.view');
goog.require('cljs.core');
goog.require('hello_world.scales');
goog.require('clojure.string');
goog.require('hello_world.controller');
hello_world.view.barHeight = (20);
hello_world.view.idx = cljs.core.atom.call(null,(-1));
hello_world.view.mapBars = (function hello_world$view$mapBars(bar){
cljs.core.swap_BANG_.call(null,hello_world.view.idx,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,hello_world.view.idx) * hello_world.view.barHeight)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),hello_world.scales.xScale.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(bar)),new cljs.core.Keyword(null,"height","height",1025178622),(hello_world.view.barHeight - (1)),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null)], null);
});
hello_world.view.screen_component = (function hello_world$view$screen_component(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-gold.sans-serif>div.mw9.center.pa4.pt5-ns.ph7-l","header.bg-gold.sans-serif>div.mw9.center.pa4.pt5-ns.ph7-l",1785594766),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.f2.f1-m.f-headline-l.measure-narrow.lh-title.mv0","h3.f2.f1-m.f-headline-l.measure-narrow.lh-title.mv0",-174733099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight","span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight",1360862247),"ClojureScript + D3 = "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight.red","span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight.red",288092706),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"&#10084;"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.f3.fw1.georgia.i","h4.f3.fw1.georgia.i",-2005706681),"A simple barchart experiment"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-center.align-center","div.flex.flex-row.justify-center.align-center",1288687637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),(hello_world.view.barHeight * cljs.core.count.call(null,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(state)))], null)], null),(function (){var iter__4324__auto__ = (function hello_world$view$screen_component_$_iter__18164(s__18165){
return (new cljs.core.LazySeq(null,(function (){
var s__18165__$1 = s__18165;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18165__$1);
if(temp__5457__auto__){
var s__18165__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18165__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18165__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18167 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18166 = (0);
while(true){
if((i__18166 < size__4323__auto__)){
var bar = cljs.core._nth.call(null,c__4322__auto__,i__18166);
cljs.core.chunk_append.call(null,b__18167,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(bar)], null)));

var G__18168 = (i__18166 + (1));
i__18166 = G__18168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18167),hello_world$view$screen_component_$_iter__18164.call(null,cljs.core.chunk_rest.call(null,s__18165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18167),null);
}
} else {
var bar = cljs.core.first.call(null,s__18165__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(bar)], null)),hello_world$view$screen_component_$_iter__18164.call(null,cljs.core.rest.call(null,s__18165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(state));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.controller.add_year.call(null,(2005),(113133));
})], null)], null)], null);
});

//# sourceMappingURL=view.js.map
