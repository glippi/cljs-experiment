// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.http');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
hello_world.http.channel_reponse = (function hello_world$http$channel_reponse(ch){
return (function hello_world$http$channel_reponse_$_get_data_from_response(resp){
var vec__23968_23971 = resp;
var ok_23972 = cljs.core.nth.call(null,vec__23968_23971,(0),null);
var response_23973 = cljs.core.nth.call(null,vec__23968_23971,(1),null);
var r_23974 = cljs.core.last.call(null,resp).call(null,new cljs.core.Keyword(null,"data","data",-232669377));
if(ok_23972 === true){
cljs.core.async.put_BANG_.call(null,ch,r_23974);
} else {
var errors_23975 = cljs.core.get_in.call(null,response_23973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
cljs.core.print.call(null,"errors",errors_23975);

if(cljs.core._EQ_.call(null,cljs.core.type.call(null,errors_23975),Error)){
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Operation cannot be performed",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Operation cannot be performed"], null)));
} else {
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Oops!"),((cljs.core.coll_QMARK_.call(null,errors_23975))?cljs.core.map.call(null,((function (errors_23975,vec__23968_23971,ok_23972,response_23973,r_23974){
return (function (p1__23967_SHARP_){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__23967_SHARP_) == null)){
return p1__23967_SHARP_;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__23967_SHARP_);
}
});})(errors_23975,vec__23968_23971,ok_23972,response_23973,r_23974))
,errors_23975):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors_23975], null)));
}

}

var ch__$1 = cljs.core.async.chan.call(null);
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),hello_world.http.url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.clj__GT_js.call(null,hello_world.http.json),new cljs.core.Keyword(null,"handler","handler",-195596612),hello_world.http.channel_reponse.call(null,ch__$1),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

return ch__$1;
});
});
hello_world.http._LT_GET = (function hello_world$http$_LT_GET(var_args){
var G__23977 = arguments.length;
switch (G__23977) {
case 1:
return hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$1 = (function (url){
return hello_world.http._LT_GET.call(null,url,(function (resp){
return cljs.core.last.call(null,resp).call(null,new cljs.core.Keyword(null,"data","data",-232669377));
}));
});

hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$2 = (function (url,from_response){
var ch = cljs.core.async.chan.call(null);
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (ch){
return (function (resp){
return cljs.core.async.put_BANG_.call(null,ch,from_response.call(null,resp));
});})(ch))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

return ch;
});

hello_world.http._LT_GET.cljs$lang$maxFixedArity = 2;

hello_world.http.printResponse = (function hello_world$http$printResponse(){
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__){
return (function (state_23984){
var state_val_23985 = (state_23984[(1)]);
if((state_val_23985 === (1))){
var inst_23979 = hello_world.http._LT_GET.call(null,hello_world.http.dataVizEndpoint);
var state_23984__$1 = state_23984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23984__$1,(2),inst_23979);
} else {
if((state_val_23985 === (2))){
var inst_23981 = (state_23984[(2)]);
var inst_23982 = cljs.core.println.call(null,inst_23981);
var state_23984__$1 = state_23984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23984__$1,inst_23982);
} else {
return null;
}
}
});})(c__15423__auto__))
;
return ((function (switch__15400__auto__,c__15423__auto__){
return (function() {
var hello_world$http$printResponse_$_state_machine__15401__auto__ = null;
var hello_world$http$printResponse_$_state_machine__15401__auto____0 = (function (){
var statearr_23986 = [null,null,null,null,null,null,null];
(statearr_23986[(0)] = hello_world$http$printResponse_$_state_machine__15401__auto__);

(statearr_23986[(1)] = (1));

return statearr_23986;
});
var hello_world$http$printResponse_$_state_machine__15401__auto____1 = (function (state_23984){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23987){if((e23987 instanceof Object)){
var ex__15404__auto__ = e23987;
var statearr_23988_23990 = state_23984;
(statearr_23988_23990[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23991 = state_23984;
state_23984 = G__23991;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
hello_world$http$printResponse_$_state_machine__15401__auto__ = function(state_23984){
switch(arguments.length){
case 0:
return hello_world$http$printResponse_$_state_machine__15401__auto____0.call(this);
case 1:
return hello_world$http$printResponse_$_state_machine__15401__auto____1.call(this,state_23984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$http$printResponse_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$http$printResponse_$_state_machine__15401__auto____0;
hello_world$http$printResponse_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$http$printResponse_$_state_machine__15401__auto____1;
return hello_world$http$printResponse_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__))
})();
var state__15425__auto__ = (function (){var statearr_23989 = f__15424__auto__.call(null);
(statearr_23989[(6)] = c__15423__auto__);

return statearr_23989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__))
);

return c__15423__auto__;
});

//# sourceMappingURL=http.js.map
