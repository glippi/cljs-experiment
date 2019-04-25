// Compiled by ClojureScript 1.10.339 {}
goog.provide('thi.ng.ndarray.contours');
goog.require('cljs.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.typedarrays.core');
thi.ng.ndarray.contours.level_crossing = (function thi$ng$ndarray$contours$level_crossing(offset,a,b,level){
var da = (a - level);
var db = (b - level);
if(!(cljs.core._EQ_.call(null,(da >= 0.0),(db >= 0.0)))){
return (offset + (0.5 + (0.5 * ((da + db) / (da - db)))));
} else {
return null;
}
});
thi.ng.ndarray.contours.level_crossings1d = (function thi$ng$ndarray$contours$level_crossings1d(mat,shape,level){
var iter__4324__auto__ = (function thi$ng$ndarray$contours$level_crossings1d_$_iter__15874(s__15875){
return (new cljs.core.LazySeq(null,(function (){
var s__15875__$1 = s__15875;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15875__$1);
if(temp__5457__auto__){
var s__15875__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15875__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15875__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15877 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15876 = (0);
while(true){
if((i__15876 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__15876);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
cljs.core.chunk_append.call(null,b__15877,x_SINGLEQUOTE_);

var G__15878 = (i__15876 + (1));
i__15876 = G__15878;
continue;
} else {
var G__15879 = (i__15876 + (1));
i__15876 = G__15879;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15877),thi$ng$ndarray$contours$level_crossings1d_$_iter__15874.call(null,cljs.core.chunk_rest.call(null,s__15875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15877),null);
}
} else {
var x = cljs.core.first.call(null,s__15875__$2);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
return cljs.core.cons.call(null,x_SINGLEQUOTE_,thi$ng$ndarray$contours$level_crossings1d_$_iter__15874.call(null,cljs.core.rest.call(null,s__15875__$2)));
} else {
var G__15880 = cljs.core.rest.call(null,s__15875__$2);
s__15875__$1 = G__15880;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((typeof shape === 'number')?shape:cljs.core.first.call(null,shape)) - (1))));
});
thi.ng.ndarray.contours.level_crossings2d_x = (function thi$ng$ndarray$contours$level_crossings2d_x(var_args){
var G__15883 = arguments.length;
switch (G__15883) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__15884,level){
var vec__15885 = p__15884;
var sy = cljs.core.nth.call(null,vec__15885,(0),null);
var sx = cljs.core.nth.call(null,vec__15885,(1),null);
return cljs.core.mapcat.call(null,((function (vec__15885,sy,sx){
return (function (y){
return cljs.core.map.call(null,((function (vec__15885,sy,sx){
return (function (p1__15881_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[y,p1__15881_SHARP_],null));
});})(vec__15885,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,y,null),sx,level));
});})(vec__15885,sy,sx))
,cljs.core.range.call(null,sy));
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d_y = (function thi$ng$ndarray$contours$level_crossings2d_y(var_args){
var G__15891 = arguments.length;
switch (G__15891) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__15892,level){
var vec__15893 = p__15892;
var sy = cljs.core.nth.call(null,vec__15893,(0),null);
var sx = cljs.core.nth.call(null,vec__15893,(1),null);
return cljs.core.mapcat.call(null,((function (vec__15893,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__15893,sy,sx){
return (function (p1__15889_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15889_SHARP_,x],null));
});})(vec__15893,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,x),sy,level));
});})(vec__15893,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d = (function thi$ng$ndarray$contours$level_crossings2d(var_args){
var G__15898 = arguments.length;
switch (G__15898) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings2d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_x = (function thi$ng$ndarray$contours$level_crossings3d_x(var_args){
var G__15902 = arguments.length;
switch (G__15902) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__15903,level){
var vec__15904 = p__15903;
var sz = cljs.core.nth.call(null,vec__15904,(0),null);
var sy = cljs.core.nth.call(null,vec__15904,(1),null);
var sx = cljs.core.nth.call(null,vec__15904,(2),null);
return cljs.core.mapcat.call(null,((function (vec__15904,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__15904,sz,sy,sx){
return (function (p1__15900_SHARP_){
return cljs.core.cons.call(null,z,p1__15900_SHARP_);
});})(vec__15904,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_x.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__15904,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_y = (function thi$ng$ndarray$contours$level_crossings3d_y(var_args){
var G__15910 = arguments.length;
switch (G__15910) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__15911,level){
var vec__15912 = p__15911;
var sz = cljs.core.nth.call(null,vec__15912,(0),null);
var sy = cljs.core.nth.call(null,vec__15912,(1),null);
var sx = cljs.core.nth.call(null,vec__15912,(2),null);
return cljs.core.mapcat.call(null,((function (vec__15912,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__15912,sz,sy,sx){
return (function (p1__15908_SHARP_){
return cljs.core.cons.call(null,z,p1__15908_SHARP_);
});})(vec__15912,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__15912,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_z = (function thi$ng$ndarray$contours$level_crossings3d_z(var_args){
var G__15918 = arguments.length;
switch (G__15918) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__15919,level){
var vec__15920 = p__15919;
var sz = cljs.core.nth.call(null,vec__15920,(0),null);
var sy = cljs.core.nth.call(null,vec__15920,(1),null);
var sx = cljs.core.nth.call(null,vec__15920,(2),null);
return cljs.core.mapcat.call(null,((function (vec__15920,sz,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__15920,sz,sy,sx){
return (function (p1__15916_SHARP_){
return cljs.core.conj.call(null,p1__15916_SHARP_,x);
});})(vec__15920,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sz,sy], null),level));
});})(vec__15920,sz,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d = (function thi$ng$ndarray$contours$level_crossings3d(var_args){
var G__15925 = arguments.length;
switch (G__15925) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings3d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.edge_index_2d = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),null], null);
thi.ng.ndarray.contours.next_edges_2d = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
thi.ng.ndarray.contours.set_border_2d = (function thi$ng$ndarray$contours$set_border_2d(mat,x){
var vec__15927 = thi.ng.ndarray.core.shape.call(null,mat);
var h = cljs.core.nth.call(null,vec__15927,(0),null);
var w = cljs.core.nth.call(null,vec__15927,(1),null);
var h_SINGLEQUOTE_ = (h - (1));
var w_SINGLEQUOTE_ = (w - (1));
var l = thi.ng.ndarray.core.pick.call(null,mat,null,(0));
var r = thi.ng.ndarray.core.pick.call(null,mat,null,w_SINGLEQUOTE_);
var t = thi.ng.ndarray.core.pick.call(null,mat,(0),null);
var b = thi.ng.ndarray.core.pick.call(null,mat,h_SINGLEQUOTE_,null);
var i_15930 = w_SINGLEQUOTE_;
while(true){
if((i_15930 >= (0))){
thi.ng.ndarray.core.set_at.call(null,t,i_15930,x);

thi.ng.ndarray.core.set_at.call(null,b,i_15930,x);

var G__15931 = (i_15930 - (1));
i_15930 = G__15931;
continue;
} else {
}
break;
}

var i_15932 = h_SINGLEQUOTE_;
while(true){
if((i_15932 >= (0))){
thi.ng.ndarray.core.set_at.call(null,l,i_15932,x);

thi.ng.ndarray.core.set_at.call(null,r,i_15932,x);

var G__15933 = (i_15932 - (1));
i_15932 = G__15933;
continue;
} else {
}
break;
}

return mat;
});
thi.ng.ndarray.contours.encode_crossings_2d = (function thi$ng$ndarray$contours$encode_crossings_2d(src,isoval){
var out = thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"int8","int8",-1834023920),thi.ng.typedarrays.core.int8.call(null,thi.ng.ndarray.core.size.call(null,src)),thi.ng.ndarray.core.shape.call(null,src));
var iso_QMARK_ = ((function (out){
return (function (y,x,m){
if((thi.ng.ndarray.core.get_at.call(null,src,y,x) < isoval)){
return m;
} else {
return (0);
}
});})(out))
;
var pos = thi.ng.ndarray.core.position_seq.call(null,thi.ng.ndarray.core.truncate_h.call(null,src,(-1),(-1)));
while(true){
if(cljs.core.truth_(pos)){
var vec__15934 = cljs.core.first.call(null,pos);
var y = cljs.core.nth.call(null,vec__15934,(0),null);
var x = cljs.core.nth.call(null,vec__15934,(1),null);
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
thi.ng.ndarray.core.set_at.call(null,out,y,x,(((iso_QMARK_.call(null,y,x,(8)) | iso_QMARK_.call(null,y,x_SINGLEQUOTE_,(4))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x_SINGLEQUOTE_,(2))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x,(1))));

var G__15937 = cljs.core.next.call(null,pos);
pos = G__15937;
continue;
} else {
return out;
}
break;
}
});
thi.ng.ndarray.contours.mean_cell_value_2d = (function thi$ng$ndarray$contours$mean_cell_value_2d(src,y,x){
return (((thi.ng.ndarray.core.get_at.call(null,src,y,x) + thi.ng.ndarray.core.get_at.call(null,src,y,(x + (1)))) + (thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),x) + thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),(x + (1))))) * 0.25);
});
thi.ng.ndarray.contours.process_saddle5 = (function thi$ng$ndarray$contours$process_saddle5(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
} else {
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(7)], null);
}
}
});
thi.ng.ndarray.contours.process_saddle10 = (function thi$ng$ndarray$contours$process_saddle10(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((0) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8)], null);
}
} else {
if(((2) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(14)], null);
}
}
});
thi.ng.ndarray.contours.mix2d = (function thi$ng$ndarray$contours$mix2d(src,y1,x1,y2,x2,iso){
var a = thi.ng.ndarray.core.get_at.call(null,src,y1,x1);
var b = thi.ng.ndarray.core.get_at.call(null,src,y2,x2);
if((a === b)){
return (0);
} else {
return ((a - iso) / (a - b));
}
});
thi.ng.ndarray.contours.contour_vertex_2d = (function thi$ng$ndarray$contours$contour_vertex_2d(src,y,x,to,iso){
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
var G__15938 = (to | (0));
switch (G__15938) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y,x_SINGLEQUOTE_,iso))], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x_SINGLEQUOTE_,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso)),x_SINGLEQUOTE_], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_SINGLEQUOTE_,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y_SINGLEQUOTE_,x,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso))], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y_SINGLEQUOTE_,x,iso)),x], null);

