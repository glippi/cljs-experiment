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
var G__15274 = arguments.length;
switch (G__15274) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15275 = (function (f,blockable,meta15276){
this.f = f;
this.blockable = blockable;
this.meta15276 = meta15276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15277,meta15276__$1){
var self__ = this;
var _15277__$1 = this;
return (new cljs.core.async.t_cljs$core$async15275(self__.f,self__.blockable,meta15276__$1));
});

cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15277){
var self__ = this;
var _15277__$1 = this;
return self__.meta15276;
});

cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15276], null);
});

cljs.core.async.t_cljs$core$async15275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15275";

cljs.core.async.t_cljs$core$async15275.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15275.
 */
cljs.core.async.__GT_t_cljs$core$async15275 = (function cljs$core$async$__GT_t_cljs$core$async15275(f__$1,blockable__$1,meta15276){
return (new cljs.core.async.t_cljs$core$async15275(f__$1,blockable__$1,meta15276));
});

}

return (new cljs.core.async.t_cljs$core$async15275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15281 = arguments.length;
switch (G__15281) {
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
var G__15284 = arguments.length;
switch (G__15284) {
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
var G__15287 = arguments.length;
switch (G__15287) {
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
var val_15289 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15289) : fn1.call(null,val_15289));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15289,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15289) : fn1.call(null,val_15289));
});})(val_15289,ret))
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
var G__15291 = arguments.length;
switch (G__15291) {
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
var n__4408__auto___15293 = n;
var x_15294 = (0);
while(true){
if((x_15294 < n__4408__auto___15293)){
(a[x_15294] = (0));

var G__15295 = (x_15294 + (1));
x_15294 = G__15295;
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

var G__15296 = (i + (1));
i = G__15296;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15297 = (function (flag,meta15298){
this.flag = flag;
this.meta15298 = meta15298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15299,meta15298__$1){
var self__ = this;
var _15299__$1 = this;
return (new cljs.core.async.t_cljs$core$async15297(self__.flag,meta15298__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15299){
var self__ = this;
var _15299__$1 = this;
return self__.meta15298;
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15298], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15297";

cljs.core.async.t_cljs$core$async15297.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15297");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15297.
 */
cljs.core.async.__GT_t_cljs$core$async15297 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15297(flag__$1,meta15298){
return (new cljs.core.async.t_cljs$core$async15297(flag__$1,meta15298));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15297(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15300 = (function (flag,cb,meta15301){
this.flag = flag;
this.cb = cb;
this.meta15301 = meta15301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15302,meta15301__$1){
var self__ = this;
var _15302__$1 = this;
return (new cljs.core.async.t_cljs$core$async15300(self__.flag,self__.cb,meta15301__$1));
});

cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15302){
var self__ = this;
var _15302__$1 = this;
return self__.meta15301;
});

cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15301], null);
});

cljs.core.async.t_cljs$core$async15300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15300";

cljs.core.async.t_cljs$core$async15300.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15300");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15300.
 */
cljs.core.async.__GT_t_cljs$core$async15300 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15300(flag__$1,cb__$1,meta15301){
return (new cljs.core.async.t_cljs$core$async15300(flag__$1,cb__$1,meta15301));
});

}

