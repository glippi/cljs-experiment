// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('cljs.core.async');
hello_world.http.channel_reponse = (function hello_world$http$channel_reponse(ch){
return (function hello_world$http$channel_reponse_$_get_data_from_response(resp){
var vec__17142_17149 = resp;
var ok_17150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17142_17149,(0),null);
var response_17151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17142_17149,(1),null);
var r_17152 = (function (){var G__17146 = cljs.core.cst$kw$data;
var fexpr__17145 = cljs.core.last(resp);
return (fexpr__17145.cljs$core$IFn$_invoke$arity$1 ? fexpr__17145.cljs$core$IFn$_invoke$arity$1(G__17146) : fexpr__17145.call(null,G__17146));
})();
if(ok_17150 === true){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,r_17152);
} else {
var errors_17153 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response_17151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["errors",errors_17153], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(errors_17153),Error)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Operation cannot be performed",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Operation cannot be performed"], null)));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.ex_info("Oops!"),((cljs.core.coll_QMARK_(errors_17153))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (errors_17153,vec__17142_17149,ok_17150,response_17151,r_17152){
return (function (p1__17141_SHARP_){
if((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__17141_SHARP_) == null)){
return p1__17141_SHARP_;
} else {
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__17141_SHARP_);
}
});})(errors_17153,vec__17142_17149,ok_17150,response_17151,r_17152))
,errors_17153):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors_17153], null)));
}

}

var ch__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17147_17154 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$uri,hello_world.http.url,cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$params,cljs.core.clj__GT_js(hello_world.http.json),cljs.core.cst$kw$handler,(hello_world.http.channel_reponse.cljs$core$IFn$_invoke$arity$1 ? hello_world.http.channel_reponse.cljs$core$IFn$_invoke$arity$1(ch__$1) : hello_world.http.channel_reponse.call(null,ch__$1)),cljs.core.cst$kw$format,(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$response_DASH_format,(function (){var G__17148 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__17148) : ajax.core.json_response_format.call(null,G__17148));
})()], null);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__17147_17154) : ajax.core.ajax_request.call(null,G__17147_17154));

return ch__$1;
});
});
hello_world.http._LT_GET = (function hello_world$http$_LT_GET(var_args){
var G__17156 = arguments.length;
switch (G__17156) {
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
return hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$2(url,(function (resp){
var G__17158 = cljs.core.cst$kw$data;
var fexpr__17157 = cljs.core.last(resp);
return (fexpr__17157.cljs$core$IFn$_invoke$arity$1 ? fexpr__17157.cljs$core$IFn$_invoke$arity$1(G__17158) : fexpr__17157.call(null,G__17158));
}));
});

hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$2 = (function (url,from_response){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17159_17162 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$uri,url,cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$handler,((function (ch){
return (function (resp){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(from_response.cljs$core$IFn$_invoke$arity$1 ? from_response.cljs$core$IFn$_invoke$arity$1(resp) : from_response.call(null,resp)));
});})(ch))
,cljs.core.cst$kw$response_DASH_format,(function (){var G__17160 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__17160) : ajax.core.json_response_format.call(null,G__17160));
})()], null);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__17159_17162) : ajax.core.ajax_request.call(null,G__17159_17162));

return ch;
});

hello_world.http._LT_GET.cljs$lang$maxFixedArity = 2;

hello_world.http.printResponse = (function hello_world$http$printResponse(){
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__){
return (function (state_17168){
var state_val_17169 = (state_17168[(1)]);
if((state_val_17169 === (1))){
var inst_17163 = hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$1(hello_world.http.dataVizEndpoint);
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17168__$1,(2),inst_17163);
} else {
if((state_val_17169 === (2))){
var inst_17165 = (state_17168[(2)]);
var inst_17166 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17165], 0));
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17168__$1,inst_17166);
} else {
return null;
}
}
});})(c__13346__auto__))
;
return ((function (switch__13163__auto__,c__13346__auto__){
return (function() {
var hello_world$http$printResponse_$_state_machine__13164__auto__ = null;
var hello_world$http$printResponse_$_state_machine__13164__auto____0 = (function (){
var statearr_17170 = [null,null,null,null,null,null,null];
(statearr_17170[(0)] = hello_world$http$printResponse_$_state_machine__13164__auto__);

(statearr_17170[(1)] = (1));

return statearr_17170;
});
var hello_world$http$printResponse_$_state_machine__13164__auto____1 = (function (state_17168){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_17168);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e17171){if((e17171 instanceof Object)){
var ex__13167__auto__ = e17171;
var statearr_17172_17174 = state_17168;
(statearr_17172_17174[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17168);

return cljs.core.cst$kw$recur;
} else {
throw e17171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__17175 = state_17168;
state_17168 = G__17175;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
hello_world$http$printResponse_$_state_machine__13164__auto__ = function(state_17168){
switch(arguments.length){
case 0:
return hello_world$http$printResponse_$_state_machine__13164__auto____0.call(this);
case 1:
return hello_world$http$printResponse_$_state_machine__13164__auto____1.call(this,state_17168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$http$printResponse_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$http$printResponse_$_state_machine__13164__auto____0;
hello_world$http$printResponse_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$http$printResponse_$_state_machine__13164__auto____1;
return hello_world$http$printResponse_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__))
})();
var state__13348__auto__ = (function (){var statearr_17173 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_17173[(6)] = c__13346__auto__);

return statearr_17173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__))
);

return c__13346__auto__;
});
