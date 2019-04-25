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
var G__8992 = arguments.length;
switch (G__8992) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8993 = (function (f,blockable,meta8994){
this.f = f;
this.blockable = blockable;
this.meta8994 = meta8994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8995,meta8994__$1){
var self__ = this;
var _8995__$1 = this;
return (new cljs.core.async.t_cljs$core$async8993(self__.f,self__.blockable,meta8994__$1));
});

cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8995){
var self__ = this;
var _8995__$1 = this;
return self__.meta8994;
});

cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8994","meta8994",-73327727,null)], null);
});

cljs.core.async.t_cljs$core$async8993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8993";

cljs.core.async.t_cljs$core$async8993.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8993");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8993.
 */
cljs.core.async.__GT_t_cljs$core$async8993 = (function cljs$core$async$__GT_t_cljs$core$async8993(f__$1,blockable__$1,meta8994){
return (new cljs.core.async.t_cljs$core$async8993(f__$1,blockable__$1,meta8994));
});

}

return (new cljs.core.async.t_cljs$core$async8993(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8999 = arguments.length;
switch (G__8999) {
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
var G__9002 = arguments.length;
switch (G__9002) {
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
var G__9005 = arguments.length;
switch (G__9005) {
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
var val_9007 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9007);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9007,ret){
return (function (){
return fn1.call(null,val_9007);
});})(val_9007,ret))
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
var G__9009 = arguments.length;
switch (G__9009) {
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
var n__4408__auto___9011 = n;
var x_9012 = (0);
while(true){
if((x_9012 < n__4408__auto___9011)){
(a[x_9012] = (0));

var G__9013 = (x_9012 + (1));
x_9012 = G__9013;
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

var G__9014 = (i + (1));
i = G__9014;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9015 = (function (flag,meta9016){
this.flag = flag;
this.meta9016 = meta9016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9017,meta9016__$1){
var self__ = this;
var _9017__$1 = this;
return (new cljs.core.async.t_cljs$core$async9015(self__.flag,meta9016__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9017){
var self__ = this;
var _9017__$1 = this;
return self__.meta9016;
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9016","meta9016",286059582,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9015";

cljs.core.async.t_cljs$core$async9015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9015");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9015.
 */
cljs.core.async.__GT_t_cljs$core$async9015 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9015(flag__$1,meta9016){
return (new cljs.core.async.t_cljs$core$async9015(flag__$1,meta9016));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9015(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9018 = (function (flag,cb,meta9019){
this.flag = flag;
this.cb = cb;
this.meta9019 = meta9019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9020,meta9019__$1){
var self__ = this;
var _9020__$1 = this;
return (new cljs.core.async.t_cljs$core$async9018(self__.flag,self__.cb,meta9019__$1));
});

cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9020){
var self__ = this;
var _9020__$1 = this;
return self__.meta9019;
});

cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9019","meta9019",-1428064480,null)], null);
});

cljs.core.async.t_cljs$core$async9018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9018";

cljs.core.async.t_cljs$core$async9018.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9018");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9018.
 */
cljs.core.async.__GT_t_cljs$core$async9018 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9018(flag__$1,cb__$1,meta9019){
return (new cljs.core.async.t_cljs$core$async9018(flag__$1,cb__$1,meta9019));
});

}

return (new cljs.core.async.t_cljs$core$async9018(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9021_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9021_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9022_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9022_SHARP_,port], null));
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
var G__9023 = (i + (1));
i = G__9023;
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
var len__4531__auto___9029 = arguments.length;
var i__4532__auto___9030 = (0);
while(true){
if((i__4532__auto___9030 < len__4531__auto___9029)){
args__4534__auto__.push((arguments[i__4532__auto___9030]));

var G__9031 = (i__4532__auto___9030 + (1));
i__4532__auto___9030 = G__9031;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9026){
var map__9027 = p__9026;
var map__9027__$1 = ((((!((map__9027 == null)))?(((((map__9027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9027):map__9027);
var opts = map__9027__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9024){
var G__9025 = cljs.core.first.call(null,seq9024);
var seq9024__$1 = cljs.core.next.call(null,seq9024);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9025,seq9024__$1);
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
var G__9033 = arguments.length;
switch (G__9033) {
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
var c__7068__auto___9079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9079){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9079){
return (function (state_9057){
var state_val_9058 = (state_9057[(1)]);
if((state_val_9058 === (7))){
var inst_9053 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9059_9080 = state_9057__$1;
(statearr_9059_9080[(2)] = inst_9053);

(statearr_9059_9080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (1))){
var state_9057__$1 = state_9057;
var statearr_9060_9081 = state_9057__$1;
(statearr_9060_9081[(2)] = null);

(statearr_9060_9081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (4))){
var inst_9036 = (state_9057[(7)]);
var inst_9036__$1 = (state_9057[(2)]);
var inst_9037 = (inst_9036__$1 == null);
var state_9057__$1 = (function (){var statearr_9061 = state_9057;
(statearr_9061[(7)] = inst_9036__$1);

return statearr_9061;
})();
if(cljs.core.truth_(inst_9037)){
var statearr_9062_9082 = state_9057__$1;
(statearr_9062_9082[(1)] = (5));

} else {
var statearr_9063_9083 = state_9057__$1;
(statearr_9063_9083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (13))){
var state_9057__$1 = state_9057;
var statearr_9064_9084 = state_9057__$1;
(statearr_9064_9084[(2)] = null);

(statearr_9064_9084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (6))){
var inst_9036 = (state_9057[(7)]);
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9057__$1,(11),to,inst_9036);
} else {
if((state_val_9058 === (3))){
var inst_9055 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9057__$1,inst_9055);
} else {
if((state_val_9058 === (12))){
var state_9057__$1 = state_9057;
var statearr_9065_9085 = state_9057__$1;
(statearr_9065_9085[(2)] = null);

(statearr_9065_9085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (2))){
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9057__$1,(4),from);
} else {
if((state_val_9058 === (11))){
var inst_9046 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
if(cljs.core.truth_(inst_9046)){
var statearr_9066_9086 = state_9057__$1;
(statearr_9066_9086[(1)] = (12));

} else {
var statearr_9067_9087 = state_9057__$1;
(statearr_9067_9087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (9))){
var state_9057__$1 = state_9057;
var statearr_9068_9088 = state_9057__$1;
(statearr_9068_9088[(2)] = null);

(statearr_9068_9088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (5))){
var state_9057__$1 = state_9057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9069_9089 = state_9057__$1;
(statearr_9069_9089[(1)] = (8));

} else {
var statearr_9070_9090 = state_9057__$1;
(statearr_9070_9090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (14))){
var inst_9051 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9071_9091 = state_9057__$1;
(statearr_9071_9091[(2)] = inst_9051);

(statearr_9071_9091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (10))){
var inst_9043 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9072_9092 = state_9057__$1;
(statearr_9072_9092[(2)] = inst_9043);

(statearr_9072_9092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (8))){
var inst_9040 = cljs.core.async.close_BANG_.call(null,to);
var state_9057__$1 = state_9057;
var statearr_9073_9093 = state_9057__$1;
(statearr_9073_9093[(2)] = inst_9040);

(statearr_9073_9093[(1)] = (10));


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
});})(c__7068__auto___9079))
;
return ((function (switch__6909__auto__,c__7068__auto___9079){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_9074 = [null,null,null,null,null,null,null,null];
(statearr_9074[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_9074[(1)] = (1));

return statearr_9074;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_9057){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9075){if((e9075 instanceof Object)){
var ex__6913__auto__ = e9075;
var statearr_9076_9094 = state_9057;
(statearr_9076_9094[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9095 = state_9057;
state_9057 = G__9095;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_9057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_9057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9079))
})();
var state__7070__auto__ = (function (){var statearr_9077 = f__7069__auto__.call(null);
(statearr_9077[(6)] = c__7068__auto___9079);

return statearr_9077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9079))
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
return (function (p__9096){
var vec__9097 = p__9096;
var v = cljs.core.nth.call(null,vec__9097,(0),null);
var p = cljs.core.nth.call(null,vec__9097,(1),null);
var job = vec__9097;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7068__auto___9268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results){
return (function (state_9104){
var state_val_9105 = (state_9104[(1)]);
if((state_val_9105 === (1))){
var state_9104__$1 = state_9104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9104__$1,(2),res,v);
} else {
if((state_val_9105 === (2))){
var inst_9101 = (state_9104[(2)]);
var inst_9102 = cljs.core.async.close_BANG_.call(null,res);
var state_9104__$1 = (function (){var statearr_9106 = state_9104;
(statearr_9106[(7)] = inst_9101);

return statearr_9106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9104__$1,inst_9102);
} else {
return null;
}
}
});})(c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results))
;
return ((function (switch__6909__auto__,c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_9107 = [null,null,null,null,null,null,null,null];
(statearr_9107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__);

(statearr_9107[(1)] = (1));

return statearr_9107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1 = (function (state_9104){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9108){if((e9108 instanceof Object)){
var ex__6913__auto__ = e9108;
var statearr_9109_9269 = state_9104;
(statearr_9109_9269[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9270 = state_9104;
state_9104 = G__9270;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = function(state_9104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1.call(this,state_9104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results))
})();
var state__7070__auto__ = (function (){var statearr_9110 = f__7069__auto__.call(null);
(statearr_9110[(6)] = c__7068__auto___9268);

return statearr_9110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9268,res,vec__9097,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9111){
var vec__9112 = p__9111;
var v = cljs.core.nth.call(null,vec__9112,(0),null);
var p = cljs.core.nth.call(null,vec__9112,(1),null);
var job = vec__9112;
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
var n__4408__auto___9271 = n;
var __9272 = (0);
while(true){
if((__9272 < n__4408__auto___9271)){
var G__9115_9273 = type;
var G__9115_9274__$1 = (((G__9115_9273 instanceof cljs.core.Keyword))?G__9115_9273.fqn:null);
switch (G__9115_9274__$1) {
case "compute":
var c__7068__auto___9276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9272,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (__9272,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function (state_9128){
var state_val_9129 = (state_9128[(1)]);
if((state_val_9129 === (1))){
var state_9128__$1 = state_9128;
var statearr_9130_9277 = state_9128__$1;
(statearr_9130_9277[(2)] = null);

(statearr_9130_9277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9129 === (2))){
var state_9128__$1 = state_9128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9128__$1,(4),jobs);
} else {
if((state_val_9129 === (3))){
var inst_9126 = (state_9128[(2)]);
var state_9128__$1 = state_9128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9128__$1,inst_9126);
} else {
if((state_val_9129 === (4))){
var inst_9118 = (state_9128[(2)]);
var inst_9119 = process.call(null,inst_9118);
var state_9128__$1 = state_9128;
if(cljs.core.truth_(inst_9119)){
var statearr_9131_9278 = state_9128__$1;
(statearr_9131_9278[(1)] = (5));

} else {
var statearr_9132_9279 = state_9128__$1;
(statearr_9132_9279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9129 === (5))){
var state_9128__$1 = state_9128;
var statearr_9133_9280 = state_9128__$1;
(statearr_9133_9280[(2)] = null);

(statearr_9133_9280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9129 === (6))){
var state_9128__$1 = state_9128;
var statearr_9134_9281 = state_9128__$1;
(statearr_9134_9281[(2)] = null);

(statearr_9134_9281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9129 === (7))){
var inst_9124 = (state_9128[(2)]);
var state_9128__$1 = state_9128;
var statearr_9135_9282 = state_9128__$1;
(statearr_9135_9282[(2)] = inst_9124);

(statearr_9135_9282[(1)] = (3));


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
});})(__9272,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
;
return ((function (__9272,switch__6909__auto__,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_9136 = [null,null,null,null,null,null,null];
(statearr_9136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__);

(statearr_9136[(1)] = (1));

return statearr_9136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1 = (function (state_9128){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9137){if((e9137 instanceof Object)){
var ex__6913__auto__ = e9137;
var statearr_9138_9283 = state_9128;
(statearr_9138_9283[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9284 = state_9128;
state_9128 = G__9284;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = function(state_9128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1.call(this,state_9128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__;
})()
;})(__9272,switch__6909__auto__,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
})();
var state__7070__auto__ = (function (){var statearr_9139 = f__7069__auto__.call(null);
(statearr_9139[(6)] = c__7068__auto___9276);

return statearr_9139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(__9272,c__7068__auto___9276,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
);


break;
case "async":
var c__7068__auto___9285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9272,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (__9272,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function (state_9152){
var state_val_9153 = (state_9152[(1)]);
if((state_val_9153 === (1))){
var state_9152__$1 = state_9152;
var statearr_9154_9286 = state_9152__$1;
(statearr_9154_9286[(2)] = null);

(statearr_9154_9286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9153 === (2))){
var state_9152__$1 = state_9152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9152__$1,(4),jobs);
} else {
if((state_val_9153 === (3))){
var inst_9150 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9152__$1,inst_9150);
} else {
if((state_val_9153 === (4))){
var inst_9142 = (state_9152[(2)]);
var inst_9143 = async.call(null,inst_9142);
var state_9152__$1 = state_9152;
if(cljs.core.truth_(inst_9143)){
var statearr_9155_9287 = state_9152__$1;
(statearr_9155_9287[(1)] = (5));

} else {
var statearr_9156_9288 = state_9152__$1;
(statearr_9156_9288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9153 === (5))){
var state_9152__$1 = state_9152;
var statearr_9157_9289 = state_9152__$1;
(statearr_9157_9289[(2)] = null);

(statearr_9157_9289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9153 === (6))){
var state_9152__$1 = state_9152;
var statearr_9158_9290 = state_9152__$1;
(statearr_9158_9290[(2)] = null);

(statearr_9158_9290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9153 === (7))){
var inst_9148 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9159_9291 = state_9152__$1;
(statearr_9159_9291[(2)] = inst_9148);

(statearr_9159_9291[(1)] = (3));


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
});})(__9272,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
;
return ((function (__9272,switch__6909__auto__,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_9160 = [null,null,null,null,null,null,null];
(statearr_9160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__);

(statearr_9160[(1)] = (1));

return statearr_9160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1 = (function (state_9152){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9161){if((e9161 instanceof Object)){
var ex__6913__auto__ = e9161;
var statearr_9162_9292 = state_9152;
(statearr_9162_9292[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9293 = state_9152;
state_9152 = G__9293;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = function(state_9152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1.call(this,state_9152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__;
})()
;})(__9272,switch__6909__auto__,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
})();
var state__7070__auto__ = (function (){var statearr_9163 = f__7069__auto__.call(null);
(statearr_9163[(6)] = c__7068__auto___9285);

return statearr_9163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(__9272,c__7068__auto___9285,G__9115_9273,G__9115_9274__$1,n__4408__auto___9271,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9115_9274__$1)].join('')));

}

var G__9294 = (__9272 + (1));
__9272 = G__9294;
continue;
} else {
}
break;
}

var c__7068__auto___9295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9295,jobs,results,process,async){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9295,jobs,results,process,async){
return (function (state_9185){
var state_val_9186 = (state_9185[(1)]);
if((state_val_9186 === (1))){
var state_9185__$1 = state_9185;
var statearr_9187_9296 = state_9185__$1;
(statearr_9187_9296[(2)] = null);

(statearr_9187_9296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9186 === (2))){
var state_9185__$1 = state_9185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9185__$1,(4),from);
} else {
if((state_val_9186 === (3))){
var inst_9183 = (state_9185[(2)]);
var state_9185__$1 = state_9185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9185__$1,inst_9183);
} else {
if((state_val_9186 === (4))){
var inst_9166 = (state_9185[(7)]);
var inst_9166__$1 = (state_9185[(2)]);
var inst_9167 = (inst_9166__$1 == null);
var state_9185__$1 = (function (){var statearr_9188 = state_9185;
(statearr_9188[(7)] = inst_9166__$1);

return statearr_9188;
})();
if(cljs.core.truth_(inst_9167)){
var statearr_9189_9297 = state_9185__$1;
(statearr_9189_9297[(1)] = (5));

} else {
var statearr_9190_9298 = state_9185__$1;
(statearr_9190_9298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9186 === (5))){
var inst_9169 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9185__$1 = state_9185;
var statearr_9191_9299 = state_9185__$1;
(statearr_9191_9299[(2)] = inst_9169);

(statearr_9191_9299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9186 === (6))){
var inst_9166 = (state_9185[(7)]);
var inst_9171 = (state_9185[(8)]);
var inst_9171__$1 = cljs.core.async.chan.call(null,(1));
var inst_9172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9173 = [inst_9166,inst_9171__$1];
var inst_9174 = (new cljs.core.PersistentVector(null,2,(5),inst_9172,inst_9173,null));
var state_9185__$1 = (function (){var statearr_9192 = state_9185;
(statearr_9192[(8)] = inst_9171__$1);

return statearr_9192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9185__$1,(8),jobs,inst_9174);
} else {
if((state_val_9186 === (7))){
var inst_9181 = (state_9185[(2)]);
var state_9185__$1 = state_9185;
var statearr_9193_9300 = state_9185__$1;
(statearr_9193_9300[(2)] = inst_9181);

(statearr_9193_9300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9186 === (8))){
var inst_9171 = (state_9185[(8)]);
var inst_9176 = (state_9185[(2)]);
var state_9185__$1 = (function (){var statearr_9194 = state_9185;
(statearr_9194[(9)] = inst_9176);

return statearr_9194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9185__$1,(9),results,inst_9171);
} else {
if((state_val_9186 === (9))){
var inst_9178 = (state_9185[(2)]);
var state_9185__$1 = (function (){var statearr_9195 = state_9185;
(statearr_9195[(10)] = inst_9178);

return statearr_9195;
})();
var statearr_9196_9301 = state_9185__$1;
(statearr_9196_9301[(2)] = null);

(statearr_9196_9301[(1)] = (2));


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
});})(c__7068__auto___9295,jobs,results,process,async))
;
return ((function (switch__6909__auto__,c__7068__auto___9295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_9197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__);

(statearr_9197[(1)] = (1));

return statearr_9197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1 = (function (state_9185){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9198){if((e9198 instanceof Object)){
var ex__6913__auto__ = e9198;
var statearr_9199_9302 = state_9185;
(statearr_9199_9302[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9303 = state_9185;
state_9185 = G__9303;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = function(state_9185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1.call(this,state_9185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9295,jobs,results,process,async))
})();
var state__7070__auto__ = (function (){var statearr_9200 = f__7069__auto__.call(null);
(statearr_9200[(6)] = c__7068__auto___9295);

return statearr_9200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9295,jobs,results,process,async))
);


var c__7068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto__,jobs,results,process,async){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto__,jobs,results,process,async){
return (function (state_9238){
var state_val_9239 = (state_9238[(1)]);
if((state_val_9239 === (7))){
var inst_9234 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9240_9304 = state_9238__$1;
(statearr_9240_9304[(2)] = inst_9234);

(statearr_9240_9304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (20))){
var state_9238__$1 = state_9238;
var statearr_9241_9305 = state_9238__$1;
(statearr_9241_9305[(2)] = null);

(statearr_9241_9305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (1))){
var state_9238__$1 = state_9238;
var statearr_9242_9306 = state_9238__$1;
(statearr_9242_9306[(2)] = null);

(statearr_9242_9306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (4))){
var inst_9203 = (state_9238[(7)]);
var inst_9203__$1 = (state_9238[(2)]);
var inst_9204 = (inst_9203__$1 == null);
var state_9238__$1 = (function (){var statearr_9243 = state_9238;
(statearr_9243[(7)] = inst_9203__$1);

return statearr_9243;
})();
if(cljs.core.truth_(inst_9204)){
var statearr_9244_9307 = state_9238__$1;
(statearr_9244_9307[(1)] = (5));

} else {
var statearr_9245_9308 = state_9238__$1;
(statearr_9245_9308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (15))){
var inst_9216 = (state_9238[(8)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9238__$1,(18),to,inst_9216);
} else {
if((state_val_9239 === (21))){
var inst_9229 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9246_9309 = state_9238__$1;
(statearr_9246_9309[(2)] = inst_9229);

(statearr_9246_9309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (13))){
var inst_9231 = (state_9238[(2)]);
var state_9238__$1 = (function (){var statearr_9247 = state_9238;
(statearr_9247[(9)] = inst_9231);

return statearr_9247;
})();
var statearr_9248_9310 = state_9238__$1;
(statearr_9248_9310[(2)] = null);

(statearr_9248_9310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (6))){
var inst_9203 = (state_9238[(7)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9238__$1,(11),inst_9203);
} else {
if((state_val_9239 === (17))){
var inst_9224 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
if(cljs.core.truth_(inst_9224)){
var statearr_9249_9311 = state_9238__$1;
(statearr_9249_9311[(1)] = (19));

} else {
var statearr_9250_9312 = state_9238__$1;
(statearr_9250_9312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (3))){
var inst_9236 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9238__$1,inst_9236);
} else {
if((state_val_9239 === (12))){
var inst_9213 = (state_9238[(10)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9238__$1,(14),inst_9213);
} else {
if((state_val_9239 === (2))){
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9238__$1,(4),results);
} else {
if((state_val_9239 === (19))){
var state_9238__$1 = state_9238;
var statearr_9251_9313 = state_9238__$1;
(statearr_9251_9313[(2)] = null);

(statearr_9251_9313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (11))){
var inst_9213 = (state_9238[(2)]);
var state_9238__$1 = (function (){var statearr_9252 = state_9238;
(statearr_9252[(10)] = inst_9213);

return statearr_9252;
})();
var statearr_9253_9314 = state_9238__$1;
(statearr_9253_9314[(2)] = null);

(statearr_9253_9314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (9))){
var state_9238__$1 = state_9238;
var statearr_9254_9315 = state_9238__$1;
(statearr_9254_9315[(2)] = null);

(statearr_9254_9315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (5))){
var state_9238__$1 = state_9238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9255_9316 = state_9238__$1;
(statearr_9255_9316[(1)] = (8));

} else {
var statearr_9256_9317 = state_9238__$1;
(statearr_9256_9317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (14))){
var inst_9218 = (state_9238[(11)]);
var inst_9216 = (state_9238[(8)]);
var inst_9216__$1 = (state_9238[(2)]);
var inst_9217 = (inst_9216__$1 == null);
var inst_9218__$1 = cljs.core.not.call(null,inst_9217);
var state_9238__$1 = (function (){var statearr_9257 = state_9238;
(statearr_9257[(11)] = inst_9218__$1);

(statearr_9257[(8)] = inst_9216__$1);

return statearr_9257;
})();
if(inst_9218__$1){
var statearr_9258_9318 = state_9238__$1;
(statearr_9258_9318[(1)] = (15));

} else {
var statearr_9259_9319 = state_9238__$1;
(statearr_9259_9319[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (16))){
var inst_9218 = (state_9238[(11)]);
var state_9238__$1 = state_9238;
var statearr_9260_9320 = state_9238__$1;
(statearr_9260_9320[(2)] = inst_9218);

(statearr_9260_9320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (10))){
var inst_9210 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9261_9321 = state_9238__$1;
(statearr_9261_9321[(2)] = inst_9210);

(statearr_9261_9321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (18))){
var inst_9221 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9262_9322 = state_9238__$1;
(statearr_9262_9322[(2)] = inst_9221);

(statearr_9262_9322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9239 === (8))){
var inst_9207 = cljs.core.async.close_BANG_.call(null,to);
var state_9238__$1 = state_9238;
var statearr_9263_9323 = state_9238__$1;
(statearr_9263_9323[(2)] = inst_9207);

(statearr_9263_9323[(1)] = (10));


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
});})(c__7068__auto__,jobs,results,process,async))
;
return ((function (switch__6909__auto__,c__7068__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_9264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__);

(statearr_9264[(1)] = (1));

return statearr_9264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1 = (function (state_9238){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9265){if((e9265 instanceof Object)){
var ex__6913__auto__ = e9265;
var statearr_9266_9324 = state_9238;
(statearr_9266_9324[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9325 = state_9238;
state_9238 = G__9325;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__ = function(state_9238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1.call(this,state_9238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto__,jobs,results,process,async))
})();
var state__7070__auto__ = (function (){var statearr_9267 = f__7069__auto__.call(null);
(statearr_9267[(6)] = c__7068__auto__);

return statearr_9267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto__,jobs,results,process,async))
);

return c__7068__auto__;
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
var G__9327 = arguments.length;
switch (G__9327) {
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
var G__9330 = arguments.length;
switch (G__9330) {
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
var G__9333 = arguments.length;
switch (G__9333) {
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
var c__7068__auto___9382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9382,tc,fc){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9382,tc,fc){
return (function (state_9359){
var state_val_9360 = (state_9359[(1)]);
if((state_val_9360 === (7))){
var inst_9355 = (state_9359[(2)]);
var state_9359__$1 = state_9359;
var statearr_9361_9383 = state_9359__$1;
(statearr_9361_9383[(2)] = inst_9355);

(statearr_9361_9383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (1))){
var state_9359__$1 = state_9359;
var statearr_9362_9384 = state_9359__$1;
(statearr_9362_9384[(2)] = null);

(statearr_9362_9384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (4))){
var inst_9336 = (state_9359[(7)]);
var inst_9336__$1 = (state_9359[(2)]);
var inst_9337 = (inst_9336__$1 == null);
var state_9359__$1 = (function (){var statearr_9363 = state_9359;
(statearr_9363[(7)] = inst_9336__$1);

return statearr_9363;
})();
if(cljs.core.truth_(inst_9337)){
var statearr_9364_9385 = state_9359__$1;
(statearr_9364_9385[(1)] = (5));

} else {
var statearr_9365_9386 = state_9359__$1;
(statearr_9365_9386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (13))){
var state_9359__$1 = state_9359;
var statearr_9366_9387 = state_9359__$1;
(statearr_9366_9387[(2)] = null);

(statearr_9366_9387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (6))){
var inst_9336 = (state_9359[(7)]);
var inst_9342 = p.call(null,inst_9336);
var state_9359__$1 = state_9359;
if(cljs.core.truth_(inst_9342)){
var statearr_9367_9388 = state_9359__$1;
(statearr_9367_9388[(1)] = (9));

} else {
var statearr_9368_9389 = state_9359__$1;
(statearr_9368_9389[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (3))){
var inst_9357 = (state_9359[(2)]);
var state_9359__$1 = state_9359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9359__$1,inst_9357);
} else {
if((state_val_9360 === (12))){
var state_9359__$1 = state_9359;
var statearr_9369_9390 = state_9359__$1;
(statearr_9369_9390[(2)] = null);

(statearr_9369_9390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (2))){
var state_9359__$1 = state_9359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9359__$1,(4),ch);
} else {
if((state_val_9360 === (11))){
var inst_9336 = (state_9359[(7)]);
var inst_9346 = (state_9359[(2)]);
var state_9359__$1 = state_9359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9359__$1,(8),inst_9346,inst_9336);
} else {
if((state_val_9360 === (9))){
var state_9359__$1 = state_9359;
var statearr_9370_9391 = state_9359__$1;
(statearr_9370_9391[(2)] = tc);

(statearr_9370_9391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (5))){
var inst_9339 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9340 = cljs.core.async.close_BANG_.call(null,fc);
var state_9359__$1 = (function (){var statearr_9371 = state_9359;
(statearr_9371[(8)] = inst_9339);

return statearr_9371;
})();
var statearr_9372_9392 = state_9359__$1;
(statearr_9372_9392[(2)] = inst_9340);

(statearr_9372_9392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (14))){
var inst_9353 = (state_9359[(2)]);
var state_9359__$1 = state_9359;
var statearr_9373_9393 = state_9359__$1;
(statearr_9373_9393[(2)] = inst_9353);

(statearr_9373_9393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (10))){
var state_9359__$1 = state_9359;
var statearr_9374_9394 = state_9359__$1;
(statearr_9374_9394[(2)] = fc);

(statearr_9374_9394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9360 === (8))){
var inst_9348 = (state_9359[(2)]);
var state_9359__$1 = state_9359;
if(cljs.core.truth_(inst_9348)){
var statearr_9375_9395 = state_9359__$1;
(statearr_9375_9395[(1)] = (12));

} else {
var statearr_9376_9396 = state_9359__$1;
(statearr_9376_9396[(1)] = (13));

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
});})(c__7068__auto___9382,tc,fc))
;
return ((function (switch__6909__auto__,c__7068__auto___9382,tc,fc){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_9377 = [null,null,null,null,null,null,null,null,null];
(statearr_9377[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_9377[(1)] = (1));

return statearr_9377;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_9359){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9378){if((e9378 instanceof Object)){
var ex__6913__auto__ = e9378;
var statearr_9379_9397 = state_9359;
(statearr_9379_9397[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9398 = state_9359;
state_9359 = G__9398;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_9359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_9359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9382,tc,fc))
})();
var state__7070__auto__ = (function (){var statearr_9380 = f__7069__auto__.call(null);
(statearr_9380[(6)] = c__7068__auto___9382);

return statearr_9380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9382,tc,fc))
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
var c__7068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto__){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto__){
return (function (state_9419){
var state_val_9420 = (state_9419[(1)]);
if((state_val_9420 === (7))){
var inst_9415 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
var statearr_9421_9439 = state_9419__$1;
(statearr_9421_9439[(2)] = inst_9415);

(statearr_9421_9439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (1))){
var inst_9399 = init;
var state_9419__$1 = (function (){var statearr_9422 = state_9419;
(statearr_9422[(7)] = inst_9399);

return statearr_9422;
})();
var statearr_9423_9440 = state_9419__$1;
(statearr_9423_9440[(2)] = null);

(statearr_9423_9440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (4))){
var inst_9402 = (state_9419[(8)]);
var inst_9402__$1 = (state_9419[(2)]);
var inst_9403 = (inst_9402__$1 == null);
var state_9419__$1 = (function (){var statearr_9424 = state_9419;
(statearr_9424[(8)] = inst_9402__$1);

return statearr_9424;
})();
if(cljs.core.truth_(inst_9403)){
var statearr_9425_9441 = state_9419__$1;
(statearr_9425_9441[(1)] = (5));

} else {
var statearr_9426_9442 = state_9419__$1;
(statearr_9426_9442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (6))){
var inst_9406 = (state_9419[(9)]);
var inst_9402 = (state_9419[(8)]);
var inst_9399 = (state_9419[(7)]);
var inst_9406__$1 = f.call(null,inst_9399,inst_9402);
var inst_9407 = cljs.core.reduced_QMARK_.call(null,inst_9406__$1);
var state_9419__$1 = (function (){var statearr_9427 = state_9419;
(statearr_9427[(9)] = inst_9406__$1);

return statearr_9427;
})();
if(inst_9407){
var statearr_9428_9443 = state_9419__$1;
(statearr_9428_9443[(1)] = (8));

} else {
var statearr_9429_9444 = state_9419__$1;
(statearr_9429_9444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (3))){
var inst_9417 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9419__$1,inst_9417);
} else {
if((state_val_9420 === (2))){
var state_9419__$1 = state_9419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9419__$1,(4),ch);
} else {
if((state_val_9420 === (9))){
var inst_9406 = (state_9419[(9)]);
var inst_9399 = inst_9406;
var state_9419__$1 = (function (){var statearr_9430 = state_9419;
(statearr_9430[(7)] = inst_9399);

return statearr_9430;
})();
var statearr_9431_9445 = state_9419__$1;
(statearr_9431_9445[(2)] = null);

(statearr_9431_9445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (5))){
var inst_9399 = (state_9419[(7)]);
var state_9419__$1 = state_9419;
var statearr_9432_9446 = state_9419__$1;
(statearr_9432_9446[(2)] = inst_9399);

(statearr_9432_9446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (10))){
var inst_9413 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
var statearr_9433_9447 = state_9419__$1;
(statearr_9433_9447[(2)] = inst_9413);

(statearr_9433_9447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (8))){
var inst_9406 = (state_9419[(9)]);
var inst_9409 = cljs.core.deref.call(null,inst_9406);
var state_9419__$1 = state_9419;
var statearr_9434_9448 = state_9419__$1;
(statearr_9434_9448[(2)] = inst_9409);

(statearr_9434_9448[(1)] = (10));


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
});})(c__7068__auto__))
;
return ((function (switch__6909__auto__,c__7068__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6910__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6910__auto____0 = (function (){
var statearr_9435 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9435[(0)] = cljs$core$async$reduce_$_state_machine__6910__auto__);

(statearr_9435[(1)] = (1));

return statearr_9435;
});
var cljs$core$async$reduce_$_state_machine__6910__auto____1 = (function (state_9419){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9436){if((e9436 instanceof Object)){
var ex__6913__auto__ = e9436;
var statearr_9437_9449 = state_9419;
(statearr_9437_9449[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9450 = state_9419;
state_9419 = G__9450;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6910__auto__ = function(state_9419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6910__auto____1.call(this,state_9419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6910__auto____0;
cljs$core$async$reduce_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6910__auto____1;
return cljs$core$async$reduce_$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto__))
})();
var state__7070__auto__ = (function (){var statearr_9438 = f__7069__auto__.call(null);
(statearr_9438[(6)] = c__7068__auto__);

return statearr_9438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto__))
);

return c__7068__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__7068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto__,f__$1){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto__,f__$1){
return (function (state_9456){
var state_val_9457 = (state_9456[(1)]);
if((state_val_9457 === (1))){
var inst_9451 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_9456__$1 = state_9456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9456__$1,(2),inst_9451);
} else {
if((state_val_9457 === (2))){
var inst_9453 = (state_9456[(2)]);
var inst_9454 = f__$1.call(null,inst_9453);
var state_9456__$1 = state_9456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9456__$1,inst_9454);
} else {
return null;
}
}
});})(c__7068__auto__,f__$1))
;
return ((function (switch__6909__auto__,c__7068__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6910__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6910__auto____0 = (function (){
var statearr_9458 = [null,null,null,null,null,null,null];
(statearr_9458[(0)] = cljs$core$async$transduce_$_state_machine__6910__auto__);

(statearr_9458[(1)] = (1));

return statearr_9458;
});
var cljs$core$async$transduce_$_state_machine__6910__auto____1 = (function (state_9456){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9459){if((e9459 instanceof Object)){
var ex__6913__auto__ = e9459;
var statearr_9460_9462 = state_9456;
(statearr_9460_9462[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9463 = state_9456;
state_9456 = G__9463;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6910__auto__ = function(state_9456){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6910__auto____1.call(this,state_9456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6910__auto____0;
cljs$core$async$transduce_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6910__auto____1;
return cljs$core$async$transduce_$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto__,f__$1))
})();
var state__7070__auto__ = (function (){var statearr_9461 = f__7069__auto__.call(null);
(statearr_9461[(6)] = c__7068__auto__);

return statearr_9461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto__,f__$1))
);

return c__7068__auto__;
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
var G__9465 = arguments.length;
switch (G__9465) {
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
var c__7068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto__){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto__){
return (function (state_9490){
var state_val_9491 = (state_9490[(1)]);
if((state_val_9491 === (7))){
var inst_9472 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9492_9513 = state_9490__$1;
(statearr_9492_9513[(2)] = inst_9472);

(statearr_9492_9513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (1))){
var inst_9466 = cljs.core.seq.call(null,coll);
var inst_9467 = inst_9466;
var state_9490__$1 = (function (){var statearr_9493 = state_9490;
(statearr_9493[(7)] = inst_9467);

return statearr_9493;
})();
var statearr_9494_9514 = state_9490__$1;
(statearr_9494_9514[(2)] = null);

(statearr_9494_9514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (4))){
var inst_9467 = (state_9490[(7)]);
var inst_9470 = cljs.core.first.call(null,inst_9467);
var state_9490__$1 = state_9490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9490__$1,(7),ch,inst_9470);
} else {
if((state_val_9491 === (13))){
var inst_9484 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9495_9515 = state_9490__$1;
(statearr_9495_9515[(2)] = inst_9484);

(statearr_9495_9515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (6))){
var inst_9475 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
if(cljs.core.truth_(inst_9475)){
var statearr_9496_9516 = state_9490__$1;
(statearr_9496_9516[(1)] = (8));

} else {
var statearr_9497_9517 = state_9490__$1;
(statearr_9497_9517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (3))){
var inst_9488 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9490__$1,inst_9488);
} else {
if((state_val_9491 === (12))){
var state_9490__$1 = state_9490;
var statearr_9498_9518 = state_9490__$1;
(statearr_9498_9518[(2)] = null);

(statearr_9498_9518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (2))){
var inst_9467 = (state_9490[(7)]);
var state_9490__$1 = state_9490;
if(cljs.core.truth_(inst_9467)){
var statearr_9499_9519 = state_9490__$1;
(statearr_9499_9519[(1)] = (4));

} else {
var statearr_9500_9520 = state_9490__$1;
(statearr_9500_9520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (11))){
var inst_9481 = cljs.core.async.close_BANG_.call(null,ch);
var state_9490__$1 = state_9490;
var statearr_9501_9521 = state_9490__$1;
(statearr_9501_9521[(2)] = inst_9481);

(statearr_9501_9521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (9))){
var state_9490__$1 = state_9490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9502_9522 = state_9490__$1;
(statearr_9502_9522[(1)] = (11));

} else {
var statearr_9503_9523 = state_9490__$1;
(statearr_9503_9523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (5))){
var inst_9467 = (state_9490[(7)]);
var state_9490__$1 = state_9490;
var statearr_9504_9524 = state_9490__$1;
(statearr_9504_9524[(2)] = inst_9467);

(statearr_9504_9524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (10))){
var inst_9486 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9505_9525 = state_9490__$1;
(statearr_9505_9525[(2)] = inst_9486);

(statearr_9505_9525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (8))){
var inst_9467 = (state_9490[(7)]);
var inst_9477 = cljs.core.next.call(null,inst_9467);
var inst_9467__$1 = inst_9477;
var state_9490__$1 = (function (){var statearr_9506 = state_9490;
(statearr_9506[(7)] = inst_9467__$1);

return statearr_9506;
})();
var statearr_9507_9526 = state_9490__$1;
(statearr_9507_9526[(2)] = null);

(statearr_9507_9526[(1)] = (2));


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
});})(c__7068__auto__))
;
return ((function (switch__6909__auto__,c__7068__auto__){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_9508 = [null,null,null,null,null,null,null,null];
(statearr_9508[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_9508[(1)] = (1));

return statearr_9508;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_9490){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9509){if((e9509 instanceof Object)){
var ex__6913__auto__ = e9509;
var statearr_9510_9527 = state_9490;
(statearr_9510_9527[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9528 = state_9490;
state_9490 = G__9528;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_9490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_9490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto__))
})();
var state__7070__auto__ = (function (){var statearr_9511 = f__7069__auto__.call(null);
(statearr_9511[(6)] = c__7068__auto__);

return statearr_9511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto__))
);

return c__7068__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9529 = (function (ch,cs,meta9530){
this.ch = ch;
this.cs = cs;
this.meta9530 = meta9530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9531,meta9530__$1){
var self__ = this;
var _9531__$1 = this;
return (new cljs.core.async.t_cljs$core$async9529(self__.ch,self__.cs,meta9530__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9531){
var self__ = this;
var _9531__$1 = this;
return self__.meta9530;
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9530","meta9530",257238442,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9529";

cljs.core.async.t_cljs$core$async9529.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9529");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9529.
 */
cljs.core.async.__GT_t_cljs$core$async9529 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9529(ch__$1,cs__$1,meta9530){
return (new cljs.core.async.t_cljs$core$async9529(ch__$1,cs__$1,meta9530));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9529(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7068__auto___9751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9751,cs,m,dchan,dctr,done){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9751,cs,m,dchan,dctr,done){
return (function (state_9666){
var state_val_9667 = (state_9666[(1)]);
if((state_val_9667 === (7))){
var inst_9662 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9668_9752 = state_9666__$1;
(statearr_9668_9752[(2)] = inst_9662);

(statearr_9668_9752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (20))){
var inst_9565 = (state_9666[(7)]);
var inst_9577 = cljs.core.first.call(null,inst_9565);
var inst_9578 = cljs.core.nth.call(null,inst_9577,(0),null);
var inst_9579 = cljs.core.nth.call(null,inst_9577,(1),null);
var state_9666__$1 = (function (){var statearr_9669 = state_9666;
(statearr_9669[(8)] = inst_9578);

return statearr_9669;
})();
if(cljs.core.truth_(inst_9579)){
var statearr_9670_9753 = state_9666__$1;
(statearr_9670_9753[(1)] = (22));

} else {
var statearr_9671_9754 = state_9666__$1;
(statearr_9671_9754[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (27))){
var inst_9607 = (state_9666[(9)]);
var inst_9534 = (state_9666[(10)]);
var inst_9609 = (state_9666[(11)]);
var inst_9614 = (state_9666[(12)]);
var inst_9614__$1 = cljs.core._nth.call(null,inst_9607,inst_9609);
var inst_9615 = cljs.core.async.put_BANG_.call(null,inst_9614__$1,inst_9534,done);
var state_9666__$1 = (function (){var statearr_9672 = state_9666;
(statearr_9672[(12)] = inst_9614__$1);

return statearr_9672;
})();
if(cljs.core.truth_(inst_9615)){
var statearr_9673_9755 = state_9666__$1;
(statearr_9673_9755[(1)] = (30));

} else {
var statearr_9674_9756 = state_9666__$1;
(statearr_9674_9756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (1))){
var state_9666__$1 = state_9666;
var statearr_9675_9757 = state_9666__$1;
(statearr_9675_9757[(2)] = null);

(statearr_9675_9757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (24))){
var inst_9565 = (state_9666[(7)]);
var inst_9584 = (state_9666[(2)]);
var inst_9585 = cljs.core.next.call(null,inst_9565);
var inst_9543 = inst_9585;
var inst_9544 = null;
var inst_9545 = (0);
var inst_9546 = (0);
var state_9666__$1 = (function (){var statearr_9676 = state_9666;
(statearr_9676[(13)] = inst_9545);

(statearr_9676[(14)] = inst_9546);

(statearr_9676[(15)] = inst_9543);

(statearr_9676[(16)] = inst_9544);

(statearr_9676[(17)] = inst_9584);

return statearr_9676;
})();
var statearr_9677_9758 = state_9666__$1;
(statearr_9677_9758[(2)] = null);

(statearr_9677_9758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (39))){
var state_9666__$1 = state_9666;
var statearr_9681_9759 = state_9666__$1;
(statearr_9681_9759[(2)] = null);

(statearr_9681_9759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (4))){
var inst_9534 = (state_9666[(10)]);
var inst_9534__$1 = (state_9666[(2)]);
var inst_9535 = (inst_9534__$1 == null);
var state_9666__$1 = (function (){var statearr_9682 = state_9666;
(statearr_9682[(10)] = inst_9534__$1);

return statearr_9682;
})();
if(cljs.core.truth_(inst_9535)){
var statearr_9683_9760 = state_9666__$1;
(statearr_9683_9760[(1)] = (5));

} else {
var statearr_9684_9761 = state_9666__$1;
(statearr_9684_9761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (15))){
var inst_9545 = (state_9666[(13)]);
var inst_9546 = (state_9666[(14)]);
var inst_9543 = (state_9666[(15)]);
var inst_9544 = (state_9666[(16)]);
var inst_9561 = (state_9666[(2)]);
var inst_9562 = (inst_9546 + (1));
var tmp9678 = inst_9545;
var tmp9679 = inst_9543;
var tmp9680 = inst_9544;
var inst_9543__$1 = tmp9679;
var inst_9544__$1 = tmp9680;
var inst_9545__$1 = tmp9678;
var inst_9546__$1 = inst_9562;
var state_9666__$1 = (function (){var statearr_9685 = state_9666;
(statearr_9685[(13)] = inst_9545__$1);

(statearr_9685[(14)] = inst_9546__$1);

(statearr_9685[(15)] = inst_9543__$1);

(statearr_9685[(16)] = inst_9544__$1);

(statearr_9685[(18)] = inst_9561);

return statearr_9685;
})();
var statearr_9686_9762 = state_9666__$1;
(statearr_9686_9762[(2)] = null);

(statearr_9686_9762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (21))){
var inst_9588 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9690_9763 = state_9666__$1;
(statearr_9690_9763[(2)] = inst_9588);

(statearr_9690_9763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (31))){
var inst_9614 = (state_9666[(12)]);
var inst_9618 = done.call(null,null);
var inst_9619 = cljs.core.async.untap_STAR_.call(null,m,inst_9614);
var state_9666__$1 = (function (){var statearr_9691 = state_9666;
(statearr_9691[(19)] = inst_9618);

return statearr_9691;
})();
var statearr_9692_9764 = state_9666__$1;
(statearr_9692_9764[(2)] = inst_9619);

(statearr_9692_9764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (32))){
var inst_9607 = (state_9666[(9)]);
var inst_9608 = (state_9666[(20)]);
var inst_9609 = (state_9666[(11)]);
var inst_9606 = (state_9666[(21)]);
var inst_9621 = (state_9666[(2)]);
var inst_9622 = (inst_9609 + (1));
var tmp9687 = inst_9607;
var tmp9688 = inst_9608;
var tmp9689 = inst_9606;
var inst_9606__$1 = tmp9689;
var inst_9607__$1 = tmp9687;
var inst_9608__$1 = tmp9688;
var inst_9609__$1 = inst_9622;
var state_9666__$1 = (function (){var statearr_9693 = state_9666;
(statearr_9693[(9)] = inst_9607__$1);

(statearr_9693[(22)] = inst_9621);

(statearr_9693[(20)] = inst_9608__$1);

(statearr_9693[(11)] = inst_9609__$1);

(statearr_9693[(21)] = inst_9606__$1);

return statearr_9693;
})();
var statearr_9694_9765 = state_9666__$1;
(statearr_9694_9765[(2)] = null);

(statearr_9694_9765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (40))){
var inst_9634 = (state_9666[(23)]);
var inst_9638 = done.call(null,null);
var inst_9639 = cljs.core.async.untap_STAR_.call(null,m,inst_9634);
var state_9666__$1 = (function (){var statearr_9695 = state_9666;
(statearr_9695[(24)] = inst_9638);

return statearr_9695;
})();
var statearr_9696_9766 = state_9666__$1;
(statearr_9696_9766[(2)] = inst_9639);

(statearr_9696_9766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (33))){
var inst_9625 = (state_9666[(25)]);
var inst_9627 = cljs.core.chunked_seq_QMARK_.call(null,inst_9625);
var state_9666__$1 = state_9666;
if(inst_9627){
var statearr_9697_9767 = state_9666__$1;
(statearr_9697_9767[(1)] = (36));

} else {
var statearr_9698_9768 = state_9666__$1;
(statearr_9698_9768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (13))){
var inst_9555 = (state_9666[(26)]);
var inst_9558 = cljs.core.async.close_BANG_.call(null,inst_9555);
var state_9666__$1 = state_9666;
var statearr_9699_9769 = state_9666__$1;
(statearr_9699_9769[(2)] = inst_9558);

(statearr_9699_9769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (22))){
var inst_9578 = (state_9666[(8)]);
var inst_9581 = cljs.core.async.close_BANG_.call(null,inst_9578);
var state_9666__$1 = state_9666;
var statearr_9700_9770 = state_9666__$1;
(statearr_9700_9770[(2)] = inst_9581);

(statearr_9700_9770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (36))){
var inst_9625 = (state_9666[(25)]);
var inst_9629 = cljs.core.chunk_first.call(null,inst_9625);
var inst_9630 = cljs.core.chunk_rest.call(null,inst_9625);
var inst_9631 = cljs.core.count.call(null,inst_9629);
var inst_9606 = inst_9630;
var inst_9607 = inst_9629;
var inst_9608 = inst_9631;
var inst_9609 = (0);
var state_9666__$1 = (function (){var statearr_9701 = state_9666;
(statearr_9701[(9)] = inst_9607);

(statearr_9701[(20)] = inst_9608);

(statearr_9701[(11)] = inst_9609);

(statearr_9701[(21)] = inst_9606);

return statearr_9701;
})();
var statearr_9702_9771 = state_9666__$1;
(statearr_9702_9771[(2)] = null);

(statearr_9702_9771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (41))){
var inst_9625 = (state_9666[(25)]);
var inst_9641 = (state_9666[(2)]);
var inst_9642 = cljs.core.next.call(null,inst_9625);
var inst_9606 = inst_9642;
var inst_9607 = null;
var inst_9608 = (0);
var inst_9609 = (0);
var state_9666__$1 = (function (){var statearr_9703 = state_9666;
(statearr_9703[(9)] = inst_9607);

(statearr_9703[(27)] = inst_9641);

(statearr_9703[(20)] = inst_9608);

(statearr_9703[(11)] = inst_9609);

(statearr_9703[(21)] = inst_9606);

return statearr_9703;
})();
var statearr_9704_9772 = state_9666__$1;
(statearr_9704_9772[(2)] = null);

(statearr_9704_9772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (43))){
var state_9666__$1 = state_9666;
var statearr_9705_9773 = state_9666__$1;
(statearr_9705_9773[(2)] = null);

(statearr_9705_9773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (29))){
var inst_9650 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9706_9774 = state_9666__$1;
(statearr_9706_9774[(2)] = inst_9650);

(statearr_9706_9774[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (44))){
var inst_9659 = (state_9666[(2)]);
var state_9666__$1 = (function (){var statearr_9707 = state_9666;
(statearr_9707[(28)] = inst_9659);

return statearr_9707;
})();
var statearr_9708_9775 = state_9666__$1;
(statearr_9708_9775[(2)] = null);

(statearr_9708_9775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (6))){
var inst_9598 = (state_9666[(29)]);
var inst_9597 = cljs.core.deref.call(null,cs);
var inst_9598__$1 = cljs.core.keys.call(null,inst_9597);
var inst_9599 = cljs.core.count.call(null,inst_9598__$1);
var inst_9600 = cljs.core.reset_BANG_.call(null,dctr,inst_9599);
var inst_9605 = cljs.core.seq.call(null,inst_9598__$1);
var inst_9606 = inst_9605;
var inst_9607 = null;
var inst_9608 = (0);
var inst_9609 = (0);
var state_9666__$1 = (function (){var statearr_9709 = state_9666;
(statearr_9709[(9)] = inst_9607);

(statearr_9709[(20)] = inst_9608);

(statearr_9709[(30)] = inst_9600);

(statearr_9709[(11)] = inst_9609);

(statearr_9709[(29)] = inst_9598__$1);

(statearr_9709[(21)] = inst_9606);

return statearr_9709;
})();
var statearr_9710_9776 = state_9666__$1;
(statearr_9710_9776[(2)] = null);

(statearr_9710_9776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (28))){
var inst_9625 = (state_9666[(25)]);
var inst_9606 = (state_9666[(21)]);
var inst_9625__$1 = cljs.core.seq.call(null,inst_9606);
var state_9666__$1 = (function (){var statearr_9711 = state_9666;
(statearr_9711[(25)] = inst_9625__$1);

return statearr_9711;
})();
if(inst_9625__$1){
var statearr_9712_9777 = state_9666__$1;
(statearr_9712_9777[(1)] = (33));

} else {
var statearr_9713_9778 = state_9666__$1;
(statearr_9713_9778[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (25))){
var inst_9608 = (state_9666[(20)]);
var inst_9609 = (state_9666[(11)]);
var inst_9611 = (inst_9609 < inst_9608);
var inst_9612 = inst_9611;
var state_9666__$1 = state_9666;
if(cljs.core.truth_(inst_9612)){
var statearr_9714_9779 = state_9666__$1;
(statearr_9714_9779[(1)] = (27));

} else {
var statearr_9715_9780 = state_9666__$1;
(statearr_9715_9780[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (34))){
var state_9666__$1 = state_9666;
var statearr_9716_9781 = state_9666__$1;
(statearr_9716_9781[(2)] = null);

(statearr_9716_9781[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (17))){
var state_9666__$1 = state_9666;
var statearr_9717_9782 = state_9666__$1;
(statearr_9717_9782[(2)] = null);

(statearr_9717_9782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (3))){
var inst_9664 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9666__$1,inst_9664);
} else {
if((state_val_9667 === (12))){
var inst_9593 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9718_9783 = state_9666__$1;
(statearr_9718_9783[(2)] = inst_9593);

(statearr_9718_9783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (2))){
var state_9666__$1 = state_9666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9666__$1,(4),ch);
} else {
if((state_val_9667 === (23))){
var state_9666__$1 = state_9666;
var statearr_9719_9784 = state_9666__$1;
(statearr_9719_9784[(2)] = null);

(statearr_9719_9784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (35))){
var inst_9648 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9720_9785 = state_9666__$1;
(statearr_9720_9785[(2)] = inst_9648);

(statearr_9720_9785[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (19))){
var inst_9565 = (state_9666[(7)]);
var inst_9569 = cljs.core.chunk_first.call(null,inst_9565);
var inst_9570 = cljs.core.chunk_rest.call(null,inst_9565);
var inst_9571 = cljs.core.count.call(null,inst_9569);
var inst_9543 = inst_9570;
var inst_9544 = inst_9569;
var inst_9545 = inst_9571;
var inst_9546 = (0);
var state_9666__$1 = (function (){var statearr_9721 = state_9666;
(statearr_9721[(13)] = inst_9545);

(statearr_9721[(14)] = inst_9546);

(statearr_9721[(15)] = inst_9543);

(statearr_9721[(16)] = inst_9544);

return statearr_9721;
})();
var statearr_9722_9786 = state_9666__$1;
(statearr_9722_9786[(2)] = null);

(statearr_9722_9786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (11))){
var inst_9565 = (state_9666[(7)]);
var inst_9543 = (state_9666[(15)]);
var inst_9565__$1 = cljs.core.seq.call(null,inst_9543);
var state_9666__$1 = (function (){var statearr_9723 = state_9666;
(statearr_9723[(7)] = inst_9565__$1);

return statearr_9723;
})();
if(inst_9565__$1){
var statearr_9724_9787 = state_9666__$1;
(statearr_9724_9787[(1)] = (16));

} else {
var statearr_9725_9788 = state_9666__$1;
(statearr_9725_9788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (9))){
var inst_9595 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9726_9789 = state_9666__$1;
(statearr_9726_9789[(2)] = inst_9595);

(statearr_9726_9789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (5))){
var inst_9541 = cljs.core.deref.call(null,cs);
var inst_9542 = cljs.core.seq.call(null,inst_9541);
var inst_9543 = inst_9542;
var inst_9544 = null;
var inst_9545 = (0);
var inst_9546 = (0);
var state_9666__$1 = (function (){var statearr_9727 = state_9666;
(statearr_9727[(13)] = inst_9545);

(statearr_9727[(14)] = inst_9546);

(statearr_9727[(15)] = inst_9543);

(statearr_9727[(16)] = inst_9544);

return statearr_9727;
})();
var statearr_9728_9790 = state_9666__$1;
(statearr_9728_9790[(2)] = null);

(statearr_9728_9790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (14))){
var state_9666__$1 = state_9666;
var statearr_9729_9791 = state_9666__$1;
(statearr_9729_9791[(2)] = null);

(statearr_9729_9791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (45))){
var inst_9656 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9730_9792 = state_9666__$1;
(statearr_9730_9792[(2)] = inst_9656);

(statearr_9730_9792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (26))){
var inst_9598 = (state_9666[(29)]);
var inst_9652 = (state_9666[(2)]);
var inst_9653 = cljs.core.seq.call(null,inst_9598);
var state_9666__$1 = (function (){var statearr_9731 = state_9666;
(statearr_9731[(31)] = inst_9652);

return statearr_9731;
})();
if(inst_9653){
var statearr_9732_9793 = state_9666__$1;
(statearr_9732_9793[(1)] = (42));

} else {
var statearr_9733_9794 = state_9666__$1;
(statearr_9733_9794[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (16))){
var inst_9565 = (state_9666[(7)]);
var inst_9567 = cljs.core.chunked_seq_QMARK_.call(null,inst_9565);
var state_9666__$1 = state_9666;
if(inst_9567){
var statearr_9734_9795 = state_9666__$1;
(statearr_9734_9795[(1)] = (19));

} else {
var statearr_9735_9796 = state_9666__$1;
(statearr_9735_9796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (38))){
var inst_9645 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9736_9797 = state_9666__$1;
(statearr_9736_9797[(2)] = inst_9645);

(statearr_9736_9797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (30))){
var state_9666__$1 = state_9666;
var statearr_9737_9798 = state_9666__$1;
(statearr_9737_9798[(2)] = null);

(statearr_9737_9798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (10))){
var inst_9546 = (state_9666[(14)]);
var inst_9544 = (state_9666[(16)]);
var inst_9554 = cljs.core._nth.call(null,inst_9544,inst_9546);
var inst_9555 = cljs.core.nth.call(null,inst_9554,(0),null);
var inst_9556 = cljs.core.nth.call(null,inst_9554,(1),null);
var state_9666__$1 = (function (){var statearr_9738 = state_9666;
(statearr_9738[(26)] = inst_9555);

return statearr_9738;
})();
if(cljs.core.truth_(inst_9556)){
var statearr_9739_9799 = state_9666__$1;
(statearr_9739_9799[(1)] = (13));

} else {
var statearr_9740_9800 = state_9666__$1;
(statearr_9740_9800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (18))){
var inst_9591 = (state_9666[(2)]);
var state_9666__$1 = state_9666;
var statearr_9741_9801 = state_9666__$1;
(statearr_9741_9801[(2)] = inst_9591);

(statearr_9741_9801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (42))){
var state_9666__$1 = state_9666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9666__$1,(45),dchan);
} else {
if((state_val_9667 === (37))){
var inst_9534 = (state_9666[(10)]);
var inst_9625 = (state_9666[(25)]);
var inst_9634 = (state_9666[(23)]);
var inst_9634__$1 = cljs.core.first.call(null,inst_9625);
var inst_9635 = cljs.core.async.put_BANG_.call(null,inst_9634__$1,inst_9534,done);
var state_9666__$1 = (function (){var statearr_9742 = state_9666;
(statearr_9742[(23)] = inst_9634__$1);

return statearr_9742;
})();
if(cljs.core.truth_(inst_9635)){
var statearr_9743_9802 = state_9666__$1;
(statearr_9743_9802[(1)] = (39));

} else {
var statearr_9744_9803 = state_9666__$1;
(statearr_9744_9803[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9667 === (8))){
var inst_9545 = (state_9666[(13)]);
var inst_9546 = (state_9666[(14)]);
var inst_9548 = (inst_9546 < inst_9545);
var inst_9549 = inst_9548;
var state_9666__$1 = state_9666;
if(cljs.core.truth_(inst_9549)){
var statearr_9745_9804 = state_9666__$1;
(statearr_9745_9804[(1)] = (10));

} else {
var statearr_9746_9805 = state_9666__$1;
(statearr_9746_9805[(1)] = (11));

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
});})(c__7068__auto___9751,cs,m,dchan,dctr,done))
;
return ((function (switch__6909__auto__,c__7068__auto___9751,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6910__auto__ = null;
var cljs$core$async$mult_$_state_machine__6910__auto____0 = (function (){
var statearr_9747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9747[(0)] = cljs$core$async$mult_$_state_machine__6910__auto__);

(statearr_9747[(1)] = (1));

return statearr_9747;
});
var cljs$core$async$mult_$_state_machine__6910__auto____1 = (function (state_9666){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9748){if((e9748 instanceof Object)){
var ex__6913__auto__ = e9748;
var statearr_9749_9806 = state_9666;
(statearr_9749_9806[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9807 = state_9666;
state_9666 = G__9807;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6910__auto__ = function(state_9666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6910__auto____1.call(this,state_9666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6910__auto____0;
cljs$core$async$mult_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6910__auto____1;
return cljs$core$async$mult_$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9751,cs,m,dchan,dctr,done))
})();
var state__7070__auto__ = (function (){var statearr_9750 = f__7069__auto__.call(null);
(statearr_9750[(6)] = c__7068__auto___9751);

return statearr_9750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9751,cs,m,dchan,dctr,done))
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
var G__9809 = arguments.length;
switch (G__9809) {
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
var len__4531__auto___9821 = arguments.length;
var i__4532__auto___9822 = (0);
while(true){
if((i__4532__auto___9822 < len__4531__auto___9821)){
args__4534__auto__.push((arguments[i__4532__auto___9822]));

var G__9823 = (i__4532__auto___9822 + (1));
i__4532__auto___9822 = G__9823;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9815){
var map__9816 = p__9815;
var map__9816__$1 = ((((!((map__9816 == null)))?(((((map__9816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9816):map__9816);
var opts = map__9816__$1;
var statearr_9818_9824 = state;
(statearr_9818_9824[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__9816,map__9816__$1,opts){
return (function (val){
var statearr_9819_9825 = state;
(statearr_9819_9825[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9816,map__9816__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_9820_9826 = state;
(statearr_9820_9826[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9811){
var G__9812 = cljs.core.first.call(null,seq9811);
var seq9811__$1 = cljs.core.next.call(null,seq9811);
var G__9813 = cljs.core.first.call(null,seq9811__$1);
var seq9811__$2 = cljs.core.next.call(null,seq9811__$1);
var G__9814 = cljs.core.first.call(null,seq9811__$2);
var seq9811__$3 = cljs.core.next.call(null,seq9811__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9812,G__9813,G__9814,seq9811__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9827 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta9828){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta9828 = meta9828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9829,meta9828__$1){
var self__ = this;
var _9829__$1 = this;
return (new cljs.core.async.t_cljs$core$async9827(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta9828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9829){
var self__ = this;
var _9829__$1 = this;
return self__.meta9828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9827.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta9828","meta9828",1746451489,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9827";

cljs.core.async.t_cljs$core$async9827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9827.
 */
cljs.core.async.__GT_t_cljs$core$async9827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9827(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9828){
return (new cljs.core.async.t_cljs$core$async9827(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9827(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7068__auto___9991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9931){
var state_val_9932 = (state_9931[(1)]);
if((state_val_9932 === (7))){
var inst_9846 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9933_9992 = state_9931__$1;
(statearr_9933_9992[(2)] = inst_9846);

(statearr_9933_9992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (20))){
var inst_9858 = (state_9931[(7)]);
var state_9931__$1 = state_9931;
var statearr_9934_9993 = state_9931__$1;
(statearr_9934_9993[(2)] = inst_9858);

(statearr_9934_9993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (27))){
var state_9931__$1 = state_9931;
var statearr_9935_9994 = state_9931__$1;
(statearr_9935_9994[(2)] = null);

(statearr_9935_9994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (1))){
var inst_9833 = (state_9931[(8)]);
var inst_9833__$1 = calc_state.call(null);
var inst_9835 = (inst_9833__$1 == null);
var inst_9836 = cljs.core.not.call(null,inst_9835);
var state_9931__$1 = (function (){var statearr_9936 = state_9931;
(statearr_9936[(8)] = inst_9833__$1);

return statearr_9936;
})();
if(inst_9836){
var statearr_9937_9995 = state_9931__$1;
(statearr_9937_9995[(1)] = (2));

} else {
var statearr_9938_9996 = state_9931__$1;
(statearr_9938_9996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (24))){
var inst_9882 = (state_9931[(9)]);
var inst_9891 = (state_9931[(10)]);
var inst_9905 = (state_9931[(11)]);
var inst_9905__$1 = inst_9882.call(null,inst_9891);
var state_9931__$1 = (function (){var statearr_9939 = state_9931;
(statearr_9939[(11)] = inst_9905__$1);

return statearr_9939;
})();
if(cljs.core.truth_(inst_9905__$1)){
var statearr_9940_9997 = state_9931__$1;
(statearr_9940_9997[(1)] = (29));

} else {
var statearr_9941_9998 = state_9931__$1;
(statearr_9941_9998[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (4))){
var inst_9849 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9849)){
var statearr_9942_9999 = state_9931__$1;
(statearr_9942_9999[(1)] = (8));

} else {
var statearr_9943_10000 = state_9931__$1;
(statearr_9943_10000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (15))){
var inst_9876 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9876)){
var statearr_9944_10001 = state_9931__$1;
(statearr_9944_10001[(1)] = (19));

} else {
var statearr_9945_10002 = state_9931__$1;
(statearr_9945_10002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (21))){
var inst_9881 = (state_9931[(12)]);
var inst_9881__$1 = (state_9931[(2)]);
var inst_9882 = cljs.core.get.call(null,inst_9881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9883 = cljs.core.get.call(null,inst_9881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9884 = cljs.core.get.call(null,inst_9881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9931__$1 = (function (){var statearr_9946 = state_9931;
(statearr_9946[(12)] = inst_9881__$1);

(statearr_9946[(13)] = inst_9883);

(statearr_9946[(9)] = inst_9882);

return statearr_9946;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9931__$1,(22),inst_9884);
} else {
if((state_val_9932 === (31))){
var inst_9913 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9913)){
var statearr_9947_10003 = state_9931__$1;
(statearr_9947_10003[(1)] = (32));

} else {
var statearr_9948_10004 = state_9931__$1;
(statearr_9948_10004[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (32))){
var inst_9890 = (state_9931[(14)]);
var state_9931__$1 = state_9931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9931__$1,(35),out,inst_9890);
} else {
if((state_val_9932 === (33))){
var inst_9881 = (state_9931[(12)]);
var inst_9858 = inst_9881;
var state_9931__$1 = (function (){var statearr_9949 = state_9931;
(statearr_9949[(7)] = inst_9858);

return statearr_9949;
})();
var statearr_9950_10005 = state_9931__$1;
(statearr_9950_10005[(2)] = null);

(statearr_9950_10005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (13))){
var inst_9858 = (state_9931[(7)]);
var inst_9865 = inst_9858.cljs$lang$protocol_mask$partition0$;
var inst_9866 = (inst_9865 & (64));
var inst_9867 = inst_9858.cljs$core$ISeq$;
var inst_9868 = (cljs.core.PROTOCOL_SENTINEL === inst_9867);
var inst_9869 = ((inst_9866) || (inst_9868));
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9869)){
var statearr_9951_10006 = state_9931__$1;
(statearr_9951_10006[(1)] = (16));

} else {
var statearr_9952_10007 = state_9931__$1;
(statearr_9952_10007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (22))){
var inst_9890 = (state_9931[(14)]);
var inst_9891 = (state_9931[(10)]);
var inst_9889 = (state_9931[(2)]);
var inst_9890__$1 = cljs.core.nth.call(null,inst_9889,(0),null);
var inst_9891__$1 = cljs.core.nth.call(null,inst_9889,(1),null);
var inst_9892 = (inst_9890__$1 == null);
var inst_9893 = cljs.core._EQ_.call(null,inst_9891__$1,change);
var inst_9894 = ((inst_9892) || (inst_9893));
var state_9931__$1 = (function (){var statearr_9953 = state_9931;
(statearr_9953[(14)] = inst_9890__$1);

(statearr_9953[(10)] = inst_9891__$1);

return statearr_9953;
})();
if(cljs.core.truth_(inst_9894)){
var statearr_9954_10008 = state_9931__$1;
(statearr_9954_10008[(1)] = (23));

} else {
var statearr_9955_10009 = state_9931__$1;
(statearr_9955_10009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (36))){
var inst_9881 = (state_9931[(12)]);
var inst_9858 = inst_9881;
var state_9931__$1 = (function (){var statearr_9956 = state_9931;
(statearr_9956[(7)] = inst_9858);

return statearr_9956;
})();
var statearr_9957_10010 = state_9931__$1;
(statearr_9957_10010[(2)] = null);

(statearr_9957_10010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (29))){
var inst_9905 = (state_9931[(11)]);
var state_9931__$1 = state_9931;
var statearr_9958_10011 = state_9931__$1;
(statearr_9958_10011[(2)] = inst_9905);

(statearr_9958_10011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (6))){
var state_9931__$1 = state_9931;
var statearr_9959_10012 = state_9931__$1;
(statearr_9959_10012[(2)] = false);

(statearr_9959_10012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (28))){
var inst_9901 = (state_9931[(2)]);
var inst_9902 = calc_state.call(null);
var inst_9858 = inst_9902;
var state_9931__$1 = (function (){var statearr_9960 = state_9931;
(statearr_9960[(15)] = inst_9901);

(statearr_9960[(7)] = inst_9858);

return statearr_9960;
})();
var statearr_9961_10013 = state_9931__$1;
(statearr_9961_10013[(2)] = null);

(statearr_9961_10013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (25))){
var inst_9927 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9962_10014 = state_9931__$1;
(statearr_9962_10014[(2)] = inst_9927);

(statearr_9962_10014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (34))){
var inst_9925 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9963_10015 = state_9931__$1;
(statearr_9963_10015[(2)] = inst_9925);

(statearr_9963_10015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (17))){
var state_9931__$1 = state_9931;
var statearr_9964_10016 = state_9931__$1;
(statearr_9964_10016[(2)] = false);

(statearr_9964_10016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (3))){
var state_9931__$1 = state_9931;
var statearr_9965_10017 = state_9931__$1;
(statearr_9965_10017[(2)] = false);

(statearr_9965_10017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (12))){
var inst_9929 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9931__$1,inst_9929);
} else {
if((state_val_9932 === (2))){
var inst_9833 = (state_9931[(8)]);
var inst_9838 = inst_9833.cljs$lang$protocol_mask$partition0$;
var inst_9839 = (inst_9838 & (64));
var inst_9840 = inst_9833.cljs$core$ISeq$;
var inst_9841 = (cljs.core.PROTOCOL_SENTINEL === inst_9840);
var inst_9842 = ((inst_9839) || (inst_9841));
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9842)){
var statearr_9966_10018 = state_9931__$1;
(statearr_9966_10018[(1)] = (5));

} else {
var statearr_9967_10019 = state_9931__$1;
(statearr_9967_10019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (23))){
var inst_9890 = (state_9931[(14)]);
var inst_9896 = (inst_9890 == null);
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9896)){
var statearr_9968_10020 = state_9931__$1;
(statearr_9968_10020[(1)] = (26));

} else {
var statearr_9969_10021 = state_9931__$1;
(statearr_9969_10021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (35))){
var inst_9916 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
if(cljs.core.truth_(inst_9916)){
var statearr_9970_10022 = state_9931__$1;
(statearr_9970_10022[(1)] = (36));

} else {
var statearr_9971_10023 = state_9931__$1;
(statearr_9971_10023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (19))){
var inst_9858 = (state_9931[(7)]);
var inst_9878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9858);
var state_9931__$1 = state_9931;
var statearr_9972_10024 = state_9931__$1;
(statearr_9972_10024[(2)] = inst_9878);

(statearr_9972_10024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (11))){
var inst_9858 = (state_9931[(7)]);
var inst_9862 = (inst_9858 == null);
var inst_9863 = cljs.core.not.call(null,inst_9862);
var state_9931__$1 = state_9931;
if(inst_9863){
var statearr_9973_10025 = state_9931__$1;
(statearr_9973_10025[(1)] = (13));

} else {
var statearr_9974_10026 = state_9931__$1;
(statearr_9974_10026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (9))){
var inst_9833 = (state_9931[(8)]);
var state_9931__$1 = state_9931;
var statearr_9975_10027 = state_9931__$1;
(statearr_9975_10027[(2)] = inst_9833);

(statearr_9975_10027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (5))){
var state_9931__$1 = state_9931;
var statearr_9976_10028 = state_9931__$1;
(statearr_9976_10028[(2)] = true);

(statearr_9976_10028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (14))){
var state_9931__$1 = state_9931;
var statearr_9977_10029 = state_9931__$1;
(statearr_9977_10029[(2)] = false);

(statearr_9977_10029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (26))){
var inst_9891 = (state_9931[(10)]);
var inst_9898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9891);
var state_9931__$1 = state_9931;
var statearr_9978_10030 = state_9931__$1;
(statearr_9978_10030[(2)] = inst_9898);

(statearr_9978_10030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (16))){
var state_9931__$1 = state_9931;
var statearr_9979_10031 = state_9931__$1;
(statearr_9979_10031[(2)] = true);

(statearr_9979_10031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (38))){
var inst_9921 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9980_10032 = state_9931__$1;
(statearr_9980_10032[(2)] = inst_9921);

(statearr_9980_10032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (30))){
var inst_9883 = (state_9931[(13)]);
var inst_9882 = (state_9931[(9)]);
var inst_9891 = (state_9931[(10)]);
var inst_9908 = cljs.core.empty_QMARK_.call(null,inst_9882);
var inst_9909 = inst_9883.call(null,inst_9891);
var inst_9910 = cljs.core.not.call(null,inst_9909);
var inst_9911 = ((inst_9908) && (inst_9910));
var state_9931__$1 = state_9931;
var statearr_9981_10033 = state_9931__$1;
(statearr_9981_10033[(2)] = inst_9911);

(statearr_9981_10033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (10))){
var inst_9833 = (state_9931[(8)]);
var inst_9854 = (state_9931[(2)]);
var inst_9855 = cljs.core.get.call(null,inst_9854,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9856 = cljs.core.get.call(null,inst_9854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9857 = cljs.core.get.call(null,inst_9854,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9858 = inst_9833;
var state_9931__$1 = (function (){var statearr_9982 = state_9931;
(statearr_9982[(16)] = inst_9856);

(statearr_9982[(17)] = inst_9857);

(statearr_9982[(18)] = inst_9855);

(statearr_9982[(7)] = inst_9858);

return statearr_9982;
})();
var statearr_9983_10034 = state_9931__$1;
(statearr_9983_10034[(2)] = null);

(statearr_9983_10034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (18))){
var inst_9873 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9984_10035 = state_9931__$1;
(statearr_9984_10035[(2)] = inst_9873);

(statearr_9984_10035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (37))){
var state_9931__$1 = state_9931;
var statearr_9985_10036 = state_9931__$1;
(statearr_9985_10036[(2)] = null);

(statearr_9985_10036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (8))){
var inst_9833 = (state_9931[(8)]);
var inst_9851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9833);
var state_9931__$1 = state_9931;
var statearr_9986_10037 = state_9931__$1;
(statearr_9986_10037[(2)] = inst_9851);

(statearr_9986_10037[(1)] = (10));


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
});})(c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6909__auto__,c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6910__auto__ = null;
var cljs$core$async$mix_$_state_machine__6910__auto____0 = (function (){
var statearr_9987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9987[(0)] = cljs$core$async$mix_$_state_machine__6910__auto__);

(statearr_9987[(1)] = (1));

return statearr_9987;
});
var cljs$core$async$mix_$_state_machine__6910__auto____1 = (function (state_9931){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_9931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e9988){if((e9988 instanceof Object)){
var ex__6913__auto__ = e9988;
var statearr_9989_10038 = state_9931;
(statearr_9989_10038[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10039 = state_9931;
state_9931 = G__10039;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6910__auto__ = function(state_9931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6910__auto____1.call(this,state_9931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6910__auto____0;
cljs$core$async$mix_$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6910__auto____1;
return cljs$core$async$mix_$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7070__auto__ = (function (){var statearr_9990 = f__7069__auto__.call(null);
(statearr_9990[(6)] = c__7068__auto___9991);

return statearr_9990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___9991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__10041 = arguments.length;
switch (G__10041) {
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
var G__10045 = arguments.length;
switch (G__10045) {
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
return (function (p1__10043_SHARP_){
if(cljs.core.truth_(p1__10043_SHARP_.call(null,topic))){
return p1__10043_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10043_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10046 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10047){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10047 = meta10047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10048,meta10047__$1){
var self__ = this;
var _10048__$1 = this;
return (new cljs.core.async.t_cljs$core$async10046(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10047__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10048){
var self__ = this;
var _10048__$1 = this;
return self__.meta10047;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10047","meta10047",-1192664656,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10046";

cljs.core.async.t_cljs$core$async10046.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10046");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10046.
 */
cljs.core.async.__GT_t_cljs$core$async10046 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10047){
return (new cljs.core.async.t_cljs$core$async10046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10047));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10046(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7068__auto___10166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10166,mults,ensure_mult,p){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10166,mults,ensure_mult,p){
return (function (state_10120){
var state_val_10121 = (state_10120[(1)]);
if((state_val_10121 === (7))){
var inst_10116 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10122_10167 = state_10120__$1;
(statearr_10122_10167[(2)] = inst_10116);

(statearr_10122_10167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (20))){
var state_10120__$1 = state_10120;
var statearr_10123_10168 = state_10120__$1;
(statearr_10123_10168[(2)] = null);

(statearr_10123_10168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (1))){
var state_10120__$1 = state_10120;
var statearr_10124_10169 = state_10120__$1;
(statearr_10124_10169[(2)] = null);

(statearr_10124_10169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (24))){
var inst_10099 = (state_10120[(7)]);
var inst_10108 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10099);
var state_10120__$1 = state_10120;
var statearr_10125_10170 = state_10120__$1;
(statearr_10125_10170[(2)] = inst_10108);

(statearr_10125_10170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (4))){
var inst_10051 = (state_10120[(8)]);
var inst_10051__$1 = (state_10120[(2)]);
var inst_10052 = (inst_10051__$1 == null);
var state_10120__$1 = (function (){var statearr_10126 = state_10120;
(statearr_10126[(8)] = inst_10051__$1);

return statearr_10126;
})();
if(cljs.core.truth_(inst_10052)){
var statearr_10127_10171 = state_10120__$1;
(statearr_10127_10171[(1)] = (5));

} else {
var statearr_10128_10172 = state_10120__$1;
(statearr_10128_10172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (15))){
var inst_10093 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10129_10173 = state_10120__$1;
(statearr_10129_10173[(2)] = inst_10093);

(statearr_10129_10173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (21))){
var inst_10113 = (state_10120[(2)]);
var state_10120__$1 = (function (){var statearr_10130 = state_10120;
(statearr_10130[(9)] = inst_10113);

return statearr_10130;
})();
var statearr_10131_10174 = state_10120__$1;
(statearr_10131_10174[(2)] = null);

(statearr_10131_10174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (13))){
var inst_10075 = (state_10120[(10)]);
var inst_10077 = cljs.core.chunked_seq_QMARK_.call(null,inst_10075);
var state_10120__$1 = state_10120;
if(inst_10077){
var statearr_10132_10175 = state_10120__$1;
(statearr_10132_10175[(1)] = (16));

} else {
var statearr_10133_10176 = state_10120__$1;
(statearr_10133_10176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (22))){
var inst_10105 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
if(cljs.core.truth_(inst_10105)){
var statearr_10134_10177 = state_10120__$1;
(statearr_10134_10177[(1)] = (23));

} else {
var statearr_10135_10178 = state_10120__$1;
(statearr_10135_10178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (6))){
var inst_10099 = (state_10120[(7)]);
var inst_10051 = (state_10120[(8)]);
var inst_10101 = (state_10120[(11)]);
var inst_10099__$1 = topic_fn.call(null,inst_10051);
var inst_10100 = cljs.core.deref.call(null,mults);
var inst_10101__$1 = cljs.core.get.call(null,inst_10100,inst_10099__$1);
var state_10120__$1 = (function (){var statearr_10136 = state_10120;
(statearr_10136[(7)] = inst_10099__$1);

(statearr_10136[(11)] = inst_10101__$1);

return statearr_10136;
})();
if(cljs.core.truth_(inst_10101__$1)){
var statearr_10137_10179 = state_10120__$1;
(statearr_10137_10179[(1)] = (19));

} else {
var statearr_10138_10180 = state_10120__$1;
(statearr_10138_10180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (25))){
var inst_10110 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10139_10181 = state_10120__$1;
(statearr_10139_10181[(2)] = inst_10110);

(statearr_10139_10181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (17))){
var inst_10075 = (state_10120[(10)]);
var inst_10084 = cljs.core.first.call(null,inst_10075);
var inst_10085 = cljs.core.async.muxch_STAR_.call(null,inst_10084);
var inst_10086 = cljs.core.async.close_BANG_.call(null,inst_10085);
var inst_10087 = cljs.core.next.call(null,inst_10075);
var inst_10061 = inst_10087;
var inst_10062 = null;
var inst_10063 = (0);
var inst_10064 = (0);
var state_10120__$1 = (function (){var statearr_10140 = state_10120;
(statearr_10140[(12)] = inst_10061);

(statearr_10140[(13)] = inst_10062);

(statearr_10140[(14)] = inst_10064);

(statearr_10140[(15)] = inst_10063);

(statearr_10140[(16)] = inst_10086);

return statearr_10140;
})();
var statearr_10141_10182 = state_10120__$1;
(statearr_10141_10182[(2)] = null);

(statearr_10141_10182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (3))){
var inst_10118 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10120__$1,inst_10118);
} else {
if((state_val_10121 === (12))){
var inst_10095 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10142_10183 = state_10120__$1;
(statearr_10142_10183[(2)] = inst_10095);

(statearr_10142_10183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (2))){
var state_10120__$1 = state_10120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10120__$1,(4),ch);
} else {
if((state_val_10121 === (23))){
var state_10120__$1 = state_10120;
var statearr_10143_10184 = state_10120__$1;
(statearr_10143_10184[(2)] = null);

(statearr_10143_10184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (19))){
var inst_10051 = (state_10120[(8)]);
var inst_10101 = (state_10120[(11)]);
var inst_10103 = cljs.core.async.muxch_STAR_.call(null,inst_10101);
var state_10120__$1 = state_10120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10120__$1,(22),inst_10103,inst_10051);
} else {
if((state_val_10121 === (11))){
var inst_10061 = (state_10120[(12)]);
var inst_10075 = (state_10120[(10)]);
var inst_10075__$1 = cljs.core.seq.call(null,inst_10061);
var state_10120__$1 = (function (){var statearr_10144 = state_10120;
(statearr_10144[(10)] = inst_10075__$1);

return statearr_10144;
})();
if(inst_10075__$1){
var statearr_10145_10185 = state_10120__$1;
(statearr_10145_10185[(1)] = (13));

} else {
var statearr_10146_10186 = state_10120__$1;
(statearr_10146_10186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (9))){
var inst_10097 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10147_10187 = state_10120__$1;
(statearr_10147_10187[(2)] = inst_10097);

(statearr_10147_10187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (5))){
var inst_10058 = cljs.core.deref.call(null,mults);
var inst_10059 = cljs.core.vals.call(null,inst_10058);
var inst_10060 = cljs.core.seq.call(null,inst_10059);
var inst_10061 = inst_10060;
var inst_10062 = null;
var inst_10063 = (0);
var inst_10064 = (0);
var state_10120__$1 = (function (){var statearr_10148 = state_10120;
(statearr_10148[(12)] = inst_10061);

(statearr_10148[(13)] = inst_10062);

(statearr_10148[(14)] = inst_10064);

(statearr_10148[(15)] = inst_10063);

return statearr_10148;
})();
var statearr_10149_10188 = state_10120__$1;
(statearr_10149_10188[(2)] = null);

(statearr_10149_10188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (14))){
var state_10120__$1 = state_10120;
var statearr_10153_10189 = state_10120__$1;
(statearr_10153_10189[(2)] = null);

(statearr_10153_10189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (16))){
var inst_10075 = (state_10120[(10)]);
var inst_10079 = cljs.core.chunk_first.call(null,inst_10075);
var inst_10080 = cljs.core.chunk_rest.call(null,inst_10075);
var inst_10081 = cljs.core.count.call(null,inst_10079);
var inst_10061 = inst_10080;
var inst_10062 = inst_10079;
var inst_10063 = inst_10081;
var inst_10064 = (0);
var state_10120__$1 = (function (){var statearr_10154 = state_10120;
(statearr_10154[(12)] = inst_10061);

(statearr_10154[(13)] = inst_10062);

(statearr_10154[(14)] = inst_10064);

(statearr_10154[(15)] = inst_10063);

return statearr_10154;
})();
var statearr_10155_10190 = state_10120__$1;
(statearr_10155_10190[(2)] = null);

(statearr_10155_10190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (10))){
var inst_10061 = (state_10120[(12)]);
var inst_10062 = (state_10120[(13)]);
var inst_10064 = (state_10120[(14)]);
var inst_10063 = (state_10120[(15)]);
var inst_10069 = cljs.core._nth.call(null,inst_10062,inst_10064);
var inst_10070 = cljs.core.async.muxch_STAR_.call(null,inst_10069);
var inst_10071 = cljs.core.async.close_BANG_.call(null,inst_10070);
var inst_10072 = (inst_10064 + (1));
var tmp10150 = inst_10061;
var tmp10151 = inst_10062;
var tmp10152 = inst_10063;
var inst_10061__$1 = tmp10150;
var inst_10062__$1 = tmp10151;
var inst_10063__$1 = tmp10152;
var inst_10064__$1 = inst_10072;
var state_10120__$1 = (function (){var statearr_10156 = state_10120;
(statearr_10156[(12)] = inst_10061__$1);

(statearr_10156[(17)] = inst_10071);

(statearr_10156[(13)] = inst_10062__$1);

(statearr_10156[(14)] = inst_10064__$1);

(statearr_10156[(15)] = inst_10063__$1);

return statearr_10156;
})();
var statearr_10157_10191 = state_10120__$1;
(statearr_10157_10191[(2)] = null);

(statearr_10157_10191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (18))){
var inst_10090 = (state_10120[(2)]);
var state_10120__$1 = state_10120;
var statearr_10158_10192 = state_10120__$1;
(statearr_10158_10192[(2)] = inst_10090);

(statearr_10158_10192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10121 === (8))){
var inst_10064 = (state_10120[(14)]);
var inst_10063 = (state_10120[(15)]);
var inst_10066 = (inst_10064 < inst_10063);
var inst_10067 = inst_10066;
var state_10120__$1 = state_10120;
if(cljs.core.truth_(inst_10067)){
var statearr_10159_10193 = state_10120__$1;
(statearr_10159_10193[(1)] = (10));

} else {
var statearr_10160_10194 = state_10120__$1;
(statearr_10160_10194[(1)] = (11));

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
});})(c__7068__auto___10166,mults,ensure_mult,p))
;
return ((function (switch__6909__auto__,c__7068__auto___10166,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10161[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10161[(1)] = (1));

return statearr_10161;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10120){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10162){if((e10162 instanceof Object)){
var ex__6913__auto__ = e10162;
var statearr_10163_10195 = state_10120;
(statearr_10163_10195[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10196 = state_10120;
state_10120 = G__10196;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10166,mults,ensure_mult,p))
})();
var state__7070__auto__ = (function (){var statearr_10164 = f__7069__auto__.call(null);
(statearr_10164[(6)] = c__7068__auto___10166);

return statearr_10164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10166,mults,ensure_mult,p))
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
var G__10198 = arguments.length;
switch (G__10198) {
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
var G__10201 = arguments.length;
switch (G__10201) {
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
var G__10204 = arguments.length;
switch (G__10204) {
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
var c__7068__auto___10271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10243){
var state_val_10244 = (state_10243[(1)]);
if((state_val_10244 === (7))){
var state_10243__$1 = state_10243;
var statearr_10245_10272 = state_10243__$1;
(statearr_10245_10272[(2)] = null);

(statearr_10245_10272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (1))){
var state_10243__$1 = state_10243;
var statearr_10246_10273 = state_10243__$1;
(statearr_10246_10273[(2)] = null);

(statearr_10246_10273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (4))){
var inst_10207 = (state_10243[(7)]);
var inst_10209 = (inst_10207 < cnt);
var state_10243__$1 = state_10243;
if(cljs.core.truth_(inst_10209)){
var statearr_10247_10274 = state_10243__$1;
(statearr_10247_10274[(1)] = (6));

} else {
var statearr_10248_10275 = state_10243__$1;
(statearr_10248_10275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (15))){
var inst_10239 = (state_10243[(2)]);
var state_10243__$1 = state_10243;
var statearr_10249_10276 = state_10243__$1;
(statearr_10249_10276[(2)] = inst_10239);

(statearr_10249_10276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (13))){
var inst_10232 = cljs.core.async.close_BANG_.call(null,out);
var state_10243__$1 = state_10243;
var statearr_10250_10277 = state_10243__$1;
(statearr_10250_10277[(2)] = inst_10232);

(statearr_10250_10277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (6))){
var state_10243__$1 = state_10243;
var statearr_10251_10278 = state_10243__$1;
(statearr_10251_10278[(2)] = null);

(statearr_10251_10278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (3))){
var inst_10241 = (state_10243[(2)]);
var state_10243__$1 = state_10243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10243__$1,inst_10241);
} else {
if((state_val_10244 === (12))){
var inst_10229 = (state_10243[(8)]);
var inst_10229__$1 = (state_10243[(2)]);
var inst_10230 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10229__$1);
var state_10243__$1 = (function (){var statearr_10252 = state_10243;
(statearr_10252[(8)] = inst_10229__$1);

return statearr_10252;
})();
if(cljs.core.truth_(inst_10230)){
var statearr_10253_10279 = state_10243__$1;
(statearr_10253_10279[(1)] = (13));

} else {
var statearr_10254_10280 = state_10243__$1;
(statearr_10254_10280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (2))){
var inst_10206 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10207 = (0);
var state_10243__$1 = (function (){var statearr_10255 = state_10243;
(statearr_10255[(7)] = inst_10207);

(statearr_10255[(9)] = inst_10206);

return statearr_10255;
})();
var statearr_10256_10281 = state_10243__$1;
(statearr_10256_10281[(2)] = null);

(statearr_10256_10281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (11))){
var inst_10207 = (state_10243[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10243,(10),Object,null,(9));
var inst_10216 = chs__$1.call(null,inst_10207);
var inst_10217 = done.call(null,inst_10207);
var inst_10218 = cljs.core.async.take_BANG_.call(null,inst_10216,inst_10217);
var state_10243__$1 = state_10243;
var statearr_10257_10282 = state_10243__$1;
(statearr_10257_10282[(2)] = inst_10218);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (9))){
var inst_10207 = (state_10243[(7)]);
var inst_10220 = (state_10243[(2)]);
var inst_10221 = (inst_10207 + (1));
var inst_10207__$1 = inst_10221;
var state_10243__$1 = (function (){var statearr_10258 = state_10243;
(statearr_10258[(7)] = inst_10207__$1);

(statearr_10258[(10)] = inst_10220);

return statearr_10258;
})();
var statearr_10259_10283 = state_10243__$1;
(statearr_10259_10283[(2)] = null);

(statearr_10259_10283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (5))){
var inst_10227 = (state_10243[(2)]);
var state_10243__$1 = (function (){var statearr_10260 = state_10243;
(statearr_10260[(11)] = inst_10227);

return statearr_10260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10243__$1,(12),dchan);
} else {
if((state_val_10244 === (14))){
var inst_10229 = (state_10243[(8)]);
var inst_10234 = cljs.core.apply.call(null,f,inst_10229);
var state_10243__$1 = state_10243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10243__$1,(16),out,inst_10234);
} else {
if((state_val_10244 === (16))){
var inst_10236 = (state_10243[(2)]);
var state_10243__$1 = (function (){var statearr_10261 = state_10243;
(statearr_10261[(12)] = inst_10236);

return statearr_10261;
})();
var statearr_10262_10284 = state_10243__$1;
(statearr_10262_10284[(2)] = null);

(statearr_10262_10284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (10))){
var inst_10211 = (state_10243[(2)]);
var inst_10212 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10243__$1 = (function (){var statearr_10263 = state_10243;
(statearr_10263[(13)] = inst_10211);

return statearr_10263;
})();
var statearr_10264_10285 = state_10243__$1;
(statearr_10264_10285[(2)] = inst_10212);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10244 === (8))){
var inst_10225 = (state_10243[(2)]);
var state_10243__$1 = state_10243;
var statearr_10265_10286 = state_10243__$1;
(statearr_10265_10286[(2)] = inst_10225);

(statearr_10265_10286[(1)] = (5));


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
});})(c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6909__auto__,c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10266[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10266[(1)] = (1));

return statearr_10266;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10243){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10267){if((e10267 instanceof Object)){
var ex__6913__auto__ = e10267;
var statearr_10268_10287 = state_10243;
(statearr_10268_10287[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10288 = state_10243;
state_10243 = G__10288;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7070__auto__ = (function (){var statearr_10269 = f__7069__auto__.call(null);
(statearr_10269[(6)] = c__7068__auto___10271);

return statearr_10269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10271,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10291 = arguments.length;
switch (G__10291) {
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
var c__7068__auto___10345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10345,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10345,out){
return (function (state_10323){
var state_val_10324 = (state_10323[(1)]);
if((state_val_10324 === (7))){
var inst_10303 = (state_10323[(7)]);
var inst_10302 = (state_10323[(8)]);
var inst_10302__$1 = (state_10323[(2)]);
var inst_10303__$1 = cljs.core.nth.call(null,inst_10302__$1,(0),null);
var inst_10304 = cljs.core.nth.call(null,inst_10302__$1,(1),null);
var inst_10305 = (inst_10303__$1 == null);
var state_10323__$1 = (function (){var statearr_10325 = state_10323;
(statearr_10325[(7)] = inst_10303__$1);

(statearr_10325[(8)] = inst_10302__$1);

(statearr_10325[(9)] = inst_10304);

return statearr_10325;
})();
if(cljs.core.truth_(inst_10305)){
var statearr_10326_10346 = state_10323__$1;
(statearr_10326_10346[(1)] = (8));

} else {
var statearr_10327_10347 = state_10323__$1;
(statearr_10327_10347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (1))){
var inst_10292 = cljs.core.vec.call(null,chs);
var inst_10293 = inst_10292;
var state_10323__$1 = (function (){var statearr_10328 = state_10323;
(statearr_10328[(10)] = inst_10293);

return statearr_10328;
})();
var statearr_10329_10348 = state_10323__$1;
(statearr_10329_10348[(2)] = null);

(statearr_10329_10348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (4))){
var inst_10293 = (state_10323[(10)]);
var state_10323__$1 = state_10323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10323__$1,(7),inst_10293);
} else {
if((state_val_10324 === (6))){
var inst_10319 = (state_10323[(2)]);
var state_10323__$1 = state_10323;
var statearr_10330_10349 = state_10323__$1;
(statearr_10330_10349[(2)] = inst_10319);

(statearr_10330_10349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (3))){
var inst_10321 = (state_10323[(2)]);
var state_10323__$1 = state_10323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10323__$1,inst_10321);
} else {
if((state_val_10324 === (2))){
var inst_10293 = (state_10323[(10)]);
var inst_10295 = cljs.core.count.call(null,inst_10293);
var inst_10296 = (inst_10295 > (0));
var state_10323__$1 = state_10323;
if(cljs.core.truth_(inst_10296)){
var statearr_10332_10350 = state_10323__$1;
(statearr_10332_10350[(1)] = (4));

} else {
var statearr_10333_10351 = state_10323__$1;
(statearr_10333_10351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (11))){
var inst_10293 = (state_10323[(10)]);
var inst_10312 = (state_10323[(2)]);
var tmp10331 = inst_10293;
var inst_10293__$1 = tmp10331;
var state_10323__$1 = (function (){var statearr_10334 = state_10323;
(statearr_10334[(10)] = inst_10293__$1);

(statearr_10334[(11)] = inst_10312);

return statearr_10334;
})();
var statearr_10335_10352 = state_10323__$1;
(statearr_10335_10352[(2)] = null);

(statearr_10335_10352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (9))){
var inst_10303 = (state_10323[(7)]);
var state_10323__$1 = state_10323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10323__$1,(11),out,inst_10303);
} else {
if((state_val_10324 === (5))){
var inst_10317 = cljs.core.async.close_BANG_.call(null,out);
var state_10323__$1 = state_10323;
var statearr_10336_10353 = state_10323__$1;
(statearr_10336_10353[(2)] = inst_10317);

(statearr_10336_10353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (10))){
var inst_10315 = (state_10323[(2)]);
var state_10323__$1 = state_10323;
var statearr_10337_10354 = state_10323__$1;
(statearr_10337_10354[(2)] = inst_10315);

(statearr_10337_10354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (8))){
var inst_10293 = (state_10323[(10)]);
var inst_10303 = (state_10323[(7)]);
var inst_10302 = (state_10323[(8)]);
var inst_10304 = (state_10323[(9)]);
var inst_10307 = (function (){var cs = inst_10293;
var vec__10298 = inst_10302;
var v = inst_10303;
var c = inst_10304;
return ((function (cs,vec__10298,v,c,inst_10293,inst_10303,inst_10302,inst_10304,state_val_10324,c__7068__auto___10345,out){
return (function (p1__10289_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10289_SHARP_);
});
;})(cs,vec__10298,v,c,inst_10293,inst_10303,inst_10302,inst_10304,state_val_10324,c__7068__auto___10345,out))
})();
var inst_10308 = cljs.core.filterv.call(null,inst_10307,inst_10293);
var inst_10293__$1 = inst_10308;
var state_10323__$1 = (function (){var statearr_10338 = state_10323;
(statearr_10338[(10)] = inst_10293__$1);

return statearr_10338;
})();
var statearr_10339_10355 = state_10323__$1;
(statearr_10339_10355[(2)] = null);

(statearr_10339_10355[(1)] = (2));


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
});})(c__7068__auto___10345,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10345,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10340[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10340[(1)] = (1));

return statearr_10340;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10323){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10341){if((e10341 instanceof Object)){
var ex__6913__auto__ = e10341;
var statearr_10342_10356 = state_10323;
(statearr_10342_10356[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10357 = state_10323;
state_10323 = G__10357;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10345,out))
})();
var state__7070__auto__ = (function (){var statearr_10343 = f__7069__auto__.call(null);
(statearr_10343[(6)] = c__7068__auto___10345);

return statearr_10343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10345,out))
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
var G__10359 = arguments.length;
switch (G__10359) {
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
var c__7068__auto___10404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10404,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10404,out){
return (function (state_10383){
var state_val_10384 = (state_10383[(1)]);
if((state_val_10384 === (7))){
var inst_10365 = (state_10383[(7)]);
var inst_10365__$1 = (state_10383[(2)]);
var inst_10366 = (inst_10365__$1 == null);
var inst_10367 = cljs.core.not.call(null,inst_10366);
var state_10383__$1 = (function (){var statearr_10385 = state_10383;
(statearr_10385[(7)] = inst_10365__$1);

return statearr_10385;
})();
if(inst_10367){
var statearr_10386_10405 = state_10383__$1;
(statearr_10386_10405[(1)] = (8));

} else {
var statearr_10387_10406 = state_10383__$1;
(statearr_10387_10406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (1))){
var inst_10360 = (0);
var state_10383__$1 = (function (){var statearr_10388 = state_10383;
(statearr_10388[(8)] = inst_10360);

return statearr_10388;
})();
var statearr_10389_10407 = state_10383__$1;
(statearr_10389_10407[(2)] = null);

(statearr_10389_10407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (4))){
var state_10383__$1 = state_10383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10383__$1,(7),ch);
} else {
if((state_val_10384 === (6))){
var inst_10378 = (state_10383[(2)]);
var state_10383__$1 = state_10383;
var statearr_10390_10408 = state_10383__$1;
(statearr_10390_10408[(2)] = inst_10378);

(statearr_10390_10408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (3))){
var inst_10380 = (state_10383[(2)]);
var inst_10381 = cljs.core.async.close_BANG_.call(null,out);
var state_10383__$1 = (function (){var statearr_10391 = state_10383;
(statearr_10391[(9)] = inst_10380);

return statearr_10391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10383__$1,inst_10381);
} else {
if((state_val_10384 === (2))){
var inst_10360 = (state_10383[(8)]);
var inst_10362 = (inst_10360 < n);
var state_10383__$1 = state_10383;
if(cljs.core.truth_(inst_10362)){
var statearr_10392_10409 = state_10383__$1;
(statearr_10392_10409[(1)] = (4));

} else {
var statearr_10393_10410 = state_10383__$1;
(statearr_10393_10410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (11))){
var inst_10360 = (state_10383[(8)]);
var inst_10370 = (state_10383[(2)]);
var inst_10371 = (inst_10360 + (1));
var inst_10360__$1 = inst_10371;
var state_10383__$1 = (function (){var statearr_10394 = state_10383;
(statearr_10394[(10)] = inst_10370);

(statearr_10394[(8)] = inst_10360__$1);

return statearr_10394;
})();
var statearr_10395_10411 = state_10383__$1;
(statearr_10395_10411[(2)] = null);

(statearr_10395_10411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (9))){
var state_10383__$1 = state_10383;
var statearr_10396_10412 = state_10383__$1;
(statearr_10396_10412[(2)] = null);

(statearr_10396_10412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (5))){
var state_10383__$1 = state_10383;
var statearr_10397_10413 = state_10383__$1;
(statearr_10397_10413[(2)] = null);

(statearr_10397_10413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (10))){
var inst_10375 = (state_10383[(2)]);
var state_10383__$1 = state_10383;
var statearr_10398_10414 = state_10383__$1;
(statearr_10398_10414[(2)] = inst_10375);

(statearr_10398_10414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (8))){
var inst_10365 = (state_10383[(7)]);
var state_10383__$1 = state_10383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10383__$1,(11),out,inst_10365);
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
});})(c__7068__auto___10404,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10404,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10399[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10399[(1)] = (1));

return statearr_10399;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10383){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10400){if((e10400 instanceof Object)){
var ex__6913__auto__ = e10400;
var statearr_10401_10415 = state_10383;
(statearr_10401_10415[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10416 = state_10383;
state_10383 = G__10416;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10404,out))
})();
var state__7070__auto__ = (function (){var statearr_10402 = f__7069__auto__.call(null);
(statearr_10402[(6)] = c__7068__auto___10404);

return statearr_10402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10404,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10418 = (function (f,ch,meta10419){
this.f = f;
this.ch = ch;
this.meta10419 = meta10419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10420,meta10419__$1){
var self__ = this;
var _10420__$1 = this;
return (new cljs.core.async.t_cljs$core$async10418(self__.f,self__.ch,meta10419__$1));
});

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10420){
var self__ = this;
var _10420__$1 = this;
return self__.meta10419;
});

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10421 = (function (f,ch,meta10419,_,fn1,meta10422){
this.f = f;
this.ch = ch;
this.meta10419 = meta10419;
this._ = _;
this.fn1 = fn1;
this.meta10422 = meta10422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10423,meta10422__$1){
var self__ = this;
var _10423__$1 = this;
return (new cljs.core.async.t_cljs$core$async10421(self__.f,self__.ch,self__.meta10419,self__._,self__.fn1,meta10422__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10423){
var self__ = this;
var _10423__$1 = this;
return self__.meta10422;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10417_SHARP_){
return f1.call(null,(((p1__10417_SHARP_ == null))?null:self__.f.call(null,p1__10417_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10419","meta10419",-1643486117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10418","cljs.core.async/t_cljs$core$async10418",1130894960,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10422","meta10422",-234731875,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10421";

cljs.core.async.t_cljs$core$async10421.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10421");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10421.
 */
cljs.core.async.__GT_t_cljs$core$async10421 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10421(f__$1,ch__$1,meta10419__$1,___$2,fn1__$1,meta10422){
return (new cljs.core.async.t_cljs$core$async10421(f__$1,ch__$1,meta10419__$1,___$2,fn1__$1,meta10422));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10421(self__.f,self__.ch,self__.meta10419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10419","meta10419",-1643486117,null)], null);
});

cljs.core.async.t_cljs$core$async10418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10418";

cljs.core.async.t_cljs$core$async10418.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10418");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10418.
 */
cljs.core.async.__GT_t_cljs$core$async10418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10418(f__$1,ch__$1,meta10419){
return (new cljs.core.async.t_cljs$core$async10418(f__$1,ch__$1,meta10419));
});

}

return (new cljs.core.async.t_cljs$core$async10418(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10424 = (function (f,ch,meta10425){
this.f = f;
this.ch = ch;
this.meta10425 = meta10425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10426,meta10425__$1){
var self__ = this;
var _10426__$1 = this;
return (new cljs.core.async.t_cljs$core$async10424(self__.f,self__.ch,meta10425__$1));
});

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10426){
var self__ = this;
var _10426__$1 = this;
return self__.meta10425;
});

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10425","meta10425",-343911981,null)], null);
});

cljs.core.async.t_cljs$core$async10424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10424";

cljs.core.async.t_cljs$core$async10424.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10424");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10424.
 */
cljs.core.async.__GT_t_cljs$core$async10424 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10424(f__$1,ch__$1,meta10425){
return (new cljs.core.async.t_cljs$core$async10424(f__$1,ch__$1,meta10425));
});

}

return (new cljs.core.async.t_cljs$core$async10424(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10427 = (function (p,ch,meta10428){
this.p = p;
this.ch = ch;
this.meta10428 = meta10428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10429,meta10428__$1){
var self__ = this;
var _10429__$1 = this;
return (new cljs.core.async.t_cljs$core$async10427(self__.p,self__.ch,meta10428__$1));
});

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10429){
var self__ = this;
var _10429__$1 = this;
return self__.meta10428;
});

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10428","meta10428",-1299175599,null)], null);
});

cljs.core.async.t_cljs$core$async10427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10427";

cljs.core.async.t_cljs$core$async10427.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10427");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10427.
 */
cljs.core.async.__GT_t_cljs$core$async10427 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10427(p__$1,ch__$1,meta10428){
return (new cljs.core.async.t_cljs$core$async10427(p__$1,ch__$1,meta10428));
});

}

return (new cljs.core.async.t_cljs$core$async10427(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10431 = arguments.length;
switch (G__10431) {
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
var c__7068__auto___10471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10471,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10471,out){
return (function (state_10452){
var state_val_10453 = (state_10452[(1)]);
if((state_val_10453 === (7))){
var inst_10448 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10454_10472 = state_10452__$1;
(statearr_10454_10472[(2)] = inst_10448);

(statearr_10454_10472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (1))){
var state_10452__$1 = state_10452;
var statearr_10455_10473 = state_10452__$1;
(statearr_10455_10473[(2)] = null);

(statearr_10455_10473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (4))){
var inst_10434 = (state_10452[(7)]);
var inst_10434__$1 = (state_10452[(2)]);
var inst_10435 = (inst_10434__$1 == null);
var state_10452__$1 = (function (){var statearr_10456 = state_10452;
(statearr_10456[(7)] = inst_10434__$1);

return statearr_10456;
})();
if(cljs.core.truth_(inst_10435)){
var statearr_10457_10474 = state_10452__$1;
(statearr_10457_10474[(1)] = (5));

} else {
var statearr_10458_10475 = state_10452__$1;
(statearr_10458_10475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (6))){
var inst_10434 = (state_10452[(7)]);
var inst_10439 = p.call(null,inst_10434);
var state_10452__$1 = state_10452;
if(cljs.core.truth_(inst_10439)){
var statearr_10459_10476 = state_10452__$1;
(statearr_10459_10476[(1)] = (8));

} else {
var statearr_10460_10477 = state_10452__$1;
(statearr_10460_10477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (3))){
var inst_10450 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10452__$1,inst_10450);
} else {
if((state_val_10453 === (2))){
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10452__$1,(4),ch);
} else {
if((state_val_10453 === (11))){
var inst_10442 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10461_10478 = state_10452__$1;
(statearr_10461_10478[(2)] = inst_10442);

(statearr_10461_10478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (9))){
var state_10452__$1 = state_10452;
var statearr_10462_10479 = state_10452__$1;
(statearr_10462_10479[(2)] = null);

(statearr_10462_10479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (5))){
var inst_10437 = cljs.core.async.close_BANG_.call(null,out);
var state_10452__$1 = state_10452;
var statearr_10463_10480 = state_10452__$1;
(statearr_10463_10480[(2)] = inst_10437);

(statearr_10463_10480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (10))){
var inst_10445 = (state_10452[(2)]);
var state_10452__$1 = (function (){var statearr_10464 = state_10452;
(statearr_10464[(8)] = inst_10445);

return statearr_10464;
})();
var statearr_10465_10481 = state_10452__$1;
(statearr_10465_10481[(2)] = null);

(statearr_10465_10481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (8))){
var inst_10434 = (state_10452[(7)]);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10452__$1,(11),out,inst_10434);
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
});})(c__7068__auto___10471,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10471,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10466 = [null,null,null,null,null,null,null,null,null];
(statearr_10466[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10466[(1)] = (1));

return statearr_10466;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10452){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10467){if((e10467 instanceof Object)){
var ex__6913__auto__ = e10467;
var statearr_10468_10482 = state_10452;
(statearr_10468_10482[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10483 = state_10452;
state_10452 = G__10483;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10471,out))
})();
var state__7070__auto__ = (function (){var statearr_10469 = f__7069__auto__.call(null);
(statearr_10469[(6)] = c__7068__auto___10471);

return statearr_10469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10471,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10485 = arguments.length;
switch (G__10485) {
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
var c__7068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto__){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto__){
return (function (state_10548){
var state_val_10549 = (state_10548[(1)]);
if((state_val_10549 === (7))){
var inst_10544 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
var statearr_10550_10588 = state_10548__$1;
(statearr_10550_10588[(2)] = inst_10544);

(statearr_10550_10588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (20))){
var inst_10514 = (state_10548[(7)]);
var inst_10525 = (state_10548[(2)]);
var inst_10526 = cljs.core.next.call(null,inst_10514);
var inst_10500 = inst_10526;
var inst_10501 = null;
var inst_10502 = (0);
var inst_10503 = (0);
var state_10548__$1 = (function (){var statearr_10551 = state_10548;
(statearr_10551[(8)] = inst_10500);

(statearr_10551[(9)] = inst_10525);

(statearr_10551[(10)] = inst_10503);

(statearr_10551[(11)] = inst_10501);

(statearr_10551[(12)] = inst_10502);

return statearr_10551;
})();
var statearr_10552_10589 = state_10548__$1;
(statearr_10552_10589[(2)] = null);

(statearr_10552_10589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (1))){
var state_10548__$1 = state_10548;
var statearr_10553_10590 = state_10548__$1;
(statearr_10553_10590[(2)] = null);

(statearr_10553_10590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (4))){
var inst_10489 = (state_10548[(13)]);
var inst_10489__$1 = (state_10548[(2)]);
var inst_10490 = (inst_10489__$1 == null);
var state_10548__$1 = (function (){var statearr_10554 = state_10548;
(statearr_10554[(13)] = inst_10489__$1);

return statearr_10554;
})();
if(cljs.core.truth_(inst_10490)){
var statearr_10555_10591 = state_10548__$1;
(statearr_10555_10591[(1)] = (5));

} else {
var statearr_10556_10592 = state_10548__$1;
(statearr_10556_10592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (15))){
var state_10548__$1 = state_10548;
var statearr_10560_10593 = state_10548__$1;
(statearr_10560_10593[(2)] = null);

(statearr_10560_10593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (21))){
var state_10548__$1 = state_10548;
var statearr_10561_10594 = state_10548__$1;
(statearr_10561_10594[(2)] = null);

(statearr_10561_10594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (13))){
var inst_10500 = (state_10548[(8)]);
var inst_10503 = (state_10548[(10)]);
var inst_10501 = (state_10548[(11)]);
var inst_10502 = (state_10548[(12)]);
var inst_10510 = (state_10548[(2)]);
var inst_10511 = (inst_10503 + (1));
var tmp10557 = inst_10500;
var tmp10558 = inst_10501;
var tmp10559 = inst_10502;
var inst_10500__$1 = tmp10557;
var inst_10501__$1 = tmp10558;
var inst_10502__$1 = tmp10559;
var inst_10503__$1 = inst_10511;
var state_10548__$1 = (function (){var statearr_10562 = state_10548;
(statearr_10562[(8)] = inst_10500__$1);

(statearr_10562[(14)] = inst_10510);

(statearr_10562[(10)] = inst_10503__$1);

(statearr_10562[(11)] = inst_10501__$1);

(statearr_10562[(12)] = inst_10502__$1);

return statearr_10562;
})();
var statearr_10563_10595 = state_10548__$1;
(statearr_10563_10595[(2)] = null);

(statearr_10563_10595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (22))){
var state_10548__$1 = state_10548;
var statearr_10564_10596 = state_10548__$1;
(statearr_10564_10596[(2)] = null);

(statearr_10564_10596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (6))){
var inst_10489 = (state_10548[(13)]);
var inst_10498 = f.call(null,inst_10489);
var inst_10499 = cljs.core.seq.call(null,inst_10498);
var inst_10500 = inst_10499;
var inst_10501 = null;
var inst_10502 = (0);
var inst_10503 = (0);
var state_10548__$1 = (function (){var statearr_10565 = state_10548;
(statearr_10565[(8)] = inst_10500);

(statearr_10565[(10)] = inst_10503);

(statearr_10565[(11)] = inst_10501);

(statearr_10565[(12)] = inst_10502);

return statearr_10565;
})();
var statearr_10566_10597 = state_10548__$1;
(statearr_10566_10597[(2)] = null);

(statearr_10566_10597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (17))){
var inst_10514 = (state_10548[(7)]);
var inst_10518 = cljs.core.chunk_first.call(null,inst_10514);
var inst_10519 = cljs.core.chunk_rest.call(null,inst_10514);
var inst_10520 = cljs.core.count.call(null,inst_10518);
var inst_10500 = inst_10519;
var inst_10501 = inst_10518;
var inst_10502 = inst_10520;
var inst_10503 = (0);
var state_10548__$1 = (function (){var statearr_10567 = state_10548;
(statearr_10567[(8)] = inst_10500);

(statearr_10567[(10)] = inst_10503);

(statearr_10567[(11)] = inst_10501);

(statearr_10567[(12)] = inst_10502);

return statearr_10567;
})();
var statearr_10568_10598 = state_10548__$1;
(statearr_10568_10598[(2)] = null);

(statearr_10568_10598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (3))){
var inst_10546 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10548__$1,inst_10546);
} else {
if((state_val_10549 === (12))){
var inst_10534 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
var statearr_10569_10599 = state_10548__$1;
(statearr_10569_10599[(2)] = inst_10534);

(statearr_10569_10599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (2))){
var state_10548__$1 = state_10548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10548__$1,(4),in$);
} else {
if((state_val_10549 === (23))){
var inst_10542 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
var statearr_10570_10600 = state_10548__$1;
(statearr_10570_10600[(2)] = inst_10542);

(statearr_10570_10600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (19))){
var inst_10529 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
var statearr_10571_10601 = state_10548__$1;
(statearr_10571_10601[(2)] = inst_10529);

(statearr_10571_10601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (11))){
var inst_10500 = (state_10548[(8)]);
var inst_10514 = (state_10548[(7)]);
var inst_10514__$1 = cljs.core.seq.call(null,inst_10500);
var state_10548__$1 = (function (){var statearr_10572 = state_10548;
(statearr_10572[(7)] = inst_10514__$1);

return statearr_10572;
})();
if(inst_10514__$1){
var statearr_10573_10602 = state_10548__$1;
(statearr_10573_10602[(1)] = (14));

} else {
var statearr_10574_10603 = state_10548__$1;
(statearr_10574_10603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (9))){
var inst_10536 = (state_10548[(2)]);
var inst_10537 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10548__$1 = (function (){var statearr_10575 = state_10548;
(statearr_10575[(15)] = inst_10536);

return statearr_10575;
})();
if(cljs.core.truth_(inst_10537)){
var statearr_10576_10604 = state_10548__$1;
(statearr_10576_10604[(1)] = (21));

} else {
var statearr_10577_10605 = state_10548__$1;
(statearr_10577_10605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (5))){
var inst_10492 = cljs.core.async.close_BANG_.call(null,out);
var state_10548__$1 = state_10548;
var statearr_10578_10606 = state_10548__$1;
(statearr_10578_10606[(2)] = inst_10492);

(statearr_10578_10606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (14))){
var inst_10514 = (state_10548[(7)]);
var inst_10516 = cljs.core.chunked_seq_QMARK_.call(null,inst_10514);
var state_10548__$1 = state_10548;
if(inst_10516){
var statearr_10579_10607 = state_10548__$1;
(statearr_10579_10607[(1)] = (17));

} else {
var statearr_10580_10608 = state_10548__$1;
(statearr_10580_10608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (16))){
var inst_10532 = (state_10548[(2)]);
var state_10548__$1 = state_10548;
var statearr_10581_10609 = state_10548__$1;
(statearr_10581_10609[(2)] = inst_10532);

(statearr_10581_10609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10549 === (10))){
var inst_10503 = (state_10548[(10)]);
var inst_10501 = (state_10548[(11)]);
var inst_10508 = cljs.core._nth.call(null,inst_10501,inst_10503);
var state_10548__$1 = state_10548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10548__$1,(13),out,inst_10508);
} else {
if((state_val_10549 === (18))){
var inst_10514 = (state_10548[(7)]);
var inst_10523 = cljs.core.first.call(null,inst_10514);
var state_10548__$1 = state_10548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10548__$1,(20),out,inst_10523);
} else {
if((state_val_10549 === (8))){
var inst_10503 = (state_10548[(10)]);
var inst_10502 = (state_10548[(12)]);
var inst_10505 = (inst_10503 < inst_10502);
var inst_10506 = inst_10505;
var state_10548__$1 = state_10548;
if(cljs.core.truth_(inst_10506)){
var statearr_10582_10610 = state_10548__$1;
(statearr_10582_10610[(1)] = (10));

} else {
var statearr_10583_10611 = state_10548__$1;
(statearr_10583_10611[(1)] = (11));

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
});})(c__7068__auto__))
;
return ((function (switch__6909__auto__,c__7068__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____0 = (function (){
var statearr_10584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10584[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__);

(statearr_10584[(1)] = (1));

return statearr_10584;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____1 = (function (state_10548){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10585){if((e10585 instanceof Object)){
var ex__6913__auto__ = e10585;
var statearr_10586_10612 = state_10548;
(statearr_10586_10612[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10613 = state_10548;
state_10548 = G__10613;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__ = function(state_10548){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____1.call(this,state_10548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6910__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto__))
})();
var state__7070__auto__ = (function (){var statearr_10587 = f__7069__auto__.call(null);
(statearr_10587[(6)] = c__7068__auto__);

return statearr_10587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto__))
);

return c__7068__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__10615 = arguments.length;
switch (G__10615) {
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
var G__10618 = arguments.length;
switch (G__10618) {
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
var G__10621 = arguments.length;
switch (G__10621) {
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
var c__7068__auto___10668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10668,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10668,out){
return (function (state_10645){
var state_val_10646 = (state_10645[(1)]);
if((state_val_10646 === (7))){
var inst_10640 = (state_10645[(2)]);
var state_10645__$1 = state_10645;
var statearr_10647_10669 = state_10645__$1;
(statearr_10647_10669[(2)] = inst_10640);

(statearr_10647_10669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (1))){
var inst_10622 = null;
var state_10645__$1 = (function (){var statearr_10648 = state_10645;
(statearr_10648[(7)] = inst_10622);

return statearr_10648;
})();
var statearr_10649_10670 = state_10645__$1;
(statearr_10649_10670[(2)] = null);

(statearr_10649_10670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (4))){
var inst_10625 = (state_10645[(8)]);
var inst_10625__$1 = (state_10645[(2)]);
var inst_10626 = (inst_10625__$1 == null);
var inst_10627 = cljs.core.not.call(null,inst_10626);
var state_10645__$1 = (function (){var statearr_10650 = state_10645;
(statearr_10650[(8)] = inst_10625__$1);

return statearr_10650;
})();
if(inst_10627){
var statearr_10651_10671 = state_10645__$1;
(statearr_10651_10671[(1)] = (5));

} else {
var statearr_10652_10672 = state_10645__$1;
(statearr_10652_10672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (6))){
var state_10645__$1 = state_10645;
var statearr_10653_10673 = state_10645__$1;
(statearr_10653_10673[(2)] = null);

(statearr_10653_10673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (3))){
var inst_10642 = (state_10645[(2)]);
var inst_10643 = cljs.core.async.close_BANG_.call(null,out);
var state_10645__$1 = (function (){var statearr_10654 = state_10645;
(statearr_10654[(9)] = inst_10642);

return statearr_10654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10645__$1,inst_10643);
} else {
if((state_val_10646 === (2))){
var state_10645__$1 = state_10645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10645__$1,(4),ch);
} else {
if((state_val_10646 === (11))){
var inst_10625 = (state_10645[(8)]);
var inst_10634 = (state_10645[(2)]);
var inst_10622 = inst_10625;
var state_10645__$1 = (function (){var statearr_10655 = state_10645;
(statearr_10655[(10)] = inst_10634);

(statearr_10655[(7)] = inst_10622);

return statearr_10655;
})();
var statearr_10656_10674 = state_10645__$1;
(statearr_10656_10674[(2)] = null);

(statearr_10656_10674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (9))){
var inst_10625 = (state_10645[(8)]);
var state_10645__$1 = state_10645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10645__$1,(11),out,inst_10625);
} else {
if((state_val_10646 === (5))){
var inst_10625 = (state_10645[(8)]);
var inst_10622 = (state_10645[(7)]);
var inst_10629 = cljs.core._EQ_.call(null,inst_10625,inst_10622);
var state_10645__$1 = state_10645;
if(inst_10629){
var statearr_10658_10675 = state_10645__$1;
(statearr_10658_10675[(1)] = (8));

} else {
var statearr_10659_10676 = state_10645__$1;
(statearr_10659_10676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (10))){
var inst_10637 = (state_10645[(2)]);
var state_10645__$1 = state_10645;
var statearr_10660_10677 = state_10645__$1;
(statearr_10660_10677[(2)] = inst_10637);

(statearr_10660_10677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10646 === (8))){
var inst_10622 = (state_10645[(7)]);
var tmp10657 = inst_10622;
var inst_10622__$1 = tmp10657;
var state_10645__$1 = (function (){var statearr_10661 = state_10645;
(statearr_10661[(7)] = inst_10622__$1);

return statearr_10661;
})();
var statearr_10662_10678 = state_10645__$1;
(statearr_10662_10678[(2)] = null);

(statearr_10662_10678[(1)] = (2));


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
});})(c__7068__auto___10668,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10668,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10663[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10663[(1)] = (1));

return statearr_10663;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10645){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10664){if((e10664 instanceof Object)){
var ex__6913__auto__ = e10664;
var statearr_10665_10679 = state_10645;
(statearr_10665_10679[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10680 = state_10645;
state_10645 = G__10680;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10668,out))
})();
var state__7070__auto__ = (function (){var statearr_10666 = f__7069__auto__.call(null);
(statearr_10666[(6)] = c__7068__auto___10668);

return statearr_10666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10668,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__10682 = arguments.length;
switch (G__10682) {
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
var c__7068__auto___10748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10748,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10748,out){
return (function (state_10720){
var state_val_10721 = (state_10720[(1)]);
if((state_val_10721 === (7))){
var inst_10716 = (state_10720[(2)]);
var state_10720__$1 = state_10720;
var statearr_10722_10749 = state_10720__$1;
(statearr_10722_10749[(2)] = inst_10716);

(statearr_10722_10749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (1))){
var inst_10683 = (new Array(n));
var inst_10684 = inst_10683;
var inst_10685 = (0);
var state_10720__$1 = (function (){var statearr_10723 = state_10720;
(statearr_10723[(7)] = inst_10684);

(statearr_10723[(8)] = inst_10685);

return statearr_10723;
})();
var statearr_10724_10750 = state_10720__$1;
(statearr_10724_10750[(2)] = null);

(statearr_10724_10750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (4))){
var inst_10688 = (state_10720[(9)]);
var inst_10688__$1 = (state_10720[(2)]);
var inst_10689 = (inst_10688__$1 == null);
var inst_10690 = cljs.core.not.call(null,inst_10689);
var state_10720__$1 = (function (){var statearr_10725 = state_10720;
(statearr_10725[(9)] = inst_10688__$1);

return statearr_10725;
})();
if(inst_10690){
var statearr_10726_10751 = state_10720__$1;
(statearr_10726_10751[(1)] = (5));

} else {
var statearr_10727_10752 = state_10720__$1;
(statearr_10727_10752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (15))){
var inst_10710 = (state_10720[(2)]);
var state_10720__$1 = state_10720;
var statearr_10728_10753 = state_10720__$1;
(statearr_10728_10753[(2)] = inst_10710);

(statearr_10728_10753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (13))){
var state_10720__$1 = state_10720;
var statearr_10729_10754 = state_10720__$1;
(statearr_10729_10754[(2)] = null);

(statearr_10729_10754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (6))){
var inst_10685 = (state_10720[(8)]);
var inst_10706 = (inst_10685 > (0));
var state_10720__$1 = state_10720;
if(cljs.core.truth_(inst_10706)){
var statearr_10730_10755 = state_10720__$1;
(statearr_10730_10755[(1)] = (12));

} else {
var statearr_10731_10756 = state_10720__$1;
(statearr_10731_10756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (3))){
var inst_10718 = (state_10720[(2)]);
var state_10720__$1 = state_10720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10720__$1,inst_10718);
} else {
if((state_val_10721 === (12))){
var inst_10684 = (state_10720[(7)]);
var inst_10708 = cljs.core.vec.call(null,inst_10684);
var state_10720__$1 = state_10720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10720__$1,(15),out,inst_10708);
} else {
if((state_val_10721 === (2))){
var state_10720__$1 = state_10720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10720__$1,(4),ch);
} else {
if((state_val_10721 === (11))){
var inst_10700 = (state_10720[(2)]);
var inst_10701 = (new Array(n));
var inst_10684 = inst_10701;
var inst_10685 = (0);
var state_10720__$1 = (function (){var statearr_10732 = state_10720;
(statearr_10732[(7)] = inst_10684);

(statearr_10732[(8)] = inst_10685);

(statearr_10732[(10)] = inst_10700);

return statearr_10732;
})();
var statearr_10733_10757 = state_10720__$1;
(statearr_10733_10757[(2)] = null);

(statearr_10733_10757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (9))){
var inst_10684 = (state_10720[(7)]);
var inst_10698 = cljs.core.vec.call(null,inst_10684);
var state_10720__$1 = state_10720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10720__$1,(11),out,inst_10698);
} else {
if((state_val_10721 === (5))){
var inst_10684 = (state_10720[(7)]);
var inst_10688 = (state_10720[(9)]);
var inst_10693 = (state_10720[(11)]);
var inst_10685 = (state_10720[(8)]);
var inst_10692 = (inst_10684[inst_10685] = inst_10688);
var inst_10693__$1 = (inst_10685 + (1));
var inst_10694 = (inst_10693__$1 < n);
var state_10720__$1 = (function (){var statearr_10734 = state_10720;
(statearr_10734[(11)] = inst_10693__$1);

(statearr_10734[(12)] = inst_10692);

return statearr_10734;
})();
if(cljs.core.truth_(inst_10694)){
var statearr_10735_10758 = state_10720__$1;
(statearr_10735_10758[(1)] = (8));

} else {
var statearr_10736_10759 = state_10720__$1;
(statearr_10736_10759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (14))){
var inst_10713 = (state_10720[(2)]);
var inst_10714 = cljs.core.async.close_BANG_.call(null,out);
var state_10720__$1 = (function (){var statearr_10738 = state_10720;
(statearr_10738[(13)] = inst_10713);

return statearr_10738;
})();
var statearr_10739_10760 = state_10720__$1;
(statearr_10739_10760[(2)] = inst_10714);

(statearr_10739_10760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (10))){
var inst_10704 = (state_10720[(2)]);
var state_10720__$1 = state_10720;
var statearr_10740_10761 = state_10720__$1;
(statearr_10740_10761[(2)] = inst_10704);

(statearr_10740_10761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10721 === (8))){
var inst_10684 = (state_10720[(7)]);
var inst_10693 = (state_10720[(11)]);
var tmp10737 = inst_10684;
var inst_10684__$1 = tmp10737;
var inst_10685 = inst_10693;
var state_10720__$1 = (function (){var statearr_10741 = state_10720;
(statearr_10741[(7)] = inst_10684__$1);

(statearr_10741[(8)] = inst_10685);

return statearr_10741;
})();
var statearr_10742_10762 = state_10720__$1;
(statearr_10742_10762[(2)] = null);

(statearr_10742_10762[(1)] = (2));


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
});})(c__7068__auto___10748,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10748,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10743[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10743[(1)] = (1));

return statearr_10743;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10720){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10744){if((e10744 instanceof Object)){
var ex__6913__auto__ = e10744;
var statearr_10745_10763 = state_10720;
(statearr_10745_10763[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10764 = state_10720;
state_10720 = G__10764;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10748,out))
})();
var state__7070__auto__ = (function (){var statearr_10746 = f__7069__auto__.call(null);
(statearr_10746[(6)] = c__7068__auto___10748);

return statearr_10746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10748,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10766 = arguments.length;
switch (G__10766) {
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
var c__7068__auto___10836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7068__auto___10836,out){
return (function (){
var f__7069__auto__ = (function (){var switch__6909__auto__ = ((function (c__7068__auto___10836,out){
return (function (state_10808){
var state_val_10809 = (state_10808[(1)]);
if((state_val_10809 === (7))){
var inst_10804 = (state_10808[(2)]);
var state_10808__$1 = state_10808;
var statearr_10810_10837 = state_10808__$1;
(statearr_10810_10837[(2)] = inst_10804);

(statearr_10810_10837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (1))){
var inst_10767 = [];
var inst_10768 = inst_10767;
var inst_10769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10808__$1 = (function (){var statearr_10811 = state_10808;
(statearr_10811[(7)] = inst_10768);

(statearr_10811[(8)] = inst_10769);

return statearr_10811;
})();
var statearr_10812_10838 = state_10808__$1;
(statearr_10812_10838[(2)] = null);

(statearr_10812_10838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (4))){
var inst_10772 = (state_10808[(9)]);
var inst_10772__$1 = (state_10808[(2)]);
var inst_10773 = (inst_10772__$1 == null);
var inst_10774 = cljs.core.not.call(null,inst_10773);
var state_10808__$1 = (function (){var statearr_10813 = state_10808;
(statearr_10813[(9)] = inst_10772__$1);

return statearr_10813;
})();
if(inst_10774){
var statearr_10814_10839 = state_10808__$1;
(statearr_10814_10839[(1)] = (5));

} else {
var statearr_10815_10840 = state_10808__$1;
(statearr_10815_10840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (15))){
var inst_10798 = (state_10808[(2)]);
var state_10808__$1 = state_10808;
var statearr_10816_10841 = state_10808__$1;
(statearr_10816_10841[(2)] = inst_10798);

(statearr_10816_10841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (13))){
var state_10808__$1 = state_10808;
var statearr_10817_10842 = state_10808__$1;
(statearr_10817_10842[(2)] = null);

(statearr_10817_10842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (6))){
var inst_10768 = (state_10808[(7)]);
var inst_10793 = inst_10768.length;
var inst_10794 = (inst_10793 > (0));
var state_10808__$1 = state_10808;
if(cljs.core.truth_(inst_10794)){
var statearr_10818_10843 = state_10808__$1;
(statearr_10818_10843[(1)] = (12));

} else {
var statearr_10819_10844 = state_10808__$1;
(statearr_10819_10844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (3))){
var inst_10806 = (state_10808[(2)]);
var state_10808__$1 = state_10808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10808__$1,inst_10806);
} else {
if((state_val_10809 === (12))){
var inst_10768 = (state_10808[(7)]);
var inst_10796 = cljs.core.vec.call(null,inst_10768);
var state_10808__$1 = state_10808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10808__$1,(15),out,inst_10796);
} else {
if((state_val_10809 === (2))){
var state_10808__$1 = state_10808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10808__$1,(4),ch);
} else {
if((state_val_10809 === (11))){
var inst_10776 = (state_10808[(10)]);
var inst_10772 = (state_10808[(9)]);
var inst_10786 = (state_10808[(2)]);
var inst_10787 = [];
var inst_10788 = inst_10787.push(inst_10772);
var inst_10768 = inst_10787;
var inst_10769 = inst_10776;
var state_10808__$1 = (function (){var statearr_10820 = state_10808;
(statearr_10820[(11)] = inst_10786);

(statearr_10820[(7)] = inst_10768);

(statearr_10820[(12)] = inst_10788);

(statearr_10820[(8)] = inst_10769);

return statearr_10820;
})();
var statearr_10821_10845 = state_10808__$1;
(statearr_10821_10845[(2)] = null);

(statearr_10821_10845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (9))){
var inst_10768 = (state_10808[(7)]);
var inst_10784 = cljs.core.vec.call(null,inst_10768);
var state_10808__$1 = state_10808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10808__$1,(11),out,inst_10784);
} else {
if((state_val_10809 === (5))){
var inst_10776 = (state_10808[(10)]);
var inst_10772 = (state_10808[(9)]);
var inst_10769 = (state_10808[(8)]);
var inst_10776__$1 = f.call(null,inst_10772);
var inst_10777 = cljs.core._EQ_.call(null,inst_10776__$1,inst_10769);
var inst_10778 = cljs.core.keyword_identical_QMARK_.call(null,inst_10769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10779 = ((inst_10777) || (inst_10778));
var state_10808__$1 = (function (){var statearr_10822 = state_10808;
(statearr_10822[(10)] = inst_10776__$1);

return statearr_10822;
})();
if(cljs.core.truth_(inst_10779)){
var statearr_10823_10846 = state_10808__$1;
(statearr_10823_10846[(1)] = (8));

} else {
var statearr_10824_10847 = state_10808__$1;
(statearr_10824_10847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (14))){
var inst_10801 = (state_10808[(2)]);
var inst_10802 = cljs.core.async.close_BANG_.call(null,out);
var state_10808__$1 = (function (){var statearr_10826 = state_10808;
(statearr_10826[(13)] = inst_10801);

return statearr_10826;
})();
var statearr_10827_10848 = state_10808__$1;
(statearr_10827_10848[(2)] = inst_10802);

(statearr_10827_10848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (10))){
var inst_10791 = (state_10808[(2)]);
var state_10808__$1 = state_10808;
var statearr_10828_10849 = state_10808__$1;
(statearr_10828_10849[(2)] = inst_10791);

(statearr_10828_10849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10809 === (8))){
var inst_10776 = (state_10808[(10)]);
var inst_10768 = (state_10808[(7)]);
var inst_10772 = (state_10808[(9)]);
var inst_10781 = inst_10768.push(inst_10772);
var tmp10825 = inst_10768;
var inst_10768__$1 = tmp10825;
var inst_10769 = inst_10776;
var state_10808__$1 = (function (){var statearr_10829 = state_10808;
(statearr_10829[(14)] = inst_10781);

(statearr_10829[(7)] = inst_10768__$1);

(statearr_10829[(8)] = inst_10769);

return statearr_10829;
})();
var statearr_10830_10850 = state_10808__$1;
(statearr_10830_10850[(2)] = null);

(statearr_10830_10850[(1)] = (2));


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
});})(c__7068__auto___10836,out))
;
return ((function (switch__6909__auto__,c__7068__auto___10836,out){
return (function() {
var cljs$core$async$state_machine__6910__auto__ = null;
var cljs$core$async$state_machine__6910__auto____0 = (function (){
var statearr_10831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10831[(0)] = cljs$core$async$state_machine__6910__auto__);

(statearr_10831[(1)] = (1));

return statearr_10831;
});
var cljs$core$async$state_machine__6910__auto____1 = (function (state_10808){
while(true){
var ret_value__6911__auto__ = (function (){try{while(true){
var result__6912__auto__ = switch__6909__auto__.call(null,state_10808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6912__auto__;
}
break;
}
}catch (e10832){if((e10832 instanceof Object)){
var ex__6913__auto__ = e10832;
var statearr_10833_10851 = state_10808;
(statearr_10833_10851[(5)] = ex__6913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10852 = state_10808;
state_10808 = G__10852;
continue;
} else {
return ret_value__6911__auto__;
}
break;
}
});
cljs$core$async$state_machine__6910__auto__ = function(state_10808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6910__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6910__auto____1.call(this,state_10808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6910__auto____0;
cljs$core$async$state_machine__6910__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6910__auto____1;
return cljs$core$async$state_machine__6910__auto__;
})()
;})(switch__6909__auto__,c__7068__auto___10836,out))
})();
var state__7070__auto__ = (function (){var statearr_10834 = f__7069__auto__.call(null);
(statearr_10834[(6)] = c__7068__auto___10836);

return statearr_10834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7070__auto__);
});})(c__7068__auto___10836,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
