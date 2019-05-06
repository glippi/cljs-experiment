// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22104 = arguments.length;
switch (G__22104) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22105 = (function (f,blockable,meta22106){
this.f = f;
this.blockable = blockable;
this.meta22106 = meta22106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22107,meta22106__$1){
var self__ = this;
var _22107__$1 = this;
return (new cljs.core.async.t_cljs$core$async22105(self__.f,self__.blockable,meta22106__$1));
});

cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22107){
var self__ = this;
var _22107__$1 = this;
return self__.meta22106;
});

cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22106","meta22106",-379228853,null)], null);
});

cljs.core.async.t_cljs$core$async22105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22105";

cljs.core.async.t_cljs$core$async22105.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22105");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22105.
 */
cljs.core.async.__GT_t_cljs$core$async22105 = (function cljs$core$async$__GT_t_cljs$core$async22105(f__$1,blockable__$1,meta22106){
return (new cljs.core.async.t_cljs$core$async22105(f__$1,blockable__$1,meta22106));
});

}

return (new cljs.core.async.t_cljs$core$async22105(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__22111 = arguments.length;
switch (G__22111) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__22114 = arguments.length;
switch (G__22114) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__22117 = arguments.length;
switch (G__22117) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22119 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22119);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22119,ret){
return (function (){
return fn1.call(null,val_22119);
});})(val_22119,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__22121 = arguments.length;
switch (G__22121) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___22123 = n;
var x_22124 = (0);
while(true){
if((x_22124 < n__4408__auto___22123)){
(a[x_22124] = (0));

var G__22125 = (x_22124 + (1));
x_22124 = G__22125;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22126 = (i + (1));
i = G__22126;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22127 = (function (flag,meta22128){
this.flag = flag;
this.meta22128 = meta22128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22129,meta22128__$1){
var self__ = this;
var _22129__$1 = this;
return (new cljs.core.async.t_cljs$core$async22127(self__.flag,meta22128__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22129){
var self__ = this;
var _22129__$1 = this;
return self__.meta22128;
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22128","meta22128",971888884,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22127";

cljs.core.async.t_cljs$core$async22127.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22127");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22127.
 */
cljs.core.async.__GT_t_cljs$core$async22127 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22127(flag__$1,meta22128){
return (new cljs.core.async.t_cljs$core$async22127(flag__$1,meta22128));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22127(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22130 = (function (flag,cb,meta22131){
this.flag = flag;
this.cb = cb;
this.meta22131 = meta22131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22132,meta22131__$1){
var self__ = this;
var _22132__$1 = this;
return (new cljs.core.async.t_cljs$core$async22130(self__.flag,self__.cb,meta22131__$1));
});

cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22132){
var self__ = this;
var _22132__$1 = this;
return self__.meta22131;
});

cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22131","meta22131",2134842551,null)], null);
});

cljs.core.async.t_cljs$core$async22130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22130";

cljs.core.async.t_cljs$core$async22130.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22130");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22130.
 */
cljs.core.async.__GT_t_cljs$core$async22130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22130(flag__$1,cb__$1,meta22131){
return (new cljs.core.async.t_cljs$core$async22130(flag__$1,cb__$1,meta22131));
});

}

return (new cljs.core.async.t_cljs$core$async22130(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22133_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22133_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22134_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22134_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22135 = (i + (1));
i = G__22135;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4531__auto___22141 = arguments.length;
var i__4532__auto___22142 = (0);
while(true){
if((i__4532__auto___22142 < len__4531__auto___22141)){
args__4534__auto__.push((arguments[i__4532__auto___22142]));

var G__22143 = (i__4532__auto___22142 + (1));
i__4532__auto___22142 = G__22143;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22138){
var map__22139 = p__22138;
var map__22139__$1 = ((((!((map__22139 == null)))?(((((map__22139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22139):map__22139);
var opts = map__22139__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22136){
var G__22137 = cljs.core.first.call(null,seq22136);
var seq22136__$1 = cljs.core.next.call(null,seq22136);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22137,seq22136__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__22145 = arguments.length;
switch (G__22145) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15423__auto___22191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___22191){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___22191){
return (function (state_22169){
var state_val_22170 = (state_22169[(1)]);
if((state_val_22170 === (7))){
var inst_22165 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22171_22192 = state_22169__$1;
(statearr_22171_22192[(2)] = inst_22165);

(statearr_22171_22192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (1))){
var state_22169__$1 = state_22169;
var statearr_22172_22193 = state_22169__$1;
(statearr_22172_22193[(2)] = null);

(statearr_22172_22193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (4))){
var inst_22148 = (state_22169[(7)]);
var inst_22148__$1 = (state_22169[(2)]);
var inst_22149 = (inst_22148__$1 == null);
var state_22169__$1 = (function (){var statearr_22173 = state_22169;
(statearr_22173[(7)] = inst_22148__$1);

return statearr_22173;
})();
if(cljs.core.truth_(inst_22149)){
var statearr_22174_22194 = state_22169__$1;
(statearr_22174_22194[(1)] = (5));

} else {
var statearr_22175_22195 = state_22169__$1;
(statearr_22175_22195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (13))){
var state_22169__$1 = state_22169;
var statearr_22176_22196 = state_22169__$1;
(statearr_22176_22196[(2)] = null);

(statearr_22176_22196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (6))){
var inst_22148 = (state_22169[(7)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22169__$1,(11),to,inst_22148);
} else {
if((state_val_22170 === (3))){
var inst_22167 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22169__$1,inst_22167);
} else {
if((state_val_22170 === (12))){
var state_22169__$1 = state_22169;
var statearr_22177_22197 = state_22169__$1;
(statearr_22177_22197[(2)] = null);

(statearr_22177_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (2))){
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(4),from);
} else {
if((state_val_22170 === (11))){
var inst_22158 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
if(cljs.core.truth_(inst_22158)){
var statearr_22178_22198 = state_22169__$1;
(statearr_22178_22198[(1)] = (12));

} else {
var statearr_22179_22199 = state_22169__$1;
(statearr_22179_22199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (9))){
var state_22169__$1 = state_22169;
var statearr_22180_22200 = state_22169__$1;
(statearr_22180_22200[(2)] = null);

(statearr_22180_22200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (5))){
var state_22169__$1 = state_22169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22181_22201 = state_22169__$1;
(statearr_22181_22201[(1)] = (8));

} else {
var statearr_22182_22202 = state_22169__$1;
(statearr_22182_22202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (14))){
var inst_22163 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22183_22203 = state_22169__$1;
(statearr_22183_22203[(2)] = inst_22163);

(statearr_22183_22203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (10))){
var inst_22155 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22184_22204 = state_22169__$1;
(statearr_22184_22204[(2)] = inst_22155);

(statearr_22184_22204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (8))){
var inst_22152 = cljs.core.async.close_BANG_.call(null,to);
var state_22169__$1 = state_22169;
var statearr_22185_22205 = state_22169__$1;
(statearr_22185_22205[(2)] = inst_22152);

(statearr_22185_22205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___22191))
;
return ((function (switch__15400__auto__,c__15423__auto___22191){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_22186 = [null,null,null,null,null,null,null,null];
(statearr_22186[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_22186[(1)] = (1));

return statearr_22186;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_22169){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22187){if((e22187 instanceof Object)){
var ex__15404__auto__ = e22187;
var statearr_22188_22206 = state_22169;
(statearr_22188_22206[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22207 = state_22169;
state_22169 = G__22207;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_22169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_22169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___22191))
})();
var state__15425__auto__ = (function (){var statearr_22189 = f__15424__auto__.call(null);
(statearr_22189[(6)] = c__15423__auto___22191);

return statearr_22189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___22191))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22208){
var vec__22209 = p__22208;
var v = cljs.core.nth.call(null,vec__22209,(0),null);
var p = cljs.core.nth.call(null,vec__22209,(1),null);
var job = vec__22209;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15423__auto___22380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results){
return (function (state_22216){
var state_val_22217 = (state_22216[(1)]);
if((state_val_22217 === (1))){
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22216__$1,(2),res,v);
} else {
if((state_val_22217 === (2))){
var inst_22213 = (state_22216[(2)]);
var inst_22214 = cljs.core.async.close_BANG_.call(null,res);
var state_22216__$1 = (function (){var statearr_22218 = state_22216;
(statearr_22218[(7)] = inst_22213);

return statearr_22218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22216__$1,inst_22214);
} else {
return null;
}
}
});})(c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results))
;
return ((function (switch__15400__auto__,c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_22219 = [null,null,null,null,null,null,null,null];
(statearr_22219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_22219[(1)] = (1));

return statearr_22219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_22216){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22220){if((e22220 instanceof Object)){
var ex__15404__auto__ = e22220;
var statearr_22221_22381 = state_22216;
(statearr_22221_22381[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22382 = state_22216;
state_22216 = G__22382;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_22216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_22216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results))
})();
var state__15425__auto__ = (function (){var statearr_22222 = f__15424__auto__.call(null);
(statearr_22222[(6)] = c__15423__auto___22380);

return statearr_22222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___22380,res,vec__22209,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22223){
var vec__22224 = p__22223;
var v = cljs.core.nth.call(null,vec__22224,(0),null);
var p = cljs.core.nth.call(null,vec__22224,(1),null);
var job = vec__22224;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___22383 = n;
var __22384 = (0);
while(true){
if((__22384 < n__4408__auto___22383)){
var G__22227_22385 = type;
var G__22227_22386__$1 = (((G__22227_22385 instanceof cljs.core.Keyword))?G__22227_22385.fqn:null);
switch (G__22227_22386__$1) {
case "compute":
var c__15423__auto___22388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22384,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (__22384,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function (state_22240){
var state_val_22241 = (state_22240[(1)]);
if((state_val_22241 === (1))){
var state_22240__$1 = state_22240;
var statearr_22242_22389 = state_22240__$1;
(statearr_22242_22389[(2)] = null);

(statearr_22242_22389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (2))){
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22240__$1,(4),jobs);
} else {
if((state_val_22241 === (3))){
var inst_22238 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22240__$1,inst_22238);
} else {
if((state_val_22241 === (4))){
var inst_22230 = (state_22240[(2)]);
var inst_22231 = process.call(null,inst_22230);
var state_22240__$1 = state_22240;
if(cljs.core.truth_(inst_22231)){
var statearr_22243_22390 = state_22240__$1;
(statearr_22243_22390[(1)] = (5));

} else {
var statearr_22244_22391 = state_22240__$1;
(statearr_22244_22391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (5))){
var state_22240__$1 = state_22240;
var statearr_22245_22392 = state_22240__$1;
(statearr_22245_22392[(2)] = null);

(statearr_22245_22392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (6))){
var state_22240__$1 = state_22240;
var statearr_22246_22393 = state_22240__$1;
(statearr_22246_22393[(2)] = null);

(statearr_22246_22393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (7))){
var inst_22236 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22247_22394 = state_22240__$1;
(statearr_22247_22394[(2)] = inst_22236);

(statearr_22247_22394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22384,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
;
return ((function (__22384,switch__15400__auto__,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_22248 = [null,null,null,null,null,null,null];
(statearr_22248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_22248[(1)] = (1));

return statearr_22248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_22240){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22249){if((e22249 instanceof Object)){
var ex__15404__auto__ = e22249;
var statearr_22250_22395 = state_22240;
(statearr_22250_22395[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22396 = state_22240;
state_22240 = G__22396;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_22240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_22240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__22384,switch__15400__auto__,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
})();
var state__15425__auto__ = (function (){var statearr_22251 = f__15424__auto__.call(null);
(statearr_22251[(6)] = c__15423__auto___22388);

return statearr_22251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(__22384,c__15423__auto___22388,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
);


break;
case "async":
var c__15423__auto___22397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22384,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (__22384,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function (state_22264){
var state_val_22265 = (state_22264[(1)]);
if((state_val_22265 === (1))){
var state_22264__$1 = state_22264;
var statearr_22266_22398 = state_22264__$1;
(statearr_22266_22398[(2)] = null);

(statearr_22266_22398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (2))){
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22264__$1,(4),jobs);
} else {
if((state_val_22265 === (3))){
var inst_22262 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22264__$1,inst_22262);
} else {
if((state_val_22265 === (4))){
var inst_22254 = (state_22264[(2)]);
var inst_22255 = async.call(null,inst_22254);
var state_22264__$1 = state_22264;
if(cljs.core.truth_(inst_22255)){
var statearr_22267_22399 = state_22264__$1;
(statearr_22267_22399[(1)] = (5));

} else {
var statearr_22268_22400 = state_22264__$1;
(statearr_22268_22400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (5))){
var state_22264__$1 = state_22264;
var statearr_22269_22401 = state_22264__$1;
(statearr_22269_22401[(2)] = null);

(statearr_22269_22401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (6))){
var state_22264__$1 = state_22264;
var statearr_22270_22402 = state_22264__$1;
(statearr_22270_22402[(2)] = null);

(statearr_22270_22402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (7))){
var inst_22260 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
var statearr_22271_22403 = state_22264__$1;
(statearr_22271_22403[(2)] = inst_22260);

(statearr_22271_22403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22384,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
;
return ((function (__22384,switch__15400__auto__,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_22272 = [null,null,null,null,null,null,null];
(statearr_22272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_22272[(1)] = (1));

return statearr_22272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_22264){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22273){if((e22273 instanceof Object)){
var ex__15404__auto__ = e22273;
var statearr_22274_22404 = state_22264;
(statearr_22274_22404[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22405 = state_22264;
state_22264 = G__22405;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_22264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_22264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__22384,switch__15400__auto__,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
})();
var state__15425__auto__ = (function (){var statearr_22275 = f__15424__auto__.call(null);
(statearr_22275[(6)] = c__15423__auto___22397);

return statearr_22275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(__22384,c__15423__auto___22397,G__22227_22385,G__22227_22386__$1,n__4408__auto___22383,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22227_22386__$1)].join('')));

}

var G__22406 = (__22384 + (1));
__22384 = G__22406;
continue;
} else {
}
break;
}

var c__15423__auto___22407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___22407,jobs,results,process,async){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___22407,jobs,results,process,async){
return (function (state_22297){
var state_val_22298 = (state_22297[(1)]);
if((state_val_22298 === (1))){
var state_22297__$1 = state_22297;
var statearr_22299_22408 = state_22297__$1;
(statearr_22299_22408[(2)] = null);

(statearr_22299_22408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22298 === (2))){
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22297__$1,(4),from);
} else {
if((state_val_22298 === (3))){
var inst_22295 = (state_22297[(2)]);
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22297__$1,inst_22295);
} else {
if((state_val_22298 === (4))){
var inst_22278 = (state_22297[(7)]);
var inst_22278__$1 = (state_22297[(2)]);
var inst_22279 = (inst_22278__$1 == null);
var state_22297__$1 = (function (){var statearr_22300 = state_22297;
(statearr_22300[(7)] = inst_22278__$1);

return statearr_22300;
})();
if(cljs.core.truth_(inst_22279)){
var statearr_22301_22409 = state_22297__$1;
(statearr_22301_22409[(1)] = (5));

} else {
var statearr_22302_22410 = state_22297__$1;
(statearr_22302_22410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22298 === (5))){
var inst_22281 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22297__$1 = state_22297;
var statearr_22303_22411 = state_22297__$1;
(statearr_22303_22411[(2)] = inst_22281);

(statearr_22303_22411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22298 === (6))){
var inst_22283 = (state_22297[(8)]);
var inst_22278 = (state_22297[(7)]);
var inst_22283__$1 = cljs.core.async.chan.call(null,(1));
var inst_22284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22285 = [inst_22278,inst_22283__$1];
var inst_22286 = (new cljs.core.PersistentVector(null,2,(5),inst_22284,inst_22285,null));
var state_22297__$1 = (function (){var statearr_22304 = state_22297;
(statearr_22304[(8)] = inst_22283__$1);

return statearr_22304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22297__$1,(8),jobs,inst_22286);
} else {
if((state_val_22298 === (7))){
var inst_22293 = (state_22297[(2)]);
var state_22297__$1 = state_22297;
var statearr_22305_22412 = state_22297__$1;
(statearr_22305_22412[(2)] = inst_22293);

(statearr_22305_22412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22298 === (8))){
var inst_22283 = (state_22297[(8)]);
var inst_22288 = (state_22297[(2)]);
var state_22297__$1 = (function (){var statearr_22306 = state_22297;
(statearr_22306[(9)] = inst_22288);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22297__$1,(9),results,inst_22283);
} else {
if((state_val_22298 === (9))){
var inst_22290 = (state_22297[(2)]);
var state_22297__$1 = (function (){var statearr_22307 = state_22297;
(statearr_22307[(10)] = inst_22290);

return statearr_22307;
})();
var statearr_22308_22413 = state_22297__$1;
(statearr_22308_22413[(2)] = null);

(statearr_22308_22413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___22407,jobs,results,process,async))
;
return ((function (switch__15400__auto__,c__15423__auto___22407,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_22309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_22309[(1)] = (1));

return statearr_22309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_22297){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22310){if((e22310 instanceof Object)){
var ex__15404__auto__ = e22310;
var statearr_22311_22414 = state_22297;
(statearr_22311_22414[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22415 = state_22297;
state_22297 = G__22415;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_22297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_22297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___22407,jobs,results,process,async))
})();
var state__15425__auto__ = (function (){var statearr_22312 = f__15424__auto__.call(null);
(statearr_22312[(6)] = c__15423__auto___22407);

return statearr_22312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___22407,jobs,results,process,async))
);


var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__,jobs,results,process,async){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__,jobs,results,process,async){
return (function (state_22350){
var state_val_22351 = (state_22350[(1)]);
if((state_val_22351 === (7))){
var inst_22346 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22352_22416 = state_22350__$1;
(statearr_22352_22416[(2)] = inst_22346);

(statearr_22352_22416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (20))){
var state_22350__$1 = state_22350;
var statearr_22353_22417 = state_22350__$1;
(statearr_22353_22417[(2)] = null);

(statearr_22353_22417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (1))){
var state_22350__$1 = state_22350;
var statearr_22354_22418 = state_22350__$1;
(statearr_22354_22418[(2)] = null);

(statearr_22354_22418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (4))){
var inst_22315 = (state_22350[(7)]);
var inst_22315__$1 = (state_22350[(2)]);
var inst_22316 = (inst_22315__$1 == null);
var state_22350__$1 = (function (){var statearr_22355 = state_22350;
(statearr_22355[(7)] = inst_22315__$1);

return statearr_22355;
})();
if(cljs.core.truth_(inst_22316)){
var statearr_22356_22419 = state_22350__$1;
(statearr_22356_22419[(1)] = (5));

} else {
var statearr_22357_22420 = state_22350__$1;
(statearr_22357_22420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (15))){
var inst_22328 = (state_22350[(8)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22350__$1,(18),to,inst_22328);
} else {
if((state_val_22351 === (21))){
var inst_22341 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22358_22421 = state_22350__$1;
(statearr_22358_22421[(2)] = inst_22341);

(statearr_22358_22421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (13))){
var inst_22343 = (state_22350[(2)]);
var state_22350__$1 = (function (){var statearr_22359 = state_22350;
(statearr_22359[(9)] = inst_22343);

return statearr_22359;
})();
var statearr_22360_22422 = state_22350__$1;
(statearr_22360_22422[(2)] = null);

(statearr_22360_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (6))){
var inst_22315 = (state_22350[(7)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(11),inst_22315);
} else {
if((state_val_22351 === (17))){
var inst_22336 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
if(cljs.core.truth_(inst_22336)){
var statearr_22361_22423 = state_22350__$1;
(statearr_22361_22423[(1)] = (19));

} else {
var statearr_22362_22424 = state_22350__$1;
(statearr_22362_22424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (3))){
var inst_22348 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22350__$1,inst_22348);
} else {
if((state_val_22351 === (12))){
var inst_22325 = (state_22350[(10)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(14),inst_22325);
} else {
if((state_val_22351 === (2))){
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(4),results);
} else {
if((state_val_22351 === (19))){
var state_22350__$1 = state_22350;
var statearr_22363_22425 = state_22350__$1;
(statearr_22363_22425[(2)] = null);

(statearr_22363_22425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (11))){
var inst_22325 = (state_22350[(2)]);
var state_22350__$1 = (function (){var statearr_22364 = state_22350;
(statearr_22364[(10)] = inst_22325);

return statearr_22364;
})();
var statearr_22365_22426 = state_22350__$1;
(statearr_22365_22426[(2)] = null);

(statearr_22365_22426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (9))){
var state_22350__$1 = state_22350;
var statearr_22366_22427 = state_22350__$1;
(statearr_22366_22427[(2)] = null);

(statearr_22366_22427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (5))){
var state_22350__$1 = state_22350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22367_22428 = state_22350__$1;
(statearr_22367_22428[(1)] = (8));

} else {
var statearr_22368_22429 = state_22350__$1;
(statearr_22368_22429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (14))){
var inst_22330 = (state_22350[(11)]);
var inst_22328 = (state_22350[(8)]);
var inst_22328__$1 = (state_22350[(2)]);
var inst_22329 = (inst_22328__$1 == null);
var inst_22330__$1 = cljs.core.not.call(null,inst_22329);
var state_22350__$1 = (function (){var statearr_22369 = state_22350;
(statearr_22369[(11)] = inst_22330__$1);

(statearr_22369[(8)] = inst_22328__$1);

return statearr_22369;
})();
if(inst_22330__$1){
var statearr_22370_22430 = state_22350__$1;
(statearr_22370_22430[(1)] = (15));

} else {
var statearr_22371_22431 = state_22350__$1;
(statearr_22371_22431[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (16))){
var inst_22330 = (state_22350[(11)]);
var state_22350__$1 = state_22350;
var statearr_22372_22432 = state_22350__$1;
(statearr_22372_22432[(2)] = inst_22330);

(statearr_22372_22432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (10))){
var inst_22322 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22373_22433 = state_22350__$1;
(statearr_22373_22433[(2)] = inst_22322);

(statearr_22373_22433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (18))){
var inst_22333 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22374_22434 = state_22350__$1;
(statearr_22374_22434[(2)] = inst_22333);

(statearr_22374_22434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (8))){
var inst_22319 = cljs.core.async.close_BANG_.call(null,to);
var state_22350__$1 = state_22350;
var statearr_22375_22435 = state_22350__$1;
(statearr_22375_22435[(2)] = inst_22319);

(statearr_22375_22435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto__,jobs,results,process,async))
;
return ((function (switch__15400__auto__,c__15423__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_22376 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_22376[(1)] = (1));

return statearr_22376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_22350){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22377){if((e22377 instanceof Object)){
var ex__15404__auto__ = e22377;
var statearr_22378_22436 = state_22350;
(statearr_22378_22436[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22437 = state_22350;
state_22350 = G__22437;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_22350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_22350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__,jobs,results,process,async))
})();
var state__15425__auto__ = (function (){var statearr_22379 = f__15424__auto__.call(null);
(statearr_22379[(6)] = c__15423__auto__);

return statearr_22379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__,jobs,results,process,async))
);

return c__15423__auto__;
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
var G__22439 = arguments.length;
switch (G__22439) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__22442 = arguments.length;
switch (G__22442) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__22445 = arguments.length;
switch (G__22445) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15423__auto___22494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___22494,tc,fc){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___22494,tc,fc){
return (function (state_22471){
var state_val_22472 = (state_22471[(1)]);
if((state_val_22472 === (7))){
var inst_22467 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22473_22495 = state_22471__$1;
(statearr_22473_22495[(2)] = inst_22467);

(statearr_22473_22495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (1))){
var state_22471__$1 = state_22471;
var statearr_22474_22496 = state_22471__$1;
(statearr_22474_22496[(2)] = null);

(statearr_22474_22496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (4))){
var inst_22448 = (state_22471[(7)]);
var inst_22448__$1 = (state_22471[(2)]);
var inst_22449 = (inst_22448__$1 == null);
var state_22471__$1 = (function (){var statearr_22475 = state_22471;
(statearr_22475[(7)] = inst_22448__$1);

return statearr_22475;
})();
if(cljs.core.truth_(inst_22449)){
var statearr_22476_22497 = state_22471__$1;
(statearr_22476_22497[(1)] = (5));

} else {
var statearr_22477_22498 = state_22471__$1;
(statearr_22477_22498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (13))){
var state_22471__$1 = state_22471;
var statearr_22478_22499 = state_22471__$1;
(statearr_22478_22499[(2)] = null);

(statearr_22478_22499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (6))){
var inst_22448 = (state_22471[(7)]);
var inst_22454 = p.call(null,inst_22448);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22454)){
var statearr_22479_22500 = state_22471__$1;
(statearr_22479_22500[(1)] = (9));

} else {
var statearr_22480_22501 = state_22471__$1;
(statearr_22480_22501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (3))){
var inst_22469 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22471__$1,inst_22469);
} else {
if((state_val_22472 === (12))){
var state_22471__$1 = state_22471;
var statearr_22481_22502 = state_22471__$1;
(statearr_22481_22502[(2)] = null);

(statearr_22481_22502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (2))){
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22471__$1,(4),ch);
} else {
if((state_val_22472 === (11))){
var inst_22448 = (state_22471[(7)]);
var inst_22458 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22471__$1,(8),inst_22458,inst_22448);
} else {
if((state_val_22472 === (9))){
var state_22471__$1 = state_22471;
var statearr_22482_22503 = state_22471__$1;
(statearr_22482_22503[(2)] = tc);

(statearr_22482_22503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (5))){
var inst_22451 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22452 = cljs.core.async.close_BANG_.call(null,fc);
var state_22471__$1 = (function (){var statearr_22483 = state_22471;
(statearr_22483[(8)] = inst_22451);

return statearr_22483;
})();
var statearr_22484_22504 = state_22471__$1;
(statearr_22484_22504[(2)] = inst_22452);

(statearr_22484_22504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (14))){
var inst_22465 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22485_22505 = state_22471__$1;
(statearr_22485_22505[(2)] = inst_22465);

(statearr_22485_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (10))){
var state_22471__$1 = state_22471;
var statearr_22486_22506 = state_22471__$1;
(statearr_22486_22506[(2)] = fc);

(statearr_22486_22506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (8))){
var inst_22460 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22460)){
var statearr_22487_22507 = state_22471__$1;
(statearr_22487_22507[(1)] = (12));

} else {
var statearr_22488_22508 = state_22471__$1;
(statearr_22488_22508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___22494,tc,fc))
;
return ((function (switch__15400__auto__,c__15423__auto___22494,tc,fc){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_22489 = [null,null,null,null,null,null,null,null,null];
(statearr_22489[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_22489[(1)] = (1));

return statearr_22489;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_22471){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22490){if((e22490 instanceof Object)){
var ex__15404__auto__ = e22490;
var statearr_22491_22509 = state_22471;
(statearr_22491_22509[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22510 = state_22471;
state_22471 = G__22510;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___22494,tc,fc))
})();
var state__15425__auto__ = (function (){var statearr_22492 = f__15424__auto__.call(null);
(statearr_22492[(6)] = c__15423__auto___22494);

return statearr_22492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___22494,tc,fc))
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
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__){
return (function (state_22531){
var state_val_22532 = (state_22531[(1)]);
if((state_val_22532 === (7))){
var inst_22527 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22533_22551 = state_22531__$1;
(statearr_22533_22551[(2)] = inst_22527);

(statearr_22533_22551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (1))){
var inst_22511 = init;
var state_22531__$1 = (function (){var statearr_22534 = state_22531;
(statearr_22534[(7)] = inst_22511);

return statearr_22534;
})();
var statearr_22535_22552 = state_22531__$1;
(statearr_22535_22552[(2)] = null);

(statearr_22535_22552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (4))){
var inst_22514 = (state_22531[(8)]);
var inst_22514__$1 = (state_22531[(2)]);
var inst_22515 = (inst_22514__$1 == null);
var state_22531__$1 = (function (){var statearr_22536 = state_22531;
(statearr_22536[(8)] = inst_22514__$1);

return statearr_22536;
})();
if(cljs.core.truth_(inst_22515)){
var statearr_22537_22553 = state_22531__$1;
(statearr_22537_22553[(1)] = (5));

} else {
var statearr_22538_22554 = state_22531__$1;
(statearr_22538_22554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (6))){
var inst_22511 = (state_22531[(7)]);
var inst_22514 = (state_22531[(8)]);
var inst_22518 = (state_22531[(9)]);
var inst_22518__$1 = f.call(null,inst_22511,inst_22514);
var inst_22519 = cljs.core.reduced_QMARK_.call(null,inst_22518__$1);
var state_22531__$1 = (function (){var statearr_22539 = state_22531;
(statearr_22539[(9)] = inst_22518__$1);

return statearr_22539;
})();
if(inst_22519){
var statearr_22540_22555 = state_22531__$1;
(statearr_22540_22555[(1)] = (8));

} else {
var statearr_22541_22556 = state_22531__$1;
(statearr_22541_22556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (3))){
var inst_22529 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22531__$1,inst_22529);
} else {
if((state_val_22532 === (2))){
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22531__$1,(4),ch);
} else {
if((state_val_22532 === (9))){
var inst_22518 = (state_22531[(9)]);
var inst_22511 = inst_22518;
var state_22531__$1 = (function (){var statearr_22542 = state_22531;
(statearr_22542[(7)] = inst_22511);

return statearr_22542;
})();
var statearr_22543_22557 = state_22531__$1;
(statearr_22543_22557[(2)] = null);

(statearr_22543_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (5))){
var inst_22511 = (state_22531[(7)]);
var state_22531__$1 = state_22531;
var statearr_22544_22558 = state_22531__$1;
(statearr_22544_22558[(2)] = inst_22511);

(statearr_22544_22558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (10))){
var inst_22525 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22545_22559 = state_22531__$1;
(statearr_22545_22559[(2)] = inst_22525);

(statearr_22545_22559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (8))){
var inst_22518 = (state_22531[(9)]);
var inst_22521 = cljs.core.deref.call(null,inst_22518);
var state_22531__$1 = state_22531;
var statearr_22546_22560 = state_22531__$1;
(statearr_22546_22560[(2)] = inst_22521);

(statearr_22546_22560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto__))
;
return ((function (switch__15400__auto__,c__15423__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15401__auto____0 = (function (){
var statearr_22547 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22547[(0)] = cljs$core$async$reduce_$_state_machine__15401__auto__);

(statearr_22547[(1)] = (1));

return statearr_22547;
});
var cljs$core$async$reduce_$_state_machine__15401__auto____1 = (function (state_22531){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22548){if((e22548 instanceof Object)){
var ex__15404__auto__ = e22548;
var statearr_22549_22561 = state_22531;
(statearr_22549_22561[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22562 = state_22531;
state_22531 = G__22562;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15401__auto__ = function(state_22531){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15401__auto____1.call(this,state_22531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15401__auto____0;
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15401__auto____1;
return cljs$core$async$reduce_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__))
})();
var state__15425__auto__ = (function (){var statearr_22550 = f__15424__auto__.call(null);
(statearr_22550[(6)] = c__15423__auto__);

return statearr_22550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__))
);

return c__15423__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__,f__$1){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__,f__$1){
return (function (state_22568){
var state_val_22569 = (state_22568[(1)]);
if((state_val_22569 === (1))){
var inst_22563 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22568__$1 = state_22568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22568__$1,(2),inst_22563);
} else {
if((state_val_22569 === (2))){
var inst_22565 = (state_22568[(2)]);
var inst_22566 = f__$1.call(null,inst_22565);
var state_22568__$1 = state_22568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22568__$1,inst_22566);
} else {
return null;
}
}
});})(c__15423__auto__,f__$1))
;
return ((function (switch__15400__auto__,c__15423__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15401__auto____0 = (function (){
var statearr_22570 = [null,null,null,null,null,null,null];
(statearr_22570[(0)] = cljs$core$async$transduce_$_state_machine__15401__auto__);

(statearr_22570[(1)] = (1));

return statearr_22570;
});
var cljs$core$async$transduce_$_state_machine__15401__auto____1 = (function (state_22568){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22571){if((e22571 instanceof Object)){
var ex__15404__auto__ = e22571;
var statearr_22572_22574 = state_22568;
(statearr_22572_22574[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22575 = state_22568;
state_22568 = G__22575;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15401__auto__ = function(state_22568){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15401__auto____1.call(this,state_22568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15401__auto____0;
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15401__auto____1;
return cljs$core$async$transduce_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__,f__$1))
})();
var state__15425__auto__ = (function (){var statearr_22573 = f__15424__auto__.call(null);
(statearr_22573[(6)] = c__15423__auto__);

return statearr_22573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__,f__$1))
);

return c__15423__auto__;
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
var G__22577 = arguments.length;
switch (G__22577) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__){
return (function (state_22602){
var state_val_22603 = (state_22602[(1)]);
if((state_val_22603 === (7))){
var inst_22584 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22604_22625 = state_22602__$1;
(statearr_22604_22625[(2)] = inst_22584);

(statearr_22604_22625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (1))){
var inst_22578 = cljs.core.seq.call(null,coll);
var inst_22579 = inst_22578;
var state_22602__$1 = (function (){var statearr_22605 = state_22602;
(statearr_22605[(7)] = inst_22579);

return statearr_22605;
})();
var statearr_22606_22626 = state_22602__$1;
(statearr_22606_22626[(2)] = null);

(statearr_22606_22626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (4))){
var inst_22579 = (state_22602[(7)]);
var inst_22582 = cljs.core.first.call(null,inst_22579);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22602__$1,(7),ch,inst_22582);
} else {
if((state_val_22603 === (13))){
var inst_22596 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22607_22627 = state_22602__$1;
(statearr_22607_22627[(2)] = inst_22596);

(statearr_22607_22627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (6))){
var inst_22587 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22587)){
var statearr_22608_22628 = state_22602__$1;
(statearr_22608_22628[(1)] = (8));

} else {
var statearr_22609_22629 = state_22602__$1;
(statearr_22609_22629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (3))){
var inst_22600 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22602__$1,inst_22600);
} else {
if((state_val_22603 === (12))){
var state_22602__$1 = state_22602;
var statearr_22610_22630 = state_22602__$1;
(statearr_22610_22630[(2)] = null);

(statearr_22610_22630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (2))){
var inst_22579 = (state_22602[(7)]);
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22579)){
var statearr_22611_22631 = state_22602__$1;
(statearr_22611_22631[(1)] = (4));

} else {
var statearr_22612_22632 = state_22602__$1;
(statearr_22612_22632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (11))){
var inst_22593 = cljs.core.async.close_BANG_.call(null,ch);
var state_22602__$1 = state_22602;
var statearr_22613_22633 = state_22602__$1;
(statearr_22613_22633[(2)] = inst_22593);

(statearr_22613_22633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (9))){
var state_22602__$1 = state_22602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22614_22634 = state_22602__$1;
(statearr_22614_22634[(1)] = (11));

} else {
var statearr_22615_22635 = state_22602__$1;
(statearr_22615_22635[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (5))){
var inst_22579 = (state_22602[(7)]);
var state_22602__$1 = state_22602;
var statearr_22616_22636 = state_22602__$1;
(statearr_22616_22636[(2)] = inst_22579);

(statearr_22616_22636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (10))){
var inst_22598 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22617_22637 = state_22602__$1;
(statearr_22617_22637[(2)] = inst_22598);

(statearr_22617_22637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (8))){
var inst_22579 = (state_22602[(7)]);
var inst_22589 = cljs.core.next.call(null,inst_22579);
var inst_22579__$1 = inst_22589;
var state_22602__$1 = (function (){var statearr_22618 = state_22602;
(statearr_22618[(7)] = inst_22579__$1);

return statearr_22618;
})();
var statearr_22619_22638 = state_22602__$1;
(statearr_22619_22638[(2)] = null);

(statearr_22619_22638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto__))
;
return ((function (switch__15400__auto__,c__15423__auto__){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_22620 = [null,null,null,null,null,null,null,null];
(statearr_22620[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_22620[(1)] = (1));

return statearr_22620;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_22602){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22621){if((e22621 instanceof Object)){
var ex__15404__auto__ = e22621;
var statearr_22622_22639 = state_22602;
(statearr_22622_22639[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22640 = state_22602;
state_22602 = G__22640;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_22602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_22602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__))
})();
var state__15425__auto__ = (function (){var statearr_22623 = f__15424__auto__.call(null);
(statearr_22623[(6)] = c__15423__auto__);

return statearr_22623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__))
);

return c__15423__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22641 = (function (ch,cs,meta22642){
this.ch = ch;
this.cs = cs;
this.meta22642 = meta22642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22643,meta22642__$1){
var self__ = this;
var _22643__$1 = this;
return (new cljs.core.async.t_cljs$core$async22641(self__.ch,self__.cs,meta22642__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22643){
var self__ = this;
var _22643__$1 = this;
return self__.meta22642;
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22642","meta22642",211548258,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22641";

cljs.core.async.t_cljs$core$async22641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22641");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22641.
 */
cljs.core.async.__GT_t_cljs$core$async22641 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22641(ch__$1,cs__$1,meta22642){
return (new cljs.core.async.t_cljs$core$async22641(ch__$1,cs__$1,meta22642));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22641(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15423__auto___22863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___22863,cs,m,dchan,dctr,done){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___22863,cs,m,dchan,dctr,done){
return (function (state_22778){
var state_val_22779 = (state_22778[(1)]);
if((state_val_22779 === (7))){
var inst_22774 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22780_22864 = state_22778__$1;
(statearr_22780_22864[(2)] = inst_22774);

(statearr_22780_22864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (20))){
var inst_22677 = (state_22778[(7)]);
var inst_22689 = cljs.core.first.call(null,inst_22677);
var inst_22690 = cljs.core.nth.call(null,inst_22689,(0),null);
var inst_22691 = cljs.core.nth.call(null,inst_22689,(1),null);
var state_22778__$1 = (function (){var statearr_22781 = state_22778;
(statearr_22781[(8)] = inst_22690);

return statearr_22781;
})();
if(cljs.core.truth_(inst_22691)){
var statearr_22782_22865 = state_22778__$1;
(statearr_22782_22865[(1)] = (22));

} else {
var statearr_22783_22866 = state_22778__$1;
(statearr_22783_22866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (27))){
var inst_22646 = (state_22778[(9)]);
var inst_22721 = (state_22778[(10)]);
var inst_22726 = (state_22778[(11)]);
var inst_22719 = (state_22778[(12)]);
var inst_22726__$1 = cljs.core._nth.call(null,inst_22719,inst_22721);
var inst_22727 = cljs.core.async.put_BANG_.call(null,inst_22726__$1,inst_22646,done);
var state_22778__$1 = (function (){var statearr_22784 = state_22778;
(statearr_22784[(11)] = inst_22726__$1);

return statearr_22784;
})();
if(cljs.core.truth_(inst_22727)){
var statearr_22785_22867 = state_22778__$1;
(statearr_22785_22867[(1)] = (30));

} else {
var statearr_22786_22868 = state_22778__$1;
(statearr_22786_22868[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (1))){
var state_22778__$1 = state_22778;
var statearr_22787_22869 = state_22778__$1;
(statearr_22787_22869[(2)] = null);

(statearr_22787_22869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (24))){
var inst_22677 = (state_22778[(7)]);
var inst_22696 = (state_22778[(2)]);
var inst_22697 = cljs.core.next.call(null,inst_22677);
var inst_22655 = inst_22697;
var inst_22656 = null;
var inst_22657 = (0);
var inst_22658 = (0);
var state_22778__$1 = (function (){var statearr_22788 = state_22778;
(statearr_22788[(13)] = inst_22655);

(statearr_22788[(14)] = inst_22656);

(statearr_22788[(15)] = inst_22657);

(statearr_22788[(16)] = inst_22696);

(statearr_22788[(17)] = inst_22658);

return statearr_22788;
})();
var statearr_22789_22870 = state_22778__$1;
(statearr_22789_22870[(2)] = null);

(statearr_22789_22870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (39))){
var state_22778__$1 = state_22778;
var statearr_22793_22871 = state_22778__$1;
(statearr_22793_22871[(2)] = null);

(statearr_22793_22871[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (4))){
var inst_22646 = (state_22778[(9)]);
var inst_22646__$1 = (state_22778[(2)]);
var inst_22647 = (inst_22646__$1 == null);
var state_22778__$1 = (function (){var statearr_22794 = state_22778;
(statearr_22794[(9)] = inst_22646__$1);

return statearr_22794;
})();
if(cljs.core.truth_(inst_22647)){
var statearr_22795_22872 = state_22778__$1;
(statearr_22795_22872[(1)] = (5));

} else {
var statearr_22796_22873 = state_22778__$1;
(statearr_22796_22873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (15))){
var inst_22655 = (state_22778[(13)]);
var inst_22656 = (state_22778[(14)]);
var inst_22657 = (state_22778[(15)]);
var inst_22658 = (state_22778[(17)]);
var inst_22673 = (state_22778[(2)]);
var inst_22674 = (inst_22658 + (1));
var tmp22790 = inst_22655;
var tmp22791 = inst_22656;
var tmp22792 = inst_22657;
var inst_22655__$1 = tmp22790;
var inst_22656__$1 = tmp22791;
var inst_22657__$1 = tmp22792;
var inst_22658__$1 = inst_22674;
var state_22778__$1 = (function (){var statearr_22797 = state_22778;
(statearr_22797[(13)] = inst_22655__$1);

(statearr_22797[(18)] = inst_22673);

(statearr_22797[(14)] = inst_22656__$1);

(statearr_22797[(15)] = inst_22657__$1);

(statearr_22797[(17)] = inst_22658__$1);

return statearr_22797;
})();
var statearr_22798_22874 = state_22778__$1;
(statearr_22798_22874[(2)] = null);

(statearr_22798_22874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (21))){
var inst_22700 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22802_22875 = state_22778__$1;
(statearr_22802_22875[(2)] = inst_22700);

(statearr_22802_22875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (31))){
var inst_22726 = (state_22778[(11)]);
var inst_22730 = done.call(null,null);
var inst_22731 = cljs.core.async.untap_STAR_.call(null,m,inst_22726);
var state_22778__$1 = (function (){var statearr_22803 = state_22778;
(statearr_22803[(19)] = inst_22730);

return statearr_22803;
})();
var statearr_22804_22876 = state_22778__$1;
(statearr_22804_22876[(2)] = inst_22731);

(statearr_22804_22876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (32))){
var inst_22718 = (state_22778[(20)]);
var inst_22720 = (state_22778[(21)]);
var inst_22721 = (state_22778[(10)]);
var inst_22719 = (state_22778[(12)]);
var inst_22733 = (state_22778[(2)]);
var inst_22734 = (inst_22721 + (1));
var tmp22799 = inst_22718;
var tmp22800 = inst_22720;
var tmp22801 = inst_22719;
var inst_22718__$1 = tmp22799;
var inst_22719__$1 = tmp22801;
var inst_22720__$1 = tmp22800;
var inst_22721__$1 = inst_22734;
var state_22778__$1 = (function (){var statearr_22805 = state_22778;
(statearr_22805[(20)] = inst_22718__$1);

(statearr_22805[(21)] = inst_22720__$1);

(statearr_22805[(10)] = inst_22721__$1);

(statearr_22805[(12)] = inst_22719__$1);

(statearr_22805[(22)] = inst_22733);

return statearr_22805;
})();
var statearr_22806_22877 = state_22778__$1;
(statearr_22806_22877[(2)] = null);

(statearr_22806_22877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (40))){
var inst_22746 = (state_22778[(23)]);
var inst_22750 = done.call(null,null);
var inst_22751 = cljs.core.async.untap_STAR_.call(null,m,inst_22746);
var state_22778__$1 = (function (){var statearr_22807 = state_22778;
(statearr_22807[(24)] = inst_22750);

return statearr_22807;
})();
var statearr_22808_22878 = state_22778__$1;
(statearr_22808_22878[(2)] = inst_22751);

(statearr_22808_22878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (33))){
var inst_22737 = (state_22778[(25)]);
var inst_22739 = cljs.core.chunked_seq_QMARK_.call(null,inst_22737);
var state_22778__$1 = state_22778;
if(inst_22739){
var statearr_22809_22879 = state_22778__$1;
(statearr_22809_22879[(1)] = (36));

} else {
var statearr_22810_22880 = state_22778__$1;
(statearr_22810_22880[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (13))){
var inst_22667 = (state_22778[(26)]);
var inst_22670 = cljs.core.async.close_BANG_.call(null,inst_22667);
var state_22778__$1 = state_22778;
var statearr_22811_22881 = state_22778__$1;
(statearr_22811_22881[(2)] = inst_22670);

(statearr_22811_22881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (22))){
var inst_22690 = (state_22778[(8)]);
var inst_22693 = cljs.core.async.close_BANG_.call(null,inst_22690);
var state_22778__$1 = state_22778;
var statearr_22812_22882 = state_22778__$1;
(statearr_22812_22882[(2)] = inst_22693);

(statearr_22812_22882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (36))){
var inst_22737 = (state_22778[(25)]);
var inst_22741 = cljs.core.chunk_first.call(null,inst_22737);
var inst_22742 = cljs.core.chunk_rest.call(null,inst_22737);
var inst_22743 = cljs.core.count.call(null,inst_22741);
var inst_22718 = inst_22742;
var inst_22719 = inst_22741;
var inst_22720 = inst_22743;
var inst_22721 = (0);
var state_22778__$1 = (function (){var statearr_22813 = state_22778;
(statearr_22813[(20)] = inst_22718);

(statearr_22813[(21)] = inst_22720);

(statearr_22813[(10)] = inst_22721);

(statearr_22813[(12)] = inst_22719);

return statearr_22813;
})();
var statearr_22814_22883 = state_22778__$1;
(statearr_22814_22883[(2)] = null);

(statearr_22814_22883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (41))){
var inst_22737 = (state_22778[(25)]);
var inst_22753 = (state_22778[(2)]);
var inst_22754 = cljs.core.next.call(null,inst_22737);
var inst_22718 = inst_22754;
var inst_22719 = null;
var inst_22720 = (0);
var inst_22721 = (0);
var state_22778__$1 = (function (){var statearr_22815 = state_22778;
(statearr_22815[(20)] = inst_22718);

(statearr_22815[(21)] = inst_22720);

(statearr_22815[(10)] = inst_22721);

(statearr_22815[(27)] = inst_22753);

(statearr_22815[(12)] = inst_22719);

return statearr_22815;
})();
var statearr_22816_22884 = state_22778__$1;
(statearr_22816_22884[(2)] = null);

(statearr_22816_22884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (43))){
var state_22778__$1 = state_22778;
var statearr_22817_22885 = state_22778__$1;
(statearr_22817_22885[(2)] = null);

(statearr_22817_22885[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (29))){
var inst_22762 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22818_22886 = state_22778__$1;
(statearr_22818_22886[(2)] = inst_22762);

(statearr_22818_22886[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (44))){
var inst_22771 = (state_22778[(2)]);
var state_22778__$1 = (function (){var statearr_22819 = state_22778;
(statearr_22819[(28)] = inst_22771);

return statearr_22819;
})();
var statearr_22820_22887 = state_22778__$1;
(statearr_22820_22887[(2)] = null);

(statearr_22820_22887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (6))){
var inst_22710 = (state_22778[(29)]);
var inst_22709 = cljs.core.deref.call(null,cs);
var inst_22710__$1 = cljs.core.keys.call(null,inst_22709);
var inst_22711 = cljs.core.count.call(null,inst_22710__$1);
var inst_22712 = cljs.core.reset_BANG_.call(null,dctr,inst_22711);
var inst_22717 = cljs.core.seq.call(null,inst_22710__$1);
var inst_22718 = inst_22717;
var inst_22719 = null;
var inst_22720 = (0);
var inst_22721 = (0);
var state_22778__$1 = (function (){var statearr_22821 = state_22778;
(statearr_22821[(29)] = inst_22710__$1);

(statearr_22821[(20)] = inst_22718);

(statearr_22821[(21)] = inst_22720);

(statearr_22821[(10)] = inst_22721);

(statearr_22821[(30)] = inst_22712);

(statearr_22821[(12)] = inst_22719);

return statearr_22821;
})();
var statearr_22822_22888 = state_22778__$1;
(statearr_22822_22888[(2)] = null);

(statearr_22822_22888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (28))){
var inst_22718 = (state_22778[(20)]);
var inst_22737 = (state_22778[(25)]);
var inst_22737__$1 = cljs.core.seq.call(null,inst_22718);
var state_22778__$1 = (function (){var statearr_22823 = state_22778;
(statearr_22823[(25)] = inst_22737__$1);

return statearr_22823;
})();
if(inst_22737__$1){
var statearr_22824_22889 = state_22778__$1;
(statearr_22824_22889[(1)] = (33));

} else {
var statearr_22825_22890 = state_22778__$1;
(statearr_22825_22890[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (25))){
var inst_22720 = (state_22778[(21)]);
var inst_22721 = (state_22778[(10)]);
var inst_22723 = (inst_22721 < inst_22720);
var inst_22724 = inst_22723;
var state_22778__$1 = state_22778;
if(cljs.core.truth_(inst_22724)){
var statearr_22826_22891 = state_22778__$1;
(statearr_22826_22891[(1)] = (27));

} else {
var statearr_22827_22892 = state_22778__$1;
(statearr_22827_22892[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (34))){
var state_22778__$1 = state_22778;
var statearr_22828_22893 = state_22778__$1;
(statearr_22828_22893[(2)] = null);

(statearr_22828_22893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (17))){
var state_22778__$1 = state_22778;
var statearr_22829_22894 = state_22778__$1;
(statearr_22829_22894[(2)] = null);

(statearr_22829_22894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (3))){
var inst_22776 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22778__$1,inst_22776);
} else {
if((state_val_22779 === (12))){
var inst_22705 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22830_22895 = state_22778__$1;
(statearr_22830_22895[(2)] = inst_22705);

(statearr_22830_22895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (2))){
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22778__$1,(4),ch);
} else {
if((state_val_22779 === (23))){
var state_22778__$1 = state_22778;
var statearr_22831_22896 = state_22778__$1;
(statearr_22831_22896[(2)] = null);

(statearr_22831_22896[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (35))){
var inst_22760 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22832_22897 = state_22778__$1;
(statearr_22832_22897[(2)] = inst_22760);

(statearr_22832_22897[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (19))){
var inst_22677 = (state_22778[(7)]);
var inst_22681 = cljs.core.chunk_first.call(null,inst_22677);
var inst_22682 = cljs.core.chunk_rest.call(null,inst_22677);
var inst_22683 = cljs.core.count.call(null,inst_22681);
var inst_22655 = inst_22682;
var inst_22656 = inst_22681;
var inst_22657 = inst_22683;
var inst_22658 = (0);
var state_22778__$1 = (function (){var statearr_22833 = state_22778;
(statearr_22833[(13)] = inst_22655);

(statearr_22833[(14)] = inst_22656);

(statearr_22833[(15)] = inst_22657);

(statearr_22833[(17)] = inst_22658);

return statearr_22833;
})();
var statearr_22834_22898 = state_22778__$1;
(statearr_22834_22898[(2)] = null);

(statearr_22834_22898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (11))){
var inst_22655 = (state_22778[(13)]);
var inst_22677 = (state_22778[(7)]);
var inst_22677__$1 = cljs.core.seq.call(null,inst_22655);
var state_22778__$1 = (function (){var statearr_22835 = state_22778;
(statearr_22835[(7)] = inst_22677__$1);

return statearr_22835;
})();
if(inst_22677__$1){
var statearr_22836_22899 = state_22778__$1;
(statearr_22836_22899[(1)] = (16));

} else {
var statearr_22837_22900 = state_22778__$1;
(statearr_22837_22900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (9))){
var inst_22707 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22838_22901 = state_22778__$1;
(statearr_22838_22901[(2)] = inst_22707);

(statearr_22838_22901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (5))){
var inst_22653 = cljs.core.deref.call(null,cs);
var inst_22654 = cljs.core.seq.call(null,inst_22653);
var inst_22655 = inst_22654;
var inst_22656 = null;
var inst_22657 = (0);
var inst_22658 = (0);
var state_22778__$1 = (function (){var statearr_22839 = state_22778;
(statearr_22839[(13)] = inst_22655);

(statearr_22839[(14)] = inst_22656);

(statearr_22839[(15)] = inst_22657);

(statearr_22839[(17)] = inst_22658);

return statearr_22839;
})();
var statearr_22840_22902 = state_22778__$1;
(statearr_22840_22902[(2)] = null);

(statearr_22840_22902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (14))){
var state_22778__$1 = state_22778;
var statearr_22841_22903 = state_22778__$1;
(statearr_22841_22903[(2)] = null);

(statearr_22841_22903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (45))){
var inst_22768 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22842_22904 = state_22778__$1;
(statearr_22842_22904[(2)] = inst_22768);

(statearr_22842_22904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (26))){
var inst_22710 = (state_22778[(29)]);
var inst_22764 = (state_22778[(2)]);
var inst_22765 = cljs.core.seq.call(null,inst_22710);
var state_22778__$1 = (function (){var statearr_22843 = state_22778;
(statearr_22843[(31)] = inst_22764);

return statearr_22843;
})();
if(inst_22765){
var statearr_22844_22905 = state_22778__$1;
(statearr_22844_22905[(1)] = (42));

} else {
var statearr_22845_22906 = state_22778__$1;
(statearr_22845_22906[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (16))){
var inst_22677 = (state_22778[(7)]);
var inst_22679 = cljs.core.chunked_seq_QMARK_.call(null,inst_22677);
var state_22778__$1 = state_22778;
if(inst_22679){
var statearr_22846_22907 = state_22778__$1;
(statearr_22846_22907[(1)] = (19));

} else {
var statearr_22847_22908 = state_22778__$1;
(statearr_22847_22908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (38))){
var inst_22757 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22848_22909 = state_22778__$1;
(statearr_22848_22909[(2)] = inst_22757);

(statearr_22848_22909[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (30))){
var state_22778__$1 = state_22778;
var statearr_22849_22910 = state_22778__$1;
(statearr_22849_22910[(2)] = null);

(statearr_22849_22910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (10))){
var inst_22656 = (state_22778[(14)]);
var inst_22658 = (state_22778[(17)]);
var inst_22666 = cljs.core._nth.call(null,inst_22656,inst_22658);
var inst_22667 = cljs.core.nth.call(null,inst_22666,(0),null);
var inst_22668 = cljs.core.nth.call(null,inst_22666,(1),null);
var state_22778__$1 = (function (){var statearr_22850 = state_22778;
(statearr_22850[(26)] = inst_22667);

return statearr_22850;
})();
if(cljs.core.truth_(inst_22668)){
var statearr_22851_22911 = state_22778__$1;
(statearr_22851_22911[(1)] = (13));

} else {
var statearr_22852_22912 = state_22778__$1;
(statearr_22852_22912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (18))){
var inst_22703 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22853_22913 = state_22778__$1;
(statearr_22853_22913[(2)] = inst_22703);

(statearr_22853_22913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (42))){
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22778__$1,(45),dchan);
} else {
if((state_val_22779 === (37))){
var inst_22646 = (state_22778[(9)]);
var inst_22746 = (state_22778[(23)]);
var inst_22737 = (state_22778[(25)]);
var inst_22746__$1 = cljs.core.first.call(null,inst_22737);
var inst_22747 = cljs.core.async.put_BANG_.call(null,inst_22746__$1,inst_22646,done);
var state_22778__$1 = (function (){var statearr_22854 = state_22778;
(statearr_22854[(23)] = inst_22746__$1);

return statearr_22854;
})();
if(cljs.core.truth_(inst_22747)){
var statearr_22855_22914 = state_22778__$1;
(statearr_22855_22914[(1)] = (39));

} else {
var statearr_22856_22915 = state_22778__$1;
(statearr_22856_22915[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (8))){
var inst_22657 = (state_22778[(15)]);
var inst_22658 = (state_22778[(17)]);
var inst_22660 = (inst_22658 < inst_22657);
var inst_22661 = inst_22660;
var state_22778__$1 = state_22778;
if(cljs.core.truth_(inst_22661)){
var statearr_22857_22916 = state_22778__$1;
(statearr_22857_22916[(1)] = (10));

} else {
var statearr_22858_22917 = state_22778__$1;
(statearr_22858_22917[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___22863,cs,m,dchan,dctr,done))
;
return ((function (switch__15400__auto__,c__15423__auto___22863,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15401__auto__ = null;
var cljs$core$async$mult_$_state_machine__15401__auto____0 = (function (){
var statearr_22859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22859[(0)] = cljs$core$async$mult_$_state_machine__15401__auto__);

(statearr_22859[(1)] = (1));

return statearr_22859;
});
var cljs$core$async$mult_$_state_machine__15401__auto____1 = (function (state_22778){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_22778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e22860){if((e22860 instanceof Object)){
var ex__15404__auto__ = e22860;
var statearr_22861_22918 = state_22778;
(statearr_22861_22918[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22919 = state_22778;
state_22778 = G__22919;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15401__auto__ = function(state_22778){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15401__auto____1.call(this,state_22778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15401__auto____0;
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15401__auto____1;
return cljs$core$async$mult_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___22863,cs,m,dchan,dctr,done))
})();
var state__15425__auto__ = (function (){var statearr_22862 = f__15424__auto__.call(null);
(statearr_22862[(6)] = c__15423__auto___22863);

return statearr_22862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___22863,cs,m,dchan,dctr,done))
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
var G__22921 = arguments.length;
switch (G__22921) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22933 = arguments.length;
var i__4532__auto___22934 = (0);
while(true){
if((i__4532__auto___22934 < len__4531__auto___22933)){
args__4534__auto__.push((arguments[i__4532__auto___22934]));

var G__22935 = (i__4532__auto___22934 + (1));
i__4532__auto___22934 = G__22935;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22927){
var map__22928 = p__22927;
var map__22928__$1 = ((((!((map__22928 == null)))?(((((map__22928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22928):map__22928);
var opts = map__22928__$1;
var statearr_22930_22936 = state;
(statearr_22930_22936[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__22928,map__22928__$1,opts){
return (function (val){
var statearr_22931_22937 = state;
(statearr_22931_22937[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22928,map__22928__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_22932_22938 = state;
(statearr_22932_22938[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22923){
var G__22924 = cljs.core.first.call(null,seq22923);
var seq22923__$1 = cljs.core.next.call(null,seq22923);
var G__22925 = cljs.core.first.call(null,seq22923__$1);
var seq22923__$2 = cljs.core.next.call(null,seq22923__$1);
var G__22926 = cljs.core.first.call(null,seq22923__$2);
var seq22923__$3 = cljs.core.next.call(null,seq22923__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22924,G__22925,G__22926,seq22923__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22939 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22940){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22940 = meta22940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22941,meta22940__$1){
var self__ = this;
var _22941__$1 = this;
return (new cljs.core.async.t_cljs$core$async22939(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22940__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22941){
var self__ = this;
var _22941__$1 = this;
return self__.meta22940;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22940","meta22940",379025694,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22939";

cljs.core.async.t_cljs$core$async22939.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22939");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22939.
 */
cljs.core.async.__GT_t_cljs$core$async22939 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22939(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22940){
return (new cljs.core.async.t_cljs$core$async22939(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22940));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22939(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15423__auto___23103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23043){
var state_val_23044 = (state_23043[(1)]);
if((state_val_23044 === (7))){
var inst_22958 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23045_23104 = state_23043__$1;
(statearr_23045_23104[(2)] = inst_22958);

(statearr_23045_23104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (20))){
var inst_22970 = (state_23043[(7)]);
var state_23043__$1 = state_23043;
var statearr_23046_23105 = state_23043__$1;
(statearr_23046_23105[(2)] = inst_22970);

(statearr_23046_23105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (27))){
var state_23043__$1 = state_23043;
var statearr_23047_23106 = state_23043__$1;
(statearr_23047_23106[(2)] = null);

(statearr_23047_23106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (1))){
var inst_22945 = (state_23043[(8)]);
var inst_22945__$1 = calc_state.call(null);
var inst_22947 = (inst_22945__$1 == null);
var inst_22948 = cljs.core.not.call(null,inst_22947);
var state_23043__$1 = (function (){var statearr_23048 = state_23043;
(statearr_23048[(8)] = inst_22945__$1);

return statearr_23048;
})();
if(inst_22948){
var statearr_23049_23107 = state_23043__$1;
(statearr_23049_23107[(1)] = (2));

} else {
var statearr_23050_23108 = state_23043__$1;
(statearr_23050_23108[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (24))){
var inst_23017 = (state_23043[(9)]);
var inst_22994 = (state_23043[(10)]);
var inst_23003 = (state_23043[(11)]);
var inst_23017__$1 = inst_22994.call(null,inst_23003);
var state_23043__$1 = (function (){var statearr_23051 = state_23043;
(statearr_23051[(9)] = inst_23017__$1);

return statearr_23051;
})();
if(cljs.core.truth_(inst_23017__$1)){
var statearr_23052_23109 = state_23043__$1;
(statearr_23052_23109[(1)] = (29));

} else {
var statearr_23053_23110 = state_23043__$1;
(statearr_23053_23110[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (4))){
var inst_22961 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_22961)){
var statearr_23054_23111 = state_23043__$1;
(statearr_23054_23111[(1)] = (8));

} else {
var statearr_23055_23112 = state_23043__$1;
(statearr_23055_23112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (15))){
var inst_22988 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_22988)){
var statearr_23056_23113 = state_23043__$1;
(statearr_23056_23113[(1)] = (19));

} else {
var statearr_23057_23114 = state_23043__$1;
(statearr_23057_23114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (21))){
var inst_22993 = (state_23043[(12)]);
var inst_22993__$1 = (state_23043[(2)]);
var inst_22994 = cljs.core.get.call(null,inst_22993__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22995 = cljs.core.get.call(null,inst_22993__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22996 = cljs.core.get.call(null,inst_22993__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23043__$1 = (function (){var statearr_23058 = state_23043;
(statearr_23058[(13)] = inst_22995);

(statearr_23058[(10)] = inst_22994);

(statearr_23058[(12)] = inst_22993__$1);

return statearr_23058;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23043__$1,(22),inst_22996);
} else {
if((state_val_23044 === (31))){
var inst_23025 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_23025)){
var statearr_23059_23115 = state_23043__$1;
(statearr_23059_23115[(1)] = (32));

} else {
var statearr_23060_23116 = state_23043__$1;
(statearr_23060_23116[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (32))){
var inst_23002 = (state_23043[(14)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23043__$1,(35),out,inst_23002);
} else {
if((state_val_23044 === (33))){
var inst_22993 = (state_23043[(12)]);
var inst_22970 = inst_22993;
var state_23043__$1 = (function (){var statearr_23061 = state_23043;
(statearr_23061[(7)] = inst_22970);

return statearr_23061;
})();
var statearr_23062_23117 = state_23043__$1;
(statearr_23062_23117[(2)] = null);

(statearr_23062_23117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (13))){
var inst_22970 = (state_23043[(7)]);
var inst_22977 = inst_22970.cljs$lang$protocol_mask$partition0$;
var inst_22978 = (inst_22977 & (64));
var inst_22979 = inst_22970.cljs$core$ISeq$;
var inst_22980 = (cljs.core.PROTOCOL_SENTINEL === inst_22979);
var inst_22981 = ((inst_22978) || (inst_22980));
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_22981)){
var statearr_23063_23118 = state_23043__$1;
(statearr_23063_23118[(1)] = (16));

} else {
var statearr_23064_23119 = state_23043__$1;
(statearr_23064_23119[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (22))){
var inst_23002 = (state_23043[(14)]);
var inst_23003 = (state_23043[(11)]);
var inst_23001 = (state_23043[(2)]);
var inst_23002__$1 = cljs.core.nth.call(null,inst_23001,(0),null);
var inst_23003__$1 = cljs.core.nth.call(null,inst_23001,(1),null);
var inst_23004 = (inst_23002__$1 == null);
var inst_23005 = cljs.core._EQ_.call(null,inst_23003__$1,change);
var inst_23006 = ((inst_23004) || (inst_23005));
var state_23043__$1 = (function (){var statearr_23065 = state_23043;
(statearr_23065[(14)] = inst_23002__$1);

(statearr_23065[(11)] = inst_23003__$1);

return statearr_23065;
})();
if(cljs.core.truth_(inst_23006)){
var statearr_23066_23120 = state_23043__$1;
(statearr_23066_23120[(1)] = (23));

} else {
var statearr_23067_23121 = state_23043__$1;
(statearr_23067_23121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (36))){
var inst_22993 = (state_23043[(12)]);
var inst_22970 = inst_22993;
var state_23043__$1 = (function (){var statearr_23068 = state_23043;
(statearr_23068[(7)] = inst_22970);

return statearr_23068;
})();
var statearr_23069_23122 = state_23043__$1;
(statearr_23069_23122[(2)] = null);

(statearr_23069_23122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (29))){
var inst_23017 = (state_23043[(9)]);
var state_23043__$1 = state_23043;
var statearr_23070_23123 = state_23043__$1;
(statearr_23070_23123[(2)] = inst_23017);

(statearr_23070_23123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (6))){
var state_23043__$1 = state_23043;
var statearr_23071_23124 = state_23043__$1;
(statearr_23071_23124[(2)] = false);

(statearr_23071_23124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (28))){
var inst_23013 = (state_23043[(2)]);
var inst_23014 = calc_state.call(null);
var inst_22970 = inst_23014;
var state_23043__$1 = (function (){var statearr_23072 = state_23043;
(statearr_23072[(7)] = inst_22970);

(statearr_23072[(15)] = inst_23013);

return statearr_23072;
})();
var statearr_23073_23125 = state_23043__$1;
(statearr_23073_23125[(2)] = null);

(statearr_23073_23125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (25))){
var inst_23039 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23074_23126 = state_23043__$1;
(statearr_23074_23126[(2)] = inst_23039);

(statearr_23074_23126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (34))){
var inst_23037 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23075_23127 = state_23043__$1;
(statearr_23075_23127[(2)] = inst_23037);

(statearr_23075_23127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (17))){
var state_23043__$1 = state_23043;
var statearr_23076_23128 = state_23043__$1;
(statearr_23076_23128[(2)] = false);

(statearr_23076_23128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (3))){
var state_23043__$1 = state_23043;
var statearr_23077_23129 = state_23043__$1;
(statearr_23077_23129[(2)] = false);

(statearr_23077_23129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (12))){
var inst_23041 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23043__$1,inst_23041);
} else {
if((state_val_23044 === (2))){
var inst_22945 = (state_23043[(8)]);
var inst_22950 = inst_22945.cljs$lang$protocol_mask$partition0$;
var inst_22951 = (inst_22950 & (64));
var inst_22952 = inst_22945.cljs$core$ISeq$;
var inst_22953 = (cljs.core.PROTOCOL_SENTINEL === inst_22952);
var inst_22954 = ((inst_22951) || (inst_22953));
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_22954)){
var statearr_23078_23130 = state_23043__$1;
(statearr_23078_23130[(1)] = (5));

} else {
var statearr_23079_23131 = state_23043__$1;
(statearr_23079_23131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (23))){
var inst_23002 = (state_23043[(14)]);
var inst_23008 = (inst_23002 == null);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_23008)){
var statearr_23080_23132 = state_23043__$1;
(statearr_23080_23132[(1)] = (26));

} else {
var statearr_23081_23133 = state_23043__$1;
(statearr_23081_23133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (35))){
var inst_23028 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_23028)){
var statearr_23082_23134 = state_23043__$1;
(statearr_23082_23134[(1)] = (36));

} else {
var statearr_23083_23135 = state_23043__$1;
(statearr_23083_23135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (19))){
var inst_22970 = (state_23043[(7)]);
var inst_22990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22970);
var state_23043__$1 = state_23043;
var statearr_23084_23136 = state_23043__$1;
(statearr_23084_23136[(2)] = inst_22990);

(statearr_23084_23136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (11))){
var inst_22970 = (state_23043[(7)]);
var inst_22974 = (inst_22970 == null);
var inst_22975 = cljs.core.not.call(null,inst_22974);
var state_23043__$1 = state_23043;
if(inst_22975){
var statearr_23085_23137 = state_23043__$1;
(statearr_23085_23137[(1)] = (13));

} else {
var statearr_23086_23138 = state_23043__$1;
(statearr_23086_23138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (9))){
var inst_22945 = (state_23043[(8)]);
var state_23043__$1 = state_23043;
var statearr_23087_23139 = state_23043__$1;
(statearr_23087_23139[(2)] = inst_22945);

(statearr_23087_23139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (5))){
var state_23043__$1 = state_23043;
var statearr_23088_23140 = state_23043__$1;
(statearr_23088_23140[(2)] = true);

(statearr_23088_23140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (14))){
var state_23043__$1 = state_23043;
var statearr_23089_23141 = state_23043__$1;
(statearr_23089_23141[(2)] = false);

(statearr_23089_23141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (26))){
var inst_23003 = (state_23043[(11)]);
var inst_23010 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23003);
var state_23043__$1 = state_23043;
var statearr_23090_23142 = state_23043__$1;
(statearr_23090_23142[(2)] = inst_23010);

(statearr_23090_23142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (16))){
var state_23043__$1 = state_23043;
var statearr_23091_23143 = state_23043__$1;
(statearr_23091_23143[(2)] = true);

(statearr_23091_23143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (38))){
var inst_23033 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23092_23144 = state_23043__$1;
(statearr_23092_23144[(2)] = inst_23033);

(statearr_23092_23144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (30))){
var inst_22995 = (state_23043[(13)]);
var inst_22994 = (state_23043[(10)]);
var inst_23003 = (state_23043[(11)]);
var inst_23020 = cljs.core.empty_QMARK_.call(null,inst_22994);
var inst_23021 = inst_22995.call(null,inst_23003);
var inst_23022 = cljs.core.not.call(null,inst_23021);
var inst_23023 = ((inst_23020) && (inst_23022));
var state_23043__$1 = state_23043;
var statearr_23093_23145 = state_23043__$1;
(statearr_23093_23145[(2)] = inst_23023);

(statearr_23093_23145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (10))){
var inst_22945 = (state_23043[(8)]);
var inst_22966 = (state_23043[(2)]);
var inst_22967 = cljs.core.get.call(null,inst_22966,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22968 = cljs.core.get.call(null,inst_22966,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22969 = cljs.core.get.call(null,inst_22966,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22970 = inst_22945;
var state_23043__$1 = (function (){var statearr_23094 = state_23043;
(statearr_23094[(16)] = inst_22969);

(statearr_23094[(7)] = inst_22970);

(statearr_23094[(17)] = inst_22968);

(statearr_23094[(18)] = inst_22967);

return statearr_23094;
})();
var statearr_23095_23146 = state_23043__$1;
(statearr_23095_23146[(2)] = null);

(statearr_23095_23146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (18))){
var inst_22985 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23096_23147 = state_23043__$1;
(statearr_23096_23147[(2)] = inst_22985);

(statearr_23096_23147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (37))){
var state_23043__$1 = state_23043;
var statearr_23097_23148 = state_23043__$1;
(statearr_23097_23148[(2)] = null);

(statearr_23097_23148[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (8))){
var inst_22945 = (state_23043[(8)]);
var inst_22963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22945);
var state_23043__$1 = state_23043;
var statearr_23098_23149 = state_23043__$1;
(statearr_23098_23149[(2)] = inst_22963);

(statearr_23098_23149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15400__auto__,c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15401__auto__ = null;
var cljs$core$async$mix_$_state_machine__15401__auto____0 = (function (){
var statearr_23099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23099[(0)] = cljs$core$async$mix_$_state_machine__15401__auto__);

(statearr_23099[(1)] = (1));

return statearr_23099;
});
var cljs$core$async$mix_$_state_machine__15401__auto____1 = (function (state_23043){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23100){if((e23100 instanceof Object)){
var ex__15404__auto__ = e23100;
var statearr_23101_23150 = state_23043;
(statearr_23101_23150[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23151 = state_23043;
state_23043 = G__23151;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15401__auto__ = function(state_23043){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15401__auto____1.call(this,state_23043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15401__auto____0;
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15401__auto____1;
return cljs$core$async$mix_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15425__auto__ = (function (){var statearr_23102 = f__15424__auto__.call(null);
(statearr_23102[(6)] = c__15423__auto___23103);

return statearr_23102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23153 = arguments.length;
switch (G__23153) {
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
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__23157 = arguments.length;
switch (G__23157) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__23155_SHARP_){
if(cljs.core.truth_(p1__23155_SHARP_.call(null,topic))){
return p1__23155_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23155_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23158 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23159){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23159 = meta23159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23160,meta23159__$1){
var self__ = this;
var _23160__$1 = this;
return (new cljs.core.async.t_cljs$core$async23158(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23159__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23160){
var self__ = this;
var _23160__$1 = this;
return self__.meta23159;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23159","meta23159",659072257,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23158";

cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23158");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23158.
 */
cljs.core.async.__GT_t_cljs$core$async23158 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23158(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23159){
return (new cljs.core.async.t_cljs$core$async23158(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23159));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23158(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15423__auto___23278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23278,mults,ensure_mult,p){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23278,mults,ensure_mult,p){
return (function (state_23232){
var state_val_23233 = (state_23232[(1)]);
if((state_val_23233 === (7))){
var inst_23228 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23234_23279 = state_23232__$1;
(statearr_23234_23279[(2)] = inst_23228);

(statearr_23234_23279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (20))){
var state_23232__$1 = state_23232;
var statearr_23235_23280 = state_23232__$1;
(statearr_23235_23280[(2)] = null);

(statearr_23235_23280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (1))){
var state_23232__$1 = state_23232;
var statearr_23236_23281 = state_23232__$1;
(statearr_23236_23281[(2)] = null);

(statearr_23236_23281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (24))){
var inst_23211 = (state_23232[(7)]);
var inst_23220 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23211);
var state_23232__$1 = state_23232;
var statearr_23237_23282 = state_23232__$1;
(statearr_23237_23282[(2)] = inst_23220);

(statearr_23237_23282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (4))){
var inst_23163 = (state_23232[(8)]);
var inst_23163__$1 = (state_23232[(2)]);
var inst_23164 = (inst_23163__$1 == null);
var state_23232__$1 = (function (){var statearr_23238 = state_23232;
(statearr_23238[(8)] = inst_23163__$1);

return statearr_23238;
})();
if(cljs.core.truth_(inst_23164)){
var statearr_23239_23283 = state_23232__$1;
(statearr_23239_23283[(1)] = (5));

} else {
var statearr_23240_23284 = state_23232__$1;
(statearr_23240_23284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (15))){
var inst_23205 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23241_23285 = state_23232__$1;
(statearr_23241_23285[(2)] = inst_23205);

(statearr_23241_23285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (21))){
var inst_23225 = (state_23232[(2)]);
var state_23232__$1 = (function (){var statearr_23242 = state_23232;
(statearr_23242[(9)] = inst_23225);

return statearr_23242;
})();
var statearr_23243_23286 = state_23232__$1;
(statearr_23243_23286[(2)] = null);

(statearr_23243_23286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (13))){
var inst_23187 = (state_23232[(10)]);
var inst_23189 = cljs.core.chunked_seq_QMARK_.call(null,inst_23187);
var state_23232__$1 = state_23232;
if(inst_23189){
var statearr_23244_23287 = state_23232__$1;
(statearr_23244_23287[(1)] = (16));

} else {
var statearr_23245_23288 = state_23232__$1;
(statearr_23245_23288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (22))){
var inst_23217 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
if(cljs.core.truth_(inst_23217)){
var statearr_23246_23289 = state_23232__$1;
(statearr_23246_23289[(1)] = (23));

} else {
var statearr_23247_23290 = state_23232__$1;
(statearr_23247_23290[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (6))){
var inst_23211 = (state_23232[(7)]);
var inst_23213 = (state_23232[(11)]);
var inst_23163 = (state_23232[(8)]);
var inst_23211__$1 = topic_fn.call(null,inst_23163);
var inst_23212 = cljs.core.deref.call(null,mults);
var inst_23213__$1 = cljs.core.get.call(null,inst_23212,inst_23211__$1);
var state_23232__$1 = (function (){var statearr_23248 = state_23232;
(statearr_23248[(7)] = inst_23211__$1);

(statearr_23248[(11)] = inst_23213__$1);

return statearr_23248;
})();
if(cljs.core.truth_(inst_23213__$1)){
var statearr_23249_23291 = state_23232__$1;
(statearr_23249_23291[(1)] = (19));

} else {
var statearr_23250_23292 = state_23232__$1;
(statearr_23250_23292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (25))){
var inst_23222 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23251_23293 = state_23232__$1;
(statearr_23251_23293[(2)] = inst_23222);

(statearr_23251_23293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (17))){
var inst_23187 = (state_23232[(10)]);
var inst_23196 = cljs.core.first.call(null,inst_23187);
var inst_23197 = cljs.core.async.muxch_STAR_.call(null,inst_23196);
var inst_23198 = cljs.core.async.close_BANG_.call(null,inst_23197);
var inst_23199 = cljs.core.next.call(null,inst_23187);
var inst_23173 = inst_23199;
var inst_23174 = null;
var inst_23175 = (0);
var inst_23176 = (0);
var state_23232__$1 = (function (){var statearr_23252 = state_23232;
(statearr_23252[(12)] = inst_23175);

(statearr_23252[(13)] = inst_23176);

(statearr_23252[(14)] = inst_23198);

(statearr_23252[(15)] = inst_23173);

(statearr_23252[(16)] = inst_23174);

return statearr_23252;
})();
var statearr_23253_23294 = state_23232__$1;
(statearr_23253_23294[(2)] = null);

(statearr_23253_23294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (3))){
var inst_23230 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23232__$1,inst_23230);
} else {
if((state_val_23233 === (12))){
var inst_23207 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23254_23295 = state_23232__$1;
(statearr_23254_23295[(2)] = inst_23207);

(statearr_23254_23295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (2))){
var state_23232__$1 = state_23232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23232__$1,(4),ch);
} else {
if((state_val_23233 === (23))){
var state_23232__$1 = state_23232;
var statearr_23255_23296 = state_23232__$1;
(statearr_23255_23296[(2)] = null);

(statearr_23255_23296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (19))){
var inst_23213 = (state_23232[(11)]);
var inst_23163 = (state_23232[(8)]);
var inst_23215 = cljs.core.async.muxch_STAR_.call(null,inst_23213);
var state_23232__$1 = state_23232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23232__$1,(22),inst_23215,inst_23163);
} else {
if((state_val_23233 === (11))){
var inst_23187 = (state_23232[(10)]);
var inst_23173 = (state_23232[(15)]);
var inst_23187__$1 = cljs.core.seq.call(null,inst_23173);
var state_23232__$1 = (function (){var statearr_23256 = state_23232;
(statearr_23256[(10)] = inst_23187__$1);

return statearr_23256;
})();
if(inst_23187__$1){
var statearr_23257_23297 = state_23232__$1;
(statearr_23257_23297[(1)] = (13));

} else {
var statearr_23258_23298 = state_23232__$1;
(statearr_23258_23298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (9))){
var inst_23209 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23259_23299 = state_23232__$1;
(statearr_23259_23299[(2)] = inst_23209);

(statearr_23259_23299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (5))){
var inst_23170 = cljs.core.deref.call(null,mults);
var inst_23171 = cljs.core.vals.call(null,inst_23170);
var inst_23172 = cljs.core.seq.call(null,inst_23171);
var inst_23173 = inst_23172;
var inst_23174 = null;
var inst_23175 = (0);
var inst_23176 = (0);
var state_23232__$1 = (function (){var statearr_23260 = state_23232;
(statearr_23260[(12)] = inst_23175);

(statearr_23260[(13)] = inst_23176);

(statearr_23260[(15)] = inst_23173);

(statearr_23260[(16)] = inst_23174);

return statearr_23260;
})();
var statearr_23261_23300 = state_23232__$1;
(statearr_23261_23300[(2)] = null);

(statearr_23261_23300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (14))){
var state_23232__$1 = state_23232;
var statearr_23265_23301 = state_23232__$1;
(statearr_23265_23301[(2)] = null);

(statearr_23265_23301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (16))){
var inst_23187 = (state_23232[(10)]);
var inst_23191 = cljs.core.chunk_first.call(null,inst_23187);
var inst_23192 = cljs.core.chunk_rest.call(null,inst_23187);
var inst_23193 = cljs.core.count.call(null,inst_23191);
var inst_23173 = inst_23192;
var inst_23174 = inst_23191;
var inst_23175 = inst_23193;
var inst_23176 = (0);
var state_23232__$1 = (function (){var statearr_23266 = state_23232;
(statearr_23266[(12)] = inst_23175);

(statearr_23266[(13)] = inst_23176);

(statearr_23266[(15)] = inst_23173);

(statearr_23266[(16)] = inst_23174);

return statearr_23266;
})();
var statearr_23267_23302 = state_23232__$1;
(statearr_23267_23302[(2)] = null);

(statearr_23267_23302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (10))){
var inst_23175 = (state_23232[(12)]);
var inst_23176 = (state_23232[(13)]);
var inst_23173 = (state_23232[(15)]);
var inst_23174 = (state_23232[(16)]);
var inst_23181 = cljs.core._nth.call(null,inst_23174,inst_23176);
var inst_23182 = cljs.core.async.muxch_STAR_.call(null,inst_23181);
var inst_23183 = cljs.core.async.close_BANG_.call(null,inst_23182);
var inst_23184 = (inst_23176 + (1));
var tmp23262 = inst_23175;
var tmp23263 = inst_23173;
var tmp23264 = inst_23174;
var inst_23173__$1 = tmp23263;
var inst_23174__$1 = tmp23264;
var inst_23175__$1 = tmp23262;
var inst_23176__$1 = inst_23184;
var state_23232__$1 = (function (){var statearr_23268 = state_23232;
(statearr_23268[(17)] = inst_23183);

(statearr_23268[(12)] = inst_23175__$1);

(statearr_23268[(13)] = inst_23176__$1);

(statearr_23268[(15)] = inst_23173__$1);

(statearr_23268[(16)] = inst_23174__$1);

return statearr_23268;
})();
var statearr_23269_23303 = state_23232__$1;
(statearr_23269_23303[(2)] = null);

(statearr_23269_23303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (18))){
var inst_23202 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23270_23304 = state_23232__$1;
(statearr_23270_23304[(2)] = inst_23202);

(statearr_23270_23304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (8))){
var inst_23175 = (state_23232[(12)]);
var inst_23176 = (state_23232[(13)]);
var inst_23178 = (inst_23176 < inst_23175);
var inst_23179 = inst_23178;
var state_23232__$1 = state_23232;
if(cljs.core.truth_(inst_23179)){
var statearr_23271_23305 = state_23232__$1;
(statearr_23271_23305[(1)] = (10));

} else {
var statearr_23272_23306 = state_23232__$1;
(statearr_23272_23306[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23278,mults,ensure_mult,p))
;
return ((function (switch__15400__auto__,c__15423__auto___23278,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23273[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23273[(1)] = (1));

return statearr_23273;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23232){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23274){if((e23274 instanceof Object)){
var ex__15404__auto__ = e23274;
var statearr_23275_23307 = state_23232;
(statearr_23275_23307[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23308 = state_23232;
state_23232 = G__23308;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23278,mults,ensure_mult,p))
})();
var state__15425__auto__ = (function (){var statearr_23276 = f__15424__auto__.call(null);
(statearr_23276[(6)] = c__15423__auto___23278);

return statearr_23276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23278,mults,ensure_mult,p))
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
var G__23310 = arguments.length;
switch (G__23310) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23313 = arguments.length;
switch (G__23313) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__23316 = arguments.length;
switch (G__23316) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15423__auto___23383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23355){
var state_val_23356 = (state_23355[(1)]);
if((state_val_23356 === (7))){
var state_23355__$1 = state_23355;
var statearr_23357_23384 = state_23355__$1;
(statearr_23357_23384[(2)] = null);

(statearr_23357_23384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (1))){
var state_23355__$1 = state_23355;
var statearr_23358_23385 = state_23355__$1;
(statearr_23358_23385[(2)] = null);

(statearr_23358_23385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (4))){
var inst_23319 = (state_23355[(7)]);
var inst_23321 = (inst_23319 < cnt);
var state_23355__$1 = state_23355;
if(cljs.core.truth_(inst_23321)){
var statearr_23359_23386 = state_23355__$1;
(statearr_23359_23386[(1)] = (6));

} else {
var statearr_23360_23387 = state_23355__$1;
(statearr_23360_23387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (15))){
var inst_23351 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
var statearr_23361_23388 = state_23355__$1;
(statearr_23361_23388[(2)] = inst_23351);

(statearr_23361_23388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (13))){
var inst_23344 = cljs.core.async.close_BANG_.call(null,out);
var state_23355__$1 = state_23355;
var statearr_23362_23389 = state_23355__$1;
(statearr_23362_23389[(2)] = inst_23344);

(statearr_23362_23389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (6))){
var state_23355__$1 = state_23355;
var statearr_23363_23390 = state_23355__$1;
(statearr_23363_23390[(2)] = null);

(statearr_23363_23390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (3))){
var inst_23353 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23355__$1,inst_23353);
} else {
if((state_val_23356 === (12))){
var inst_23341 = (state_23355[(8)]);
var inst_23341__$1 = (state_23355[(2)]);
var inst_23342 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23341__$1);
var state_23355__$1 = (function (){var statearr_23364 = state_23355;
(statearr_23364[(8)] = inst_23341__$1);

return statearr_23364;
})();
if(cljs.core.truth_(inst_23342)){
var statearr_23365_23391 = state_23355__$1;
(statearr_23365_23391[(1)] = (13));

} else {
var statearr_23366_23392 = state_23355__$1;
(statearr_23366_23392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (2))){
var inst_23318 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23319 = (0);
var state_23355__$1 = (function (){var statearr_23367 = state_23355;
(statearr_23367[(9)] = inst_23318);

(statearr_23367[(7)] = inst_23319);

return statearr_23367;
})();
var statearr_23368_23393 = state_23355__$1;
(statearr_23368_23393[(2)] = null);

(statearr_23368_23393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (11))){
var inst_23319 = (state_23355[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23355,(10),Object,null,(9));
var inst_23328 = chs__$1.call(null,inst_23319);
var inst_23329 = done.call(null,inst_23319);
var inst_23330 = cljs.core.async.take_BANG_.call(null,inst_23328,inst_23329);
var state_23355__$1 = state_23355;
var statearr_23369_23394 = state_23355__$1;
(statearr_23369_23394[(2)] = inst_23330);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (9))){
var inst_23319 = (state_23355[(7)]);
var inst_23332 = (state_23355[(2)]);
var inst_23333 = (inst_23319 + (1));
var inst_23319__$1 = inst_23333;
var state_23355__$1 = (function (){var statearr_23370 = state_23355;
(statearr_23370[(10)] = inst_23332);

(statearr_23370[(7)] = inst_23319__$1);

return statearr_23370;
})();
var statearr_23371_23395 = state_23355__$1;
(statearr_23371_23395[(2)] = null);

(statearr_23371_23395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (5))){
var inst_23339 = (state_23355[(2)]);
var state_23355__$1 = (function (){var statearr_23372 = state_23355;
(statearr_23372[(11)] = inst_23339);

return statearr_23372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23355__$1,(12),dchan);
} else {
if((state_val_23356 === (14))){
var inst_23341 = (state_23355[(8)]);
var inst_23346 = cljs.core.apply.call(null,f,inst_23341);
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23355__$1,(16),out,inst_23346);
} else {
if((state_val_23356 === (16))){
var inst_23348 = (state_23355[(2)]);
var state_23355__$1 = (function (){var statearr_23373 = state_23355;
(statearr_23373[(12)] = inst_23348);

return statearr_23373;
})();
var statearr_23374_23396 = state_23355__$1;
(statearr_23374_23396[(2)] = null);

(statearr_23374_23396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (10))){
var inst_23323 = (state_23355[(2)]);
var inst_23324 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23355__$1 = (function (){var statearr_23375 = state_23355;
(statearr_23375[(13)] = inst_23323);

return statearr_23375;
})();
var statearr_23376_23397 = state_23355__$1;
(statearr_23376_23397[(2)] = inst_23324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (8))){
var inst_23337 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
var statearr_23377_23398 = state_23355__$1;
(statearr_23377_23398[(2)] = inst_23337);

(statearr_23377_23398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15400__auto__,c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23378[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23378[(1)] = (1));

return statearr_23378;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23355){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23379){if((e23379 instanceof Object)){
var ex__15404__auto__ = e23379;
var statearr_23380_23399 = state_23355;
(statearr_23380_23399[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23355;
state_23355 = G__23400;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15425__auto__ = (function (){var statearr_23381 = f__15424__auto__.call(null);
(statearr_23381[(6)] = c__15423__auto___23383);

return statearr_23381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23403 = arguments.length;
switch (G__23403) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23457,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23457,out){
return (function (state_23435){
var state_val_23436 = (state_23435[(1)]);
if((state_val_23436 === (7))){
var inst_23415 = (state_23435[(7)]);
var inst_23414 = (state_23435[(8)]);
var inst_23414__$1 = (state_23435[(2)]);
var inst_23415__$1 = cljs.core.nth.call(null,inst_23414__$1,(0),null);
var inst_23416 = cljs.core.nth.call(null,inst_23414__$1,(1),null);
var inst_23417 = (inst_23415__$1 == null);
var state_23435__$1 = (function (){var statearr_23437 = state_23435;
(statearr_23437[(7)] = inst_23415__$1);

(statearr_23437[(8)] = inst_23414__$1);

(statearr_23437[(9)] = inst_23416);

return statearr_23437;
})();
if(cljs.core.truth_(inst_23417)){
var statearr_23438_23458 = state_23435__$1;
(statearr_23438_23458[(1)] = (8));

} else {
var statearr_23439_23459 = state_23435__$1;
(statearr_23439_23459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (1))){
var inst_23404 = cljs.core.vec.call(null,chs);
var inst_23405 = inst_23404;
var state_23435__$1 = (function (){var statearr_23440 = state_23435;
(statearr_23440[(10)] = inst_23405);

return statearr_23440;
})();
var statearr_23441_23460 = state_23435__$1;
(statearr_23441_23460[(2)] = null);

(statearr_23441_23460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (4))){
var inst_23405 = (state_23435[(10)]);
var state_23435__$1 = state_23435;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23435__$1,(7),inst_23405);
} else {
if((state_val_23436 === (6))){
var inst_23431 = (state_23435[(2)]);
var state_23435__$1 = state_23435;
var statearr_23442_23461 = state_23435__$1;
(statearr_23442_23461[(2)] = inst_23431);

(statearr_23442_23461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (3))){
var inst_23433 = (state_23435[(2)]);
var state_23435__$1 = state_23435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23435__$1,inst_23433);
} else {
if((state_val_23436 === (2))){
var inst_23405 = (state_23435[(10)]);
var inst_23407 = cljs.core.count.call(null,inst_23405);
var inst_23408 = (inst_23407 > (0));
var state_23435__$1 = state_23435;
if(cljs.core.truth_(inst_23408)){
var statearr_23444_23462 = state_23435__$1;
(statearr_23444_23462[(1)] = (4));

} else {
var statearr_23445_23463 = state_23435__$1;
(statearr_23445_23463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (11))){
var inst_23405 = (state_23435[(10)]);
var inst_23424 = (state_23435[(2)]);
var tmp23443 = inst_23405;
var inst_23405__$1 = tmp23443;
var state_23435__$1 = (function (){var statearr_23446 = state_23435;
(statearr_23446[(11)] = inst_23424);

(statearr_23446[(10)] = inst_23405__$1);

return statearr_23446;
})();
var statearr_23447_23464 = state_23435__$1;
(statearr_23447_23464[(2)] = null);

(statearr_23447_23464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (9))){
var inst_23415 = (state_23435[(7)]);
var state_23435__$1 = state_23435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23435__$1,(11),out,inst_23415);
} else {
if((state_val_23436 === (5))){
var inst_23429 = cljs.core.async.close_BANG_.call(null,out);
var state_23435__$1 = state_23435;
var statearr_23448_23465 = state_23435__$1;
(statearr_23448_23465[(2)] = inst_23429);

(statearr_23448_23465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (10))){
var inst_23427 = (state_23435[(2)]);
var state_23435__$1 = state_23435;
var statearr_23449_23466 = state_23435__$1;
(statearr_23449_23466[(2)] = inst_23427);

(statearr_23449_23466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23436 === (8))){
var inst_23415 = (state_23435[(7)]);
var inst_23414 = (state_23435[(8)]);
var inst_23405 = (state_23435[(10)]);
var inst_23416 = (state_23435[(9)]);
var inst_23419 = (function (){var cs = inst_23405;
var vec__23410 = inst_23414;
var v = inst_23415;
var c = inst_23416;
return ((function (cs,vec__23410,v,c,inst_23415,inst_23414,inst_23405,inst_23416,state_val_23436,c__15423__auto___23457,out){
return (function (p1__23401_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23401_SHARP_);
});
;})(cs,vec__23410,v,c,inst_23415,inst_23414,inst_23405,inst_23416,state_val_23436,c__15423__auto___23457,out))
})();
var inst_23420 = cljs.core.filterv.call(null,inst_23419,inst_23405);
var inst_23405__$1 = inst_23420;
var state_23435__$1 = (function (){var statearr_23450 = state_23435;
(statearr_23450[(10)] = inst_23405__$1);

return statearr_23450;
})();
var statearr_23451_23467 = state_23435__$1;
(statearr_23451_23467[(2)] = null);

(statearr_23451_23467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23457,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23457,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23452[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23452[(1)] = (1));

return statearr_23452;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23435){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23453){if((e23453 instanceof Object)){
var ex__15404__auto__ = e23453;
var statearr_23454_23468 = state_23435;
(statearr_23454_23468[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23469 = state_23435;
state_23435 = G__23469;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23457,out))
})();
var state__15425__auto__ = (function (){var statearr_23455 = f__15424__auto__.call(null);
(statearr_23455[(6)] = c__15423__auto___23457);

return statearr_23455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23457,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23471 = arguments.length;
switch (G__23471) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23516,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23516,out){
return (function (state_23495){
var state_val_23496 = (state_23495[(1)]);
if((state_val_23496 === (7))){
var inst_23477 = (state_23495[(7)]);
var inst_23477__$1 = (state_23495[(2)]);
var inst_23478 = (inst_23477__$1 == null);
var inst_23479 = cljs.core.not.call(null,inst_23478);
var state_23495__$1 = (function (){var statearr_23497 = state_23495;
(statearr_23497[(7)] = inst_23477__$1);

return statearr_23497;
})();
if(inst_23479){
var statearr_23498_23517 = state_23495__$1;
(statearr_23498_23517[(1)] = (8));

} else {
var statearr_23499_23518 = state_23495__$1;
(statearr_23499_23518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (1))){
var inst_23472 = (0);
var state_23495__$1 = (function (){var statearr_23500 = state_23495;
(statearr_23500[(8)] = inst_23472);

return statearr_23500;
})();
var statearr_23501_23519 = state_23495__$1;
(statearr_23501_23519[(2)] = null);

(statearr_23501_23519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (4))){
var state_23495__$1 = state_23495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23495__$1,(7),ch);
} else {
if((state_val_23496 === (6))){
var inst_23490 = (state_23495[(2)]);
var state_23495__$1 = state_23495;
var statearr_23502_23520 = state_23495__$1;
(statearr_23502_23520[(2)] = inst_23490);

(statearr_23502_23520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (3))){
var inst_23492 = (state_23495[(2)]);
var inst_23493 = cljs.core.async.close_BANG_.call(null,out);
var state_23495__$1 = (function (){var statearr_23503 = state_23495;
(statearr_23503[(9)] = inst_23492);

return statearr_23503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23495__$1,inst_23493);
} else {
if((state_val_23496 === (2))){
var inst_23472 = (state_23495[(8)]);
var inst_23474 = (inst_23472 < n);
var state_23495__$1 = state_23495;
if(cljs.core.truth_(inst_23474)){
var statearr_23504_23521 = state_23495__$1;
(statearr_23504_23521[(1)] = (4));

} else {
var statearr_23505_23522 = state_23495__$1;
(statearr_23505_23522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (11))){
var inst_23472 = (state_23495[(8)]);
var inst_23482 = (state_23495[(2)]);
var inst_23483 = (inst_23472 + (1));
var inst_23472__$1 = inst_23483;
var state_23495__$1 = (function (){var statearr_23506 = state_23495;
(statearr_23506[(10)] = inst_23482);

(statearr_23506[(8)] = inst_23472__$1);

return statearr_23506;
})();
var statearr_23507_23523 = state_23495__$1;
(statearr_23507_23523[(2)] = null);

(statearr_23507_23523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (9))){
var state_23495__$1 = state_23495;
var statearr_23508_23524 = state_23495__$1;
(statearr_23508_23524[(2)] = null);

(statearr_23508_23524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (5))){
var state_23495__$1 = state_23495;
var statearr_23509_23525 = state_23495__$1;
(statearr_23509_23525[(2)] = null);

(statearr_23509_23525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (10))){
var inst_23487 = (state_23495[(2)]);
var state_23495__$1 = state_23495;
var statearr_23510_23526 = state_23495__$1;
(statearr_23510_23526[(2)] = inst_23487);

(statearr_23510_23526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23496 === (8))){
var inst_23477 = (state_23495[(7)]);
var state_23495__$1 = state_23495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23495__$1,(11),out,inst_23477);
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
});})(c__15423__auto___23516,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23516,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23511[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23511[(1)] = (1));

return statearr_23511;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23495){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23512){if((e23512 instanceof Object)){
var ex__15404__auto__ = e23512;
var statearr_23513_23527 = state_23495;
(statearr_23513_23527[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23495;
state_23495 = G__23528;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23516,out))
})();
var state__15425__auto__ = (function (){var statearr_23514 = f__15424__auto__.call(null);
(statearr_23514[(6)] = c__15423__auto___23516);

return statearr_23514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23516,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23530 = (function (f,ch,meta23531){
this.f = f;
this.ch = ch;
this.meta23531 = meta23531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23532,meta23531__$1){
var self__ = this;
var _23532__$1 = this;
return (new cljs.core.async.t_cljs$core$async23530(self__.f,self__.ch,meta23531__$1));
});

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23532){
var self__ = this;
var _23532__$1 = this;
return self__.meta23531;
});

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23533 = (function (f,ch,meta23531,_,fn1,meta23534){
this.f = f;
this.ch = ch;
this.meta23531 = meta23531;
this._ = _;
this.fn1 = fn1;
this.meta23534 = meta23534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23535,meta23534__$1){
var self__ = this;
var _23535__$1 = this;
return (new cljs.core.async.t_cljs$core$async23533(self__.f,self__.ch,self__.meta23531,self__._,self__.fn1,meta23534__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23535){
var self__ = this;
var _23535__$1 = this;
return self__.meta23534;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23529_SHARP_){
return f1.call(null,(((p1__23529_SHARP_ == null))?null:self__.f.call(null,p1__23529_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23531","meta23531",-292978624,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23530","cljs.core.async/t_cljs$core$async23530",-46132296,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23534","meta23534",1114836360,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23533";

cljs.core.async.t_cljs$core$async23533.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23533");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23533.
 */
cljs.core.async.__GT_t_cljs$core$async23533 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23533(f__$1,ch__$1,meta23531__$1,___$2,fn1__$1,meta23534){
return (new cljs.core.async.t_cljs$core$async23533(f__$1,ch__$1,meta23531__$1,___$2,fn1__$1,meta23534));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23533(self__.f,self__.ch,self__.meta23531,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23531","meta23531",-292978624,null)], null);
});

cljs.core.async.t_cljs$core$async23530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23530";

cljs.core.async.t_cljs$core$async23530.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23530.
 */
cljs.core.async.__GT_t_cljs$core$async23530 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23530(f__$1,ch__$1,meta23531){
return (new cljs.core.async.t_cljs$core$async23530(f__$1,ch__$1,meta23531));
});

}

return (new cljs.core.async.t_cljs$core$async23530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23536 = (function (f,ch,meta23537){
this.f = f;
this.ch = ch;
this.meta23537 = meta23537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23538,meta23537__$1){
var self__ = this;
var _23538__$1 = this;
return (new cljs.core.async.t_cljs$core$async23536(self__.f,self__.ch,meta23537__$1));
});

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23538){
var self__ = this;
var _23538__$1 = this;
return self__.meta23537;
});

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23537","meta23537",-1735177764,null)], null);
});

cljs.core.async.t_cljs$core$async23536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23536";

cljs.core.async.t_cljs$core$async23536.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23536");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23536.
 */
cljs.core.async.__GT_t_cljs$core$async23536 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23536(f__$1,ch__$1,meta23537){
return (new cljs.core.async.t_cljs$core$async23536(f__$1,ch__$1,meta23537));
});

}

return (new cljs.core.async.t_cljs$core$async23536(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23539 = (function (p,ch,meta23540){
this.p = p;
this.ch = ch;
this.meta23540 = meta23540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23541,meta23540__$1){
var self__ = this;
var _23541__$1 = this;
return (new cljs.core.async.t_cljs$core$async23539(self__.p,self__.ch,meta23540__$1));
});

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23541){
var self__ = this;
var _23541__$1 = this;
return self__.meta23540;
});

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23540","meta23540",-2130731654,null)], null);
});

cljs.core.async.t_cljs$core$async23539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23539";

cljs.core.async.t_cljs$core$async23539.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23539");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23539.
 */
cljs.core.async.__GT_t_cljs$core$async23539 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23539(p__$1,ch__$1,meta23540){
return (new cljs.core.async.t_cljs$core$async23539(p__$1,ch__$1,meta23540));
});

}

return (new cljs.core.async.t_cljs$core$async23539(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23543 = arguments.length;
switch (G__23543) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23583,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23583,out){
return (function (state_23564){
var state_val_23565 = (state_23564[(1)]);
if((state_val_23565 === (7))){
var inst_23560 = (state_23564[(2)]);
var state_23564__$1 = state_23564;
var statearr_23566_23584 = state_23564__$1;
(statearr_23566_23584[(2)] = inst_23560);

(statearr_23566_23584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (1))){
var state_23564__$1 = state_23564;
var statearr_23567_23585 = state_23564__$1;
(statearr_23567_23585[(2)] = null);

(statearr_23567_23585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (4))){
var inst_23546 = (state_23564[(7)]);
var inst_23546__$1 = (state_23564[(2)]);
var inst_23547 = (inst_23546__$1 == null);
var state_23564__$1 = (function (){var statearr_23568 = state_23564;
(statearr_23568[(7)] = inst_23546__$1);

return statearr_23568;
})();
if(cljs.core.truth_(inst_23547)){
var statearr_23569_23586 = state_23564__$1;
(statearr_23569_23586[(1)] = (5));

} else {
var statearr_23570_23587 = state_23564__$1;
(statearr_23570_23587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (6))){
var inst_23546 = (state_23564[(7)]);
var inst_23551 = p.call(null,inst_23546);
var state_23564__$1 = state_23564;
if(cljs.core.truth_(inst_23551)){
var statearr_23571_23588 = state_23564__$1;
(statearr_23571_23588[(1)] = (8));

} else {
var statearr_23572_23589 = state_23564__$1;
(statearr_23572_23589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (3))){
var inst_23562 = (state_23564[(2)]);
var state_23564__$1 = state_23564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23564__$1,inst_23562);
} else {
if((state_val_23565 === (2))){
var state_23564__$1 = state_23564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23564__$1,(4),ch);
} else {
if((state_val_23565 === (11))){
var inst_23554 = (state_23564[(2)]);
var state_23564__$1 = state_23564;
var statearr_23573_23590 = state_23564__$1;
(statearr_23573_23590[(2)] = inst_23554);

(statearr_23573_23590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (9))){
var state_23564__$1 = state_23564;
var statearr_23574_23591 = state_23564__$1;
(statearr_23574_23591[(2)] = null);

(statearr_23574_23591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (5))){
var inst_23549 = cljs.core.async.close_BANG_.call(null,out);
var state_23564__$1 = state_23564;
var statearr_23575_23592 = state_23564__$1;
(statearr_23575_23592[(2)] = inst_23549);

(statearr_23575_23592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (10))){
var inst_23557 = (state_23564[(2)]);
var state_23564__$1 = (function (){var statearr_23576 = state_23564;
(statearr_23576[(8)] = inst_23557);

return statearr_23576;
})();
var statearr_23577_23593 = state_23564__$1;
(statearr_23577_23593[(2)] = null);

(statearr_23577_23593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (8))){
var inst_23546 = (state_23564[(7)]);
var state_23564__$1 = state_23564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23564__$1,(11),out,inst_23546);
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
});})(c__15423__auto___23583,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23583,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23578 = [null,null,null,null,null,null,null,null,null];
(statearr_23578[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23578[(1)] = (1));

return statearr_23578;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23564){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23579){if((e23579 instanceof Object)){
var ex__15404__auto__ = e23579;
var statearr_23580_23594 = state_23564;
(statearr_23580_23594[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23595 = state_23564;
state_23564 = G__23595;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23583,out))
})();
var state__15425__auto__ = (function (){var statearr_23581 = f__15424__auto__.call(null);
(statearr_23581[(6)] = c__15423__auto___23583);

return statearr_23581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23583,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23597 = arguments.length;
switch (G__23597) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15423__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto__){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto__){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (7))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23662_23700 = state_23660__$1;
(statearr_23662_23700[(2)] = inst_23656);

(statearr_23662_23700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (20))){
var inst_23626 = (state_23660[(7)]);
var inst_23637 = (state_23660[(2)]);
var inst_23638 = cljs.core.next.call(null,inst_23626);
var inst_23612 = inst_23638;
var inst_23613 = null;
var inst_23614 = (0);
var inst_23615 = (0);
var state_23660__$1 = (function (){var statearr_23663 = state_23660;
(statearr_23663[(8)] = inst_23637);

(statearr_23663[(9)] = inst_23613);

(statearr_23663[(10)] = inst_23615);

(statearr_23663[(11)] = inst_23614);

(statearr_23663[(12)] = inst_23612);

return statearr_23663;
})();
var statearr_23664_23701 = state_23660__$1;
(statearr_23664_23701[(2)] = null);

(statearr_23664_23701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (1))){
var state_23660__$1 = state_23660;
var statearr_23665_23702 = state_23660__$1;
(statearr_23665_23702[(2)] = null);

(statearr_23665_23702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (4))){
var inst_23601 = (state_23660[(13)]);
var inst_23601__$1 = (state_23660[(2)]);
var inst_23602 = (inst_23601__$1 == null);
var state_23660__$1 = (function (){var statearr_23666 = state_23660;
(statearr_23666[(13)] = inst_23601__$1);

return statearr_23666;
})();
if(cljs.core.truth_(inst_23602)){
var statearr_23667_23703 = state_23660__$1;
(statearr_23667_23703[(1)] = (5));

} else {
var statearr_23668_23704 = state_23660__$1;
(statearr_23668_23704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (15))){
var state_23660__$1 = state_23660;
var statearr_23672_23705 = state_23660__$1;
(statearr_23672_23705[(2)] = null);

(statearr_23672_23705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (21))){
var state_23660__$1 = state_23660;
var statearr_23673_23706 = state_23660__$1;
(statearr_23673_23706[(2)] = null);

(statearr_23673_23706[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (13))){
var inst_23613 = (state_23660[(9)]);
var inst_23615 = (state_23660[(10)]);
var inst_23614 = (state_23660[(11)]);
var inst_23612 = (state_23660[(12)]);
var inst_23622 = (state_23660[(2)]);
var inst_23623 = (inst_23615 + (1));
var tmp23669 = inst_23613;
var tmp23670 = inst_23614;
var tmp23671 = inst_23612;
var inst_23612__$1 = tmp23671;
var inst_23613__$1 = tmp23669;
var inst_23614__$1 = tmp23670;
var inst_23615__$1 = inst_23623;
var state_23660__$1 = (function (){var statearr_23674 = state_23660;
(statearr_23674[(9)] = inst_23613__$1);

(statearr_23674[(10)] = inst_23615__$1);

(statearr_23674[(11)] = inst_23614__$1);

(statearr_23674[(14)] = inst_23622);

(statearr_23674[(12)] = inst_23612__$1);

return statearr_23674;
})();
var statearr_23675_23707 = state_23660__$1;
(statearr_23675_23707[(2)] = null);

(statearr_23675_23707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (22))){
var state_23660__$1 = state_23660;
var statearr_23676_23708 = state_23660__$1;
(statearr_23676_23708[(2)] = null);

(statearr_23676_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (6))){
var inst_23601 = (state_23660[(13)]);
var inst_23610 = f.call(null,inst_23601);
var inst_23611 = cljs.core.seq.call(null,inst_23610);
var inst_23612 = inst_23611;
var inst_23613 = null;
var inst_23614 = (0);
var inst_23615 = (0);
var state_23660__$1 = (function (){var statearr_23677 = state_23660;
(statearr_23677[(9)] = inst_23613);

(statearr_23677[(10)] = inst_23615);

(statearr_23677[(11)] = inst_23614);

(statearr_23677[(12)] = inst_23612);

return statearr_23677;
})();
var statearr_23678_23709 = state_23660__$1;
(statearr_23678_23709[(2)] = null);

(statearr_23678_23709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (17))){
var inst_23626 = (state_23660[(7)]);
var inst_23630 = cljs.core.chunk_first.call(null,inst_23626);
var inst_23631 = cljs.core.chunk_rest.call(null,inst_23626);
var inst_23632 = cljs.core.count.call(null,inst_23630);
var inst_23612 = inst_23631;
var inst_23613 = inst_23630;
var inst_23614 = inst_23632;
var inst_23615 = (0);
var state_23660__$1 = (function (){var statearr_23679 = state_23660;
(statearr_23679[(9)] = inst_23613);

(statearr_23679[(10)] = inst_23615);

(statearr_23679[(11)] = inst_23614);

(statearr_23679[(12)] = inst_23612);

return statearr_23679;
})();
var statearr_23680_23710 = state_23660__$1;
(statearr_23680_23710[(2)] = null);

(statearr_23680_23710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (3))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (12))){
var inst_23646 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23681_23711 = state_23660__$1;
(statearr_23681_23711[(2)] = inst_23646);

(statearr_23681_23711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (2))){
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(4),in$);
} else {
if((state_val_23661 === (23))){
var inst_23654 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23682_23712 = state_23660__$1;
(statearr_23682_23712[(2)] = inst_23654);

(statearr_23682_23712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (19))){
var inst_23641 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23683_23713 = state_23660__$1;
(statearr_23683_23713[(2)] = inst_23641);

(statearr_23683_23713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (11))){
var inst_23626 = (state_23660[(7)]);
var inst_23612 = (state_23660[(12)]);
var inst_23626__$1 = cljs.core.seq.call(null,inst_23612);
var state_23660__$1 = (function (){var statearr_23684 = state_23660;
(statearr_23684[(7)] = inst_23626__$1);

return statearr_23684;
})();
if(inst_23626__$1){
var statearr_23685_23714 = state_23660__$1;
(statearr_23685_23714[(1)] = (14));

} else {
var statearr_23686_23715 = state_23660__$1;
(statearr_23686_23715[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (9))){
var inst_23648 = (state_23660[(2)]);
var inst_23649 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23660__$1 = (function (){var statearr_23687 = state_23660;
(statearr_23687[(15)] = inst_23648);

return statearr_23687;
})();
if(cljs.core.truth_(inst_23649)){
var statearr_23688_23716 = state_23660__$1;
(statearr_23688_23716[(1)] = (21));

} else {
var statearr_23689_23717 = state_23660__$1;
(statearr_23689_23717[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var inst_23604 = cljs.core.async.close_BANG_.call(null,out);
var state_23660__$1 = state_23660;
var statearr_23690_23718 = state_23660__$1;
(statearr_23690_23718[(2)] = inst_23604);

(statearr_23690_23718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (14))){
var inst_23626 = (state_23660[(7)]);
var inst_23628 = cljs.core.chunked_seq_QMARK_.call(null,inst_23626);
var state_23660__$1 = state_23660;
if(inst_23628){
var statearr_23691_23719 = state_23660__$1;
(statearr_23691_23719[(1)] = (17));

} else {
var statearr_23692_23720 = state_23660__$1;
(statearr_23692_23720[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (16))){
var inst_23644 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23693_23721 = state_23660__$1;
(statearr_23693_23721[(2)] = inst_23644);

(statearr_23693_23721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (10))){
var inst_23613 = (state_23660[(9)]);
var inst_23615 = (state_23660[(10)]);
var inst_23620 = cljs.core._nth.call(null,inst_23613,inst_23615);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23660__$1,(13),out,inst_23620);
} else {
if((state_val_23661 === (18))){
var inst_23626 = (state_23660[(7)]);
var inst_23635 = cljs.core.first.call(null,inst_23626);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23660__$1,(20),out,inst_23635);
} else {
if((state_val_23661 === (8))){
var inst_23615 = (state_23660[(10)]);
var inst_23614 = (state_23660[(11)]);
var inst_23617 = (inst_23615 < inst_23614);
var inst_23618 = inst_23617;
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23618)){
var statearr_23694_23722 = state_23660__$1;
(statearr_23694_23722[(1)] = (10));

} else {
var statearr_23695_23723 = state_23660__$1;
(statearr_23695_23723[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto__))
;
return ((function (switch__15400__auto__,c__15423__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_23696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__);

(statearr_23696[(1)] = (1));

return statearr_23696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1 = (function (state_23660){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23697){if((e23697 instanceof Object)){
var ex__15404__auto__ = e23697;
var statearr_23698_23724 = state_23660;
(statearr_23698_23724[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23725 = state_23660;
state_23660 = G__23725;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto__))
})();
var state__15425__auto__ = (function (){var statearr_23699 = f__15424__auto__.call(null);
(statearr_23699[(6)] = c__15423__auto__);

return statearr_23699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto__))
);

return c__15423__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23727 = arguments.length;
switch (G__23727) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23730 = arguments.length;
switch (G__23730) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23733 = arguments.length;
switch (G__23733) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23780,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23780,out){
return (function (state_23757){
var state_val_23758 = (state_23757[(1)]);
if((state_val_23758 === (7))){
var inst_23752 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23759_23781 = state_23757__$1;
(statearr_23759_23781[(2)] = inst_23752);

(statearr_23759_23781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (1))){
var inst_23734 = null;
var state_23757__$1 = (function (){var statearr_23760 = state_23757;
(statearr_23760[(7)] = inst_23734);

return statearr_23760;
})();
var statearr_23761_23782 = state_23757__$1;
(statearr_23761_23782[(2)] = null);

(statearr_23761_23782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (4))){
var inst_23737 = (state_23757[(8)]);
var inst_23737__$1 = (state_23757[(2)]);
var inst_23738 = (inst_23737__$1 == null);
var inst_23739 = cljs.core.not.call(null,inst_23738);
var state_23757__$1 = (function (){var statearr_23762 = state_23757;
(statearr_23762[(8)] = inst_23737__$1);

return statearr_23762;
})();
if(inst_23739){
var statearr_23763_23783 = state_23757__$1;
(statearr_23763_23783[(1)] = (5));

} else {
var statearr_23764_23784 = state_23757__$1;
(statearr_23764_23784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (6))){
var state_23757__$1 = state_23757;
var statearr_23765_23785 = state_23757__$1;
(statearr_23765_23785[(2)] = null);

(statearr_23765_23785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (3))){
var inst_23754 = (state_23757[(2)]);
var inst_23755 = cljs.core.async.close_BANG_.call(null,out);
var state_23757__$1 = (function (){var statearr_23766 = state_23757;
(statearr_23766[(9)] = inst_23754);

return statearr_23766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else {
if((state_val_23758 === (2))){
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(4),ch);
} else {
if((state_val_23758 === (11))){
var inst_23737 = (state_23757[(8)]);
var inst_23746 = (state_23757[(2)]);
var inst_23734 = inst_23737;
var state_23757__$1 = (function (){var statearr_23767 = state_23757;
(statearr_23767[(7)] = inst_23734);

(statearr_23767[(10)] = inst_23746);

return statearr_23767;
})();
var statearr_23768_23786 = state_23757__$1;
(statearr_23768_23786[(2)] = null);

(statearr_23768_23786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (9))){
var inst_23737 = (state_23757[(8)]);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,(11),out,inst_23737);
} else {
if((state_val_23758 === (5))){
var inst_23734 = (state_23757[(7)]);
var inst_23737 = (state_23757[(8)]);
var inst_23741 = cljs.core._EQ_.call(null,inst_23737,inst_23734);
var state_23757__$1 = state_23757;
if(inst_23741){
var statearr_23770_23787 = state_23757__$1;
(statearr_23770_23787[(1)] = (8));

} else {
var statearr_23771_23788 = state_23757__$1;
(statearr_23771_23788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (10))){
var inst_23749 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23772_23789 = state_23757__$1;
(statearr_23772_23789[(2)] = inst_23749);

(statearr_23772_23789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (8))){
var inst_23734 = (state_23757[(7)]);
var tmp23769 = inst_23734;
var inst_23734__$1 = tmp23769;
var state_23757__$1 = (function (){var statearr_23773 = state_23757;
(statearr_23773[(7)] = inst_23734__$1);

return statearr_23773;
})();
var statearr_23774_23790 = state_23757__$1;
(statearr_23774_23790[(2)] = null);

(statearr_23774_23790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23780,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23780,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23775[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23775[(1)] = (1));

return statearr_23775;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23757){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23776){if((e23776 instanceof Object)){
var ex__15404__auto__ = e23776;
var statearr_23777_23791 = state_23757;
(statearr_23777_23791[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23792 = state_23757;
state_23757 = G__23792;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23780,out))
})();
var state__15425__auto__ = (function (){var statearr_23778 = f__15424__auto__.call(null);
(statearr_23778[(6)] = c__15423__auto___23780);

return statearr_23778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23780,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23794 = arguments.length;
switch (G__23794) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23860,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23860,out){
return (function (state_23832){
var state_val_23833 = (state_23832[(1)]);
if((state_val_23833 === (7))){
var inst_23828 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
var statearr_23834_23861 = state_23832__$1;
(statearr_23834_23861[(2)] = inst_23828);

(statearr_23834_23861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (1))){
var inst_23795 = (new Array(n));
var inst_23796 = inst_23795;
var inst_23797 = (0);
var state_23832__$1 = (function (){var statearr_23835 = state_23832;
(statearr_23835[(7)] = inst_23797);

(statearr_23835[(8)] = inst_23796);

return statearr_23835;
})();
var statearr_23836_23862 = state_23832__$1;
(statearr_23836_23862[(2)] = null);

(statearr_23836_23862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (4))){
var inst_23800 = (state_23832[(9)]);
var inst_23800__$1 = (state_23832[(2)]);
var inst_23801 = (inst_23800__$1 == null);
var inst_23802 = cljs.core.not.call(null,inst_23801);
var state_23832__$1 = (function (){var statearr_23837 = state_23832;
(statearr_23837[(9)] = inst_23800__$1);

return statearr_23837;
})();
if(inst_23802){
var statearr_23838_23863 = state_23832__$1;
(statearr_23838_23863[(1)] = (5));

} else {
var statearr_23839_23864 = state_23832__$1;
(statearr_23839_23864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (15))){
var inst_23822 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
var statearr_23840_23865 = state_23832__$1;
(statearr_23840_23865[(2)] = inst_23822);

(statearr_23840_23865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (13))){
var state_23832__$1 = state_23832;
var statearr_23841_23866 = state_23832__$1;
(statearr_23841_23866[(2)] = null);

(statearr_23841_23866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (6))){
var inst_23797 = (state_23832[(7)]);
var inst_23818 = (inst_23797 > (0));
var state_23832__$1 = state_23832;
if(cljs.core.truth_(inst_23818)){
var statearr_23842_23867 = state_23832__$1;
(statearr_23842_23867[(1)] = (12));

} else {
var statearr_23843_23868 = state_23832__$1;
(statearr_23843_23868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (3))){
var inst_23830 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23832__$1,inst_23830);
} else {
if((state_val_23833 === (12))){
var inst_23796 = (state_23832[(8)]);
var inst_23820 = cljs.core.vec.call(null,inst_23796);
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23832__$1,(15),out,inst_23820);
} else {
if((state_val_23833 === (2))){
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23832__$1,(4),ch);
} else {
if((state_val_23833 === (11))){
var inst_23812 = (state_23832[(2)]);
var inst_23813 = (new Array(n));
var inst_23796 = inst_23813;
var inst_23797 = (0);
var state_23832__$1 = (function (){var statearr_23844 = state_23832;
(statearr_23844[(7)] = inst_23797);

(statearr_23844[(10)] = inst_23812);

(statearr_23844[(8)] = inst_23796);

return statearr_23844;
})();
var statearr_23845_23869 = state_23832__$1;
(statearr_23845_23869[(2)] = null);

(statearr_23845_23869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (9))){
var inst_23796 = (state_23832[(8)]);
var inst_23810 = cljs.core.vec.call(null,inst_23796);
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23832__$1,(11),out,inst_23810);
} else {
if((state_val_23833 === (5))){
var inst_23797 = (state_23832[(7)]);
var inst_23805 = (state_23832[(11)]);
var inst_23796 = (state_23832[(8)]);
var inst_23800 = (state_23832[(9)]);
var inst_23804 = (inst_23796[inst_23797] = inst_23800);
var inst_23805__$1 = (inst_23797 + (1));
var inst_23806 = (inst_23805__$1 < n);
var state_23832__$1 = (function (){var statearr_23846 = state_23832;
(statearr_23846[(11)] = inst_23805__$1);

(statearr_23846[(12)] = inst_23804);

return statearr_23846;
})();
if(cljs.core.truth_(inst_23806)){
var statearr_23847_23870 = state_23832__$1;
(statearr_23847_23870[(1)] = (8));

} else {
var statearr_23848_23871 = state_23832__$1;
(statearr_23848_23871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (14))){
var inst_23825 = (state_23832[(2)]);
var inst_23826 = cljs.core.async.close_BANG_.call(null,out);
var state_23832__$1 = (function (){var statearr_23850 = state_23832;
(statearr_23850[(13)] = inst_23825);

return statearr_23850;
})();
var statearr_23851_23872 = state_23832__$1;
(statearr_23851_23872[(2)] = inst_23826);

(statearr_23851_23872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (10))){
var inst_23816 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
var statearr_23852_23873 = state_23832__$1;
(statearr_23852_23873[(2)] = inst_23816);

(statearr_23852_23873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (8))){
var inst_23805 = (state_23832[(11)]);
var inst_23796 = (state_23832[(8)]);
var tmp23849 = inst_23796;
var inst_23796__$1 = tmp23849;
var inst_23797 = inst_23805;
var state_23832__$1 = (function (){var statearr_23853 = state_23832;
(statearr_23853[(7)] = inst_23797);

(statearr_23853[(8)] = inst_23796__$1);

return statearr_23853;
})();
var statearr_23854_23874 = state_23832__$1;
(statearr_23854_23874[(2)] = null);

(statearr_23854_23874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23860,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23860,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23855[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23855[(1)] = (1));

return statearr_23855;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23832){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23856){if((e23856 instanceof Object)){
var ex__15404__auto__ = e23856;
var statearr_23857_23875 = state_23832;
(statearr_23857_23875[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23876 = state_23832;
state_23832 = G__23876;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23860,out))
})();
var state__15425__auto__ = (function (){var statearr_23858 = f__15424__auto__.call(null);
(statearr_23858[(6)] = c__15423__auto___23860);

return statearr_23858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23860,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23878 = arguments.length;
switch (G__23878) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15423__auto___23948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15423__auto___23948,out){
return (function (){
var f__15424__auto__ = (function (){var switch__15400__auto__ = ((function (c__15423__auto___23948,out){
return (function (state_23920){
var state_val_23921 = (state_23920[(1)]);
if((state_val_23921 === (7))){
var inst_23916 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23922_23949 = state_23920__$1;
(statearr_23922_23949[(2)] = inst_23916);

(statearr_23922_23949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (1))){
var inst_23879 = [];
var inst_23880 = inst_23879;
var inst_23881 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23920__$1 = (function (){var statearr_23923 = state_23920;
(statearr_23923[(7)] = inst_23880);

(statearr_23923[(8)] = inst_23881);

return statearr_23923;
})();
var statearr_23924_23950 = state_23920__$1;
(statearr_23924_23950[(2)] = null);

(statearr_23924_23950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (4))){
var inst_23884 = (state_23920[(9)]);
var inst_23884__$1 = (state_23920[(2)]);
var inst_23885 = (inst_23884__$1 == null);
var inst_23886 = cljs.core.not.call(null,inst_23885);
var state_23920__$1 = (function (){var statearr_23925 = state_23920;
(statearr_23925[(9)] = inst_23884__$1);

return statearr_23925;
})();
if(inst_23886){
var statearr_23926_23951 = state_23920__$1;
(statearr_23926_23951[(1)] = (5));

} else {
var statearr_23927_23952 = state_23920__$1;
(statearr_23927_23952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (15))){
var inst_23910 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23928_23953 = state_23920__$1;
(statearr_23928_23953[(2)] = inst_23910);

(statearr_23928_23953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (13))){
var state_23920__$1 = state_23920;
var statearr_23929_23954 = state_23920__$1;
(statearr_23929_23954[(2)] = null);

(statearr_23929_23954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (6))){
var inst_23880 = (state_23920[(7)]);
var inst_23905 = inst_23880.length;
var inst_23906 = (inst_23905 > (0));
var state_23920__$1 = state_23920;
if(cljs.core.truth_(inst_23906)){
var statearr_23930_23955 = state_23920__$1;
(statearr_23930_23955[(1)] = (12));

} else {
var statearr_23931_23956 = state_23920__$1;
(statearr_23931_23956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (3))){
var inst_23918 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23920__$1,inst_23918);
} else {
if((state_val_23921 === (12))){
var inst_23880 = (state_23920[(7)]);
var inst_23908 = cljs.core.vec.call(null,inst_23880);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23920__$1,(15),out,inst_23908);
} else {
if((state_val_23921 === (2))){
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23920__$1,(4),ch);
} else {
if((state_val_23921 === (11))){
var inst_23888 = (state_23920[(10)]);
var inst_23884 = (state_23920[(9)]);
var inst_23898 = (state_23920[(2)]);
var inst_23899 = [];
var inst_23900 = inst_23899.push(inst_23884);
var inst_23880 = inst_23899;
var inst_23881 = inst_23888;
var state_23920__$1 = (function (){var statearr_23932 = state_23920;
(statearr_23932[(11)] = inst_23898);

(statearr_23932[(7)] = inst_23880);

(statearr_23932[(12)] = inst_23900);

(statearr_23932[(8)] = inst_23881);

return statearr_23932;
})();
var statearr_23933_23957 = state_23920__$1;
(statearr_23933_23957[(2)] = null);

(statearr_23933_23957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (9))){
var inst_23880 = (state_23920[(7)]);
var inst_23896 = cljs.core.vec.call(null,inst_23880);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23920__$1,(11),out,inst_23896);
} else {
if((state_val_23921 === (5))){
var inst_23888 = (state_23920[(10)]);
var inst_23881 = (state_23920[(8)]);
var inst_23884 = (state_23920[(9)]);
var inst_23888__$1 = f.call(null,inst_23884);
var inst_23889 = cljs.core._EQ_.call(null,inst_23888__$1,inst_23881);
var inst_23890 = cljs.core.keyword_identical_QMARK_.call(null,inst_23881,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23891 = ((inst_23889) || (inst_23890));
var state_23920__$1 = (function (){var statearr_23934 = state_23920;
(statearr_23934[(10)] = inst_23888__$1);

return statearr_23934;
})();
if(cljs.core.truth_(inst_23891)){
var statearr_23935_23958 = state_23920__$1;
(statearr_23935_23958[(1)] = (8));

} else {
var statearr_23936_23959 = state_23920__$1;
(statearr_23936_23959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (14))){
var inst_23913 = (state_23920[(2)]);
var inst_23914 = cljs.core.async.close_BANG_.call(null,out);
var state_23920__$1 = (function (){var statearr_23938 = state_23920;
(statearr_23938[(13)] = inst_23913);

return statearr_23938;
})();
var statearr_23939_23960 = state_23920__$1;
(statearr_23939_23960[(2)] = inst_23914);

(statearr_23939_23960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (10))){
var inst_23903 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23940_23961 = state_23920__$1;
(statearr_23940_23961[(2)] = inst_23903);

(statearr_23940_23961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (8))){
var inst_23888 = (state_23920[(10)]);
var inst_23880 = (state_23920[(7)]);
var inst_23884 = (state_23920[(9)]);
var inst_23893 = inst_23880.push(inst_23884);
var tmp23937 = inst_23880;
var inst_23880__$1 = tmp23937;
var inst_23881 = inst_23888;
var state_23920__$1 = (function (){var statearr_23941 = state_23920;
(statearr_23941[(7)] = inst_23880__$1);

(statearr_23941[(8)] = inst_23881);

(statearr_23941[(14)] = inst_23893);

return statearr_23941;
})();
var statearr_23942_23962 = state_23920__$1;
(statearr_23942_23962[(2)] = null);

(statearr_23942_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__15423__auto___23948,out))
;
return ((function (switch__15400__auto__,c__15423__auto___23948,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_23943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23943[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_23943[(1)] = (1));

return statearr_23943;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_23920){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__.call(null,state_23920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e23944){if((e23944 instanceof Object)){
var ex__15404__auto__ = e23944;
var statearr_23945_23963 = state_23920;
(statearr_23945_23963[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23964 = state_23920;
state_23920 = G__23964;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_23920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_23920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15423__auto___23948,out))
})();
var state__15425__auto__ = (function (){var statearr_23946 = f__15424__auto__.call(null);
(statearr_23946[(6)] = c__15423__auto___23948);

return statearr_23946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15425__auto__);
});})(c__15423__auto___23948,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
