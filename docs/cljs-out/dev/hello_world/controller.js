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
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__){
return (function (state_17352){
var state_val_17353 = (state_17352[(1)]);
if((state_val_17353 === (1))){
var inst_17341 = hello_world.http._LT_GET.call(null,hello_world.controller.dataVizEndpoint);
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17352__$1,(2),inst_17341);
} else {
if((state_val_17353 === (2))){
var inst_17343 = (state_17352[(2)]);
var inst_17345 = (function (){var remote_data = inst_17343;
return ((function (remote_data,inst_17343,state_val_17353,c__15423__auto__){
return (function (p__17344){
var vec__17354 = p__17344;
var year = cljs.core.nth.call(null,vec__17354,(0),null);
var value = cljs.core.nth.call(null,vec__17354,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
;})(remote_data,inst_17343,state_val_17353,c__15423__auto__))
})();
var inst_17346 = cljs.core.take.call(null,(10),inst_17343);
var inst_17347 = cljs.core.map.call(null,inst_17345,inst_17346);
var inst_17348 = cljs.core.deref.call(null,hello_world.model.model);
var inst_17349 = cljs.core.assoc.call(null,inst_17348,new cljs.core.Keyword(null,"bars","bars",-586907130),inst_17347);
var inst_17350 = hello_world.controller.swapm_BANG_.call(null,inst_17349,hello_world.model.model);
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17352__$1,inst_17350);
} else {
return null;
}
}
});})(c__15423__auto__))
;
return ((function (switch__15400__auto__,c__15423__auto__){
return (function() {
var hello_world$controller$init_$_state_machine__15401__auto__ = null;
var hello_world$controller$init_$_state_machine__15401__auto____0 = (function (){
var statearr_17357 = [null,null,null,null,null,null,null];
(statearr_17357[(0)] = hello_world$controller$init_$_state_machine__15401__auto__);

(statearr_17357[(1)] = (1));

return statearr_17357;
});
var hello_world$controller$init_$_state_machine__15401__auto____1 = (function (state_17352){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_17352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17358){if((e17358 instanceof Object)){
var ex__15404__auto__ = e17358;
var statearr_17359_17361 = state_17352;
(statearr_17359_17361[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17362 = state_17352;
state_17352 = G__17362;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
hello_world$controller$init_$_state_machine__15401__auto__ = function(state_17352){
switch(arguments.length){
case 0:
return hello_world$controller$init_$_state_machine__15401__auto____0.call(this);
case 1:
return hello_world$controller$init_$_state_machine__15401__auto____1.call(this,state_17352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$controller$init_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$controller$init_$_state_machine__15401__auto____0;
hello_world$controller$init_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$controller$init_$_state_machine__15401__auto____1;
return hello_world$controller$init_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__))
})();
var state__15425__auto__ = (function (){var statearr_17360 = f__15424__auto__.call(null);
(statearr_17360[(6)] = c__15423__auto__);

return statearr_17360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__))
);

return c__15423__auto__;
});
hello_world.controller.add_year = (function hello_world$controller$add_year(year,value){
return hello_world.controller.swapm_BANG_.call(null,cljs.core.update.call(null,cljs.core.deref.call(null,hello_world.model.model),new cljs.core.Keyword(null,"bars","bars",-586907130),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"value","value",305978217),value], null)),hello_world.model.model);
});

//# sourceMappingURL=controller.js.map
