// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15276 = arguments.length;
switch (G__15276) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15277 = (function (f,blockable,meta15278){
this.f = f;
this.blockable = blockable;
this.meta15278 = meta15278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15279,meta15278__$1){
var self__ = this;
var _15279__$1 = this;
return (new cljs.core.async.t_cljs$core$async15277(self__.f,self__.blockable,meta15278__$1));
});

cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15279){
var self__ = this;
var _15279__$1 = this;
return self__.meta15278;
});

cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15278], null);
});

cljs.core.async.t_cljs$core$async15277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15277";

cljs.core.async.t_cljs$core$async15277.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15277");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15277.
 */
cljs.core.async.__GT_t_cljs$core$async15277 = (function cljs$core$async$__GT_t_cljs$core$async15277(f__$1,blockable__$1,meta15278){
return (new cljs.core.async.t_cljs$core$async15277(f__$1,blockable__$1,meta15278));
});

}

return (new cljs.core.async.t_cljs$core$async15277(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15283 = arguments.length;
switch (G__15283) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15286 = arguments.length;
switch (G__15286) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15289 = arguments.length;
switch (G__15289) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15291 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15291) : fn1.call(null,val_15291));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15291,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15291) : fn1.call(null,val_15291));
});})(val_15291,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15293 = arguments.length;
switch (G__15293) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___15295 = n;
var x_15296 = (0);
while(true){
if((x_15296 < n__4408__auto___15295)){
(a[x_15296] = (0));

var G__15297 = (x_15296 + (1));
x_15296 = G__15297;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15298 = (i + (1));
i = G__15298;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15299 = (function (flag,meta15300){
this.flag = flag;
this.meta15300 = meta15300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15301,meta15300__$1){
var self__ = this;
var _15301__$1 = this;
return (new cljs.core.async.t_cljs$core$async15299(self__.flag,meta15300__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15301){
var self__ = this;
var _15301__$1 = this;
return self__.meta15300;
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15300], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15299";

cljs.core.async.t_cljs$core$async15299.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15299");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15299.
 */
cljs.core.async.__GT_t_cljs$core$async15299 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15299(flag__$1,meta15300){
return (new cljs.core.async.t_cljs$core$async15299(flag__$1,meta15300));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15299(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15302 = (function (flag,cb,meta15303){
this.flag = flag;
this.cb = cb;
this.meta15303 = meta15303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15304,meta15303__$1){
var self__ = this;
var _15304__$1 = this;
return (new cljs.core.async.t_cljs$core$async15302(self__.flag,self__.cb,meta15303__$1));
});

cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15304){
var self__ = this;
var _15304__$1 = this;
return self__.meta15303;
});

cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15303], null);
});

cljs.core.async.t_cljs$core$async15302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15302";

cljs.core.async.t_cljs$core$async15302.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15302");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15302.
 */
cljs.core.async.__GT_t_cljs$core$async15302 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15302(flag__$1,cb__$1,meta15303){
return (new cljs.core.async.t_cljs$core$async15302(flag__$1,cb__$1,meta15303));
});

}

