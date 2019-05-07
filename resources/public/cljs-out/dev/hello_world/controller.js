// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.controller');
goog.require('cljs.core');
goog.require('hello_world.model');
goog.require('hello_world.http');
hello_world.controller.swapm_BANG_ = (function hello_world$controller$swapm_BANG_(x,y){
return cljs.core.swap_BANG_.call(null,y,(function (xx){
return x;
}));
});
hello_world.controller.dataVizEndpoint = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
hello_world.controller.init = (function hello_world$controller$init(){
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__){
return (function (state_29385){
var state_val_29386 = (state_29385[(1)]);
if((state_val_29386 === (1))){
var inst_29374 = hello_world.http._LT_GET.call(null,hello_world.controller.dataVizEndpoint);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29385__$1,(2),inst_29374);
} else {
if((state_val_29386 === (2))){
var inst_29376 = (state_29385[(2)]);
var inst_29378 = (function (){var remote_data = inst_29376;
return ((function (remote_data,inst_29376,state_val_29386,c__14326__auto__){
return (function (p__29377){
var vec__29387 = p__29377;
var year = cljs.core.nth.call(null,vec__29387,(0),null);
var value = cljs.core.nth.call(null,vec__29387,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
;})(remote_data,inst_29376,state_val_29386,c__14326__auto__))
})();
var inst_29379 = cljs.core.take.call(null,(100),inst_29376);
var inst_29380 = cljs.core.map.call(null,inst_29378,inst_29379);
var inst_29381 = cljs.core.deref.call(null,hello_world.model.model);
var inst_29382 = cljs.core.assoc.call(null,inst_29381,new cljs.core.Keyword(null,"bars","bars",-586907130),inst_29380);
var inst_29383 = hello_world.controller.swapm_BANG_.call(null,inst_29382,hello_world.model.model);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29385__$1,inst_29383);
} else {
return null;
}
}
});})(c__14326__auto__))
;
return ((function (switch__14167__auto__,c__14326__auto__){
return (function() {
var hello_world$controller$init_$_state_machine__14168__auto__ = null;
var hello_world$controller$init_$_state_machine__14168__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null];
(statearr_29390[(0)] = hello_world$controller$init_$_state_machine__14168__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var hello_world$controller$init_$_state_machine__14168__auto____1 = (function (state_29385){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_29385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__14171__auto__ = e29391;
var statearr_29392_29394 = state_29385;
(statearr_29392_29394[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29395 = state_29385;
state_29385 = G__29395;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
hello_world$controller$init_$_state_machine__14168__auto__ = function(state_29385){
switch(arguments.length){
case 0:
return hello_world$controller$init_$_state_machine__14168__auto____0.call(this);
case 1:
return hello_world$controller$init_$_state_machine__14168__auto____1.call(this,state_29385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$controller$init_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$controller$init_$_state_machine__14168__auto____0;
hello_world$controller$init_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$controller$init_$_state_machine__14168__auto____1;
return hello_world$controller$init_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__))
})();
var state__14328__auto__ = (function (){var statearr_29393 = f__14327__auto__.call(null);
(statearr_29393[(6)] = c__14326__auto__);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__))
);

return c__14326__auto__;
});
hello_world.controller.add_year = (function hello_world$controller$add_year(year,value){
return hello_world.controller.swapm_BANG_.call(null,cljs.core.update.call(null,cljs.core.deref.call(null,hello_world.model.model),new cljs.core.Keyword(null,"bars","bars",-586907130),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"value","value",305978217),value], null)),hello_world.model.model);
});

//# sourceMappingURL=controller.js.map