break;
default:
return null;

}
});
thi.ng.ndarray.contours.find_contours_2d = (function thi$ng$ndarray$contours$find_contours_2d(src,isoval){
var vec__15940 = thi.ng.ndarray.core.shape.call(null,src);
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15940,(0),null);
var w_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15940,(1),null);
var h_SINGLEQUOTE___$1 = (h_SINGLEQUOTE_ - (1));
var w_SINGLEQUOTE___$1 = (w_SINGLEQUOTE_ - (1));
var coded = thi.ng.ndarray.contours.encode_crossings_2d.call(null,src,isoval);
var contours = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var pos = thi.ng.ndarray.core.position_seq.call(null,coded);
var curr = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var to = null;
var p = null;
while(true){
if(cljs.core.truth_(pos)){
var from = to;
var vec__15943 = (cljs.core.truth_(p)?p:cljs.core.first.call(null,pos));
var y = cljs.core.nth.call(null,vec__15943,(0),null);
var x = cljs.core.nth.call(null,vec__15943,(1),null);
if((((x >= w_SINGLEQUOTE___$1)) || ((y >= h_SINGLEQUOTE___$1)))){
var G__15953 = cljs.core.next.call(null,pos);
var G__15954 = curr;
var G__15955 = to;
var G__15956 = null;
pos = G__15953;
curr = G__15954;
to = G__15955;
p = G__15956;
continue;
} else {
var id = thi.ng.ndarray.core.get_at.call(null,coded,y,x);
var vec__15946 = (function (){var G__15949 = (id | (0));
switch (G__15949) {
case (5):
return thi.ng.ndarray.contours.process_saddle5.call(null,src,y,x,isoval,from);

break;
case (10):
return thi.ng.ndarray.contours.process_saddle10.call(null,src,y,x,isoval,from);

break;
default:
return thi.ng.ndarray.contours.edge_index_2d.call(null,(id | (0)));

}
})();
var to__$1 = cljs.core.nth.call(null,vec__15946,(0),null);
var clear = cljs.core.nth.call(null,vec__15946,(1),null);
var curr__$1 = (cljs.core.truth_((function (){var and__3938__auto__ = (from == null);
if(and__3938__auto__){
var and__3938__auto____$1 = to__$1;
if(cljs.core.truth_(and__3938__auto____$1)){
return (cljs.core.count.call(null,curr) > (0));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?(function (){
cljs.core._vreset_BANG_.call(null,contours,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));

return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
})()
:curr);
if(cljs.core.truth_(clear)){
thi.ng.ndarray.core.set_at.call(null,coded,y,x,clear);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = to__$1;
if(cljs.core.truth_(and__3938__auto__)){
return (to__$1 >= (0));
} else {
return and__3938__auto__;
}
})())){
var vertex = thi.ng.ndarray.contours.contour_vertex_2d.call(null,src,y,x,to__$1,isoval);
var vec__15950 = thi.ng.ndarray.contours.next_edges_2d.call(null,to__$1);
var oy = cljs.core.nth.call(null,vec__15950,(0),null);
var ox = cljs.core.nth.call(null,vec__15950,(1),null);
var G__15958 = cljs.core.next.call(null,pos);
var G__15959 = cljs.core.conj_BANG_.call(null,curr__$1,vertex);
var G__15960 = to__$1;
var G__15961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + oy),(x + ox)], null);
pos = G__15958;
curr = G__15959;
to = G__15960;
p = G__15961;
continue;
} else {
var G__15962 = cljs.core.next.call(null,pos);
var G__15963 = curr__$1;
var G__15964 = to__$1;
var G__15965 = null;
pos = G__15962;
curr = G__15963;
to = G__15964;
p = G__15965;
continue;
}
}
} else {
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,cljs.core.deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));
}
break;
}
});

//# sourceMappingURL=contours.js.map
