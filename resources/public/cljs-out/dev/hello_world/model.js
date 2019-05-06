// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.model');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof hello_world !== 'undefined') && (typeof hello_world.model !== 'undefined') && (typeof hello_world.model.model !== 'undefined')){
} else {
hello_world.model.model = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
hello_world.model.jsmodel = (function hello_world$model$jsmodel(){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,hello_world.model.model));
});
goog.exportSymbol('hello_world.model.jsmodel', hello_world.model.jsmodel);

//# sourceMappingURL=model.js.map
