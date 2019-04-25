// Compiled by ClojureScript 1.10.339 {}
goog.provide('thi.ng.geom.viz.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.ndarray.contours');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.viz.core.value_mapper = (function thi$ng$geom$viz$core$value_mapper(scale_x,scale_y){
return (function (p__15968){
var vec__15969 = p__15968;
var x = cljs.core.nth.call(null,vec__15969,(0),null);
var y = cljs.core.nth.call(null,vec__15969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
});
});
thi.ng.geom.viz.core.value_transducer = (function thi$ng$geom$viz$core$value_transducer(p__15974){
var map__15975 = p__15974;
var map__15975__$1 = ((((!((map__15975 == null)))?(((((map__15975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15975):map__15975);
var cull_domain = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057));
var cull_range = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"cull-range","cull-range",603502637));
var scale_x = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var scale_y = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var project = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var shape = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var item_pos = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
var item_pos__$1 = (function (){var or__3949__auto__ = item_pos;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.identity;
}
})();
var G__15977 = cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos__$1,cljs.core.identity));
var G__15977__$1 = (cljs.core.truth_(cull_domain)?cljs.core.comp.call(null,G__15977,cljs.core.filter.call(null,((function (G__15977,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__15972_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_domain,cljs.core.ffirst.call(null,p1__15972_SHARP_));
});})(G__15977,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__15977);
var G__15977__$2 = cljs.core.comp.call(null,G__15977__$1,cljs.core.map.call(null,((function (G__15977,G__15977__$1,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__15978){
var vec__15979 = p__15978;
var p = cljs.core.nth.call(null,vec__15979,(0),null);
var i = cljs.core.nth.call(null,vec__15979,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,p),i], null);
});})(G__15977,G__15977__$1,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
))
;
var G__15977__$3 = (cljs.core.truth_(cull_range)?cljs.core.comp.call(null,G__15977__$2,cljs.core.filter.call(null,((function (G__15977,G__15977__$1,G__15977__$2,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__15973_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_range,cljs.core.peek.call(null,cljs.core.first.call(null,p1__15973_SHARP_)));
});})(G__15977,G__15977__$1,G__15977__$2,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__15977__$2);
var G__15977__$4 = (cljs.core.truth_(project)?cljs.core.comp.call(null,G__15977__$3,cljs.core.map.call(null,((function (G__15977,G__15977__$1,G__15977__$2,G__15977__$3,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__15982){
var vec__15983 = p__15982;
var p = cljs.core.nth.call(null,vec__15983,(0),null);
var i = cljs.core.nth.call(null,vec__15983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.call(null,p),i], null);
});})(G__15977,G__15977__$1,G__15977__$2,G__15977__$3,mapper,item_pos__$1,map__15975,map__15975__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__15977__$3);
if(cljs.core.truth_(shape)){
return cljs.core.comp.call(null,G__15977__$4,cljs.core.map.call(null,shape));
} else {
return G__15977__$4;
}
});
thi.ng.geom.viz.core.process_points = (function thi$ng$geom$viz$core$process_points(p__15986,p__15987){
var map__15988 = p__15986;
var map__15988__$1 = ((((!((map__15988 == null)))?(((((map__15988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15988):map__15988);
var x_axis = cljs.core.get.call(null,map__15988__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__15988__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__15988__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__15989 = p__15987;
var map__15989__$1 = ((((!((map__15989 == null)))?(((((map__15989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15989):map__15989);
var values = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"values","values",372645556));
var item_pos = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var shape = cljs.core.get.call(null,map__15989__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var vec__15992 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var ry1 = cljs.core.nth.call(null,vec__15992,(0),null);
var ry2 = cljs.core.nth.call(null,vec__15992,(1),null);
return cljs.core.sequence.call(null,thi.ng.geom.viz.core.value_transducer.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"cull-range","cull-range",603502637),(((ry1 < ry2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry1,ry2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry2,ry1], null)),new cljs.core.Keyword(null,"item-pos","item-pos",390857330),item_pos,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),new cljs.core.Keyword(null,"project","project",1124394579),project,new cljs.core.Keyword(null,"shape","shape",1190694006),shape], null)),(cljs.core.truth_(item_pos)?cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_pos),values):cljs.core.sort_by.call(null,cljs.core.first,values)));
});
thi.ng.geom.viz.core.points__GT_path_segments = (function thi$ng$geom$viz$core$points__GT_path_segments(p__15997){
var vec__15998 = p__15997;
var seq__15999 = cljs.core.seq.call(null,vec__15998);
var first__16000 = cljs.core.first.call(null,seq__15999);
var seq__15999__$1 = cljs.core.next.call(null,seq__15999);
var p = first__16000;
var more = seq__15999__$1;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (vec__15998,seq__15999,first__16000,seq__15999__$1,p,more){
return (function (p1__15995_SHARP_,p2__15996_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__15995_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),p2__15996_SHARP_], null));
});})(vec__15998,seq__15999,first__16000,seq__15999__$1,p,more))
,cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null)], null)),more));
});
thi.ng.geom.viz.core.polar_projection = (function thi$ng$geom$viz$core$polar_projection(origin){
var o = thi.ng.geom.vector.vec2.call(null,origin);
return ((function (o){
return (function (p__16001){
var vec__16002 = p__16001;
var x = cljs.core.nth.call(null,vec__16002,(0),null);
var y = cljs.core.nth.call(null,vec__16002,(1),null);
return thi.ng.math.core._PLUS_.call(null,o,thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,y,x)));
});
;})(o))
});
thi.ng.geom.viz.core.value_formatter = (function thi$ng$geom$viz$core$value_formatter(prec){
var fmt = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.strf.core.float$.call(null,prec)], null);
return ((function (fmt){
return (function (x){
return thi.ng.strf.core.format.call(null,fmt,x);
});
;})(fmt))
});
thi.ng.geom.viz.core.format_percent = (function thi$ng$geom$viz$core$format_percent(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * (100)) | (0))),"%"].join('');
});
thi.ng.geom.viz.core.default_svg_label = (function thi$ng$geom$viz$core$default_svg_label(f){
return (function (p,x){
return thi.ng.geom.svg.core.text.call(null,p,f.call(null,x));
});
});
/**
 * Given a vector of domain bounds and a collection of data values
 *   (without domain position), produces a lazy-seq of 2-element vectors
 *   representing the values of the original coll uniformly spread over
 *   the full domain range, with each of the form: [domain-pos value].
 */