return (new cljs.core.async.t_cljs$core$async15300(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15303_SHARP_){
var G__15305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15303_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15305) : fret.call(null,G__15305));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15304_SHARP_){
var G__15306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15304_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15306) : fret.call(null,G__15306));
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
var G__15307 = (i + (1));
i = G__15307;
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
var len__4531__auto___15313 = arguments.length;
var i__4532__auto___15314 = (0);
while(true){
if((i__4532__auto___15314 < len__4531__auto___15313)){
args__4534__auto__.push((arguments[i__4532__auto___15314]));

var G__15315 = (i__4532__auto___15314 + (1));
i__4532__auto___15314 = G__15315;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15310){
var map__15311 = p__15310;
var map__15311__$1 = ((((!((map__15311 == null)))?(((((map__15311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15311):map__15311);
var opts = map__15311__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15308){
var G__15309 = cljs.core.first(seq15308);
var seq15308__$1 = cljs.core.next(seq15308);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15309,seq15308__$1);
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
var G__15317 = arguments.length;
switch (G__15317) {
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
var c__13346__auto___15363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___15363){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___15363){
return (function (state_15341){
var state_val_15342 = (state_15341[(1)]);
if((state_val_15342 === (7))){
var inst_15337 = (state_15341[(2)]);
var state_15341__$1 = state_15341;
var statearr_15343_15364 = state_15341__$1;
(statearr_15343_15364[(2)] = inst_15337);

(statearr_15343_15364[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (1))){
var state_15341__$1 = state_15341;
var statearr_15344_15365 = state_15341__$1;
(statearr_15344_15365[(2)] = null);

(statearr_15344_15365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (4))){
var inst_15320 = (state_15341[(7)]);
var inst_15320__$1 = (state_15341[(2)]);
var inst_15321 = (inst_15320__$1 == null);
var state_15341__$1 = (function (){var statearr_15345 = state_15341;
(statearr_15345[(7)] = inst_15320__$1);

return statearr_15345;
})();
if(cljs.core.truth_(inst_15321)){
var statearr_15346_15366 = state_15341__$1;
(statearr_15346_15366[(1)] = (5));

} else {
var statearr_15347_15367 = state_15341__$1;
(statearr_15347_15367[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (13))){
var state_15341__$1 = state_15341;
var statearr_15348_15368 = state_15341__$1;
(statearr_15348_15368[(2)] = null);

(statearr_15348_15368[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (6))){
var inst_15320 = (state_15341[(7)]);
var state_15341__$1 = state_15341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15341__$1,(11),to,inst_15320);
} else {
if((state_val_15342 === (3))){
var inst_15339 = (state_15341[(2)]);
var state_15341__$1 = state_15341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15341__$1,inst_15339);
} else {
if((state_val_15342 === (12))){
var state_15341__$1 = state_15341;
var statearr_15349_15369 = state_15341__$1;
(statearr_15349_15369[(2)] = null);

(statearr_15349_15369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (2))){
var state_15341__$1 = state_15341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15341__$1,(4),from);
} else {
if((state_val_15342 === (11))){
var inst_15330 = (state_15341[(2)]);
var state_15341__$1 = state_15341;
if(cljs.core.truth_(inst_15330)){
var statearr_15350_15370 = state_15341__$1;
(statearr_15350_15370[(1)] = (12));

} else {
var statearr_15351_15371 = state_15341__$1;
(statearr_15351_15371[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (9))){
var state_15341__$1 = state_15341;
var statearr_15352_15372 = state_15341__$1;
(statearr_15352_15372[(2)] = null);

(statearr_15352_15372[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (5))){
var state_15341__$1 = state_15341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15353_15373 = state_15341__$1;
(statearr_15353_15373[(1)] = (8));

} else {
var statearr_15354_15374 = state_15341__$1;
(statearr_15354_15374[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (14))){
var inst_15335 = (state_15341[(2)]);
var state_15341__$1 = state_15341;
var statearr_15355_15375 = state_15341__$1;
(statearr_15355_15375[(2)] = inst_15335);

(statearr_15355_15375[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (10))){
var inst_15327 = (state_15341[(2)]);
var state_15341__$1 = state_15341;
var statearr_15356_15376 = state_15341__$1;
(statearr_15356_15376[(2)] = inst_15327);

(statearr_15356_15376[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15342 === (8))){
var inst_15324 = cljs.core.async.close_BANG_(to);
var state_15341__$1 = state_15341;
var statearr_15357_15377 = state_15341__$1;
(statearr_15357_15377[(2)] = inst_15324);

(statearr_15357_15377[(1)] = (10));


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
});})(c__13346__auto___15363))
;
return ((function (switch__13163__auto__,c__13346__auto___15363){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_15358 = [null,null,null,null,null,null,null,null];
(statearr_15358[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_15358[(1)] = (1));

return statearr_15358;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_15341){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15341);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15359){if((e15359 instanceof Object)){
var ex__13167__auto__ = e15359;
var statearr_15360_15378 = state_15341;
(statearr_15360_15378[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15341);

return cljs.core.cst$kw$recur;
} else {
throw e15359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15379 = state_15341;
state_15341 = G__15379;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_15341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_15341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___15363))
})();
var state__13348__auto__ = (function (){var statearr_15361 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15361[(6)] = c__13346__auto___15363);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___15363))
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
return (function (p__15380){
var vec__15381 = p__15380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15381,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15381,(1),null);
var job = vec__15381;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13346__auto___15552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results){
return (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (1))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15388__$1,(2),res,v);
} else {
if((state_val_15389 === (2))){
var inst_15385 = (state_15388[(2)]);
var inst_15386 = cljs.core.async.close_BANG_(res);
var state_15388__$1 = (function (){var statearr_15390 = state_15388;
(statearr_15390[(7)] = inst_15385);

return statearr_15390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15388__$1,inst_15386);
} else {
return null;
}
}
});})(c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results))
;
return ((function (switch__13163__auto__,c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_15391 = [null,null,null,null,null,null,null,null];
(statearr_15391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__);

(statearr_15391[(1)] = (1));

return statearr_15391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1 = (function (state_15388){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15388);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15392){if((e15392 instanceof Object)){
var ex__13167__auto__ = e15392;
var statearr_15393_15553 = state_15388;
(statearr_15393_15553[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15388);

return cljs.core.cst$kw$recur;
} else {
throw e15392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15554 = state_15388;
state_15388 = G__15554;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results))
})();
var state__13348__auto__ = (function (){var statearr_15394 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15394[(6)] = c__13346__auto___15552);

return statearr_15394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___15552,res,vec__15381,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15395){
var vec__15396 = p__15395;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396,(1),null);
var job = vec__15396;
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
var n__4408__auto___15555 = n;
var __15556 = (0);
while(true){
if((__15556 < n__4408__auto___15555)){
var G__15399_15557 = type;
var G__15399_15558__$1 = (((G__15399_15557 instanceof cljs.core.Keyword))?G__15399_15557.fqn:null);
switch (G__15399_15558__$1) {
case "compute":
var c__13346__auto___15560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15556,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (__15556,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function (state_15412){
var state_val_15413 = (state_15412[(1)]);
if((state_val_15413 === (1))){
var state_15412__$1 = state_15412;
var statearr_15414_15561 = state_15412__$1;
(statearr_15414_15561[(2)] = null);

(statearr_15414_15561[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15413 === (2))){
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15412__$1,(4),jobs);
} else {
if((state_val_15413 === (3))){
var inst_15410 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15412__$1,inst_15410);
} else {
if((state_val_15413 === (4))){
var inst_15402 = (state_15412[(2)]);
var inst_15403 = process(inst_15402);
var state_15412__$1 = state_15412;
if(cljs.core.truth_(inst_15403)){
var statearr_15415_15562 = state_15412__$1;
(statearr_15415_15562[(1)] = (5));

} else {
var statearr_15416_15563 = state_15412__$1;
(statearr_15416_15563[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15413 === (5))){
var state_15412__$1 = state_15412;
var statearr_15417_15564 = state_15412__$1;
(statearr_15417_15564[(2)] = null);

(statearr_15417_15564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15413 === (6))){
var state_15412__$1 = state_15412;
var statearr_15418_15565 = state_15412__$1;
(statearr_15418_15565[(2)] = null);

(statearr_15418_15565[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15413 === (7))){
var inst_15408 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15419_15566 = state_15412__$1;
(statearr_15419_15566[(2)] = inst_15408);

(statearr_15419_15566[(1)] = (3));


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
});})(__15556,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
;
return ((function (__15556,switch__13163__auto__,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_15420 = [null,null,null,null,null,null,null];
(statearr_15420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__);

(statearr_15420[(1)] = (1));

return statearr_15420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1 = (function (state_15412){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15412);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15421){if((e15421 instanceof Object)){
var ex__13167__auto__ = e15421;
var statearr_15422_15567 = state_15412;
(statearr_15422_15567[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15412);

return cljs.core.cst$kw$recur;
} else {
throw e15421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15568 = state_15412;
state_15412 = G__15568;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__;
})()
;})(__15556,switch__13163__auto__,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
})();
var state__13348__auto__ = (function (){var statearr_15423 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15423[(6)] = c__13346__auto___15560);

return statearr_15423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(__15556,c__13346__auto___15560,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
);


break;
case "async":
var c__13346__auto___15569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15556,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (__15556,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (1))){
var state_15436__$1 = state_15436;
var statearr_15438_15570 = state_15436__$1;
(statearr_15438_15570[(2)] = null);

(statearr_15438_15570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15437 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(4),jobs);
} else {
if((state_val_15437 === (3))){
var inst_15434 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15436__$1,inst_15434);
} else {
if((state_val_15437 === (4))){
var inst_15426 = (state_15436[(2)]);
var inst_15427 = async(inst_15426);
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15427)){
var statearr_15439_15571 = state_15436__$1;
(statearr_15439_15571[(1)] = (5));

} else {
var statearr_15440_15572 = state_15436__$1;
(statearr_15440_15572[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15437 === (5))){
var state_15436__$1 = state_15436;
var statearr_15441_15573 = state_15436__$1;
(statearr_15441_15573[(2)] = null);

(statearr_15441_15573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15437 === (6))){
var state_15436__$1 = state_15436;
var statearr_15442_15574 = state_15436__$1;
(statearr_15442_15574[(2)] = null);

(statearr_15442_15574[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15437 === (7))){
var inst_15432 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15443_15575 = state_15436__$1;
(statearr_15443_15575[(2)] = inst_15432);

(statearr_15443_15575[(1)] = (3));


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
});})(__15556,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
;
return ((function (__15556,switch__13163__auto__,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_15444 = [null,null,null,null,null,null,null];
(statearr_15444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__);

(statearr_15444[(1)] = (1));

return statearr_15444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1 = (function (state_15436){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15436);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15445){if((e15445 instanceof Object)){
var ex__13167__auto__ = e15445;
var statearr_15446_15576 = state_15436;
(statearr_15446_15576[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15436);

return cljs.core.cst$kw$recur;
} else {
throw e15445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15577 = state_15436;
state_15436 = G__15577;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__;
})()
;})(__15556,switch__13163__auto__,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
})();
var state__13348__auto__ = (function (){var statearr_15447 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15447[(6)] = c__13346__auto___15569);

return statearr_15447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(__15556,c__13346__auto___15569,G__15399_15557,G__15399_15558__$1,n__4408__auto___15555,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15399_15558__$1)].join('')));

}

var G__15578 = (__15556 + (1));
__15556 = G__15578;
continue;
} else {
}
break;
}

var c__13346__auto___15579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___15579,jobs,results,process,async){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___15579,jobs,results,process,async){
return (function (state_15469){
var state_val_15470 = (state_15469[(1)]);
if((state_val_15470 === (1))){
var state_15469__$1 = state_15469;
var statearr_15471_15580 = state_15469__$1;
(statearr_15471_15580[(2)] = null);

(statearr_15471_15580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15470 === (2))){
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15469__$1,(4),from);
} else {
if((state_val_15470 === (3))){
var inst_15467 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15469__$1,inst_15467);
} else {
if((state_val_15470 === (4))){
var inst_15450 = (state_15469[(7)]);
var inst_15450__$1 = (state_15469[(2)]);
var inst_15451 = (inst_15450__$1 == null);
var state_15469__$1 = (function (){var statearr_15472 = state_15469;
(statearr_15472[(7)] = inst_15450__$1);

return statearr_15472;
})();
if(cljs.core.truth_(inst_15451)){
var statearr_15473_15581 = state_15469__$1;
(statearr_15473_15581[(1)] = (5));

} else {
var statearr_15474_15582 = state_15469__$1;
(statearr_15474_15582[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15470 === (5))){
var inst_15453 = cljs.core.async.close_BANG_(jobs);
var state_15469__$1 = state_15469;
var statearr_15475_15583 = state_15469__$1;
(statearr_15475_15583[(2)] = inst_15453);

(statearr_15475_15583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15470 === (6))){
var inst_15450 = (state_15469[(7)]);
var inst_15455 = (state_15469[(8)]);
var inst_15455__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15457 = [inst_15450,inst_15455__$1];
var inst_15458 = (new cljs.core.PersistentVector(null,2,(5),inst_15456,inst_15457,null));
var state_15469__$1 = (function (){var statearr_15476 = state_15469;
(statearr_15476[(8)] = inst_15455__$1);

return statearr_15476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15469__$1,(8),jobs,inst_15458);
} else {
if((state_val_15470 === (7))){
var inst_15465 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15477_15584 = state_15469__$1;
(statearr_15477_15584[(2)] = inst_15465);

(statearr_15477_15584[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15470 === (8))){
var inst_15455 = (state_15469[(8)]);
var inst_15460 = (state_15469[(2)]);
var state_15469__$1 = (function (){var statearr_15478 = state_15469;
(statearr_15478[(9)] = inst_15460);

return statearr_15478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15469__$1,(9),results,inst_15455);
} else {
if((state_val_15470 === (9))){
var inst_15462 = (state_15469[(2)]);
var state_15469__$1 = (function (){var statearr_15479 = state_15469;
(statearr_15479[(10)] = inst_15462);

return statearr_15479;
})();
var statearr_15480_15585 = state_15469__$1;
(statearr_15480_15585[(2)] = null);

(statearr_15480_15585[(1)] = (2));


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
});})(c__13346__auto___15579,jobs,results,process,async))
;
return ((function (switch__13163__auto__,c__13346__auto___15579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_15481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__);

(statearr_15481[(1)] = (1));

return statearr_15481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1 = (function (state_15469){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15469);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15482){if((e15482 instanceof Object)){
var ex__13167__auto__ = e15482;
var statearr_15483_15586 = state_15469;
(statearr_15483_15586[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15469);

return cljs.core.cst$kw$recur;
} else {
throw e15482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15587 = state_15469;
state_15469 = G__15587;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = function(state_15469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1.call(this,state_15469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___15579,jobs,results,process,async))
})();
var state__13348__auto__ = (function (){var statearr_15484 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15484[(6)] = c__13346__auto___15579);

return statearr_15484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___15579,jobs,results,process,async))
);


var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__,jobs,results,process,async){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__,jobs,results,process,async){
return (function (state_15522){
var state_val_15523 = (state_15522[(1)]);
if((state_val_15523 === (7))){
var inst_15518 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15524_15588 = state_15522__$1;
(statearr_15524_15588[(2)] = inst_15518);

(statearr_15524_15588[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (20))){
var state_15522__$1 = state_15522;
var statearr_15525_15589 = state_15522__$1;
(statearr_15525_15589[(2)] = null);

(statearr_15525_15589[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (1))){
var state_15522__$1 = state_15522;
var statearr_15526_15590 = state_15522__$1;
(statearr_15526_15590[(2)] = null);

(statearr_15526_15590[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (4))){
var inst_15487 = (state_15522[(7)]);
var inst_15487__$1 = (state_15522[(2)]);
var inst_15488 = (inst_15487__$1 == null);
var state_15522__$1 = (function (){var statearr_15527 = state_15522;
(statearr_15527[(7)] = inst_15487__$1);

return statearr_15527;
})();
if(cljs.core.truth_(inst_15488)){
var statearr_15528_15591 = state_15522__$1;
(statearr_15528_15591[(1)] = (5));

} else {
var statearr_15529_15592 = state_15522__$1;
(statearr_15529_15592[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (15))){
var inst_15500 = (state_15522[(8)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15522__$1,(18),to,inst_15500);
} else {
if((state_val_15523 === (21))){
var inst_15513 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15530_15593 = state_15522__$1;
(statearr_15530_15593[(2)] = inst_15513);

(statearr_15530_15593[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (13))){
var inst_15515 = (state_15522[(2)]);
var state_15522__$1 = (function (){var statearr_15531 = state_15522;
(statearr_15531[(9)] = inst_15515);

return statearr_15531;
})();
var statearr_15532_15594 = state_15522__$1;
(statearr_15532_15594[(2)] = null);

(statearr_15532_15594[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (6))){
var inst_15487 = (state_15522[(7)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15522__$1,(11),inst_15487);
} else {
if((state_val_15523 === (17))){
var inst_15508 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
if(cljs.core.truth_(inst_15508)){
var statearr_15533_15595 = state_15522__$1;
(statearr_15533_15595[(1)] = (19));

} else {
var statearr_15534_15596 = state_15522__$1;
(statearr_15534_15596[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (3))){
var inst_15520 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15522__$1,inst_15520);
} else {
if((state_val_15523 === (12))){
var inst_15497 = (state_15522[(10)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15522__$1,(14),inst_15497);
} else {
if((state_val_15523 === (2))){
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15522__$1,(4),results);
} else {
if((state_val_15523 === (19))){
var state_15522__$1 = state_15522;
var statearr_15535_15597 = state_15522__$1;
(statearr_15535_15597[(2)] = null);

(statearr_15535_15597[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (11))){
var inst_15497 = (state_15522[(2)]);
var state_15522__$1 = (function (){var statearr_15536 = state_15522;
(statearr_15536[(10)] = inst_15497);

return statearr_15536;
})();
var statearr_15537_15598 = state_15522__$1;
(statearr_15537_15598[(2)] = null);

(statearr_15537_15598[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (9))){
var state_15522__$1 = state_15522;
var statearr_15538_15599 = state_15522__$1;
(statearr_15538_15599[(2)] = null);

(statearr_15538_15599[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (5))){
var state_15522__$1 = state_15522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15539_15600 = state_15522__$1;
(statearr_15539_15600[(1)] = (8));

} else {
var statearr_15540_15601 = state_15522__$1;
(statearr_15540_15601[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (14))){
var inst_15500 = (state_15522[(8)]);
var inst_15502 = (state_15522[(11)]);
var inst_15500__$1 = (state_15522[(2)]);
var inst_15501 = (inst_15500__$1 == null);
var inst_15502__$1 = cljs.core.not(inst_15501);
var state_15522__$1 = (function (){var statearr_15541 = state_15522;
(statearr_15541[(8)] = inst_15500__$1);

(statearr_15541[(11)] = inst_15502__$1);

return statearr_15541;
})();
if(inst_15502__$1){
var statearr_15542_15602 = state_15522__$1;
(statearr_15542_15602[(1)] = (15));

} else {
var statearr_15543_15603 = state_15522__$1;
(statearr_15543_15603[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (16))){
var inst_15502 = (state_15522[(11)]);
var state_15522__$1 = state_15522;
var statearr_15544_15604 = state_15522__$1;
(statearr_15544_15604[(2)] = inst_15502);

(statearr_15544_15604[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (10))){
var inst_15494 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15545_15605 = state_15522__$1;
(statearr_15545_15605[(2)] = inst_15494);

(statearr_15545_15605[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (18))){
var inst_15505 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15546_15606 = state_15522__$1;
(statearr_15546_15606[(2)] = inst_15505);

(statearr_15546_15606[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15523 === (8))){
var inst_15491 = cljs.core.async.close_BANG_(to);
var state_15522__$1 = state_15522;
var statearr_15547_15607 = state_15522__$1;
(statearr_15547_15607[(2)] = inst_15491);

(statearr_15547_15607[(1)] = (10));


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
});})(c__13346__auto__,jobs,results,process,async))
;
return ((function (switch__13163__auto__,c__13346__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_15548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__);

(statearr_15548[(1)] = (1));

return statearr_15548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1 = (function (state_15522){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15522);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15549){if((e15549 instanceof Object)){
var ex__13167__auto__ = e15549;
var statearr_15550_15608 = state_15522;
(statearr_15550_15608[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15522);

return cljs.core.cst$kw$recur;
} else {
throw e15549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15609 = state_15522;
state_15522 = G__15609;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__ = function(state_15522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1.call(this,state_15522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__,jobs,results,process,async))
})();
var state__13348__auto__ = (function (){var statearr_15551 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15551[(6)] = c__13346__auto__);

return statearr_15551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__,jobs,results,process,async))
);

return c__13346__auto__;
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
var G__15611 = arguments.length;
switch (G__15611) {
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
var G__15614 = arguments.length;
switch (G__15614) {
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
var G__15617 = arguments.length;
switch (G__15617) {
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
var c__13346__auto___15666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___15666,tc,fc){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___15666,tc,fc){
return (function (state_15643){
var state_val_15644 = (state_15643[(1)]);
if((state_val_15644 === (7))){
var inst_15639 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
var statearr_15645_15667 = state_15643__$1;
(statearr_15645_15667[(2)] = inst_15639);

(statearr_15645_15667[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (1))){
var state_15643__$1 = state_15643;
var statearr_15646_15668 = state_15643__$1;
(statearr_15646_15668[(2)] = null);

(statearr_15646_15668[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (4))){
var inst_15620 = (state_15643[(7)]);
var inst_15620__$1 = (state_15643[(2)]);
var inst_15621 = (inst_15620__$1 == null);
var state_15643__$1 = (function (){var statearr_15647 = state_15643;
(statearr_15647[(7)] = inst_15620__$1);

return statearr_15647;
})();
if(cljs.core.truth_(inst_15621)){
var statearr_15648_15669 = state_15643__$1;
(statearr_15648_15669[(1)] = (5));

} else {
var statearr_15649_15670 = state_15643__$1;
(statearr_15649_15670[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (13))){
var state_15643__$1 = state_15643;
var statearr_15650_15671 = state_15643__$1;
(statearr_15650_15671[(2)] = null);

(statearr_15650_15671[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (6))){
var inst_15620 = (state_15643[(7)]);
var inst_15626 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15620) : p.call(null,inst_15620));
var state_15643__$1 = state_15643;
if(cljs.core.truth_(inst_15626)){
var statearr_15651_15672 = state_15643__$1;
(statearr_15651_15672[(1)] = (9));

} else {
var statearr_15652_15673 = state_15643__$1;
(statearr_15652_15673[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (3))){
var inst_15641 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15643__$1,inst_15641);
} else {
if((state_val_15644 === (12))){
var state_15643__$1 = state_15643;
var statearr_15653_15674 = state_15643__$1;
(statearr_15653_15674[(2)] = null);

(statearr_15653_15674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (2))){
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15643__$1,(4),ch);
} else {
if((state_val_15644 === (11))){
var inst_15620 = (state_15643[(7)]);
var inst_15630 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15643__$1,(8),inst_15630,inst_15620);
} else {
if((state_val_15644 === (9))){
var state_15643__$1 = state_15643;
var statearr_15654_15675 = state_15643__$1;
(statearr_15654_15675[(2)] = tc);

(statearr_15654_15675[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (5))){
var inst_15623 = cljs.core.async.close_BANG_(tc);
var inst_15624 = cljs.core.async.close_BANG_(fc);
var state_15643__$1 = (function (){var statearr_15655 = state_15643;
(statearr_15655[(8)] = inst_15623);

return statearr_15655;
})();
var statearr_15656_15676 = state_15643__$1;
(statearr_15656_15676[(2)] = inst_15624);

(statearr_15656_15676[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (14))){
var inst_15637 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
var statearr_15657_15677 = state_15643__$1;
(statearr_15657_15677[(2)] = inst_15637);

(statearr_15657_15677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (10))){
var state_15643__$1 = state_15643;
var statearr_15658_15678 = state_15643__$1;
(statearr_15658_15678[(2)] = fc);

(statearr_15658_15678[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15644 === (8))){
var inst_15632 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
if(cljs.core.truth_(inst_15632)){
var statearr_15659_15679 = state_15643__$1;
(statearr_15659_15679[(1)] = (12));

} else {
var statearr_15660_15680 = state_15643__$1;
(statearr_15660_15680[(1)] = (13));

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
});})(c__13346__auto___15666,tc,fc))
;
return ((function (switch__13163__auto__,c__13346__auto___15666,tc,fc){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_15661 = [null,null,null,null,null,null,null,null,null];
(statearr_15661[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_15661[(1)] = (1));

return statearr_15661;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_15643){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15643);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15662){if((e15662 instanceof Object)){
var ex__13167__auto__ = e15662;
var statearr_15663_15681 = state_15643;
(statearr_15663_15681[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15643);

return cljs.core.cst$kw$recur;
} else {
throw e15662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15682 = state_15643;
state_15643 = G__15682;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_15643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_15643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___15666,tc,fc))
})();
var state__13348__auto__ = (function (){var statearr_15664 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15664[(6)] = c__13346__auto___15666);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___15666,tc,fc))
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
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__){
return (function (state_15703){
var state_val_15704 = (state_15703[(1)]);
if((state_val_15704 === (7))){
var inst_15699 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15705_15723 = state_15703__$1;
(statearr_15705_15723[(2)] = inst_15699);

(statearr_15705_15723[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (1))){
var inst_15683 = init;
var state_15703__$1 = (function (){var statearr_15706 = state_15703;
(statearr_15706[(7)] = inst_15683);

return statearr_15706;
})();
var statearr_15707_15724 = state_15703__$1;
(statearr_15707_15724[(2)] = null);

(statearr_15707_15724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (4))){
var inst_15686 = (state_15703[(8)]);
var inst_15686__$1 = (state_15703[(2)]);
var inst_15687 = (inst_15686__$1 == null);
var state_15703__$1 = (function (){var statearr_15708 = state_15703;
(statearr_15708[(8)] = inst_15686__$1);

return statearr_15708;
})();
if(cljs.core.truth_(inst_15687)){
var statearr_15709_15725 = state_15703__$1;
(statearr_15709_15725[(1)] = (5));

} else {
var statearr_15710_15726 = state_15703__$1;
(statearr_15710_15726[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (6))){
var inst_15683 = (state_15703[(7)]);
var inst_15690 = (state_15703[(9)]);
var inst_15686 = (state_15703[(8)]);
var inst_15690__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15683,inst_15686) : f.call(null,inst_15683,inst_15686));
var inst_15691 = cljs.core.reduced_QMARK_(inst_15690__$1);
var state_15703__$1 = (function (){var statearr_15711 = state_15703;
(statearr_15711[(9)] = inst_15690__$1);

return statearr_15711;
})();
if(inst_15691){
var statearr_15712_15727 = state_15703__$1;
(statearr_15712_15727[(1)] = (8));

} else {
var statearr_15713_15728 = state_15703__$1;
(statearr_15713_15728[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (3))){
var inst_15701 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15703__$1,inst_15701);
} else {
if((state_val_15704 === (2))){
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15703__$1,(4),ch);
} else {
if((state_val_15704 === (9))){
var inst_15690 = (state_15703[(9)]);
var inst_15683 = inst_15690;
var state_15703__$1 = (function (){var statearr_15714 = state_15703;
(statearr_15714[(7)] = inst_15683);

return statearr_15714;
})();
var statearr_15715_15729 = state_15703__$1;
(statearr_15715_15729[(2)] = null);

(statearr_15715_15729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (5))){
var inst_15683 = (state_15703[(7)]);
var state_15703__$1 = state_15703;
var statearr_15716_15730 = state_15703__$1;
(statearr_15716_15730[(2)] = inst_15683);

(statearr_15716_15730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (10))){
var inst_15697 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15717_15731 = state_15703__$1;
(statearr_15717_15731[(2)] = inst_15697);

(statearr_15717_15731[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15704 === (8))){
var inst_15690 = (state_15703[(9)]);
var inst_15693 = cljs.core.deref(inst_15690);
var state_15703__$1 = state_15703;
var statearr_15718_15732 = state_15703__$1;
(statearr_15718_15732[(2)] = inst_15693);

(statearr_15718_15732[(1)] = (10));


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
});})(c__13346__auto__))
;
return ((function (switch__13163__auto__,c__13346__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13164__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13164__auto____0 = (function (){
var statearr_15719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15719[(0)] = cljs$core$async$reduce_$_state_machine__13164__auto__);

(statearr_15719[(1)] = (1));

return statearr_15719;
});
var cljs$core$async$reduce_$_state_machine__13164__auto____1 = (function (state_15703){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15703);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15720){if((e15720 instanceof Object)){
var ex__13167__auto__ = e15720;
var statearr_15721_15733 = state_15703;
(statearr_15721_15733[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15703);

return cljs.core.cst$kw$recur;
} else {
throw e15720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15734 = state_15703;
state_15703 = G__15734;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13164__auto__ = function(state_15703){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13164__auto____1.call(this,state_15703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13164__auto____0;
cljs$core$async$reduce_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13164__auto____1;
return cljs$core$async$reduce_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__))
})();
var state__13348__auto__ = (function (){var statearr_15722 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15722[(6)] = c__13346__auto__);

return statearr_15722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__))
);

return c__13346__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__,f__$1){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__,f__$1){
return (function (state_15740){
var state_val_15741 = (state_15740[(1)]);
if((state_val_15741 === (1))){
var inst_15735 = cljs.core.async.reduce(f__$1,init,ch);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(2),inst_15735);
} else {
if((state_val_15741 === (2))){
var inst_15737 = (state_15740[(2)]);
var inst_15738 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15737) : f__$1.call(null,inst_15737));
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15740__$1,inst_15738);
} else {
return null;
}
}
});})(c__13346__auto__,f__$1))
;
return ((function (switch__13163__auto__,c__13346__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13164__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13164__auto____0 = (function (){
var statearr_15742 = [null,null,null,null,null,null,null];
(statearr_15742[(0)] = cljs$core$async$transduce_$_state_machine__13164__auto__);

(statearr_15742[(1)] = (1));

return statearr_15742;
});
var cljs$core$async$transduce_$_state_machine__13164__auto____1 = (function (state_15740){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15740);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15743){if((e15743 instanceof Object)){
var ex__13167__auto__ = e15743;
var statearr_15744_15746 = state_15740;
(statearr_15744_15746[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15740);

return cljs.core.cst$kw$recur;
} else {
throw e15743;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15747 = state_15740;
state_15740 = G__15747;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13164__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13164__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13164__auto____0;
cljs$core$async$transduce_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13164__auto____1;
return cljs$core$async$transduce_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__,f__$1))
})();
var state__13348__auto__ = (function (){var statearr_15745 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15745[(6)] = c__13346__auto__);

return statearr_15745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__,f__$1))
);

return c__13346__auto__;
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
var G__15749 = arguments.length;
switch (G__15749) {
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
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__){
return (function (state_15774){
var state_val_15775 = (state_15774[(1)]);
if((state_val_15775 === (7))){
var inst_15756 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15776_15797 = state_15774__$1;
(statearr_15776_15797[(2)] = inst_15756);

(statearr_15776_15797[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (1))){
var inst_15750 = cljs.core.seq(coll);
var inst_15751 = inst_15750;
var state_15774__$1 = (function (){var statearr_15777 = state_15774;
(statearr_15777[(7)] = inst_15751);

return statearr_15777;
})();
var statearr_15778_15798 = state_15774__$1;
(statearr_15778_15798[(2)] = null);

(statearr_15778_15798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (4))){
var inst_15751 = (state_15774[(7)]);
var inst_15754 = cljs.core.first(inst_15751);
var state_15774__$1 = state_15774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15774__$1,(7),ch,inst_15754);
} else {
if((state_val_15775 === (13))){
var inst_15768 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15779_15799 = state_15774__$1;
(statearr_15779_15799[(2)] = inst_15768);

(statearr_15779_15799[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (6))){
var inst_15759 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15759)){
var statearr_15780_15800 = state_15774__$1;
(statearr_15780_15800[(1)] = (8));

} else {
var statearr_15781_15801 = state_15774__$1;
(statearr_15781_15801[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (3))){
var inst_15772 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15774__$1,inst_15772);
} else {
if((state_val_15775 === (12))){
var state_15774__$1 = state_15774;
var statearr_15782_15802 = state_15774__$1;
(statearr_15782_15802[(2)] = null);

(statearr_15782_15802[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (2))){
var inst_15751 = (state_15774[(7)]);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15751)){
var statearr_15783_15803 = state_15774__$1;
(statearr_15783_15803[(1)] = (4));

} else {
var statearr_15784_15804 = state_15774__$1;
(statearr_15784_15804[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (11))){
var inst_15765 = cljs.core.async.close_BANG_(ch);
var state_15774__$1 = state_15774;
var statearr_15785_15805 = state_15774__$1;
(statearr_15785_15805[(2)] = inst_15765);

(statearr_15785_15805[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (9))){
var state_15774__$1 = state_15774;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15786_15806 = state_15774__$1;
(statearr_15786_15806[(1)] = (11));

} else {
var statearr_15787_15807 = state_15774__$1;
(statearr_15787_15807[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (5))){
var inst_15751 = (state_15774[(7)]);
var state_15774__$1 = state_15774;
var statearr_15788_15808 = state_15774__$1;
(statearr_15788_15808[(2)] = inst_15751);

(statearr_15788_15808[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (10))){
var inst_15770 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15789_15809 = state_15774__$1;
(statearr_15789_15809[(2)] = inst_15770);

(statearr_15789_15809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15775 === (8))){
var inst_15751 = (state_15774[(7)]);
var inst_15761 = cljs.core.next(inst_15751);
var inst_15751__$1 = inst_15761;
var state_15774__$1 = (function (){var statearr_15790 = state_15774;
(statearr_15790[(7)] = inst_15751__$1);

return statearr_15790;
})();
var statearr_15791_15810 = state_15774__$1;
(statearr_15791_15810[(2)] = null);

(statearr_15791_15810[(1)] = (2));


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
});})(c__13346__auto__))
;
return ((function (switch__13163__auto__,c__13346__auto__){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_15792 = [null,null,null,null,null,null,null,null];
(statearr_15792[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_15792[(1)] = (1));

return statearr_15792;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_15774){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15774);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e15793){if((e15793 instanceof Object)){
var ex__13167__auto__ = e15793;
var statearr_15794_15811 = state_15774;
(statearr_15794_15811[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15774);

return cljs.core.cst$kw$recur;
} else {
throw e15793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__15812 = state_15774;
state_15774 = G__15812;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_15774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_15774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__))
})();
var state__13348__auto__ = (function (){var statearr_15795 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_15795[(6)] = c__13346__auto__);

return statearr_15795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__))
);

return c__13346__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15813 = (function (ch,cs,meta15814){
this.ch = ch;
this.cs = cs;
this.meta15814 = meta15814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15815,meta15814__$1){
var self__ = this;
var _15815__$1 = this;
return (new cljs.core.async.t_cljs$core$async15813(self__.ch,self__.cs,meta15814__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15815){
var self__ = this;
var _15815__$1 = this;
return self__.meta15814;
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15814], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15813";

cljs.core.async.t_cljs$core$async15813.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15813");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15813.
 */
cljs.core.async.__GT_t_cljs$core$async15813 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15813(ch__$1,cs__$1,meta15814){
return (new cljs.core.async.t_cljs$core$async15813(ch__$1,cs__$1,meta15814));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15813(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13346__auto___16035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16035,cs,m,dchan,dctr,done){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16035,cs,m,dchan,dctr,done){
return (function (state_15950){
var state_val_15951 = (state_15950[(1)]);
if((state_val_15951 === (7))){
var inst_15946 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_15952_16036 = state_15950__$1;
(statearr_15952_16036[(2)] = inst_15946);

(statearr_15952_16036[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (20))){
var inst_15849 = (state_15950[(7)]);
var inst_15861 = cljs.core.first(inst_15849);
var inst_15862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15861,(0),null);
var inst_15863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15861,(1),null);
var state_15950__$1 = (function (){var statearr_15953 = state_15950;
(statearr_15953[(8)] = inst_15862);

return statearr_15953;
})();
if(cljs.core.truth_(inst_15863)){
var statearr_15954_16037 = state_15950__$1;
(statearr_15954_16037[(1)] = (22));

} else {
var statearr_15955_16038 = state_15950__$1;
(statearr_15955_16038[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (27))){
var inst_15893 = (state_15950[(9)]);
var inst_15818 = (state_15950[(10)]);
var inst_15898 = (state_15950[(11)]);
var inst_15891 = (state_15950[(12)]);
var inst_15898__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15891,inst_15893);
var inst_15899 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15898__$1,inst_15818,done);
var state_15950__$1 = (function (){var statearr_15956 = state_15950;
(statearr_15956[(11)] = inst_15898__$1);

return statearr_15956;
})();
if(cljs.core.truth_(inst_15899)){
var statearr_15957_16039 = state_15950__$1;
(statearr_15957_16039[(1)] = (30));

} else {
var statearr_15958_16040 = state_15950__$1;
(statearr_15958_16040[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (1))){
var state_15950__$1 = state_15950;
var statearr_15959_16041 = state_15950__$1;
(statearr_15959_16041[(2)] = null);

(statearr_15959_16041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (24))){
var inst_15849 = (state_15950[(7)]);
var inst_15868 = (state_15950[(2)]);
var inst_15869 = cljs.core.next(inst_15849);
var inst_15827 = inst_15869;
var inst_15828 = null;
var inst_15829 = (0);
var inst_15830 = (0);
var state_15950__$1 = (function (){var statearr_15960 = state_15950;
(statearr_15960[(13)] = inst_15828);

(statearr_15960[(14)] = inst_15830);

(statearr_15960[(15)] = inst_15827);

(statearr_15960[(16)] = inst_15829);

(statearr_15960[(17)] = inst_15868);

return statearr_15960;
})();
var statearr_15961_16042 = state_15950__$1;
(statearr_15961_16042[(2)] = null);

(statearr_15961_16042[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (39))){
var state_15950__$1 = state_15950;
var statearr_15965_16043 = state_15950__$1;
(statearr_15965_16043[(2)] = null);

(statearr_15965_16043[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (4))){
var inst_15818 = (state_15950[(10)]);
var inst_15818__$1 = (state_15950[(2)]);
var inst_15819 = (inst_15818__$1 == null);
var state_15950__$1 = (function (){var statearr_15966 = state_15950;
(statearr_15966[(10)] = inst_15818__$1);

return statearr_15966;
})();
if(cljs.core.truth_(inst_15819)){
var statearr_15967_16044 = state_15950__$1;
(statearr_15967_16044[(1)] = (5));

} else {
var statearr_15968_16045 = state_15950__$1;
(statearr_15968_16045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (15))){
var inst_15828 = (state_15950[(13)]);
var inst_15830 = (state_15950[(14)]);
var inst_15827 = (state_15950[(15)]);
var inst_15829 = (state_15950[(16)]);
var inst_15845 = (state_15950[(2)]);
var inst_15846 = (inst_15830 + (1));
var tmp15962 = inst_15828;
var tmp15963 = inst_15827;
var tmp15964 = inst_15829;
var inst_15827__$1 = tmp15963;
var inst_15828__$1 = tmp15962;
var inst_15829__$1 = tmp15964;
var inst_15830__$1 = inst_15846;
var state_15950__$1 = (function (){var statearr_15969 = state_15950;
(statearr_15969[(13)] = inst_15828__$1);

(statearr_15969[(14)] = inst_15830__$1);

(statearr_15969[(18)] = inst_15845);

(statearr_15969[(15)] = inst_15827__$1);

(statearr_15969[(16)] = inst_15829__$1);

return statearr_15969;
})();
var statearr_15970_16046 = state_15950__$1;
(statearr_15970_16046[(2)] = null);

(statearr_15970_16046[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (21))){
var inst_15872 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_15974_16047 = state_15950__$1;
(statearr_15974_16047[(2)] = inst_15872);

(statearr_15974_16047[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (31))){
var inst_15898 = (state_15950[(11)]);
var inst_15902 = done(null);
var inst_15903 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15898);
var state_15950__$1 = (function (){var statearr_15975 = state_15950;
(statearr_15975[(19)] = inst_15902);

return statearr_15975;
})();
var statearr_15976_16048 = state_15950__$1;
(statearr_15976_16048[(2)] = inst_15903);

(statearr_15976_16048[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (32))){
var inst_15893 = (state_15950[(9)]);
var inst_15892 = (state_15950[(20)]);
var inst_15890 = (state_15950[(21)]);
var inst_15891 = (state_15950[(12)]);
var inst_15905 = (state_15950[(2)]);
var inst_15906 = (inst_15893 + (1));
var tmp15971 = inst_15892;
var tmp15972 = inst_15890;
var tmp15973 = inst_15891;
var inst_15890__$1 = tmp15972;
var inst_15891__$1 = tmp15973;
var inst_15892__$1 = tmp15971;
var inst_15893__$1 = inst_15906;
var state_15950__$1 = (function (){var statearr_15977 = state_15950;
(statearr_15977[(9)] = inst_15893__$1);

(statearr_15977[(22)] = inst_15905);

(statearr_15977[(20)] = inst_15892__$1);

(statearr_15977[(21)] = inst_15890__$1);

(statearr_15977[(12)] = inst_15891__$1);

return statearr_15977;
})();
var statearr_15978_16049 = state_15950__$1;
(statearr_15978_16049[(2)] = null);

(statearr_15978_16049[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (40))){
var inst_15918 = (state_15950[(23)]);
var inst_15922 = done(null);
var inst_15923 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15918);
var state_15950__$1 = (function (){var statearr_15979 = state_15950;
(statearr_15979[(24)] = inst_15922);

return statearr_15979;
})();
var statearr_15980_16050 = state_15950__$1;
(statearr_15980_16050[(2)] = inst_15923);

(statearr_15980_16050[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (33))){
var inst_15909 = (state_15950[(25)]);
var inst_15911 = cljs.core.chunked_seq_QMARK_(inst_15909);
var state_15950__$1 = state_15950;
if(inst_15911){
var statearr_15981_16051 = state_15950__$1;
(statearr_15981_16051[(1)] = (36));

} else {
var statearr_15982_16052 = state_15950__$1;
(statearr_15982_16052[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (13))){
var inst_15839 = (state_15950[(26)]);
var inst_15842 = cljs.core.async.close_BANG_(inst_15839);
var state_15950__$1 = state_15950;
var statearr_15983_16053 = state_15950__$1;
(statearr_15983_16053[(2)] = inst_15842);

(statearr_15983_16053[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (22))){
var inst_15862 = (state_15950[(8)]);
var inst_15865 = cljs.core.async.close_BANG_(inst_15862);
var state_15950__$1 = state_15950;
var statearr_15984_16054 = state_15950__$1;
(statearr_15984_16054[(2)] = inst_15865);

(statearr_15984_16054[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (36))){
var inst_15909 = (state_15950[(25)]);
var inst_15913 = cljs.core.chunk_first(inst_15909);
var inst_15914 = cljs.core.chunk_rest(inst_15909);
var inst_15915 = cljs.core.count(inst_15913);
var inst_15890 = inst_15914;
var inst_15891 = inst_15913;
var inst_15892 = inst_15915;
var inst_15893 = (0);
var state_15950__$1 = (function (){var statearr_15985 = state_15950;
(statearr_15985[(9)] = inst_15893);

(statearr_15985[(20)] = inst_15892);

(statearr_15985[(21)] = inst_15890);

(statearr_15985[(12)] = inst_15891);

return statearr_15985;
})();
var statearr_15986_16055 = state_15950__$1;
(statearr_15986_16055[(2)] = null);

(statearr_15986_16055[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (41))){
var inst_15909 = (state_15950[(25)]);
var inst_15925 = (state_15950[(2)]);
var inst_15926 = cljs.core.next(inst_15909);
var inst_15890 = inst_15926;
var inst_15891 = null;
var inst_15892 = (0);
var inst_15893 = (0);
var state_15950__$1 = (function (){var statearr_15987 = state_15950;
(statearr_15987[(9)] = inst_15893);

(statearr_15987[(27)] = inst_15925);

(statearr_15987[(20)] = inst_15892);

(statearr_15987[(21)] = inst_15890);

(statearr_15987[(12)] = inst_15891);

return statearr_15987;
})();
var statearr_15988_16056 = state_15950__$1;
(statearr_15988_16056[(2)] = null);

(statearr_15988_16056[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (43))){
var state_15950__$1 = state_15950;
var statearr_15989_16057 = state_15950__$1;
(statearr_15989_16057[(2)] = null);

(statearr_15989_16057[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (29))){
var inst_15934 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_15990_16058 = state_15950__$1;
(statearr_15990_16058[(2)] = inst_15934);

(statearr_15990_16058[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (44))){
var inst_15943 = (state_15950[(2)]);
var state_15950__$1 = (function (){var statearr_15991 = state_15950;
(statearr_15991[(28)] = inst_15943);

return statearr_15991;
})();
var statearr_15992_16059 = state_15950__$1;
(statearr_15992_16059[(2)] = null);

(statearr_15992_16059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (6))){
var inst_15882 = (state_15950[(29)]);
var inst_15881 = cljs.core.deref(cs);
var inst_15882__$1 = cljs.core.keys(inst_15881);
var inst_15883 = cljs.core.count(inst_15882__$1);
var inst_15884 = cljs.core.reset_BANG_(dctr,inst_15883);
var inst_15889 = cljs.core.seq(inst_15882__$1);
var inst_15890 = inst_15889;
var inst_15891 = null;
var inst_15892 = (0);
var inst_15893 = (0);
var state_15950__$1 = (function (){var statearr_15993 = state_15950;
(statearr_15993[(9)] = inst_15893);

(statearr_15993[(20)] = inst_15892);

(statearr_15993[(29)] = inst_15882__$1);

(statearr_15993[(21)] = inst_15890);

(statearr_15993[(30)] = inst_15884);

(statearr_15993[(12)] = inst_15891);

return statearr_15993;
})();
var statearr_15994_16060 = state_15950__$1;
(statearr_15994_16060[(2)] = null);

(statearr_15994_16060[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (28))){
var inst_15909 = (state_15950[(25)]);
var inst_15890 = (state_15950[(21)]);
var inst_15909__$1 = cljs.core.seq(inst_15890);
var state_15950__$1 = (function (){var statearr_15995 = state_15950;
(statearr_15995[(25)] = inst_15909__$1);

return statearr_15995;
})();
if(inst_15909__$1){
var statearr_15996_16061 = state_15950__$1;
(statearr_15996_16061[(1)] = (33));

} else {
var statearr_15997_16062 = state_15950__$1;
(statearr_15997_16062[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (25))){
var inst_15893 = (state_15950[(9)]);
var inst_15892 = (state_15950[(20)]);
var inst_15895 = (inst_15893 < inst_15892);
var inst_15896 = inst_15895;
var state_15950__$1 = state_15950;
if(cljs.core.truth_(inst_15896)){
var statearr_15998_16063 = state_15950__$1;
(statearr_15998_16063[(1)] = (27));

} else {
var statearr_15999_16064 = state_15950__$1;
(statearr_15999_16064[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (34))){
var state_15950__$1 = state_15950;
var statearr_16000_16065 = state_15950__$1;
(statearr_16000_16065[(2)] = null);

(statearr_16000_16065[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (17))){
var state_15950__$1 = state_15950;
var statearr_16001_16066 = state_15950__$1;
(statearr_16001_16066[(2)] = null);

(statearr_16001_16066[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (3))){
var inst_15948 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15950__$1,inst_15948);
} else {
if((state_val_15951 === (12))){
var inst_15877 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16002_16067 = state_15950__$1;
(statearr_16002_16067[(2)] = inst_15877);

(statearr_16002_16067[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (2))){
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15950__$1,(4),ch);
} else {
if((state_val_15951 === (23))){
var state_15950__$1 = state_15950;
var statearr_16003_16068 = state_15950__$1;
(statearr_16003_16068[(2)] = null);

(statearr_16003_16068[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (35))){
var inst_15932 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16004_16069 = state_15950__$1;
(statearr_16004_16069[(2)] = inst_15932);

(statearr_16004_16069[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (19))){
var inst_15849 = (state_15950[(7)]);
var inst_15853 = cljs.core.chunk_first(inst_15849);
var inst_15854 = cljs.core.chunk_rest(inst_15849);
var inst_15855 = cljs.core.count(inst_15853);
var inst_15827 = inst_15854;
var inst_15828 = inst_15853;
var inst_15829 = inst_15855;
var inst_15830 = (0);
var state_15950__$1 = (function (){var statearr_16005 = state_15950;
(statearr_16005[(13)] = inst_15828);

(statearr_16005[(14)] = inst_15830);

(statearr_16005[(15)] = inst_15827);

(statearr_16005[(16)] = inst_15829);

return statearr_16005;
})();
var statearr_16006_16070 = state_15950__$1;
(statearr_16006_16070[(2)] = null);

(statearr_16006_16070[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (11))){
var inst_15849 = (state_15950[(7)]);
var inst_15827 = (state_15950[(15)]);
var inst_15849__$1 = cljs.core.seq(inst_15827);
var state_15950__$1 = (function (){var statearr_16007 = state_15950;
(statearr_16007[(7)] = inst_15849__$1);

return statearr_16007;
})();
if(inst_15849__$1){
var statearr_16008_16071 = state_15950__$1;
(statearr_16008_16071[(1)] = (16));

} else {
var statearr_16009_16072 = state_15950__$1;
(statearr_16009_16072[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (9))){
var inst_15879 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16010_16073 = state_15950__$1;
(statearr_16010_16073[(2)] = inst_15879);

(statearr_16010_16073[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (5))){
var inst_15825 = cljs.core.deref(cs);
var inst_15826 = cljs.core.seq(inst_15825);
var inst_15827 = inst_15826;
var inst_15828 = null;
var inst_15829 = (0);
var inst_15830 = (0);
var state_15950__$1 = (function (){var statearr_16011 = state_15950;
(statearr_16011[(13)] = inst_15828);

(statearr_16011[(14)] = inst_15830);

(statearr_16011[(15)] = inst_15827);

(statearr_16011[(16)] = inst_15829);

return statearr_16011;
})();
var statearr_16012_16074 = state_15950__$1;
(statearr_16012_16074[(2)] = null);

(statearr_16012_16074[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (14))){
var state_15950__$1 = state_15950;
var statearr_16013_16075 = state_15950__$1;
(statearr_16013_16075[(2)] = null);

(statearr_16013_16075[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (45))){
var inst_15940 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16014_16076 = state_15950__$1;
(statearr_16014_16076[(2)] = inst_15940);

(statearr_16014_16076[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (26))){
var inst_15882 = (state_15950[(29)]);
var inst_15936 = (state_15950[(2)]);
var inst_15937 = cljs.core.seq(inst_15882);
var state_15950__$1 = (function (){var statearr_16015 = state_15950;
(statearr_16015[(31)] = inst_15936);

return statearr_16015;
})();
if(inst_15937){
var statearr_16016_16077 = state_15950__$1;
(statearr_16016_16077[(1)] = (42));

} else {
var statearr_16017_16078 = state_15950__$1;
(statearr_16017_16078[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (16))){
var inst_15849 = (state_15950[(7)]);
var inst_15851 = cljs.core.chunked_seq_QMARK_(inst_15849);
var state_15950__$1 = state_15950;
if(inst_15851){
var statearr_16018_16079 = state_15950__$1;
(statearr_16018_16079[(1)] = (19));

} else {
var statearr_16019_16080 = state_15950__$1;
(statearr_16019_16080[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (38))){
var inst_15929 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16020_16081 = state_15950__$1;
(statearr_16020_16081[(2)] = inst_15929);

(statearr_16020_16081[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (30))){
var state_15950__$1 = state_15950;
var statearr_16021_16082 = state_15950__$1;
(statearr_16021_16082[(2)] = null);

(statearr_16021_16082[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (10))){
var inst_15828 = (state_15950[(13)]);
var inst_15830 = (state_15950[(14)]);
var inst_15838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15828,inst_15830);
var inst_15839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15838,(0),null);
var inst_15840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15838,(1),null);
var state_15950__$1 = (function (){var statearr_16022 = state_15950;
(statearr_16022[(26)] = inst_15839);

return statearr_16022;
})();
if(cljs.core.truth_(inst_15840)){
var statearr_16023_16083 = state_15950__$1;
(statearr_16023_16083[(1)] = (13));

} else {
var statearr_16024_16084 = state_15950__$1;
(statearr_16024_16084[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (18))){
var inst_15875 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16025_16085 = state_15950__$1;
(statearr_16025_16085[(2)] = inst_15875);

(statearr_16025_16085[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (42))){
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15950__$1,(45),dchan);
} else {
if((state_val_15951 === (37))){
var inst_15918 = (state_15950[(23)]);
var inst_15909 = (state_15950[(25)]);
var inst_15818 = (state_15950[(10)]);
var inst_15918__$1 = cljs.core.first(inst_15909);
var inst_15919 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15918__$1,inst_15818,done);
var state_15950__$1 = (function (){var statearr_16026 = state_15950;
(statearr_16026[(23)] = inst_15918__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15919)){
var statearr_16027_16086 = state_15950__$1;
(statearr_16027_16086[(1)] = (39));

} else {
var statearr_16028_16087 = state_15950__$1;
(statearr_16028_16087[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15951 === (8))){
var inst_15830 = (state_15950[(14)]);
var inst_15829 = (state_15950[(16)]);
var inst_15832 = (inst_15830 < inst_15829);
var inst_15833 = inst_15832;
var state_15950__$1 = state_15950;
if(cljs.core.truth_(inst_15833)){
var statearr_16029_16088 = state_15950__$1;
(statearr_16029_16088[(1)] = (10));

} else {
var statearr_16030_16089 = state_15950__$1;
(statearr_16030_16089[(1)] = (11));

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
});})(c__13346__auto___16035,cs,m,dchan,dctr,done))
;
return ((function (switch__13163__auto__,c__13346__auto___16035,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13164__auto__ = null;
var cljs$core$async$mult_$_state_machine__13164__auto____0 = (function (){
var statearr_16031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16031[(0)] = cljs$core$async$mult_$_state_machine__13164__auto__);

(statearr_16031[(1)] = (1));

return statearr_16031;
});
var cljs$core$async$mult_$_state_machine__13164__auto____1 = (function (state_15950){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_15950);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16032){if((e16032 instanceof Object)){
var ex__13167__auto__ = e16032;
var statearr_16033_16090 = state_15950;
(statearr_16033_16090[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15950);

return cljs.core.cst$kw$recur;
} else {
throw e16032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16091 = state_15950;
state_15950 = G__16091;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13164__auto__ = function(state_15950){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13164__auto____1.call(this,state_15950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13164__auto____0;
cljs$core$async$mult_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13164__auto____1;
return cljs$core$async$mult_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16035,cs,m,dchan,dctr,done))
})();
var state__13348__auto__ = (function (){var statearr_16034 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16034[(6)] = c__13346__auto___16035);

return statearr_16034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16035,cs,m,dchan,dctr,done))
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
var G__16093 = arguments.length;
switch (G__16093) {
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
var len__4531__auto___16105 = arguments.length;
var i__4532__auto___16106 = (0);
while(true){
if((i__4532__auto___16106 < len__4531__auto___16105)){
args__4534__auto__.push((arguments[i__4532__auto___16106]));

var G__16107 = (i__4532__auto___16106 + (1));
i__4532__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16099){
var map__16100 = p__16099;
var map__16100__$1 = ((((!((map__16100 == null)))?(((((map__16100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16100):map__16100);
var opts = map__16100__$1;
var statearr_16102_16108 = state;
(statearr_16102_16108[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16100,map__16100__$1,opts){
return (function (val){
var statearr_16103_16109 = state;
(statearr_16103_16109[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16100,map__16100__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16104_16110 = state;
(statearr_16104_16110[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16095){
var G__16096 = cljs.core.first(seq16095);
var seq16095__$1 = cljs.core.next(seq16095);
var G__16097 = cljs.core.first(seq16095__$1);
var seq16095__$2 = cljs.core.next(seq16095__$1);
var G__16098 = cljs.core.first(seq16095__$2);
var seq16095__$3 = cljs.core.next(seq16095__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16096,G__16097,G__16098,seq16095__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16111 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16112){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16112 = meta16112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16113,meta16112__$1){
var self__ = this;
var _16113__$1 = this;
return (new cljs.core.async.t_cljs$core$async16111(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16112__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16113){
var self__ = this;
var _16113__$1 = this;
return self__.meta16112;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16111.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16112], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16111";

cljs.core.async.t_cljs$core$async16111.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16111");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16111.
 */
cljs.core.async.__GT_t_cljs$core$async16111 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16111(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16112){
return (new cljs.core.async.t_cljs$core$async16111(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16112));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16111(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13346__auto___16275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16215){
var state_val_16216 = (state_16215[(1)]);
if((state_val_16216 === (7))){
var inst_16130 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16217_16276 = state_16215__$1;
(statearr_16217_16276[(2)] = inst_16130);

(statearr_16217_16276[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (20))){
var inst_16142 = (state_16215[(7)]);
var state_16215__$1 = state_16215;
var statearr_16218_16277 = state_16215__$1;
(statearr_16218_16277[(2)] = inst_16142);

(statearr_16218_16277[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (27))){
var state_16215__$1 = state_16215;
var statearr_16219_16278 = state_16215__$1;
(statearr_16219_16278[(2)] = null);

(statearr_16219_16278[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (1))){
var inst_16117 = (state_16215[(8)]);
var inst_16117__$1 = calc_state();
var inst_16119 = (inst_16117__$1 == null);
var inst_16120 = cljs.core.not(inst_16119);
var state_16215__$1 = (function (){var statearr_16220 = state_16215;
(statearr_16220[(8)] = inst_16117__$1);

return statearr_16220;
})();
if(inst_16120){
var statearr_16221_16279 = state_16215__$1;
(statearr_16221_16279[(1)] = (2));

} else {
var statearr_16222_16280 = state_16215__$1;
(statearr_16222_16280[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (24))){
var inst_16166 = (state_16215[(9)]);
var inst_16175 = (state_16215[(10)]);
var inst_16189 = (state_16215[(11)]);
var inst_16189__$1 = (inst_16166.cljs$core$IFn$_invoke$arity$1 ? inst_16166.cljs$core$IFn$_invoke$arity$1(inst_16175) : inst_16166.call(null,inst_16175));
var state_16215__$1 = (function (){var statearr_16223 = state_16215;
(statearr_16223[(11)] = inst_16189__$1);

return statearr_16223;
})();
if(cljs.core.truth_(inst_16189__$1)){
var statearr_16224_16281 = state_16215__$1;
(statearr_16224_16281[(1)] = (29));

} else {
var statearr_16225_16282 = state_16215__$1;
(statearr_16225_16282[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (4))){
var inst_16133 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16133)){
var statearr_16226_16283 = state_16215__$1;
(statearr_16226_16283[(1)] = (8));

} else {
var statearr_16227_16284 = state_16215__$1;
(statearr_16227_16284[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (15))){
var inst_16160 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16160)){
var statearr_16228_16285 = state_16215__$1;
(statearr_16228_16285[(1)] = (19));

} else {
var statearr_16229_16286 = state_16215__$1;
(statearr_16229_16286[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (21))){
var inst_16165 = (state_16215[(12)]);
var inst_16165__$1 = (state_16215[(2)]);
var inst_16166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165__$1,cljs.core.cst$kw$solos);
var inst_16167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165__$1,cljs.core.cst$kw$mutes);
var inst_16168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165__$1,cljs.core.cst$kw$reads);
var state_16215__$1 = (function (){var statearr_16230 = state_16215;
(statearr_16230[(9)] = inst_16166);

(statearr_16230[(12)] = inst_16165__$1);

(statearr_16230[(13)] = inst_16167);

return statearr_16230;
})();
return cljs.core.async.ioc_alts_BANG_(state_16215__$1,(22),inst_16168);
} else {
if((state_val_16216 === (31))){
var inst_16197 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16197)){
var statearr_16231_16287 = state_16215__$1;
(statearr_16231_16287[(1)] = (32));

} else {
var statearr_16232_16288 = state_16215__$1;
(statearr_16232_16288[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (32))){
var inst_16174 = (state_16215[(14)]);
var state_16215__$1 = state_16215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16215__$1,(35),out,inst_16174);
} else {
if((state_val_16216 === (33))){
var inst_16165 = (state_16215[(12)]);
var inst_16142 = inst_16165;
var state_16215__$1 = (function (){var statearr_16233 = state_16215;
(statearr_16233[(7)] = inst_16142);

return statearr_16233;
})();
var statearr_16234_16289 = state_16215__$1;
(statearr_16234_16289[(2)] = null);

(statearr_16234_16289[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (13))){
var inst_16142 = (state_16215[(7)]);
var inst_16149 = inst_16142.cljs$lang$protocol_mask$partition0$;
var inst_16150 = (inst_16149 & (64));
var inst_16151 = inst_16142.cljs$core$ISeq$;
var inst_16152 = (cljs.core.PROTOCOL_SENTINEL === inst_16151);
var inst_16153 = ((inst_16150) || (inst_16152));
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16153)){
var statearr_16235_16290 = state_16215__$1;
(statearr_16235_16290[(1)] = (16));

} else {
var statearr_16236_16291 = state_16215__$1;
(statearr_16236_16291[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (22))){
var inst_16175 = (state_16215[(10)]);
var inst_16174 = (state_16215[(14)]);
var inst_16173 = (state_16215[(2)]);
var inst_16174__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16173,(0),null);
var inst_16175__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16173,(1),null);
var inst_16176 = (inst_16174__$1 == null);
var inst_16177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16175__$1,change);
var inst_16178 = ((inst_16176) || (inst_16177));
var state_16215__$1 = (function (){var statearr_16237 = state_16215;
(statearr_16237[(10)] = inst_16175__$1);

(statearr_16237[(14)] = inst_16174__$1);

return statearr_16237;
})();
if(cljs.core.truth_(inst_16178)){
var statearr_16238_16292 = state_16215__$1;
(statearr_16238_16292[(1)] = (23));

} else {
var statearr_16239_16293 = state_16215__$1;
(statearr_16239_16293[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (36))){
var inst_16165 = (state_16215[(12)]);
var inst_16142 = inst_16165;
var state_16215__$1 = (function (){var statearr_16240 = state_16215;
(statearr_16240[(7)] = inst_16142);

return statearr_16240;
})();
var statearr_16241_16294 = state_16215__$1;
(statearr_16241_16294[(2)] = null);

(statearr_16241_16294[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (29))){
var inst_16189 = (state_16215[(11)]);
var state_16215__$1 = state_16215;
var statearr_16242_16295 = state_16215__$1;
(statearr_16242_16295[(2)] = inst_16189);

(statearr_16242_16295[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (6))){
var state_16215__$1 = state_16215;
var statearr_16243_16296 = state_16215__$1;
(statearr_16243_16296[(2)] = false);

(statearr_16243_16296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (28))){
var inst_16185 = (state_16215[(2)]);
var inst_16186 = calc_state();
var inst_16142 = inst_16186;
var state_16215__$1 = (function (){var statearr_16244 = state_16215;
(statearr_16244[(7)] = inst_16142);

(statearr_16244[(15)] = inst_16185);

return statearr_16244;
})();
var statearr_16245_16297 = state_16215__$1;
(statearr_16245_16297[(2)] = null);

(statearr_16245_16297[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (25))){
var inst_16211 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16246_16298 = state_16215__$1;
(statearr_16246_16298[(2)] = inst_16211);

(statearr_16246_16298[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (34))){
var inst_16209 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16247_16299 = state_16215__$1;
(statearr_16247_16299[(2)] = inst_16209);

(statearr_16247_16299[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (17))){
var state_16215__$1 = state_16215;
var statearr_16248_16300 = state_16215__$1;
(statearr_16248_16300[(2)] = false);

(statearr_16248_16300[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (3))){
var state_16215__$1 = state_16215;
var statearr_16249_16301 = state_16215__$1;
(statearr_16249_16301[(2)] = false);

(statearr_16249_16301[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (12))){
var inst_16213 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16215__$1,inst_16213);
} else {
if((state_val_16216 === (2))){
var inst_16117 = (state_16215[(8)]);
var inst_16122 = inst_16117.cljs$lang$protocol_mask$partition0$;
var inst_16123 = (inst_16122 & (64));
var inst_16124 = inst_16117.cljs$core$ISeq$;
var inst_16125 = (cljs.core.PROTOCOL_SENTINEL === inst_16124);
var inst_16126 = ((inst_16123) || (inst_16125));
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16126)){
var statearr_16250_16302 = state_16215__$1;
(statearr_16250_16302[(1)] = (5));

} else {
var statearr_16251_16303 = state_16215__$1;
(statearr_16251_16303[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (23))){
var inst_16174 = (state_16215[(14)]);
var inst_16180 = (inst_16174 == null);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16180)){
var statearr_16252_16304 = state_16215__$1;
(statearr_16252_16304[(1)] = (26));

} else {
var statearr_16253_16305 = state_16215__$1;
(statearr_16253_16305[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (35))){
var inst_16200 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16200)){
var statearr_16254_16306 = state_16215__$1;
(statearr_16254_16306[(1)] = (36));

} else {
var statearr_16255_16307 = state_16215__$1;
(statearr_16255_16307[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (19))){
var inst_16142 = (state_16215[(7)]);
var inst_16162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16142);
var state_16215__$1 = state_16215;
var statearr_16256_16308 = state_16215__$1;
(statearr_16256_16308[(2)] = inst_16162);

(statearr_16256_16308[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (11))){
var inst_16142 = (state_16215[(7)]);
var inst_16146 = (inst_16142 == null);
var inst_16147 = cljs.core.not(inst_16146);
var state_16215__$1 = state_16215;
if(inst_16147){
var statearr_16257_16309 = state_16215__$1;
(statearr_16257_16309[(1)] = (13));

} else {
var statearr_16258_16310 = state_16215__$1;
(statearr_16258_16310[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (9))){
var inst_16117 = (state_16215[(8)]);
var state_16215__$1 = state_16215;
var statearr_16259_16311 = state_16215__$1;
(statearr_16259_16311[(2)] = inst_16117);

(statearr_16259_16311[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (5))){
var state_16215__$1 = state_16215;
var statearr_16260_16312 = state_16215__$1;
(statearr_16260_16312[(2)] = true);

(statearr_16260_16312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (14))){
var state_16215__$1 = state_16215;
var statearr_16261_16313 = state_16215__$1;
(statearr_16261_16313[(2)] = false);

(statearr_16261_16313[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (26))){
var inst_16175 = (state_16215[(10)]);
var inst_16182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16175);
var state_16215__$1 = state_16215;
var statearr_16262_16314 = state_16215__$1;
(statearr_16262_16314[(2)] = inst_16182);

(statearr_16262_16314[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (16))){
var state_16215__$1 = state_16215;
var statearr_16263_16315 = state_16215__$1;
(statearr_16263_16315[(2)] = true);

(statearr_16263_16315[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (38))){
var inst_16205 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16264_16316 = state_16215__$1;
(statearr_16264_16316[(2)] = inst_16205);

(statearr_16264_16316[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (30))){
var inst_16166 = (state_16215[(9)]);
var inst_16175 = (state_16215[(10)]);
var inst_16167 = (state_16215[(13)]);
var inst_16192 = cljs.core.empty_QMARK_(inst_16166);
var inst_16193 = (inst_16167.cljs$core$IFn$_invoke$arity$1 ? inst_16167.cljs$core$IFn$_invoke$arity$1(inst_16175) : inst_16167.call(null,inst_16175));
var inst_16194 = cljs.core.not(inst_16193);
var inst_16195 = ((inst_16192) && (inst_16194));
var state_16215__$1 = state_16215;
var statearr_16265_16317 = state_16215__$1;
(statearr_16265_16317[(2)] = inst_16195);

(statearr_16265_16317[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (10))){
var inst_16117 = (state_16215[(8)]);
var inst_16138 = (state_16215[(2)]);
var inst_16139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16138,cljs.core.cst$kw$solos);
var inst_16140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16138,cljs.core.cst$kw$mutes);
var inst_16141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16138,cljs.core.cst$kw$reads);
var inst_16142 = inst_16117;
var state_16215__$1 = (function (){var statearr_16266 = state_16215;
(statearr_16266[(16)] = inst_16139);

(statearr_16266[(7)] = inst_16142);

(statearr_16266[(17)] = inst_16141);

(statearr_16266[(18)] = inst_16140);

return statearr_16266;
})();
var statearr_16267_16318 = state_16215__$1;
(statearr_16267_16318[(2)] = null);

(statearr_16267_16318[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (18))){
var inst_16157 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16268_16319 = state_16215__$1;
(statearr_16268_16319[(2)] = inst_16157);

(statearr_16268_16319[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (37))){
var state_16215__$1 = state_16215;
var statearr_16269_16320 = state_16215__$1;
(statearr_16269_16320[(2)] = null);

(statearr_16269_16320[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16216 === (8))){
var inst_16117 = (state_16215[(8)]);
var inst_16135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16117);
var state_16215__$1 = state_16215;
var statearr_16270_16321 = state_16215__$1;
(statearr_16270_16321[(2)] = inst_16135);

(statearr_16270_16321[(1)] = (10));


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
});})(c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13163__auto__,c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13164__auto__ = null;
var cljs$core$async$mix_$_state_machine__13164__auto____0 = (function (){
var statearr_16271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16271[(0)] = cljs$core$async$mix_$_state_machine__13164__auto__);

(statearr_16271[(1)] = (1));

return statearr_16271;
});
var cljs$core$async$mix_$_state_machine__13164__auto____1 = (function (state_16215){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16215);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16272){if((e16272 instanceof Object)){
var ex__13167__auto__ = e16272;
var statearr_16273_16322 = state_16215;
(statearr_16273_16322[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16215);

return cljs.core.cst$kw$recur;
} else {
throw e16272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16323 = state_16215;
state_16215 = G__16323;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13164__auto__ = function(state_16215){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13164__auto____1.call(this,state_16215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13164__auto____0;
cljs$core$async$mix_$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13164__auto____1;
return cljs$core$async$mix_$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13348__auto__ = (function (){var statearr_16274 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16274[(6)] = c__13346__auto___16275);

return statearr_16274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16325 = arguments.length;
switch (G__16325) {
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
var G__16329 = arguments.length;
switch (G__16329) {
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
return (function (p1__16327_SHARP_){
if(cljs.core.truth_((p1__16327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16327_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16327_SHARP_.call(null,topic)))){
return p1__16327_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16327_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16330 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16331){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16331 = meta16331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16332,meta16331__$1){
var self__ = this;
var _16332__$1 = this;
return (new cljs.core.async.t_cljs$core$async16330(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16331__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16332){
var self__ = this;
var _16332__$1 = this;
return self__.meta16331;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16331], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16330";

cljs.core.async.t_cljs$core$async16330.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16330");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16330.
 */
cljs.core.async.__GT_t_cljs$core$async16330 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16331){
return (new cljs.core.async.t_cljs$core$async16330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16331));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16330(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13346__auto___16450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16450,mults,ensure_mult,p){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16450,mults,ensure_mult,p){
return (function (state_16404){
var state_val_16405 = (state_16404[(1)]);
if((state_val_16405 === (7))){
var inst_16400 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16406_16451 = state_16404__$1;
(statearr_16406_16451[(2)] = inst_16400);

(statearr_16406_16451[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (20))){
var state_16404__$1 = state_16404;
var statearr_16407_16452 = state_16404__$1;
(statearr_16407_16452[(2)] = null);

(statearr_16407_16452[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (1))){
var state_16404__$1 = state_16404;
var statearr_16408_16453 = state_16404__$1;
(statearr_16408_16453[(2)] = null);

(statearr_16408_16453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (24))){
var inst_16383 = (state_16404[(7)]);
var inst_16392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16383);
var state_16404__$1 = state_16404;
var statearr_16409_16454 = state_16404__$1;
(statearr_16409_16454[(2)] = inst_16392);

(statearr_16409_16454[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (4))){
var inst_16335 = (state_16404[(8)]);
var inst_16335__$1 = (state_16404[(2)]);
var inst_16336 = (inst_16335__$1 == null);
var state_16404__$1 = (function (){var statearr_16410 = state_16404;
(statearr_16410[(8)] = inst_16335__$1);

return statearr_16410;
})();
if(cljs.core.truth_(inst_16336)){
var statearr_16411_16455 = state_16404__$1;
(statearr_16411_16455[(1)] = (5));

} else {
var statearr_16412_16456 = state_16404__$1;
(statearr_16412_16456[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (15))){
var inst_16377 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16413_16457 = state_16404__$1;
(statearr_16413_16457[(2)] = inst_16377);

(statearr_16413_16457[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (21))){
var inst_16397 = (state_16404[(2)]);
var state_16404__$1 = (function (){var statearr_16414 = state_16404;
(statearr_16414[(9)] = inst_16397);

return statearr_16414;
})();
var statearr_16415_16458 = state_16404__$1;
(statearr_16415_16458[(2)] = null);

(statearr_16415_16458[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (13))){
var inst_16359 = (state_16404[(10)]);
var inst_16361 = cljs.core.chunked_seq_QMARK_(inst_16359);
var state_16404__$1 = state_16404;
if(inst_16361){
var statearr_16416_16459 = state_16404__$1;
(statearr_16416_16459[(1)] = (16));

} else {
var statearr_16417_16460 = state_16404__$1;
(statearr_16417_16460[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (22))){
var inst_16389 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
if(cljs.core.truth_(inst_16389)){
var statearr_16418_16461 = state_16404__$1;
(statearr_16418_16461[(1)] = (23));

} else {
var statearr_16419_16462 = state_16404__$1;
(statearr_16419_16462[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (6))){
var inst_16383 = (state_16404[(7)]);
var inst_16335 = (state_16404[(8)]);
var inst_16385 = (state_16404[(11)]);
var inst_16383__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16335) : topic_fn.call(null,inst_16335));
var inst_16384 = cljs.core.deref(mults);
var inst_16385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16384,inst_16383__$1);
var state_16404__$1 = (function (){var statearr_16420 = state_16404;
(statearr_16420[(7)] = inst_16383__$1);

(statearr_16420[(11)] = inst_16385__$1);

return statearr_16420;
})();
if(cljs.core.truth_(inst_16385__$1)){
var statearr_16421_16463 = state_16404__$1;
(statearr_16421_16463[(1)] = (19));

} else {
var statearr_16422_16464 = state_16404__$1;
(statearr_16422_16464[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (25))){
var inst_16394 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16423_16465 = state_16404__$1;
(statearr_16423_16465[(2)] = inst_16394);

(statearr_16423_16465[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (17))){
var inst_16359 = (state_16404[(10)]);
var inst_16368 = cljs.core.first(inst_16359);
var inst_16369 = cljs.core.async.muxch_STAR_(inst_16368);
var inst_16370 = cljs.core.async.close_BANG_(inst_16369);
var inst_16371 = cljs.core.next(inst_16359);
var inst_16345 = inst_16371;
var inst_16346 = null;
var inst_16347 = (0);
var inst_16348 = (0);
var state_16404__$1 = (function (){var statearr_16424 = state_16404;
(statearr_16424[(12)] = inst_16345);

(statearr_16424[(13)] = inst_16347);

(statearr_16424[(14)] = inst_16370);

(statearr_16424[(15)] = inst_16348);

(statearr_16424[(16)] = inst_16346);

return statearr_16424;
})();
var statearr_16425_16466 = state_16404__$1;
(statearr_16425_16466[(2)] = null);

(statearr_16425_16466[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (3))){
var inst_16402 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16404__$1,inst_16402);
} else {
if((state_val_16405 === (12))){
var inst_16379 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16426_16467 = state_16404__$1;
(statearr_16426_16467[(2)] = inst_16379);

(statearr_16426_16467[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (2))){
var state_16404__$1 = state_16404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16404__$1,(4),ch);
} else {
if((state_val_16405 === (23))){
var state_16404__$1 = state_16404;
var statearr_16427_16468 = state_16404__$1;
(statearr_16427_16468[(2)] = null);

(statearr_16427_16468[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (19))){
var inst_16335 = (state_16404[(8)]);
var inst_16385 = (state_16404[(11)]);
var inst_16387 = cljs.core.async.muxch_STAR_(inst_16385);
var state_16404__$1 = state_16404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16404__$1,(22),inst_16387,inst_16335);
} else {
if((state_val_16405 === (11))){
var inst_16359 = (state_16404[(10)]);
var inst_16345 = (state_16404[(12)]);
var inst_16359__$1 = cljs.core.seq(inst_16345);
var state_16404__$1 = (function (){var statearr_16428 = state_16404;
(statearr_16428[(10)] = inst_16359__$1);

return statearr_16428;
})();
if(inst_16359__$1){
var statearr_16429_16469 = state_16404__$1;
(statearr_16429_16469[(1)] = (13));

} else {
var statearr_16430_16470 = state_16404__$1;
(statearr_16430_16470[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (9))){
var inst_16381 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16431_16471 = state_16404__$1;
(statearr_16431_16471[(2)] = inst_16381);

(statearr_16431_16471[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (5))){
var inst_16342 = cljs.core.deref(mults);
var inst_16343 = cljs.core.vals(inst_16342);
var inst_16344 = cljs.core.seq(inst_16343);
var inst_16345 = inst_16344;
var inst_16346 = null;
var inst_16347 = (0);
var inst_16348 = (0);
var state_16404__$1 = (function (){var statearr_16432 = state_16404;
(statearr_16432[(12)] = inst_16345);

(statearr_16432[(13)] = inst_16347);

(statearr_16432[(15)] = inst_16348);

(statearr_16432[(16)] = inst_16346);

return statearr_16432;
})();
var statearr_16433_16472 = state_16404__$1;
(statearr_16433_16472[(2)] = null);

(statearr_16433_16472[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (14))){
var state_16404__$1 = state_16404;
var statearr_16437_16473 = state_16404__$1;
(statearr_16437_16473[(2)] = null);

(statearr_16437_16473[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (16))){
var inst_16359 = (state_16404[(10)]);
var inst_16363 = cljs.core.chunk_first(inst_16359);
var inst_16364 = cljs.core.chunk_rest(inst_16359);
var inst_16365 = cljs.core.count(inst_16363);
var inst_16345 = inst_16364;
var inst_16346 = inst_16363;
var inst_16347 = inst_16365;
var inst_16348 = (0);
var state_16404__$1 = (function (){var statearr_16438 = state_16404;
(statearr_16438[(12)] = inst_16345);

(statearr_16438[(13)] = inst_16347);

(statearr_16438[(15)] = inst_16348);

(statearr_16438[(16)] = inst_16346);

return statearr_16438;
})();
var statearr_16439_16474 = state_16404__$1;
(statearr_16439_16474[(2)] = null);

(statearr_16439_16474[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (10))){
var inst_16345 = (state_16404[(12)]);
var inst_16347 = (state_16404[(13)]);
var inst_16348 = (state_16404[(15)]);
var inst_16346 = (state_16404[(16)]);
var inst_16353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16346,inst_16348);
var inst_16354 = cljs.core.async.muxch_STAR_(inst_16353);
var inst_16355 = cljs.core.async.close_BANG_(inst_16354);
var inst_16356 = (inst_16348 + (1));
var tmp16434 = inst_16345;
var tmp16435 = inst_16347;
var tmp16436 = inst_16346;
var inst_16345__$1 = tmp16434;
var inst_16346__$1 = tmp16436;
var inst_16347__$1 = tmp16435;
var inst_16348__$1 = inst_16356;
var state_16404__$1 = (function (){var statearr_16440 = state_16404;
(statearr_16440[(12)] = inst_16345__$1);

(statearr_16440[(17)] = inst_16355);

(statearr_16440[(13)] = inst_16347__$1);

(statearr_16440[(15)] = inst_16348__$1);

(statearr_16440[(16)] = inst_16346__$1);

return statearr_16440;
})();
var statearr_16441_16475 = state_16404__$1;
(statearr_16441_16475[(2)] = null);

(statearr_16441_16475[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (18))){
var inst_16374 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16442_16476 = state_16404__$1;
(statearr_16442_16476[(2)] = inst_16374);

(statearr_16442_16476[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (8))){
var inst_16347 = (state_16404[(13)]);
var inst_16348 = (state_16404[(15)]);
var inst_16350 = (inst_16348 < inst_16347);
var inst_16351 = inst_16350;
var state_16404__$1 = state_16404;
if(cljs.core.truth_(inst_16351)){
var statearr_16443_16477 = state_16404__$1;
(statearr_16443_16477[(1)] = (10));

} else {
var statearr_16444_16478 = state_16404__$1;
(statearr_16444_16478[(1)] = (11));

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
});})(c__13346__auto___16450,mults,ensure_mult,p))
;
return ((function (switch__13163__auto__,c__13346__auto___16450,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16445[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16445[(1)] = (1));

return statearr_16445;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16404){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16404);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object)){
var ex__13167__auto__ = e16446;
var statearr_16447_16479 = state_16404;
(statearr_16447_16479[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16404);

return cljs.core.cst$kw$recur;
} else {
throw e16446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16480 = state_16404;
state_16404 = G__16480;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16450,mults,ensure_mult,p))
})();
var state__13348__auto__ = (function (){var statearr_16448 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16448[(6)] = c__13346__auto___16450);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16450,mults,ensure_mult,p))
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
var G__16482 = arguments.length;
switch (G__16482) {
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
var G__16485 = arguments.length;
switch (G__16485) {
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
var G__16488 = arguments.length;
switch (G__16488) {
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
var c__13346__auto___16555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16527){
var state_val_16528 = (state_16527[(1)]);
if((state_val_16528 === (7))){
var state_16527__$1 = state_16527;
var statearr_16529_16556 = state_16527__$1;
(statearr_16529_16556[(2)] = null);

(statearr_16529_16556[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (1))){
var state_16527__$1 = state_16527;
var statearr_16530_16557 = state_16527__$1;
(statearr_16530_16557[(2)] = null);

(statearr_16530_16557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (4))){
var inst_16491 = (state_16527[(7)]);
var inst_16493 = (inst_16491 < cnt);
var state_16527__$1 = state_16527;
if(cljs.core.truth_(inst_16493)){
var statearr_16531_16558 = state_16527__$1;
(statearr_16531_16558[(1)] = (6));

} else {
var statearr_16532_16559 = state_16527__$1;
(statearr_16532_16559[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (15))){
var inst_16523 = (state_16527[(2)]);
var state_16527__$1 = state_16527;
var statearr_16533_16560 = state_16527__$1;
(statearr_16533_16560[(2)] = inst_16523);

(statearr_16533_16560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (13))){
var inst_16516 = cljs.core.async.close_BANG_(out);
var state_16527__$1 = state_16527;
var statearr_16534_16561 = state_16527__$1;
(statearr_16534_16561[(2)] = inst_16516);

(statearr_16534_16561[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (6))){
var state_16527__$1 = state_16527;
var statearr_16535_16562 = state_16527__$1;
(statearr_16535_16562[(2)] = null);

(statearr_16535_16562[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (3))){
var inst_16525 = (state_16527[(2)]);
var state_16527__$1 = state_16527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16527__$1,inst_16525);
} else {
if((state_val_16528 === (12))){
var inst_16513 = (state_16527[(8)]);
var inst_16513__$1 = (state_16527[(2)]);
var inst_16514 = cljs.core.some(cljs.core.nil_QMARK_,inst_16513__$1);
var state_16527__$1 = (function (){var statearr_16536 = state_16527;
(statearr_16536[(8)] = inst_16513__$1);

return statearr_16536;
})();
if(cljs.core.truth_(inst_16514)){
var statearr_16537_16563 = state_16527__$1;
(statearr_16537_16563[(1)] = (13));

} else {
var statearr_16538_16564 = state_16527__$1;
(statearr_16538_16564[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (2))){
var inst_16490 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16491 = (0);
var state_16527__$1 = (function (){var statearr_16539 = state_16527;
(statearr_16539[(7)] = inst_16491);

(statearr_16539[(9)] = inst_16490);

return statearr_16539;
})();
var statearr_16540_16565 = state_16527__$1;
(statearr_16540_16565[(2)] = null);

(statearr_16540_16565[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (11))){
var inst_16491 = (state_16527[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16527,(10),Object,null,(9));
var inst_16500 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16491) : chs__$1.call(null,inst_16491));
var inst_16501 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16491) : done.call(null,inst_16491));
var inst_16502 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16500,inst_16501);
var state_16527__$1 = state_16527;
var statearr_16541_16566 = state_16527__$1;
(statearr_16541_16566[(2)] = inst_16502);


cljs.core.async.impl.ioc_helpers.process_exception(state_16527__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (9))){
var inst_16491 = (state_16527[(7)]);
var inst_16504 = (state_16527[(2)]);
var inst_16505 = (inst_16491 + (1));
var inst_16491__$1 = inst_16505;
var state_16527__$1 = (function (){var statearr_16542 = state_16527;
(statearr_16542[(7)] = inst_16491__$1);

(statearr_16542[(10)] = inst_16504);

return statearr_16542;
})();
var statearr_16543_16567 = state_16527__$1;
(statearr_16543_16567[(2)] = null);

(statearr_16543_16567[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (5))){
var inst_16511 = (state_16527[(2)]);
var state_16527__$1 = (function (){var statearr_16544 = state_16527;
(statearr_16544[(11)] = inst_16511);

return statearr_16544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16527__$1,(12),dchan);
} else {
if((state_val_16528 === (14))){
var inst_16513 = (state_16527[(8)]);
var inst_16518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16513);
var state_16527__$1 = state_16527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16527__$1,(16),out,inst_16518);
} else {
if((state_val_16528 === (16))){
var inst_16520 = (state_16527[(2)]);
var state_16527__$1 = (function (){var statearr_16545 = state_16527;
(statearr_16545[(12)] = inst_16520);

return statearr_16545;
})();
var statearr_16546_16568 = state_16527__$1;
(statearr_16546_16568[(2)] = null);

(statearr_16546_16568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (10))){
var inst_16495 = (state_16527[(2)]);
var inst_16496 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16527__$1 = (function (){var statearr_16547 = state_16527;
(statearr_16547[(13)] = inst_16495);

return statearr_16547;
})();
var statearr_16548_16569 = state_16527__$1;
(statearr_16548_16569[(2)] = inst_16496);


cljs.core.async.impl.ioc_helpers.process_exception(state_16527__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16528 === (8))){
var inst_16509 = (state_16527[(2)]);
var state_16527__$1 = state_16527;
var statearr_16549_16570 = state_16527__$1;
(statearr_16549_16570[(2)] = inst_16509);

(statearr_16549_16570[(1)] = (5));


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
});})(c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13163__auto__,c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16550[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16550[(1)] = (1));

return statearr_16550;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16527){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16527);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16551){if((e16551 instanceof Object)){
var ex__13167__auto__ = e16551;
var statearr_16552_16571 = state_16527;
(statearr_16552_16571[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16527);

return cljs.core.cst$kw$recur;
} else {
throw e16551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16572 = state_16527;
state_16527 = G__16572;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13348__auto__ = (function (){var statearr_16553 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16553[(6)] = c__13346__auto___16555);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16555,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16575 = arguments.length;
switch (G__16575) {
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
var c__13346__auto___16629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16629,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16629,out){
return (function (state_16607){
var state_val_16608 = (state_16607[(1)]);
if((state_val_16608 === (7))){
var inst_16587 = (state_16607[(7)]);
var inst_16586 = (state_16607[(8)]);
var inst_16586__$1 = (state_16607[(2)]);
var inst_16587__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16586__$1,(0),null);
var inst_16588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16586__$1,(1),null);
var inst_16589 = (inst_16587__$1 == null);
var state_16607__$1 = (function (){var statearr_16609 = state_16607;
(statearr_16609[(7)] = inst_16587__$1);

(statearr_16609[(9)] = inst_16588);

(statearr_16609[(8)] = inst_16586__$1);

return statearr_16609;
})();
if(cljs.core.truth_(inst_16589)){
var statearr_16610_16630 = state_16607__$1;
(statearr_16610_16630[(1)] = (8));

} else {
var statearr_16611_16631 = state_16607__$1;
(statearr_16611_16631[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (1))){
var inst_16576 = cljs.core.vec(chs);
var inst_16577 = inst_16576;
var state_16607__$1 = (function (){var statearr_16612 = state_16607;
(statearr_16612[(10)] = inst_16577);

return statearr_16612;
})();
var statearr_16613_16632 = state_16607__$1;
(statearr_16613_16632[(2)] = null);

(statearr_16613_16632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (4))){
var inst_16577 = (state_16607[(10)]);
var state_16607__$1 = state_16607;
return cljs.core.async.ioc_alts_BANG_(state_16607__$1,(7),inst_16577);
} else {
if((state_val_16608 === (6))){
var inst_16603 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16614_16633 = state_16607__$1;
(statearr_16614_16633[(2)] = inst_16603);

(statearr_16614_16633[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (3))){
var inst_16605 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16607__$1,inst_16605);
} else {
if((state_val_16608 === (2))){
var inst_16577 = (state_16607[(10)]);
var inst_16579 = cljs.core.count(inst_16577);
var inst_16580 = (inst_16579 > (0));
var state_16607__$1 = state_16607;
if(cljs.core.truth_(inst_16580)){
var statearr_16616_16634 = state_16607__$1;
(statearr_16616_16634[(1)] = (4));

} else {
var statearr_16617_16635 = state_16607__$1;
(statearr_16617_16635[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (11))){
var inst_16577 = (state_16607[(10)]);
var inst_16596 = (state_16607[(2)]);
var tmp16615 = inst_16577;
var inst_16577__$1 = tmp16615;
var state_16607__$1 = (function (){var statearr_16618 = state_16607;
(statearr_16618[(10)] = inst_16577__$1);

(statearr_16618[(11)] = inst_16596);

return statearr_16618;
})();
var statearr_16619_16636 = state_16607__$1;
(statearr_16619_16636[(2)] = null);

(statearr_16619_16636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (9))){
var inst_16587 = (state_16607[(7)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16607__$1,(11),out,inst_16587);
} else {
if((state_val_16608 === (5))){
var inst_16601 = cljs.core.async.close_BANG_(out);
var state_16607__$1 = state_16607;
var statearr_16620_16637 = state_16607__$1;
(statearr_16620_16637[(2)] = inst_16601);

(statearr_16620_16637[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (10))){
var inst_16599 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16621_16638 = state_16607__$1;
(statearr_16621_16638[(2)] = inst_16599);

(statearr_16621_16638[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16608 === (8))){
var inst_16577 = (state_16607[(10)]);
var inst_16587 = (state_16607[(7)]);
var inst_16588 = (state_16607[(9)]);
var inst_16586 = (state_16607[(8)]);
var inst_16591 = (function (){var cs = inst_16577;
var vec__16582 = inst_16586;
var v = inst_16587;
var c = inst_16588;
return ((function (cs,vec__16582,v,c,inst_16577,inst_16587,inst_16588,inst_16586,state_val_16608,c__13346__auto___16629,out){
return (function (p1__16573_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16573_SHARP_);
});
;})(cs,vec__16582,v,c,inst_16577,inst_16587,inst_16588,inst_16586,state_val_16608,c__13346__auto___16629,out))
})();
var inst_16592 = cljs.core.filterv(inst_16591,inst_16577);
var inst_16577__$1 = inst_16592;
var state_16607__$1 = (function (){var statearr_16622 = state_16607;
(statearr_16622[(10)] = inst_16577__$1);

return statearr_16622;
})();
var statearr_16623_16639 = state_16607__$1;
(statearr_16623_16639[(2)] = null);

(statearr_16623_16639[(1)] = (2));


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
});})(c__13346__auto___16629,out))
;
return ((function (switch__13163__auto__,c__13346__auto___16629,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16607){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16607);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16625){if((e16625 instanceof Object)){
var ex__13167__auto__ = e16625;
var statearr_16626_16640 = state_16607;
(statearr_16626_16640[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16607);

return cljs.core.cst$kw$recur;
} else {
throw e16625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16641 = state_16607;
state_16607 = G__16641;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16629,out))
})();
var state__13348__auto__ = (function (){var statearr_16627 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16627[(6)] = c__13346__auto___16629);

return statearr_16627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16629,out))
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
var G__16643 = arguments.length;
switch (G__16643) {
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
var c__13346__auto___16688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16688,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16688,out){
return (function (state_16667){
var state_val_16668 = (state_16667[(1)]);
if((state_val_16668 === (7))){
var inst_16649 = (state_16667[(7)]);
var inst_16649__$1 = (state_16667[(2)]);
var inst_16650 = (inst_16649__$1 == null);
var inst_16651 = cljs.core.not(inst_16650);
var state_16667__$1 = (function (){var statearr_16669 = state_16667;
(statearr_16669[(7)] = inst_16649__$1);

return statearr_16669;
})();
if(inst_16651){
var statearr_16670_16689 = state_16667__$1;
(statearr_16670_16689[(1)] = (8));

} else {
var statearr_16671_16690 = state_16667__$1;
(statearr_16671_16690[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (1))){
var inst_16644 = (0);
var state_16667__$1 = (function (){var statearr_16672 = state_16667;
(statearr_16672[(8)] = inst_16644);

return statearr_16672;
})();
var statearr_16673_16691 = state_16667__$1;
(statearr_16673_16691[(2)] = null);

(statearr_16673_16691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (4))){
var state_16667__$1 = state_16667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16667__$1,(7),ch);
} else {
if((state_val_16668 === (6))){
var inst_16662 = (state_16667[(2)]);
var state_16667__$1 = state_16667;
var statearr_16674_16692 = state_16667__$1;
(statearr_16674_16692[(2)] = inst_16662);

(statearr_16674_16692[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (3))){
var inst_16664 = (state_16667[(2)]);
var inst_16665 = cljs.core.async.close_BANG_(out);
var state_16667__$1 = (function (){var statearr_16675 = state_16667;
(statearr_16675[(9)] = inst_16664);

return statearr_16675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16667__$1,inst_16665);
} else {
if((state_val_16668 === (2))){
var inst_16644 = (state_16667[(8)]);
var inst_16646 = (inst_16644 < n);
var state_16667__$1 = state_16667;
if(cljs.core.truth_(inst_16646)){
var statearr_16676_16693 = state_16667__$1;
(statearr_16676_16693[(1)] = (4));

} else {
var statearr_16677_16694 = state_16667__$1;
(statearr_16677_16694[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (11))){
var inst_16644 = (state_16667[(8)]);
var inst_16654 = (state_16667[(2)]);
var inst_16655 = (inst_16644 + (1));
var inst_16644__$1 = inst_16655;
var state_16667__$1 = (function (){var statearr_16678 = state_16667;
(statearr_16678[(10)] = inst_16654);

(statearr_16678[(8)] = inst_16644__$1);

return statearr_16678;
})();
var statearr_16679_16695 = state_16667__$1;
(statearr_16679_16695[(2)] = null);

(statearr_16679_16695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (9))){
var state_16667__$1 = state_16667;
var statearr_16680_16696 = state_16667__$1;
(statearr_16680_16696[(2)] = null);

(statearr_16680_16696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (5))){
var state_16667__$1 = state_16667;
var statearr_16681_16697 = state_16667__$1;
(statearr_16681_16697[(2)] = null);

(statearr_16681_16697[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (10))){
var inst_16659 = (state_16667[(2)]);
var state_16667__$1 = state_16667;
var statearr_16682_16698 = state_16667__$1;
(statearr_16682_16698[(2)] = inst_16659);

(statearr_16682_16698[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16668 === (8))){
var inst_16649 = (state_16667[(7)]);
var state_16667__$1 = state_16667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16667__$1,(11),out,inst_16649);
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
});})(c__13346__auto___16688,out))
;
return ((function (switch__13163__auto__,c__13346__auto___16688,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16683[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16683[(1)] = (1));

return statearr_16683;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16667){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16667);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16684){if((e16684 instanceof Object)){
var ex__13167__auto__ = e16684;
var statearr_16685_16699 = state_16667;
(statearr_16685_16699[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16667);

return cljs.core.cst$kw$recur;
} else {
throw e16684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16700 = state_16667;
state_16667 = G__16700;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16688,out))
})();
var state__13348__auto__ = (function (){var statearr_16686 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16686[(6)] = c__13346__auto___16688);

return statearr_16686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16688,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16702 = (function (f,ch,meta16703){
this.f = f;
this.ch = ch;
this.meta16703 = meta16703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16704,meta16703__$1){
var self__ = this;
var _16704__$1 = this;
return (new cljs.core.async.t_cljs$core$async16702(self__.f,self__.ch,meta16703__$1));
});

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16704){
var self__ = this;
var _16704__$1 = this;
return self__.meta16703;
});

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16705 = (function (f,ch,meta16703,_,fn1,meta16706){
this.f = f;
this.ch = ch;
this.meta16703 = meta16703;
this._ = _;
this.fn1 = fn1;
this.meta16706 = meta16706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16707,meta16706__$1){
var self__ = this;
var _16707__$1 = this;
return (new cljs.core.async.t_cljs$core$async16705(self__.f,self__.ch,self__.meta16703,self__._,self__.fn1,meta16706__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16707){
var self__ = this;
var _16707__$1 = this;
return self__.meta16706;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16701_SHARP_){
var G__16708 = (((p1__16701_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16701_SHARP_) : self__.f.call(null,p1__16701_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16708) : f1.call(null,G__16708));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16703,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16702], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16706], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16705";

cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16705");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16705.
 */
cljs.core.async.__GT_t_cljs$core$async16705 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16705(f__$1,ch__$1,meta16703__$1,___$2,fn1__$1,meta16706){
return (new cljs.core.async.t_cljs$core$async16705(f__$1,ch__$1,meta16703__$1,___$2,fn1__$1,meta16706));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16705(self__.f,self__.ch,self__.meta16703,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16709 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16709) : self__.f.call(null,G__16709));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16703], null);
});

cljs.core.async.t_cljs$core$async16702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16702";

cljs.core.async.t_cljs$core$async16702.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16702");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16702.
 */
cljs.core.async.__GT_t_cljs$core$async16702 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16702(f__$1,ch__$1,meta16703){
return (new cljs.core.async.t_cljs$core$async16702(f__$1,ch__$1,meta16703));
});

}

return (new cljs.core.async.t_cljs$core$async16702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16710 = (function (f,ch,meta16711){
this.f = f;
this.ch = ch;
this.meta16711 = meta16711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16712,meta16711__$1){
var self__ = this;
var _16712__$1 = this;
return (new cljs.core.async.t_cljs$core$async16710(self__.f,self__.ch,meta16711__$1));
});

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16712){
var self__ = this;
var _16712__$1 = this;
return self__.meta16711;
});

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16711], null);
});

cljs.core.async.t_cljs$core$async16710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16710";

cljs.core.async.t_cljs$core$async16710.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16710");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16710.
 */
cljs.core.async.__GT_t_cljs$core$async16710 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16710(f__$1,ch__$1,meta16711){
return (new cljs.core.async.t_cljs$core$async16710(f__$1,ch__$1,meta16711));
});

}

return (new cljs.core.async.t_cljs$core$async16710(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16713 = (function (p,ch,meta16714){
this.p = p;
this.ch = ch;
this.meta16714 = meta16714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16715,meta16714__$1){
var self__ = this;
var _16715__$1 = this;
return (new cljs.core.async.t_cljs$core$async16713(self__.p,self__.ch,meta16714__$1));
});

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16715){
var self__ = this;
var _16715__$1 = this;
return self__.meta16714;
});

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16714], null);
});

cljs.core.async.t_cljs$core$async16713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16713";

cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16713");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16713.
 */
cljs.core.async.__GT_t_cljs$core$async16713 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16713(p__$1,ch__$1,meta16714){
return (new cljs.core.async.t_cljs$core$async16713(p__$1,ch__$1,meta16714));
});

}

return (new cljs.core.async.t_cljs$core$async16713(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16717 = arguments.length;
switch (G__16717) {
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
var c__13346__auto___16757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16757,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16757,out){
return (function (state_16738){
var state_val_16739 = (state_16738[(1)]);
if((state_val_16739 === (7))){
var inst_16734 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16740_16758 = state_16738__$1;
(statearr_16740_16758[(2)] = inst_16734);

(statearr_16740_16758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (1))){
var state_16738__$1 = state_16738;
var statearr_16741_16759 = state_16738__$1;
(statearr_16741_16759[(2)] = null);

(statearr_16741_16759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (4))){
var inst_16720 = (state_16738[(7)]);
var inst_16720__$1 = (state_16738[(2)]);
var inst_16721 = (inst_16720__$1 == null);
var state_16738__$1 = (function (){var statearr_16742 = state_16738;
(statearr_16742[(7)] = inst_16720__$1);

return statearr_16742;
})();
if(cljs.core.truth_(inst_16721)){
var statearr_16743_16760 = state_16738__$1;
(statearr_16743_16760[(1)] = (5));

} else {
var statearr_16744_16761 = state_16738__$1;
(statearr_16744_16761[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (6))){
var inst_16720 = (state_16738[(7)]);
var inst_16725 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16720) : p.call(null,inst_16720));
var state_16738__$1 = state_16738;
if(cljs.core.truth_(inst_16725)){
var statearr_16745_16762 = state_16738__$1;
(statearr_16745_16762[(1)] = (8));

} else {
var statearr_16746_16763 = state_16738__$1;
(statearr_16746_16763[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (3))){
var inst_16736 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16738__$1,inst_16736);
} else {
if((state_val_16739 === (2))){
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16738__$1,(4),ch);
} else {
if((state_val_16739 === (11))){
var inst_16728 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16747_16764 = state_16738__$1;
(statearr_16747_16764[(2)] = inst_16728);

(statearr_16747_16764[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (9))){
var state_16738__$1 = state_16738;
var statearr_16748_16765 = state_16738__$1;
(statearr_16748_16765[(2)] = null);

(statearr_16748_16765[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (5))){
var inst_16723 = cljs.core.async.close_BANG_(out);
var state_16738__$1 = state_16738;
var statearr_16749_16766 = state_16738__$1;
(statearr_16749_16766[(2)] = inst_16723);

(statearr_16749_16766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (10))){
var inst_16731 = (state_16738[(2)]);
var state_16738__$1 = (function (){var statearr_16750 = state_16738;
(statearr_16750[(8)] = inst_16731);

return statearr_16750;
})();
var statearr_16751_16767 = state_16738__$1;
(statearr_16751_16767[(2)] = null);

(statearr_16751_16767[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16739 === (8))){
var inst_16720 = (state_16738[(7)]);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16738__$1,(11),out,inst_16720);
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
});})(c__13346__auto___16757,out))
;
return ((function (switch__13163__auto__,c__13346__auto___16757,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16752 = [null,null,null,null,null,null,null,null,null];
(statearr_16752[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16752[(1)] = (1));

return statearr_16752;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16738){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16738);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16753){if((e16753 instanceof Object)){
var ex__13167__auto__ = e16753;
var statearr_16754_16768 = state_16738;
(statearr_16754_16768[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16738);

return cljs.core.cst$kw$recur;
} else {
throw e16753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16769 = state_16738;
state_16738 = G__16769;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16757,out))
})();
var state__13348__auto__ = (function (){var statearr_16755 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16755[(6)] = c__13346__auto___16757);

return statearr_16755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16757,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16771 = arguments.length;
switch (G__16771) {
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
var c__13346__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto__){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto__){
return (function (state_16834){
var state_val_16835 = (state_16834[(1)]);
if((state_val_16835 === (7))){
var inst_16830 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16836_16874 = state_16834__$1;
(statearr_16836_16874[(2)] = inst_16830);

(statearr_16836_16874[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (20))){
var inst_16800 = (state_16834[(7)]);
var inst_16811 = (state_16834[(2)]);
var inst_16812 = cljs.core.next(inst_16800);
var inst_16786 = inst_16812;
var inst_16787 = null;
var inst_16788 = (0);
var inst_16789 = (0);
var state_16834__$1 = (function (){var statearr_16837 = state_16834;
(statearr_16837[(8)] = inst_16788);

(statearr_16837[(9)] = inst_16789);

(statearr_16837[(10)] = inst_16787);

(statearr_16837[(11)] = inst_16786);

(statearr_16837[(12)] = inst_16811);

return statearr_16837;
})();
var statearr_16838_16875 = state_16834__$1;
(statearr_16838_16875[(2)] = null);

(statearr_16838_16875[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (1))){
var state_16834__$1 = state_16834;
var statearr_16839_16876 = state_16834__$1;
(statearr_16839_16876[(2)] = null);

(statearr_16839_16876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (4))){
var inst_16775 = (state_16834[(13)]);
var inst_16775__$1 = (state_16834[(2)]);
var inst_16776 = (inst_16775__$1 == null);
var state_16834__$1 = (function (){var statearr_16840 = state_16834;
(statearr_16840[(13)] = inst_16775__$1);

return statearr_16840;
})();
if(cljs.core.truth_(inst_16776)){
var statearr_16841_16877 = state_16834__$1;
(statearr_16841_16877[(1)] = (5));

} else {
var statearr_16842_16878 = state_16834__$1;
(statearr_16842_16878[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (15))){
var state_16834__$1 = state_16834;
var statearr_16846_16879 = state_16834__$1;
(statearr_16846_16879[(2)] = null);

(statearr_16846_16879[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (21))){
var state_16834__$1 = state_16834;
var statearr_16847_16880 = state_16834__$1;
(statearr_16847_16880[(2)] = null);

(statearr_16847_16880[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (13))){
var inst_16788 = (state_16834[(8)]);
var inst_16789 = (state_16834[(9)]);
var inst_16787 = (state_16834[(10)]);
var inst_16786 = (state_16834[(11)]);
var inst_16796 = (state_16834[(2)]);
var inst_16797 = (inst_16789 + (1));
var tmp16843 = inst_16788;
var tmp16844 = inst_16787;
var tmp16845 = inst_16786;
var inst_16786__$1 = tmp16845;
var inst_16787__$1 = tmp16844;
var inst_16788__$1 = tmp16843;
var inst_16789__$1 = inst_16797;
var state_16834__$1 = (function (){var statearr_16848 = state_16834;
(statearr_16848[(8)] = inst_16788__$1);

(statearr_16848[(9)] = inst_16789__$1);

(statearr_16848[(14)] = inst_16796);

(statearr_16848[(10)] = inst_16787__$1);

(statearr_16848[(11)] = inst_16786__$1);

return statearr_16848;
})();
var statearr_16849_16881 = state_16834__$1;
(statearr_16849_16881[(2)] = null);

(statearr_16849_16881[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (22))){
var state_16834__$1 = state_16834;
var statearr_16850_16882 = state_16834__$1;
(statearr_16850_16882[(2)] = null);

(statearr_16850_16882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (6))){
var inst_16775 = (state_16834[(13)]);
var inst_16784 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16775) : f.call(null,inst_16775));
var inst_16785 = cljs.core.seq(inst_16784);
var inst_16786 = inst_16785;
var inst_16787 = null;
var inst_16788 = (0);
var inst_16789 = (0);
var state_16834__$1 = (function (){var statearr_16851 = state_16834;
(statearr_16851[(8)] = inst_16788);

(statearr_16851[(9)] = inst_16789);

(statearr_16851[(10)] = inst_16787);

(statearr_16851[(11)] = inst_16786);

return statearr_16851;
})();
var statearr_16852_16883 = state_16834__$1;
(statearr_16852_16883[(2)] = null);

(statearr_16852_16883[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (17))){
var inst_16800 = (state_16834[(7)]);
var inst_16804 = cljs.core.chunk_first(inst_16800);
var inst_16805 = cljs.core.chunk_rest(inst_16800);
var inst_16806 = cljs.core.count(inst_16804);
var inst_16786 = inst_16805;
var inst_16787 = inst_16804;
var inst_16788 = inst_16806;
var inst_16789 = (0);
var state_16834__$1 = (function (){var statearr_16853 = state_16834;
(statearr_16853[(8)] = inst_16788);

(statearr_16853[(9)] = inst_16789);

(statearr_16853[(10)] = inst_16787);

(statearr_16853[(11)] = inst_16786);

return statearr_16853;
})();
var statearr_16854_16884 = state_16834__$1;
(statearr_16854_16884[(2)] = null);

(statearr_16854_16884[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (3))){
var inst_16832 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16834__$1,inst_16832);
} else {
if((state_val_16835 === (12))){
var inst_16820 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16855_16885 = state_16834__$1;
(statearr_16855_16885[(2)] = inst_16820);

(statearr_16855_16885[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (2))){
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16834__$1,(4),in$);
} else {
if((state_val_16835 === (23))){
var inst_16828 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16856_16886 = state_16834__$1;
(statearr_16856_16886[(2)] = inst_16828);

(statearr_16856_16886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (19))){
var inst_16815 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16857_16887 = state_16834__$1;
(statearr_16857_16887[(2)] = inst_16815);

(statearr_16857_16887[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (11))){
var inst_16800 = (state_16834[(7)]);
var inst_16786 = (state_16834[(11)]);
var inst_16800__$1 = cljs.core.seq(inst_16786);
var state_16834__$1 = (function (){var statearr_16858 = state_16834;
(statearr_16858[(7)] = inst_16800__$1);

return statearr_16858;
})();
if(inst_16800__$1){
var statearr_16859_16888 = state_16834__$1;
(statearr_16859_16888[(1)] = (14));

} else {
var statearr_16860_16889 = state_16834__$1;
(statearr_16860_16889[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (9))){
var inst_16822 = (state_16834[(2)]);
var inst_16823 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16834__$1 = (function (){var statearr_16861 = state_16834;
(statearr_16861[(15)] = inst_16822);

return statearr_16861;
})();
if(cljs.core.truth_(inst_16823)){
var statearr_16862_16890 = state_16834__$1;
(statearr_16862_16890[(1)] = (21));

} else {
var statearr_16863_16891 = state_16834__$1;
(statearr_16863_16891[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (5))){
var inst_16778 = cljs.core.async.close_BANG_(out);
var state_16834__$1 = state_16834;
var statearr_16864_16892 = state_16834__$1;
(statearr_16864_16892[(2)] = inst_16778);

(statearr_16864_16892[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (14))){
var inst_16800 = (state_16834[(7)]);
var inst_16802 = cljs.core.chunked_seq_QMARK_(inst_16800);
var state_16834__$1 = state_16834;
if(inst_16802){
var statearr_16865_16893 = state_16834__$1;
(statearr_16865_16893[(1)] = (17));

} else {
var statearr_16866_16894 = state_16834__$1;
(statearr_16866_16894[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (16))){
var inst_16818 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16867_16895 = state_16834__$1;
(statearr_16867_16895[(2)] = inst_16818);

(statearr_16867_16895[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16835 === (10))){
var inst_16789 = (state_16834[(9)]);
var inst_16787 = (state_16834[(10)]);
var inst_16794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16787,inst_16789);
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16834__$1,(13),out,inst_16794);
} else {
if((state_val_16835 === (18))){
var inst_16800 = (state_16834[(7)]);
var inst_16809 = cljs.core.first(inst_16800);
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16834__$1,(20),out,inst_16809);
} else {
if((state_val_16835 === (8))){
var inst_16788 = (state_16834[(8)]);
var inst_16789 = (state_16834[(9)]);
var inst_16791 = (inst_16789 < inst_16788);
var inst_16792 = inst_16791;
var state_16834__$1 = state_16834;
if(cljs.core.truth_(inst_16792)){
var statearr_16868_16896 = state_16834__$1;
(statearr_16868_16896[(1)] = (10));

} else {
var statearr_16869_16897 = state_16834__$1;
(statearr_16869_16897[(1)] = (11));

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
});})(c__13346__auto__))
;
return ((function (switch__13163__auto__,c__13346__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____0 = (function (){
var statearr_16870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16870[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__);

(statearr_16870[(1)] = (1));

return statearr_16870;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____1 = (function (state_16834){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16834);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16871){if((e16871 instanceof Object)){
var ex__13167__auto__ = e16871;
var statearr_16872_16898 = state_16834;
(statearr_16872_16898[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16834);

return cljs.core.cst$kw$recur;
} else {
throw e16871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16899 = state_16834;
state_16834 = G__16899;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__ = function(state_16834){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____1.call(this,state_16834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13164__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto__))
})();
var state__13348__auto__ = (function (){var statearr_16873 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16873[(6)] = c__13346__auto__);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto__))
);

return c__13346__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16901 = arguments.length;
switch (G__16901) {
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
var G__16904 = arguments.length;
switch (G__16904) {
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
var G__16907 = arguments.length;
switch (G__16907) {
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
var c__13346__auto___16954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___16954,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___16954,out){
return (function (state_16931){
var state_val_16932 = (state_16931[(1)]);
if((state_val_16932 === (7))){
var inst_16926 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16933_16955 = state_16931__$1;
(statearr_16933_16955[(2)] = inst_16926);

(statearr_16933_16955[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (1))){
var inst_16908 = null;
var state_16931__$1 = (function (){var statearr_16934 = state_16931;
(statearr_16934[(7)] = inst_16908);

return statearr_16934;
})();
var statearr_16935_16956 = state_16931__$1;
(statearr_16935_16956[(2)] = null);

(statearr_16935_16956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (4))){
var inst_16911 = (state_16931[(8)]);
var inst_16911__$1 = (state_16931[(2)]);
var inst_16912 = (inst_16911__$1 == null);
var inst_16913 = cljs.core.not(inst_16912);
var state_16931__$1 = (function (){var statearr_16936 = state_16931;
(statearr_16936[(8)] = inst_16911__$1);

return statearr_16936;
})();
if(inst_16913){
var statearr_16937_16957 = state_16931__$1;
(statearr_16937_16957[(1)] = (5));

} else {
var statearr_16938_16958 = state_16931__$1;
(statearr_16938_16958[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (6))){
var state_16931__$1 = state_16931;
var statearr_16939_16959 = state_16931__$1;
(statearr_16939_16959[(2)] = null);

(statearr_16939_16959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (3))){
var inst_16928 = (state_16931[(2)]);
var inst_16929 = cljs.core.async.close_BANG_(out);
var state_16931__$1 = (function (){var statearr_16940 = state_16931;
(statearr_16940[(9)] = inst_16928);

return statearr_16940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16931__$1,inst_16929);
} else {
if((state_val_16932 === (2))){
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16931__$1,(4),ch);
} else {
if((state_val_16932 === (11))){
var inst_16911 = (state_16931[(8)]);
var inst_16920 = (state_16931[(2)]);
var inst_16908 = inst_16911;
var state_16931__$1 = (function (){var statearr_16941 = state_16931;
(statearr_16941[(10)] = inst_16920);

(statearr_16941[(7)] = inst_16908);

return statearr_16941;
})();
var statearr_16942_16960 = state_16931__$1;
(statearr_16942_16960[(2)] = null);

(statearr_16942_16960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (9))){
var inst_16911 = (state_16931[(8)]);
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16931__$1,(11),out,inst_16911);
} else {
if((state_val_16932 === (5))){
var inst_16911 = (state_16931[(8)]);
var inst_16908 = (state_16931[(7)]);
var inst_16915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16911,inst_16908);
var state_16931__$1 = state_16931;
if(inst_16915){
var statearr_16944_16961 = state_16931__$1;
(statearr_16944_16961[(1)] = (8));

} else {
var statearr_16945_16962 = state_16931__$1;
(statearr_16945_16962[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (10))){
var inst_16923 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16946_16963 = state_16931__$1;
(statearr_16946_16963[(2)] = inst_16923);

(statearr_16946_16963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (8))){
var inst_16908 = (state_16931[(7)]);
var tmp16943 = inst_16908;
var inst_16908__$1 = tmp16943;
var state_16931__$1 = (function (){var statearr_16947 = state_16931;
(statearr_16947[(7)] = inst_16908__$1);

return statearr_16947;
})();
var statearr_16948_16964 = state_16931__$1;
(statearr_16948_16964[(2)] = null);

(statearr_16948_16964[(1)] = (2));


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
});})(c__13346__auto___16954,out))
;
return ((function (switch__13163__auto__,c__13346__auto___16954,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_16949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16949[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_16949[(1)] = (1));

return statearr_16949;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_16931){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_16931);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e16950){if((e16950 instanceof Object)){
var ex__13167__auto__ = e16950;
var statearr_16951_16965 = state_16931;
(statearr_16951_16965[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16931);

return cljs.core.cst$kw$recur;
} else {
throw e16950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__16966 = state_16931;
state_16931 = G__16966;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_16931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_16931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___16954,out))
})();
var state__13348__auto__ = (function (){var statearr_16952 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_16952[(6)] = c__13346__auto___16954);

return statearr_16952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___16954,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16968 = arguments.length;
switch (G__16968) {
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
var c__13346__auto___17034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___17034,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___17034,out){
return (function (state_17006){
var state_val_17007 = (state_17006[(1)]);
if((state_val_17007 === (7))){
var inst_17002 = (state_17006[(2)]);
var state_17006__$1 = state_17006;
var statearr_17008_17035 = state_17006__$1;
(statearr_17008_17035[(2)] = inst_17002);

(statearr_17008_17035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (1))){
var inst_16969 = (new Array(n));
var inst_16970 = inst_16969;
var inst_16971 = (0);
var state_17006__$1 = (function (){var statearr_17009 = state_17006;
(statearr_17009[(7)] = inst_16970);

(statearr_17009[(8)] = inst_16971);

return statearr_17009;
})();
var statearr_17010_17036 = state_17006__$1;
(statearr_17010_17036[(2)] = null);

(statearr_17010_17036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (4))){
var inst_16974 = (state_17006[(9)]);
var inst_16974__$1 = (state_17006[(2)]);
var inst_16975 = (inst_16974__$1 == null);
var inst_16976 = cljs.core.not(inst_16975);
var state_17006__$1 = (function (){var statearr_17011 = state_17006;
(statearr_17011[(9)] = inst_16974__$1);

return statearr_17011;
})();
if(inst_16976){
var statearr_17012_17037 = state_17006__$1;
(statearr_17012_17037[(1)] = (5));

} else {
var statearr_17013_17038 = state_17006__$1;
(statearr_17013_17038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (15))){
var inst_16996 = (state_17006[(2)]);
var state_17006__$1 = state_17006;
var statearr_17014_17039 = state_17006__$1;
(statearr_17014_17039[(2)] = inst_16996);

(statearr_17014_17039[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (13))){
var state_17006__$1 = state_17006;
var statearr_17015_17040 = state_17006__$1;
(statearr_17015_17040[(2)] = null);

(statearr_17015_17040[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (6))){
var inst_16971 = (state_17006[(8)]);
var inst_16992 = (inst_16971 > (0));
var state_17006__$1 = state_17006;
if(cljs.core.truth_(inst_16992)){
var statearr_17016_17041 = state_17006__$1;
(statearr_17016_17041[(1)] = (12));

} else {
var statearr_17017_17042 = state_17006__$1;
(statearr_17017_17042[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (3))){
var inst_17004 = (state_17006[(2)]);
var state_17006__$1 = state_17006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17006__$1,inst_17004);
} else {
if((state_val_17007 === (12))){
var inst_16970 = (state_17006[(7)]);
var inst_16994 = cljs.core.vec(inst_16970);
var state_17006__$1 = state_17006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17006__$1,(15),out,inst_16994);
} else {
if((state_val_17007 === (2))){
var state_17006__$1 = state_17006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17006__$1,(4),ch);
} else {
if((state_val_17007 === (11))){
var inst_16986 = (state_17006[(2)]);
var inst_16987 = (new Array(n));
var inst_16970 = inst_16987;
var inst_16971 = (0);
var state_17006__$1 = (function (){var statearr_17018 = state_17006;
(statearr_17018[(7)] = inst_16970);

(statearr_17018[(8)] = inst_16971);

(statearr_17018[(10)] = inst_16986);

return statearr_17018;
})();
var statearr_17019_17043 = state_17006__$1;
(statearr_17019_17043[(2)] = null);

(statearr_17019_17043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (9))){
var inst_16970 = (state_17006[(7)]);
var inst_16984 = cljs.core.vec(inst_16970);
var state_17006__$1 = state_17006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17006__$1,(11),out,inst_16984);
} else {
if((state_val_17007 === (5))){
var inst_16970 = (state_17006[(7)]);
var inst_16971 = (state_17006[(8)]);
var inst_16974 = (state_17006[(9)]);
var inst_16979 = (state_17006[(11)]);
var inst_16978 = (inst_16970[inst_16971] = inst_16974);
var inst_16979__$1 = (inst_16971 + (1));
var inst_16980 = (inst_16979__$1 < n);
var state_17006__$1 = (function (){var statearr_17020 = state_17006;
(statearr_17020[(12)] = inst_16978);

(statearr_17020[(11)] = inst_16979__$1);

return statearr_17020;
})();
if(cljs.core.truth_(inst_16980)){
var statearr_17021_17044 = state_17006__$1;
(statearr_17021_17044[(1)] = (8));

} else {
var statearr_17022_17045 = state_17006__$1;
(statearr_17022_17045[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (14))){
var inst_16999 = (state_17006[(2)]);
var inst_17000 = cljs.core.async.close_BANG_(out);
var state_17006__$1 = (function (){var statearr_17024 = state_17006;
(statearr_17024[(13)] = inst_16999);

return statearr_17024;
})();
var statearr_17025_17046 = state_17006__$1;
(statearr_17025_17046[(2)] = inst_17000);

(statearr_17025_17046[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (10))){
var inst_16990 = (state_17006[(2)]);
var state_17006__$1 = state_17006;
var statearr_17026_17047 = state_17006__$1;
(statearr_17026_17047[(2)] = inst_16990);

(statearr_17026_17047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17007 === (8))){
var inst_16970 = (state_17006[(7)]);
var inst_16979 = (state_17006[(11)]);
var tmp17023 = inst_16970;
var inst_16970__$1 = tmp17023;
var inst_16971 = inst_16979;
var state_17006__$1 = (function (){var statearr_17027 = state_17006;
(statearr_17027[(7)] = inst_16970__$1);

(statearr_17027[(8)] = inst_16971);

return statearr_17027;
})();
var statearr_17028_17048 = state_17006__$1;
(statearr_17028_17048[(2)] = null);

(statearr_17028_17048[(1)] = (2));


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
});})(c__13346__auto___17034,out))
;
return ((function (switch__13163__auto__,c__13346__auto___17034,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_17029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17029[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_17029[(1)] = (1));

return statearr_17029;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_17006){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_17006);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e17030){if((e17030 instanceof Object)){
var ex__13167__auto__ = e17030;
var statearr_17031_17049 = state_17006;
(statearr_17031_17049[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17006);

return cljs.core.cst$kw$recur;
} else {
throw e17030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__17050 = state_17006;
state_17006 = G__17050;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_17006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_17006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___17034,out))
})();
var state__13348__auto__ = (function (){var statearr_17032 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_17032[(6)] = c__13346__auto___17034);

return statearr_17032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___17034,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17052 = arguments.length;
switch (G__17052) {
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
var c__13346__auto___17122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13346__auto___17122,out){
return (function (){
var f__13347__auto__ = (function (){var switch__13163__auto__ = ((function (c__13346__auto___17122,out){
return (function (state_17094){
var state_val_17095 = (state_17094[(1)]);
if((state_val_17095 === (7))){
var inst_17090 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
var statearr_17096_17123 = state_17094__$1;
(statearr_17096_17123[(2)] = inst_17090);

(statearr_17096_17123[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (1))){
var inst_17053 = [];
var inst_17054 = inst_17053;
var inst_17055 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17094__$1 = (function (){var statearr_17097 = state_17094;
(statearr_17097[(7)] = inst_17054);

(statearr_17097[(8)] = inst_17055);

return statearr_17097;
})();
var statearr_17098_17124 = state_17094__$1;
(statearr_17098_17124[(2)] = null);

(statearr_17098_17124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (4))){
var inst_17058 = (state_17094[(9)]);
var inst_17058__$1 = (state_17094[(2)]);
var inst_17059 = (inst_17058__$1 == null);
var inst_17060 = cljs.core.not(inst_17059);
var state_17094__$1 = (function (){var statearr_17099 = state_17094;
(statearr_17099[(9)] = inst_17058__$1);

return statearr_17099;
})();
if(inst_17060){
var statearr_17100_17125 = state_17094__$1;
(statearr_17100_17125[(1)] = (5));

} else {
var statearr_17101_17126 = state_17094__$1;
(statearr_17101_17126[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (15))){
var inst_17084 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
var statearr_17102_17127 = state_17094__$1;
(statearr_17102_17127[(2)] = inst_17084);

(statearr_17102_17127[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (13))){
var state_17094__$1 = state_17094;
var statearr_17103_17128 = state_17094__$1;
(statearr_17103_17128[(2)] = null);

(statearr_17103_17128[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (6))){
var inst_17054 = (state_17094[(7)]);
var inst_17079 = inst_17054.length;
var inst_17080 = (inst_17079 > (0));
var state_17094__$1 = state_17094;
if(cljs.core.truth_(inst_17080)){
var statearr_17104_17129 = state_17094__$1;
(statearr_17104_17129[(1)] = (12));

} else {
var statearr_17105_17130 = state_17094__$1;
(statearr_17105_17130[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (3))){
var inst_17092 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17094__$1,inst_17092);
} else {
if((state_val_17095 === (12))){
var inst_17054 = (state_17094[(7)]);
var inst_17082 = cljs.core.vec(inst_17054);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17094__$1,(15),out,inst_17082);
} else {
if((state_val_17095 === (2))){
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17094__$1,(4),ch);
} else {
if((state_val_17095 === (11))){
var inst_17062 = (state_17094[(10)]);
var inst_17058 = (state_17094[(9)]);
var inst_17072 = (state_17094[(2)]);
var inst_17073 = [];
var inst_17074 = inst_17073.push(inst_17058);
var inst_17054 = inst_17073;
var inst_17055 = inst_17062;
var state_17094__$1 = (function (){var statearr_17106 = state_17094;
(statearr_17106[(7)] = inst_17054);

(statearr_17106[(11)] = inst_17074);

(statearr_17106[(8)] = inst_17055);

(statearr_17106[(12)] = inst_17072);

return statearr_17106;
})();
var statearr_17107_17131 = state_17094__$1;
(statearr_17107_17131[(2)] = null);

(statearr_17107_17131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (9))){
var inst_17054 = (state_17094[(7)]);
var inst_17070 = cljs.core.vec(inst_17054);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17094__$1,(11),out,inst_17070);
} else {
if((state_val_17095 === (5))){
var inst_17062 = (state_17094[(10)]);
var inst_17058 = (state_17094[(9)]);
var inst_17055 = (state_17094[(8)]);
var inst_17062__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17058) : f.call(null,inst_17058));
var inst_17063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17062__$1,inst_17055);
var inst_17064 = cljs.core.keyword_identical_QMARK_(inst_17055,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17065 = ((inst_17063) || (inst_17064));
var state_17094__$1 = (function (){var statearr_17108 = state_17094;
(statearr_17108[(10)] = inst_17062__$1);

return statearr_17108;
})();
if(cljs.core.truth_(inst_17065)){
var statearr_17109_17132 = state_17094__$1;
(statearr_17109_17132[(1)] = (8));

} else {
var statearr_17110_17133 = state_17094__$1;
(statearr_17110_17133[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (14))){
var inst_17087 = (state_17094[(2)]);
var inst_17088 = cljs.core.async.close_BANG_(out);
var state_17094__$1 = (function (){var statearr_17112 = state_17094;
(statearr_17112[(13)] = inst_17087);

return statearr_17112;
})();
var statearr_17113_17134 = state_17094__$1;
(statearr_17113_17134[(2)] = inst_17088);

(statearr_17113_17134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (10))){
var inst_17077 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
var statearr_17114_17135 = state_17094__$1;
(statearr_17114_17135[(2)] = inst_17077);

(statearr_17114_17135[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17095 === (8))){
var inst_17054 = (state_17094[(7)]);
var inst_17062 = (state_17094[(10)]);
var inst_17058 = (state_17094[(9)]);
var inst_17067 = inst_17054.push(inst_17058);
var tmp17111 = inst_17054;
var inst_17054__$1 = tmp17111;
var inst_17055 = inst_17062;
var state_17094__$1 = (function (){var statearr_17115 = state_17094;
(statearr_17115[(7)] = inst_17054__$1);

(statearr_17115[(8)] = inst_17055);

(statearr_17115[(14)] = inst_17067);

return statearr_17115;
})();
var statearr_17116_17136 = state_17094__$1;
(statearr_17116_17136[(2)] = null);

(statearr_17116_17136[(1)] = (2));


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
});})(c__13346__auto___17122,out))
;
return ((function (switch__13163__auto__,c__13346__auto___17122,out){
return (function() {
var cljs$core$async$state_machine__13164__auto__ = null;
var cljs$core$async$state_machine__13164__auto____0 = (function (){
var statearr_17117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17117[(0)] = cljs$core$async$state_machine__13164__auto__);

(statearr_17117[(1)] = (1));

return statearr_17117;
});
var cljs$core$async$state_machine__13164__auto____1 = (function (state_17094){
while(true){
var ret_value__13165__auto__ = (function (){try{while(true){
var result__13166__auto__ = switch__13163__auto__(state_17094);
if(cljs.core.keyword_identical_QMARK_(result__13166__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13166__auto__;
}
break;
}
}catch (e17118){if((e17118 instanceof Object)){
var ex__13167__auto__ = e17118;
var statearr_17119_17137 = state_17094;
(statearr_17119_17137[(5)] = ex__13167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17094);

return cljs.core.cst$kw$recur;
} else {
throw e17118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13165__auto__,cljs.core.cst$kw$recur)){
var G__17138 = state_17094;
state_17094 = G__17138;
continue;
} else {
return ret_value__13165__auto__;
}
break;
}
});
cljs$core$async$state_machine__13164__auto__ = function(state_17094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13164__auto____1.call(this,state_17094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13164__auto____0;
cljs$core$async$state_machine__13164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13164__auto____1;
return cljs$core$async$state_machine__13164__auto__;
})()
;})(switch__13163__auto__,c__13346__auto___17122,out))
})();
var state__13348__auto__ = (function (){var statearr_17120 = (f__13347__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13347__auto__.cljs$core$IFn$_invoke$arity$0() : f__13347__auto__.call(null));
(statearr_17120[(6)] = c__13346__auto___17122);

return statearr_17120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13348__auto__);
});})(c__13346__auto___17122,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

