// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hello_world.model');
goog.require('hello_world.http');
hello_world.controller.swapm_BANG_ = (function hello_world$controller$swapm_BANG_(x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(y,(function (xx){
return x;
}));
});
hello_world.controller.dataVizEndpoint = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
hello_world.controller.init = (function hello_world$controller$init(){
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__){
return (function (state_17191){
var state_val_17192 = (state_17191[(1)]);
if((state_val_17192 === (1))){
var inst_17180 = hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$1(hello_world.controller.dataVizEndpoint);
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17191__$1,(2),inst_17180);
} else {
if((state_val_17192 === (2))){
var inst_17182 = (state_17191[(2)]);
var inst_17184 = (function (){var remote_data = inst_17182;
return ((function (remote_data,inst_17182,state_val_17192,c__13346__auto__){
return (function (p__17183){
var vec__17193 = p__17183;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$value,value], null);
});
;})(remote_data,inst_17182,state_val_17192,c__13346__auto__))
})();
var inst_17185 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),inst_17182);
var inst_17186 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17184,inst_17185);
var inst_17187 = cljs.core.deref(hello_world.model.model);
var inst_17188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_17187,cljs.core.cst$kw$bars,inst_17186);
var inst_17189 = hello_world.controller.swapm_BANG_(inst_17188,hello_world.model.model);
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17191__$1,inst_17189);
} else {
return null;
}
}
});})(c__13346__auto__))
;
return ((function (switch__13163__auto__,c__13346__auto__){
return (function() {
var hello_world$controller$init_$_state_machine__13164__auto__ = null;
var hello_world$controller$init_$_state_machine__13164__auto____0 = (function (){
var statearr_17196 = [null,null,null,null,null,null,null];
(statearr_17196[(0)] = hello_world$controller$init_$_state_machine__13164__auto__);

(statearr_17196[(1)] = (1));

return statearr_17196;
});
var hello_world$controller$init_$_state_machine__13164__auto____1 = (function (state_17191){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_17191);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e17197){if((e17197 instanceof Object)){
var ex__13167__auto__ = e17197;
var statearr_17198_17200 = state_17191;
(statearr_17198_17200[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17191);

return cljs.core.cst$kw$recur;
} else {
throw e17197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__17201 = state_17191;
state_17191 = G__17201;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
hello_world$controller$init_$_state_machine__13164__auto__ = function(state_17191){
switch(arguments.length){
case 0:
return hello_world$controller$init_$_state_machine__13164__auto____0.call(this);
case 1:
return hello_world$controller$init_$_state_machine__13164__auto____1.call(this,state_17191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$controller$init_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$controller$init_$_state_machine__13164__auto____0;
hello_world$controller$init_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$controller$init_$_state_machine__13164__auto____1;
return hello_world$controller$init_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__))
})();
var state__13348__auto__ = (function (){var statearr_17199 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_17199[(6)] = c__13346__auto__);

return statearr_17199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__))
);

return c__13346__auto__;
});
hello_world.controller.add_year = (function hello_world$controller$add_year(year,value){
return hello_world.controller.swapm_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(hello_world.model.model),cljs.core.cst$kw$bars,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$value,value], null)),hello_world.model.model);
});
