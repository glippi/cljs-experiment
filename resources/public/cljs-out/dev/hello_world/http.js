// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.http');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
hello_world.http.channel_reponse = (function hello_world$http$channel_reponse(ch){
return (function hello_world$http$channel_reponse_$_get_data_from_response(resp){
var vec__29320_29323 = resp;
var ok_29324 = cljs.core.nth.call(null,vec__29320_29323,(0),null);
var response_29325 = cljs.core.nth.call(null,vec__29320_29323,(1),null);
var r_29326 = cljs.core.last.call(null,resp).call(null,new cljs.core.Keyword(null,"data","data",-232669377));
if(ok_29324 === true){
cljs.core.async.put_BANG_.call(null,ch,r_29326);
} else {
var errors_29327 = cljs.core.get_in.call(null,response_29325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
cljs.core.print.call(null,"errors",errors_29327);

if(cljs.core._EQ_.call(null,cljs.core.type.call(null,errors_29327),Error)){
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Operation cannot be performed",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Operation cannot be performed"], null)));
} else {
cljs.core.async.put_BANG_.call(null,ch,cljs.core.ex_info.call(null,"Oops!"),((cljs.core.coll_QMARK_.call(null,errors_29327))?cljs.core.map.call(null,((function (errors_29327,vec__29320_29323,ok_29324,response_29325,r_29326){
return (function (p1__29319_SHARP_){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__29319_SHARP_) == null)){
return p1__29319_SHARP_;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__29319_SHARP_);
}
});})(errors_29327,vec__29320_29323,ok_29324,response_29325,r_29326))
,errors_29327):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors_29327], null)));
}

}

var ch__$1 = cljs.core.async.chan.call(null);
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),hello_world.http.url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.clj__GT_js.call(null,hello_world.http.json),new cljs.core.Keyword(null,"handler","handler",-195596612),hello_world.http.channel_reponse.call(null,ch__$1),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

return ch__$1;
});
});
hello_world.http._LT_GET = (function hello_world$http$_LT_GET(var_args){
var G__29329 = arguments.length;
switch (G__29329) {
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


//# sourceMappingURL=http.js.map
