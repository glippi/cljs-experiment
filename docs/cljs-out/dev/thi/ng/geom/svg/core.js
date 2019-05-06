// Compiled by ClojureScript 1.10.339 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.strf.core');
goog.require('thi.ng.color.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * (100)) | (0))),"%"].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__15760 = (n | (0));
switch (G__15760) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * This protocol is implemented by types which can directly convert
 *   themselves into an SVG representation. Note, that currently these
 *   implementations are only made available when the
 *   `thi.ng.svg.adapter` namespace is loaded.
 * @interface
 */
thi.ng.geom.svg.core.ISVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if(((!((_ == null))) && (!((_.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2 == null))))){
return _.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2(_,opts);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,opts);
} else {
var m__4244__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ISVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__5455__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__5455__auto__)){
var att = temp__5455__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__5455__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__5455__auto__)){
var mat = temp__5455__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__15762 = mat;
var a = cljs.core.nth.call(null,vec__15762,(0),null);
var c = cljs.core.nth.call(null,vec__15762,(1),null);
var e = cljs.core.nth.call(null,vec__15762,(2),null);
var b = cljs.core.nth.call(null,vec__15762,(3),null);
var d = cljs.core.nth.call(null,vec__15762,(4),null);
var f = cljs.core.nth.call(null,vec__15762,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__15765 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),"__"))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__15766 = cljs.core.next.call(null,ks);
acc = G__15765;
ks = G__15766;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15769 = arguments.length;
var i__4532__auto___15770 = (0);
while(true){
if((i__4532__auto___15770 < len__4531__auto___15769)){
args__4534__auto__.push((arguments[i__4532__auto___15770]));

var G__15771 = (i__4532__auto___15770 + (1));
i__4532__auto___15770 = G__15771;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq15767){
var G__15768 = cljs.core.first.call(null,seq15767);
var seq15767__$1 = cljs.core.next.call(null,seq15767);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15768,seq15767__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15773 = arguments.length;
var i__4532__auto___15774 = (0);
while(true){
if((i__4532__auto___15774 < len__4531__auto___15773)){
args__4534__auto__.push((arguments[i__4532__auto___15774]));

var G__15775 = (i__4532__auto___15774 + (1));
i__4532__auto___15774 = G__15775;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq15772){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15772));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__15776){
var vec__15777 = p__15776;
var pos = cljs.core.nth.call(null,vec__15777,(0),null);
var col = cljs.core.nth.call(null,vec__15777,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15783 = arguments.length;
var i__4532__auto___15784 = (0);
while(true){
if((i__4532__auto___15784 < len__4531__auto___15783)){
args__4534__auto__.push((arguments[i__4532__auto___15784]));

var G__15785 = (i__4532__auto___15784 + (1));
i__4532__auto___15784 = G__15785;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq15780){
var G__15781 = cljs.core.first.call(null,seq15780);
var seq15780__$1 = cljs.core.next.call(null,seq15780);
var G__15782 = cljs.core.first.call(null,seq15780__$1);
var seq15780__$2 = cljs.core.next.call(null,seq15780__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15781,G__15782,seq15780__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15789 = arguments.length;
var i__4532__auto___15790 = (0);
while(true){
if((i__4532__auto___15790 < len__4531__auto___15789)){
args__4534__auto__.push((arguments[i__4532__auto___15790]));

var G__15791 = (i__4532__auto___15790 + (1));
i__4532__auto___15790 = G__15791;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq15786){
var G__15787 = cljs.core.first.call(null,seq15786);
var seq15786__$1 = cljs.core.next.call(null,seq15786);
var G__15788 = cljs.core.first.call(null,seq15786__$1);
var seq15786__$2 = cljs.core.next.call(null,seq15786__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15787,G__15788,seq15786__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15794 = arguments.length;
var i__4532__auto___15795 = (0);
while(true){
if((i__4532__auto___15795 < len__4531__auto___15794)){
args__4534__auto__.push((arguments[i__4532__auto___15795]));

var G__15796 = (i__4532__auto___15795 + (1));
i__4532__auto___15795 = G__15796;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq15792){
var G__15793 = cljs.core.first.call(null,seq15792);
var seq15792__$1 = cljs.core.next.call(null,seq15792);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15793,seq15792__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var G__15798 = arguments.length;
switch (G__15798) {
case 1:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1 = (function (segments){
return thi.ng.geom.svg.core.path.call(null,segments,null);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2 = (function (segments,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var G__15801 = arguments.length;
switch (G__15801) {
case 2:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2 = (function (p,txt){
return thi.ng.geom.svg.core.text.call(null,p,txt,null);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3 = (function (p,txt,attribs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1)))], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var G__15804 = arguments.length;
switch (G__15804) {
case 2:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2 = (function (p,radius){
return thi.ng.geom.svg.core.circle.call(null,p,radius,null);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3 = (function (p,radius,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.ellipse = (function thi$ng$geom$svg$core$ellipse(var_args){
var G__15807 = arguments.length;
switch (G__15807) {
case 3:
return thi.ng.geom.svg.core.ellipse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.ellipse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.ellipse.cljs$core$IFn$_invoke$arity$3 = (function (p,rx,ry){
return thi.ng.geom.svg.core.ellipse.call(null,p,rx,ry,null);
});

thi.ng.geom.svg.core.ellipse.cljs$core$IFn$_invoke$arity$4 = (function (p,rx,ry,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry], null))], null);
});

thi.ng.geom.svg.core.ellipse.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.vector.vec2.call(null,radius);
var p = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,radius__$1),theta1)));
var q = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,radius__$1,(1)),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var G__15810 = arguments.length;
switch (G__15810) {
case 6:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
return thi.ng.geom.svg.core.arc.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,null);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,attribs){
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = 7;

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var G__15813 = arguments.length;
switch (G__15813) {
case 3:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3 = (function (p,w,h){
return thi.ng.geom.svg.core.rect.call(null,p,w,h,null);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (p,w,h,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"width","width",-384071477),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,w),new cljs.core.Keyword(null,"height","height",1025178622),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,h)], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var G__15816 = arguments.length;
switch (G__15816) {
case 2:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.svg.core.line.call(null,a,b,null);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3 = (function (a,b,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,a)),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,a,(1))),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,b)),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,b,(1)))], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 4:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4 = (function (p,q,start,end){
return thi.ng.geom.svg.core.line_decorated.call(null,p,q,start,end,null);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5 = (function (p,q,start,end,attribs){
return (new cljs.core.List(null,thi.ng.geom.svg.core.line.call(null,p,q,attribs),(new cljs.core.List(null,(cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null),(new cljs.core.List(null,(cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null),null,(1),null)),(2),null)),(3),null));
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var G__15822 = arguments.length;
switch (G__15822) {
case 1:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.line_strip.call(null,points,null);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var G__15825 = arguments.length;
switch (G__15825) {
case 4:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4 = (function (points,start,seg,end){
return thi.ng.geom.svg.core.line_strip_decorated.call(null,points,start,seg,end,null);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5 = (function (points,start,seg,end,attribs){
var n = (cljs.core.count.call(null,points) - (1));
return (new cljs.core.List(null,thi.ng.geom.svg.core.line_strip.call(null,points,attribs),(new cljs.core.List(null,(cljs.core.truth_(start)?start.call(null,cljs.core.nth.call(null,points,(1)),cljs.core.first.call(null,points),(0),attribs):null),(new cljs.core.List(null,(cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (n){
return (function (i,p__15826){
var vec__15827 = p__15826;
var p = cljs.core.nth.call(null,vec__15827,(0),null);
var q = cljs.core.nth.call(null,vec__15827,(1),null);
return seg.call(null,p,q,i,attribs);
});})(n))
,cljs.core.partition.call(null,(2),(1),points)):null),(new cljs.core.List(null,(cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null),null,(1),null)),(2),null)),(3),null)),(4),null));
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.polyline = thi.ng.geom.svg.core.line_strip;
thi.ng.geom.svg.core.polyline_decorated = thi.ng.geom.svg.core.line_strip_decorated;
thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var G__15832 = arguments.length;
switch (G__15832) {
case 1:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.polygon.call(null,points,null);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var G__15835 = arguments.length;
switch (G__15835) {
case 1:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1 = (function (id){
return thi.ng.geom.svg.core.instance.call(null,id,null);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2 = (function (id,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var G__15838 = arguments.length;
switch (G__15838) {
case 3:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3 = (function (len,theta,solid_QMARK_){
return thi.ng.geom.svg.core.arrow_head.call(null,len,theta,solid_QMARK_,null);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4 = (function (len,theta,solid_QMARK_,opts){
return (function() { 
var G__15844__delegate = function (p,q,idx,p__15839){
var vec__15840 = p__15839;
var attribs = cljs.core.nth.call(null,vec__15840,(0),null);
var q__$1 = thi.ng.geom.vector.vec2.call(null,q);
var d = thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,q__$1,p),len);
return (new cljs.core.List(null,(cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts)),null,(1),null));
};
var G__15844 = function (p,q,idx,var_args){
var p__15839 = null;
if (arguments.length > 3) {
var G__15845__i = 0, G__15845__a = new Array(arguments.length -  3);
while (G__15845__i < G__15845__a.length) {G__15845__a[G__15845__i] = arguments[G__15845__i + 3]; ++G__15845__i;}
  p__15839 = new cljs.core.IndexedSeq(G__15845__a,0,null);
} 
return G__15844__delegate.call(this,p,q,idx,p__15839);};
G__15844.cljs$lang$maxFixedArity = 3;
G__15844.cljs$lang$applyTo = (function (arglist__15846){
var p = cljs.core.first(arglist__15846);
arglist__15846 = cljs.core.next(arglist__15846);
var q = cljs.core.first(arglist__15846);
arglist__15846 = cljs.core.next(arglist__15846);
var idx = cljs.core.first(arglist__15846);
var p__15839 = cljs.core.rest(arglist__15846);
return G__15844__delegate(p,q,idx,p__15839);
});
G__15844.cljs$core$IFn$_invoke$arity$variadic = G__15844__delegate;
return G__15844;
})()
;
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var G__15849 = arguments.length;
switch (G__15849) {
case 0:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.svg.core.line_label.call(null,null);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1 = (function (p__15850){
var map__15851 = p__15850;
var map__15851__$1 = ((((!((map__15851 == null)))?(((((map__15851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15851):map__15851);
var opts = map__15851__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),((function (map__15851,map__15851__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__15847_SHARP_){
var or__3949__auto__ = p1__15847_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "middle";
}
});})(map__15851,map__15851__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,map__15851,map__15851__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__15858__delegate = function (p,q,idx,p__15853){
var vec__15854 = p__15853;
var attribs = cljs.core.nth.call(null,vec__15854,(0),null);
var temp__5455__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__5455__auto__)){
var label = temp__5455__auto__;
var p__$1 = thi.ng.geom.vector.vec2.call(null,p);
var m = thi.ng.math.core._PLUS_.call(null,thi.ng.math.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.math.core._.call(null,p__$1,q)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,m))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,m,(1))),")"].join('')):opts__$1);
return (new cljs.core.List(null,thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2)),null,(1),null));
} else {
return null;
}
};
var G__15858 = function (p,q,idx,var_args){
var p__15853 = null;
if (arguments.length > 3) {
var G__15859__i = 0, G__15859__a = new Array(arguments.length -  3);
while (G__15859__i < G__15859__a.length) {G__15859__a[G__15859__i] = arguments[G__15859__i + 3]; ++G__15859__i;}
  p__15853 = new cljs.core.IndexedSeq(G__15859__a,0,null);
} 
return G__15858__delegate.call(this,p,q,idx,p__15853);};
G__15858.cljs$lang$maxFixedArity = 3;
G__15858.cljs$lang$applyTo = (function (arglist__15860){
var p = cljs.core.first(arglist__15860);
arglist__15860 = cljs.core.next(arglist__15860);
var q = cljs.core.first(arglist__15860);
arglist__15860 = cljs.core.next(arglist__15860);
var idx = cljs.core.first(arglist__15860);
var p__15853 = cljs.core.rest(arglist__15860);
return G__15858__delegate(p,q,idx,p__15853);
});
G__15858.cljs$core$IFn$_invoke$arity$variadic = G__15858__delegate;
return G__15858;
})()
;
;})(opts__$1,map__15851,map__15851__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = 1;

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15866 = arguments.length;
var i__4532__auto___15867 = (0);
while(true){
if((i__4532__auto___15867 < len__4531__auto___15866)){
args__4534__auto__.push((arguments[i__4532__auto___15867]));

var G__15868 = (i__4532__auto___15867 + (1));
i__4532__auto___15867 = G__15868;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__15869__delegate = function (p,q,idx,p__15862){
var vec__15863 = p__15862;
var attribs = cljs.core.nth.call(null,vec__15863,(0),null);
return cljs.core.reduce.call(null,((function (vec__15863,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__15863,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__15869 = function (p,q,idx,var_args){
var p__15862 = null;
if (arguments.length > 3) {
var G__15870__i = 0, G__15870__a = new Array(arguments.length -  3);
while (G__15870__i < G__15870__a.length) {G__15870__a[G__15870__i] = arguments[G__15870__i + 3]; ++G__15870__i;}
  p__15862 = new cljs.core.IndexedSeq(G__15870__a,0,null);
} 
return G__15869__delegate.call(this,p,q,idx,p__15862);};
G__15869.cljs$lang$maxFixedArity = 3;
G__15869.cljs$lang$applyTo = (function (arglist__15871){
var p = cljs.core.first(arglist__15871);
arglist__15871 = cljs.core.next(arglist__15871);
var q = cljs.core.first(arglist__15871);
arglist__15871 = cljs.core.next(arglist__15871);
var idx = cljs.core.first(arglist__15871);
var p__15862 = cljs.core.rest(arglist__15871);
return G__15869__delegate(p,q,idx,p__15862);
});
G__15869.cljs$core$IFn$_invoke$arity$variadic = G__15869__delegate;
return G__15869;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq15861){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15861));
});


//# sourceMappingURL=core.js.map
