// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('cljs.core.async');
hello_world.http.channel_reponse = (function hello_world$http$channel_reponse(ch){
return (function hello_world$http$channel_reponse_$_get_data_from_response(resp){
var vec__17144_17151 = resp;
var ok_17152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17151,(0),null);
var response_17153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17151,(1),null);
var r_17154 = (function (){var G__17148 = cljs.core.cst$kw$data;
var fexpr__17147 = cljs.core.last(resp);
return (fexpr__17147.cljs$core$IFn$_invoke$arity$1 ? fexpr__17147.cljs$core$IFn$_invoke$arity$1(G__17148) : fexpr__17147.call(null,G__17148));
})();
if(ok_17152 === true){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,r_17154);
} else {
var errors_17155 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response_17153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["errors",errors_17155], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(errors_17155),Error)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Operation cannot be performed",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Operation cannot be performed"], null)));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.ex_info("Oops!"),((cljs.core.coll_QMARK_(errors_17155))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (errors_17155,vec__17144_17151,ok_17152,response_17153,r_17154){
return (function (p1__17143_SHARP_){
if((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__17143_SHARP_) == null)){
return p1__17143_SHARP_;
} else {
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__17143_SHARP_);
}
});})(errors_17155,vec__17144_17151,ok_17152,response_17153,r_17154))
,errors_17155):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors_17155], null)));
}

}

var ch__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17149_17156 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$uri,hello_world.http.url,cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$params,cljs.core.clj__GT_js(hello_world.http.json),cljs.core.cst$kw$handler,(hello_world.http.channel_reponse.cljs$core$IFn$_invoke$arity$1 ? hello_world.http.channel_reponse.cljs$core$IFn$_invoke$arity$1(ch__$1) : hello_world.http.channel_reponse.call(null,ch__$1)),cljs.core.cst$kw$format,(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$response_DASH_format,(function (){var G__17150 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__17150) : ajax.core.json_response_format.call(null,G__17150));
})()], null);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__17149_17156) : ajax.core.ajax_request.call(null,G__17149_17156));

return ch__$1;
});
});
hello_world.http._LT_GET = (function hello_world$http$_LT_GET(var_args){
var G__17158 = arguments.length;
switch (G__17158) {
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
var G__17160 = cljs.core.cst$kw$data;
var fexpr__17159 = cljs.core.last(resp);
return (fexpr__17159.cljs$core$IFn$_invoke$arity$1 ? fexpr__17159.cljs$core$IFn$_invoke$arity$1(G__17160) : fexpr__17159.call(null,G__17160));
}));
});

hello_world.http._LT_GET.cljs$core$IFn$_invoke$arity$2 = (function (url,from_response){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17161_17164 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$uri,url,cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$handler,((function (ch){
return (function (resp){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(from_response.cljs$core$IFn$_invoke$arity$1 ? from_response.cljs$core$IFn$_invoke$arity$1(resp) : from_response.call(null,resp)));
});})(ch))
,cljs.core.cst$kw$response_DASH_format,(function (){var G__17162 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__17162) : ajax.core.json_response_format.call(null,G__17162));
})()], null);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__17161_17164) : ajax.core.ajax_request.call(null,G__17161_17164));

return ch;
});

hello_world.http._LT_GET.cljs$lang$maxFixedArity = 2;

