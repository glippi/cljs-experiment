// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__17434__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17435__i = 0, G__17435__a = new Array(arguments.length -  0);
while (G__17435__i < G__17435__a.length) {G__17435__a[G__17435__i] = arguments[G__17435__i + 0]; ++G__17435__i;}
  args = new cljs.core.IndexedSeq(G__17435__a,0,null);
} 
return G__17434__delegate.call(this,args);};
G__17434.cljs$lang$maxFixedArity = 0;
G__17434.cljs$lang$applyTo = (function (arglist__17436){
var args = cljs.core.seq(arglist__17436);
return G__17434__delegate(args);
});
G__17434.cljs$core$IFn$_invoke$arity$variadic = G__17434__delegate;
return G__17434;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__17437__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17438__i = 0, G__17438__a = new Array(arguments.length -  0);
while (G__17438__i < G__17438__a.length) {G__17438__a[G__17438__i] = arguments[G__17438__i + 0]; ++G__17438__i;}
  args = new cljs.core.IndexedSeq(G__17438__a,0,null);
} 
return G__17437__delegate.call(this,args);};
G__17437.cljs$lang$maxFixedArity = 0;
G__17437.cljs$lang$applyTo = (function (arglist__17439){
var args = cljs.core.seq(arglist__17439);
return G__17437__delegate(args);
});
G__17437.cljs$core$IFn$_invoke$arity$variadic = G__17437__delegate;
return G__17437;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
