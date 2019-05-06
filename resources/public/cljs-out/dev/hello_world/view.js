// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.view');
goog.require('cljs.core');
goog.require('hello_world.scales');
goog.require('hello_world.model');
goog.require('clojure.string');
goog.require('hello_world.controller');
hello_world.view.barHeight = (20);
hello_world.view.idx = cljs.core.atom.call(null,(-1));
hello_world.view.mapBars = (function hello_world$view$mapBars(bar){
cljs.core.swap_BANG_.call(null,hello_world.view.idx,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,hello_world.view.idx) * hello_world.view.barHeight)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),hello_world.scales.xScale.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(bar)),new cljs.core.Keyword(null,"height","height",1025178622),(hello_world.view.barHeight - (1)),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null)], null);
});
hello_world.view.screen_component = (function hello_world$view$screen_component(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>h1","div>h1",-96261130),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),(hello_world.view.barHeight * cljs.core.count.call(null,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(state)))], null)], null),(function (){var iter__4324__auto__ = (function hello_world$view$screen_component_$_iter__17365(s__17366){
return (new cljs.core.LazySeq(null,(function (){
var s__17366__$1 = s__17366;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17366__$1);
if(temp__5457__auto__){
var s__17366__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17366__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17366__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17368 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17367 = (0);
while(true){
if((i__17367 < size__4323__auto__)){
var bar = cljs.core._nth.call(null,c__4322__auto__,i__17367);
cljs.core.chunk_append.call(null,b__17368,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(bar)], null)));

var G__17369 = (i__17367 + (1));
i__17367 = G__17369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17368),hello_world$view$screen_component_$_iter__17365.call(null,cljs.core.chunk_rest.call(null,s__17366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17368),null);
}
} else {
var bar = cljs.core.first.call(null,s__17366__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.mapBars,bar], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(bar)], null)),hello_world$view$screen_component_$_iter__17365.call(null,cljs.core.rest.call(null,s__17366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(state));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.controller.add_year.call(null,(2005),(113133));
})], null)], null)], null);
});

//# sourceMappingURL=view.js.map
