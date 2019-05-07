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
var G__16250 = arguments.length;
switch (G__16250) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16251 = (function (f,blockable,meta16252){
this.f = f;
this.blockable = blockable;
this.meta16252 = meta16252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16253,meta16252__$1){
var self__ = this;
var _16253__$1 = this;
return (new cljs.core.async.t_cljs$core$async16251(self__.f,self__.blockable,meta16252__$1));
});

cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16253){
var self__ = this;
var _16253__$1 = this;
return self__.meta16252;
});

cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16252","meta16252",-712456958,null)], null);
});

cljs.core.async.t_cljs$core$async16251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16251";

cljs.core.async.t_cljs$core$async16251.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16251");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16251.
 */
cljs.core.async.__GT_t_cljs$core$async16251 = (function cljs$core$async$__GT_t_cljs$core$async16251(f__$1,blockable__$1,meta16252){
return (new cljs.core.async.t_cljs$core$async16251(f__$1,blockable__$1,meta16252));
});

}

return (new cljs.core.async.t_cljs$core$async16251(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16257 = arguments.length;
switch (G__16257) {
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
var G__16260 = arguments.length;
switch (G__16260) {
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
var G__16263 = arguments.length;
switch (G__16263) {
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
var val_16265 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16265);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16265,ret){
return (function (){
return fn1.call(null,val_16265);
});})(val_16265,ret))
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
var G__16267 = arguments.length;
switch (G__16267) {
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
var n__4408__auto___16269 = n;
var x_16270 = (0);
while(true){
if((x_16270 < n__4408__auto___16269)){
(a[x_16270] = (0));

var G__16271 = (x_16270 + (1));
x_16270 = G__16271;
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

var G__16272 = (i + (1));
i = G__16272;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16273 = (function (flag,meta16274){
this.flag = flag;
this.meta16274 = meta16274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16275,meta16274__$1){
var self__ = this;
var _16275__$1 = this;
return (new cljs.core.async.t_cljs$core$async16273(self__.flag,meta16274__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16275){
var self__ = this;
var _16275__$1 = this;
return self__.meta16274;
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16274","meta16274",-1987505016,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16273";

cljs.core.async.t_cljs$core$async16273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16273");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16273.
 */
cljs.core.async.__GT_t_cljs$core$async16273 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16273(flag__$1,meta16274){
return (new cljs.core.async.t_cljs$core$async16273(flag__$1,meta16274));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16273(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16276 = (function (flag,cb,meta16277){
this.flag = flag;
this.cb = cb;
this.meta16277 = meta16277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16278,meta16277__$1){
var self__ = this;
var _16278__$1 = this;
return (new cljs.core.async.t_cljs$core$async16276(self__.flag,self__.cb,meta16277__$1));
});

cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16278){
var self__ = this;
var _16278__$1 = this;
return self__.meta16277;
});

cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16277","meta16277",-1306554503,null)], null);
});

cljs.core.async.t_cljs$core$async16276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16276";

cljs.core.async.t_cljs$core$async16276.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16276");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16276.
 */
cljs.core.async.__GT_t_cljs$core$async16276 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16276(flag__$1,cb__$1,meta16277){
return (new cljs.core.async.t_cljs$core$async16276(flag__$1,cb__$1,meta16277));
});

}

return (new cljs.core.async.t_cljs$core$async16276(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16279_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16279_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16280_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16280_SHARP_,port], null));
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
var G__16281 = (i + (1));
i = G__16281;
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
var len__4531__auto___16287 = arguments.length;
var i__4532__auto___16288 = (0);
while(true){
if((i__4532__auto___16288 < len__4531__auto___16287)){
args__4534__auto__.push((arguments[i__4532__auto___16288]));

var G__16289 = (i__4532__auto___16288 + (1));
i__4532__auto___16288 = G__16289;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16284){
var map__16285 = p__16284;
var map__16285__$1 = ((((!((map__16285 == null)))?(((((map__16285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16285):map__16285);
var opts = map__16285__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16282){
var G__16283 = cljs.core.first.call(null,seq16282);
var seq16282__$1 = cljs.core.next.call(null,seq16282);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16283,seq16282__$1);
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
var G__16291 = arguments.length;
switch (G__16291) {
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
var c__14326__auto___16337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___16337){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___16337){
return (function (state_16315){
var state_val_16316 = (state_16315[(1)]);
if((state_val_16316 === (7))){
var inst_16311 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16317_16338 = state_16315__$1;
(statearr_16317_16338[(2)] = inst_16311);

(statearr_16317_16338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (1))){
var state_16315__$1 = state_16315;
var statearr_16318_16339 = state_16315__$1;
(statearr_16318_16339[(2)] = null);

(statearr_16318_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (4))){
var inst_16294 = (state_16315[(7)]);
var inst_16294__$1 = (state_16315[(2)]);
var inst_16295 = (inst_16294__$1 == null);
var state_16315__$1 = (function (){var statearr_16319 = state_16315;
(statearr_16319[(7)] = inst_16294__$1);

return statearr_16319;
})();
if(cljs.core.truth_(inst_16295)){
var statearr_16320_16340 = state_16315__$1;
(statearr_16320_16340[(1)] = (5));

} else {
var statearr_16321_16341 = state_16315__$1;
(statearr_16321_16341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (13))){
var state_16315__$1 = state_16315;
var statearr_16322_16342 = state_16315__$1;
(statearr_16322_16342[(2)] = null);

(statearr_16322_16342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (6))){
var inst_16294 = (state_16315[(7)]);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,(11),to,inst_16294);
} else {
if((state_val_16316 === (3))){
var inst_16313 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16315__$1,inst_16313);
} else {
if((state_val_16316 === (12))){
var state_16315__$1 = state_16315;
var statearr_16323_16343 = state_16315__$1;
(statearr_16323_16343[(2)] = null);

(statearr_16323_16343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (2))){
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16315__$1,(4),from);
} else {
if((state_val_16316 === (11))){
var inst_16304 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
if(cljs.core.truth_(inst_16304)){
var statearr_16324_16344 = state_16315__$1;
(statearr_16324_16344[(1)] = (12));

} else {
var statearr_16325_16345 = state_16315__$1;
(statearr_16325_16345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (9))){
var state_16315__$1 = state_16315;
var statearr_16326_16346 = state_16315__$1;
(statearr_16326_16346[(2)] = null);

(statearr_16326_16346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (5))){
var state_16315__$1 = state_16315;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16327_16347 = state_16315__$1;
(statearr_16327_16347[(1)] = (8));

} else {
var statearr_16328_16348 = state_16315__$1;
(statearr_16328_16348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (14))){
var inst_16309 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16329_16349 = state_16315__$1;
(statearr_16329_16349[(2)] = inst_16309);

(statearr_16329_16349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (10))){
var inst_16301 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16330_16350 = state_16315__$1;
(statearr_16330_16350[(2)] = inst_16301);

(statearr_16330_16350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (8))){
var inst_16298 = cljs.core.async.close_BANG_.call(null,to);
var state_16315__$1 = state_16315;
var statearr_16331_16351 = state_16315__$1;
(statearr_16331_16351[(2)] = inst_16298);

(statearr_16331_16351[(1)] = (10));


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
});})(c__14326__auto___16337))
;
return ((function (switch__14167__auto__,c__14326__auto___16337){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_16332 = [null,null,null,null,null,null,null,null];
(statearr_16332[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_16332[(1)] = (1));

return statearr_16332;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_16315){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16333){if((e16333 instanceof Object)){
var ex__14171__auto__ = e16333;
var statearr_16334_16352 = state_16315;
(statearr_16334_16352[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16353 = state_16315;
state_16315 = G__16353;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___16337))
})();
var state__14328__auto__ = (function (){var statearr_16335 = f__14327__auto__.call(null);
(statearr_16335[(6)] = c__14326__auto___16337);

return statearr_16335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___16337))
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
return (function (p__16354){
var vec__16355 = p__16354;
var v = cljs.core.nth.call(null,vec__16355,(0),null);
var p = cljs.core.nth.call(null,vec__16355,(1),null);
var job = vec__16355;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14326__auto___16526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results){
return (function (state_16362){
var state_val_16363 = (state_16362[(1)]);
if((state_val_16363 === (1))){
var state_16362__$1 = state_16362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16362__$1,(2),res,v);
} else {
if((state_val_16363 === (2))){
var inst_16359 = (state_16362[(2)]);
var inst_16360 = cljs.core.async.close_BANG_.call(null,res);
var state_16362__$1 = (function (){var statearr_16364 = state_16362;
(statearr_16364[(7)] = inst_16359);

return statearr_16364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16362__$1,inst_16360);
} else {
return null;
}
}
});})(c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results))
;
return ((function (switch__14167__auto__,c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_16365 = [null,null,null,null,null,null,null,null];
(statearr_16365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__);

(statearr_16365[(1)] = (1));

return statearr_16365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1 = (function (state_16362){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16366){if((e16366 instanceof Object)){
var ex__14171__auto__ = e16366;
var statearr_16367_16527 = state_16362;
(statearr_16367_16527[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16528 = state_16362;
state_16362 = G__16528;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = function(state_16362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1.call(this,state_16362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results))
})();
var state__14328__auto__ = (function (){var statearr_16368 = f__14327__auto__.call(null);
(statearr_16368[(6)] = c__14326__auto___16526);

return statearr_16368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___16526,res,vec__16355,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16369){
var vec__16370 = p__16369;
var v = cljs.core.nth.call(null,vec__16370,(0),null);
var p = cljs.core.nth.call(null,vec__16370,(1),null);
var job = vec__16370;
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
var n__4408__auto___16529 = n;
var __16530 = (0);
while(true){
if((__16530 < n__4408__auto___16529)){
var G__16373_16531 = type;
var G__16373_16532__$1 = (((G__16373_16531 instanceof cljs.core.Keyword))?G__16373_16531.fqn:null);
switch (G__16373_16532__$1) {
case "compute":
var c__14326__auto___16534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16530,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (__16530,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function (state_16386){
var state_val_16387 = (state_16386[(1)]);
if((state_val_16387 === (1))){
var state_16386__$1 = state_16386;
var statearr_16388_16535 = state_16386__$1;
(statearr_16388_16535[(2)] = null);

(statearr_16388_16535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (2))){
var state_16386__$1 = state_16386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16386__$1,(4),jobs);
} else {
if((state_val_16387 === (3))){
var inst_16384 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16386__$1,inst_16384);
} else {
if((state_val_16387 === (4))){
var inst_16376 = (state_16386[(2)]);
var inst_16377 = process.call(null,inst_16376);
var state_16386__$1 = state_16386;
if(cljs.core.truth_(inst_16377)){
var statearr_16389_16536 = state_16386__$1;
(statearr_16389_16536[(1)] = (5));

} else {
var statearr_16390_16537 = state_16386__$1;
(statearr_16390_16537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (5))){
var state_16386__$1 = state_16386;
var statearr_16391_16538 = state_16386__$1;
(statearr_16391_16538[(2)] = null);

(statearr_16391_16538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (6))){
var state_16386__$1 = state_16386;
var statearr_16392_16539 = state_16386__$1;
(statearr_16392_16539[(2)] = null);

(statearr_16392_16539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (7))){
var inst_16382 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16393_16540 = state_16386__$1;
(statearr_16393_16540[(2)] = inst_16382);

(statearr_16393_16540[(1)] = (3));


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
});})(__16530,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
;
return ((function (__16530,switch__14167__auto__,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_16394 = [null,null,null,null,null,null,null];
(statearr_16394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__);

(statearr_16394[(1)] = (1));

return statearr_16394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1 = (function (state_16386){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16395){if((e16395 instanceof Object)){
var ex__14171__auto__ = e16395;
var statearr_16396_16541 = state_16386;
(statearr_16396_16541[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16542 = state_16386;
state_16386 = G__16542;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = function(state_16386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1.call(this,state_16386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__;
})()
;})(__16530,switch__14167__auto__,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
})();
var state__14328__auto__ = (function (){var statearr_16397 = f__14327__auto__.call(null);
(statearr_16397[(6)] = c__14326__auto___16534);

return statearr_16397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(__16530,c__14326__auto___16534,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
);


break;
case "async":
var c__14326__auto___16543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16530,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (__16530,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function (state_16410){
var state_val_16411 = (state_16410[(1)]);
if((state_val_16411 === (1))){
var state_16410__$1 = state_16410;
var statearr_16412_16544 = state_16410__$1;
(statearr_16412_16544[(2)] = null);

(statearr_16412_16544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16411 === (2))){
var state_16410__$1 = state_16410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16410__$1,(4),jobs);
} else {
if((state_val_16411 === (3))){
var inst_16408 = (state_16410[(2)]);
var state_16410__$1 = state_16410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16410__$1,inst_16408);
} else {
if((state_val_16411 === (4))){
var inst_16400 = (state_16410[(2)]);
var inst_16401 = async.call(null,inst_16400);
var state_16410__$1 = state_16410;
if(cljs.core.truth_(inst_16401)){
var statearr_16413_16545 = state_16410__$1;
(statearr_16413_16545[(1)] = (5));

} else {
var statearr_16414_16546 = state_16410__$1;
(statearr_16414_16546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16411 === (5))){
var state_16410__$1 = state_16410;
var statearr_16415_16547 = state_16410__$1;
(statearr_16415_16547[(2)] = null);

(statearr_16415_16547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16411 === (6))){
var state_16410__$1 = state_16410;
var statearr_16416_16548 = state_16410__$1;
(statearr_16416_16548[(2)] = null);

(statearr_16416_16548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16411 === (7))){
var inst_16406 = (state_16410[(2)]);
var state_16410__$1 = state_16410;
var statearr_16417_16549 = state_16410__$1;
(statearr_16417_16549[(2)] = inst_16406);

(statearr_16417_16549[(1)] = (3));


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
});})(__16530,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
;
return ((function (__16530,switch__14167__auto__,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_16418 = [null,null,null,null,null,null,null];
(statearr_16418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__);

(statearr_16418[(1)] = (1));

return statearr_16418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1 = (function (state_16410){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16419){if((e16419 instanceof Object)){
var ex__14171__auto__ = e16419;
var statearr_16420_16550 = state_16410;
(statearr_16420_16550[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16551 = state_16410;
state_16410 = G__16551;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = function(state_16410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1.call(this,state_16410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__;
})()
;})(__16530,switch__14167__auto__,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
})();
var state__14328__auto__ = (function (){var statearr_16421 = f__14327__auto__.call(null);
(statearr_16421[(6)] = c__14326__auto___16543);

return statearr_16421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(__16530,c__14326__auto___16543,G__16373_16531,G__16373_16532__$1,n__4408__auto___16529,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16373_16532__$1)].join('')));

}

var G__16552 = (__16530 + (1));
__16530 = G__16552;
continue;
} else {
}
break;
}

var c__14326__auto___16553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___16553,jobs,results,process,async){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___16553,jobs,results,process,async){
return (function (state_16443){
var state_val_16444 = (state_16443[(1)]);
if((state_val_16444 === (1))){
var state_16443__$1 = state_16443;
var statearr_16445_16554 = state_16443__$1;
(statearr_16445_16554[(2)] = null);

(statearr_16445_16554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16444 === (2))){
var state_16443__$1 = state_16443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16443__$1,(4),from);
} else {
if((state_val_16444 === (3))){
var inst_16441 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16443__$1,inst_16441);
} else {
if((state_val_16444 === (4))){
var inst_16424 = (state_16443[(7)]);
var inst_16424__$1 = (state_16443[(2)]);
var inst_16425 = (inst_16424__$1 == null);
var state_16443__$1 = (function (){var statearr_16446 = state_16443;
(statearr_16446[(7)] = inst_16424__$1);

return statearr_16446;
})();
if(cljs.core.truth_(inst_16425)){
var statearr_16447_16555 = state_16443__$1;
(statearr_16447_16555[(1)] = (5));

} else {
var statearr_16448_16556 = state_16443__$1;
(statearr_16448_16556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16444 === (5))){
var inst_16427 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16443__$1 = state_16443;
var statearr_16449_16557 = state_16443__$1;
(statearr_16449_16557[(2)] = inst_16427);

(statearr_16449_16557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16444 === (6))){
var inst_16424 = (state_16443[(7)]);
var inst_16429 = (state_16443[(8)]);
var inst_16429__$1 = cljs.core.async.chan.call(null,(1));
var inst_16430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16431 = [inst_16424,inst_16429__$1];
var inst_16432 = (new cljs.core.PersistentVector(null,2,(5),inst_16430,inst_16431,null));
var state_16443__$1 = (function (){var statearr_16450 = state_16443;
(statearr_16450[(8)] = inst_16429__$1);

return statearr_16450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16443__$1,(8),jobs,inst_16432);
} else {
if((state_val_16444 === (7))){
var inst_16439 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
var statearr_16451_16558 = state_16443__$1;
(statearr_16451_16558[(2)] = inst_16439);

(statearr_16451_16558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16444 === (8))){
var inst_16429 = (state_16443[(8)]);
var inst_16434 = (state_16443[(2)]);
var state_16443__$1 = (function (){var statearr_16452 = state_16443;
(statearr_16452[(9)] = inst_16434);

return statearr_16452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16443__$1,(9),results,inst_16429);
} else {
if((state_val_16444 === (9))){
var inst_16436 = (state_16443[(2)]);
var state_16443__$1 = (function (){var statearr_16453 = state_16443;
(statearr_16453[(10)] = inst_16436);

return statearr_16453;
})();
var statearr_16454_16559 = state_16443__$1;
(statearr_16454_16559[(2)] = null);

(statearr_16454_16559[(1)] = (2));


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
});})(c__14326__auto___16553,jobs,results,process,async))
;
return ((function (switch__14167__auto__,c__14326__auto___16553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_16455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__);

(statearr_16455[(1)] = (1));

return statearr_16455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1 = (function (state_16443){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16456){if((e16456 instanceof Object)){
var ex__14171__auto__ = e16456;
var statearr_16457_16560 = state_16443;
(statearr_16457_16560[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16561 = state_16443;
state_16443 = G__16561;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = function(state_16443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1.call(this,state_16443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___16553,jobs,results,process,async))
})();
var state__14328__auto__ = (function (){var statearr_16458 = f__14327__auto__.call(null);
(statearr_16458[(6)] = c__14326__auto___16553);

return statearr_16458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___16553,jobs,results,process,async))
);


var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__,jobs,results,process,async){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__,jobs,results,process,async){
return (function (state_16496){
var state_val_16497 = (state_16496[(1)]);
if((state_val_16497 === (7))){
var inst_16492 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16498_16562 = state_16496__$1;
(statearr_16498_16562[(2)] = inst_16492);

(statearr_16498_16562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (20))){
var state_16496__$1 = state_16496;
var statearr_16499_16563 = state_16496__$1;
(statearr_16499_16563[(2)] = null);

(statearr_16499_16563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (1))){
var state_16496__$1 = state_16496;
var statearr_16500_16564 = state_16496__$1;
(statearr_16500_16564[(2)] = null);

(statearr_16500_16564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (4))){
var inst_16461 = (state_16496[(7)]);
var inst_16461__$1 = (state_16496[(2)]);
var inst_16462 = (inst_16461__$1 == null);
var state_16496__$1 = (function (){var statearr_16501 = state_16496;
(statearr_16501[(7)] = inst_16461__$1);

return statearr_16501;
})();
if(cljs.core.truth_(inst_16462)){
var statearr_16502_16565 = state_16496__$1;
(statearr_16502_16565[(1)] = (5));

} else {
var statearr_16503_16566 = state_16496__$1;
(statearr_16503_16566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (15))){
var inst_16474 = (state_16496[(8)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16496__$1,(18),to,inst_16474);
} else {
if((state_val_16497 === (21))){
var inst_16487 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16504_16567 = state_16496__$1;
(statearr_16504_16567[(2)] = inst_16487);

(statearr_16504_16567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (13))){
var inst_16489 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16505 = state_16496;
(statearr_16505[(9)] = inst_16489);

return statearr_16505;
})();
var statearr_16506_16568 = state_16496__$1;
(statearr_16506_16568[(2)] = null);

(statearr_16506_16568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (6))){
var inst_16461 = (state_16496[(7)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16496__$1,(11),inst_16461);
} else {
if((state_val_16497 === (17))){
var inst_16482 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
if(cljs.core.truth_(inst_16482)){
var statearr_16507_16569 = state_16496__$1;
(statearr_16507_16569[(1)] = (19));

} else {
var statearr_16508_16570 = state_16496__$1;
(statearr_16508_16570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (3))){
var inst_16494 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16496__$1,inst_16494);
} else {
if((state_val_16497 === (12))){
var inst_16471 = (state_16496[(10)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16496__$1,(14),inst_16471);
} else {
if((state_val_16497 === (2))){
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16496__$1,(4),results);
} else {
if((state_val_16497 === (19))){
var state_16496__$1 = state_16496;
var statearr_16509_16571 = state_16496__$1;
(statearr_16509_16571[(2)] = null);

(statearr_16509_16571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (11))){
var inst_16471 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16510 = state_16496;
(statearr_16510[(10)] = inst_16471);

return statearr_16510;
})();
var statearr_16511_16572 = state_16496__$1;
(statearr_16511_16572[(2)] = null);

(statearr_16511_16572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (9))){
var state_16496__$1 = state_16496;
var statearr_16512_16573 = state_16496__$1;
(statearr_16512_16573[(2)] = null);

(statearr_16512_16573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (5))){
var state_16496__$1 = state_16496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16513_16574 = state_16496__$1;
(statearr_16513_16574[(1)] = (8));

} else {
var statearr_16514_16575 = state_16496__$1;
(statearr_16514_16575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (14))){
var inst_16476 = (state_16496[(11)]);
var inst_16474 = (state_16496[(8)]);
var inst_16474__$1 = (state_16496[(2)]);
var inst_16475 = (inst_16474__$1 == null);
var inst_16476__$1 = cljs.core.not.call(null,inst_16475);
var state_16496__$1 = (function (){var statearr_16515 = state_16496;
(statearr_16515[(11)] = inst_16476__$1);

(statearr_16515[(8)] = inst_16474__$1);

return statearr_16515;
})();
if(inst_16476__$1){
var statearr_16516_16576 = state_16496__$1;
(statearr_16516_16576[(1)] = (15));

} else {
var statearr_16517_16577 = state_16496__$1;
(statearr_16517_16577[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (16))){
var inst_16476 = (state_16496[(11)]);
var state_16496__$1 = state_16496;
var statearr_16518_16578 = state_16496__$1;
(statearr_16518_16578[(2)] = inst_16476);

(statearr_16518_16578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (10))){
var inst_16468 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16519_16579 = state_16496__$1;
(statearr_16519_16579[(2)] = inst_16468);

(statearr_16519_16579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (18))){
var inst_16479 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16520_16580 = state_16496__$1;
(statearr_16520_16580[(2)] = inst_16479);

(statearr_16520_16580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (8))){
var inst_16465 = cljs.core.async.close_BANG_.call(null,to);
var state_16496__$1 = state_16496;
var statearr_16521_16581 = state_16496__$1;
(statearr_16521_16581[(2)] = inst_16465);

(statearr_16521_16581[(1)] = (10));


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
});})(c__14326__auto__,jobs,results,process,async))
;
return ((function (switch__14167__auto__,c__14326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_16522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__);

(statearr_16522[(1)] = (1));

return statearr_16522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1 = (function (state_16496){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16523){if((e16523 instanceof Object)){
var ex__14171__auto__ = e16523;
var statearr_16524_16582 = state_16496;
(statearr_16524_16582[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16583 = state_16496;
state_16496 = G__16583;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__ = function(state_16496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1.call(this,state_16496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__,jobs,results,process,async))
})();
var state__14328__auto__ = (function (){var statearr_16525 = f__14327__auto__.call(null);
(statearr_16525[(6)] = c__14326__auto__);

return statearr_16525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__,jobs,results,process,async))
);

return c__14326__auto__;
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
var G__16585 = arguments.length;
switch (G__16585) {
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
var G__16588 = arguments.length;
switch (G__16588) {
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
var G__16591 = arguments.length;
switch (G__16591) {
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
var c__14326__auto___16640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___16640,tc,fc){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___16640,tc,fc){
return (function (state_16617){
var state_val_16618 = (state_16617[(1)]);
if((state_val_16618 === (7))){
var inst_16613 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
var statearr_16619_16641 = state_16617__$1;
(statearr_16619_16641[(2)] = inst_16613);

(statearr_16619_16641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (1))){
var state_16617__$1 = state_16617;
var statearr_16620_16642 = state_16617__$1;
(statearr_16620_16642[(2)] = null);

(statearr_16620_16642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (4))){
var inst_16594 = (state_16617[(7)]);
var inst_16594__$1 = (state_16617[(2)]);
var inst_16595 = (inst_16594__$1 == null);
var state_16617__$1 = (function (){var statearr_16621 = state_16617;
(statearr_16621[(7)] = inst_16594__$1);

return statearr_16621;
})();
if(cljs.core.truth_(inst_16595)){
var statearr_16622_16643 = state_16617__$1;
(statearr_16622_16643[(1)] = (5));

} else {
var statearr_16623_16644 = state_16617__$1;
(statearr_16623_16644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (13))){
var state_16617__$1 = state_16617;
var statearr_16624_16645 = state_16617__$1;
(statearr_16624_16645[(2)] = null);

(statearr_16624_16645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (6))){
var inst_16594 = (state_16617[(7)]);
var inst_16600 = p.call(null,inst_16594);
var state_16617__$1 = state_16617;
if(cljs.core.truth_(inst_16600)){
var statearr_16625_16646 = state_16617__$1;
(statearr_16625_16646[(1)] = (9));

} else {
var statearr_16626_16647 = state_16617__$1;
(statearr_16626_16647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (3))){
var inst_16615 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16617__$1,inst_16615);
} else {
if((state_val_16618 === (12))){
var state_16617__$1 = state_16617;
var statearr_16627_16648 = state_16617__$1;
(statearr_16627_16648[(2)] = null);

(statearr_16627_16648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (2))){
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16617__$1,(4),ch);
} else {
if((state_val_16618 === (11))){
var inst_16594 = (state_16617[(7)]);
var inst_16604 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16617__$1,(8),inst_16604,inst_16594);
} else {
if((state_val_16618 === (9))){
var state_16617__$1 = state_16617;
var statearr_16628_16649 = state_16617__$1;
(statearr_16628_16649[(2)] = tc);

(statearr_16628_16649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (5))){
var inst_16597 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16598 = cljs.core.async.close_BANG_.call(null,fc);
var state_16617__$1 = (function (){var statearr_16629 = state_16617;
(statearr_16629[(8)] = inst_16597);

return statearr_16629;
})();
var statearr_16630_16650 = state_16617__$1;
(statearr_16630_16650[(2)] = inst_16598);

(statearr_16630_16650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (14))){
var inst_16611 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
var statearr_16631_16651 = state_16617__$1;
(statearr_16631_16651[(2)] = inst_16611);

(statearr_16631_16651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (10))){
var state_16617__$1 = state_16617;
var statearr_16632_16652 = state_16617__$1;
(statearr_16632_16652[(2)] = fc);

(statearr_16632_16652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (8))){
var inst_16606 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
if(cljs.core.truth_(inst_16606)){
var statearr_16633_16653 = state_16617__$1;
(statearr_16633_16653[(1)] = (12));

} else {
var statearr_16634_16654 = state_16617__$1;
(statearr_16634_16654[(1)] = (13));

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
});})(c__14326__auto___16640,tc,fc))
;
return ((function (switch__14167__auto__,c__14326__auto___16640,tc,fc){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_16635 = [null,null,null,null,null,null,null,null,null];
(statearr_16635[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_16635[(1)] = (1));

return statearr_16635;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_16617){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16636){if((e16636 instanceof Object)){
var ex__14171__auto__ = e16636;
var statearr_16637_16655 = state_16617;
(statearr_16637_16655[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16656 = state_16617;
state_16617 = G__16656;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_16617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_16617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___16640,tc,fc))
})();
var state__14328__auto__ = (function (){var statearr_16638 = f__14327__auto__.call(null);
(statearr_16638[(6)] = c__14326__auto___16640);

return statearr_16638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___16640,tc,fc))
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
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__){
return (function (state_16677){
var state_val_16678 = (state_16677[(1)]);
if((state_val_16678 === (7))){
var inst_16673 = (state_16677[(2)]);
var state_16677__$1 = state_16677;
var statearr_16679_16697 = state_16677__$1;
(statearr_16679_16697[(2)] = inst_16673);

(statearr_16679_16697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (1))){
var inst_16657 = init;
var state_16677__$1 = (function (){var statearr_16680 = state_16677;
(statearr_16680[(7)] = inst_16657);

return statearr_16680;
})();
var statearr_16681_16698 = state_16677__$1;
(statearr_16681_16698[(2)] = null);

(statearr_16681_16698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (4))){
var inst_16660 = (state_16677[(8)]);
var inst_16660__$1 = (state_16677[(2)]);
var inst_16661 = (inst_16660__$1 == null);
var state_16677__$1 = (function (){var statearr_16682 = state_16677;
(statearr_16682[(8)] = inst_16660__$1);

return statearr_16682;
})();
if(cljs.core.truth_(inst_16661)){
var statearr_16683_16699 = state_16677__$1;
(statearr_16683_16699[(1)] = (5));

} else {
var statearr_16684_16700 = state_16677__$1;
(statearr_16684_16700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (6))){
var inst_16660 = (state_16677[(8)]);
var inst_16657 = (state_16677[(7)]);
var inst_16664 = (state_16677[(9)]);
var inst_16664__$1 = f.call(null,inst_16657,inst_16660);
var inst_16665 = cljs.core.reduced_QMARK_.call(null,inst_16664__$1);
var state_16677__$1 = (function (){var statearr_16685 = state_16677;
(statearr_16685[(9)] = inst_16664__$1);

return statearr_16685;
})();
if(inst_16665){
var statearr_16686_16701 = state_16677__$1;
(statearr_16686_16701[(1)] = (8));

} else {
var statearr_16687_16702 = state_16677__$1;
(statearr_16687_16702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (3))){
var inst_16675 = (state_16677[(2)]);
var state_16677__$1 = state_16677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16677__$1,inst_16675);
} else {
if((state_val_16678 === (2))){
var state_16677__$1 = state_16677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16677__$1,(4),ch);
} else {
if((state_val_16678 === (9))){
var inst_16664 = (state_16677[(9)]);
var inst_16657 = inst_16664;
var state_16677__$1 = (function (){var statearr_16688 = state_16677;
(statearr_16688[(7)] = inst_16657);

return statearr_16688;
})();
var statearr_16689_16703 = state_16677__$1;
(statearr_16689_16703[(2)] = null);

(statearr_16689_16703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (5))){
var inst_16657 = (state_16677[(7)]);
var state_16677__$1 = state_16677;
var statearr_16690_16704 = state_16677__$1;
(statearr_16690_16704[(2)] = inst_16657);

(statearr_16690_16704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (10))){
var inst_16671 = (state_16677[(2)]);
var state_16677__$1 = state_16677;
var statearr_16691_16705 = state_16677__$1;
(statearr_16691_16705[(2)] = inst_16671);

(statearr_16691_16705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16678 === (8))){
var inst_16664 = (state_16677[(9)]);
var inst_16667 = cljs.core.deref.call(null,inst_16664);
var state_16677__$1 = state_16677;
var statearr_16692_16706 = state_16677__$1;
(statearr_16692_16706[(2)] = inst_16667);

(statearr_16692_16706[(1)] = (10));


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
});})(c__14326__auto__))
;
return ((function (switch__14167__auto__,c__14326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14168__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14168__auto____0 = (function (){
var statearr_16693 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16693[(0)] = cljs$core$async$reduce_$_state_machine__14168__auto__);

(statearr_16693[(1)] = (1));

return statearr_16693;
});
var cljs$core$async$reduce_$_state_machine__14168__auto____1 = (function (state_16677){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16694){if((e16694 instanceof Object)){
var ex__14171__auto__ = e16694;
var statearr_16695_16707 = state_16677;
(statearr_16695_16707[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16708 = state_16677;
state_16677 = G__16708;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14168__auto__ = function(state_16677){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14168__auto____1.call(this,state_16677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14168__auto____0;
cljs$core$async$reduce_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14168__auto____1;
return cljs$core$async$reduce_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__))
})();
var state__14328__auto__ = (function (){var statearr_16696 = f__14327__auto__.call(null);
(statearr_16696[(6)] = c__14326__auto__);

return statearr_16696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__))
);

return c__14326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__,f__$1){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__,f__$1){
return (function (state_16714){
var state_val_16715 = (state_16714[(1)]);
if((state_val_16715 === (1))){
var inst_16709 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16714__$1 = state_16714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16714__$1,(2),inst_16709);
} else {
if((state_val_16715 === (2))){
var inst_16711 = (state_16714[(2)]);
var inst_16712 = f__$1.call(null,inst_16711);
var state_16714__$1 = state_16714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16714__$1,inst_16712);
} else {
return null;
}
}
});})(c__14326__auto__,f__$1))
;
return ((function (switch__14167__auto__,c__14326__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14168__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14168__auto____0 = (function (){
var statearr_16716 = [null,null,null,null,null,null,null];
(statearr_16716[(0)] = cljs$core$async$transduce_$_state_machine__14168__auto__);

(statearr_16716[(1)] = (1));

return statearr_16716;
});
var cljs$core$async$transduce_$_state_machine__14168__auto____1 = (function (state_16714){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16717){if((e16717 instanceof Object)){
var ex__14171__auto__ = e16717;
var statearr_16718_16720 = state_16714;
(statearr_16718_16720[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16721 = state_16714;
state_16714 = G__16721;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14168__auto__ = function(state_16714){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14168__auto____1.call(this,state_16714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14168__auto____0;
cljs$core$async$transduce_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14168__auto____1;
return cljs$core$async$transduce_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__,f__$1))
})();
var state__14328__auto__ = (function (){var statearr_16719 = f__14327__auto__.call(null);
(statearr_16719[(6)] = c__14326__auto__);

return statearr_16719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__,f__$1))
);

return c__14326__auto__;
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
var G__16723 = arguments.length;
switch (G__16723) {
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
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__){
return (function (state_16748){
var state_val_16749 = (state_16748[(1)]);
if((state_val_16749 === (7))){
var inst_16730 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16750_16771 = state_16748__$1;
(statearr_16750_16771[(2)] = inst_16730);

(statearr_16750_16771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (1))){
var inst_16724 = cljs.core.seq.call(null,coll);
var inst_16725 = inst_16724;
var state_16748__$1 = (function (){var statearr_16751 = state_16748;
(statearr_16751[(7)] = inst_16725);

return statearr_16751;
})();
var statearr_16752_16772 = state_16748__$1;
(statearr_16752_16772[(2)] = null);

(statearr_16752_16772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (4))){
var inst_16725 = (state_16748[(7)]);
var inst_16728 = cljs.core.first.call(null,inst_16725);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16748__$1,(7),ch,inst_16728);
} else {
if((state_val_16749 === (13))){
var inst_16742 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16753_16773 = state_16748__$1;
(statearr_16753_16773[(2)] = inst_16742);

(statearr_16753_16773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (6))){
var inst_16733 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
if(cljs.core.truth_(inst_16733)){
var statearr_16754_16774 = state_16748__$1;
(statearr_16754_16774[(1)] = (8));

} else {
var statearr_16755_16775 = state_16748__$1;
(statearr_16755_16775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (3))){
var inst_16746 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16748__$1,inst_16746);
} else {
if((state_val_16749 === (12))){
var state_16748__$1 = state_16748;
var statearr_16756_16776 = state_16748__$1;
(statearr_16756_16776[(2)] = null);

(statearr_16756_16776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (2))){
var inst_16725 = (state_16748[(7)]);
var state_16748__$1 = state_16748;
if(cljs.core.truth_(inst_16725)){
var statearr_16757_16777 = state_16748__$1;
(statearr_16757_16777[(1)] = (4));

} else {
var statearr_16758_16778 = state_16748__$1;
(statearr_16758_16778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (11))){
var inst_16739 = cljs.core.async.close_BANG_.call(null,ch);
var state_16748__$1 = state_16748;
var statearr_16759_16779 = state_16748__$1;
(statearr_16759_16779[(2)] = inst_16739);

(statearr_16759_16779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (9))){
var state_16748__$1 = state_16748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16760_16780 = state_16748__$1;
(statearr_16760_16780[(1)] = (11));

} else {
var statearr_16761_16781 = state_16748__$1;
(statearr_16761_16781[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (5))){
var inst_16725 = (state_16748[(7)]);
var state_16748__$1 = state_16748;
var statearr_16762_16782 = state_16748__$1;
(statearr_16762_16782[(2)] = inst_16725);

(statearr_16762_16782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (10))){
var inst_16744 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16763_16783 = state_16748__$1;
(statearr_16763_16783[(2)] = inst_16744);

(statearr_16763_16783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (8))){
var inst_16725 = (state_16748[(7)]);
var inst_16735 = cljs.core.next.call(null,inst_16725);
var inst_16725__$1 = inst_16735;
var state_16748__$1 = (function (){var statearr_16764 = state_16748;
(statearr_16764[(7)] = inst_16725__$1);

return statearr_16764;
})();
var statearr_16765_16784 = state_16748__$1;
(statearr_16765_16784[(2)] = null);

(statearr_16765_16784[(1)] = (2));


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
});})(c__14326__auto__))
;
return ((function (switch__14167__auto__,c__14326__auto__){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_16766 = [null,null,null,null,null,null,null,null];
(statearr_16766[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_16766[(1)] = (1));

return statearr_16766;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_16748){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e16767){if((e16767 instanceof Object)){
var ex__14171__auto__ = e16767;
var statearr_16768_16785 = state_16748;
(statearr_16768_16785[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16786 = state_16748;
state_16748 = G__16786;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_16748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_16748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__))
})();
var state__14328__auto__ = (function (){var statearr_16769 = f__14327__auto__.call(null);
(statearr_16769[(6)] = c__14326__auto__);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__))
);

return c__14326__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16787 = (function (ch,cs,meta16788){
this.ch = ch;
this.cs = cs;
this.meta16788 = meta16788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16789,meta16788__$1){
var self__ = this;
var _16789__$1 = this;
return (new cljs.core.async.t_cljs$core$async16787(self__.ch,self__.cs,meta16788__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16789){
var self__ = this;
var _16789__$1 = this;
return self__.meta16788;
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16788","meta16788",1841495726,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16787";

cljs.core.async.t_cljs$core$async16787.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16787");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16787.
 */
cljs.core.async.__GT_t_cljs$core$async16787 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16787(ch__$1,cs__$1,meta16788){
return (new cljs.core.async.t_cljs$core$async16787(ch__$1,cs__$1,meta16788));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16787(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14326__auto___17009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17009,cs,m,dchan,dctr,done){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17009,cs,m,dchan,dctr,done){
return (function (state_16924){
var state_val_16925 = (state_16924[(1)]);
if((state_val_16925 === (7))){
var inst_16920 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16926_17010 = state_16924__$1;
(statearr_16926_17010[(2)] = inst_16920);

(statearr_16926_17010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (20))){
var inst_16823 = (state_16924[(7)]);
var inst_16835 = cljs.core.first.call(null,inst_16823);
var inst_16836 = cljs.core.nth.call(null,inst_16835,(0),null);
var inst_16837 = cljs.core.nth.call(null,inst_16835,(1),null);
var state_16924__$1 = (function (){var statearr_16927 = state_16924;
(statearr_16927[(8)] = inst_16836);

return statearr_16927;
})();
if(cljs.core.truth_(inst_16837)){
var statearr_16928_17011 = state_16924__$1;
(statearr_16928_17011[(1)] = (22));

} else {
var statearr_16929_17012 = state_16924__$1;
(statearr_16929_17012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (27))){
var inst_16865 = (state_16924[(9)]);
var inst_16792 = (state_16924[(10)]);
var inst_16872 = (state_16924[(11)]);
var inst_16867 = (state_16924[(12)]);
var inst_16872__$1 = cljs.core._nth.call(null,inst_16865,inst_16867);
var inst_16873 = cljs.core.async.put_BANG_.call(null,inst_16872__$1,inst_16792,done);
var state_16924__$1 = (function (){var statearr_16930 = state_16924;
(statearr_16930[(11)] = inst_16872__$1);

return statearr_16930;
})();
if(cljs.core.truth_(inst_16873)){
var statearr_16931_17013 = state_16924__$1;
(statearr_16931_17013[(1)] = (30));

} else {
var statearr_16932_17014 = state_16924__$1;
(statearr_16932_17014[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (1))){
var state_16924__$1 = state_16924;
var statearr_16933_17015 = state_16924__$1;
(statearr_16933_17015[(2)] = null);

(statearr_16933_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (24))){
var inst_16823 = (state_16924[(7)]);
var inst_16842 = (state_16924[(2)]);
var inst_16843 = cljs.core.next.call(null,inst_16823);
var inst_16801 = inst_16843;
var inst_16802 = null;
var inst_16803 = (0);
var inst_16804 = (0);
var state_16924__$1 = (function (){var statearr_16934 = state_16924;
(statearr_16934[(13)] = inst_16842);

(statearr_16934[(14)] = inst_16803);

(statearr_16934[(15)] = inst_16802);

(statearr_16934[(16)] = inst_16804);

(statearr_16934[(17)] = inst_16801);

return statearr_16934;
})();
var statearr_16935_17016 = state_16924__$1;
(statearr_16935_17016[(2)] = null);

(statearr_16935_17016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (39))){
var state_16924__$1 = state_16924;
var statearr_16939_17017 = state_16924__$1;
(statearr_16939_17017[(2)] = null);

(statearr_16939_17017[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (4))){
var inst_16792 = (state_16924[(10)]);
var inst_16792__$1 = (state_16924[(2)]);
var inst_16793 = (inst_16792__$1 == null);
var state_16924__$1 = (function (){var statearr_16940 = state_16924;
(statearr_16940[(10)] = inst_16792__$1);

return statearr_16940;
})();
if(cljs.core.truth_(inst_16793)){
var statearr_16941_17018 = state_16924__$1;
(statearr_16941_17018[(1)] = (5));

} else {
var statearr_16942_17019 = state_16924__$1;
(statearr_16942_17019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (15))){
var inst_16803 = (state_16924[(14)]);
var inst_16802 = (state_16924[(15)]);
var inst_16804 = (state_16924[(16)]);
var inst_16801 = (state_16924[(17)]);
var inst_16819 = (state_16924[(2)]);
var inst_16820 = (inst_16804 + (1));
var tmp16936 = inst_16803;
var tmp16937 = inst_16802;
var tmp16938 = inst_16801;
var inst_16801__$1 = tmp16938;
var inst_16802__$1 = tmp16937;
var inst_16803__$1 = tmp16936;
var inst_16804__$1 = inst_16820;
var state_16924__$1 = (function (){var statearr_16943 = state_16924;
(statearr_16943[(14)] = inst_16803__$1);

(statearr_16943[(15)] = inst_16802__$1);

(statearr_16943[(16)] = inst_16804__$1);

(statearr_16943[(18)] = inst_16819);

(statearr_16943[(17)] = inst_16801__$1);

return statearr_16943;
})();
var statearr_16944_17020 = state_16924__$1;
(statearr_16944_17020[(2)] = null);

(statearr_16944_17020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (21))){
var inst_16846 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16948_17021 = state_16924__$1;
(statearr_16948_17021[(2)] = inst_16846);

(statearr_16948_17021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (31))){
var inst_16872 = (state_16924[(11)]);
var inst_16876 = done.call(null,null);
var inst_16877 = cljs.core.async.untap_STAR_.call(null,m,inst_16872);
var state_16924__$1 = (function (){var statearr_16949 = state_16924;
(statearr_16949[(19)] = inst_16876);

return statearr_16949;
})();
var statearr_16950_17022 = state_16924__$1;
(statearr_16950_17022[(2)] = inst_16877);

(statearr_16950_17022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (32))){
var inst_16865 = (state_16924[(9)]);
var inst_16866 = (state_16924[(20)]);
var inst_16864 = (state_16924[(21)]);
var inst_16867 = (state_16924[(12)]);
var inst_16879 = (state_16924[(2)]);
var inst_16880 = (inst_16867 + (1));
var tmp16945 = inst_16865;
var tmp16946 = inst_16866;
var tmp16947 = inst_16864;
var inst_16864__$1 = tmp16947;
var inst_16865__$1 = tmp16945;
var inst_16866__$1 = tmp16946;
var inst_16867__$1 = inst_16880;
var state_16924__$1 = (function (){var statearr_16951 = state_16924;
(statearr_16951[(22)] = inst_16879);

(statearr_16951[(9)] = inst_16865__$1);

(statearr_16951[(20)] = inst_16866__$1);

(statearr_16951[(21)] = inst_16864__$1);

(statearr_16951[(12)] = inst_16867__$1);

return statearr_16951;
})();
var statearr_16952_17023 = state_16924__$1;
(statearr_16952_17023[(2)] = null);

(statearr_16952_17023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (40))){
var inst_16892 = (state_16924[(23)]);
var inst_16896 = done.call(null,null);
var inst_16897 = cljs.core.async.untap_STAR_.call(null,m,inst_16892);
var state_16924__$1 = (function (){var statearr_16953 = state_16924;
(statearr_16953[(24)] = inst_16896);

return statearr_16953;
})();
var statearr_16954_17024 = state_16924__$1;
(statearr_16954_17024[(2)] = inst_16897);

(statearr_16954_17024[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (33))){
var inst_16883 = (state_16924[(25)]);
var inst_16885 = cljs.core.chunked_seq_QMARK_.call(null,inst_16883);
var state_16924__$1 = state_16924;
if(inst_16885){
var statearr_16955_17025 = state_16924__$1;
(statearr_16955_17025[(1)] = (36));

} else {
var statearr_16956_17026 = state_16924__$1;
(statearr_16956_17026[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (13))){
var inst_16813 = (state_16924[(26)]);
var inst_16816 = cljs.core.async.close_BANG_.call(null,inst_16813);
var state_16924__$1 = state_16924;
var statearr_16957_17027 = state_16924__$1;
(statearr_16957_17027[(2)] = inst_16816);

(statearr_16957_17027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (22))){
var inst_16836 = (state_16924[(8)]);
var inst_16839 = cljs.core.async.close_BANG_.call(null,inst_16836);
var state_16924__$1 = state_16924;
var statearr_16958_17028 = state_16924__$1;
(statearr_16958_17028[(2)] = inst_16839);

(statearr_16958_17028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (36))){
var inst_16883 = (state_16924[(25)]);
var inst_16887 = cljs.core.chunk_first.call(null,inst_16883);
var inst_16888 = cljs.core.chunk_rest.call(null,inst_16883);
var inst_16889 = cljs.core.count.call(null,inst_16887);
var inst_16864 = inst_16888;
var inst_16865 = inst_16887;
var inst_16866 = inst_16889;
var inst_16867 = (0);
var state_16924__$1 = (function (){var statearr_16959 = state_16924;
(statearr_16959[(9)] = inst_16865);

(statearr_16959[(20)] = inst_16866);

(statearr_16959[(21)] = inst_16864);

(statearr_16959[(12)] = inst_16867);

return statearr_16959;
})();
var statearr_16960_17029 = state_16924__$1;
(statearr_16960_17029[(2)] = null);

(statearr_16960_17029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (41))){
var inst_16883 = (state_16924[(25)]);
var inst_16899 = (state_16924[(2)]);
var inst_16900 = cljs.core.next.call(null,inst_16883);
var inst_16864 = inst_16900;
var inst_16865 = null;
var inst_16866 = (0);
var inst_16867 = (0);
var state_16924__$1 = (function (){var statearr_16961 = state_16924;
(statearr_16961[(9)] = inst_16865);

(statearr_16961[(20)] = inst_16866);

(statearr_16961[(21)] = inst_16864);

(statearr_16961[(12)] = inst_16867);

(statearr_16961[(27)] = inst_16899);

return statearr_16961;
})();
var statearr_16962_17030 = state_16924__$1;
(statearr_16962_17030[(2)] = null);

(statearr_16962_17030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (43))){
var state_16924__$1 = state_16924;
var statearr_16963_17031 = state_16924__$1;
(statearr_16963_17031[(2)] = null);

(statearr_16963_17031[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (29))){
var inst_16908 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16964_17032 = state_16924__$1;
(statearr_16964_17032[(2)] = inst_16908);

(statearr_16964_17032[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (44))){
var inst_16917 = (state_16924[(2)]);
var state_16924__$1 = (function (){var statearr_16965 = state_16924;
(statearr_16965[(28)] = inst_16917);

return statearr_16965;
})();
var statearr_16966_17033 = state_16924__$1;
(statearr_16966_17033[(2)] = null);

(statearr_16966_17033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (6))){
var inst_16856 = (state_16924[(29)]);
var inst_16855 = cljs.core.deref.call(null,cs);
var inst_16856__$1 = cljs.core.keys.call(null,inst_16855);
var inst_16857 = cljs.core.count.call(null,inst_16856__$1);
var inst_16858 = cljs.core.reset_BANG_.call(null,dctr,inst_16857);
var inst_16863 = cljs.core.seq.call(null,inst_16856__$1);
var inst_16864 = inst_16863;
var inst_16865 = null;
var inst_16866 = (0);
var inst_16867 = (0);
var state_16924__$1 = (function (){var statearr_16967 = state_16924;
(statearr_16967[(9)] = inst_16865);

(statearr_16967[(20)] = inst_16866);

(statearr_16967[(30)] = inst_16858);

(statearr_16967[(21)] = inst_16864);

(statearr_16967[(12)] = inst_16867);

(statearr_16967[(29)] = inst_16856__$1);

return statearr_16967;
})();
var statearr_16968_17034 = state_16924__$1;
(statearr_16968_17034[(2)] = null);

(statearr_16968_17034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (28))){
var inst_16883 = (state_16924[(25)]);
var inst_16864 = (state_16924[(21)]);
var inst_16883__$1 = cljs.core.seq.call(null,inst_16864);
var state_16924__$1 = (function (){var statearr_16969 = state_16924;
(statearr_16969[(25)] = inst_16883__$1);

return statearr_16969;
})();
if(inst_16883__$1){
var statearr_16970_17035 = state_16924__$1;
(statearr_16970_17035[(1)] = (33));

} else {
var statearr_16971_17036 = state_16924__$1;
(statearr_16971_17036[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (25))){
var inst_16866 = (state_16924[(20)]);
var inst_16867 = (state_16924[(12)]);
var inst_16869 = (inst_16867 < inst_16866);
var inst_16870 = inst_16869;
var state_16924__$1 = state_16924;
if(cljs.core.truth_(inst_16870)){
var statearr_16972_17037 = state_16924__$1;
(statearr_16972_17037[(1)] = (27));

} else {
var statearr_16973_17038 = state_16924__$1;
(statearr_16973_17038[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (34))){
var state_16924__$1 = state_16924;
var statearr_16974_17039 = state_16924__$1;
(statearr_16974_17039[(2)] = null);

(statearr_16974_17039[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (17))){
var state_16924__$1 = state_16924;
var statearr_16975_17040 = state_16924__$1;
(statearr_16975_17040[(2)] = null);

(statearr_16975_17040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (3))){
var inst_16922 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16924__$1,inst_16922);
} else {
if((state_val_16925 === (12))){
var inst_16851 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16976_17041 = state_16924__$1;
(statearr_16976_17041[(2)] = inst_16851);

(statearr_16976_17041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (2))){
var state_16924__$1 = state_16924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16924__$1,(4),ch);
} else {
if((state_val_16925 === (23))){
var state_16924__$1 = state_16924;
var statearr_16977_17042 = state_16924__$1;
(statearr_16977_17042[(2)] = null);

(statearr_16977_17042[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (35))){
var inst_16906 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16978_17043 = state_16924__$1;
(statearr_16978_17043[(2)] = inst_16906);

(statearr_16978_17043[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (19))){
var inst_16823 = (state_16924[(7)]);
var inst_16827 = cljs.core.chunk_first.call(null,inst_16823);
var inst_16828 = cljs.core.chunk_rest.call(null,inst_16823);
var inst_16829 = cljs.core.count.call(null,inst_16827);
var inst_16801 = inst_16828;
var inst_16802 = inst_16827;
var inst_16803 = inst_16829;
var inst_16804 = (0);
var state_16924__$1 = (function (){var statearr_16979 = state_16924;
(statearr_16979[(14)] = inst_16803);

(statearr_16979[(15)] = inst_16802);

(statearr_16979[(16)] = inst_16804);

(statearr_16979[(17)] = inst_16801);

return statearr_16979;
})();
var statearr_16980_17044 = state_16924__$1;
(statearr_16980_17044[(2)] = null);

(statearr_16980_17044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (11))){
var inst_16823 = (state_16924[(7)]);
var inst_16801 = (state_16924[(17)]);
var inst_16823__$1 = cljs.core.seq.call(null,inst_16801);
var state_16924__$1 = (function (){var statearr_16981 = state_16924;
(statearr_16981[(7)] = inst_16823__$1);

return statearr_16981;
})();
if(inst_16823__$1){
var statearr_16982_17045 = state_16924__$1;
(statearr_16982_17045[(1)] = (16));

} else {
var statearr_16983_17046 = state_16924__$1;
(statearr_16983_17046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (9))){
var inst_16853 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16984_17047 = state_16924__$1;
(statearr_16984_17047[(2)] = inst_16853);

(statearr_16984_17047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (5))){
var inst_16799 = cljs.core.deref.call(null,cs);
var inst_16800 = cljs.core.seq.call(null,inst_16799);
var inst_16801 = inst_16800;
var inst_16802 = null;
var inst_16803 = (0);
var inst_16804 = (0);
var state_16924__$1 = (function (){var statearr_16985 = state_16924;
(statearr_16985[(14)] = inst_16803);

(statearr_16985[(15)] = inst_16802);

(statearr_16985[(16)] = inst_16804);

(statearr_16985[(17)] = inst_16801);

return statearr_16985;
})();
var statearr_16986_17048 = state_16924__$1;
(statearr_16986_17048[(2)] = null);

(statearr_16986_17048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (14))){
var state_16924__$1 = state_16924;
var statearr_16987_17049 = state_16924__$1;
(statearr_16987_17049[(2)] = null);

(statearr_16987_17049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (45))){
var inst_16914 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16988_17050 = state_16924__$1;
(statearr_16988_17050[(2)] = inst_16914);

(statearr_16988_17050[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (26))){
var inst_16856 = (state_16924[(29)]);
var inst_16910 = (state_16924[(2)]);
var inst_16911 = cljs.core.seq.call(null,inst_16856);
var state_16924__$1 = (function (){var statearr_16989 = state_16924;
(statearr_16989[(31)] = inst_16910);

return statearr_16989;
})();
if(inst_16911){
var statearr_16990_17051 = state_16924__$1;
(statearr_16990_17051[(1)] = (42));

} else {
var statearr_16991_17052 = state_16924__$1;
(statearr_16991_17052[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (16))){
var inst_16823 = (state_16924[(7)]);
var inst_16825 = cljs.core.chunked_seq_QMARK_.call(null,inst_16823);
var state_16924__$1 = state_16924;
if(inst_16825){
var statearr_16992_17053 = state_16924__$1;
(statearr_16992_17053[(1)] = (19));

} else {
var statearr_16993_17054 = state_16924__$1;
(statearr_16993_17054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (38))){
var inst_16903 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16994_17055 = state_16924__$1;
(statearr_16994_17055[(2)] = inst_16903);

(statearr_16994_17055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (30))){
var state_16924__$1 = state_16924;
var statearr_16995_17056 = state_16924__$1;
(statearr_16995_17056[(2)] = null);

(statearr_16995_17056[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (10))){
var inst_16802 = (state_16924[(15)]);
var inst_16804 = (state_16924[(16)]);
var inst_16812 = cljs.core._nth.call(null,inst_16802,inst_16804);
var inst_16813 = cljs.core.nth.call(null,inst_16812,(0),null);
var inst_16814 = cljs.core.nth.call(null,inst_16812,(1),null);
var state_16924__$1 = (function (){var statearr_16996 = state_16924;
(statearr_16996[(26)] = inst_16813);

return statearr_16996;
})();
if(cljs.core.truth_(inst_16814)){
var statearr_16997_17057 = state_16924__$1;
(statearr_16997_17057[(1)] = (13));

} else {
var statearr_16998_17058 = state_16924__$1;
(statearr_16998_17058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (18))){
var inst_16849 = (state_16924[(2)]);
var state_16924__$1 = state_16924;
var statearr_16999_17059 = state_16924__$1;
(statearr_16999_17059[(2)] = inst_16849);

(statearr_16999_17059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (42))){
var state_16924__$1 = state_16924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16924__$1,(45),dchan);
} else {
if((state_val_16925 === (37))){
var inst_16792 = (state_16924[(10)]);
var inst_16892 = (state_16924[(23)]);
var inst_16883 = (state_16924[(25)]);
var inst_16892__$1 = cljs.core.first.call(null,inst_16883);
var inst_16893 = cljs.core.async.put_BANG_.call(null,inst_16892__$1,inst_16792,done);
var state_16924__$1 = (function (){var statearr_17000 = state_16924;
(statearr_17000[(23)] = inst_16892__$1);

return statearr_17000;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_17001_17060 = state_16924__$1;
(statearr_17001_17060[(1)] = (39));

} else {
var statearr_17002_17061 = state_16924__$1;
(statearr_17002_17061[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16925 === (8))){
var inst_16803 = (state_16924[(14)]);
var inst_16804 = (state_16924[(16)]);
var inst_16806 = (inst_16804 < inst_16803);
var inst_16807 = inst_16806;
var state_16924__$1 = state_16924;
if(cljs.core.truth_(inst_16807)){
var statearr_17003_17062 = state_16924__$1;
(statearr_17003_17062[(1)] = (10));

} else {
var statearr_17004_17063 = state_16924__$1;
(statearr_17004_17063[(1)] = (11));

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
});})(c__14326__auto___17009,cs,m,dchan,dctr,done))
;
return ((function (switch__14167__auto__,c__14326__auto___17009,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14168__auto__ = null;
var cljs$core$async$mult_$_state_machine__14168__auto____0 = (function (){
var statearr_17005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17005[(0)] = cljs$core$async$mult_$_state_machine__14168__auto__);

(statearr_17005[(1)] = (1));

return statearr_17005;
});
var cljs$core$async$mult_$_state_machine__14168__auto____1 = (function (state_16924){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_16924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17006){if((e17006 instanceof Object)){
var ex__14171__auto__ = e17006;
var statearr_17007_17064 = state_16924;
(statearr_17007_17064[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17065 = state_16924;
state_16924 = G__17065;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14168__auto__ = function(state_16924){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14168__auto____1.call(this,state_16924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14168__auto____0;
cljs$core$async$mult_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14168__auto____1;
return cljs$core$async$mult_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17009,cs,m,dchan,dctr,done))
})();
var state__14328__auto__ = (function (){var statearr_17008 = f__14327__auto__.call(null);
(statearr_17008[(6)] = c__14326__auto___17009);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17009,cs,m,dchan,dctr,done))
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
var G__17067 = arguments.length;
switch (G__17067) {
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
var len__4531__auto___17079 = arguments.length;
var i__4532__auto___17080 = (0);
while(true){
if((i__4532__auto___17080 < len__4531__auto___17079)){
args__4534__auto__.push((arguments[i__4532__auto___17080]));

var G__17081 = (i__4532__auto___17080 + (1));
i__4532__auto___17080 = G__17081;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17073){
var map__17074 = p__17073;
var map__17074__$1 = ((((!((map__17074 == null)))?(((((map__17074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17074):map__17074);
var opts = map__17074__$1;
var statearr_17076_17082 = state;
(statearr_17076_17082[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__17074,map__17074__$1,opts){
return (function (val){
var statearr_17077_17083 = state;
(statearr_17077_17083[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17074,map__17074__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17078_17084 = state;
(statearr_17078_17084[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17069){
var G__17070 = cljs.core.first.call(null,seq17069);
var seq17069__$1 = cljs.core.next.call(null,seq17069);
var G__17071 = cljs.core.first.call(null,seq17069__$1);
var seq17069__$2 = cljs.core.next.call(null,seq17069__$1);
var G__17072 = cljs.core.first.call(null,seq17069__$2);
var seq17069__$3 = cljs.core.next.call(null,seq17069__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17070,G__17071,G__17072,seq17069__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17085 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17086){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17086 = meta17086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17087,meta17086__$1){
var self__ = this;
var _17087__$1 = this;
return (new cljs.core.async.t_cljs$core$async17085(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17086__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17087){
var self__ = this;
var _17087__$1 = this;
return self__.meta17086;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17085.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17086","meta17086",681179651,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17085";

cljs.core.async.t_cljs$core$async17085.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17085");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17085.
 */
cljs.core.async.__GT_t_cljs$core$async17085 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17085(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17086){
return (new cljs.core.async.t_cljs$core$async17085(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17086));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17085(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14326__auto___17249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17189){
var state_val_17190 = (state_17189[(1)]);
if((state_val_17190 === (7))){
var inst_17104 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17191_17250 = state_17189__$1;
(statearr_17191_17250[(2)] = inst_17104);

(statearr_17191_17250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (20))){
var inst_17116 = (state_17189[(7)]);
var state_17189__$1 = state_17189;
var statearr_17192_17251 = state_17189__$1;
(statearr_17192_17251[(2)] = inst_17116);

(statearr_17192_17251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (27))){
var state_17189__$1 = state_17189;
var statearr_17193_17252 = state_17189__$1;
(statearr_17193_17252[(2)] = null);

(statearr_17193_17252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (1))){
var inst_17091 = (state_17189[(8)]);
var inst_17091__$1 = calc_state.call(null);
var inst_17093 = (inst_17091__$1 == null);
var inst_17094 = cljs.core.not.call(null,inst_17093);
var state_17189__$1 = (function (){var statearr_17194 = state_17189;
(statearr_17194[(8)] = inst_17091__$1);

return statearr_17194;
})();
if(inst_17094){
var statearr_17195_17253 = state_17189__$1;
(statearr_17195_17253[(1)] = (2));

} else {
var statearr_17196_17254 = state_17189__$1;
(statearr_17196_17254[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (24))){
var inst_17140 = (state_17189[(9)]);
var inst_17163 = (state_17189[(10)]);
var inst_17149 = (state_17189[(11)]);
var inst_17163__$1 = inst_17140.call(null,inst_17149);
var state_17189__$1 = (function (){var statearr_17197 = state_17189;
(statearr_17197[(10)] = inst_17163__$1);

return statearr_17197;
})();
if(cljs.core.truth_(inst_17163__$1)){
var statearr_17198_17255 = state_17189__$1;
(statearr_17198_17255[(1)] = (29));

} else {
var statearr_17199_17256 = state_17189__$1;
(statearr_17199_17256[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (4))){
var inst_17107 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17107)){
var statearr_17200_17257 = state_17189__$1;
(statearr_17200_17257[(1)] = (8));

} else {
var statearr_17201_17258 = state_17189__$1;
(statearr_17201_17258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (15))){
var inst_17134 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17134)){
var statearr_17202_17259 = state_17189__$1;
(statearr_17202_17259[(1)] = (19));

} else {
var statearr_17203_17260 = state_17189__$1;
(statearr_17203_17260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (21))){
var inst_17139 = (state_17189[(12)]);
var inst_17139__$1 = (state_17189[(2)]);
var inst_17140 = cljs.core.get.call(null,inst_17139__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17141 = cljs.core.get.call(null,inst_17139__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17142 = cljs.core.get.call(null,inst_17139__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17189__$1 = (function (){var statearr_17204 = state_17189;
(statearr_17204[(9)] = inst_17140);

(statearr_17204[(12)] = inst_17139__$1);

(statearr_17204[(13)] = inst_17141);

return statearr_17204;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17189__$1,(22),inst_17142);
} else {
if((state_val_17190 === (31))){
var inst_17171 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17171)){
var statearr_17205_17261 = state_17189__$1;
(statearr_17205_17261[(1)] = (32));

} else {
var statearr_17206_17262 = state_17189__$1;
(statearr_17206_17262[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (32))){
var inst_17148 = (state_17189[(14)]);
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17189__$1,(35),out,inst_17148);
} else {
if((state_val_17190 === (33))){
var inst_17139 = (state_17189[(12)]);
var inst_17116 = inst_17139;
var state_17189__$1 = (function (){var statearr_17207 = state_17189;
(statearr_17207[(7)] = inst_17116);

return statearr_17207;
})();
var statearr_17208_17263 = state_17189__$1;
(statearr_17208_17263[(2)] = null);

(statearr_17208_17263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (13))){
var inst_17116 = (state_17189[(7)]);
var inst_17123 = inst_17116.cljs$lang$protocol_mask$partition0$;
var inst_17124 = (inst_17123 & (64));
var inst_17125 = inst_17116.cljs$core$ISeq$;
var inst_17126 = (cljs.core.PROTOCOL_SENTINEL === inst_17125);
var inst_17127 = ((inst_17124) || (inst_17126));
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17127)){
var statearr_17209_17264 = state_17189__$1;
(statearr_17209_17264[(1)] = (16));

} else {
var statearr_17210_17265 = state_17189__$1;
(statearr_17210_17265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (22))){
var inst_17148 = (state_17189[(14)]);
var inst_17149 = (state_17189[(11)]);
var inst_17147 = (state_17189[(2)]);
var inst_17148__$1 = cljs.core.nth.call(null,inst_17147,(0),null);
var inst_17149__$1 = cljs.core.nth.call(null,inst_17147,(1),null);
var inst_17150 = (inst_17148__$1 == null);
var inst_17151 = cljs.core._EQ_.call(null,inst_17149__$1,change);
var inst_17152 = ((inst_17150) || (inst_17151));
var state_17189__$1 = (function (){var statearr_17211 = state_17189;
(statearr_17211[(14)] = inst_17148__$1);

(statearr_17211[(11)] = inst_17149__$1);

return statearr_17211;
})();
if(cljs.core.truth_(inst_17152)){
var statearr_17212_17266 = state_17189__$1;
(statearr_17212_17266[(1)] = (23));

} else {
var statearr_17213_17267 = state_17189__$1;
(statearr_17213_17267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (36))){
var inst_17139 = (state_17189[(12)]);
var inst_17116 = inst_17139;
var state_17189__$1 = (function (){var statearr_17214 = state_17189;
(statearr_17214[(7)] = inst_17116);

return statearr_17214;
})();
var statearr_17215_17268 = state_17189__$1;
(statearr_17215_17268[(2)] = null);

(statearr_17215_17268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (29))){
var inst_17163 = (state_17189[(10)]);
var state_17189__$1 = state_17189;
var statearr_17216_17269 = state_17189__$1;
(statearr_17216_17269[(2)] = inst_17163);

(statearr_17216_17269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (6))){
var state_17189__$1 = state_17189;
var statearr_17217_17270 = state_17189__$1;
(statearr_17217_17270[(2)] = false);

(statearr_17217_17270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (28))){
var inst_17159 = (state_17189[(2)]);
var inst_17160 = calc_state.call(null);
var inst_17116 = inst_17160;
var state_17189__$1 = (function (){var statearr_17218 = state_17189;
(statearr_17218[(7)] = inst_17116);

(statearr_17218[(15)] = inst_17159);

return statearr_17218;
})();
var statearr_17219_17271 = state_17189__$1;
(statearr_17219_17271[(2)] = null);

(statearr_17219_17271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (25))){
var inst_17185 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17220_17272 = state_17189__$1;
(statearr_17220_17272[(2)] = inst_17185);

(statearr_17220_17272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (34))){
var inst_17183 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17221_17273 = state_17189__$1;
(statearr_17221_17273[(2)] = inst_17183);

(statearr_17221_17273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (17))){
var state_17189__$1 = state_17189;
var statearr_17222_17274 = state_17189__$1;
(statearr_17222_17274[(2)] = false);

(statearr_17222_17274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (3))){
var state_17189__$1 = state_17189;
var statearr_17223_17275 = state_17189__$1;
(statearr_17223_17275[(2)] = false);

(statearr_17223_17275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (12))){
var inst_17187 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17189__$1,inst_17187);
} else {
if((state_val_17190 === (2))){
var inst_17091 = (state_17189[(8)]);
var inst_17096 = inst_17091.cljs$lang$protocol_mask$partition0$;
var inst_17097 = (inst_17096 & (64));
var inst_17098 = inst_17091.cljs$core$ISeq$;
var inst_17099 = (cljs.core.PROTOCOL_SENTINEL === inst_17098);
var inst_17100 = ((inst_17097) || (inst_17099));
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17100)){
var statearr_17224_17276 = state_17189__$1;
(statearr_17224_17276[(1)] = (5));

} else {
var statearr_17225_17277 = state_17189__$1;
(statearr_17225_17277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (23))){
var inst_17148 = (state_17189[(14)]);
var inst_17154 = (inst_17148 == null);
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17154)){
var statearr_17226_17278 = state_17189__$1;
(statearr_17226_17278[(1)] = (26));

} else {
var statearr_17227_17279 = state_17189__$1;
(statearr_17227_17279[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (35))){
var inst_17174 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17174)){
var statearr_17228_17280 = state_17189__$1;
(statearr_17228_17280[(1)] = (36));

} else {
var statearr_17229_17281 = state_17189__$1;
(statearr_17229_17281[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (19))){
var inst_17116 = (state_17189[(7)]);
var inst_17136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17116);
var state_17189__$1 = state_17189;
var statearr_17230_17282 = state_17189__$1;
(statearr_17230_17282[(2)] = inst_17136);

(statearr_17230_17282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (11))){
var inst_17116 = (state_17189[(7)]);
var inst_17120 = (inst_17116 == null);
var inst_17121 = cljs.core.not.call(null,inst_17120);
var state_17189__$1 = state_17189;
if(inst_17121){
var statearr_17231_17283 = state_17189__$1;
(statearr_17231_17283[(1)] = (13));

} else {
var statearr_17232_17284 = state_17189__$1;
(statearr_17232_17284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (9))){
var inst_17091 = (state_17189[(8)]);
var state_17189__$1 = state_17189;
var statearr_17233_17285 = state_17189__$1;
(statearr_17233_17285[(2)] = inst_17091);

(statearr_17233_17285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (5))){
var state_17189__$1 = state_17189;
var statearr_17234_17286 = state_17189__$1;
(statearr_17234_17286[(2)] = true);

(statearr_17234_17286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (14))){
var state_17189__$1 = state_17189;
var statearr_17235_17287 = state_17189__$1;
(statearr_17235_17287[(2)] = false);

(statearr_17235_17287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (26))){
var inst_17149 = (state_17189[(11)]);
var inst_17156 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17149);
var state_17189__$1 = state_17189;
var statearr_17236_17288 = state_17189__$1;
(statearr_17236_17288[(2)] = inst_17156);

(statearr_17236_17288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (16))){
var state_17189__$1 = state_17189;
var statearr_17237_17289 = state_17189__$1;
(statearr_17237_17289[(2)] = true);

(statearr_17237_17289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (38))){
var inst_17179 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17238_17290 = state_17189__$1;
(statearr_17238_17290[(2)] = inst_17179);

(statearr_17238_17290[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (30))){
var inst_17140 = (state_17189[(9)]);
var inst_17149 = (state_17189[(11)]);
var inst_17141 = (state_17189[(13)]);
var inst_17166 = cljs.core.empty_QMARK_.call(null,inst_17140);
var inst_17167 = inst_17141.call(null,inst_17149);
var inst_17168 = cljs.core.not.call(null,inst_17167);
var inst_17169 = ((inst_17166) && (inst_17168));
var state_17189__$1 = state_17189;
var statearr_17239_17291 = state_17189__$1;
(statearr_17239_17291[(2)] = inst_17169);

(statearr_17239_17291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (10))){
var inst_17091 = (state_17189[(8)]);
var inst_17112 = (state_17189[(2)]);
var inst_17113 = cljs.core.get.call(null,inst_17112,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17114 = cljs.core.get.call(null,inst_17112,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17115 = cljs.core.get.call(null,inst_17112,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17116 = inst_17091;
var state_17189__$1 = (function (){var statearr_17240 = state_17189;
(statearr_17240[(16)] = inst_17114);

(statearr_17240[(17)] = inst_17113);

(statearr_17240[(18)] = inst_17115);

(statearr_17240[(7)] = inst_17116);

return statearr_17240;
})();
var statearr_17241_17292 = state_17189__$1;
(statearr_17241_17292[(2)] = null);

(statearr_17241_17292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (18))){
var inst_17131 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17242_17293 = state_17189__$1;
(statearr_17242_17293[(2)] = inst_17131);

(statearr_17242_17293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (37))){
var state_17189__$1 = state_17189;
var statearr_17243_17294 = state_17189__$1;
(statearr_17243_17294[(2)] = null);

(statearr_17243_17294[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (8))){
var inst_17091 = (state_17189[(8)]);
var inst_17109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17091);
var state_17189__$1 = state_17189;
var statearr_17244_17295 = state_17189__$1;
(statearr_17244_17295[(2)] = inst_17109);

(statearr_17244_17295[(1)] = (10));


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
});})(c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14167__auto__,c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14168__auto__ = null;
var cljs$core$async$mix_$_state_machine__14168__auto____0 = (function (){
var statearr_17245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17245[(0)] = cljs$core$async$mix_$_state_machine__14168__auto__);

(statearr_17245[(1)] = (1));

return statearr_17245;
});
var cljs$core$async$mix_$_state_machine__14168__auto____1 = (function (state_17189){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17246){if((e17246 instanceof Object)){
var ex__14171__auto__ = e17246;
var statearr_17247_17296 = state_17189;
(statearr_17247_17296[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17297 = state_17189;
state_17189 = G__17297;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14168__auto__ = function(state_17189){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14168__auto____1.call(this,state_17189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14168__auto____0;
cljs$core$async$mix_$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14168__auto____1;
return cljs$core$async$mix_$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14328__auto__ = (function (){var statearr_17248 = f__14327__auto__.call(null);
(statearr_17248[(6)] = c__14326__auto___17249);

return statearr_17248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__17299 = arguments.length;
switch (G__17299) {
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
var G__17303 = arguments.length;
switch (G__17303) {
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
return (function (p1__17301_SHARP_){
if(cljs.core.truth_(p1__17301_SHARP_.call(null,topic))){
return p1__17301_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17301_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17304 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17305){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17305 = meta17305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17306,meta17305__$1){
var self__ = this;
var _17306__$1 = this;
return (new cljs.core.async.t_cljs$core$async17304(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17305__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17306){
var self__ = this;
var _17306__$1 = this;
return self__.meta17305;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17305","meta17305",261875503,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17304";

cljs.core.async.t_cljs$core$async17304.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17304");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17304.
 */
cljs.core.async.__GT_t_cljs$core$async17304 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17304(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17305){
return (new cljs.core.async.t_cljs$core$async17304(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17305));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17304(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14326__auto___17424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17424,mults,ensure_mult,p){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17424,mults,ensure_mult,p){
return (function (state_17378){
var state_val_17379 = (state_17378[(1)]);
if((state_val_17379 === (7))){
var inst_17374 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17380_17425 = state_17378__$1;
(statearr_17380_17425[(2)] = inst_17374);

(statearr_17380_17425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (20))){
var state_17378__$1 = state_17378;
var statearr_17381_17426 = state_17378__$1;
(statearr_17381_17426[(2)] = null);

(statearr_17381_17426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (1))){
var state_17378__$1 = state_17378;
var statearr_17382_17427 = state_17378__$1;
(statearr_17382_17427[(2)] = null);

(statearr_17382_17427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (24))){
var inst_17357 = (state_17378[(7)]);
var inst_17366 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17357);
var state_17378__$1 = state_17378;
var statearr_17383_17428 = state_17378__$1;
(statearr_17383_17428[(2)] = inst_17366);

(statearr_17383_17428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (4))){
var inst_17309 = (state_17378[(8)]);
var inst_17309__$1 = (state_17378[(2)]);
var inst_17310 = (inst_17309__$1 == null);
var state_17378__$1 = (function (){var statearr_17384 = state_17378;
(statearr_17384[(8)] = inst_17309__$1);

return statearr_17384;
})();
if(cljs.core.truth_(inst_17310)){
var statearr_17385_17429 = state_17378__$1;
(statearr_17385_17429[(1)] = (5));

} else {
var statearr_17386_17430 = state_17378__$1;
(statearr_17386_17430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (15))){
var inst_17351 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17387_17431 = state_17378__$1;
(statearr_17387_17431[(2)] = inst_17351);

(statearr_17387_17431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (21))){
var inst_17371 = (state_17378[(2)]);
var state_17378__$1 = (function (){var statearr_17388 = state_17378;
(statearr_17388[(9)] = inst_17371);

return statearr_17388;
})();
var statearr_17389_17432 = state_17378__$1;
(statearr_17389_17432[(2)] = null);

(statearr_17389_17432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (13))){
var inst_17333 = (state_17378[(10)]);
var inst_17335 = cljs.core.chunked_seq_QMARK_.call(null,inst_17333);
var state_17378__$1 = state_17378;
if(inst_17335){
var statearr_17390_17433 = state_17378__$1;
(statearr_17390_17433[(1)] = (16));

} else {
var statearr_17391_17434 = state_17378__$1;
(statearr_17391_17434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (22))){
var inst_17363 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
if(cljs.core.truth_(inst_17363)){
var statearr_17392_17435 = state_17378__$1;
(statearr_17392_17435[(1)] = (23));

} else {
var statearr_17393_17436 = state_17378__$1;
(statearr_17393_17436[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (6))){
var inst_17357 = (state_17378[(7)]);
var inst_17309 = (state_17378[(8)]);
var inst_17359 = (state_17378[(11)]);
var inst_17357__$1 = topic_fn.call(null,inst_17309);
var inst_17358 = cljs.core.deref.call(null,mults);
var inst_17359__$1 = cljs.core.get.call(null,inst_17358,inst_17357__$1);
var state_17378__$1 = (function (){var statearr_17394 = state_17378;
(statearr_17394[(7)] = inst_17357__$1);

(statearr_17394[(11)] = inst_17359__$1);

return statearr_17394;
})();
if(cljs.core.truth_(inst_17359__$1)){
var statearr_17395_17437 = state_17378__$1;
(statearr_17395_17437[(1)] = (19));

} else {
var statearr_17396_17438 = state_17378__$1;
(statearr_17396_17438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (25))){
var inst_17368 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17397_17439 = state_17378__$1;
(statearr_17397_17439[(2)] = inst_17368);

(statearr_17397_17439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (17))){
var inst_17333 = (state_17378[(10)]);
var inst_17342 = cljs.core.first.call(null,inst_17333);
var inst_17343 = cljs.core.async.muxch_STAR_.call(null,inst_17342);
var inst_17344 = cljs.core.async.close_BANG_.call(null,inst_17343);
var inst_17345 = cljs.core.next.call(null,inst_17333);
var inst_17319 = inst_17345;
var inst_17320 = null;
var inst_17321 = (0);
var inst_17322 = (0);
var state_17378__$1 = (function (){var statearr_17398 = state_17378;
(statearr_17398[(12)] = inst_17319);

(statearr_17398[(13)] = inst_17321);

(statearr_17398[(14)] = inst_17320);

(statearr_17398[(15)] = inst_17322);

(statearr_17398[(16)] = inst_17344);

return statearr_17398;
})();
var statearr_17399_17440 = state_17378__$1;
(statearr_17399_17440[(2)] = null);

(statearr_17399_17440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (3))){
var inst_17376 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17378__$1,inst_17376);
} else {
if((state_val_17379 === (12))){
var inst_17353 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17400_17441 = state_17378__$1;
(statearr_17400_17441[(2)] = inst_17353);

(statearr_17400_17441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (2))){
var state_17378__$1 = state_17378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17378__$1,(4),ch);
} else {
if((state_val_17379 === (23))){
var state_17378__$1 = state_17378;
var statearr_17401_17442 = state_17378__$1;
(statearr_17401_17442[(2)] = null);

(statearr_17401_17442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (19))){
var inst_17309 = (state_17378[(8)]);
var inst_17359 = (state_17378[(11)]);
var inst_17361 = cljs.core.async.muxch_STAR_.call(null,inst_17359);
var state_17378__$1 = state_17378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17378__$1,(22),inst_17361,inst_17309);
} else {
if((state_val_17379 === (11))){
var inst_17319 = (state_17378[(12)]);
var inst_17333 = (state_17378[(10)]);
var inst_17333__$1 = cljs.core.seq.call(null,inst_17319);
var state_17378__$1 = (function (){var statearr_17402 = state_17378;
(statearr_17402[(10)] = inst_17333__$1);

return statearr_17402;
})();
if(inst_17333__$1){
var statearr_17403_17443 = state_17378__$1;
(statearr_17403_17443[(1)] = (13));

} else {
var statearr_17404_17444 = state_17378__$1;
(statearr_17404_17444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (9))){
var inst_17355 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17405_17445 = state_17378__$1;
(statearr_17405_17445[(2)] = inst_17355);

(statearr_17405_17445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (5))){
var inst_17316 = cljs.core.deref.call(null,mults);
var inst_17317 = cljs.core.vals.call(null,inst_17316);
var inst_17318 = cljs.core.seq.call(null,inst_17317);
var inst_17319 = inst_17318;
var inst_17320 = null;
var inst_17321 = (0);
var inst_17322 = (0);
var state_17378__$1 = (function (){var statearr_17406 = state_17378;
(statearr_17406[(12)] = inst_17319);

(statearr_17406[(13)] = inst_17321);

(statearr_17406[(14)] = inst_17320);

(statearr_17406[(15)] = inst_17322);

return statearr_17406;
})();
var statearr_17407_17446 = state_17378__$1;
(statearr_17407_17446[(2)] = null);

(statearr_17407_17446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (14))){
var state_17378__$1 = state_17378;
var statearr_17411_17447 = state_17378__$1;
(statearr_17411_17447[(2)] = null);

(statearr_17411_17447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (16))){
var inst_17333 = (state_17378[(10)]);
var inst_17337 = cljs.core.chunk_first.call(null,inst_17333);
var inst_17338 = cljs.core.chunk_rest.call(null,inst_17333);
var inst_17339 = cljs.core.count.call(null,inst_17337);
var inst_17319 = inst_17338;
var inst_17320 = inst_17337;
var inst_17321 = inst_17339;
var inst_17322 = (0);
var state_17378__$1 = (function (){var statearr_17412 = state_17378;
(statearr_17412[(12)] = inst_17319);

(statearr_17412[(13)] = inst_17321);

(statearr_17412[(14)] = inst_17320);

(statearr_17412[(15)] = inst_17322);

return statearr_17412;
})();
var statearr_17413_17448 = state_17378__$1;
(statearr_17413_17448[(2)] = null);

(statearr_17413_17448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (10))){
var inst_17319 = (state_17378[(12)]);
var inst_17321 = (state_17378[(13)]);
var inst_17320 = (state_17378[(14)]);
var inst_17322 = (state_17378[(15)]);
var inst_17327 = cljs.core._nth.call(null,inst_17320,inst_17322);
var inst_17328 = cljs.core.async.muxch_STAR_.call(null,inst_17327);
var inst_17329 = cljs.core.async.close_BANG_.call(null,inst_17328);
var inst_17330 = (inst_17322 + (1));
var tmp17408 = inst_17319;
var tmp17409 = inst_17321;
var tmp17410 = inst_17320;
var inst_17319__$1 = tmp17408;
var inst_17320__$1 = tmp17410;
var inst_17321__$1 = tmp17409;
var inst_17322__$1 = inst_17330;
var state_17378__$1 = (function (){var statearr_17414 = state_17378;
(statearr_17414[(17)] = inst_17329);

(statearr_17414[(12)] = inst_17319__$1);

(statearr_17414[(13)] = inst_17321__$1);

(statearr_17414[(14)] = inst_17320__$1);

(statearr_17414[(15)] = inst_17322__$1);

return statearr_17414;
})();
var statearr_17415_17449 = state_17378__$1;
(statearr_17415_17449[(2)] = null);

(statearr_17415_17449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (18))){
var inst_17348 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17416_17450 = state_17378__$1;
(statearr_17416_17450[(2)] = inst_17348);

(statearr_17416_17450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (8))){
var inst_17321 = (state_17378[(13)]);
var inst_17322 = (state_17378[(15)]);
var inst_17324 = (inst_17322 < inst_17321);
var inst_17325 = inst_17324;
var state_17378__$1 = state_17378;
if(cljs.core.truth_(inst_17325)){
var statearr_17417_17451 = state_17378__$1;
(statearr_17417_17451[(1)] = (10));

} else {
var statearr_17418_17452 = state_17378__$1;
(statearr_17418_17452[(1)] = (11));

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
});})(c__14326__auto___17424,mults,ensure_mult,p))
;
return ((function (switch__14167__auto__,c__14326__auto___17424,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17419[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17419[(1)] = (1));

return statearr_17419;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17378){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17420){if((e17420 instanceof Object)){
var ex__14171__auto__ = e17420;
var statearr_17421_17453 = state_17378;
(statearr_17421_17453[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17454 = state_17378;
state_17378 = G__17454;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17424,mults,ensure_mult,p))
})();
var state__14328__auto__ = (function (){var statearr_17422 = f__14327__auto__.call(null);
(statearr_17422[(6)] = c__14326__auto___17424);

return statearr_17422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17424,mults,ensure_mult,p))
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
var G__17456 = arguments.length;
switch (G__17456) {
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
var G__17459 = arguments.length;
switch (G__17459) {
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
var G__17462 = arguments.length;
switch (G__17462) {
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
var c__14326__auto___17529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (7))){
var state_17501__$1 = state_17501;
var statearr_17503_17530 = state_17501__$1;
(statearr_17503_17530[(2)] = null);

(statearr_17503_17530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (1))){
var state_17501__$1 = state_17501;
var statearr_17504_17531 = state_17501__$1;
(statearr_17504_17531[(2)] = null);

(statearr_17504_17531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (4))){
var inst_17465 = (state_17501[(7)]);
var inst_17467 = (inst_17465 < cnt);
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17467)){
var statearr_17505_17532 = state_17501__$1;
(statearr_17505_17532[(1)] = (6));

} else {
var statearr_17506_17533 = state_17501__$1;
(statearr_17506_17533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (15))){
var inst_17497 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17507_17534 = state_17501__$1;
(statearr_17507_17534[(2)] = inst_17497);

(statearr_17507_17534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (13))){
var inst_17490 = cljs.core.async.close_BANG_.call(null,out);
var state_17501__$1 = state_17501;
var statearr_17508_17535 = state_17501__$1;
(statearr_17508_17535[(2)] = inst_17490);

(statearr_17508_17535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (6))){
var state_17501__$1 = state_17501;
var statearr_17509_17536 = state_17501__$1;
(statearr_17509_17536[(2)] = null);

(statearr_17509_17536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (3))){
var inst_17499 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17501__$1,inst_17499);
} else {
if((state_val_17502 === (12))){
var inst_17487 = (state_17501[(8)]);
var inst_17487__$1 = (state_17501[(2)]);
var inst_17488 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17487__$1);
var state_17501__$1 = (function (){var statearr_17510 = state_17501;
(statearr_17510[(8)] = inst_17487__$1);

return statearr_17510;
})();
if(cljs.core.truth_(inst_17488)){
var statearr_17511_17537 = state_17501__$1;
(statearr_17511_17537[(1)] = (13));

} else {
var statearr_17512_17538 = state_17501__$1;
(statearr_17512_17538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (2))){
var inst_17464 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17465 = (0);
var state_17501__$1 = (function (){var statearr_17513 = state_17501;
(statearr_17513[(9)] = inst_17464);

(statearr_17513[(7)] = inst_17465);

return statearr_17513;
})();
var statearr_17514_17539 = state_17501__$1;
(statearr_17514_17539[(2)] = null);

(statearr_17514_17539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (11))){
var inst_17465 = (state_17501[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17501,(10),Object,null,(9));
var inst_17474 = chs__$1.call(null,inst_17465);
var inst_17475 = done.call(null,inst_17465);
var inst_17476 = cljs.core.async.take_BANG_.call(null,inst_17474,inst_17475);
var state_17501__$1 = state_17501;
var statearr_17515_17540 = state_17501__$1;
(statearr_17515_17540[(2)] = inst_17476);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (9))){
var inst_17465 = (state_17501[(7)]);
var inst_17478 = (state_17501[(2)]);
var inst_17479 = (inst_17465 + (1));
var inst_17465__$1 = inst_17479;
var state_17501__$1 = (function (){var statearr_17516 = state_17501;
(statearr_17516[(10)] = inst_17478);

(statearr_17516[(7)] = inst_17465__$1);

return statearr_17516;
})();
var statearr_17517_17541 = state_17501__$1;
(statearr_17517_17541[(2)] = null);

(statearr_17517_17541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (5))){
var inst_17485 = (state_17501[(2)]);
var state_17501__$1 = (function (){var statearr_17518 = state_17501;
(statearr_17518[(11)] = inst_17485);

return statearr_17518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17501__$1,(12),dchan);
} else {
if((state_val_17502 === (14))){
var inst_17487 = (state_17501[(8)]);
var inst_17492 = cljs.core.apply.call(null,f,inst_17487);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17501__$1,(16),out,inst_17492);
} else {
if((state_val_17502 === (16))){
var inst_17494 = (state_17501[(2)]);
var state_17501__$1 = (function (){var statearr_17519 = state_17501;
(statearr_17519[(12)] = inst_17494);

return statearr_17519;
})();
var statearr_17520_17542 = state_17501__$1;
(statearr_17520_17542[(2)] = null);

(statearr_17520_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (10))){
var inst_17469 = (state_17501[(2)]);
var inst_17470 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17501__$1 = (function (){var statearr_17521 = state_17501;
(statearr_17521[(13)] = inst_17469);

return statearr_17521;
})();
var statearr_17522_17543 = state_17501__$1;
(statearr_17522_17543[(2)] = inst_17470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (8))){
var inst_17483 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17523_17544 = state_17501__$1;
(statearr_17523_17544[(2)] = inst_17483);

(statearr_17523_17544[(1)] = (5));


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
});})(c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14167__auto__,c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17524[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17524[(1)] = (1));

return statearr_17524;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17501){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17525){if((e17525 instanceof Object)){
var ex__14171__auto__ = e17525;
var statearr_17526_17545 = state_17501;
(statearr_17526_17545[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17546 = state_17501;
state_17501 = G__17546;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14328__auto__ = (function (){var statearr_17527 = f__14327__auto__.call(null);
(statearr_17527[(6)] = c__14326__auto___17529);

return statearr_17527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17529,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17549 = arguments.length;
switch (G__17549) {
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
var c__14326__auto___17603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17603,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17603,out){
return (function (state_17581){
var state_val_17582 = (state_17581[(1)]);
if((state_val_17582 === (7))){
var inst_17560 = (state_17581[(7)]);
var inst_17561 = (state_17581[(8)]);
var inst_17560__$1 = (state_17581[(2)]);
var inst_17561__$1 = cljs.core.nth.call(null,inst_17560__$1,(0),null);
var inst_17562 = cljs.core.nth.call(null,inst_17560__$1,(1),null);
var inst_17563 = (inst_17561__$1 == null);
var state_17581__$1 = (function (){var statearr_17583 = state_17581;
(statearr_17583[(9)] = inst_17562);

(statearr_17583[(7)] = inst_17560__$1);

(statearr_17583[(8)] = inst_17561__$1);

return statearr_17583;
})();
if(cljs.core.truth_(inst_17563)){
var statearr_17584_17604 = state_17581__$1;
(statearr_17584_17604[(1)] = (8));

} else {
var statearr_17585_17605 = state_17581__$1;
(statearr_17585_17605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (1))){
var inst_17550 = cljs.core.vec.call(null,chs);
var inst_17551 = inst_17550;
var state_17581__$1 = (function (){var statearr_17586 = state_17581;
(statearr_17586[(10)] = inst_17551);

return statearr_17586;
})();
var statearr_17587_17606 = state_17581__$1;
(statearr_17587_17606[(2)] = null);

(statearr_17587_17606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (4))){
var inst_17551 = (state_17581[(10)]);
var state_17581__$1 = state_17581;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17581__$1,(7),inst_17551);
} else {
if((state_val_17582 === (6))){
var inst_17577 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17588_17607 = state_17581__$1;
(statearr_17588_17607[(2)] = inst_17577);

(statearr_17588_17607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (3))){
var inst_17579 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17581__$1,inst_17579);
} else {
if((state_val_17582 === (2))){
var inst_17551 = (state_17581[(10)]);
var inst_17553 = cljs.core.count.call(null,inst_17551);
var inst_17554 = (inst_17553 > (0));
var state_17581__$1 = state_17581;
if(cljs.core.truth_(inst_17554)){
var statearr_17590_17608 = state_17581__$1;
(statearr_17590_17608[(1)] = (4));

} else {
var statearr_17591_17609 = state_17581__$1;
(statearr_17591_17609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (11))){
var inst_17551 = (state_17581[(10)]);
var inst_17570 = (state_17581[(2)]);
var tmp17589 = inst_17551;
var inst_17551__$1 = tmp17589;
var state_17581__$1 = (function (){var statearr_17592 = state_17581;
(statearr_17592[(11)] = inst_17570);

(statearr_17592[(10)] = inst_17551__$1);

return statearr_17592;
})();
var statearr_17593_17610 = state_17581__$1;
(statearr_17593_17610[(2)] = null);

(statearr_17593_17610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (9))){
var inst_17561 = (state_17581[(8)]);
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17581__$1,(11),out,inst_17561);
} else {
if((state_val_17582 === (5))){
var inst_17575 = cljs.core.async.close_BANG_.call(null,out);
var state_17581__$1 = state_17581;
var statearr_17594_17611 = state_17581__$1;
(statearr_17594_17611[(2)] = inst_17575);

(statearr_17594_17611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (10))){
var inst_17573 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17595_17612 = state_17581__$1;
(statearr_17595_17612[(2)] = inst_17573);

(statearr_17595_17612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (8))){
var inst_17562 = (state_17581[(9)]);
var inst_17551 = (state_17581[(10)]);
var inst_17560 = (state_17581[(7)]);
var inst_17561 = (state_17581[(8)]);
var inst_17565 = (function (){var cs = inst_17551;
var vec__17556 = inst_17560;
var v = inst_17561;
var c = inst_17562;
return ((function (cs,vec__17556,v,c,inst_17562,inst_17551,inst_17560,inst_17561,state_val_17582,c__14326__auto___17603,out){
return (function (p1__17547_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17547_SHARP_);
});
;})(cs,vec__17556,v,c,inst_17562,inst_17551,inst_17560,inst_17561,state_val_17582,c__14326__auto___17603,out))
})();
var inst_17566 = cljs.core.filterv.call(null,inst_17565,inst_17551);
var inst_17551__$1 = inst_17566;
var state_17581__$1 = (function (){var statearr_17596 = state_17581;
(statearr_17596[(10)] = inst_17551__$1);

return statearr_17596;
})();
var statearr_17597_17613 = state_17581__$1;
(statearr_17597_17613[(2)] = null);

(statearr_17597_17613[(1)] = (2));


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
});})(c__14326__auto___17603,out))
;
return ((function (switch__14167__auto__,c__14326__auto___17603,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17598 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17598[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17598[(1)] = (1));

return statearr_17598;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17581){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17599){if((e17599 instanceof Object)){
var ex__14171__auto__ = e17599;
var statearr_17600_17614 = state_17581;
(statearr_17600_17614[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17615 = state_17581;
state_17581 = G__17615;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17603,out))
})();
var state__14328__auto__ = (function (){var statearr_17601 = f__14327__auto__.call(null);
(statearr_17601[(6)] = c__14326__auto___17603);

return statearr_17601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17603,out))
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
var G__17617 = arguments.length;
switch (G__17617) {
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
var c__14326__auto___17662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17662,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17662,out){
return (function (state_17641){
var state_val_17642 = (state_17641[(1)]);
if((state_val_17642 === (7))){
var inst_17623 = (state_17641[(7)]);
var inst_17623__$1 = (state_17641[(2)]);
var inst_17624 = (inst_17623__$1 == null);
var inst_17625 = cljs.core.not.call(null,inst_17624);
var state_17641__$1 = (function (){var statearr_17643 = state_17641;
(statearr_17643[(7)] = inst_17623__$1);

return statearr_17643;
})();
if(inst_17625){
var statearr_17644_17663 = state_17641__$1;
(statearr_17644_17663[(1)] = (8));

} else {
var statearr_17645_17664 = state_17641__$1;
(statearr_17645_17664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (1))){
var inst_17618 = (0);
var state_17641__$1 = (function (){var statearr_17646 = state_17641;
(statearr_17646[(8)] = inst_17618);

return statearr_17646;
})();
var statearr_17647_17665 = state_17641__$1;
(statearr_17647_17665[(2)] = null);

(statearr_17647_17665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (4))){
var state_17641__$1 = state_17641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17641__$1,(7),ch);
} else {
if((state_val_17642 === (6))){
var inst_17636 = (state_17641[(2)]);
var state_17641__$1 = state_17641;
var statearr_17648_17666 = state_17641__$1;
(statearr_17648_17666[(2)] = inst_17636);

(statearr_17648_17666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (3))){
var inst_17638 = (state_17641[(2)]);
var inst_17639 = cljs.core.async.close_BANG_.call(null,out);
var state_17641__$1 = (function (){var statearr_17649 = state_17641;
(statearr_17649[(9)] = inst_17638);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17641__$1,inst_17639);
} else {
if((state_val_17642 === (2))){
var inst_17618 = (state_17641[(8)]);
var inst_17620 = (inst_17618 < n);
var state_17641__$1 = state_17641;
if(cljs.core.truth_(inst_17620)){
var statearr_17650_17667 = state_17641__$1;
(statearr_17650_17667[(1)] = (4));

} else {
var statearr_17651_17668 = state_17641__$1;
(statearr_17651_17668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (11))){
var inst_17618 = (state_17641[(8)]);
var inst_17628 = (state_17641[(2)]);
var inst_17629 = (inst_17618 + (1));
var inst_17618__$1 = inst_17629;
var state_17641__$1 = (function (){var statearr_17652 = state_17641;
(statearr_17652[(8)] = inst_17618__$1);

(statearr_17652[(10)] = inst_17628);

return statearr_17652;
})();
var statearr_17653_17669 = state_17641__$1;
(statearr_17653_17669[(2)] = null);

(statearr_17653_17669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (9))){
var state_17641__$1 = state_17641;
var statearr_17654_17670 = state_17641__$1;
(statearr_17654_17670[(2)] = null);

(statearr_17654_17670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (5))){
var state_17641__$1 = state_17641;
var statearr_17655_17671 = state_17641__$1;
(statearr_17655_17671[(2)] = null);

(statearr_17655_17671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (10))){
var inst_17633 = (state_17641[(2)]);
var state_17641__$1 = state_17641;
var statearr_17656_17672 = state_17641__$1;
(statearr_17656_17672[(2)] = inst_17633);

(statearr_17656_17672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (8))){
var inst_17623 = (state_17641[(7)]);
var state_17641__$1 = state_17641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17641__$1,(11),out,inst_17623);
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
});})(c__14326__auto___17662,out))
;
return ((function (switch__14167__auto__,c__14326__auto___17662,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17657[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17657[(1)] = (1));

return statearr_17657;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17641){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17658){if((e17658 instanceof Object)){
var ex__14171__auto__ = e17658;
var statearr_17659_17673 = state_17641;
(statearr_17659_17673[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17674 = state_17641;
state_17641 = G__17674;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17662,out))
})();
var state__14328__auto__ = (function (){var statearr_17660 = f__14327__auto__.call(null);
(statearr_17660[(6)] = c__14326__auto___17662);

return statearr_17660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17662,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17676 = (function (f,ch,meta17677){
this.f = f;
this.ch = ch;
this.meta17677 = meta17677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17678,meta17677__$1){
var self__ = this;
var _17678__$1 = this;
return (new cljs.core.async.t_cljs$core$async17676(self__.f,self__.ch,meta17677__$1));
});

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17678){
var self__ = this;
var _17678__$1 = this;
return self__.meta17677;
});

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17679 = (function (f,ch,meta17677,_,fn1,meta17680){
this.f = f;
this.ch = ch;
this.meta17677 = meta17677;
this._ = _;
this.fn1 = fn1;
this.meta17680 = meta17680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17681,meta17680__$1){
var self__ = this;
var _17681__$1 = this;
return (new cljs.core.async.t_cljs$core$async17679(self__.f,self__.ch,self__.meta17677,self__._,self__.fn1,meta17680__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17681){
var self__ = this;
var _17681__$1 = this;
return self__.meta17680;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17675_SHARP_){
return f1.call(null,(((p1__17675_SHARP_ == null))?null:self__.f.call(null,p1__17675_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17677","meta17677",408866831,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17676","cljs.core.async/t_cljs$core$async17676",48363168,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17680","meta17680",-748455979,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17679";

cljs.core.async.t_cljs$core$async17679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17679");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17679.
 */
cljs.core.async.__GT_t_cljs$core$async17679 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17679(f__$1,ch__$1,meta17677__$1,___$2,fn1__$1,meta17680){
return (new cljs.core.async.t_cljs$core$async17679(f__$1,ch__$1,meta17677__$1,___$2,fn1__$1,meta17680));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17679(self__.f,self__.ch,self__.meta17677,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17677","meta17677",408866831,null)], null);
});

cljs.core.async.t_cljs$core$async17676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17676";

cljs.core.async.t_cljs$core$async17676.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17676");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17676.
 */
cljs.core.async.__GT_t_cljs$core$async17676 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17676(f__$1,ch__$1,meta17677){
return (new cljs.core.async.t_cljs$core$async17676(f__$1,ch__$1,meta17677));
});

}

return (new cljs.core.async.t_cljs$core$async17676(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17682 = (function (f,ch,meta17683){
this.f = f;
this.ch = ch;
this.meta17683 = meta17683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17684,meta17683__$1){
var self__ = this;
var _17684__$1 = this;
return (new cljs.core.async.t_cljs$core$async17682(self__.f,self__.ch,meta17683__$1));
});

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17684){
var self__ = this;
var _17684__$1 = this;
return self__.meta17683;
});

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17683","meta17683",1106501698,null)], null);
});

cljs.core.async.t_cljs$core$async17682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17682";

cljs.core.async.t_cljs$core$async17682.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17682");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17682.
 */
cljs.core.async.__GT_t_cljs$core$async17682 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17682(f__$1,ch__$1,meta17683){
return (new cljs.core.async.t_cljs$core$async17682(f__$1,ch__$1,meta17683));
});

}

return (new cljs.core.async.t_cljs$core$async17682(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17685 = (function (p,ch,meta17686){
this.p = p;
this.ch = ch;
this.meta17686 = meta17686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17687,meta17686__$1){
var self__ = this;
var _17687__$1 = this;
return (new cljs.core.async.t_cljs$core$async17685(self__.p,self__.ch,meta17686__$1));
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17687){
var self__ = this;
var _17687__$1 = this;
return self__.meta17686;
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17686","meta17686",995477863,null)], null);
});

cljs.core.async.t_cljs$core$async17685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17685";

cljs.core.async.t_cljs$core$async17685.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17685");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17685.
 */
cljs.core.async.__GT_t_cljs$core$async17685 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17685(p__$1,ch__$1,meta17686){
return (new cljs.core.async.t_cljs$core$async17685(p__$1,ch__$1,meta17686));
});

}

return (new cljs.core.async.t_cljs$core$async17685(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17689 = arguments.length;
switch (G__17689) {
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
var c__14326__auto___17729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17729,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17729,out){
return (function (state_17710){
var state_val_17711 = (state_17710[(1)]);
if((state_val_17711 === (7))){
var inst_17706 = (state_17710[(2)]);
var state_17710__$1 = state_17710;
var statearr_17712_17730 = state_17710__$1;
(statearr_17712_17730[(2)] = inst_17706);

(statearr_17712_17730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (1))){
var state_17710__$1 = state_17710;
var statearr_17713_17731 = state_17710__$1;
(statearr_17713_17731[(2)] = null);

(statearr_17713_17731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (4))){
var inst_17692 = (state_17710[(7)]);
var inst_17692__$1 = (state_17710[(2)]);
var inst_17693 = (inst_17692__$1 == null);
var state_17710__$1 = (function (){var statearr_17714 = state_17710;
(statearr_17714[(7)] = inst_17692__$1);

return statearr_17714;
})();
if(cljs.core.truth_(inst_17693)){
var statearr_17715_17732 = state_17710__$1;
(statearr_17715_17732[(1)] = (5));

} else {
var statearr_17716_17733 = state_17710__$1;
(statearr_17716_17733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (6))){
var inst_17692 = (state_17710[(7)]);
var inst_17697 = p.call(null,inst_17692);
var state_17710__$1 = state_17710;
if(cljs.core.truth_(inst_17697)){
var statearr_17717_17734 = state_17710__$1;
(statearr_17717_17734[(1)] = (8));

} else {
var statearr_17718_17735 = state_17710__$1;
(statearr_17718_17735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (3))){
var inst_17708 = (state_17710[(2)]);
var state_17710__$1 = state_17710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17710__$1,inst_17708);
} else {
if((state_val_17711 === (2))){
var state_17710__$1 = state_17710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17710__$1,(4),ch);
} else {
if((state_val_17711 === (11))){
var inst_17700 = (state_17710[(2)]);
var state_17710__$1 = state_17710;
var statearr_17719_17736 = state_17710__$1;
(statearr_17719_17736[(2)] = inst_17700);

(statearr_17719_17736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (9))){
var state_17710__$1 = state_17710;
var statearr_17720_17737 = state_17710__$1;
(statearr_17720_17737[(2)] = null);

(statearr_17720_17737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (5))){
var inst_17695 = cljs.core.async.close_BANG_.call(null,out);
var state_17710__$1 = state_17710;
var statearr_17721_17738 = state_17710__$1;
(statearr_17721_17738[(2)] = inst_17695);

(statearr_17721_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (10))){
var inst_17703 = (state_17710[(2)]);
var state_17710__$1 = (function (){var statearr_17722 = state_17710;
(statearr_17722[(8)] = inst_17703);

return statearr_17722;
})();
var statearr_17723_17739 = state_17710__$1;
(statearr_17723_17739[(2)] = null);

(statearr_17723_17739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17711 === (8))){
var inst_17692 = (state_17710[(7)]);
var state_17710__$1 = state_17710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17710__$1,(11),out,inst_17692);
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
});})(c__14326__auto___17729,out))
;
return ((function (switch__14167__auto__,c__14326__auto___17729,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17724 = [null,null,null,null,null,null,null,null,null];
(statearr_17724[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17724[(1)] = (1));

return statearr_17724;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17710){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17725){if((e17725 instanceof Object)){
var ex__14171__auto__ = e17725;
var statearr_17726_17740 = state_17710;
(statearr_17726_17740[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17741 = state_17710;
state_17710 = G__17741;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17729,out))
})();
var state__14328__auto__ = (function (){var statearr_17727 = f__14327__auto__.call(null);
(statearr_17727[(6)] = c__14326__auto___17729);

return statearr_17727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17729,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17743 = arguments.length;
switch (G__17743) {
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
var c__14326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto__){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto__){
return (function (state_17806){
var state_val_17807 = (state_17806[(1)]);
if((state_val_17807 === (7))){
var inst_17802 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17808_17846 = state_17806__$1;
(statearr_17808_17846[(2)] = inst_17802);

(statearr_17808_17846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (20))){
var inst_17772 = (state_17806[(7)]);
var inst_17783 = (state_17806[(2)]);
var inst_17784 = cljs.core.next.call(null,inst_17772);
var inst_17758 = inst_17784;
var inst_17759 = null;
var inst_17760 = (0);
var inst_17761 = (0);
var state_17806__$1 = (function (){var statearr_17809 = state_17806;
(statearr_17809[(8)] = inst_17761);

(statearr_17809[(9)] = inst_17783);

(statearr_17809[(10)] = inst_17758);

(statearr_17809[(11)] = inst_17760);

(statearr_17809[(12)] = inst_17759);

return statearr_17809;
})();
var statearr_17810_17847 = state_17806__$1;
(statearr_17810_17847[(2)] = null);

(statearr_17810_17847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (1))){
var state_17806__$1 = state_17806;
var statearr_17811_17848 = state_17806__$1;
(statearr_17811_17848[(2)] = null);

(statearr_17811_17848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (4))){
var inst_17747 = (state_17806[(13)]);
var inst_17747__$1 = (state_17806[(2)]);
var inst_17748 = (inst_17747__$1 == null);
var state_17806__$1 = (function (){var statearr_17812 = state_17806;
(statearr_17812[(13)] = inst_17747__$1);

return statearr_17812;
})();
if(cljs.core.truth_(inst_17748)){
var statearr_17813_17849 = state_17806__$1;
(statearr_17813_17849[(1)] = (5));

} else {
var statearr_17814_17850 = state_17806__$1;
(statearr_17814_17850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (15))){
var state_17806__$1 = state_17806;
var statearr_17818_17851 = state_17806__$1;
(statearr_17818_17851[(2)] = null);

(statearr_17818_17851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (21))){
var state_17806__$1 = state_17806;
var statearr_17819_17852 = state_17806__$1;
(statearr_17819_17852[(2)] = null);

(statearr_17819_17852[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (13))){
var inst_17761 = (state_17806[(8)]);
var inst_17758 = (state_17806[(10)]);
var inst_17760 = (state_17806[(11)]);
var inst_17759 = (state_17806[(12)]);
var inst_17768 = (state_17806[(2)]);
var inst_17769 = (inst_17761 + (1));
var tmp17815 = inst_17758;
var tmp17816 = inst_17760;
var tmp17817 = inst_17759;
var inst_17758__$1 = tmp17815;
var inst_17759__$1 = tmp17817;
var inst_17760__$1 = tmp17816;
var inst_17761__$1 = inst_17769;
var state_17806__$1 = (function (){var statearr_17820 = state_17806;
(statearr_17820[(8)] = inst_17761__$1);

(statearr_17820[(14)] = inst_17768);

(statearr_17820[(10)] = inst_17758__$1);

(statearr_17820[(11)] = inst_17760__$1);

(statearr_17820[(12)] = inst_17759__$1);

return statearr_17820;
})();
var statearr_17821_17853 = state_17806__$1;
(statearr_17821_17853[(2)] = null);

(statearr_17821_17853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (22))){
var state_17806__$1 = state_17806;
var statearr_17822_17854 = state_17806__$1;
(statearr_17822_17854[(2)] = null);

(statearr_17822_17854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (6))){
var inst_17747 = (state_17806[(13)]);
var inst_17756 = f.call(null,inst_17747);
var inst_17757 = cljs.core.seq.call(null,inst_17756);
var inst_17758 = inst_17757;
var inst_17759 = null;
var inst_17760 = (0);
var inst_17761 = (0);
var state_17806__$1 = (function (){var statearr_17823 = state_17806;
(statearr_17823[(8)] = inst_17761);

(statearr_17823[(10)] = inst_17758);

(statearr_17823[(11)] = inst_17760);

(statearr_17823[(12)] = inst_17759);

return statearr_17823;
})();
var statearr_17824_17855 = state_17806__$1;
(statearr_17824_17855[(2)] = null);

(statearr_17824_17855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (17))){
var inst_17772 = (state_17806[(7)]);
var inst_17776 = cljs.core.chunk_first.call(null,inst_17772);
var inst_17777 = cljs.core.chunk_rest.call(null,inst_17772);
var inst_17778 = cljs.core.count.call(null,inst_17776);
var inst_17758 = inst_17777;
var inst_17759 = inst_17776;
var inst_17760 = inst_17778;
var inst_17761 = (0);
var state_17806__$1 = (function (){var statearr_17825 = state_17806;
(statearr_17825[(8)] = inst_17761);

(statearr_17825[(10)] = inst_17758);

(statearr_17825[(11)] = inst_17760);

(statearr_17825[(12)] = inst_17759);

return statearr_17825;
})();
var statearr_17826_17856 = state_17806__$1;
(statearr_17826_17856[(2)] = null);

(statearr_17826_17856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (3))){
var inst_17804 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17806__$1,inst_17804);
} else {
if((state_val_17807 === (12))){
var inst_17792 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17827_17857 = state_17806__$1;
(statearr_17827_17857[(2)] = inst_17792);

(statearr_17827_17857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (2))){
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17806__$1,(4),in$);
} else {
if((state_val_17807 === (23))){
var inst_17800 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17828_17858 = state_17806__$1;
(statearr_17828_17858[(2)] = inst_17800);

(statearr_17828_17858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (19))){
var inst_17787 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17829_17859 = state_17806__$1;
(statearr_17829_17859[(2)] = inst_17787);

(statearr_17829_17859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (11))){
var inst_17772 = (state_17806[(7)]);
var inst_17758 = (state_17806[(10)]);
var inst_17772__$1 = cljs.core.seq.call(null,inst_17758);
var state_17806__$1 = (function (){var statearr_17830 = state_17806;
(statearr_17830[(7)] = inst_17772__$1);

return statearr_17830;
})();
if(inst_17772__$1){
var statearr_17831_17860 = state_17806__$1;
(statearr_17831_17860[(1)] = (14));

} else {
var statearr_17832_17861 = state_17806__$1;
(statearr_17832_17861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (9))){
var inst_17794 = (state_17806[(2)]);
var inst_17795 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17806__$1 = (function (){var statearr_17833 = state_17806;
(statearr_17833[(15)] = inst_17794);

return statearr_17833;
})();
if(cljs.core.truth_(inst_17795)){
var statearr_17834_17862 = state_17806__$1;
(statearr_17834_17862[(1)] = (21));

} else {
var statearr_17835_17863 = state_17806__$1;
(statearr_17835_17863[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (5))){
var inst_17750 = cljs.core.async.close_BANG_.call(null,out);
var state_17806__$1 = state_17806;
var statearr_17836_17864 = state_17806__$1;
(statearr_17836_17864[(2)] = inst_17750);

(statearr_17836_17864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (14))){
var inst_17772 = (state_17806[(7)]);
var inst_17774 = cljs.core.chunked_seq_QMARK_.call(null,inst_17772);
var state_17806__$1 = state_17806;
if(inst_17774){
var statearr_17837_17865 = state_17806__$1;
(statearr_17837_17865[(1)] = (17));

} else {
var statearr_17838_17866 = state_17806__$1;
(statearr_17838_17866[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (16))){
var inst_17790 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17839_17867 = state_17806__$1;
(statearr_17839_17867[(2)] = inst_17790);

(statearr_17839_17867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (10))){
var inst_17761 = (state_17806[(8)]);
var inst_17759 = (state_17806[(12)]);
var inst_17766 = cljs.core._nth.call(null,inst_17759,inst_17761);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17806__$1,(13),out,inst_17766);
} else {
if((state_val_17807 === (18))){
var inst_17772 = (state_17806[(7)]);
var inst_17781 = cljs.core.first.call(null,inst_17772);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17806__$1,(20),out,inst_17781);
} else {
if((state_val_17807 === (8))){
var inst_17761 = (state_17806[(8)]);
var inst_17760 = (state_17806[(11)]);
var inst_17763 = (inst_17761 < inst_17760);
var inst_17764 = inst_17763;
var state_17806__$1 = state_17806;
if(cljs.core.truth_(inst_17764)){
var statearr_17840_17868 = state_17806__$1;
(statearr_17840_17868[(1)] = (10));

} else {
var statearr_17841_17869 = state_17806__$1;
(statearr_17841_17869[(1)] = (11));

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
});})(c__14326__auto__))
;
return ((function (switch__14167__auto__,c__14326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____0 = (function (){
var statearr_17842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17842[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__);

(statearr_17842[(1)] = (1));

return statearr_17842;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____1 = (function (state_17806){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17843){if((e17843 instanceof Object)){
var ex__14171__auto__ = e17843;
var statearr_17844_17870 = state_17806;
(statearr_17844_17870[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17871 = state_17806;
state_17806 = G__17871;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__ = function(state_17806){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____1.call(this,state_17806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14168__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto__))
})();
var state__14328__auto__ = (function (){var statearr_17845 = f__14327__auto__.call(null);
(statearr_17845[(6)] = c__14326__auto__);

return statearr_17845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto__))
);

return c__14326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17873 = arguments.length;
switch (G__17873) {
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
var G__17876 = arguments.length;
switch (G__17876) {
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
var G__17879 = arguments.length;
switch (G__17879) {
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
var c__14326__auto___17926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___17926,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___17926,out){
return (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (7))){
var inst_17898 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17905_17927 = state_17903__$1;
(statearr_17905_17927[(2)] = inst_17898);

(statearr_17905_17927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (1))){
var inst_17880 = null;
var state_17903__$1 = (function (){var statearr_17906 = state_17903;
(statearr_17906[(7)] = inst_17880);

return statearr_17906;
})();
var statearr_17907_17928 = state_17903__$1;
(statearr_17907_17928[(2)] = null);

(statearr_17907_17928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (4))){
var inst_17883 = (state_17903[(8)]);
var inst_17883__$1 = (state_17903[(2)]);
var inst_17884 = (inst_17883__$1 == null);
var inst_17885 = cljs.core.not.call(null,inst_17884);
var state_17903__$1 = (function (){var statearr_17908 = state_17903;
(statearr_17908[(8)] = inst_17883__$1);

return statearr_17908;
})();
if(inst_17885){
var statearr_17909_17929 = state_17903__$1;
(statearr_17909_17929[(1)] = (5));

} else {
var statearr_17910_17930 = state_17903__$1;
(statearr_17910_17930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (6))){
var state_17903__$1 = state_17903;
var statearr_17911_17931 = state_17903__$1;
(statearr_17911_17931[(2)] = null);

(statearr_17911_17931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (3))){
var inst_17900 = (state_17903[(2)]);
var inst_17901 = cljs.core.async.close_BANG_.call(null,out);
var state_17903__$1 = (function (){var statearr_17912 = state_17903;
(statearr_17912[(9)] = inst_17900);

return statearr_17912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17903__$1,inst_17901);
} else {
if((state_val_17904 === (2))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17903__$1,(4),ch);
} else {
if((state_val_17904 === (11))){
var inst_17883 = (state_17903[(8)]);
var inst_17892 = (state_17903[(2)]);
var inst_17880 = inst_17883;
var state_17903__$1 = (function (){var statearr_17913 = state_17903;
(statearr_17913[(7)] = inst_17880);

(statearr_17913[(10)] = inst_17892);

return statearr_17913;
})();
var statearr_17914_17932 = state_17903__$1;
(statearr_17914_17932[(2)] = null);

(statearr_17914_17932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (9))){
var inst_17883 = (state_17903[(8)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17903__$1,(11),out,inst_17883);
} else {
if((state_val_17904 === (5))){
var inst_17880 = (state_17903[(7)]);
var inst_17883 = (state_17903[(8)]);
var inst_17887 = cljs.core._EQ_.call(null,inst_17883,inst_17880);
var state_17903__$1 = state_17903;
if(inst_17887){
var statearr_17916_17933 = state_17903__$1;
(statearr_17916_17933[(1)] = (8));

} else {
var statearr_17917_17934 = state_17903__$1;
(statearr_17917_17934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (10))){
var inst_17895 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17918_17935 = state_17903__$1;
(statearr_17918_17935[(2)] = inst_17895);

(statearr_17918_17935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (8))){
var inst_17880 = (state_17903[(7)]);
var tmp17915 = inst_17880;
var inst_17880__$1 = tmp17915;
var state_17903__$1 = (function (){var statearr_17919 = state_17903;
(statearr_17919[(7)] = inst_17880__$1);

return statearr_17919;
})();
var statearr_17920_17936 = state_17903__$1;
(statearr_17920_17936[(2)] = null);

(statearr_17920_17936[(1)] = (2));


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
});})(c__14326__auto___17926,out))
;
return ((function (switch__14167__auto__,c__14326__auto___17926,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_17921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17921[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_17921[(1)] = (1));

return statearr_17921;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17903){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e17922){if((e17922 instanceof Object)){
var ex__14171__auto__ = e17922;
var statearr_17923_17937 = state_17903;
(statearr_17923_17937[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17938 = state_17903;
state_17903 = G__17938;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___17926,out))
})();
var state__14328__auto__ = (function (){var statearr_17924 = f__14327__auto__.call(null);
(statearr_17924[(6)] = c__14326__auto___17926);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___17926,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17940 = arguments.length;
switch (G__17940) {
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
var c__14326__auto___18006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___18006,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___18006,out){
return (function (state_17978){
var state_val_17979 = (state_17978[(1)]);
if((state_val_17979 === (7))){
var inst_17974 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17980_18007 = state_17978__$1;
(statearr_17980_18007[(2)] = inst_17974);

(statearr_17980_18007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (1))){
var inst_17941 = (new Array(n));
var inst_17942 = inst_17941;
var inst_17943 = (0);
var state_17978__$1 = (function (){var statearr_17981 = state_17978;
(statearr_17981[(7)] = inst_17943);

(statearr_17981[(8)] = inst_17942);

return statearr_17981;
})();
var statearr_17982_18008 = state_17978__$1;
(statearr_17982_18008[(2)] = null);

(statearr_17982_18008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (4))){
var inst_17946 = (state_17978[(9)]);
var inst_17946__$1 = (state_17978[(2)]);
var inst_17947 = (inst_17946__$1 == null);
var inst_17948 = cljs.core.not.call(null,inst_17947);
var state_17978__$1 = (function (){var statearr_17983 = state_17978;
(statearr_17983[(9)] = inst_17946__$1);

return statearr_17983;
})();
if(inst_17948){
var statearr_17984_18009 = state_17978__$1;
(statearr_17984_18009[(1)] = (5));

} else {
var statearr_17985_18010 = state_17978__$1;
(statearr_17985_18010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (15))){
var inst_17968 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17986_18011 = state_17978__$1;
(statearr_17986_18011[(2)] = inst_17968);

(statearr_17986_18011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (13))){
var state_17978__$1 = state_17978;
var statearr_17987_18012 = state_17978__$1;
(statearr_17987_18012[(2)] = null);

(statearr_17987_18012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (6))){
var inst_17943 = (state_17978[(7)]);
var inst_17964 = (inst_17943 > (0));
var state_17978__$1 = state_17978;
if(cljs.core.truth_(inst_17964)){
var statearr_17988_18013 = state_17978__$1;
(statearr_17988_18013[(1)] = (12));

} else {
var statearr_17989_18014 = state_17978__$1;
(statearr_17989_18014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (3))){
var inst_17976 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17978__$1,inst_17976);
} else {
if((state_val_17979 === (12))){
var inst_17942 = (state_17978[(8)]);
var inst_17966 = cljs.core.vec.call(null,inst_17942);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17978__$1,(15),out,inst_17966);
} else {
if((state_val_17979 === (2))){
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17978__$1,(4),ch);
} else {
if((state_val_17979 === (11))){
var inst_17958 = (state_17978[(2)]);
var inst_17959 = (new Array(n));
var inst_17942 = inst_17959;
var inst_17943 = (0);
var state_17978__$1 = (function (){var statearr_17990 = state_17978;
(statearr_17990[(10)] = inst_17958);

(statearr_17990[(7)] = inst_17943);

(statearr_17990[(8)] = inst_17942);

return statearr_17990;
})();
var statearr_17991_18015 = state_17978__$1;
(statearr_17991_18015[(2)] = null);

(statearr_17991_18015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (9))){
var inst_17942 = (state_17978[(8)]);
var inst_17956 = cljs.core.vec.call(null,inst_17942);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17978__$1,(11),out,inst_17956);
} else {
if((state_val_17979 === (5))){
var inst_17946 = (state_17978[(9)]);
var inst_17943 = (state_17978[(7)]);
var inst_17942 = (state_17978[(8)]);
var inst_17951 = (state_17978[(11)]);
var inst_17950 = (inst_17942[inst_17943] = inst_17946);
var inst_17951__$1 = (inst_17943 + (1));
var inst_17952 = (inst_17951__$1 < n);
var state_17978__$1 = (function (){var statearr_17992 = state_17978;
(statearr_17992[(12)] = inst_17950);

(statearr_17992[(11)] = inst_17951__$1);

return statearr_17992;
})();
if(cljs.core.truth_(inst_17952)){
var statearr_17993_18016 = state_17978__$1;
(statearr_17993_18016[(1)] = (8));

} else {
var statearr_17994_18017 = state_17978__$1;
(statearr_17994_18017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (14))){
var inst_17971 = (state_17978[(2)]);
var inst_17972 = cljs.core.async.close_BANG_.call(null,out);
var state_17978__$1 = (function (){var statearr_17996 = state_17978;
(statearr_17996[(13)] = inst_17971);

return statearr_17996;
})();
var statearr_17997_18018 = state_17978__$1;
(statearr_17997_18018[(2)] = inst_17972);

(statearr_17997_18018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (10))){
var inst_17962 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17998_18019 = state_17978__$1;
(statearr_17998_18019[(2)] = inst_17962);

(statearr_17998_18019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (8))){
var inst_17942 = (state_17978[(8)]);
var inst_17951 = (state_17978[(11)]);
var tmp17995 = inst_17942;
var inst_17942__$1 = tmp17995;
var inst_17943 = inst_17951;
var state_17978__$1 = (function (){var statearr_17999 = state_17978;
(statearr_17999[(7)] = inst_17943);

(statearr_17999[(8)] = inst_17942__$1);

return statearr_17999;
})();
var statearr_18000_18020 = state_17978__$1;
(statearr_18000_18020[(2)] = null);

(statearr_18000_18020[(1)] = (2));


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
});})(c__14326__auto___18006,out))
;
return ((function (switch__14167__auto__,c__14326__auto___18006,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_18001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18001[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_18001[(1)] = (1));

return statearr_18001;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_17978){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_17978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e18002){if((e18002 instanceof Object)){
var ex__14171__auto__ = e18002;
var statearr_18003_18021 = state_17978;
(statearr_18003_18021[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18022 = state_17978;
state_17978 = G__18022;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_17978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_17978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___18006,out))
})();
var state__14328__auto__ = (function (){var statearr_18004 = f__14327__auto__.call(null);
(statearr_18004[(6)] = c__14326__auto___18006);

return statearr_18004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___18006,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18024 = arguments.length;
switch (G__18024) {
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
var c__14326__auto___18094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14326__auto___18094,out){
return (function (){
var f__14327__auto__ = (function (){var switch__14167__auto__ = ((function (c__14326__auto___18094,out){
return (function (state_18066){
var state_val_18067 = (state_18066[(1)]);
if((state_val_18067 === (7))){
var inst_18062 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
var statearr_18068_18095 = state_18066__$1;
(statearr_18068_18095[(2)] = inst_18062);

(statearr_18068_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (1))){
var inst_18025 = [];
var inst_18026 = inst_18025;
var inst_18027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18066__$1 = (function (){var statearr_18069 = state_18066;
(statearr_18069[(7)] = inst_18026);

(statearr_18069[(8)] = inst_18027);

return statearr_18069;
})();
var statearr_18070_18096 = state_18066__$1;
(statearr_18070_18096[(2)] = null);

(statearr_18070_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (4))){
var inst_18030 = (state_18066[(9)]);
var inst_18030__$1 = (state_18066[(2)]);
var inst_18031 = (inst_18030__$1 == null);
var inst_18032 = cljs.core.not.call(null,inst_18031);
var state_18066__$1 = (function (){var statearr_18071 = state_18066;
(statearr_18071[(9)] = inst_18030__$1);

return statearr_18071;
})();
if(inst_18032){
var statearr_18072_18097 = state_18066__$1;
(statearr_18072_18097[(1)] = (5));

} else {
var statearr_18073_18098 = state_18066__$1;
(statearr_18073_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (15))){
var inst_18056 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
var statearr_18074_18099 = state_18066__$1;
(statearr_18074_18099[(2)] = inst_18056);

(statearr_18074_18099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (13))){
var state_18066__$1 = state_18066;
var statearr_18075_18100 = state_18066__$1;
(statearr_18075_18100[(2)] = null);

(statearr_18075_18100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (6))){
var inst_18026 = (state_18066[(7)]);
var inst_18051 = inst_18026.length;
var inst_18052 = (inst_18051 > (0));
var state_18066__$1 = state_18066;
if(cljs.core.truth_(inst_18052)){
var statearr_18076_18101 = state_18066__$1;
(statearr_18076_18101[(1)] = (12));

} else {
var statearr_18077_18102 = state_18066__$1;
(statearr_18077_18102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (3))){
var inst_18064 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18066__$1,inst_18064);
} else {
if((state_val_18067 === (12))){
var inst_18026 = (state_18066[(7)]);
var inst_18054 = cljs.core.vec.call(null,inst_18026);
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18066__$1,(15),out,inst_18054);
} else {
if((state_val_18067 === (2))){
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18066__$1,(4),ch);
} else {
if((state_val_18067 === (11))){
var inst_18030 = (state_18066[(9)]);
var inst_18034 = (state_18066[(10)]);
var inst_18044 = (state_18066[(2)]);
var inst_18045 = [];
var inst_18046 = inst_18045.push(inst_18030);
var inst_18026 = inst_18045;
var inst_18027 = inst_18034;
var state_18066__$1 = (function (){var statearr_18078 = state_18066;
(statearr_18078[(7)] = inst_18026);

(statearr_18078[(11)] = inst_18044);

(statearr_18078[(8)] = inst_18027);

(statearr_18078[(12)] = inst_18046);

return statearr_18078;
})();
var statearr_18079_18103 = state_18066__$1;
(statearr_18079_18103[(2)] = null);

(statearr_18079_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (9))){
var inst_18026 = (state_18066[(7)]);
var inst_18042 = cljs.core.vec.call(null,inst_18026);
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18066__$1,(11),out,inst_18042);
} else {
if((state_val_18067 === (5))){
var inst_18030 = (state_18066[(9)]);
var inst_18027 = (state_18066[(8)]);
var inst_18034 = (state_18066[(10)]);
var inst_18034__$1 = f.call(null,inst_18030);
var inst_18035 = cljs.core._EQ_.call(null,inst_18034__$1,inst_18027);
var inst_18036 = cljs.core.keyword_identical_QMARK_.call(null,inst_18027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18037 = ((inst_18035) || (inst_18036));
var state_18066__$1 = (function (){var statearr_18080 = state_18066;
(statearr_18080[(10)] = inst_18034__$1);

return statearr_18080;
})();
if(cljs.core.truth_(inst_18037)){
var statearr_18081_18104 = state_18066__$1;
(statearr_18081_18104[(1)] = (8));

} else {
var statearr_18082_18105 = state_18066__$1;
(statearr_18082_18105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (14))){
var inst_18059 = (state_18066[(2)]);
var inst_18060 = cljs.core.async.close_BANG_.call(null,out);
var state_18066__$1 = (function (){var statearr_18084 = state_18066;
(statearr_18084[(13)] = inst_18059);

return statearr_18084;
})();
var statearr_18085_18106 = state_18066__$1;
(statearr_18085_18106[(2)] = inst_18060);

(statearr_18085_18106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (10))){
var inst_18049 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
var statearr_18086_18107 = state_18066__$1;
(statearr_18086_18107[(2)] = inst_18049);

(statearr_18086_18107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18067 === (8))){
var inst_18026 = (state_18066[(7)]);
var inst_18030 = (state_18066[(9)]);
var inst_18034 = (state_18066[(10)]);
var inst_18039 = inst_18026.push(inst_18030);
var tmp18083 = inst_18026;
var inst_18026__$1 = tmp18083;
var inst_18027 = inst_18034;
var state_18066__$1 = (function (){var statearr_18087 = state_18066;
(statearr_18087[(7)] = inst_18026__$1);

(statearr_18087[(14)] = inst_18039);

(statearr_18087[(8)] = inst_18027);

return statearr_18087;
})();
var statearr_18088_18108 = state_18066__$1;
(statearr_18088_18108[(2)] = null);

(statearr_18088_18108[(1)] = (2));


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
});})(c__14326__auto___18094,out))
;
return ((function (switch__14167__auto__,c__14326__auto___18094,out){
return (function() {
var cljs$core$async$state_machine__14168__auto__ = null;
var cljs$core$async$state_machine__14168__auto____0 = (function (){
var statearr_18089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18089[(0)] = cljs$core$async$state_machine__14168__auto__);

(statearr_18089[(1)] = (1));

return statearr_18089;
});
var cljs$core$async$state_machine__14168__auto____1 = (function (state_18066){
while(true){
var ret_value__14169__auto__ = (function (){try{while(true){
var result__14170__auto__ = switch__14167__auto__.call(null,state_18066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14170__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object)){
var ex__14171__auto__ = e18090;
var statearr_18091_18109 = state_18066;
(statearr_18091_18109[(5)] = ex__14171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18110 = state_18066;
state_18066 = G__18110;
continue;
} else {
return ret_value__14169__auto__;
}
break;
}
});
cljs$core$async$state_machine__14168__auto__ = function(state_18066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14168__auto____1.call(this,state_18066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14168__auto____0;
cljs$core$async$state_machine__14168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14168__auto____1;
return cljs$core$async$state_machine__14168__auto__;
})()
;})(switch__14167__auto__,c__14326__auto___18094,out))
})();
var state__14328__auto__ = (function (){var statearr_18092 = f__14327__auto__.call(null);
(statearr_18092[(6)] = c__14326__auto___18094);

return statearr_18092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14328__auto__);
});})(c__14326__auto___18094,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
