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
var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__){
return (function (state_17178){
var state_val_17179 = (state_17178[(1)]);
if((state_val_17179 === (1))){
var inst_17167 = hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$1(hello_world.controller.dataVizEndpoint);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17178__$1,(2),inst_17167);
} else {
if((state_val_17179 === (2))){
var inst_17169 = (state_17178[(2)]);
var inst_17171 = (function (){var remote_data = inst_17169;
return ((function (remote_data,inst_17169,state_val_17179,c__13348__auto__){
return (function (p__17170){
var vec__17180 = p__17170;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17180,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17180,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$value,value], null);
});
;})(remote_data,inst_17169,state_val_17179,c__13348__auto__))
})();
var inst_17172 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((100),inst_17169);
var inst_17173 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17171,inst_17172);
var inst_17174 = cljs.core.deref(hello_world.model.model);
var inst_17175 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_17174,cljs.core.cst$kw$bars,inst_17173);
var inst_17176 = hello_world.controller.swapm_BANG_(inst_17175,hello_world.model.model);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17178__$1,inst_17176);
} else {
return null;
}
}
});})(c__13348__auto__))
;
return ((function (switch__10970__auto__,c__13348__auto__){
return (function() {
var hello_world$controller$init_$_state_machine__10971__auto__ = null;
var hello_world$controller$init_$_state_machine__10971__auto____0 = (function (){
var statearr_17183 = [null,null,null,null,null,null,null];
(statearr_17183[(0)] = hello_world$controller$init_$_state_machine__10971__auto__);

(statearr_17183[(1)] = (1));

return statearr_17183;
});
var hello_world$controller$init_$_state_machine__10971__auto____1 = (function (state_17178){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_17178);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e17184){if((e17184 instanceof Object)){
var ex__10974__auto__ = e17184;
var statearr_17185_17187 = state_17178;
(statearr_17185_17187[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17178);

return cljs.core.cst$kw$recur;
} else {
throw e17184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__17188 = state_17178;
state_17178 = G__17188;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
hello_world$controller$init_$_state_machine__10971__auto__ = function(state_17178){
switch(arguments.length){
case 0:
return hello_world$controller$init_$_state_machine__10971__auto____0.call(this);
case 1:
return hello_world$controller$init_$_state_machine__10971__auto____1.call(this,state_17178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$controller$init_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$controller$init_$_state_machine__10971__auto____0;
hello_world$controller$init_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$controller$init_$_state_machine__10971__auto____1;
return hello_world$controller$init_$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__))
})();
var state__13350__auto__ = (function (){var statearr_17186 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_17186[(6)] = c__13348__auto__);

return statearr_17186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__))
);

return c__13348__auto__;
});
hello_world.controller.add_year = (function hello_world$controller$add_year(year,value){
return hello_world.controller.swapm_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(hello_world.model.model),cljs.core.cst$kw$bars,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$value,value], null)),hello_world.model.model);
});
