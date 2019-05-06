// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18586,handler){
var map__18587 = p__18586;
var map__18587__$1 = ((((!((map__18587 == null)))?(((((map__18587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18587):map__18587);
var uri = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18587,map__18587__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18583_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18583_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18587,map__18587__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___18611 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___18611)){
var response_type_18613 = temp__5457__auto___18611;
this$__$1.responseType = cljs.core.name.call(null,response_type_18613);
} else {
}

var seq__18592_18615 = cljs.core.seq.call(null,headers);
var chunk__18594_18616 = null;
var count__18595_18617 = (0);
var i__18598_18618 = (0);
while(true){
if((i__18598_18618 < count__18595_18617)){
var vec__18599_18623 = cljs.core._nth.call(null,chunk__18594_18616,i__18598_18618);
var k_18624 = cljs.core.nth.call(null,vec__18599_18623,(0),null);
var v_18625 = cljs.core.nth.call(null,vec__18599_18623,(1),null);
this$__$1.setRequestHeader(k_18624,v_18625);


var G__18629 = seq__18592_18615;
var G__18630 = chunk__18594_18616;
var G__18631 = count__18595_18617;
var G__18632 = (i__18598_18618 + (1));
seq__18592_18615 = G__18629;
chunk__18594_18616 = G__18630;
count__18595_18617 = G__18631;
i__18598_18618 = G__18632;
continue;
} else {
var temp__5457__auto___18637 = cljs.core.seq.call(null,seq__18592_18615);
if(temp__5457__auto___18637){
var seq__18592_18639__$1 = temp__5457__auto___18637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18592_18639__$1)){
var c__4351__auto___18640 = cljs.core.chunk_first.call(null,seq__18592_18639__$1);
var G__18642 = cljs.core.chunk_rest.call(null,seq__18592_18639__$1);
var G__18643 = c__4351__auto___18640;
var G__18644 = cljs.core.count.call(null,c__4351__auto___18640);
var G__18645 = (0);
seq__18592_18615 = G__18642;
chunk__18594_18616 = G__18643;
count__18595_18617 = G__18644;
i__18598_18618 = G__18645;
continue;
} else {
var vec__18605_18651 = cljs.core.first.call(null,seq__18592_18639__$1);
var k_18652 = cljs.core.nth.call(null,vec__18605_18651,(0),null);
var v_18653 = cljs.core.nth.call(null,vec__18605_18651,(1),null);
this$__$1.setRequestHeader(k_18652,v_18653);


var G__18657 = cljs.core.next.call(null,seq__18592_18639__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__18592_18615 = G__18657;
chunk__18594_18616 = G__18658;
count__18595_18617 = G__18659;
i__18598_18618 = G__18660;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
