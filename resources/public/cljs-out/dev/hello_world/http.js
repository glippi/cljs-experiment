// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.http');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
hello_world.http.dataVizEndpoint = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
hello_world.http.channel_reponse = (function hello_world$http$channel_reponse(ch){
return (function hello_world$http$channel_reponse_$_get_data_from_response(resp){
var vec__18114_18117 = resp;
var ok_18118 = cljs.core.nth.call(null,vec__18114_18117,(0),null);
var response_18119 = cljs.core.nth.call(null,vec__18114_18117,(1),null);
var r_18120 = cljs.core.last.call(null,resp).call(null,new cljs.core.Keyword(null,"data","data",-232669377));
if(ok_18118 === true){
cljs.core.async.put_BANG_.call(null,ch,r_18120);
} else {
var errors_18121 = cljs.core.get_in.call(null,response_18119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
cljs.core.print.call(null,"errors",errors_18121);

if(cljs.core._EQ_.call(null,cljs.core.type.call(null,errors_18121),Error)){
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Operation cannot be performed",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Operation cannot be performed"], null)));
} else {
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Oops!"),((cljs.core.coll_QMARK_.call(null,errors_18121))?cljs.core.map.call(null,((function (errors_18121,vec__18114_18117,ok_18118,response_18119,r_18120){
return (function (p1__18113_SHARP_){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18113_SHARP_) == null)){
return p1__18113_SHARP_;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18113_SHARP_);
}
});})(errors_18121,vec__18114_18117,ok_18118,response_18119,r_18120))
,errors_18121):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors_18121], null)));
}

}

var ch__$1 = cljs.core.async.chan.call(null);
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),hello_world.http.url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.clj__GT_js.call(null,hello_world.http.json),new cljs.core.Keyword(null,"handler","handler",-195596612),hello_world.http.channel_reponse.call(null,ch__$1),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

return ch__$1;
});
});
hello_world.http._LT_GET = (function hello_world$http$_LT_GET(var_args){
var G__18123 = arguments.length;
switch (G__18123) {
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
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__){
return (function (state_18130){
var state_val_18131 = (state_18130[(1)]);
if((state_val_18131 === (1))){
var inst_18125 = hello_world.http._LT_GET.call(null,hello_world.http.dataVizEndpoint);
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18130__$1,(2),inst_18125);
} else {
if((state_val_18131 === (2))){
var inst_18127 = (state_18130[(2)]);
var inst_18128 = cljs.core.println.call(null,inst_18127);
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18130__$1,inst_18128);
} else {
return null;
}
}
});})(c__14326__auto__))
;
return ((function (switch__14167__auto__,c__14326__auto__){
return (function() {
var hello_world$http$printResponse_$_state_machine__14168__auto__ = null;
var hello_world$http$printResponse_$_state_machine__14168__auto____0 = (function (){
var statearr_18132 = [null,null,null,null,null,null,null];
(statearr_18132[(0)] = hello_world$http$printResponse_$_state_machine__14168__auto__);

(statearr_18132[(1)] = (1));

return statearr_18132;
});
var hello_world$http$printResponse_$_state_machine__14168__auto____1 = (function (state_18130){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_18130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e18133){if((e18133 instanceof Object)){
var ex__14171__auto__ = e18133;
var statearr_18134_18136 = state_18130;
(statearr_18134_18136[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18137 = state_18130;
state_18130 = G__18137;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
hello_world$http$printResponse_$_state_machine__14168__auto__ = function(state_18130){
switch(arguments.length){
case 0:
return hello_world$http$printResponse_$_state_machine__14168__auto____0.call(this);
case 1:
return hello_world$http$printResponse_$_state_machine__14168__auto____1.call(this,state_18130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$http$printResponse_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$http$printResponse_$_state_machine__14168__auto____0;
hello_world$http$printResponse_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$http$printResponse_$_state_machine__14168__auto____1;
return hello_world$http$printResponse_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__))
})();
var state__14328__auto__ = (function (){var statearr_18135 = f__14327__auto__.call(null);
(statearr_18135[(6)] = c__14326__auto__);

return statearr_18135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__))
);

return c__14326__auto__;
});

//# sourceMappingURL=http.js.map
