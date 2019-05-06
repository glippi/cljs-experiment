// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hello_world.model');
goog.require('hello_world.controller');
goog.require('hello_world.view');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('hello_world.http');
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.init !== 'undefined')){
} else {
hello_world.core.init = (function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["initializing..."], 0));

hello_world.controller.init();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["initialized"], 0));
})()
;
}
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.app_view = (function hello_world$core$app_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.screen_component,cljs.core.deref(hello_world.model.model)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
var G__17211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.app_view], null);
var G__17212 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__17211,G__17212) : reagent.core.render_component.call(null,G__17211,G__17212));
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5457__auto__ = hello_world.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return hello_world.core.mount(el);
} else {
return null;
}
});
hello_world.core.mount_app_element();
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return hello_world.core.mount_app_element();
});