return (new cljs.core.async.t_cljs$core$async15302(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15305_SHARP_){
var G__15307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15305_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15307) : fret.call(null,G__15307));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15306_SHARP_){
var G__15308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15306_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15308) : fret.call(null,G__15308));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15309 = (i + (1));
i = G__15309;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15315 = arguments.length;
var i__4532__auto___15316 = (0);
while(true){
if((i__4532__auto___15316 < len__4531__auto___15315)){
args__4534__auto__.push((arguments[i__4532__auto___15316]));

var G__15317 = (i__4532__auto___15316 + (1));
i__4532__auto___15316 = G__15317;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15312){
var map__15313 = p__15312;
var map__15313__$1 = ((((!((map__15313 == null)))?(((((map__15313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15313):map__15313);
var opts = map__15313__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15310){
var G__15311 = cljs.core.first(seq15310);
var seq15310__$1 = cljs.core.next(seq15310);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15311,seq15310__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15319 = arguments.length;
switch (G__15319) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13348__auto___15365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___15365){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___15365){
return (function (state_15343){
var state_val_15344 = (state_15343[(1)]);
if((state_val_15344 === (7))){
var inst_15339 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
var statearr_15345_15366 = state_15343__$1;
(statearr_15345_15366[(2)] = inst_15339);

(statearr_15345_15366[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (1))){
var state_15343__$1 = state_15343;
var statearr_15346_15367 = state_15343__$1;
(statearr_15346_15367[(2)] = null);

(statearr_15346_15367[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (4))){
var inst_15322 = (state_15343[(7)]);
var inst_15322__$1 = (state_15343[(2)]);
var inst_15323 = (inst_15322__$1 == null);
var state_15343__$1 = (function (){var statearr_15347 = state_15343;
(statearr_15347[(7)] = inst_15322__$1);

return statearr_15347;
})();
if(cljs.core.truth_(inst_15323)){
var statearr_15348_15368 = state_15343__$1;
(statearr_15348_15368[(1)] = (5));

} else {
var statearr_15349_15369 = state_15343__$1;
(statearr_15349_15369[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (13))){
var state_15343__$1 = state_15343;
var statearr_15350_15370 = state_15343__$1;
(statearr_15350_15370[(2)] = null);

(statearr_15350_15370[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (6))){
var inst_15322 = (state_15343[(7)]);
var state_15343__$1 = state_15343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15343__$1,(11),to,inst_15322);
} else {
if((state_val_15344 === (3))){
var inst_15341 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15343__$1,inst_15341);
} else {
if((state_val_15344 === (12))){
var state_15343__$1 = state_15343;
var statearr_15351_15371 = state_15343__$1;
(statearr_15351_15371[(2)] = null);

(statearr_15351_15371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (2))){
var state_15343__$1 = state_15343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15343__$1,(4),from);
} else {
if((state_val_15344 === (11))){
var inst_15332 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
if(cljs.core.truth_(inst_15332)){
var statearr_15352_15372 = state_15343__$1;
(statearr_15352_15372[(1)] = (12));

} else {
var statearr_15353_15373 = state_15343__$1;
(statearr_15353_15373[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (9))){
var state_15343__$1 = state_15343;
var statearr_15354_15374 = state_15343__$1;
(statearr_15354_15374[(2)] = null);

(statearr_15354_15374[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (5))){
var state_15343__$1 = state_15343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15355_15375 = state_15343__$1;
(statearr_15355_15375[(1)] = (8));

} else {
var statearr_15356_15376 = state_15343__$1;
(statearr_15356_15376[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (14))){
var inst_15337 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
var statearr_15357_15377 = state_15343__$1;
(statearr_15357_15377[(2)] = inst_15337);

(statearr_15357_15377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (10))){
var inst_15329 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
var statearr_15358_15378 = state_15343__$1;
(statearr_15358_15378[(2)] = inst_15329);

(statearr_15358_15378[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15344 === (8))){
var inst_15326 = cljs.core.async.close_BANG_(to);
var state_15343__$1 = state_15343;
var statearr_15359_15379 = state_15343__$1;
(statearr_15359_15379[(2)] = inst_15326);

(statearr_15359_15379[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___15365))
;
return ((function (switch__10970__auto__,c__13348__auto___15365){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_15360 = [null,null,null,null,null,null,null,null];
(statearr_15360[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_15360[(1)] = (1));

return statearr_15360;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_15343){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15343);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15361){if((e15361 instanceof Object)){
var ex__10974__auto__ = e15361;
var statearr_15362_15380 = state_15343;
(statearr_15362_15380[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15343);

return cljs.core.cst$kw$recur;
} else {
throw e15361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15381 = state_15343;
state_15343 = G__15381;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_15343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_15343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___15365))
})();
var state__13350__auto__ = (function (){var statearr_15363 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15363[(6)] = c__13348__auto___15365);

return statearr_15363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___15365))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15382){
var vec__15383 = p__15382;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(1),null);
var job = vec__15383;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13348__auto___15554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results){
return (function (state_15390){
var state_val_15391 = (state_15390[(1)]);
if((state_val_15391 === (1))){
var state_15390__$1 = state_15390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15390__$1,(2),res,v);
} else {
if((state_val_15391 === (2))){
var inst_15387 = (state_15390[(2)]);
var inst_15388 = cljs.core.async.close_BANG_(res);
var state_15390__$1 = (function (){var statearr_15392 = state_15390;
(statearr_15392[(7)] = inst_15387);

return statearr_15392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15390__$1,inst_15388);
} else {
return null;
}
}
});})(c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results))
;
return ((function (switch__10970__auto__,c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_15393 = [null,null,null,null,null,null,null,null];
(statearr_15393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__);

(statearr_15393[(1)] = (1));

return statearr_15393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1 = (function (state_15390){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15390);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15394){if((e15394 instanceof Object)){
var ex__10974__auto__ = e15394;
var statearr_15395_15555 = state_15390;
(statearr_15395_15555[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15390);

return cljs.core.cst$kw$recur;
} else {
throw e15394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15556 = state_15390;
state_15390 = G__15556;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = function(state_15390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1.call(this,state_15390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results))
})();
var state__13350__auto__ = (function (){var statearr_15396 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15396[(6)] = c__13348__auto___15554);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___15554,res,vec__15383,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15397){
var vec__15398 = p__15397;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(1),null);
var job = vec__15398;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___15557 = n;
var __15558 = (0);
while(true){
if((__15558 < n__4408__auto___15557)){
var G__15401_15559 = type;
var G__15401_15560__$1 = (((G__15401_15559 instanceof cljs.core.Keyword))?G__15401_15559.fqn:null);
switch (G__15401_15560__$1) {
case "compute":
var c__13348__auto___15562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15558,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (__15558,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function (state_15414){
var state_val_15415 = (state_15414[(1)]);
if((state_val_15415 === (1))){
var state_15414__$1 = state_15414;
var statearr_15416_15563 = state_15414__$1;
(statearr_15416_15563[(2)] = null);

(statearr_15416_15563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15415 === (2))){
var state_15414__$1 = state_15414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15414__$1,(4),jobs);
} else {
if((state_val_15415 === (3))){
var inst_15412 = (state_15414[(2)]);
var state_15414__$1 = state_15414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15414__$1,inst_15412);
} else {
if((state_val_15415 === (4))){
var inst_15404 = (state_15414[(2)]);
var inst_15405 = process(inst_15404);
var state_15414__$1 = state_15414;
if(cljs.core.truth_(inst_15405)){
var statearr_15417_15564 = state_15414__$1;
(statearr_15417_15564[(1)] = (5));

} else {
var statearr_15418_15565 = state_15414__$1;
(statearr_15418_15565[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15415 === (5))){
var state_15414__$1 = state_15414;
var statearr_15419_15566 = state_15414__$1;
(statearr_15419_15566[(2)] = null);

(statearr_15419_15566[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15415 === (6))){
var state_15414__$1 = state_15414;
var statearr_15420_15567 = state_15414__$1;
(statearr_15420_15567[(2)] = null);

(statearr_15420_15567[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15415 === (7))){
var inst_15410 = (state_15414[(2)]);
var state_15414__$1 = state_15414;
var statearr_15421_15568 = state_15414__$1;
(statearr_15421_15568[(2)] = inst_15410);

(statearr_15421_15568[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15558,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
;
return ((function (__15558,switch__10970__auto__,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_15422 = [null,null,null,null,null,null,null];
(statearr_15422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__);

(statearr_15422[(1)] = (1));

return statearr_15422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1 = (function (state_15414){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15414);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15423){if((e15423 instanceof Object)){
var ex__10974__auto__ = e15423;
var statearr_15424_15569 = state_15414;
(statearr_15424_15569[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15414);

return cljs.core.cst$kw$recur;
} else {
throw e15423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15570 = state_15414;
state_15414 = G__15570;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = function(state_15414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1.call(this,state_15414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__;
})()
;})(__15558,switch__10970__auto__,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
})();
var state__13350__auto__ = (function (){var statearr_15425 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15425[(6)] = c__13348__auto___15562);

return statearr_15425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(__15558,c__13348__auto___15562,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
);


break;
case "async":
var c__13348__auto___15571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15558,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (__15558,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function (state_15438){
var state_val_15439 = (state_15438[(1)]);
if((state_val_15439 === (1))){
var state_15438__$1 = state_15438;
var statearr_15440_15572 = state_15438__$1;
(statearr_15440_15572[(2)] = null);

(statearr_15440_15572[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (2))){
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15438__$1,(4),jobs);
} else {
if((state_val_15439 === (3))){
var inst_15436 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15438__$1,inst_15436);
} else {
if((state_val_15439 === (4))){
var inst_15428 = (state_15438[(2)]);
var inst_15429 = async(inst_15428);
var state_15438__$1 = state_15438;
if(cljs.core.truth_(inst_15429)){
var statearr_15441_15573 = state_15438__$1;
(statearr_15441_15573[(1)] = (5));

} else {
var statearr_15442_15574 = state_15438__$1;
(statearr_15442_15574[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (5))){
var state_15438__$1 = state_15438;
var statearr_15443_15575 = state_15438__$1;
(statearr_15443_15575[(2)] = null);

(statearr_15443_15575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (6))){
var state_15438__$1 = state_15438;
var statearr_15444_15576 = state_15438__$1;
(statearr_15444_15576[(2)] = null);

(statearr_15444_15576[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (7))){
var inst_15434 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
var statearr_15445_15577 = state_15438__$1;
(statearr_15445_15577[(2)] = inst_15434);

(statearr_15445_15577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15558,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
;
return ((function (__15558,switch__10970__auto__,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_15446 = [null,null,null,null,null,null,null];
(statearr_15446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__);

(statearr_15446[(1)] = (1));

return statearr_15446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1 = (function (state_15438){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15438);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15447){if((e15447 instanceof Object)){
var ex__10974__auto__ = e15447;
var statearr_15448_15578 = state_15438;
(statearr_15448_15578[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15438);

return cljs.core.cst$kw$recur;
} else {
throw e15447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15579 = state_15438;
state_15438 = G__15579;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = function(state_15438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1.call(this,state_15438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__;
})()
;})(__15558,switch__10970__auto__,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
})();
var state__13350__auto__ = (function (){var statearr_15449 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15449[(6)] = c__13348__auto___15571);

return statearr_15449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(__15558,c__13348__auto___15571,G__15401_15559,G__15401_15560__$1,n__4408__auto___15557,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15401_15560__$1)].join('')));

}

var G__15580 = (__15558 + (1));
__15558 = G__15580;
continue;
} else {
}
break;
}

var c__13348__auto___15581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___15581,jobs,results,process,async){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___15581,jobs,results,process,async){
return (function (state_15471){
var state_val_15472 = (state_15471[(1)]);
if((state_val_15472 === (1))){
var state_15471__$1 = state_15471;
var statearr_15473_15582 = state_15471__$1;
(statearr_15473_15582[(2)] = null);

(statearr_15473_15582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (2))){
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15471__$1,(4),from);
} else {
if((state_val_15472 === (3))){
var inst_15469 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15471__$1,inst_15469);
} else {
if((state_val_15472 === (4))){
var inst_15452 = (state_15471[(7)]);
var inst_15452__$1 = (state_15471[(2)]);
var inst_15453 = (inst_15452__$1 == null);
var state_15471__$1 = (function (){var statearr_15474 = state_15471;
(statearr_15474[(7)] = inst_15452__$1);

return statearr_15474;
})();
if(cljs.core.truth_(inst_15453)){
var statearr_15475_15583 = state_15471__$1;
(statearr_15475_15583[(1)] = (5));

} else {
var statearr_15476_15584 = state_15471__$1;
(statearr_15476_15584[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (5))){
var inst_15455 = cljs.core.async.close_BANG_(jobs);
var state_15471__$1 = state_15471;
var statearr_15477_15585 = state_15471__$1;
(statearr_15477_15585[(2)] = inst_15455);

(statearr_15477_15585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (6))){
var inst_15457 = (state_15471[(8)]);
var inst_15452 = (state_15471[(7)]);
var inst_15457__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15458 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15459 = [inst_15452,inst_15457__$1];
var inst_15460 = (new cljs.core.PersistentVector(null,2,(5),inst_15458,inst_15459,null));
var state_15471__$1 = (function (){var statearr_15478 = state_15471;
(statearr_15478[(8)] = inst_15457__$1);

return statearr_15478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15471__$1,(8),jobs,inst_15460);
} else {
if((state_val_15472 === (7))){
var inst_15467 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15479_15586 = state_15471__$1;
(statearr_15479_15586[(2)] = inst_15467);

(statearr_15479_15586[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (8))){
var inst_15457 = (state_15471[(8)]);
var inst_15462 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15480 = state_15471;
(statearr_15480[(9)] = inst_15462);

return statearr_15480;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15471__$1,(9),results,inst_15457);
} else {
if((state_val_15472 === (9))){
var inst_15464 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15481 = state_15471;
(statearr_15481[(10)] = inst_15464);

return statearr_15481;
})();
var statearr_15482_15587 = state_15471__$1;
(statearr_15482_15587[(2)] = null);

(statearr_15482_15587[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___15581,jobs,results,process,async))
;
return ((function (switch__10970__auto__,c__13348__auto___15581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_15483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__);

(statearr_15483[(1)] = (1));

return statearr_15483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1 = (function (state_15471){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15471);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15484){if((e15484 instanceof Object)){
var ex__10974__auto__ = e15484;
var statearr_15485_15588 = state_15471;
(statearr_15485_15588[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15471);

return cljs.core.cst$kw$recur;
} else {
throw e15484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15589 = state_15471;
state_15471 = G__15589;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = function(state_15471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1.call(this,state_15471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___15581,jobs,results,process,async))
})();
var state__13350__auto__ = (function (){var statearr_15486 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15486[(6)] = c__13348__auto___15581);

return statearr_15486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___15581,jobs,results,process,async))
);


var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__,jobs,results,process,async){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__,jobs,results,process,async){
return (function (state_15524){
var state_val_15525 = (state_15524[(1)]);
if((state_val_15525 === (7))){
var inst_15520 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
var statearr_15526_15590 = state_15524__$1;
(statearr_15526_15590[(2)] = inst_15520);

(statearr_15526_15590[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (20))){
var state_15524__$1 = state_15524;
var statearr_15527_15591 = state_15524__$1;
(statearr_15527_15591[(2)] = null);

(statearr_15527_15591[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (1))){
var state_15524__$1 = state_15524;
var statearr_15528_15592 = state_15524__$1;
(statearr_15528_15592[(2)] = null);

(statearr_15528_15592[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (4))){
var inst_15489 = (state_15524[(7)]);
var inst_15489__$1 = (state_15524[(2)]);
var inst_15490 = (inst_15489__$1 == null);
var state_15524__$1 = (function (){var statearr_15529 = state_15524;
(statearr_15529[(7)] = inst_15489__$1);

return statearr_15529;
})();
if(cljs.core.truth_(inst_15490)){
var statearr_15530_15593 = state_15524__$1;
(statearr_15530_15593[(1)] = (5));

} else {
var statearr_15531_15594 = state_15524__$1;
(statearr_15531_15594[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (15))){
var inst_15502 = (state_15524[(8)]);
var state_15524__$1 = state_15524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15524__$1,(18),to,inst_15502);
} else {
if((state_val_15525 === (21))){
var inst_15515 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
var statearr_15532_15595 = state_15524__$1;
(statearr_15532_15595[(2)] = inst_15515);

(statearr_15532_15595[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (13))){
var inst_15517 = (state_15524[(2)]);
var state_15524__$1 = (function (){var statearr_15533 = state_15524;
(statearr_15533[(9)] = inst_15517);

return statearr_15533;
})();
var statearr_15534_15596 = state_15524__$1;
(statearr_15534_15596[(2)] = null);

(statearr_15534_15596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (6))){
var inst_15489 = (state_15524[(7)]);
var state_15524__$1 = state_15524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15524__$1,(11),inst_15489);
} else {
if((state_val_15525 === (17))){
var inst_15510 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
if(cljs.core.truth_(inst_15510)){
var statearr_15535_15597 = state_15524__$1;
(statearr_15535_15597[(1)] = (19));

} else {
var statearr_15536_15598 = state_15524__$1;
(statearr_15536_15598[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (3))){
var inst_15522 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15524__$1,inst_15522);
} else {
if((state_val_15525 === (12))){
var inst_15499 = (state_15524[(10)]);
var state_15524__$1 = state_15524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15524__$1,(14),inst_15499);
} else {
if((state_val_15525 === (2))){
var state_15524__$1 = state_15524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15524__$1,(4),results);
} else {
if((state_val_15525 === (19))){
var state_15524__$1 = state_15524;
var statearr_15537_15599 = state_15524__$1;
(statearr_15537_15599[(2)] = null);

(statearr_15537_15599[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (11))){
var inst_15499 = (state_15524[(2)]);
var state_15524__$1 = (function (){var statearr_15538 = state_15524;
(statearr_15538[(10)] = inst_15499);

return statearr_15538;
})();
var statearr_15539_15600 = state_15524__$1;
(statearr_15539_15600[(2)] = null);

(statearr_15539_15600[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (9))){
var state_15524__$1 = state_15524;
var statearr_15540_15601 = state_15524__$1;
(statearr_15540_15601[(2)] = null);

(statearr_15540_15601[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (5))){
var state_15524__$1 = state_15524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15541_15602 = state_15524__$1;
(statearr_15541_15602[(1)] = (8));

} else {
var statearr_15542_15603 = state_15524__$1;
(statearr_15542_15603[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (14))){
var inst_15504 = (state_15524[(11)]);
var inst_15502 = (state_15524[(8)]);
var inst_15502__$1 = (state_15524[(2)]);
var inst_15503 = (inst_15502__$1 == null);
var inst_15504__$1 = cljs.core.not(inst_15503);
var state_15524__$1 = (function (){var statearr_15543 = state_15524;
(statearr_15543[(11)] = inst_15504__$1);

(statearr_15543[(8)] = inst_15502__$1);

return statearr_15543;
})();
if(inst_15504__$1){
var statearr_15544_15604 = state_15524__$1;
(statearr_15544_15604[(1)] = (15));

} else {
var statearr_15545_15605 = state_15524__$1;
(statearr_15545_15605[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (16))){
var inst_15504 = (state_15524[(11)]);
var state_15524__$1 = state_15524;
var statearr_15546_15606 = state_15524__$1;
(statearr_15546_15606[(2)] = inst_15504);

(statearr_15546_15606[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (10))){
var inst_15496 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
var statearr_15547_15607 = state_15524__$1;
(statearr_15547_15607[(2)] = inst_15496);

(statearr_15547_15607[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (18))){
var inst_15507 = (state_15524[(2)]);
var state_15524__$1 = state_15524;
var statearr_15548_15608 = state_15524__$1;
(statearr_15548_15608[(2)] = inst_15507);

(statearr_15548_15608[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15525 === (8))){
var inst_15493 = cljs.core.async.close_BANG_(to);
var state_15524__$1 = state_15524;
var statearr_15549_15609 = state_15524__$1;
(statearr_15549_15609[(2)] = inst_15493);

(statearr_15549_15609[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto__,jobs,results,process,async))
;
return ((function (switch__10970__auto__,c__13348__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_15550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__);

(statearr_15550[(1)] = (1));

return statearr_15550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1 = (function (state_15524){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15524);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15551){if((e15551 instanceof Object)){
var ex__10974__auto__ = e15551;
var statearr_15552_15610 = state_15524;
(statearr_15552_15610[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15524);

return cljs.core.cst$kw$recur;
} else {
throw e15551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15611 = state_15524;
state_15524 = G__15611;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__ = function(state_15524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1.call(this,state_15524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__,jobs,results,process,async))
})();
var state__13350__auto__ = (function (){var statearr_15553 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15553[(6)] = c__13348__auto__);

return statearr_15553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__,jobs,results,process,async))
);

return c__13348__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15613 = arguments.length;
switch (G__15613) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15616 = arguments.length;
switch (G__15616) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15619 = arguments.length;
switch (G__15619) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13348__auto___15668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___15668,tc,fc){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___15668,tc,fc){
return (function (state_15645){
var state_val_15646 = (state_15645[(1)]);
if((state_val_15646 === (7))){
var inst_15641 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
var statearr_15647_15669 = state_15645__$1;
(statearr_15647_15669[(2)] = inst_15641);

(statearr_15647_15669[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (1))){
var state_15645__$1 = state_15645;
var statearr_15648_15670 = state_15645__$1;
(statearr_15648_15670[(2)] = null);

(statearr_15648_15670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (4))){
var inst_15622 = (state_15645[(7)]);
var inst_15622__$1 = (state_15645[(2)]);
var inst_15623 = (inst_15622__$1 == null);
var state_15645__$1 = (function (){var statearr_15649 = state_15645;
(statearr_15649[(7)] = inst_15622__$1);

return statearr_15649;
})();
if(cljs.core.truth_(inst_15623)){
var statearr_15650_15671 = state_15645__$1;
(statearr_15650_15671[(1)] = (5));

} else {
var statearr_15651_15672 = state_15645__$1;
(statearr_15651_15672[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (13))){
var state_15645__$1 = state_15645;
var statearr_15652_15673 = state_15645__$1;
(statearr_15652_15673[(2)] = null);

(statearr_15652_15673[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (6))){
var inst_15622 = (state_15645[(7)]);
var inst_15628 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15622) : p.call(null,inst_15622));
var state_15645__$1 = state_15645;
if(cljs.core.truth_(inst_15628)){
var statearr_15653_15674 = state_15645__$1;
(statearr_15653_15674[(1)] = (9));

} else {
var statearr_15654_15675 = state_15645__$1;
(statearr_15654_15675[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (3))){
var inst_15643 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15645__$1,inst_15643);
} else {
if((state_val_15646 === (12))){
var state_15645__$1 = state_15645;
var statearr_15655_15676 = state_15645__$1;
(statearr_15655_15676[(2)] = null);

(statearr_15655_15676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (2))){
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15645__$1,(4),ch);
} else {
if((state_val_15646 === (11))){
var inst_15622 = (state_15645[(7)]);
var inst_15632 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15645__$1,(8),inst_15632,inst_15622);
} else {
if((state_val_15646 === (9))){
var state_15645__$1 = state_15645;
var statearr_15656_15677 = state_15645__$1;
(statearr_15656_15677[(2)] = tc);

(statearr_15656_15677[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (5))){
var inst_15625 = cljs.core.async.close_BANG_(tc);
var inst_15626 = cljs.core.async.close_BANG_(fc);
var state_15645__$1 = (function (){var statearr_15657 = state_15645;
(statearr_15657[(8)] = inst_15625);

return statearr_15657;
})();
var statearr_15658_15678 = state_15645__$1;
(statearr_15658_15678[(2)] = inst_15626);

(statearr_15658_15678[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (14))){
var inst_15639 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
var statearr_15659_15679 = state_15645__$1;
(statearr_15659_15679[(2)] = inst_15639);

(statearr_15659_15679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (10))){
var state_15645__$1 = state_15645;
var statearr_15660_15680 = state_15645__$1;
(statearr_15660_15680[(2)] = fc);

(statearr_15660_15680[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (8))){
var inst_15634 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
if(cljs.core.truth_(inst_15634)){
var statearr_15661_15681 = state_15645__$1;
(statearr_15661_15681[(1)] = (12));

} else {
var statearr_15662_15682 = state_15645__$1;
(statearr_15662_15682[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___15668,tc,fc))
;
return ((function (switch__10970__auto__,c__13348__auto___15668,tc,fc){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_15663 = [null,null,null,null,null,null,null,null,null];
(statearr_15663[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_15663[(1)] = (1));

return statearr_15663;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_15645){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15645);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15664){if((e15664 instanceof Object)){
var ex__10974__auto__ = e15664;
var statearr_15665_15683 = state_15645;
(statearr_15665_15683[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15645);

return cljs.core.cst$kw$recur;
} else {
throw e15664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15684 = state_15645;
state_15645 = G__15684;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_15645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_15645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___15668,tc,fc))
})();
var state__13350__auto__ = (function (){var statearr_15666 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15666[(6)] = c__13348__auto___15668);

return statearr_15666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___15668,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__){
return (function (state_15705){
var state_val_15706 = (state_15705[(1)]);
if((state_val_15706 === (7))){
var inst_15701 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15707_15725 = state_15705__$1;
(statearr_15707_15725[(2)] = inst_15701);

(statearr_15707_15725[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (1))){
var inst_15685 = init;
var state_15705__$1 = (function (){var statearr_15708 = state_15705;
(statearr_15708[(7)] = inst_15685);

return statearr_15708;
})();
var statearr_15709_15726 = state_15705__$1;
(statearr_15709_15726[(2)] = null);

(statearr_15709_15726[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (4))){
var inst_15688 = (state_15705[(8)]);
var inst_15688__$1 = (state_15705[(2)]);
var inst_15689 = (inst_15688__$1 == null);
var state_15705__$1 = (function (){var statearr_15710 = state_15705;
(statearr_15710[(8)] = inst_15688__$1);

return statearr_15710;
})();
if(cljs.core.truth_(inst_15689)){
var statearr_15711_15727 = state_15705__$1;
(statearr_15711_15727[(1)] = (5));

} else {
var statearr_15712_15728 = state_15705__$1;
(statearr_15712_15728[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (6))){
var inst_15688 = (state_15705[(8)]);
var inst_15685 = (state_15705[(7)]);
var inst_15692 = (state_15705[(9)]);
var inst_15692__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15685,inst_15688) : f.call(null,inst_15685,inst_15688));
var inst_15693 = cljs.core.reduced_QMARK_(inst_15692__$1);
var state_15705__$1 = (function (){var statearr_15713 = state_15705;
(statearr_15713[(9)] = inst_15692__$1);

return statearr_15713;
})();
if(inst_15693){
var statearr_15714_15729 = state_15705__$1;
(statearr_15714_15729[(1)] = (8));

} else {
var statearr_15715_15730 = state_15705__$1;
(statearr_15715_15730[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (3))){
var inst_15703 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15705__$1,inst_15703);
} else {
if((state_val_15706 === (2))){
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15705__$1,(4),ch);
} else {
if((state_val_15706 === (9))){
var inst_15692 = (state_15705[(9)]);
var inst_15685 = inst_15692;
var state_15705__$1 = (function (){var statearr_15716 = state_15705;
(statearr_15716[(7)] = inst_15685);

return statearr_15716;
})();
var statearr_15717_15731 = state_15705__$1;
(statearr_15717_15731[(2)] = null);

(statearr_15717_15731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (5))){
var inst_15685 = (state_15705[(7)]);
var state_15705__$1 = state_15705;
var statearr_15718_15732 = state_15705__$1;
(statearr_15718_15732[(2)] = inst_15685);

(statearr_15718_15732[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (10))){
var inst_15699 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15719_15733 = state_15705__$1;
(statearr_15719_15733[(2)] = inst_15699);

(statearr_15719_15733[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15706 === (8))){
var inst_15692 = (state_15705[(9)]);
var inst_15695 = cljs.core.deref(inst_15692);
var state_15705__$1 = state_15705;
var statearr_15720_15734 = state_15705__$1;
(statearr_15720_15734[(2)] = inst_15695);

(statearr_15720_15734[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto__))
;
return ((function (switch__10970__auto__,c__13348__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10971__auto____0 = (function (){
var statearr_15721 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15721[(0)] = cljs$core$async$reduce_$_state_machine__10971__auto__);

(statearr_15721[(1)] = (1));

return statearr_15721;
});
var cljs$core$async$reduce_$_state_machine__10971__auto____1 = (function (state_15705){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15705);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15722){if((e15722 instanceof Object)){
var ex__10974__auto__ = e15722;
var statearr_15723_15735 = state_15705;
(statearr_15723_15735[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15705);

return cljs.core.cst$kw$recur;
} else {
throw e15722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15736 = state_15705;
state_15705 = G__15736;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10971__auto__ = function(state_15705){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10971__auto____1.call(this,state_15705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10971__auto____0;
cljs$core$async$reduce_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10971__auto____1;
return cljs$core$async$reduce_$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__))
})();
var state__13350__auto__ = (function (){var statearr_15724 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15724[(6)] = c__13348__auto__);

return statearr_15724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__))
);

return c__13348__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__,f__$1){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__,f__$1){
return (function (state_15742){
var state_val_15743 = (state_15742[(1)]);
if((state_val_15743 === (1))){
var inst_15737 = cljs.core.async.reduce(f__$1,init,ch);
var state_15742__$1 = state_15742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15742__$1,(2),inst_15737);
} else {
if((state_val_15743 === (2))){
var inst_15739 = (state_15742[(2)]);
var inst_15740 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15739) : f__$1.call(null,inst_15739));
var state_15742__$1 = state_15742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15742__$1,inst_15740);
} else {
return null;
}
}
});})(c__13348__auto__,f__$1))
;
return ((function (switch__10970__auto__,c__13348__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10971__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10971__auto____0 = (function (){
var statearr_15744 = [null,null,null,null,null,null,null];
(statearr_15744[(0)] = cljs$core$async$transduce_$_state_machine__10971__auto__);

(statearr_15744[(1)] = (1));

return statearr_15744;
});
var cljs$core$async$transduce_$_state_machine__10971__auto____1 = (function (state_15742){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15742);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15745){if((e15745 instanceof Object)){
var ex__10974__auto__ = e15745;
var statearr_15746_15748 = state_15742;
(statearr_15746_15748[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15742);

return cljs.core.cst$kw$recur;
} else {
throw e15745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15749 = state_15742;
state_15742 = G__15749;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10971__auto__ = function(state_15742){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10971__auto____1.call(this,state_15742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10971__auto____0;
cljs$core$async$transduce_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10971__auto____1;
return cljs$core$async$transduce_$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__,f__$1))
})();
var state__13350__auto__ = (function (){var statearr_15747 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15747[(6)] = c__13348__auto__);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__,f__$1))
);

return c__13348__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15751 = arguments.length;
switch (G__15751) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__){
return (function (state_15776){
var state_val_15777 = (state_15776[(1)]);
if((state_val_15777 === (7))){
var inst_15758 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15778_15799 = state_15776__$1;
(statearr_15778_15799[(2)] = inst_15758);

(statearr_15778_15799[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (1))){
var inst_15752 = cljs.core.seq(coll);
var inst_15753 = inst_15752;
var state_15776__$1 = (function (){var statearr_15779 = state_15776;
(statearr_15779[(7)] = inst_15753);

return statearr_15779;
})();
var statearr_15780_15800 = state_15776__$1;
(statearr_15780_15800[(2)] = null);

(statearr_15780_15800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (4))){
var inst_15753 = (state_15776[(7)]);
var inst_15756 = cljs.core.first(inst_15753);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15776__$1,(7),ch,inst_15756);
} else {
if((state_val_15777 === (13))){
var inst_15770 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15781_15801 = state_15776__$1;
(statearr_15781_15801[(2)] = inst_15770);

(statearr_15781_15801[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (6))){
var inst_15761 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
if(cljs.core.truth_(inst_15761)){
var statearr_15782_15802 = state_15776__$1;
(statearr_15782_15802[(1)] = (8));

} else {
var statearr_15783_15803 = state_15776__$1;
(statearr_15783_15803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (3))){
var inst_15774 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15776__$1,inst_15774);
} else {
if((state_val_15777 === (12))){
var state_15776__$1 = state_15776;
var statearr_15784_15804 = state_15776__$1;
(statearr_15784_15804[(2)] = null);

(statearr_15784_15804[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (2))){
var inst_15753 = (state_15776[(7)]);
var state_15776__$1 = state_15776;
if(cljs.core.truth_(inst_15753)){
var statearr_15785_15805 = state_15776__$1;
(statearr_15785_15805[(1)] = (4));

} else {
var statearr_15786_15806 = state_15776__$1;
(statearr_15786_15806[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (11))){
var inst_15767 = cljs.core.async.close_BANG_(ch);
var state_15776__$1 = state_15776;
var statearr_15787_15807 = state_15776__$1;
(statearr_15787_15807[(2)] = inst_15767);

(statearr_15787_15807[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (9))){
var state_15776__$1 = state_15776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15788_15808 = state_15776__$1;
(statearr_15788_15808[(1)] = (11));

} else {
var statearr_15789_15809 = state_15776__$1;
(statearr_15789_15809[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (5))){
var inst_15753 = (state_15776[(7)]);
var state_15776__$1 = state_15776;
var statearr_15790_15810 = state_15776__$1;
(statearr_15790_15810[(2)] = inst_15753);

(statearr_15790_15810[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (10))){
var inst_15772 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15791_15811 = state_15776__$1;
(statearr_15791_15811[(2)] = inst_15772);

(statearr_15791_15811[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15777 === (8))){
var inst_15753 = (state_15776[(7)]);
var inst_15763 = cljs.core.next(inst_15753);
var inst_15753__$1 = inst_15763;
var state_15776__$1 = (function (){var statearr_15792 = state_15776;
(statearr_15792[(7)] = inst_15753__$1);

return statearr_15792;
})();
var statearr_15793_15812 = state_15776__$1;
(statearr_15793_15812[(2)] = null);

(statearr_15793_15812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto__))
;
return ((function (switch__10970__auto__,c__13348__auto__){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_15794 = [null,null,null,null,null,null,null,null];
(statearr_15794[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_15794[(1)] = (1));

return statearr_15794;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_15776){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15776);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e15795){if((e15795 instanceof Object)){
var ex__10974__auto__ = e15795;
var statearr_15796_15813 = state_15776;
(statearr_15796_15813[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15776);

return cljs.core.cst$kw$recur;
} else {
throw e15795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__15814 = state_15776;
state_15776 = G__15814;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__))
})();
var state__13350__auto__ = (function (){var statearr_15797 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_15797[(6)] = c__13348__auto__);

return statearr_15797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__))
);

return c__13348__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15815 = (function (ch,cs,meta15816){
this.ch = ch;
this.cs = cs;
this.meta15816 = meta15816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15817,meta15816__$1){
var self__ = this;
var _15817__$1 = this;
return (new cljs.core.async.t_cljs$core$async15815(self__.ch,self__.cs,meta15816__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15817){
var self__ = this;
var _15817__$1 = this;
return self__.meta15816;
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15816], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15815";

cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15815");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15815.
 */
cljs.core.async.__GT_t_cljs$core$async15815 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15815(ch__$1,cs__$1,meta15816){
return (new cljs.core.async.t_cljs$core$async15815(ch__$1,cs__$1,meta15816));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15815(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13348__auto___16037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16037,cs,m,dchan,dctr,done){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16037,cs,m,dchan,dctr,done){
return (function (state_15952){
var state_val_15953 = (state_15952[(1)]);
if((state_val_15953 === (7))){
var inst_15948 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15954_16038 = state_15952__$1;
(statearr_15954_16038[(2)] = inst_15948);

(statearr_15954_16038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (20))){
var inst_15851 = (state_15952[(7)]);
var inst_15863 = cljs.core.first(inst_15851);
var inst_15864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15863,(0),null);
var inst_15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15863,(1),null);
var state_15952__$1 = (function (){var statearr_15955 = state_15952;
(statearr_15955[(8)] = inst_15864);

return statearr_15955;
})();
if(cljs.core.truth_(inst_15865)){
var statearr_15956_16039 = state_15952__$1;
(statearr_15956_16039[(1)] = (22));

} else {
var statearr_15957_16040 = state_15952__$1;
(statearr_15957_16040[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (27))){
var inst_15893 = (state_15952[(9)]);
var inst_15895 = (state_15952[(10)]);
var inst_15900 = (state_15952[(11)]);
var inst_15820 = (state_15952[(12)]);
var inst_15900__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15893,inst_15895);
var inst_15901 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15900__$1,inst_15820,done);
var state_15952__$1 = (function (){var statearr_15958 = state_15952;
(statearr_15958[(11)] = inst_15900__$1);

return statearr_15958;
})();
if(cljs.core.truth_(inst_15901)){
var statearr_15959_16041 = state_15952__$1;
(statearr_15959_16041[(1)] = (30));

} else {
var statearr_15960_16042 = state_15952__$1;
(statearr_15960_16042[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (1))){
var state_15952__$1 = state_15952;
var statearr_15961_16043 = state_15952__$1;
(statearr_15961_16043[(2)] = null);

(statearr_15961_16043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (24))){
var inst_15851 = (state_15952[(7)]);
var inst_15870 = (state_15952[(2)]);
var inst_15871 = cljs.core.next(inst_15851);
var inst_15829 = inst_15871;
var inst_15830 = null;
var inst_15831 = (0);
var inst_15832 = (0);
var state_15952__$1 = (function (){var statearr_15962 = state_15952;
(statearr_15962[(13)] = inst_15831);

(statearr_15962[(14)] = inst_15830);

(statearr_15962[(15)] = inst_15829);

(statearr_15962[(16)] = inst_15870);

(statearr_15962[(17)] = inst_15832);

return statearr_15962;
})();
var statearr_15963_16044 = state_15952__$1;
(statearr_15963_16044[(2)] = null);

(statearr_15963_16044[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (39))){
var state_15952__$1 = state_15952;
var statearr_15967_16045 = state_15952__$1;
(statearr_15967_16045[(2)] = null);

(statearr_15967_16045[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (4))){
var inst_15820 = (state_15952[(12)]);
var inst_15820__$1 = (state_15952[(2)]);
var inst_15821 = (inst_15820__$1 == null);
var state_15952__$1 = (function (){var statearr_15968 = state_15952;
(statearr_15968[(12)] = inst_15820__$1);

return statearr_15968;
})();
if(cljs.core.truth_(inst_15821)){
var statearr_15969_16046 = state_15952__$1;
(statearr_15969_16046[(1)] = (5));

} else {
var statearr_15970_16047 = state_15952__$1;
(statearr_15970_16047[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (15))){
var inst_15831 = (state_15952[(13)]);
var inst_15830 = (state_15952[(14)]);
var inst_15829 = (state_15952[(15)]);
var inst_15832 = (state_15952[(17)]);
var inst_15847 = (state_15952[(2)]);
var inst_15848 = (inst_15832 + (1));
var tmp15964 = inst_15831;
var tmp15965 = inst_15830;
var tmp15966 = inst_15829;
var inst_15829__$1 = tmp15966;
var inst_15830__$1 = tmp15965;
var inst_15831__$1 = tmp15964;
var inst_15832__$1 = inst_15848;
var state_15952__$1 = (function (){var statearr_15971 = state_15952;
(statearr_15971[(13)] = inst_15831__$1);

(statearr_15971[(18)] = inst_15847);

(statearr_15971[(14)] = inst_15830__$1);

(statearr_15971[(15)] = inst_15829__$1);

(statearr_15971[(17)] = inst_15832__$1);

return statearr_15971;
})();
var statearr_15972_16048 = state_15952__$1;
(statearr_15972_16048[(2)] = null);

(statearr_15972_16048[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (21))){
var inst_15874 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15976_16049 = state_15952__$1;
(statearr_15976_16049[(2)] = inst_15874);

(statearr_15976_16049[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (31))){
var inst_15900 = (state_15952[(11)]);
var inst_15904 = done(null);
var inst_15905 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15900);
var state_15952__$1 = (function (){var statearr_15977 = state_15952;
(statearr_15977[(19)] = inst_15904);

return statearr_15977;
})();
var statearr_15978_16050 = state_15952__$1;
(statearr_15978_16050[(2)] = inst_15905);

(statearr_15978_16050[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (32))){
var inst_15893 = (state_15952[(9)]);
var inst_15892 = (state_15952[(20)]);
var inst_15894 = (state_15952[(21)]);
var inst_15895 = (state_15952[(10)]);
var inst_15907 = (state_15952[(2)]);
var inst_15908 = (inst_15895 + (1));
var tmp15973 = inst_15893;
var tmp15974 = inst_15892;
var tmp15975 = inst_15894;
var inst_15892__$1 = tmp15974;
var inst_15893__$1 = tmp15973;
var inst_15894__$1 = tmp15975;
var inst_15895__$1 = inst_15908;
var state_15952__$1 = (function (){var statearr_15979 = state_15952;
(statearr_15979[(9)] = inst_15893__$1);

(statearr_15979[(20)] = inst_15892__$1);

(statearr_15979[(22)] = inst_15907);

(statearr_15979[(21)] = inst_15894__$1);

(statearr_15979[(10)] = inst_15895__$1);

return statearr_15979;
})();
var statearr_15980_16051 = state_15952__$1;
(statearr_15980_16051[(2)] = null);

(statearr_15980_16051[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (40))){
var inst_15920 = (state_15952[(23)]);
var inst_15924 = done(null);
var inst_15925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15920);
var state_15952__$1 = (function (){var statearr_15981 = state_15952;
(statearr_15981[(24)] = inst_15924);

return statearr_15981;
})();
var statearr_15982_16052 = state_15952__$1;
(statearr_15982_16052[(2)] = inst_15925);

(statearr_15982_16052[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (33))){
var inst_15911 = (state_15952[(25)]);
var inst_15913 = cljs.core.chunked_seq_QMARK_(inst_15911);
var state_15952__$1 = state_15952;
if(inst_15913){
var statearr_15983_16053 = state_15952__$1;
(statearr_15983_16053[(1)] = (36));

} else {
var statearr_15984_16054 = state_15952__$1;
(statearr_15984_16054[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (13))){
var inst_15841 = (state_15952[(26)]);
var inst_15844 = cljs.core.async.close_BANG_(inst_15841);
var state_15952__$1 = state_15952;
var statearr_15985_16055 = state_15952__$1;
(statearr_15985_16055[(2)] = inst_15844);

(statearr_15985_16055[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (22))){
var inst_15864 = (state_15952[(8)]);
var inst_15867 = cljs.core.async.close_BANG_(inst_15864);
var state_15952__$1 = state_15952;
var statearr_15986_16056 = state_15952__$1;
(statearr_15986_16056[(2)] = inst_15867);

(statearr_15986_16056[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (36))){
var inst_15911 = (state_15952[(25)]);
var inst_15915 = cljs.core.chunk_first(inst_15911);
var inst_15916 = cljs.core.chunk_rest(inst_15911);
var inst_15917 = cljs.core.count(inst_15915);
var inst_15892 = inst_15916;
var inst_15893 = inst_15915;
var inst_15894 = inst_15917;
var inst_15895 = (0);
var state_15952__$1 = (function (){var statearr_15987 = state_15952;
(statearr_15987[(9)] = inst_15893);

(statearr_15987[(20)] = inst_15892);

(statearr_15987[(21)] = inst_15894);

(statearr_15987[(10)] = inst_15895);

return statearr_15987;
})();
var statearr_15988_16057 = state_15952__$1;
(statearr_15988_16057[(2)] = null);

(statearr_15988_16057[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (41))){
var inst_15911 = (state_15952[(25)]);
var inst_15927 = (state_15952[(2)]);
var inst_15928 = cljs.core.next(inst_15911);
var inst_15892 = inst_15928;
var inst_15893 = null;
var inst_15894 = (0);
var inst_15895 = (0);
var state_15952__$1 = (function (){var statearr_15989 = state_15952;
(statearr_15989[(9)] = inst_15893);

(statearr_15989[(27)] = inst_15927);

(statearr_15989[(20)] = inst_15892);

(statearr_15989[(21)] = inst_15894);

(statearr_15989[(10)] = inst_15895);

return statearr_15989;
})();
var statearr_15990_16058 = state_15952__$1;
(statearr_15990_16058[(2)] = null);

(statearr_15990_16058[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (43))){
var state_15952__$1 = state_15952;
var statearr_15991_16059 = state_15952__$1;
(statearr_15991_16059[(2)] = null);

(statearr_15991_16059[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (29))){
var inst_15936 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15992_16060 = state_15952__$1;
(statearr_15992_16060[(2)] = inst_15936);

(statearr_15992_16060[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (44))){
var inst_15945 = (state_15952[(2)]);
var state_15952__$1 = (function (){var statearr_15993 = state_15952;
(statearr_15993[(28)] = inst_15945);

return statearr_15993;
})();
var statearr_15994_16061 = state_15952__$1;
(statearr_15994_16061[(2)] = null);

(statearr_15994_16061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (6))){
var inst_15884 = (state_15952[(29)]);
var inst_15883 = cljs.core.deref(cs);
var inst_15884__$1 = cljs.core.keys(inst_15883);
var inst_15885 = cljs.core.count(inst_15884__$1);
var inst_15886 = cljs.core.reset_BANG_(dctr,inst_15885);
var inst_15891 = cljs.core.seq(inst_15884__$1);
var inst_15892 = inst_15891;
var inst_15893 = null;
var inst_15894 = (0);
var inst_15895 = (0);
var state_15952__$1 = (function (){var statearr_15995 = state_15952;
(statearr_15995[(9)] = inst_15893);

(statearr_15995[(20)] = inst_15892);

(statearr_15995[(30)] = inst_15886);

(statearr_15995[(21)] = inst_15894);

(statearr_15995[(10)] = inst_15895);

(statearr_15995[(29)] = inst_15884__$1);

return statearr_15995;
})();
var statearr_15996_16062 = state_15952__$1;
(statearr_15996_16062[(2)] = null);

(statearr_15996_16062[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (28))){
var inst_15892 = (state_15952[(20)]);
var inst_15911 = (state_15952[(25)]);
var inst_15911__$1 = cljs.core.seq(inst_15892);
var state_15952__$1 = (function (){var statearr_15997 = state_15952;
(statearr_15997[(25)] = inst_15911__$1);

return statearr_15997;
})();
if(inst_15911__$1){
var statearr_15998_16063 = state_15952__$1;
(statearr_15998_16063[(1)] = (33));

} else {
var statearr_15999_16064 = state_15952__$1;
(statearr_15999_16064[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (25))){
var inst_15894 = (state_15952[(21)]);
var inst_15895 = (state_15952[(10)]);
var inst_15897 = (inst_15895 < inst_15894);
var inst_15898 = inst_15897;
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15898)){
var statearr_16000_16065 = state_15952__$1;
(statearr_16000_16065[(1)] = (27));

} else {
var statearr_16001_16066 = state_15952__$1;
(statearr_16001_16066[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (34))){
var state_15952__$1 = state_15952;
var statearr_16002_16067 = state_15952__$1;
(statearr_16002_16067[(2)] = null);

(statearr_16002_16067[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (17))){
var state_15952__$1 = state_15952;
var statearr_16003_16068 = state_15952__$1;
(statearr_16003_16068[(2)] = null);

(statearr_16003_16068[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (3))){
var inst_15950 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15952__$1,inst_15950);
} else {
if((state_val_15953 === (12))){
var inst_15879 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16004_16069 = state_15952__$1;
(statearr_16004_16069[(2)] = inst_15879);

(statearr_16004_16069[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (2))){
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15952__$1,(4),ch);
} else {
if((state_val_15953 === (23))){
var state_15952__$1 = state_15952;
var statearr_16005_16070 = state_15952__$1;
(statearr_16005_16070[(2)] = null);

(statearr_16005_16070[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (35))){
var inst_15934 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16006_16071 = state_15952__$1;
(statearr_16006_16071[(2)] = inst_15934);

(statearr_16006_16071[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (19))){
var inst_15851 = (state_15952[(7)]);
var inst_15855 = cljs.core.chunk_first(inst_15851);
var inst_15856 = cljs.core.chunk_rest(inst_15851);
var inst_15857 = cljs.core.count(inst_15855);
var inst_15829 = inst_15856;
var inst_15830 = inst_15855;
var inst_15831 = inst_15857;
var inst_15832 = (0);
var state_15952__$1 = (function (){var statearr_16007 = state_15952;
(statearr_16007[(13)] = inst_15831);

(statearr_16007[(14)] = inst_15830);

(statearr_16007[(15)] = inst_15829);

(statearr_16007[(17)] = inst_15832);

return statearr_16007;
})();
var statearr_16008_16072 = state_15952__$1;
(statearr_16008_16072[(2)] = null);

(statearr_16008_16072[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (11))){
var inst_15851 = (state_15952[(7)]);
var inst_15829 = (state_15952[(15)]);
var inst_15851__$1 = cljs.core.seq(inst_15829);
var state_15952__$1 = (function (){var statearr_16009 = state_15952;
(statearr_16009[(7)] = inst_15851__$1);

return statearr_16009;
})();
if(inst_15851__$1){
var statearr_16010_16073 = state_15952__$1;
(statearr_16010_16073[(1)] = (16));

} else {
var statearr_16011_16074 = state_15952__$1;
(statearr_16011_16074[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (9))){
var inst_15881 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16012_16075 = state_15952__$1;
(statearr_16012_16075[(2)] = inst_15881);

(statearr_16012_16075[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (5))){
var inst_15827 = cljs.core.deref(cs);
var inst_15828 = cljs.core.seq(inst_15827);
var inst_15829 = inst_15828;
var inst_15830 = null;
var inst_15831 = (0);
var inst_15832 = (0);
var state_15952__$1 = (function (){var statearr_16013 = state_15952;
(statearr_16013[(13)] = inst_15831);

(statearr_16013[(14)] = inst_15830);

(statearr_16013[(15)] = inst_15829);

(statearr_16013[(17)] = inst_15832);

return statearr_16013;
})();
var statearr_16014_16076 = state_15952__$1;
(statearr_16014_16076[(2)] = null);

(statearr_16014_16076[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (14))){
var state_15952__$1 = state_15952;
var statearr_16015_16077 = state_15952__$1;
(statearr_16015_16077[(2)] = null);

(statearr_16015_16077[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (45))){
var inst_15942 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16016_16078 = state_15952__$1;
(statearr_16016_16078[(2)] = inst_15942);

(statearr_16016_16078[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (26))){
var inst_15884 = (state_15952[(29)]);
var inst_15938 = (state_15952[(2)]);
var inst_15939 = cljs.core.seq(inst_15884);
var state_15952__$1 = (function (){var statearr_16017 = state_15952;
(statearr_16017[(31)] = inst_15938);

return statearr_16017;
})();
if(inst_15939){
var statearr_16018_16079 = state_15952__$1;
(statearr_16018_16079[(1)] = (42));

} else {
var statearr_16019_16080 = state_15952__$1;
(statearr_16019_16080[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (16))){
var inst_15851 = (state_15952[(7)]);
var inst_15853 = cljs.core.chunked_seq_QMARK_(inst_15851);
var state_15952__$1 = state_15952;
if(inst_15853){
var statearr_16020_16081 = state_15952__$1;
(statearr_16020_16081[(1)] = (19));

} else {
var statearr_16021_16082 = state_15952__$1;
(statearr_16021_16082[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (38))){
var inst_15931 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16022_16083 = state_15952__$1;
(statearr_16022_16083[(2)] = inst_15931);

(statearr_16022_16083[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (30))){
var state_15952__$1 = state_15952;
var statearr_16023_16084 = state_15952__$1;
(statearr_16023_16084[(2)] = null);

(statearr_16023_16084[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (10))){
var inst_15830 = (state_15952[(14)]);
var inst_15832 = (state_15952[(17)]);
var inst_15840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15830,inst_15832);
var inst_15841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15840,(0),null);
var inst_15842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15840,(1),null);
var state_15952__$1 = (function (){var statearr_16024 = state_15952;
(statearr_16024[(26)] = inst_15841);

return statearr_16024;
})();
if(cljs.core.truth_(inst_15842)){
var statearr_16025_16085 = state_15952__$1;
(statearr_16025_16085[(1)] = (13));

} else {
var statearr_16026_16086 = state_15952__$1;
(statearr_16026_16086[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (18))){
var inst_15877 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16027_16087 = state_15952__$1;
(statearr_16027_16087[(2)] = inst_15877);

(statearr_16027_16087[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (42))){
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15952__$1,(45),dchan);
} else {
if((state_val_15953 === (37))){
var inst_15920 = (state_15952[(23)]);
var inst_15911 = (state_15952[(25)]);
var inst_15820 = (state_15952[(12)]);
var inst_15920__$1 = cljs.core.first(inst_15911);
var inst_15921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15920__$1,inst_15820,done);
var state_15952__$1 = (function (){var statearr_16028 = state_15952;
(statearr_16028[(23)] = inst_15920__$1);

return statearr_16028;
})();
if(cljs.core.truth_(inst_15921)){
var statearr_16029_16088 = state_15952__$1;
(statearr_16029_16088[(1)] = (39));

} else {
var statearr_16030_16089 = state_15952__$1;
(statearr_16030_16089[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15953 === (8))){
var inst_15831 = (state_15952[(13)]);
var inst_15832 = (state_15952[(17)]);
var inst_15834 = (inst_15832 < inst_15831);
var inst_15835 = inst_15834;
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15835)){
var statearr_16031_16090 = state_15952__$1;
(statearr_16031_16090[(1)] = (10));

} else {
var statearr_16032_16091 = state_15952__$1;
(statearr_16032_16091[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16037,cs,m,dchan,dctr,done))
;
return ((function (switch__10970__auto__,c__13348__auto___16037,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10971__auto__ = null;
var cljs$core$async$mult_$_state_machine__10971__auto____0 = (function (){
var statearr_16033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16033[(0)] = cljs$core$async$mult_$_state_machine__10971__auto__);

(statearr_16033[(1)] = (1));

return statearr_16033;
});
var cljs$core$async$mult_$_state_machine__10971__auto____1 = (function (state_15952){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_15952);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16034){if((e16034 instanceof Object)){
var ex__10974__auto__ = e16034;
var statearr_16035_16092 = state_15952;
(statearr_16035_16092[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15952);

return cljs.core.cst$kw$recur;
} else {
throw e16034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16093 = state_15952;
state_15952 = G__16093;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10971__auto__ = function(state_15952){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10971__auto____1.call(this,state_15952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10971__auto____0;
cljs$core$async$mult_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10971__auto____1;
return cljs$core$async$mult_$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16037,cs,m,dchan,dctr,done))
})();
var state__13350__auto__ = (function (){var statearr_16036 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16036[(6)] = c__13348__auto___16037);

return statearr_16036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16037,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16095 = arguments.length;
switch (G__16095) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16107 = arguments.length;
var i__4532__auto___16108 = (0);
while(true){
if((i__4532__auto___16108 < len__4531__auto___16107)){
args__4534__auto__.push((arguments[i__4532__auto___16108]));

var G__16109 = (i__4532__auto___16108 + (1));
i__4532__auto___16108 = G__16109;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16101){
var map__16102 = p__16101;
var map__16102__$1 = ((((!((map__16102 == null)))?(((((map__16102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16102):map__16102);
var opts = map__16102__$1;
var statearr_16104_16110 = state;
(statearr_16104_16110[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16102,map__16102__$1,opts){
return (function (val){
var statearr_16105_16111 = state;
(statearr_16105_16111[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16102,map__16102__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16106_16112 = state;
(statearr_16106_16112[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16097){
var G__16098 = cljs.core.first(seq16097);
var seq16097__$1 = cljs.core.next(seq16097);
var G__16099 = cljs.core.first(seq16097__$1);
var seq16097__$2 = cljs.core.next(seq16097__$1);
var G__16100 = cljs.core.first(seq16097__$2);
var seq16097__$3 = cljs.core.next(seq16097__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16098,G__16099,G__16100,seq16097__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16113 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16114){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16114 = meta16114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16115,meta16114__$1){
var self__ = this;
var _16115__$1 = this;
return (new cljs.core.async.t_cljs$core$async16113(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16114__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16115){
var self__ = this;
var _16115__$1 = this;
return self__.meta16114;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16114], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16113";

cljs.core.async.t_cljs$core$async16113.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16113");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16113.
 */
cljs.core.async.__GT_t_cljs$core$async16113 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16113(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16114){
return (new cljs.core.async.t_cljs$core$async16113(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16114));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16113(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13348__auto___16277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16217){
var state_val_16218 = (state_16217[(1)]);
if((state_val_16218 === (7))){
var inst_16132 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16219_16278 = state_16217__$1;
(statearr_16219_16278[(2)] = inst_16132);

(statearr_16219_16278[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (20))){
var inst_16144 = (state_16217[(7)]);
var state_16217__$1 = state_16217;
var statearr_16220_16279 = state_16217__$1;
(statearr_16220_16279[(2)] = inst_16144);

(statearr_16220_16279[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (27))){
var state_16217__$1 = state_16217;
var statearr_16221_16280 = state_16217__$1;
(statearr_16221_16280[(2)] = null);

(statearr_16221_16280[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (1))){
var inst_16119 = (state_16217[(8)]);
var inst_16119__$1 = calc_state();
var inst_16121 = (inst_16119__$1 == null);
var inst_16122 = cljs.core.not(inst_16121);
var state_16217__$1 = (function (){var statearr_16222 = state_16217;
(statearr_16222[(8)] = inst_16119__$1);

return statearr_16222;
})();
if(inst_16122){
var statearr_16223_16281 = state_16217__$1;
(statearr_16223_16281[(1)] = (2));

} else {
var statearr_16224_16282 = state_16217__$1;
(statearr_16224_16282[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (24))){
var inst_16168 = (state_16217[(9)]);
var inst_16177 = (state_16217[(10)]);
var inst_16191 = (state_16217[(11)]);
var inst_16191__$1 = (inst_16168.cljs$core$IFn$_invoke$arity$1 ? inst_16168.cljs$core$IFn$_invoke$arity$1(inst_16177) : inst_16168.call(null,inst_16177));
var state_16217__$1 = (function (){var statearr_16225 = state_16217;
(statearr_16225[(11)] = inst_16191__$1);

return statearr_16225;
})();
if(cljs.core.truth_(inst_16191__$1)){
var statearr_16226_16283 = state_16217__$1;
(statearr_16226_16283[(1)] = (29));

} else {
var statearr_16227_16284 = state_16217__$1;
(statearr_16227_16284[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (4))){
var inst_16135 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16135)){
var statearr_16228_16285 = state_16217__$1;
(statearr_16228_16285[(1)] = (8));

} else {
var statearr_16229_16286 = state_16217__$1;
(statearr_16229_16286[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (15))){
var inst_16162 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16162)){
var statearr_16230_16287 = state_16217__$1;
(statearr_16230_16287[(1)] = (19));

} else {
var statearr_16231_16288 = state_16217__$1;
(statearr_16231_16288[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (21))){
var inst_16167 = (state_16217[(12)]);
var inst_16167__$1 = (state_16217[(2)]);
var inst_16168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16167__$1,cljs.core.cst$kw$solos);
var inst_16169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16167__$1,cljs.core.cst$kw$mutes);
var inst_16170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16167__$1,cljs.core.cst$kw$reads);
var state_16217__$1 = (function (){var statearr_16232 = state_16217;
(statearr_16232[(9)] = inst_16168);

(statearr_16232[(13)] = inst_16169);

(statearr_16232[(12)] = inst_16167__$1);

return statearr_16232;
})();
return cljs.core.async.ioc_alts_BANG_(state_16217__$1,(22),inst_16170);
} else {
if((state_val_16218 === (31))){
var inst_16199 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16199)){
var statearr_16233_16289 = state_16217__$1;
(statearr_16233_16289[(1)] = (32));

} else {
var statearr_16234_16290 = state_16217__$1;
(statearr_16234_16290[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (32))){
var inst_16176 = (state_16217[(14)]);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16217__$1,(35),out,inst_16176);
} else {
if((state_val_16218 === (33))){
var inst_16167 = (state_16217[(12)]);
var inst_16144 = inst_16167;
var state_16217__$1 = (function (){var statearr_16235 = state_16217;
(statearr_16235[(7)] = inst_16144);

return statearr_16235;
})();
var statearr_16236_16291 = state_16217__$1;
(statearr_16236_16291[(2)] = null);

(statearr_16236_16291[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (13))){
var inst_16144 = (state_16217[(7)]);
var inst_16151 = inst_16144.cljs$lang$protocol_mask$partition0$;
var inst_16152 = (inst_16151 & (64));
var inst_16153 = inst_16144.cljs$core$ISeq$;
var inst_16154 = (cljs.core.PROTOCOL_SENTINEL === inst_16153);
var inst_16155 = ((inst_16152) || (inst_16154));
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16155)){
var statearr_16237_16292 = state_16217__$1;
(statearr_16237_16292[(1)] = (16));

} else {
var statearr_16238_16293 = state_16217__$1;
(statearr_16238_16293[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (22))){
var inst_16176 = (state_16217[(14)]);
var inst_16177 = (state_16217[(10)]);
var inst_16175 = (state_16217[(2)]);
var inst_16176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16175,(0),null);
var inst_16177__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16175,(1),null);
var inst_16178 = (inst_16176__$1 == null);
var inst_16179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16177__$1,change);
var inst_16180 = ((inst_16178) || (inst_16179));
var state_16217__$1 = (function (){var statearr_16239 = state_16217;
(statearr_16239[(14)] = inst_16176__$1);

(statearr_16239[(10)] = inst_16177__$1);

return statearr_16239;
})();
if(cljs.core.truth_(inst_16180)){
var statearr_16240_16294 = state_16217__$1;
(statearr_16240_16294[(1)] = (23));

} else {
var statearr_16241_16295 = state_16217__$1;
(statearr_16241_16295[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (36))){
var inst_16167 = (state_16217[(12)]);
var inst_16144 = inst_16167;
var state_16217__$1 = (function (){var statearr_16242 = state_16217;
(statearr_16242[(7)] = inst_16144);

return statearr_16242;
})();
var statearr_16243_16296 = state_16217__$1;
(statearr_16243_16296[(2)] = null);

(statearr_16243_16296[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (29))){
var inst_16191 = (state_16217[(11)]);
var state_16217__$1 = state_16217;
var statearr_16244_16297 = state_16217__$1;
(statearr_16244_16297[(2)] = inst_16191);

(statearr_16244_16297[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (6))){
var state_16217__$1 = state_16217;
var statearr_16245_16298 = state_16217__$1;
(statearr_16245_16298[(2)] = false);

(statearr_16245_16298[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (28))){
var inst_16187 = (state_16217[(2)]);
var inst_16188 = calc_state();
var inst_16144 = inst_16188;
var state_16217__$1 = (function (){var statearr_16246 = state_16217;
(statearr_16246[(15)] = inst_16187);

(statearr_16246[(7)] = inst_16144);

return statearr_16246;
})();
var statearr_16247_16299 = state_16217__$1;
(statearr_16247_16299[(2)] = null);

(statearr_16247_16299[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (25))){
var inst_16213 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16248_16300 = state_16217__$1;
(statearr_16248_16300[(2)] = inst_16213);

(statearr_16248_16300[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (34))){
var inst_16211 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16249_16301 = state_16217__$1;
(statearr_16249_16301[(2)] = inst_16211);

(statearr_16249_16301[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (17))){
var state_16217__$1 = state_16217;
var statearr_16250_16302 = state_16217__$1;
(statearr_16250_16302[(2)] = false);

(statearr_16250_16302[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (3))){
var state_16217__$1 = state_16217;
var statearr_16251_16303 = state_16217__$1;
(statearr_16251_16303[(2)] = false);

(statearr_16251_16303[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (12))){
var inst_16215 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16217__$1,inst_16215);
} else {
if((state_val_16218 === (2))){
var inst_16119 = (state_16217[(8)]);
var inst_16124 = inst_16119.cljs$lang$protocol_mask$partition0$;
var inst_16125 = (inst_16124 & (64));
var inst_16126 = inst_16119.cljs$core$ISeq$;
var inst_16127 = (cljs.core.PROTOCOL_SENTINEL === inst_16126);
var inst_16128 = ((inst_16125) || (inst_16127));
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16128)){
var statearr_16252_16304 = state_16217__$1;
(statearr_16252_16304[(1)] = (5));

} else {
var statearr_16253_16305 = state_16217__$1;
(statearr_16253_16305[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (23))){
var inst_16176 = (state_16217[(14)]);
var inst_16182 = (inst_16176 == null);
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16182)){
var statearr_16254_16306 = state_16217__$1;
(statearr_16254_16306[(1)] = (26));

} else {
var statearr_16255_16307 = state_16217__$1;
(statearr_16255_16307[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (35))){
var inst_16202 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16202)){
var statearr_16256_16308 = state_16217__$1;
(statearr_16256_16308[(1)] = (36));

} else {
var statearr_16257_16309 = state_16217__$1;
(statearr_16257_16309[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (19))){
var inst_16144 = (state_16217[(7)]);
var inst_16164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16144);
var state_16217__$1 = state_16217;
var statearr_16258_16310 = state_16217__$1;
(statearr_16258_16310[(2)] = inst_16164);

(statearr_16258_16310[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (11))){
var inst_16144 = (state_16217[(7)]);
var inst_16148 = (inst_16144 == null);
var inst_16149 = cljs.core.not(inst_16148);
var state_16217__$1 = state_16217;
if(inst_16149){
var statearr_16259_16311 = state_16217__$1;
(statearr_16259_16311[(1)] = (13));

} else {
var statearr_16260_16312 = state_16217__$1;
(statearr_16260_16312[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (9))){
var inst_16119 = (state_16217[(8)]);
var state_16217__$1 = state_16217;
var statearr_16261_16313 = state_16217__$1;
(statearr_16261_16313[(2)] = inst_16119);

(statearr_16261_16313[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (5))){
var state_16217__$1 = state_16217;
var statearr_16262_16314 = state_16217__$1;
(statearr_16262_16314[(2)] = true);

(statearr_16262_16314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (14))){
var state_16217__$1 = state_16217;
var statearr_16263_16315 = state_16217__$1;
(statearr_16263_16315[(2)] = false);

(statearr_16263_16315[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (26))){
var inst_16177 = (state_16217[(10)]);
var inst_16184 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16177);
var state_16217__$1 = state_16217;
var statearr_16264_16316 = state_16217__$1;
(statearr_16264_16316[(2)] = inst_16184);

(statearr_16264_16316[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (16))){
var state_16217__$1 = state_16217;
var statearr_16265_16317 = state_16217__$1;
(statearr_16265_16317[(2)] = true);

(statearr_16265_16317[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (38))){
var inst_16207 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16266_16318 = state_16217__$1;
(statearr_16266_16318[(2)] = inst_16207);

(statearr_16266_16318[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (30))){
var inst_16168 = (state_16217[(9)]);
var inst_16177 = (state_16217[(10)]);
var inst_16169 = (state_16217[(13)]);
var inst_16194 = cljs.core.empty_QMARK_(inst_16168);
var inst_16195 = (inst_16169.cljs$core$IFn$_invoke$arity$1 ? inst_16169.cljs$core$IFn$_invoke$arity$1(inst_16177) : inst_16169.call(null,inst_16177));
var inst_16196 = cljs.core.not(inst_16195);
var inst_16197 = ((inst_16194) && (inst_16196));
var state_16217__$1 = state_16217;
var statearr_16267_16319 = state_16217__$1;
(statearr_16267_16319[(2)] = inst_16197);

(statearr_16267_16319[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (10))){
var inst_16119 = (state_16217[(8)]);
var inst_16140 = (state_16217[(2)]);
var inst_16141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16140,cljs.core.cst$kw$solos);
var inst_16142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16140,cljs.core.cst$kw$mutes);
var inst_16143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16140,cljs.core.cst$kw$reads);
var inst_16144 = inst_16119;
var state_16217__$1 = (function (){var statearr_16268 = state_16217;
(statearr_16268[(16)] = inst_16143);

(statearr_16268[(17)] = inst_16142);

(statearr_16268[(18)] = inst_16141);

(statearr_16268[(7)] = inst_16144);

return statearr_16268;
})();
var statearr_16269_16320 = state_16217__$1;
(statearr_16269_16320[(2)] = null);

(statearr_16269_16320[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (18))){
var inst_16159 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16270_16321 = state_16217__$1;
(statearr_16270_16321[(2)] = inst_16159);

(statearr_16270_16321[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (37))){
var state_16217__$1 = state_16217;
var statearr_16271_16322 = state_16217__$1;
(statearr_16271_16322[(2)] = null);

(statearr_16271_16322[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16218 === (8))){
var inst_16119 = (state_16217[(8)]);
var inst_16137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16119);
var state_16217__$1 = state_16217;
var statearr_16272_16323 = state_16217__$1;
(statearr_16272_16323[(2)] = inst_16137);

(statearr_16272_16323[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10970__auto__,c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10971__auto__ = null;
var cljs$core$async$mix_$_state_machine__10971__auto____0 = (function (){
var statearr_16273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16273[(0)] = cljs$core$async$mix_$_state_machine__10971__auto__);

(statearr_16273[(1)] = (1));

return statearr_16273;
});
var cljs$core$async$mix_$_state_machine__10971__auto____1 = (function (state_16217){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16217);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16274){if((e16274 instanceof Object)){
var ex__10974__auto__ = e16274;
var statearr_16275_16324 = state_16217;
(statearr_16275_16324[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16217);

return cljs.core.cst$kw$recur;
} else {
throw e16274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16325 = state_16217;
state_16217 = G__16325;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10971__auto__ = function(state_16217){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10971__auto____1.call(this,state_16217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10971__auto____0;
cljs$core$async$mix_$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10971__auto____1;
return cljs$core$async$mix_$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13350__auto__ = (function (){var statearr_16276 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16276[(6)] = c__13348__auto___16277);

return statearr_16276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16327 = arguments.length;
switch (G__16327) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16331 = arguments.length;
switch (G__16331) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__16329_SHARP_){
if(cljs.core.truth_((p1__16329_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16329_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16329_SHARP_.call(null,topic)))){
return p1__16329_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16329_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16332 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16333){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16333 = meta16333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16334,meta16333__$1){
var self__ = this;
var _16334__$1 = this;
return (new cljs.core.async.t_cljs$core$async16332(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16333__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16334){
var self__ = this;
var _16334__$1 = this;
return self__.meta16333;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16333], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16332";

cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16332");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16332.
 */
cljs.core.async.__GT_t_cljs$core$async16332 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16333){
return (new cljs.core.async.t_cljs$core$async16332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16333));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16332(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13348__auto___16452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16452,mults,ensure_mult,p){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16452,mults,ensure_mult,p){
return (function (state_16406){
var state_val_16407 = (state_16406[(1)]);
if((state_val_16407 === (7))){
var inst_16402 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16408_16453 = state_16406__$1;
(statearr_16408_16453[(2)] = inst_16402);

(statearr_16408_16453[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (20))){
var state_16406__$1 = state_16406;
var statearr_16409_16454 = state_16406__$1;
(statearr_16409_16454[(2)] = null);

(statearr_16409_16454[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (1))){
var state_16406__$1 = state_16406;
var statearr_16410_16455 = state_16406__$1;
(statearr_16410_16455[(2)] = null);

(statearr_16410_16455[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (24))){
var inst_16385 = (state_16406[(7)]);
var inst_16394 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16385);
var state_16406__$1 = state_16406;
var statearr_16411_16456 = state_16406__$1;
(statearr_16411_16456[(2)] = inst_16394);

(statearr_16411_16456[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (4))){
var inst_16337 = (state_16406[(8)]);
var inst_16337__$1 = (state_16406[(2)]);
var inst_16338 = (inst_16337__$1 == null);
var state_16406__$1 = (function (){var statearr_16412 = state_16406;
(statearr_16412[(8)] = inst_16337__$1);

return statearr_16412;
})();
if(cljs.core.truth_(inst_16338)){
var statearr_16413_16457 = state_16406__$1;
(statearr_16413_16457[(1)] = (5));

} else {
var statearr_16414_16458 = state_16406__$1;
(statearr_16414_16458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (15))){
var inst_16379 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16415_16459 = state_16406__$1;
(statearr_16415_16459[(2)] = inst_16379);

(statearr_16415_16459[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (21))){
var inst_16399 = (state_16406[(2)]);
var state_16406__$1 = (function (){var statearr_16416 = state_16406;
(statearr_16416[(9)] = inst_16399);

return statearr_16416;
})();
var statearr_16417_16460 = state_16406__$1;
(statearr_16417_16460[(2)] = null);

(statearr_16417_16460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (13))){
var inst_16361 = (state_16406[(10)]);
var inst_16363 = cljs.core.chunked_seq_QMARK_(inst_16361);
var state_16406__$1 = state_16406;
if(inst_16363){
var statearr_16418_16461 = state_16406__$1;
(statearr_16418_16461[(1)] = (16));

} else {
var statearr_16419_16462 = state_16406__$1;
(statearr_16419_16462[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (22))){
var inst_16391 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
if(cljs.core.truth_(inst_16391)){
var statearr_16420_16463 = state_16406__$1;
(statearr_16420_16463[(1)] = (23));

} else {
var statearr_16421_16464 = state_16406__$1;
(statearr_16421_16464[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (6))){
var inst_16337 = (state_16406[(8)]);
var inst_16387 = (state_16406[(11)]);
var inst_16385 = (state_16406[(7)]);
var inst_16385__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16337) : topic_fn.call(null,inst_16337));
var inst_16386 = cljs.core.deref(mults);
var inst_16387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16386,inst_16385__$1);
var state_16406__$1 = (function (){var statearr_16422 = state_16406;
(statearr_16422[(11)] = inst_16387__$1);

(statearr_16422[(7)] = inst_16385__$1);

return statearr_16422;
})();
if(cljs.core.truth_(inst_16387__$1)){
var statearr_16423_16465 = state_16406__$1;
(statearr_16423_16465[(1)] = (19));

} else {
var statearr_16424_16466 = state_16406__$1;
(statearr_16424_16466[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (25))){
var inst_16396 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16425_16467 = state_16406__$1;
(statearr_16425_16467[(2)] = inst_16396);

(statearr_16425_16467[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (17))){
var inst_16361 = (state_16406[(10)]);
var inst_16370 = cljs.core.first(inst_16361);
var inst_16371 = cljs.core.async.muxch_STAR_(inst_16370);
var inst_16372 = cljs.core.async.close_BANG_(inst_16371);
var inst_16373 = cljs.core.next(inst_16361);
var inst_16347 = inst_16373;
var inst_16348 = null;
var inst_16349 = (0);
var inst_16350 = (0);
var state_16406__$1 = (function (){var statearr_16426 = state_16406;
(statearr_16426[(12)] = inst_16349);

(statearr_16426[(13)] = inst_16347);

(statearr_16426[(14)] = inst_16372);

(statearr_16426[(15)] = inst_16348);

(statearr_16426[(16)] = inst_16350);

return statearr_16426;
})();
var statearr_16427_16468 = state_16406__$1;
(statearr_16427_16468[(2)] = null);

(statearr_16427_16468[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (3))){
var inst_16404 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16406__$1,inst_16404);
} else {
if((state_val_16407 === (12))){
var inst_16381 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16428_16469 = state_16406__$1;
(statearr_16428_16469[(2)] = inst_16381);

(statearr_16428_16469[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (2))){
var state_16406__$1 = state_16406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16406__$1,(4),ch);
} else {
if((state_val_16407 === (23))){
var state_16406__$1 = state_16406;
var statearr_16429_16470 = state_16406__$1;
(statearr_16429_16470[(2)] = null);

(statearr_16429_16470[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (19))){
var inst_16337 = (state_16406[(8)]);
var inst_16387 = (state_16406[(11)]);
var inst_16389 = cljs.core.async.muxch_STAR_(inst_16387);
var state_16406__$1 = state_16406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16406__$1,(22),inst_16389,inst_16337);
} else {
if((state_val_16407 === (11))){
var inst_16347 = (state_16406[(13)]);
var inst_16361 = (state_16406[(10)]);
var inst_16361__$1 = cljs.core.seq(inst_16347);
var state_16406__$1 = (function (){var statearr_16430 = state_16406;
(statearr_16430[(10)] = inst_16361__$1);

return statearr_16430;
})();
if(inst_16361__$1){
var statearr_16431_16471 = state_16406__$1;
(statearr_16431_16471[(1)] = (13));

} else {
var statearr_16432_16472 = state_16406__$1;
(statearr_16432_16472[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (9))){
var inst_16383 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16433_16473 = state_16406__$1;
(statearr_16433_16473[(2)] = inst_16383);

(statearr_16433_16473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (5))){
var inst_16344 = cljs.core.deref(mults);
var inst_16345 = cljs.core.vals(inst_16344);
var inst_16346 = cljs.core.seq(inst_16345);
var inst_16347 = inst_16346;
var inst_16348 = null;
var inst_16349 = (0);
var inst_16350 = (0);
var state_16406__$1 = (function (){var statearr_16434 = state_16406;
(statearr_16434[(12)] = inst_16349);

(statearr_16434[(13)] = inst_16347);

(statearr_16434[(15)] = inst_16348);

(statearr_16434[(16)] = inst_16350);

return statearr_16434;
})();
var statearr_16435_16474 = state_16406__$1;
(statearr_16435_16474[(2)] = null);

(statearr_16435_16474[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (14))){
var state_16406__$1 = state_16406;
var statearr_16439_16475 = state_16406__$1;
(statearr_16439_16475[(2)] = null);

(statearr_16439_16475[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (16))){
var inst_16361 = (state_16406[(10)]);
var inst_16365 = cljs.core.chunk_first(inst_16361);
var inst_16366 = cljs.core.chunk_rest(inst_16361);
var inst_16367 = cljs.core.count(inst_16365);
var inst_16347 = inst_16366;
var inst_16348 = inst_16365;
var inst_16349 = inst_16367;
var inst_16350 = (0);
var state_16406__$1 = (function (){var statearr_16440 = state_16406;
(statearr_16440[(12)] = inst_16349);

(statearr_16440[(13)] = inst_16347);

(statearr_16440[(15)] = inst_16348);

(statearr_16440[(16)] = inst_16350);

return statearr_16440;
})();
var statearr_16441_16476 = state_16406__$1;
(statearr_16441_16476[(2)] = null);

(statearr_16441_16476[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (10))){
var inst_16349 = (state_16406[(12)]);
var inst_16347 = (state_16406[(13)]);
var inst_16348 = (state_16406[(15)]);
var inst_16350 = (state_16406[(16)]);
var inst_16355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16348,inst_16350);
var inst_16356 = cljs.core.async.muxch_STAR_(inst_16355);
var inst_16357 = cljs.core.async.close_BANG_(inst_16356);
var inst_16358 = (inst_16350 + (1));
var tmp16436 = inst_16349;
var tmp16437 = inst_16347;
var tmp16438 = inst_16348;
var inst_16347__$1 = tmp16437;
var inst_16348__$1 = tmp16438;
var inst_16349__$1 = tmp16436;
var inst_16350__$1 = inst_16358;
var state_16406__$1 = (function (){var statearr_16442 = state_16406;
(statearr_16442[(17)] = inst_16357);

(statearr_16442[(12)] = inst_16349__$1);

(statearr_16442[(13)] = inst_16347__$1);

(statearr_16442[(15)] = inst_16348__$1);

(statearr_16442[(16)] = inst_16350__$1);

return statearr_16442;
})();
var statearr_16443_16477 = state_16406__$1;
(statearr_16443_16477[(2)] = null);

(statearr_16443_16477[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (18))){
var inst_16376 = (state_16406[(2)]);
var state_16406__$1 = state_16406;
var statearr_16444_16478 = state_16406__$1;
(statearr_16444_16478[(2)] = inst_16376);

(statearr_16444_16478[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16407 === (8))){
var inst_16349 = (state_16406[(12)]);
var inst_16350 = (state_16406[(16)]);
var inst_16352 = (inst_16350 < inst_16349);
var inst_16353 = inst_16352;
var state_16406__$1 = state_16406;
if(cljs.core.truth_(inst_16353)){
var statearr_16445_16479 = state_16406__$1;
(statearr_16445_16479[(1)] = (10));

} else {
var statearr_16446_16480 = state_16406__$1;
(statearr_16446_16480[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16452,mults,ensure_mult,p))
;
return ((function (switch__10970__auto__,c__13348__auto___16452,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16447[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16447[(1)] = (1));

return statearr_16447;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16406){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16406);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16448){if((e16448 instanceof Object)){
var ex__10974__auto__ = e16448;
var statearr_16449_16481 = state_16406;
(statearr_16449_16481[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16406);

return cljs.core.cst$kw$recur;
} else {
throw e16448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16482 = state_16406;
state_16406 = G__16482;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16452,mults,ensure_mult,p))
})();
var state__13350__auto__ = (function (){var statearr_16450 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16450[(6)] = c__13348__auto___16452);

return statearr_16450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16452,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16484 = arguments.length;
switch (G__16484) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16487 = arguments.length;
switch (G__16487) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16490 = arguments.length;
switch (G__16490) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13348__auto___16557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (7))){
var state_16529__$1 = state_16529;
var statearr_16531_16558 = state_16529__$1;
(statearr_16531_16558[(2)] = null);

(statearr_16531_16558[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
var statearr_16532_16559 = state_16529__$1;
(statearr_16532_16559[(2)] = null);

(statearr_16532_16559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (4))){
var inst_16493 = (state_16529[(7)]);
var inst_16495 = (inst_16493 < cnt);
var state_16529__$1 = state_16529;
if(cljs.core.truth_(inst_16495)){
var statearr_16533_16560 = state_16529__$1;
(statearr_16533_16560[(1)] = (6));

} else {
var statearr_16534_16561 = state_16529__$1;
(statearr_16534_16561[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (15))){
var inst_16525 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16535_16562 = state_16529__$1;
(statearr_16535_16562[(2)] = inst_16525);

(statearr_16535_16562[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (13))){
var inst_16518 = cljs.core.async.close_BANG_(out);
var state_16529__$1 = state_16529;
var statearr_16536_16563 = state_16529__$1;
(statearr_16536_16563[(2)] = inst_16518);

(statearr_16536_16563[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (6))){
var state_16529__$1 = state_16529;
var statearr_16537_16564 = state_16529__$1;
(statearr_16537_16564[(2)] = null);

(statearr_16537_16564[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (3))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16529__$1,inst_16527);
} else {
if((state_val_16530 === (12))){
var inst_16515 = (state_16529[(8)]);
var inst_16515__$1 = (state_16529[(2)]);
var inst_16516 = cljs.core.some(cljs.core.nil_QMARK_,inst_16515__$1);
var state_16529__$1 = (function (){var statearr_16538 = state_16529;
(statearr_16538[(8)] = inst_16515__$1);

return statearr_16538;
})();
if(cljs.core.truth_(inst_16516)){
var statearr_16539_16565 = state_16529__$1;
(statearr_16539_16565[(1)] = (13));

} else {
var statearr_16540_16566 = state_16529__$1;
(statearr_16540_16566[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (2))){
var inst_16492 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16493 = (0);
var state_16529__$1 = (function (){var statearr_16541 = state_16529;
(statearr_16541[(9)] = inst_16492);

(statearr_16541[(7)] = inst_16493);

return statearr_16541;
})();
var statearr_16542_16567 = state_16529__$1;
(statearr_16542_16567[(2)] = null);

(statearr_16542_16567[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (11))){
var inst_16493 = (state_16529[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16529,(10),Object,null,(9));
var inst_16502 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16493) : chs__$1.call(null,inst_16493));
var inst_16503 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16493) : done.call(null,inst_16493));
var inst_16504 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16502,inst_16503);
var state_16529__$1 = state_16529;
var statearr_16543_16568 = state_16529__$1;
(statearr_16543_16568[(2)] = inst_16504);


cljs.core.async.impl.ioc_helpers.process_exception(state_16529__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (9))){
var inst_16493 = (state_16529[(7)]);
var inst_16506 = (state_16529[(2)]);
var inst_16507 = (inst_16493 + (1));
var inst_16493__$1 = inst_16507;
var state_16529__$1 = (function (){var statearr_16544 = state_16529;
(statearr_16544[(7)] = inst_16493__$1);

(statearr_16544[(10)] = inst_16506);

return statearr_16544;
})();
var statearr_16545_16569 = state_16529__$1;
(statearr_16545_16569[(2)] = null);

(statearr_16545_16569[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (5))){
var inst_16513 = (state_16529[(2)]);
var state_16529__$1 = (function (){var statearr_16546 = state_16529;
(statearr_16546[(11)] = inst_16513);

return statearr_16546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16529__$1,(12),dchan);
} else {
if((state_val_16530 === (14))){
var inst_16515 = (state_16529[(8)]);
var inst_16520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16515);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16529__$1,(16),out,inst_16520);
} else {
if((state_val_16530 === (16))){
var inst_16522 = (state_16529[(2)]);
var state_16529__$1 = (function (){var statearr_16547 = state_16529;
(statearr_16547[(12)] = inst_16522);

return statearr_16547;
})();
var statearr_16548_16570 = state_16529__$1;
(statearr_16548_16570[(2)] = null);

(statearr_16548_16570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (10))){
var inst_16497 = (state_16529[(2)]);
var inst_16498 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16529__$1 = (function (){var statearr_16549 = state_16529;
(statearr_16549[(13)] = inst_16497);

return statearr_16549;
})();
var statearr_16550_16571 = state_16529__$1;
(statearr_16550_16571[(2)] = inst_16498);


cljs.core.async.impl.ioc_helpers.process_exception(state_16529__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16530 === (8))){
var inst_16511 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16551_16572 = state_16529__$1;
(statearr_16551_16572[(2)] = inst_16511);

(statearr_16551_16572[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10970__auto__,c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16552[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16552[(1)] = (1));

return statearr_16552;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16529){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16529);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16553){if((e16553 instanceof Object)){
var ex__10974__auto__ = e16553;
var statearr_16554_16573 = state_16529;
(statearr_16554_16573[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16529);

return cljs.core.cst$kw$recur;
} else {
throw e16553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16574 = state_16529;
state_16529 = G__16574;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13350__auto__ = (function (){var statearr_16555 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16555[(6)] = c__13348__auto___16557);

return statearr_16555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16557,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16577 = arguments.length;
switch (G__16577) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___16631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16631,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16631,out){
return (function (state_16609){
var state_val_16610 = (state_16609[(1)]);
if((state_val_16610 === (7))){
var inst_16589 = (state_16609[(7)]);
var inst_16588 = (state_16609[(8)]);
var inst_16588__$1 = (state_16609[(2)]);
var inst_16589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16588__$1,(0),null);
var inst_16590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16588__$1,(1),null);
var inst_16591 = (inst_16589__$1 == null);
var state_16609__$1 = (function (){var statearr_16611 = state_16609;
(statearr_16611[(9)] = inst_16590);

(statearr_16611[(7)] = inst_16589__$1);

(statearr_16611[(8)] = inst_16588__$1);

return statearr_16611;
})();
if(cljs.core.truth_(inst_16591)){
var statearr_16612_16632 = state_16609__$1;
(statearr_16612_16632[(1)] = (8));

} else {
var statearr_16613_16633 = state_16609__$1;
(statearr_16613_16633[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (1))){
var inst_16578 = cljs.core.vec(chs);
var inst_16579 = inst_16578;
var state_16609__$1 = (function (){var statearr_16614 = state_16609;
(statearr_16614[(10)] = inst_16579);

return statearr_16614;
})();
var statearr_16615_16634 = state_16609__$1;
(statearr_16615_16634[(2)] = null);

(statearr_16615_16634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (4))){
var inst_16579 = (state_16609[(10)]);
var state_16609__$1 = state_16609;
return cljs.core.async.ioc_alts_BANG_(state_16609__$1,(7),inst_16579);
} else {
if((state_val_16610 === (6))){
var inst_16605 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16616_16635 = state_16609__$1;
(statearr_16616_16635[(2)] = inst_16605);

(statearr_16616_16635[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (3))){
var inst_16607 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16609__$1,inst_16607);
} else {
if((state_val_16610 === (2))){
var inst_16579 = (state_16609[(10)]);
var inst_16581 = cljs.core.count(inst_16579);
var inst_16582 = (inst_16581 > (0));
var state_16609__$1 = state_16609;
if(cljs.core.truth_(inst_16582)){
var statearr_16618_16636 = state_16609__$1;
(statearr_16618_16636[(1)] = (4));

} else {
var statearr_16619_16637 = state_16609__$1;
(statearr_16619_16637[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (11))){
var inst_16579 = (state_16609[(10)]);
var inst_16598 = (state_16609[(2)]);
var tmp16617 = inst_16579;
var inst_16579__$1 = tmp16617;
var state_16609__$1 = (function (){var statearr_16620 = state_16609;
(statearr_16620[(10)] = inst_16579__$1);

(statearr_16620[(11)] = inst_16598);

return statearr_16620;
})();
var statearr_16621_16638 = state_16609__$1;
(statearr_16621_16638[(2)] = null);

(statearr_16621_16638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (9))){
var inst_16589 = (state_16609[(7)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16609__$1,(11),out,inst_16589);
} else {
if((state_val_16610 === (5))){
var inst_16603 = cljs.core.async.close_BANG_(out);
var state_16609__$1 = state_16609;
var statearr_16622_16639 = state_16609__$1;
(statearr_16622_16639[(2)] = inst_16603);

(statearr_16622_16639[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (10))){
var inst_16601 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16623_16640 = state_16609__$1;
(statearr_16623_16640[(2)] = inst_16601);

(statearr_16623_16640[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16610 === (8))){
var inst_16579 = (state_16609[(10)]);
var inst_16590 = (state_16609[(9)]);
var inst_16589 = (state_16609[(7)]);
var inst_16588 = (state_16609[(8)]);
var inst_16593 = (function (){var cs = inst_16579;
var vec__16584 = inst_16588;
var v = inst_16589;
var c = inst_16590;
return ((function (cs,vec__16584,v,c,inst_16579,inst_16590,inst_16589,inst_16588,state_val_16610,c__13348__auto___16631,out){
return (function (p1__16575_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16575_SHARP_);
});
;})(cs,vec__16584,v,c,inst_16579,inst_16590,inst_16589,inst_16588,state_val_16610,c__13348__auto___16631,out))
})();
var inst_16594 = cljs.core.filterv(inst_16593,inst_16579);
var inst_16579__$1 = inst_16594;
var state_16609__$1 = (function (){var statearr_16624 = state_16609;
(statearr_16624[(10)] = inst_16579__$1);

return statearr_16624;
})();
var statearr_16625_16641 = state_16609__$1;
(statearr_16625_16641[(2)] = null);

(statearr_16625_16641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16631,out))
;
return ((function (switch__10970__auto__,c__13348__auto___16631,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16626 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16626[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16626[(1)] = (1));

return statearr_16626;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16609){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16609);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16627){if((e16627 instanceof Object)){
var ex__10974__auto__ = e16627;
var statearr_16628_16642 = state_16609;
(statearr_16628_16642[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16609);

return cljs.core.cst$kw$recur;
} else {
throw e16627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16643 = state_16609;
state_16609 = G__16643;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16631,out))
})();
var state__13350__auto__ = (function (){var statearr_16629 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16629[(6)] = c__13348__auto___16631);

return statearr_16629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16631,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16645 = arguments.length;
switch (G__16645) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___16690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16690,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16690,out){
return (function (state_16669){
var state_val_16670 = (state_16669[(1)]);
if((state_val_16670 === (7))){
var inst_16651 = (state_16669[(7)]);
var inst_16651__$1 = (state_16669[(2)]);
var inst_16652 = (inst_16651__$1 == null);
var inst_16653 = cljs.core.not(inst_16652);
var state_16669__$1 = (function (){var statearr_16671 = state_16669;
(statearr_16671[(7)] = inst_16651__$1);

return statearr_16671;
})();
if(inst_16653){
var statearr_16672_16691 = state_16669__$1;
(statearr_16672_16691[(1)] = (8));

} else {
var statearr_16673_16692 = state_16669__$1;
(statearr_16673_16692[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (1))){
var inst_16646 = (0);
var state_16669__$1 = (function (){var statearr_16674 = state_16669;
(statearr_16674[(8)] = inst_16646);

return statearr_16674;
})();
var statearr_16675_16693 = state_16669__$1;
(statearr_16675_16693[(2)] = null);

(statearr_16675_16693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (4))){
var state_16669__$1 = state_16669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16669__$1,(7),ch);
} else {
if((state_val_16670 === (6))){
var inst_16664 = (state_16669[(2)]);
var state_16669__$1 = state_16669;
var statearr_16676_16694 = state_16669__$1;
(statearr_16676_16694[(2)] = inst_16664);

(statearr_16676_16694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (3))){
var inst_16666 = (state_16669[(2)]);
var inst_16667 = cljs.core.async.close_BANG_(out);
var state_16669__$1 = (function (){var statearr_16677 = state_16669;
(statearr_16677[(9)] = inst_16666);

return statearr_16677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16669__$1,inst_16667);
} else {
if((state_val_16670 === (2))){
var inst_16646 = (state_16669[(8)]);
var inst_16648 = (inst_16646 < n);
var state_16669__$1 = state_16669;
if(cljs.core.truth_(inst_16648)){
var statearr_16678_16695 = state_16669__$1;
(statearr_16678_16695[(1)] = (4));

} else {
var statearr_16679_16696 = state_16669__$1;
(statearr_16679_16696[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (11))){
var inst_16646 = (state_16669[(8)]);
var inst_16656 = (state_16669[(2)]);
var inst_16657 = (inst_16646 + (1));
var inst_16646__$1 = inst_16657;
var state_16669__$1 = (function (){var statearr_16680 = state_16669;
(statearr_16680[(10)] = inst_16656);

(statearr_16680[(8)] = inst_16646__$1);

return statearr_16680;
})();
var statearr_16681_16697 = state_16669__$1;
(statearr_16681_16697[(2)] = null);

(statearr_16681_16697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (9))){
var state_16669__$1 = state_16669;
var statearr_16682_16698 = state_16669__$1;
(statearr_16682_16698[(2)] = null);

(statearr_16682_16698[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (5))){
var state_16669__$1 = state_16669;
var statearr_16683_16699 = state_16669__$1;
(statearr_16683_16699[(2)] = null);

(statearr_16683_16699[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (10))){
var inst_16661 = (state_16669[(2)]);
var state_16669__$1 = state_16669;
var statearr_16684_16700 = state_16669__$1;
(statearr_16684_16700[(2)] = inst_16661);

(statearr_16684_16700[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16670 === (8))){
var inst_16651 = (state_16669[(7)]);
var state_16669__$1 = state_16669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16669__$1,(11),out,inst_16651);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16690,out))
;
return ((function (switch__10970__auto__,c__13348__auto___16690,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16685[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16685[(1)] = (1));

return statearr_16685;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16669){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16669);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16686){if((e16686 instanceof Object)){
var ex__10974__auto__ = e16686;
var statearr_16687_16701 = state_16669;
(statearr_16687_16701[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16669);

return cljs.core.cst$kw$recur;
} else {
throw e16686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16702 = state_16669;
state_16669 = G__16702;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16690,out))
})();
var state__13350__auto__ = (function (){var statearr_16688 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16688[(6)] = c__13348__auto___16690);

return statearr_16688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16690,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16704 = (function (f,ch,meta16705){
this.f = f;
this.ch = ch;
this.meta16705 = meta16705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16706,meta16705__$1){
var self__ = this;
var _16706__$1 = this;
return (new cljs.core.async.t_cljs$core$async16704(self__.f,self__.ch,meta16705__$1));
});

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16706){
var self__ = this;
var _16706__$1 = this;
return self__.meta16705;
});

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16707 = (function (f,ch,meta16705,_,fn1,meta16708){
this.f = f;
this.ch = ch;
this.meta16705 = meta16705;
this._ = _;
this.fn1 = fn1;
this.meta16708 = meta16708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16709,meta16708__$1){
var self__ = this;
var _16709__$1 = this;
return (new cljs.core.async.t_cljs$core$async16707(self__.f,self__.ch,self__.meta16705,self__._,self__.fn1,meta16708__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16709){
var self__ = this;
var _16709__$1 = this;
return self__.meta16708;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16703_SHARP_){
var G__16710 = (((p1__16703_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16703_SHARP_) : self__.f.call(null,p1__16703_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16710) : f1.call(null,G__16710));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16705,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16704], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16708], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16707";

cljs.core.async.t_cljs$core$async16707.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16707");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16707.
 */
cljs.core.async.__GT_t_cljs$core$async16707 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16707(f__$1,ch__$1,meta16705__$1,___$2,fn1__$1,meta16708){
return (new cljs.core.async.t_cljs$core$async16707(f__$1,ch__$1,meta16705__$1,___$2,fn1__$1,meta16708));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16707(self__.f,self__.ch,self__.meta16705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16711 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16711) : self__.f.call(null,G__16711));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16705], null);
});

cljs.core.async.t_cljs$core$async16704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16704";

cljs.core.async.t_cljs$core$async16704.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16704");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16704.
 */
cljs.core.async.__GT_t_cljs$core$async16704 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16704(f__$1,ch__$1,meta16705){
return (new cljs.core.async.t_cljs$core$async16704(f__$1,ch__$1,meta16705));
});

}

return (new cljs.core.async.t_cljs$core$async16704(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16712 = (function (f,ch,meta16713){
this.f = f;
this.ch = ch;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){
var self__ = this;
var _16714__$1 = this;
return (new cljs.core.async.t_cljs$core$async16712(self__.f,self__.ch,meta16713__$1));
});

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){
var self__ = this;
var _16714__$1 = this;
return self__.meta16713;
});

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16713], null);
});

cljs.core.async.t_cljs$core$async16712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16712";

cljs.core.async.t_cljs$core$async16712.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16712");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16712.
 */
cljs.core.async.__GT_t_cljs$core$async16712 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16712(f__$1,ch__$1,meta16713){
return (new cljs.core.async.t_cljs$core$async16712(f__$1,ch__$1,meta16713));
});

}

return (new cljs.core.async.t_cljs$core$async16712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16715 = (function (p,ch,meta16716){
this.p = p;
this.ch = ch;
this.meta16716 = meta16716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16717,meta16716__$1){
var self__ = this;
var _16717__$1 = this;
return (new cljs.core.async.t_cljs$core$async16715(self__.p,self__.ch,meta16716__$1));
});

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16717){
var self__ = this;
var _16717__$1 = this;
return self__.meta16716;
});

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16716], null);
});

cljs.core.async.t_cljs$core$async16715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16715";

cljs.core.async.t_cljs$core$async16715.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16715");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16715.
 */
cljs.core.async.__GT_t_cljs$core$async16715 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16715(p__$1,ch__$1,meta16716){
return (new cljs.core.async.t_cljs$core$async16715(p__$1,ch__$1,meta16716));
});

}

return (new cljs.core.async.t_cljs$core$async16715(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16719 = arguments.length;
switch (G__16719) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___16759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16759,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16759,out){
return (function (state_16740){
var state_val_16741 = (state_16740[(1)]);
if((state_val_16741 === (7))){
var inst_16736 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16742_16760 = state_16740__$1;
(statearr_16742_16760[(2)] = inst_16736);

(statearr_16742_16760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (1))){
var state_16740__$1 = state_16740;
var statearr_16743_16761 = state_16740__$1;
(statearr_16743_16761[(2)] = null);

(statearr_16743_16761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (4))){
var inst_16722 = (state_16740[(7)]);
var inst_16722__$1 = (state_16740[(2)]);
var inst_16723 = (inst_16722__$1 == null);
var state_16740__$1 = (function (){var statearr_16744 = state_16740;
(statearr_16744[(7)] = inst_16722__$1);

return statearr_16744;
})();
if(cljs.core.truth_(inst_16723)){
var statearr_16745_16762 = state_16740__$1;
(statearr_16745_16762[(1)] = (5));

} else {
var statearr_16746_16763 = state_16740__$1;
(statearr_16746_16763[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (6))){
var inst_16722 = (state_16740[(7)]);
var inst_16727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16722) : p.call(null,inst_16722));
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16727)){
var statearr_16747_16764 = state_16740__$1;
(statearr_16747_16764[(1)] = (8));

} else {
var statearr_16748_16765 = state_16740__$1;
(statearr_16748_16765[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (3))){
var inst_16738 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16740__$1,inst_16738);
} else {
if((state_val_16741 === (2))){
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16740__$1,(4),ch);
} else {
if((state_val_16741 === (11))){
var inst_16730 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16749_16766 = state_16740__$1;
(statearr_16749_16766[(2)] = inst_16730);

(statearr_16749_16766[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (9))){
var state_16740__$1 = state_16740;
var statearr_16750_16767 = state_16740__$1;
(statearr_16750_16767[(2)] = null);

(statearr_16750_16767[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (5))){
var inst_16725 = cljs.core.async.close_BANG_(out);
var state_16740__$1 = state_16740;
var statearr_16751_16768 = state_16740__$1;
(statearr_16751_16768[(2)] = inst_16725);

(statearr_16751_16768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (10))){
var inst_16733 = (state_16740[(2)]);
var state_16740__$1 = (function (){var statearr_16752 = state_16740;
(statearr_16752[(8)] = inst_16733);

return statearr_16752;
})();
var statearr_16753_16769 = state_16740__$1;
(statearr_16753_16769[(2)] = null);

(statearr_16753_16769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (8))){
var inst_16722 = (state_16740[(7)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(11),out,inst_16722);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16759,out))
;
return ((function (switch__10970__auto__,c__13348__auto___16759,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16754 = [null,null,null,null,null,null,null,null,null];
(statearr_16754[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16754[(1)] = (1));

return statearr_16754;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16740){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16740);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16755){if((e16755 instanceof Object)){
var ex__10974__auto__ = e16755;
var statearr_16756_16770 = state_16740;
(statearr_16756_16770[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16740);

return cljs.core.cst$kw$recur;
} else {
throw e16755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16771 = state_16740;
state_16740 = G__16771;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16759,out))
})();
var state__13350__auto__ = (function (){var statearr_16757 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16757[(6)] = c__13348__auto___16759);

return statearr_16757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16759,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16773 = arguments.length;
switch (G__16773) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto__){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto__){
return (function (state_16836){
var state_val_16837 = (state_16836[(1)]);
if((state_val_16837 === (7))){
var inst_16832 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
var statearr_16838_16876 = state_16836__$1;
(statearr_16838_16876[(2)] = inst_16832);

(statearr_16838_16876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (20))){
var inst_16802 = (state_16836[(7)]);
var inst_16813 = (state_16836[(2)]);
var inst_16814 = cljs.core.next(inst_16802);
var inst_16788 = inst_16814;
var inst_16789 = null;
var inst_16790 = (0);
var inst_16791 = (0);
var state_16836__$1 = (function (){var statearr_16839 = state_16836;
(statearr_16839[(8)] = inst_16788);

(statearr_16839[(9)] = inst_16789);

(statearr_16839[(10)] = inst_16790);

(statearr_16839[(11)] = inst_16791);

(statearr_16839[(12)] = inst_16813);

return statearr_16839;
})();
var statearr_16840_16877 = state_16836__$1;
(statearr_16840_16877[(2)] = null);

(statearr_16840_16877[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (1))){
var state_16836__$1 = state_16836;
var statearr_16841_16878 = state_16836__$1;
(statearr_16841_16878[(2)] = null);

(statearr_16841_16878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (4))){
var inst_16777 = (state_16836[(13)]);
var inst_16777__$1 = (state_16836[(2)]);
var inst_16778 = (inst_16777__$1 == null);
var state_16836__$1 = (function (){var statearr_16842 = state_16836;
(statearr_16842[(13)] = inst_16777__$1);

return statearr_16842;
})();
if(cljs.core.truth_(inst_16778)){
var statearr_16843_16879 = state_16836__$1;
(statearr_16843_16879[(1)] = (5));

} else {
var statearr_16844_16880 = state_16836__$1;
(statearr_16844_16880[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (15))){
var state_16836__$1 = state_16836;
var statearr_16848_16881 = state_16836__$1;
(statearr_16848_16881[(2)] = null);

(statearr_16848_16881[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (21))){
var state_16836__$1 = state_16836;
var statearr_16849_16882 = state_16836__$1;
(statearr_16849_16882[(2)] = null);

(statearr_16849_16882[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (13))){
var inst_16788 = (state_16836[(8)]);
var inst_16789 = (state_16836[(9)]);
var inst_16790 = (state_16836[(10)]);
var inst_16791 = (state_16836[(11)]);
var inst_16798 = (state_16836[(2)]);
var inst_16799 = (inst_16791 + (1));
var tmp16845 = inst_16788;
var tmp16846 = inst_16789;
var tmp16847 = inst_16790;
var inst_16788__$1 = tmp16845;
var inst_16789__$1 = tmp16846;
var inst_16790__$1 = tmp16847;
var inst_16791__$1 = inst_16799;
var state_16836__$1 = (function (){var statearr_16850 = state_16836;
(statearr_16850[(8)] = inst_16788__$1);

(statearr_16850[(9)] = inst_16789__$1);

(statearr_16850[(10)] = inst_16790__$1);

(statearr_16850[(14)] = inst_16798);

(statearr_16850[(11)] = inst_16791__$1);

return statearr_16850;
})();
var statearr_16851_16883 = state_16836__$1;
(statearr_16851_16883[(2)] = null);

(statearr_16851_16883[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (22))){
var state_16836__$1 = state_16836;
var statearr_16852_16884 = state_16836__$1;
(statearr_16852_16884[(2)] = null);

(statearr_16852_16884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (6))){
var inst_16777 = (state_16836[(13)]);
var inst_16786 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16777) : f.call(null,inst_16777));
var inst_16787 = cljs.core.seq(inst_16786);
var inst_16788 = inst_16787;
var inst_16789 = null;
var inst_16790 = (0);
var inst_16791 = (0);
var state_16836__$1 = (function (){var statearr_16853 = state_16836;
(statearr_16853[(8)] = inst_16788);

(statearr_16853[(9)] = inst_16789);

(statearr_16853[(10)] = inst_16790);

(statearr_16853[(11)] = inst_16791);

return statearr_16853;
})();
var statearr_16854_16885 = state_16836__$1;
(statearr_16854_16885[(2)] = null);

(statearr_16854_16885[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (17))){
var inst_16802 = (state_16836[(7)]);
var inst_16806 = cljs.core.chunk_first(inst_16802);
var inst_16807 = cljs.core.chunk_rest(inst_16802);
var inst_16808 = cljs.core.count(inst_16806);
var inst_16788 = inst_16807;
var inst_16789 = inst_16806;
var inst_16790 = inst_16808;
var inst_16791 = (0);
var state_16836__$1 = (function (){var statearr_16855 = state_16836;
(statearr_16855[(8)] = inst_16788);

(statearr_16855[(9)] = inst_16789);

(statearr_16855[(10)] = inst_16790);

(statearr_16855[(11)] = inst_16791);

return statearr_16855;
})();
var statearr_16856_16886 = state_16836__$1;
(statearr_16856_16886[(2)] = null);

(statearr_16856_16886[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (3))){
var inst_16834 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16836__$1,inst_16834);
} else {
if((state_val_16837 === (12))){
var inst_16822 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
var statearr_16857_16887 = state_16836__$1;
(statearr_16857_16887[(2)] = inst_16822);

(statearr_16857_16887[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (2))){
var state_16836__$1 = state_16836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16836__$1,(4),in$);
} else {
if((state_val_16837 === (23))){
var inst_16830 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
var statearr_16858_16888 = state_16836__$1;
(statearr_16858_16888[(2)] = inst_16830);

(statearr_16858_16888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (19))){
var inst_16817 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
var statearr_16859_16889 = state_16836__$1;
(statearr_16859_16889[(2)] = inst_16817);

(statearr_16859_16889[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (11))){
var inst_16788 = (state_16836[(8)]);
var inst_16802 = (state_16836[(7)]);
var inst_16802__$1 = cljs.core.seq(inst_16788);
var state_16836__$1 = (function (){var statearr_16860 = state_16836;
(statearr_16860[(7)] = inst_16802__$1);

return statearr_16860;
})();
if(inst_16802__$1){
var statearr_16861_16890 = state_16836__$1;
(statearr_16861_16890[(1)] = (14));

} else {
var statearr_16862_16891 = state_16836__$1;
(statearr_16862_16891[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (9))){
var inst_16824 = (state_16836[(2)]);
var inst_16825 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16836__$1 = (function (){var statearr_16863 = state_16836;
(statearr_16863[(15)] = inst_16824);

return statearr_16863;
})();
if(cljs.core.truth_(inst_16825)){
var statearr_16864_16892 = state_16836__$1;
(statearr_16864_16892[(1)] = (21));

} else {
var statearr_16865_16893 = state_16836__$1;
(statearr_16865_16893[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (5))){
var inst_16780 = cljs.core.async.close_BANG_(out);
var state_16836__$1 = state_16836;
var statearr_16866_16894 = state_16836__$1;
(statearr_16866_16894[(2)] = inst_16780);

(statearr_16866_16894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (14))){
var inst_16802 = (state_16836[(7)]);
var inst_16804 = cljs.core.chunked_seq_QMARK_(inst_16802);
var state_16836__$1 = state_16836;
if(inst_16804){
var statearr_16867_16895 = state_16836__$1;
(statearr_16867_16895[(1)] = (17));

} else {
var statearr_16868_16896 = state_16836__$1;
(statearr_16868_16896[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (16))){
var inst_16820 = (state_16836[(2)]);
var state_16836__$1 = state_16836;
var statearr_16869_16897 = state_16836__$1;
(statearr_16869_16897[(2)] = inst_16820);

(statearr_16869_16897[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16837 === (10))){
var inst_16789 = (state_16836[(9)]);
var inst_16791 = (state_16836[(11)]);
var inst_16796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16789,inst_16791);
var state_16836__$1 = state_16836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16836__$1,(13),out,inst_16796);
} else {
if((state_val_16837 === (18))){
var inst_16802 = (state_16836[(7)]);
var inst_16811 = cljs.core.first(inst_16802);
var state_16836__$1 = state_16836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16836__$1,(20),out,inst_16811);
} else {
if((state_val_16837 === (8))){
var inst_16790 = (state_16836[(10)]);
var inst_16791 = (state_16836[(11)]);
var inst_16793 = (inst_16791 < inst_16790);
var inst_16794 = inst_16793;
var state_16836__$1 = state_16836;
if(cljs.core.truth_(inst_16794)){
var statearr_16870_16898 = state_16836__$1;
(statearr_16870_16898[(1)] = (10));

} else {
var statearr_16871_16899 = state_16836__$1;
(statearr_16871_16899[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto__))
;
return ((function (switch__10970__auto__,c__13348__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____0 = (function (){
var statearr_16872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16872[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__);

(statearr_16872[(1)] = (1));

return statearr_16872;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____1 = (function (state_16836){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16836);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16873){if((e16873 instanceof Object)){
var ex__10974__auto__ = e16873;
var statearr_16874_16900 = state_16836;
(statearr_16874_16900[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16836);

return cljs.core.cst$kw$recur;
} else {
throw e16873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16901 = state_16836;
state_16836 = G__16901;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__ = function(state_16836){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____1.call(this,state_16836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto__))
})();
var state__13350__auto__ = (function (){var statearr_16875 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16875[(6)] = c__13348__auto__);

return statearr_16875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto__))
);

return c__13348__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16903 = arguments.length;
switch (G__16903) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16906 = arguments.length;
switch (G__16906) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16909 = arguments.length;
switch (G__16909) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___16956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___16956,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___16956,out){
return (function (state_16933){
var state_val_16934 = (state_16933[(1)]);
if((state_val_16934 === (7))){
var inst_16928 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16935_16957 = state_16933__$1;
(statearr_16935_16957[(2)] = inst_16928);

(statearr_16935_16957[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (1))){
var inst_16910 = null;
var state_16933__$1 = (function (){var statearr_16936 = state_16933;
(statearr_16936[(7)] = inst_16910);

return statearr_16936;
})();
var statearr_16937_16958 = state_16933__$1;
(statearr_16937_16958[(2)] = null);

(statearr_16937_16958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (4))){
var inst_16913 = (state_16933[(8)]);
var inst_16913__$1 = (state_16933[(2)]);
var inst_16914 = (inst_16913__$1 == null);
var inst_16915 = cljs.core.not(inst_16914);
var state_16933__$1 = (function (){var statearr_16938 = state_16933;
(statearr_16938[(8)] = inst_16913__$1);

return statearr_16938;
})();
if(inst_16915){
var statearr_16939_16959 = state_16933__$1;
(statearr_16939_16959[(1)] = (5));

} else {
var statearr_16940_16960 = state_16933__$1;
(statearr_16940_16960[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (6))){
var state_16933__$1 = state_16933;
var statearr_16941_16961 = state_16933__$1;
(statearr_16941_16961[(2)] = null);

(statearr_16941_16961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (3))){
var inst_16930 = (state_16933[(2)]);
var inst_16931 = cljs.core.async.close_BANG_(out);
var state_16933__$1 = (function (){var statearr_16942 = state_16933;
(statearr_16942[(9)] = inst_16930);

return statearr_16942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16933__$1,inst_16931);
} else {
if((state_val_16934 === (2))){
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16933__$1,(4),ch);
} else {
if((state_val_16934 === (11))){
var inst_16913 = (state_16933[(8)]);
var inst_16922 = (state_16933[(2)]);
var inst_16910 = inst_16913;
var state_16933__$1 = (function (){var statearr_16943 = state_16933;
(statearr_16943[(10)] = inst_16922);

(statearr_16943[(7)] = inst_16910);

return statearr_16943;
})();
var statearr_16944_16962 = state_16933__$1;
(statearr_16944_16962[(2)] = null);

(statearr_16944_16962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (9))){
var inst_16913 = (state_16933[(8)]);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16933__$1,(11),out,inst_16913);
} else {
if((state_val_16934 === (5))){
var inst_16913 = (state_16933[(8)]);
var inst_16910 = (state_16933[(7)]);
var inst_16917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16913,inst_16910);
var state_16933__$1 = state_16933;
if(inst_16917){
var statearr_16946_16963 = state_16933__$1;
(statearr_16946_16963[(1)] = (8));

} else {
var statearr_16947_16964 = state_16933__$1;
(statearr_16947_16964[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (10))){
var inst_16925 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16948_16965 = state_16933__$1;
(statearr_16948_16965[(2)] = inst_16925);

(statearr_16948_16965[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (8))){
var inst_16910 = (state_16933[(7)]);
var tmp16945 = inst_16910;
var inst_16910__$1 = tmp16945;
var state_16933__$1 = (function (){var statearr_16949 = state_16933;
(statearr_16949[(7)] = inst_16910__$1);

return statearr_16949;
})();
var statearr_16950_16966 = state_16933__$1;
(statearr_16950_16966[(2)] = null);

(statearr_16950_16966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___16956,out))
;
return ((function (switch__10970__auto__,c__13348__auto___16956,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_16951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16951[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_16951[(1)] = (1));

return statearr_16951;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_16933){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_16933);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e16952){if((e16952 instanceof Object)){
var ex__10974__auto__ = e16952;
var statearr_16953_16967 = state_16933;
(statearr_16953_16967[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16933);

return cljs.core.cst$kw$recur;
} else {
throw e16952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__16968 = state_16933;
state_16933 = G__16968;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_16933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_16933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___16956,out))
})();
var state__13350__auto__ = (function (){var statearr_16954 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_16954[(6)] = c__13348__auto___16956);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___16956,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16970 = arguments.length;
switch (G__16970) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___17036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___17036,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___17036,out){
return (function (state_17008){
var state_val_17009 = (state_17008[(1)]);
if((state_val_17009 === (7))){
var inst_17004 = (state_17008[(2)]);
var state_17008__$1 = state_17008;
var statearr_17010_17037 = state_17008__$1;
(statearr_17010_17037[(2)] = inst_17004);

(statearr_17010_17037[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (1))){
var inst_16971 = (new Array(n));
var inst_16972 = inst_16971;
var inst_16973 = (0);
var state_17008__$1 = (function (){var statearr_17011 = state_17008;
(statearr_17011[(7)] = inst_16973);

(statearr_17011[(8)] = inst_16972);

return statearr_17011;
})();
var statearr_17012_17038 = state_17008__$1;
(statearr_17012_17038[(2)] = null);

(statearr_17012_17038[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (4))){
var inst_16976 = (state_17008[(9)]);
var inst_16976__$1 = (state_17008[(2)]);
var inst_16977 = (inst_16976__$1 == null);
var inst_16978 = cljs.core.not(inst_16977);
var state_17008__$1 = (function (){var statearr_17013 = state_17008;
(statearr_17013[(9)] = inst_16976__$1);

return statearr_17013;
})();
if(inst_16978){
var statearr_17014_17039 = state_17008__$1;
(statearr_17014_17039[(1)] = (5));

} else {
var statearr_17015_17040 = state_17008__$1;
(statearr_17015_17040[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (15))){
var inst_16998 = (state_17008[(2)]);
var state_17008__$1 = state_17008;
var statearr_17016_17041 = state_17008__$1;
(statearr_17016_17041[(2)] = inst_16998);

(statearr_17016_17041[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (13))){
var state_17008__$1 = state_17008;
var statearr_17017_17042 = state_17008__$1;
(statearr_17017_17042[(2)] = null);

(statearr_17017_17042[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (6))){
var inst_16973 = (state_17008[(7)]);
var inst_16994 = (inst_16973 > (0));
var state_17008__$1 = state_17008;
if(cljs.core.truth_(inst_16994)){
var statearr_17018_17043 = state_17008__$1;
(statearr_17018_17043[(1)] = (12));

} else {
var statearr_17019_17044 = state_17008__$1;
(statearr_17019_17044[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (3))){
var inst_17006 = (state_17008[(2)]);
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17008__$1,inst_17006);
} else {
if((state_val_17009 === (12))){
var inst_16972 = (state_17008[(8)]);
var inst_16996 = cljs.core.vec(inst_16972);
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17008__$1,(15),out,inst_16996);
} else {
if((state_val_17009 === (2))){
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17008__$1,(4),ch);
} else {
if((state_val_17009 === (11))){
var inst_16988 = (state_17008[(2)]);
var inst_16989 = (new Array(n));
var inst_16972 = inst_16989;
var inst_16973 = (0);
var state_17008__$1 = (function (){var statearr_17020 = state_17008;
(statearr_17020[(7)] = inst_16973);

(statearr_17020[(10)] = inst_16988);

(statearr_17020[(8)] = inst_16972);

return statearr_17020;
})();
var statearr_17021_17045 = state_17008__$1;
(statearr_17021_17045[(2)] = null);

(statearr_17021_17045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (9))){
var inst_16972 = (state_17008[(8)]);
var inst_16986 = cljs.core.vec(inst_16972);
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17008__$1,(11),out,inst_16986);
} else {
if((state_val_17009 === (5))){
var inst_16976 = (state_17008[(9)]);
var inst_16973 = (state_17008[(7)]);
var inst_16972 = (state_17008[(8)]);
var inst_16981 = (state_17008[(11)]);
var inst_16980 = (inst_16972[inst_16973] = inst_16976);
var inst_16981__$1 = (inst_16973 + (1));
var inst_16982 = (inst_16981__$1 < n);
var state_17008__$1 = (function (){var statearr_17022 = state_17008;
(statearr_17022[(12)] = inst_16980);

(statearr_17022[(11)] = inst_16981__$1);

return statearr_17022;
})();
if(cljs.core.truth_(inst_16982)){
var statearr_17023_17046 = state_17008__$1;
(statearr_17023_17046[(1)] = (8));

} else {
var statearr_17024_17047 = state_17008__$1;
(statearr_17024_17047[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (14))){
var inst_17001 = (state_17008[(2)]);
var inst_17002 = cljs.core.async.close_BANG_(out);
var state_17008__$1 = (function (){var statearr_17026 = state_17008;
(statearr_17026[(13)] = inst_17001);

return statearr_17026;
})();
var statearr_17027_17048 = state_17008__$1;
(statearr_17027_17048[(2)] = inst_17002);

(statearr_17027_17048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (10))){
var inst_16992 = (state_17008[(2)]);
var state_17008__$1 = state_17008;
var statearr_17028_17049 = state_17008__$1;
(statearr_17028_17049[(2)] = inst_16992);

(statearr_17028_17049[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17009 === (8))){
var inst_16972 = (state_17008[(8)]);
var inst_16981 = (state_17008[(11)]);
var tmp17025 = inst_16972;
var inst_16972__$1 = tmp17025;
var inst_16973 = inst_16981;
var state_17008__$1 = (function (){var statearr_17029 = state_17008;
(statearr_17029[(7)] = inst_16973);

(statearr_17029[(8)] = inst_16972__$1);

return statearr_17029;
})();
var statearr_17030_17050 = state_17008__$1;
(statearr_17030_17050[(2)] = null);

(statearr_17030_17050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___17036,out))
;
return ((function (switch__10970__auto__,c__13348__auto___17036,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_17031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17031[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_17031[(1)] = (1));

return statearr_17031;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_17008){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_17008);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e17032){if((e17032 instanceof Object)){
var ex__10974__auto__ = e17032;
var statearr_17033_17051 = state_17008;
(statearr_17033_17051[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17008);

return cljs.core.cst$kw$recur;
} else {
throw e17032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__17052 = state_17008;
state_17008 = G__17052;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_17008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_17008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___17036,out))
})();
var state__13350__auto__ = (function (){var statearr_17034 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_17034[(6)] = c__13348__auto___17036);

return statearr_17034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___17036,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17054 = arguments.length;
switch (G__17054) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13348__auto___17124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13348__auto___17124,out){
return (function (){
var f__13349__auto__ = (function (){var switch__10970__auto__ = ((function (c__13348__auto___17124,out){
return (function (state_17096){
var state_val_17097 = (state_17096[(1)]);
if((state_val_17097 === (7))){
var inst_17092 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17098_17125 = state_17096__$1;
(statearr_17098_17125[(2)] = inst_17092);

(statearr_17098_17125[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (1))){
var inst_17055 = [];
var inst_17056 = inst_17055;
var inst_17057 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17096__$1 = (function (){var statearr_17099 = state_17096;
(statearr_17099[(7)] = inst_17057);

(statearr_17099[(8)] = inst_17056);

return statearr_17099;
})();
var statearr_17100_17126 = state_17096__$1;
(statearr_17100_17126[(2)] = null);

(statearr_17100_17126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (4))){
var inst_17060 = (state_17096[(9)]);
var inst_17060__$1 = (state_17096[(2)]);
var inst_17061 = (inst_17060__$1 == null);
var inst_17062 = cljs.core.not(inst_17061);
var state_17096__$1 = (function (){var statearr_17101 = state_17096;
(statearr_17101[(9)] = inst_17060__$1);

return statearr_17101;
})();
if(inst_17062){
var statearr_17102_17127 = state_17096__$1;
(statearr_17102_17127[(1)] = (5));

} else {
var statearr_17103_17128 = state_17096__$1;
(statearr_17103_17128[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (15))){
var inst_17086 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17104_17129 = state_17096__$1;
(statearr_17104_17129[(2)] = inst_17086);

(statearr_17104_17129[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (13))){
var state_17096__$1 = state_17096;
var statearr_17105_17130 = state_17096__$1;
(statearr_17105_17130[(2)] = null);

(statearr_17105_17130[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (6))){
var inst_17056 = (state_17096[(8)]);
var inst_17081 = inst_17056.length;
var inst_17082 = (inst_17081 > (0));
var state_17096__$1 = state_17096;
if(cljs.core.truth_(inst_17082)){
var statearr_17106_17131 = state_17096__$1;
(statearr_17106_17131[(1)] = (12));

} else {
var statearr_17107_17132 = state_17096__$1;
(statearr_17107_17132[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (3))){
var inst_17094 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17096__$1,inst_17094);
} else {
if((state_val_17097 === (12))){
var inst_17056 = (state_17096[(8)]);
var inst_17084 = cljs.core.vec(inst_17056);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17096__$1,(15),out,inst_17084);
} else {
if((state_val_17097 === (2))){
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17096__$1,(4),ch);
} else {
if((state_val_17097 === (11))){
var inst_17064 = (state_17096[(10)]);
var inst_17060 = (state_17096[(9)]);
var inst_17074 = (state_17096[(2)]);
var inst_17075 = [];
var inst_17076 = inst_17075.push(inst_17060);
var inst_17056 = inst_17075;
var inst_17057 = inst_17064;
var state_17096__$1 = (function (){var statearr_17108 = state_17096;
(statearr_17108[(11)] = inst_17074);

(statearr_17108[(7)] = inst_17057);

(statearr_17108[(8)] = inst_17056);

(statearr_17108[(12)] = inst_17076);

return statearr_17108;
})();
var statearr_17109_17133 = state_17096__$1;
(statearr_17109_17133[(2)] = null);

(statearr_17109_17133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (9))){
var inst_17056 = (state_17096[(8)]);
var inst_17072 = cljs.core.vec(inst_17056);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17096__$1,(11),out,inst_17072);
} else {
if((state_val_17097 === (5))){
var inst_17064 = (state_17096[(10)]);
var inst_17057 = (state_17096[(7)]);
var inst_17060 = (state_17096[(9)]);
var inst_17064__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17060) : f.call(null,inst_17060));
var inst_17065 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17064__$1,inst_17057);
var inst_17066 = cljs.core.keyword_identical_QMARK_(inst_17057,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17067 = ((inst_17065) || (inst_17066));
var state_17096__$1 = (function (){var statearr_17110 = state_17096;
(statearr_17110[(10)] = inst_17064__$1);

return statearr_17110;
})();
if(cljs.core.truth_(inst_17067)){
var statearr_17111_17134 = state_17096__$1;
(statearr_17111_17134[(1)] = (8));

} else {
var statearr_17112_17135 = state_17096__$1;
(statearr_17112_17135[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (14))){
var inst_17089 = (state_17096[(2)]);
var inst_17090 = cljs.core.async.close_BANG_(out);
var state_17096__$1 = (function (){var statearr_17114 = state_17096;
(statearr_17114[(13)] = inst_17089);

return statearr_17114;
})();
var statearr_17115_17136 = state_17096__$1;
(statearr_17115_17136[(2)] = inst_17090);

(statearr_17115_17136[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (10))){
var inst_17079 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17116_17137 = state_17096__$1;
(statearr_17116_17137[(2)] = inst_17079);

(statearr_17116_17137[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (8))){
var inst_17064 = (state_17096[(10)]);
var inst_17056 = (state_17096[(8)]);
var inst_17060 = (state_17096[(9)]);
var inst_17069 = inst_17056.push(inst_17060);
var tmp17113 = inst_17056;
var inst_17056__$1 = tmp17113;
var inst_17057 = inst_17064;
var state_17096__$1 = (function (){var statearr_17117 = state_17096;
(statearr_17117[(7)] = inst_17057);

(statearr_17117[(14)] = inst_17069);

(statearr_17117[(8)] = inst_17056__$1);

return statearr_17117;
})();
var statearr_17118_17138 = state_17096__$1;
(statearr_17118_17138[(2)] = null);

(statearr_17118_17138[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13348__auto___17124,out))
;
return ((function (switch__10970__auto__,c__13348__auto___17124,out){
return (function() {
var cljs$core$async$state_machine__10971__auto__ = null;
var cljs$core$async$state_machine__10971__auto____0 = (function (){
var statearr_17119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17119[(0)] = cljs$core$async$state_machine__10971__auto__);

(statearr_17119[(1)] = (1));

return statearr_17119;
});
var cljs$core$async$state_machine__10971__auto____1 = (function (state_17096){
while(true){
var ret_value__10972__auto__ = (function (){try{while(true){
var result__10973__auto__ = switch__10970__auto__(state_17096);
if(cljs.core.keyword_identical_QMARK_(result__10973__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10973__auto__;
}
break;
}
}catch (e17120){if((e17120 instanceof Object)){
var ex__10974__auto__ = e17120;
var statearr_17121_17139 = state_17096;
(statearr_17121_17139[(5)] = ex__10974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17096);

return cljs.core.cst$kw$recur;
} else {
throw e17120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10972__auto__,cljs.core.cst$kw$recur)){
var G__17140 = state_17096;
state_17096 = G__17140;
continue;
} else {
return ret_value__10972__auto__;
}
break;
}
});
cljs$core$async$state_machine__10971__auto__ = function(state_17096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10971__auto____1.call(this,state_17096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10971__auto____0;
cljs$core$async$state_machine__10971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10971__auto____1;
return cljs$core$async$state_machine__10971__auto__;
})()
;})(switch__10970__auto__,c__13348__auto___17124,out))
})();
var state__13350__auto__ = (function (){var statearr_17122 = (f__13349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13349__auto__.cljs$core$IFn$_invoke$arity$0() : f__13349__auto__.call(null));
(statearr_17122[(6)] = c__13348__auto___17124);

return statearr_17122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13350__auto__);
});})(c__13348__auto___17124,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

