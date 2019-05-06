// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if((typeof hello_world !== 'undefined') && (typeof hello_world.model !== 'undefined') && (typeof hello_world.model.model !== 'undefined')){
} else {
hello_world.model.model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hello_world.model.jsmodel = (function hello_world$model$jsmodel(){
return cljs.core.clj__GT_js(cljs.core.deref(hello_world.model.model));
});
goog.exportSymbol('hello_world.model.jsmodel', hello_world.model.jsmodel);
