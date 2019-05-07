// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('hello_world.model');
goog.require('hello_world.controller');
goog.require('hello_world.view');
goog.require('goog.dom');
goog.require('reagent.core');
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.init !== 'undefined')){
} else {
hello_world.core.init = (function (){
cljs.core.print.call(null,"initializing...");

hello_world.controller.init.call(null);

return cljs.core.print.call(null,"initialized");
})()
;
}
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.app_view = (function hello_world$core$app_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.view.screen_component,cljs.core.deref.call(null,hello_world.model.model)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.app_view], null),el);
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5457__auto__ = hello_world.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return hello_world.core.mount.call(null,el);
} else {
return null;
}
});
hello_world.core.mount_app_element.call(null);
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