thi.ng.geom.viz.core.uniform_domain_points = (function thi$ng$geom$viz$core$uniform_domain_points(p__16005,values){
var vec__16006 = p__16005;
var d1 = cljs.core.nth.call(null,vec__16006,(0),null);
var d2 = cljs.core.nth.call(null,vec__16006,(1),null);
return cljs.core.map.call(null,((function (vec__16006,d1,d2){
return (function (t,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix_STAR_.call(null,d1,d2,t),v], null);
});})(vec__16006,d1,d2))
,thi.ng.math.core.norm_range.call(null,(cljs.core.count.call(null,values) - (1))),values);
});
thi.ng.geom.viz.core.domain_bounds_x = (function thi$ng$geom$viz$core$domain_bounds_x(p1__16009_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(0),p1__16009_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_y = (function thi$ng$geom$viz$core$domain_bounds_y(p1__16010_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(1),p1__16010_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_z = (function thi$ng$geom$viz$core$domain_bounds_z(p1__16011_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(2),p1__16011_SHARP_);
});
thi.ng.geom.viz.core.total_domain_bounds = (function thi$ng$geom$viz$core$total_domain_bounds(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16022 = arguments.length;
var i__4532__auto___16023 = (0);
while(true){
if((i__4532__auto___16023 < len__4531__auto___16022)){
args__4534__auto__.push((arguments[i__4532__auto___16023]));

var G__16024 = (i__4532__auto___16023 + (1));
i__4532__auto___16023 = G__16024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic = (function (f,colls){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core.completing.call(null,(function (p__16014,p__16015){
var vec__16016 = p__16014;
var aa = cljs.core.nth.call(null,vec__16016,(0),null);
var ab = cljs.core.nth.call(null,vec__16016,(1),null);
var vec__16019 = p__16015;
var xa = cljs.core.nth.call(null,vec__16019,(0),null);
var xb = cljs.core.nth.call(null,vec__16019,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4040__auto__ = aa;
var y__4041__auto__ = xa;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(function (){var x__4037__auto__ = ab;
var y__4038__auto__ = xb;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()], null);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_], null),colls);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$applyTo = (function (seq16012){
var G__16013 = cljs.core.first.call(null,seq16012);
var seq16012__$1 = cljs.core.next.call(null,seq16012);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16013,seq16012__$1);
});

thi.ng.geom.viz.core.value_domain_bounds = (function thi$ng$geom$viz$core$value_domain_bounds(mat){
var vals = cljs.core.seq.call(null,mat);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,vals),cljs.core.reduce.call(null,cljs.core.max,vals)], null);
});
thi.ng.geom.viz.core.linear_scale = (function thi$ng$geom$viz$core$linear_scale(domain,range){
return (function (x){
return thi.ng.math.core.map_interval.call(null,x,domain,range);
});
});
thi.ng.geom.viz.core.log = (function thi$ng$geom$viz$core$log(base){
var lb = Math.log(base);
return ((function (lb){
return (function (p1__16025_SHARP_){
return ((((p1__16025_SHARP_ > (0)))?Math.log(p1__16025_SHARP_):(((p1__16025_SHARP_ < (0)))?(- Math.log((- p1__16025_SHARP_))):(0)
)) / lb);
});
;})(lb))
});
thi.ng.geom.viz.core.log_scale = (function thi$ng$geom$viz$core$log_scale(base,p__16026,p__16027){
var vec__16028 = p__16026;
var d1 = cljs.core.nth.call(null,vec__16028,(0),null);
var d2 = cljs.core.nth.call(null,vec__16028,(1),null);
var domain = vec__16028;
var vec__16031 = p__16027;
var r1 = cljs.core.nth.call(null,vec__16031,(0),null);
var r2 = cljs.core.nth.call(null,vec__16031,(1),null);
var range = vec__16031;
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
var d1l = log_STAR_.call(null,d1);
var dr = (log_STAR_.call(null,d2) - d1l);
return ((function (log_STAR_,d1l,dr,vec__16028,d1,d2,domain,vec__16031,r1,r2,range){
return (function (x){
return thi.ng.math.core.mix_STAR_.call(null,r1,r2,((log_STAR_.call(null,x) - d1l) / dr));
});
;})(log_STAR_,d1l,dr,vec__16028,d1,d2,domain,vec__16031,r1,r2,range))
});
thi.ng.geom.viz.core.lens_scale = (function thi$ng$geom$viz$core$lens_scale(focus,strength,p__16034,p__16035){
var vec__16036 = p__16034;
var d1 = cljs.core.nth.call(null,vec__16036,(0),null);
var d2 = cljs.core.nth.call(null,vec__16036,(1),null);
var vec__16039 = p__16035;
var r1 = cljs.core.nth.call(null,vec__16039,(0),null);
var r2 = cljs.core.nth.call(null,vec__16039,(1),null);
var dr = (d2 - d1);
var f = ((focus - d1) / dr);
return ((function (dr,f,vec__16036,d1,d2,vec__16039,r1,r2){
return (function (x){
return thi.ng.math.core.mix_lens.call(null,r1,r2,((x - d1) / dr),f,strength);
});
;})(dr,f,vec__16036,d1,d2,vec__16039,r1,r2))
});
thi.ng.geom.viz.core.axis_common_STAR_ = (function thi$ng$geom$viz$core$axis_common_STAR_(p__16042){
var map__16043 = p__16042;
var map__16043__$1 = ((((!((map__16043 == null)))?(((((map__16043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16043):map__16043);
var spec = map__16043__$1;
var visible = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
var major_size = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375),(10));
var minor_size = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),(5));
var label = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attribs = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_dist = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"visible","visible",-1024216805),visible,new cljs.core.Keyword(null,"major-size","major-size",-698672375),major_size,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),minor_size,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})(),new cljs.core.Keyword(null,"attribs","attribs",-137878093),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null),attribs),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),label_style),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(function (){var or__3949__auto__ = label_dist;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((10) + major_size);
}
})());
});
thi.ng.geom.viz.core.lin_tick_marks = (function thi$ng$geom$viz$core$lin_tick_marks(p__16046,delta){
var vec__16047 = p__16046;
var d1 = cljs.core.nth.call(null,vec__16047,(0),null);
var d2 = cljs.core.nth.call(null,vec__16047,(1),null);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,delta,0.0,thi.ng.math.core._STAR_eps_STAR_))){
return cljs.core.List.EMPTY;
} else {
var dr = (d2 - d1);
var d1_SINGLEQUOTE_ = thi.ng.math.core.roundto.call(null,d1,delta);
return cljs.core.filter.call(null,((function (dr,d1_SINGLEQUOTE_,vec__16047,d1,d2){
return (function (p1__16045_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16045_SHARP_);
});})(dr,d1_SINGLEQUOTE_,vec__16047,d1,d2))
,cljs.core.range.call(null,d1_SINGLEQUOTE_,(d2 + delta),delta));
}
});
thi.ng.geom.viz.core.linear_axis = (function thi$ng$geom$viz$core$linear_axis(p__16050){
var map__16051 = p__16050;
var map__16051__$1 = ((((!((map__16051 == null)))?(((((map__16051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16051):map__16051);
var spec = map__16051__$1;
var domain = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var major = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__16051__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__3938__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__3938__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__3938__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.linear_scale.call(null,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1));
});
thi.ng.geom.viz.core.log_ticks_domain = (function thi$ng$geom$viz$core$log_ticks_domain(base,d1,d2){
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.floor.call(null,log_STAR_.call(null,d1)),thi.ng.math.core.ceil.call(null,log_STAR_.call(null,d2))], null);
});
thi.ng.geom.viz.core.log_tick_marks_major = (function thi$ng$geom$viz$core$log_tick_marks_major(base,p__16054){
var vec__16055 = p__16054;
var d1 = cljs.core.nth.call(null,vec__16055,(0),null);
var d2 = cljs.core.nth.call(null,vec__16055,(1),null);
var vec__16058 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__16058,(0),null);
var d2l = cljs.core.nth.call(null,vec__16058,(1),null);
return cljs.core.filter.call(null,((function (vec__16058,d1l,d2l,vec__16055,d1,d2){
return (function (p1__16053_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16053_SHARP_);
});})(vec__16058,d1l,d2l,vec__16055,d1,d2))
,(function (){var iter__4324__auto__ = ((function (vec__16058,d1l,d2l,vec__16055,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16061(s__16062){
return (new cljs.core.LazySeq(null,((function (vec__16058,d1l,d2l,vec__16055,d1,d2){
return (function (){
var s__16062__$1 = s__16062;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16062__$1);
if(temp__5457__auto__){
var s__16062__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16062__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16062__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16064 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16063 = (0);
while(true){
if((i__16063 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__16063);
cljs.core.chunk_append.call(null,b__16064,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))));

var G__16065 = (i__16063 + (1));
i__16063 = G__16065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16064),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16061.call(null,cljs.core.chunk_rest.call(null,s__16062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16064),null);
}
} else {
var i = cljs.core.first.call(null,s__16062__$2);
return cljs.core.cons.call(null,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16061.call(null,cljs.core.rest.call(null,s__16062__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16058,d1l,d2l,vec__16055,d1,d2))
,null,null));
});})(vec__16058,d1l,d2l,vec__16055,d1,d2))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_tick_marks_minor = (function thi$ng$geom$viz$core$log_tick_marks_minor(base,p__16067){
var vec__16068 = p__16067;
var d1 = cljs.core.nth.call(null,vec__16068,(0),null);
var d2 = cljs.core.nth.call(null,vec__16068,(1),null);
var vec__16071 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__16071,(0),null);
var d2l = cljs.core.nth.call(null,vec__16071,(1),null);
var ticks = ((((2) === base))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null):cljs.core.range.call(null,(2),base));
return cljs.core.filter.call(null,((function (vec__16071,d1l,d2l,ticks,vec__16068,d1,d2){
return (function (p1__16066_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16066_SHARP_);
});})(vec__16071,d1l,d2l,ticks,vec__16068,d1,d2))
,(function (){var iter__4324__auto__ = ((function (vec__16071,d1l,d2l,ticks,vec__16068,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16074(s__16075){
return (new cljs.core.LazySeq(null,((function (vec__16071,d1l,d2l,ticks,vec__16068,d1,d2){
return (function (){
var s__16075__$1 = s__16075;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16075__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__16075__$1,i,xs__6012__auto__,temp__5457__auto__,vec__16071,d1l,d2l,ticks,vec__16068,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16074_$_iter__16076(s__16077){
return (new cljs.core.LazySeq(null,((function (s__16075__$1,i,xs__6012__auto__,temp__5457__auto__,vec__16071,d1l,d2l,ticks,vec__16068,d1,d2){
return (function (){
var s__16077__$1 = s__16077;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16077__$1);
if(temp__5457__auto____$1){
var s__16077__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16077__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16077__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16079 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16078 = (0);
while(true){
if((i__16078 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__16078);
cljs.core.chunk_append.call(null,b__16079,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))));

var G__16080 = (i__16078 + (1));
i__16078 = G__16080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16079),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16074_$_iter__16076.call(null,cljs.core.chunk_rest.call(null,s__16077__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16079),null);
}
} else {
var j = cljs.core.first.call(null,s__16077__$2);
return cljs.core.cons.call(null,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16074_$_iter__16076.call(null,cljs.core.rest.call(null,s__16077__$2)));
}
} else {
return null;
}
break;
}
});})(s__16075__$1,i,xs__6012__auto__,temp__5457__auto__,vec__16071,d1l,d2l,ticks,vec__16068,d1,d2))
,null,null));
});})(s__16075__$1,i,xs__6012__auto__,temp__5457__auto__,vec__16071,d1l,d2l,ticks,vec__16068,d1,d2))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ticks));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16074.call(null,cljs.core.rest.call(null,s__16075__$1)));
} else {
var G__16081 = cljs.core.rest.call(null,s__16075__$1);
s__16075__$1 = G__16081;
continue;
}
} else {
return null;
}
break;
}
});})(vec__16071,d1l,d2l,ticks,vec__16068,d1,d2))
,null,null));
});})(vec__16071,d1l,d2l,ticks,vec__16068,d1,d2))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_axis = (function thi$ng$geom$viz$core$log_axis(p__16082){
var map__16083 = p__16082;
var map__16083__$1 = ((((!((map__16083 == null)))?(((((map__16083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16083):map__16083);
var spec = map__16083__$1;
var base = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"base","base",185279322),(10));
var domain = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.log_scale.call(null,base,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),thi.ng.geom.viz.core.log_tick_marks_major.call(null,base,domain),new cljs.core.Keyword(null,"minor","minor",-608536071),thi.ng.geom.viz.core.log_tick_marks_minor.call(null,base,domain)));
});
thi.ng.geom.viz.core.lens_axis = (function thi$ng$geom$viz$core$lens_axis(p__16085){
var map__16086 = p__16085;
var map__16086__$1 = ((((!((map__16086 == null)))?(((((map__16086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16086):map__16086);
var spec = map__16086__$1;
var domain = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var focus = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var strength = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),0.5);
var major = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__3938__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__3938__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__3938__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
var focus__$1 = (function (){var or__3949__auto__ = focus;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,domain) / 2.0);
}
})();
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.lens_scale.call(null,focus__$1,strength,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),strength));
});
thi.ng.geom.viz.core.svg_triangle_up = (function thi$ng$geom$viz$core$svg_triangle_up(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__16088){
var vec__16089 = p__16088;
var vec__16092 = cljs.core.nth.call(null,vec__16089,(0),null);
var x = cljs.core.nth.call(null,vec__16092,(0),null);
var y = cljs.core.nth.call(null,vec__16092,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_triangle_down = (function thi$ng$geom$viz$core$svg_triangle_down(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__16095){
var vec__16096 = p__16095;
var vec__16099 = cljs.core.nth.call(null,vec__16096,(0),null);
var x = cljs.core.nth.call(null,vec__16099,(0),null);
var y = cljs.core.nth.call(null,vec__16099,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_square = (function thi$ng$geom$viz$core$svg_square(r){
var d = (r * 2.0);
return ((function (d){
return (function (p__16102){
var vec__16103 = p__16102;
var vec__16106 = cljs.core.nth.call(null,vec__16103,(0),null);
var x = cljs.core.nth.call(null,vec__16106,(0),null);
var y = cljs.core.nth.call(null,vec__16106,(1),null);
return thi.ng.geom.svg.core.rect.call(null,thi.ng.geom.vector.vec2.call(null,(x - r),(y - r)),d,d);
});
;})(d))
});
thi.ng.geom.viz.core.labeled_rect_horizontal = (function thi$ng$geom$viz$core$labeled_rect_horizontal(p__16109){
var map__16110 = p__16109;
var map__16110__$1 = ((((!((map__16110 == null)))?(((((map__16110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16110):map__16110);
var h = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var label = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var fill = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var min_width = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var base_line = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"base-line","base-line",577717338));
var r2 = ((-2) * r);
var h2 = (0.5 * h);
return ((function (r2,h2,map__16110,map__16110__$1,h,r,label,fill,min_width,base_line){
return (function (p__16112){
var vec__16113 = p__16112;
var vec__16116 = cljs.core.nth.call(null,vec__16113,(0),null);
var ax = cljs.core.nth.call(null,vec__16116,(0),null);
var ay = cljs.core.nth.call(null,vec__16116,(1),null);
var a = vec__16116;
var vec__16119 = cljs.core.nth.call(null,vec__16113,(1),null);
var bx = cljs.core.nth.call(null,vec__16119,(0),null);
var b = vec__16119;
var item = cljs.core.nth.call(null,vec__16113,(2),null);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,thi.ng.geom.svg.core.rect.call(null,thi.ng.geom.vector.vec2.call(null,(ax - r),(ay - h2)),((bx - ax) - r2),h,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill.call(null,item),new cljs.core.Keyword(null,"rx","rx",1627208482),r,new cljs.core.Keyword(null,"ry","ry",-334598563),r], null)),(((min_width < (bx - ax)))?thi.ng.geom.svg.core.text.call(null,thi.ng.geom.vector.vec2.call(null,ax,(base_line + ay)),label.call(null,item)):null));
});
;})(r2,h2,map__16110,map__16110__$1,h,r,label,fill,min_width,base_line))
});
thi.ng.geom.viz.core.circle_cell = (function thi$ng$geom$viz$core$circle_cell(a,b,c,d,col){
return thi.ng.geom.svg.core.circle.call(null,thi.ng.geom.utils.centroid.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null)),(0.5 * thi.ng.geom.core.dist.call(null,a,b)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),col], null));
});
thi.ng.geom.viz.core.svg_line_plot = (function thi$ng$geom$viz$core$svg_line_plot(v_spec,d_spec){
return thi.ng.geom.svg.core.line_strip.call(null,cljs.core.map.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_area_plot = (function thi$ng$geom$viz$core$svg_area_plot(p__16122,p__16123){
var map__16124 = p__16122;
var map__16124__$1 = ((((!((map__16124 == null)))?(((((map__16124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16124):map__16124);
var v_spec = map__16124__$1;
var y_axis = cljs.core.get.call(null,map__16124__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16124__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16125 = p__16123;
var map__16125__$1 = ((((!((map__16125 == null)))?(((((map__16125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16125):map__16125);
var d_spec = map__16125__$1;
var res = cljs.core.get.call(null,map__16125__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var ry1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis));
var points = cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,cljs.core.assoc.call(null,v_spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2),d_spec));
var p = thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,points)),ry1);
var q = thi.ng.geom.vector.vec2.call(null,cljs.core.ffirst.call(null,points),ry1);
var points__$1 = cljs.core.concat.call(null,points,cljs.core.mapv.call(null,cljs.core.partial.call(null,thi.ng.math.core.mix,p,q),thi.ng.math.core.norm_range.call(null,(function (){var or__3949__auto__ = res;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})())));
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.mapv.call(null,project,points__$1),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot = (function thi$ng$geom$viz$core$svg_radar_plot(v_spec,p__16128){
var map__16129 = p__16128;
var map__16129__$1 = ((((!((map__16129 == null)))?(((((map__16129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16129):map__16129);
var d_spec = map__16129__$1;
var shape = cljs.core.get.call(null,map__16129__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),thi.ng.geom.svg.core.polygon);
return shape.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot_minmax = (function thi$ng$geom$viz$core$svg_radar_plot_minmax(v_spec,p__16134){
var map__16135 = p__16134;
var map__16135__$1 = ((((!((map__16135 == null)))?(((((map__16135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16135):map__16135);
var d_spec = map__16135__$1;
var item_pos_min = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"item-pos-min","item-pos-min",-938894508));
var item_pos_max = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"item-pos-max","item-pos-max",1243635616));
var shape = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max){
return (function (p1__16131_SHARP_,p2__16132_SHARP_,p3__16133_SHARP_){
return thi.ng.geom.svg.core.path.call(null,cljs.core.concat.call(null,p1__16131_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null),p2__16132_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null)),p3__16133_SHARP_);
});})(map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max))
);
var min_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__3949__auto__ = item_pos_min;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return cljs.core.take.call(null,(2),i);
});
;})(or__3949__auto__,map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
var max_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__3949__auto__ = item_pos_max;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,min_points,map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.nth.call(null,i,(2))], null);
});
;})(or__3949__auto__,min_points,map__16135,map__16135__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
return shape.call(null,max_points,min_points,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"));
});
thi.ng.geom.viz.core.svg_scatter_plot = (function thi$ng$geom$viz$core$svg_scatter_plot(v_spec,p__16137){
var map__16138 = p__16137;
var map__16138__$1 = ((((!((map__16138 == null)))?(((((map__16138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16138):map__16138);
var d_spec = map__16138__$1;
var attribs = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (){var or__3949__auto__ = shape;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,map__16138,map__16138__$1,d_spec,attribs,shape){
return (function (p__16140){
var vec__16141 = p__16140;
var p = cljs.core.nth.call(null,vec__16141,(0),null);
return thi.ng.geom.svg.core.circle.call(null,p,(3));
});
;})(or__3949__auto__,map__16138,map__16138__$1,d_spec,attribs,shape))
}
})())));
});
thi.ng.geom.viz.core.svg_bar_plot = (function thi$ng$geom$viz$core$svg_bar_plot(p__16145,p__16146){
var map__16147 = p__16145;
var map__16147__$1 = ((((!((map__16147 == null)))?(((((map__16147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16147):map__16147);
var x_axis = cljs.core.get.call(null,map__16147__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16147__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16147__$1,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2);
var map__16148 = p__16146;
var map__16148__$1 = ((((!((map__16148 == null)))?(((((map__16148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16148):map__16148);
var values = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs){
return (function (a,b,_){
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs))
);
var item_pos = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),cljs.core.identity);
var interleave = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),(1));
var offset = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var bar_width = cljs.core.get.call(null,map__16148__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),(0));
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var base_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(y_axis)));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis));
var offset__$1 = ((-0.5 * (interleave * bar_width)) + ((offset + 0.5) * bar_width));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos,cljs.core.identity)),cljs.core.filter.call(null,((function (domain,base_y,mapper,offset__$1,map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p1__16144_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,domain,cljs.core.ffirst.call(null,p1__16144_SHARP_));
});})(domain,base_y,mapper,offset__$1,map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
),cljs.core.map.call(null,((function (domain,base_y,mapper,offset__$1,map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p__16151){
var vec__16152 = p__16151;
var p = cljs.core.nth.call(null,vec__16152,(0),null);
var i = cljs.core.nth.call(null,vec__16152,(1),null);
var vec__16155 = mapper.call(null,p);
var ax = cljs.core.nth.call(null,vec__16155,(0),null);
var ay = cljs.core.nth.call(null,vec__16155,(1),null);
var ax__$1 = (ax + offset__$1);
return shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,ay], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,base_y], null)),i);
});})(domain,base_y,mapper,offset__$1,map__16147,map__16147__$1,x_axis,y_axis,project,map__16148,map__16148__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
)),values));
});
thi.ng.geom.viz.core.svg_heatmap = (function thi$ng$geom$viz$core$svg_heatmap(p__16163,p__16164){
var map__16165 = p__16163;
var map__16165__$1 = ((((!((map__16165 == null)))?(((((map__16165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16165):map__16165);
var x_axis = cljs.core.get.call(null,map__16165__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16165__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16165__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16166 = p__16164;
var map__16166__$1 = ((((!((map__16166 == null)))?(((((map__16166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16166):map__16166);
var d_spec = map__16166__$1;
var matrix = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var value_domain = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var clamp = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"clamp","clamp",1803814940));
var palette = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"palette","palette",-456203511));
var palette_scale = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var attribs = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs){
return (function (p1__16158_SHARP_,p2__16159_SHARP_,p3__16160_SHARP_,p4__16161_SHARP_,p5__16162_SHARP_){
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16158_SHARP_,p2__16159_SHARP_,p3__16160_SHARP_,p4__16161_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),p5__16162_SHARP_], null));
});})(map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs))
);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,(function (){var iter__4324__auto__ = ((function (scale_x,scale_y,pmax,scale_v,map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function thi$ng$geom$viz$core$svg_heatmap_$_iter__16169(s__16170){
return (new cljs.core.LazySeq(null,((function (scale_x,scale_y,pmax,scale_v,map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function (){
var s__16170__$1 = s__16170;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16170__$1);
if(temp__5457__auto__){
var s__16170__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16170__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16170__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16172 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16171 = (0);
while(true){
if((i__16171 < size__4323__auto__)){
var p = cljs.core._nth.call(null,c__4322__auto__,i__16171);
var vec__16173 = p;
var y = cljs.core.nth.call(null,vec__16173,(0),null);
var x = cljs.core.nth.call(null,vec__16173,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__3949__auto__ = clamp;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
cljs.core.chunk_append.call(null,b__16172,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))));

var G__16179 = (i__16171 + (1));
i__16171 = G__16179;
continue;
} else {
var G__16180 = (i__16171 + (1));
i__16171 = G__16180;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16172),thi$ng$geom$viz$core$svg_heatmap_$_iter__16169.call(null,cljs.core.chunk_rest.call(null,s__16170__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16172),null);
}
} else {
var p = cljs.core.first.call(null,s__16170__$2);
var vec__16176 = p;
var y = cljs.core.nth.call(null,vec__16176,(0),null);
var x = cljs.core.nth.call(null,vec__16176,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__3949__auto__ = clamp;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
return cljs.core.cons.call(null,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))),thi$ng$geom$viz$core$svg_heatmap_$_iter__16169.call(null,cljs.core.rest.call(null,s__16170__$2)));
} else {
var G__16181 = cljs.core.rest.call(null,s__16170__$2);
s__16170__$1 = G__16181;
continue;
}
}
} else {
return null;
}
break;
}
});})(scale_x,scale_y,pmax,scale_v,map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
,null,null));
});})(scale_x,scale_y,pmax,scale_v,map__16165,map__16165__$1,x_axis,y_axis,project,map__16166,map__16166__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
;
return iter__4324__auto__.call(null,thi.ng.ndarray.core.position_seq.call(null,matrix));
})());
});
thi.ng.geom.viz.core.matrix_2d = (function thi$ng$geom$viz$core$matrix_2d(w,h,values){
return thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"float32","float32",-2119815775),values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null));
});
thi.ng.geom.viz.core.contour_matrix = (function thi$ng$geom$viz$core$contour_matrix(w,h,values){
return thi.ng.ndarray.contours.set_border_2d.call(null,thi.ng.geom.viz.core.matrix_2d.call(null,w,h,values),-1.0E9);
});
thi.ng.geom.viz.core.contour__GT_svg = (function thi$ng$geom$viz$core$contour__GT_svg(scale_x,scale_y,project){
return (function (attribs,contour){
var contour__$1 = cljs.core.map.call(null,(function (p__16182){
var vec__16183 = p__16182;
var y = cljs.core.nth.call(null,vec__16183,(0),null);
var x = cljs.core.nth.call(null,vec__16183,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
}),contour);
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.map.call(null,project,contour__$1),attribs);
});
});
thi.ng.geom.viz.core.svg_contour_plot = (function thi$ng$geom$viz$core$svg_contour_plot(p__16186,p__16187){
var map__16188 = p__16186;
var map__16188__$1 = ((((!((map__16188 == null)))?(((((map__16188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16188):map__16188);
var x_axis = cljs.core.get.call(null,map__16188__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16188__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16188__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16189 = p__16187;
var map__16189__$1 = ((((!((map__16189 == null)))?(((((map__16189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var matrix = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var attribs = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var levels = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var palette = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null));
var palette_scale = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var value_domain = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var contour_attribs = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"contour-attribs","contour-attribs",464584885),cljs.core.constantly.call(null,null));
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
var contour_fn = thi.ng.geom.viz.core.contour__GT_svg.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),project);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,((function (pmax,scale_v,contour_fn,map__16188,map__16188__$1,x_axis,y_axis,project,map__16189,map__16189__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs){
return (function (iso){
var c_attribs = contour_attribs.call(null,palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,iso) | (0)),(0),pmax)));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.partial.call(null,contour_fn,c_attribs),thi.ng.ndarray.contours.find_contours_2d.call(null,matrix,iso)));
});})(pmax,scale_v,contour_fn,map__16188,map__16188__$1,x_axis,y_axis,project,map__16189,map__16189__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs))
,cljs.core.sort.call(null,levels)));
});
thi.ng.geom.viz.core.overlap_QMARK_ = (function thi$ng$geom$viz$core$overlap_QMARK_(p__16192,p__16193){
var vec__16194 = p__16192;
var a = cljs.core.nth.call(null,vec__16194,(0),null);
var b = cljs.core.nth.call(null,vec__16194,(1),null);
var vec__16197 = p__16193;
var c = cljs.core.nth.call(null,vec__16197,(0),null);
var d = cljs.core.nth.call(null,vec__16197,(1),null);
return (((a <= d)) && ((b >= c)));
});
thi.ng.geom.viz.core.compute_row_stacking = (function thi$ng$geom$viz$core$compute_row_stacking(item_range,coll){
return cljs.core.reduce.call(null,(function (grid,x){
var r = item_range.call(null,x);
var G__16205 = grid;
var vec__16206 = G__16205;
var seq__16207 = cljs.core.seq.call(null,vec__16206);
var first__16208 = cljs.core.first.call(null,seq__16207);
var seq__16207__$1 = cljs.core.next.call(null,seq__16207);
var row = first__16208;
var more = seq__16207__$1;
var idx = (0);
var G__16205__$1 = G__16205;
var idx__$1 = idx;
while(true){
var vec__16209 = G__16205__$1;
var seq__16210 = cljs.core.seq.call(null,vec__16209);
var first__16211 = cljs.core.first.call(null,seq__16210);
var seq__16210__$1 = cljs.core.next.call(null,seq__16210);
var row__$1 = first__16211;
var more__$1 = seq__16210__$1;
var idx__$2 = idx__$1;
if((((row__$1 == null)) || (cljs.core.not.call(null,cljs.core.some.call(null,((function (G__16205__$1,idx__$1,vec__16209,seq__16210,first__16211,seq__16210__$1,row__$1,more__$1,idx__$2,G__16205,vec__16206,seq__16207,first__16208,seq__16207__$1,row,more,idx,r){
return (function (p1__16200_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,r,item_range.call(null,p1__16200_SHARP_));
});})(G__16205__$1,idx__$1,vec__16209,seq__16210,first__16211,seq__16210__$1,row__$1,more__$1,idx__$2,G__16205,vec__16206,seq__16207,first__16208,seq__16207__$1,row,more,idx,r))
,row__$1))))){
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx__$2], null),((function (G__16205__$1,idx__$1,vec__16209,seq__16210,first__16211,seq__16210__$1,row__$1,more__$1,idx__$2,G__16205,vec__16206,seq__16207,first__16208,seq__16207__$1,row,more,idx,r){
return (function (p1__16201_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3949__auto__ = p1__16201_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),x);
});})(G__16205__$1,idx__$1,vec__16209,seq__16210,first__16211,seq__16210__$1,row__$1,more__$1,idx__$2,G__16205,vec__16206,seq__16207,first__16208,seq__16207__$1,row,more,idx,r))
);
} else {
var G__16212 = more__$1;
var G__16213 = (idx__$2 + (1));
G__16205__$1 = G__16212;
idx__$1 = G__16213;
continue;
}
break;
}
}),cljs.core.PersistentVector.EMPTY,coll);
});
thi.ng.geom.viz.core.process_interval_row = (function thi$ng$geom$viz$core$process_interval_row(item_range,mapper,p__16214){
var vec__16215 = p__16214;
var d1 = cljs.core.nth.call(null,vec__16215,(0),null);
var d2 = cljs.core.nth.call(null,vec__16215,(1),null);
return ((function (vec__16215,d1,d2){
return (function (i,row){
return cljs.core.map.call(null,((function (vec__16215,d1,d2){
return (function (item){
var vec__16218 = item_range.call(null,item);
var a = cljs.core.nth.call(null,vec__16218,(0),null);
var b = cljs.core.nth.call(null,vec__16218,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4037__auto__ = d1;
var y__4038__auto__ = a;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})(),i], null)),mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4040__auto__ = d2;
var y__4041__auto__ = b;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),i], null)),item], null);
});})(vec__16215,d1,d2))
,row);
});
;})(vec__16215,d1,d2))
});
thi.ng.geom.viz.core.svg_stacked_interval_plot = (function thi$ng$geom$viz$core$svg_stacked_interval_plot(p__16222,p__16223){
var map__16224 = p__16222;
var map__16224__$1 = ((((!((map__16224 == null)))?(((((map__16224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16224):map__16224);
var x_axis = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var map__16225 = p__16223;
var map__16225__$1 = ((((!((map__16225 == null)))?(((((map__16225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16225):map__16225);
var values = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16224,map__16224__$1,x_axis,y_axis,map__16225,map__16225__$1,values,attribs){
return (function (p__16228){
var vec__16229 = p__16228;
var a = cljs.core.nth.call(null,vec__16229,(0),null);
var b = cljs.core.nth.call(null,vec__16229,(1),null);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,a),thi.ng.geom.vector.vec2.call(null,b));
});})(map__16224,map__16224__$1,x_axis,y_axis,map__16225,map__16225__$1,values,attribs))
);
var item_range = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"item-range","item-range",1733769894),cljs.core.identity);
var offset = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,shape,cljs.core.mapcat.call(null,thi.ng.geom.viz.core.process_interval_row.call(null,item_range,mapper,domain),cljs.core.range.call(null,offset,1000000.0),thi.ng.geom.viz.core.compute_row_stacking.call(null,item_range,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_range),cljs.core.filter.call(null,((function (scale_x,scale_y,domain,mapper,map__16224,map__16224__$1,x_axis,y_axis,map__16225,map__16225__$1,values,attribs,shape,item_range,offset){
return (function (p1__16221_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,domain,item_range.call(null,p1__16221_SHARP_));
});})(scale_x,scale_y,domain,mapper,map__16224,map__16224__$1,x_axis,y_axis,map__16225,map__16225__$1,values,attribs,shape,item_range,offset))
,values))))));
});
thi.ng.geom.viz.core.svg_axis_STAR_ = (function thi$ng$geom$viz$core$svg_axis_STAR_(p__16232,axis,tick1_fn,tick2_fn,label_fn){
var map__16233 = p__16232;
var map__16233__$1 = ((((!((map__16233 == null)))?(((((map__16233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16233):map__16233);
var major = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var attribs = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000"], null),attribs),cljs.core.seq.call(null,cljs.core.map.call(null,tick1_fn,major)),cljs.core.seq.call(null,cljs.core.map.call(null,tick2_fn,minor)),cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),label_style),cljs.core.mapv.call(null,label_fn,major)),axis);
});
thi.ng.geom.viz.core.svg_x_axis_cartesian = (function thi$ng$geom$viz$core$svg_x_axis_cartesian(p__16238){
var map__16239 = p__16238;
var map__16239__$1 = ((((!((map__16239 == null)))?(((((map__16239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16239):map__16239);
var spec = map__16239__$1;
var vec__16240 = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__16240,(0),null);
var r2 = cljs.core.nth.call(null,vec__16240,(1),null);
var scale = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var y_major = (pos + major_size);
var y_minor = (pos + minor_size);
var y_label = (pos + label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,r1,pos),thi.ng.geom.vector.vec2.call(null,r2,pos)),((function (y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__16235_SHARP_){
var x = scale.call(null,p1__16235_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,pos),thi.ng.geom.vector.vec2.call(null,x,y_major));
});})(y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__16236_SHARP_){
var x = scale.call(null,p1__16236_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,pos),thi.ng.geom.vector.vec2.call(null,x,y_minor));
});})(y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__16237_SHARP_){
return label.call(null,thi.ng.geom.vector.vec2.call(null,scale.call(null,p1__16237_SHARP_),y_label),p1__16237_SHARP_);
});})(y_major,y_minor,y_label,map__16239,map__16239__$1,spec,vec__16240,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
);
});
thi.ng.geom.viz.core.svg_y_axis_cartesian = (function thi$ng$geom$viz$core$svg_y_axis_cartesian(p__16247){
var map__16248 = p__16247;
var map__16248__$1 = ((((!((map__16248 == null)))?(((((map__16248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16248):map__16248);
var spec = map__16248__$1;
var vec__16249 = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__16249,(0),null);
var r2 = cljs.core.nth.call(null,vec__16249,(1),null);
var scale = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var label_y = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var x_major = (pos - major_size);
var x_minor = (pos - minor_size);
var x_label = (pos - label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,r1),thi.ng.geom.vector.vec2.call(null,pos,r2)),((function (x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__16244_SHARP_){
var y = scale.call(null,p1__16244_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,y),thi.ng.geom.vector.vec2.call(null,x_major,y));
});})(x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__16245_SHARP_){
var y = scale.call(null,p1__16245_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,y),thi.ng.geom.vector.vec2.call(null,x_minor,y));
});})(x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__16246_SHARP_){
return label.call(null,thi.ng.geom.vector.vec2.call(null,x_label,(scale.call(null,p1__16246_SHARP_) + label_y)),p1__16246_SHARP_);
});})(x_major,x_minor,x_label,map__16248,map__16248__$1,spec,vec__16249,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
);
});
thi.ng.geom.viz.core.select_ticks = (function thi$ng$geom$viz$core$select_ticks(axis,minor_QMARK_){
if(cljs.core.truth_(minor_QMARK_)){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"minor","minor",-608536071).cljs$core$IFn$_invoke$arity$1(axis),new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis));
} else {
return new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis);
}
});
thi.ng.geom.viz.core.svg_axis_grid2d_cartesian = (function thi$ng$geom$viz$core$svg_axis_grid2d_cartesian(x_axis,y_axis,p__16255){
var map__16256 = p__16255;
var map__16256__$1 = ((((!((map__16256 == null)))?(((((map__16256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16256):map__16256);
var attribs = cljs.core.get.call(null,map__16256__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__16256__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__16256__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var vec__16258 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__16258,(0),null);
var x2 = cljs.core.nth.call(null,vec__16258,(1),null);
var vec__16261 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__16261,(0),null);
var y2 = cljs.core.nth.call(null,vec__16261,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__16258,x1,x2,vec__16261,y1,y2,scale_x,scale_y,map__16256,map__16256__$1,attribs,minor_x,minor_y){
return (function (p1__16253_SHARP_){
var x = scale_x.call(null,p1__16253_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,y1),thi.ng.geom.vector.vec2.call(null,x,y2));
});})(vec__16258,x1,x2,vec__16261,y1,y2,scale_x,scale_y,map__16256,map__16256__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__16258,x1,x2,vec__16261,y1,y2,scale_x,scale_y,map__16256,map__16256__$1,attribs,minor_x,minor_y){
return (function (p1__16254_SHARP_){
var y = scale_y.call(null,p1__16254_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x1,y),thi.ng.geom.vector.vec2.call(null,x2,y));
});})(vec__16258,x1,x2,vec__16261,y1,y2,scale_x,scale_y,map__16256,map__16256__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_cartesian = (function thi$ng$geom$viz$core$svg_plot2d_cartesian(p__16264){
var map__16265 = p__16264;
var map__16265__$1 = ((((!((map__16265 == null)))?(((((map__16265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16265):map__16265);
var opts = map__16265__$1;
var x_axis = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_cartesian.call(null,x_axis,y_axis,grid):null),cljs.core.map.call(null,((function (opts__$1,map__16265,map__16265__$1,opts,x_axis,y_axis,grid,data){
return (function (spec){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec).call(null,opts__$1,spec);
});})(opts__$1,map__16265,map__16265__$1,opts,x_axis,y_axis,grid,data))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_cartesian.call(null,x_axis):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_cartesian.call(null,y_axis):null));
});
thi.ng.geom.viz.core.svg_x_axis_polar = (function thi$ng$geom$viz$core$svg_x_axis_polar(p__16270){
var map__16271 = p__16270;
var map__16271__$1 = ((((!((map__16271 == null)))?(((((map__16271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16271):map__16271);
var x_axis = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var project = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var circle = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var origin = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__16273 = x_axis;
var map__16273__$1 = ((((!((map__16273 == null)))?(((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16273):map__16273);
var scale = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x_axis);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__16274 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var r1 = cljs.core.nth.call(null,vec__16274,(0),null);
var r2 = cljs.core.nth.call(null,vec__16274,(1),null);
var o = origin;
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,x_axis,(cljs.core.truth_(circle)?thi.ng.geom.svg.core.circle.call(null,o,pos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)):thi.ng.geom.svg.core.arc.call(null,o,pos,r1,r2,(thi.ng.math.core.abs_diff.call(null,r1,r2) > thi.ng.math.core.PI),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))),((function (map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin){
return (function (p1__16267_SHARP_){
var x = scale.call(null,p1__16267_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + major_size)], null)));
});})(map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin))
,((function (map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin){
return (function (p1__16268_SHARP_){
var x = scale.call(null,p1__16268_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + minor_size)], null)));
});})(map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin))
,((function (map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin){
return (function (p1__16269_SHARP_){
var x = scale.call(null,p1__16269_SHARP_);
return label.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + label_dist)], null)),p1__16269_SHARP_);
});})(map__16273,map__16273__$1,scale,major_size,minor_size,label_dist,pos,label,vec__16274,r1,r2,o,map__16271,map__16271__$1,x_axis,project,circle,origin))
);
});
thi.ng.geom.viz.core.svg_y_axis_polar = (function thi$ng$geom$viz$core$svg_y_axis_polar(p__16281){
var map__16282 = p__16281;
var map__16282__$1 = ((((!((map__16282 == null)))?(((((map__16282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16282):map__16282);
var y_axis = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16284 = y_axis;
var map__16284__$1 = ((((!((map__16284 == null)))?(((((map__16284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16284):map__16284);
var scale = cljs.core.get.call(null,map__16284__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var label_y = cljs.core.get.call(null,map__16284__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__16284__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(y_axis);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__16285 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var r1 = cljs.core.nth.call(null,vec__16285,(0),null);
var r2 = cljs.core.nth.call(null,vec__16285,(1),null);
var a = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null));
var b = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null));
var nl = thi.ng.math.core.normalize.call(null,thi.ng.geom.core.normal.call(null,thi.ng.math.core._.call(null,a,b)),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526).cljs$core$IFn$_invoke$arity$1(y_axis));
var n1 = thi.ng.math.core.normalize.call(null,nl,new cljs.core.Keyword(null,"major-size","major-size",-698672375).cljs$core$IFn$_invoke$arity$1(y_axis));
var n2 = thi.ng.math.core.normalize.call(null,nl,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109).cljs$core$IFn$_invoke$arity$1(y_axis));
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,y_axis,thi.ng.geom.svg.core.line.call(null,a,b),((function (map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project){
return (function (p1__16278_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__16278_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.math.core._PLUS_.call(null,p,n1));
});})(map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project))
,((function (map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project){
return (function (p1__16279_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__16279_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.math.core._PLUS_.call(null,p,n2));
});})(map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project))
,((function (map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project){
return (function (p1__16280_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,(scale.call(null,p1__16280_SHARP_) + label_y)], null));
return label.call(null,thi.ng.math.core._PLUS_.call(null,p,nl),p1__16280_SHARP_);
});})(map__16284,map__16284__$1,scale,label_y,pos,label,vec__16285,r1,r2,a,b,nl,n1,n2,map__16282,map__16282__$1,y_axis,project))
);
});
thi.ng.geom.viz.core.svg_axis_grid2d_polar = (function thi$ng$geom$viz$core$svg_axis_grid2d_polar(p__16291){
var map__16292 = p__16291;
var map__16292__$1 = ((((!((map__16292 == null)))?(((((map__16292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);
var map__16293 = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__16293__$1 = ((((!((map__16293 == null)))?(((((map__16293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16293):map__16293);
var attribs = cljs.core.get.call(null,map__16293__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__16293__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__16293__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var x_axis = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var origin = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var circle = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var project = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var vec__16296 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__16296,(0),null);
var x2 = cljs.core.nth.call(null,vec__16296,(1),null);
var vec__16299 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__16299,(0),null);
var y2 = cljs.core.nth.call(null,vec__16299,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var great_QMARK_ = (thi.ng.math.core.abs_diff.call(null,x1,x2) > thi.ng.math.core.PI);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__16296,x1,x2,vec__16299,y1,y2,scale_x,scale_y,great_QMARK_,map__16292,map__16292__$1,map__16293,map__16293__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__16289_SHARP_){
var x = scale_x.call(null,p1__16289_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null)));
});})(vec__16296,x1,x2,vec__16299,y1,y2,scale_x,scale_y,great_QMARK_,map__16292,map__16292__$1,map__16293,map__16293__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__16296,x1,x2,vec__16299,y1,y2,scale_x,scale_y,great_QMARK_,map__16292,map__16292__$1,map__16293,map__16293__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__16290_SHARP_){
var y = scale_y.call(null,p1__16290_SHARP_);
if(cljs.core.truth_(circle)){
return thi.ng.geom.svg.core.circle.call(null,origin,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
} else {
return thi.ng.geom.svg.core.arc.call(null,origin,y,x1,x2,great_QMARK_,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
}
});})(vec__16296,x1,x2,vec__16299,y1,y2,scale_x,scale_y,great_QMARK_,map__16292,map__16292__$1,map__16293,map__16293__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_polar = (function thi$ng$geom$viz$core$svg_plot2d_polar(p__16302){
var map__16303 = p__16302;
var map__16303__$1 = ((((!((map__16303 == null)))?(((((map__16303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16303):map__16303);
var spec = map__16303__$1;
var x_axis = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var origin = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var spec__$1 = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.viz.core.polar_projection.call(null,origin));
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_polar.call(null,spec__$1):null),cljs.core.map.call(null,((function (spec__$1,map__16303,map__16303__$1,spec,x_axis,y_axis,grid,data,origin){
return (function (spec_SINGLEQUOTE_){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec_SINGLEQUOTE_).call(null,spec__$1,spec_SINGLEQUOTE_);
});})(spec__$1,map__16303,map__16303__$1,spec,x_axis,y_axis,grid,data,origin))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_polar.call(null,spec__$1):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_polar.call(null,spec__$1):null));
});

//# sourceMappingURL=core.js.map
