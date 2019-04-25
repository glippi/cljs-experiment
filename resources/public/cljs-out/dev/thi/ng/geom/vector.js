// Compiled by ClojureScript 1.10.339 {}
goog.provide('thi.ng.geom.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13366_13715 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13367_13716 = v.buf;
(self__.buf[(0)] = ((G__13366_13715[(0)]) - (G__13367_13716[(0)])));

(self__.buf[(1)] = ((G__13366_13715[(1)]) - (G__13367_13716[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__13366_13715[(0)]) - v));

(self__.buf[(1)] = ((G__13366_13715[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__13366_13715[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__13366_13715[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13375_13717 = typeof v1 === 'number';
var G__13376_13718 = typeof v2 === 'number';
if(((G__13375_13717)?G__13376_13718:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__13377_13719 = ((!(G__13375_13717))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13378_13720 = ((!(G__13376_13718))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13369_13721 = (cljs.core.truth_(G__13377_13719)?v1.buf:null);
var G__13370_13722 = (cljs.core.truth_(G__13378_13720)?v2.buf:null);
var G__13371_13723 = (cljs.core.truth_(G__13377_13719)?(G__13369_13721[(0)]):((G__13375_13717)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13372_13724 = (cljs.core.truth_(G__13377_13719)?(G__13369_13721[(1)]):((G__13375_13717)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13373_13725 = (cljs.core.truth_(G__13378_13720)?(G__13370_13722[(0)]):((G__13376_13718)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13374_13726 = (cljs.core.truth_(G__13378_13720)?(G__13370_13722[(1)]):((G__13376_13718)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__13371_13723) - G__13373_13725));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__13372_13724) - G__13374_13726));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13379_13727 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13380_13728 = v.buf;
(self__.buf[(0)] = ((G__13379_13727[(0)]) * (G__13380_13728[(0)])));

(self__.buf[(1)] = ((G__13379_13727[(1)]) * (G__13380_13728[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__13379_13727[(0)]) * v));

(self__.buf[(1)] = ((G__13379_13727[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__13379_13727[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__13379_13727[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13388_13729 = typeof v1 === 'number';
var G__13389_13730 = typeof v2 === 'number';
if(((G__13388_13729)?G__13389_13730:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__13390_13731 = ((!(G__13388_13729))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13391_13732 = ((!(G__13389_13730))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13382_13733 = (cljs.core.truth_(G__13390_13731)?v1.buf:null);
var G__13383_13734 = (cljs.core.truth_(G__13391_13732)?v2.buf:null);
var G__13384_13735 = (cljs.core.truth_(G__13390_13731)?(G__13382_13733[(0)]):((G__13388_13729)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13385_13736 = (cljs.core.truth_(G__13390_13731)?(G__13382_13733[(1)]):((G__13388_13729)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13386_13737 = (cljs.core.truth_(G__13391_13732)?(G__13383_13734[(0)]):((G__13389_13730)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13387_13738 = (cljs.core.truth_(G__13391_13732)?(G__13383_13734[(1)]):((G__13389_13730)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__13384_13735) * G__13386_13737));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__13385_13736) * G__13387_13738));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__13401_13739 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13402_13740 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13403_13741 = ((!(G__13401_13739))?typeof a === 'number':null);
var G__13404_13742 = ((!(G__13402_13740))?typeof b === 'number':null);
var G__13392_13743 = self__.buf;
var G__13393_13744 = ((G__13401_13739)?a.buf:null);
var G__13394_13745 = ((G__13402_13740)?b.buf:null);
var G__13395_13746 = (G__13392_13743[(0)]);
var G__13396_13747 = (G__13392_13743[(1)]);
var G__13397_13748 = ((G__13401_13739)?(G__13393_13744[(0)]):(cljs.core.truth_(G__13403_13741)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__13398_13749 = ((G__13401_13739)?(G__13393_13744[(1)]):(cljs.core.truth_(G__13403_13741)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__13399_13750 = ((G__13402_13740)?(G__13394_13745[(0)]):(cljs.core.truth_(G__13404_13742)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__13400_13751 = ((G__13402_13740)?(G__13394_13745[(1)]):(cljs.core.truth_(G__13404_13742)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__13395_13746 - G__13397_13748) * G__13399_13750));

(self__.buf[(1)] = ((G__13396_13747 - G__13398_13749) * G__13400_13751));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__13414_13752 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13415_13753 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13416_13754 = ((!(G__13414_13752))?typeof a === 'number':null);
var G__13417_13755 = ((!(G__13415_13753))?typeof b === 'number':null);
var G__13405_13756 = self__.buf;
var G__13406_13757 = ((G__13414_13752)?a.buf:null);
var G__13407_13758 = ((G__13415_13753)?b.buf:null);
var G__13408_13759 = (G__13405_13756[(0)]);
var G__13409_13760 = (G__13405_13756[(1)]);
var G__13410_13761 = ((G__13414_13752)?(G__13406_13757[(0)]):(cljs.core.truth_(G__13416_13754)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__13411_13762 = ((G__13414_13752)?(G__13406_13757[(1)]):(cljs.core.truth_(G__13416_13754)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__13412_13763 = ((G__13415_13753)?(G__13407_13758[(0)]):(cljs.core.truth_(G__13417_13755)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__13413_13764 = ((G__13415_13753)?(G__13407_13758[(1)]):(cljs.core.truth_(G__13417_13755)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__13408_13759 * G__13410_13761) - G__13412_13763));

(self__.buf[(1)] = ((G__13409_13760 * G__13411_13762) - G__13413_13764));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__13427_13765 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13428_13766 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13429_13767 = ((!(G__13427_13765))?typeof a === 'number':null);
var G__13430_13768 = ((!(G__13428_13766))?typeof b === 'number':null);
var G__13418_13769 = self__.buf;
var G__13419_13770 = ((G__13427_13765)?a.buf:null);
var G__13420_13771 = ((G__13428_13766)?b.buf:null);
var G__13421_13772 = (G__13418_13769[(0)]);
var G__13422_13773 = (G__13418_13769[(1)]);
var G__13423_13774 = ((G__13427_13765)?(G__13419_13770[(0)]):(cljs.core.truth_(G__13429_13767)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__13424_13775 = ((G__13427_13765)?(G__13419_13770[(1)]):(cljs.core.truth_(G__13429_13767)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__13425_13776 = ((G__13428_13766)?(G__13420_13771[(0)]):(cljs.core.truth_(G__13430_13768)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__13426_13777 = ((G__13428_13766)?(G__13420_13771[(1)]):(cljs.core.truth_(G__13430_13768)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__13421_13772 * G__13423_13774) + G__13425_13776));

(self__.buf[(1)] = ((G__13422_13773 * G__13424_13775) + G__13426_13777));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13431_13778 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13432_13779 = v.buf;
(self__.buf[(0)] = ((G__13431_13778[(0)]) / (G__13432_13779[(0)])));

(self__.buf[(1)] = ((G__13431_13778[(1)]) / (G__13432_13779[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__13431_13778[(0)]) / v));

(self__.buf[(1)] = ((G__13431_13778[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__13431_13778[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__13431_13778[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13440_13780 = typeof v1 === 'number';
var G__13441_13781 = typeof v2 === 'number';
if(((G__13440_13780)?G__13441_13781:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__13442_13782 = ((!(G__13440_13780))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13443_13783 = ((!(G__13441_13781))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13434_13784 = (cljs.core.truth_(G__13442_13782)?v1.buf:null);
var G__13435_13785 = (cljs.core.truth_(G__13443_13783)?v2.buf:null);
var G__13436_13786 = (cljs.core.truth_(G__13442_13782)?(G__13434_13784[(0)]):((G__13440_13780)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13437_13787 = (cljs.core.truth_(G__13442_13782)?(G__13434_13784[(1)]):((G__13440_13780)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13438_13788 = (cljs.core.truth_(G__13443_13783)?(G__13435_13785[(0)]):((G__13441_13781)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13439_13789 = (cljs.core.truth_(G__13443_13783)?(G__13435_13785[(1)]):((G__13441_13781)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__13436_13786) / G__13438_13788));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__13437_13787) / G__13439_13789));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13444_13790 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13445_13791 = v.buf;
(self__.buf[(0)] = ((G__13444_13790[(0)]) + (G__13445_13791[(0)])));

(self__.buf[(1)] = ((G__13444_13790[(1)]) + (G__13445_13791[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__13444_13790[(0)]) + v));

(self__.buf[(1)] = ((G__13444_13790[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__13444_13790[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__13444_13790[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13453_13792 = typeof v1 === 'number';
var G__13454_13793 = typeof v2 === 'number';
if(((G__13453_13792)?G__13454_13793:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__13455_13794 = ((!(G__13453_13792))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13456_13795 = ((!(G__13454_13793))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13447_13796 = (cljs.core.truth_(G__13455_13794)?v1.buf:null);
var G__13448_13797 = (cljs.core.truth_(G__13456_13795)?v2.buf:null);
var G__13449_13798 = (cljs.core.truth_(G__13455_13794)?(G__13447_13796[(0)]):((G__13453_13792)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13450_13799 = (cljs.core.truth_(G__13455_13794)?(G__13447_13796[(1)]):((G__13453_13792)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13451_13800 = (cljs.core.truth_(G__13456_13795)?(G__13448_13797[(0)]):((G__13454_13793)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13452_13801 = (cljs.core.truth_(G__13456_13795)?(G__13448_13797[(1)]):((G__13454_13793)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__13449_13798) + G__13451_13800));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__13450_13799) + G__13452_13801));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__13466_13802 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13467_13803 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13468_13804 = ((!(G__13466_13802))?typeof a === 'number':null);
var G__13469_13805 = ((!(G__13467_13803))?typeof b === 'number':null);
var G__13457_13806 = self__.buf;
var G__13458_13807 = ((G__13466_13802)?a.buf:null);
var G__13459_13808 = ((G__13467_13803)?b.buf:null);
var G__13460_13809 = (G__13457_13806[(0)]);
var G__13461_13810 = (G__13457_13806[(1)]);
var G__13462_13811 = ((G__13466_13802)?(G__13458_13807[(0)]):(cljs.core.truth_(G__13468_13804)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__13463_13812 = ((G__13466_13802)?(G__13458_13807[(1)]):(cljs.core.truth_(G__13468_13804)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__13464_13813 = ((G__13467_13803)?(G__13459_13808[(0)]):(cljs.core.truth_(G__13469_13805)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__13465_13814 = ((G__13467_13803)?(G__13459_13808[(1)]):(cljs.core.truth_(G__13469_13805)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__13460_13809 + G__13462_13811) * G__13464_13813));

(self__.buf[(1)] = ((G__13461_13810 + G__13463_13812) * G__13465_13814));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)])),"]"].join('');
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13470 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13471 = v.buf;
return (((G__13470[(0)]) * (G__13471[(1)])) - ((G__13470[(1)]) * (G__13471[(0)])));
} else {
return (((G__13470[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__13470[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13472 = self__.buf;
var G__13474 = (G__13472[(0)]);
var G__13475 = (G__13472[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13473 = v.buf;
var G__13476 = (G__13473[(0)]);
var G__13477 = (G__13473[(1)]);
var d = (((G__13474 * G__13476) + (G__13475 * G__13477)) * 2.0);
(b[(0)] = ((G__13476 * d) - G__13474));

(b[(1)] = ((G__13477 * d) - G__13475));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__13476 = cljs.core.nth.call(null,v,(0),0.0);
var G__13477 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__13474 * G__13476) + (G__13475 * G__13477)) * 2.0);
(b[(0)] = ((G__13476 * d) - G__13474));

(b[(1)] = ((G__13477 * d) - G__13475));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13478 = self__.buf;
var G__13480 = (G__13478[(0)]);
var G__13481 = (G__13478[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13479 = v.buf;
var G__13482 = (G__13479[(0)]);
var G__13483 = (G__13479[(1)]);
var dx = (G__13480 - G__13482);
var dy = (G__13481 - G__13483);
return ((dx * dx) + (dy * dy));
} else {
var G__13482 = cljs.core.nth.call(null,v,(0),0.0);
var G__13483 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__13480 - G__13482);
var dy = (G__13481 - G__13483);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__13484 = self__.buf;
var G__13485 = (G__13484[(0)]);
var G__13486 = (G__13484[(1)]);
(b[(0)] = ((G__13485 * c) - (G__13486 * s)));

(b[(1)] = ((G__13485 * s) + (G__13486 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13487_13815 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13488_13816 = v.buf;
(dest__13230__auto__[(0)] = ((G__13487_13815[(0)]) * (G__13488_13816[(0)])));

(dest__13230__auto__[(1)] = ((G__13487_13815[(1)]) * (G__13488_13816[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13487_13815[(0)]) * v));

(dest__13230__auto__[(1)] = ((G__13487_13815[(1)]) * v));
} else {
(dest__13230__auto__[(0)] = ((G__13487_13815[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13487_13815[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = self__._hash;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__13489 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13490 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__13489[(0)]),(G__13490[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__13489[(1)]),(G__13490[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__13489[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__13489[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__13491 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13492 = v.buf;
return (((G__13491[(0)]) * (G__13492[(0)])) + ((G__13491[(1)]) * (G__13492[(1)])));
} else {
return (((G__13491[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__13491[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13493_13817 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13494_13818 = v.buf;
(dest__13230__auto__[(0)] = ((G__13493_13817[(0)]) + (G__13494_13818[(0)])));

(dest__13230__auto__[(1)] = ((G__13493_13817[(1)]) + (G__13494_13818[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13493_13817[(0)]) + v));

(dest__13230__auto__[(1)] = ((G__13493_13817[(1)]) + v));
} else {
(dest__13230__auto__[(0)] = ((G__13493_13817[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13493_13817[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13495_13819 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13496_13820 = v.buf;
(b[(0)] = (((G__13495_13819[(0)]) + (G__13496_13820[(0)])) * 0.5));

(b[(1)] = (((G__13495_13819[(1)]) + (G__13496_13820[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__13495_13819[(0)]) + v) * 0.5));

(b[(1)] = (((G__13495_13819[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__13495_13819[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__13495_13819[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13506_13821 = (v instanceof thi.ng.geom.vector.Vec2);
var G__13507_13822 = (t instanceof thi.ng.geom.vector.Vec2);
var G__13508_13823 = ((!(G__13506_13821))?typeof v === 'number':null);
var G__13509_13824 = ((!(G__13507_13822))?typeof t === 'number':null);
var G__13497_13825 = self__.buf;
var G__13498_13826 = ((G__13506_13821)?v.buf:null);
var G__13499_13827 = ((G__13507_13822)?t.buf:null);
var G__13500_13828 = (G__13497_13825[(0)]);
var G__13501_13829 = (G__13497_13825[(1)]);
var G__13502_13830 = ((G__13506_13821)?(G__13498_13826[(0)]):(cljs.core.truth_(G__13508_13823)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__13503_13831 = ((G__13506_13821)?(G__13498_13826[(1)]):(cljs.core.truth_(G__13508_13823)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__13504_13832 = ((G__13507_13822)?(G__13499_13827[(0)]):(cljs.core.truth_(G__13509_13824)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__13505_13833 = ((G__13507_13822)?(G__13499_13827[(1)]):(cljs.core.truth_(G__13509_13824)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__13502_13830 - G__13500_13828) * G__13504_13832) + G__13500_13828));

(b[(1)] = (((G__13503_13831 - G__13501_13829) * G__13505_13833) + G__13501_13829));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__13519_13834 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13520_13835 = (c instanceof thi.ng.geom.vector.Vec2);
var G__13521_13836 = ((!(G__13519_13834))?typeof b === 'number':null);
var G__13522_13837 = ((!(G__13520_13835))?typeof c === 'number':null);
var G__13510_13838 = self__.buf;
var G__13511_13839 = ((G__13519_13834)?b.buf:null);
var G__13512_13840 = ((G__13520_13835)?c.buf:null);
var G__13513_13841 = (G__13510_13838[(0)]);
var G__13514_13842 = (G__13510_13838[(1)]);
var G__13515_13843 = ((G__13519_13834)?(G__13511_13839[(0)]):(cljs.core.truth_(G__13521_13836)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__13516_13844 = ((G__13519_13834)?(G__13511_13839[(1)]):(cljs.core.truth_(G__13521_13836)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__13517_13845 = ((G__13520_13835)?(G__13512_13840[(0)]):(cljs.core.truth_(G__13522_13837)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__13518_13846 = ((G__13520_13835)?(G__13512_13840[(1)]):(cljs.core.truth_(G__13522_13837)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_13847 = (((G__13515_13843 - G__13513_13841) * u) + G__13513_13841);
var y1_13848 = (((G__13516_13844 - G__13514_13842) * u) + G__13514_13842);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__13517_13845) * u) + G__13517_13845) - x1_13847) * v) + x1_13847));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__13518_13846) * u) + G__13518_13846) - y1_13848) * v) + y1_13848));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13532_13849 = (v instanceof thi.ng.geom.vector.Vec2);
var G__13533_13850 = (t instanceof thi.ng.geom.vector.Vec2);
var G__13534_13851 = ((!(G__13532_13849))?typeof v === 'number':null);
var G__13535_13852 = ((!(G__13533_13850))?typeof t === 'number':null);
var G__13523_13853 = self__.buf;
var G__13524_13854 = ((G__13532_13849)?v.buf:null);
var G__13525_13855 = ((G__13533_13850)?t.buf:null);
var G__13526_13856 = (G__13523_13853[(0)]);
var G__13527_13857 = (G__13523_13853[(1)]);
var G__13528_13858 = ((G__13532_13849)?(G__13524_13854[(0)]):(cljs.core.truth_(G__13534_13851)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__13529_13859 = ((G__13532_13849)?(G__13524_13854[(1)]):(cljs.core.truth_(G__13534_13851)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__13530_13860 = ((G__13533_13850)?(G__13525_13855[(0)]):(cljs.core.truth_(G__13535_13852)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__13531_13861 = ((G__13533_13850)?(G__13525_13855[(1)]):(cljs.core.truth_(G__13535_13852)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__13526_13856,G__13528_13858,G__13530_13860));

(b[(1)] = f.call(null,G__13527_13857,G__13529_13859,G__13531_13861));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13536_13862 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__13537_13863 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__13537_13863[(0)]),(G__13536_13862[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__13537_13863[(1)]),(G__13536_13862[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__13536_13862[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__13536_13862[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__13536_13862[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__13536_13862[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__13547_13864 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__13548_13865 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__13549_13866 = ((!(G__13547_13864))?typeof e1 === 'number':null);
var G__13550_13867 = ((!(G__13548_13865))?typeof e2 === 'number':null);
var G__13538_13868 = self__.buf;
var G__13539_13869 = ((G__13547_13864)?e1.buf:null);
var G__13540_13870 = ((G__13548_13865)?e2.buf:null);
var G__13541_13871 = (G__13538_13868[(0)]);
var G__13542_13872 = (G__13538_13868[(1)]);
var G__13543_13873 = ((G__13547_13864)?(G__13539_13869[(0)]):(cljs.core.truth_(G__13549_13866)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__13544_13874 = ((G__13547_13864)?(G__13539_13869[(1)]):(cljs.core.truth_(G__13549_13866)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__13545_13875 = ((G__13548_13865)?(G__13540_13870[(0)]):(cljs.core.truth_(G__13550_13867)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__13546_13876 = ((G__13548_13865)?(G__13540_13870[(1)]):(cljs.core.truth_(G__13550_13867)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__13543_13873,G__13545_13875,G__13541_13871));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__13543_13873,G__13546_13876,G__13542_13872));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k < (2))));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k === (0))) || ((k === (1))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13551_13877 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13552_13878 = v.buf;
(dest__13230__auto__[(0)] = (function (){var a__8254__auto__ = (G__13551_13877[(0)]);
var b__8255__auto__ = (G__13552_13878[(0)]);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8254__auto__ = (G__13551_13877[(1)]);
var b__8255__auto__ = (G__13552_13878[(1)]);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = (function (){var a__8254__auto__ = (G__13551_13877[(0)]);
var b__8255__auto__ = v;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8254__auto__ = (G__13551_13877[(1)]);
var b__8255__auto__ = v;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
} else {
(dest__13230__auto__[(0)] = (function (){var a__8254__auto__ = (G__13551_13877[(0)]);
var b__8255__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8254__auto__ = (G__13551_13877[(1)]);
var b__8255__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13562_13879 = (v instanceof thi.ng.geom.vector.Vec2);
var G__13563_13880 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__13564_13881 = ((!(G__13562_13879))?typeof v === 'number':null);
var G__13565_13882 = ((!(G__13563_13880))?typeof v2 === 'number':null);
var G__13553_13883 = self__.buf;
var G__13554_13884 = ((G__13562_13879)?v.buf:null);
var G__13555_13885 = ((G__13563_13880)?v2.buf:null);
var G__13556_13886 = (G__13553_13883[(0)]);
var G__13557_13887 = (G__13553_13883[(1)]);
var G__13558_13888 = ((G__13562_13879)?(G__13554_13884[(0)]):(cljs.core.truth_(G__13564_13881)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__13559_13889 = ((G__13562_13879)?(G__13554_13884[(1)]):(cljs.core.truth_(G__13564_13881)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__13560_13890 = ((G__13563_13880)?(G__13555_13885[(0)]):(cljs.core.truth_(G__13565_13882)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13561_13891 = ((G__13563_13880)?(G__13555_13885[(1)]):(cljs.core.truth_(G__13565_13882)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__13241__auto__[(0)] = (function (){var a__8254__auto__ = (function (){var a__8254__auto__ = G__13556_13886;
var b__8255__auto__ = G__13558_13888;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})();
var b__8255__auto__ = G__13560_13890;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13241__auto__[(1)] = (function (){var a__8254__auto__ = (function (){var a__8254__auto__ = G__13557_13887;
var b__8255__auto__ = G__13559_13889;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})();
var b__8255__auto__ = G__13561_13891;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13566_13892 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13567_13893 = v.buf;
(dest__13230__auto__[(0)] = (function (){var a__8261__auto__ = (G__13566_13892[(0)]);
var b__8262__auto__ = (G__13567_13893[(0)]);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8261__auto__ = (G__13566_13892[(1)]);
var b__8262__auto__ = (G__13567_13893[(1)]);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = (function (){var a__8261__auto__ = (G__13566_13892[(0)]);
var b__8262__auto__ = v;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8261__auto__ = (G__13566_13892[(1)]);
var b__8262__auto__ = v;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
} else {
(dest__13230__auto__[(0)] = (function (){var a__8261__auto__ = (G__13566_13892[(0)]);
var b__8262__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13230__auto__[(1)] = (function (){var a__8261__auto__ = (G__13566_13892[(1)]);
var b__8262__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13577_13894 = (v instanceof thi.ng.geom.vector.Vec2);
var G__13578_13895 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__13579_13896 = ((!(G__13577_13894))?typeof v === 'number':null);
var G__13580_13897 = ((!(G__13578_13895))?typeof v2 === 'number':null);
var G__13568_13898 = self__.buf;
var G__13569_13899 = ((G__13577_13894)?v.buf:null);
var G__13570_13900 = ((G__13578_13895)?v2.buf:null);
var G__13571_13901 = (G__13568_13898[(0)]);
var G__13572_13902 = (G__13568_13898[(1)]);
var G__13573_13903 = ((G__13577_13894)?(G__13569_13899[(0)]):(cljs.core.truth_(G__13579_13896)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__13574_13904 = ((G__13577_13894)?(G__13569_13899[(1)]):(cljs.core.truth_(G__13579_13896)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__13575_13905 = ((G__13578_13895)?(G__13570_13900[(0)]):(cljs.core.truth_(G__13580_13897)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13576_13906 = ((G__13578_13895)?(G__13570_13900[(1)]):(cljs.core.truth_(G__13580_13897)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__13241__auto__[(0)] = (function (){var a__8261__auto__ = (function (){var a__8261__auto__ = G__13571_13901;
var b__8262__auto__ = G__13573_13903;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})();
var b__8262__auto__ = G__13575_13905;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13241__auto__[(1)] = (function (){var a__8261__auto__ = (function (){var a__8261__auto__ = G__13572_13902;
var b__8262__auto__ = G__13574_13904;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})();
var b__8262__auto__ = G__13576_13906;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.call = (function() {
var G__13907 = null;
var G__13907__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__13907__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__13907 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__13907__2.call(this,self__,k);
case 3:
return G__13907__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13907.cljs$core$IFn$_invoke$arity$2 = G__13907__2;
G__13907.cljs$core$IFn$_invoke$arity$3 = G__13907__3;
return G__13907;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args13365){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13365)));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.math.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13581 = self__.buf;
var G__13582 = (G__13581[(0)]);
var G__13583 = (G__13581[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__13582 * Math.cos(G__13583)));

(b[(1)] = (G__13582 * Math.sin(G__13583)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13584 = self__.buf;
var G__13585 = (G__13584[(0)]);
var G__13586 = (G__13584[(1)]);
var l = Math.sqrt(((G__13585 * G__13585) + (G__13586 * G__13586)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__13585 / l));

(b[(1)] = (G__13586 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__13587 = self__.buf;
var G__13588 = (G__13587[(0)]);
var G__13589 = (G__13587[(1)]);
var l = Math.sqrt(((G__13588 * G__13588) + (G__13589 * G__13589)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__13588 * l__$1));

(b[(1)] = (G__13589 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13590 = self__.buf;
var G__13591 = (G__13590[(0)]);
var G__13592 = (G__13590[(1)]);
return Math.sqrt(((G__13591 * G__13591) + (G__13592 * G__13592)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13593 = self__.buf;
var G__13594 = (G__13593[(0)]);
var G__13595 = (G__13593[(1)]);
return ((G__13594 * G__13594) + (G__13595 * G__13595));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13605_13908 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13606_13909 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13607_13910 = ((!(G__13605_13908))?typeof a === 'number':null);
var G__13608_13911 = ((!(G__13606_13909))?typeof b === 'number':null);
var G__13596_13912 = self__.buf;
var G__13597_13913 = ((G__13605_13908)?a.buf:null);
var G__13598_13914 = ((G__13606_13909)?b.buf:null);
var G__13599_13915 = (G__13596_13912[(0)]);
var G__13600_13916 = (G__13596_13912[(1)]);
var G__13601_13917 = ((G__13605_13908)?(G__13597_13913[(0)]):(cljs.core.truth_(G__13607_13910)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__13602_13918 = ((G__13605_13908)?(G__13597_13913[(1)]):(cljs.core.truth_(G__13607_13910)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__13603_13919 = ((G__13606_13909)?(G__13598_13914[(0)]):(cljs.core.truth_(G__13608_13911)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__13604_13920 = ((G__13606_13909)?(G__13598_13914[(1)]):(cljs.core.truth_(G__13608_13911)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__13241__auto__[(0)] = ((G__13599_13915 * G__13601_13917) - G__13603_13919));

(dest__13241__auto__[(1)] = ((G__13600_13916 * G__13602_13918) - G__13604_13920));

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13609_13921 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13610_13922 = v.buf;
(dest__13230__auto__[(0)] = ((G__13609_13921[(0)]) * (G__13610_13922[(0)])));

(dest__13230__auto__[(1)] = ((G__13609_13921[(1)]) * (G__13610_13922[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13609_13921[(0)]) * v));

(dest__13230__auto__[(1)] = ((G__13609_13921[(1)]) * v));
} else {
(dest__13230__auto__[(0)] = ((G__13609_13921[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13609_13921[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13611 = self__.buf;
var G__13614 = (new Float32Array((2)));
var G__13615 = (G__13611[(0)]);
var G__13616 = (G__13611[(1)]);
var G__13621 = typeof v1 === 'number';
var G__13622 = typeof v2 === 'number';
if(((G__13621)?G__13622:false)){
(G__13614[(0)] = (G__13615 * v1));

(G__13614[(1)] = (G__13616 * v2));
} else {
var G__13623_13923 = ((!(G__13621))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13624_13924 = ((!(G__13622))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13612_13925 = (cljs.core.truth_(G__13623_13923)?v1.buf:null);
var G__13613_13926 = (cljs.core.truth_(G__13624_13924)?v2.buf:null);
var G__13617_13927 = (cljs.core.truth_(G__13623_13923)?(G__13612_13925[(0)]):((G__13621)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__13618_13928 = (cljs.core.truth_(G__13623_13923)?(G__13612_13925[(1)]):((G__13621)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__13619_13929 = (cljs.core.truth_(G__13624_13924)?(G__13613_13926[(0)]):((G__13622)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__13620_13930 = (cljs.core.truth_(G__13624_13924)?(G__13613_13926[(1)]):((G__13622)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__13614[(0)] = ((G__13615 * G__13617_13927) * G__13619_13929));

(G__13614[(1)] = ((G__13616 * G__13618_13928) * G__13620_13930));
}

return (new thi.ng.geom.vector.Vec2(G__13614,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13200__auto__ = (new Float32Array((2)));
var G__13625_13931 = self__.buf;
(dest__13200__auto__[(0)] = (- (G__13625_13931[(0)])));

(dest__13200__auto__[(1)] = (- (G__13625_13931[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__13200__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13626_13932 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13627_13933 = v.buf;
(dest__13230__auto__[(0)] = ((G__13626_13932[(0)]) - (G__13627_13933[(0)])));

(dest__13230__auto__[(1)] = ((G__13626_13932[(1)]) - (G__13627_13933[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13626_13932[(0)]) - v));

(dest__13230__auto__[(1)] = ((G__13626_13932[(1)]) - v));
} else {
(dest__13230__auto__[(0)] = ((G__13626_13932[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13626_13932[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13628 = self__.buf;
var G__13631 = (new Float32Array((2)));
var G__13632 = (G__13628[(0)]);
var G__13633 = (G__13628[(1)]);
var G__13638 = typeof v1 === 'number';
var G__13639 = typeof v2 === 'number';
if(((G__13638)?G__13639:false)){
(G__13631[(0)] = (G__13632 - v1));

(G__13631[(1)] = (G__13633 - v2));
} else {
var G__13640_13934 = ((!(G__13638))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13641_13935 = ((!(G__13639))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13629_13936 = (cljs.core.truth_(G__13640_13934)?v1.buf:null);
var G__13630_13937 = (cljs.core.truth_(G__13641_13935)?v2.buf:null);
var G__13634_13938 = (cljs.core.truth_(G__13640_13934)?(G__13629_13936[(0)]):((G__13638)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13635_13939 = (cljs.core.truth_(G__13640_13934)?(G__13629_13936[(1)]):((G__13638)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13636_13940 = (cljs.core.truth_(G__13641_13935)?(G__13630_13937[(0)]):((G__13639)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13637_13941 = (cljs.core.truth_(G__13641_13935)?(G__13630_13937[(1)]):((G__13639)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__13631[(0)] = ((G__13632 - G__13634_13938) - G__13636_13940));

(G__13631[(1)] = ((G__13633 - G__13635_13939) - G__13637_13941));
}

return (new thi.ng.geom.vector.Vec2(G__13631,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13651_13942 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13652_13943 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13653_13944 = ((!(G__13651_13942))?typeof a === 'number':null);
var G__13654_13945 = ((!(G__13652_13943))?typeof b === 'number':null);
var G__13642_13946 = self__.buf;
var G__13643_13947 = ((G__13651_13942)?a.buf:null);
var G__13644_13948 = ((G__13652_13943)?b.buf:null);
var G__13645_13949 = (G__13642_13946[(0)]);
var G__13646_13950 = (G__13642_13946[(1)]);
var G__13647_13951 = ((G__13651_13942)?(G__13643_13947[(0)]):(cljs.core.truth_(G__13653_13944)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__13648_13952 = ((G__13651_13942)?(G__13643_13947[(1)]):(cljs.core.truth_(G__13653_13944)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__13649_13953 = ((G__13652_13943)?(G__13644_13948[(0)]):(cljs.core.truth_(G__13654_13945)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__13650_13954 = ((G__13652_13943)?(G__13644_13948[(1)]):(cljs.core.truth_(G__13654_13945)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__13241__auto__[(0)] = ((G__13645_13949 * G__13647_13951) + G__13649_13953));

(dest__13241__auto__[(1)] = ((G__13646_13950 * G__13648_13952) + G__13650_13954));

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13664_13955 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13665_13956 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13666_13957 = ((!(G__13664_13955))?typeof a === 'number':null);
var G__13667_13958 = ((!(G__13665_13956))?typeof b === 'number':null);
var G__13655_13959 = self__.buf;
var G__13656_13960 = ((G__13664_13955)?a.buf:null);
var G__13657_13961 = ((G__13665_13956)?b.buf:null);
var G__13658_13962 = (G__13655_13959[(0)]);
var G__13659_13963 = (G__13655_13959[(1)]);
var G__13660_13964 = ((G__13664_13955)?(G__13656_13960[(0)]):(cljs.core.truth_(G__13666_13957)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__13661_13965 = ((G__13664_13955)?(G__13656_13960[(1)]):(cljs.core.truth_(G__13666_13957)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__13662_13966 = ((G__13665_13956)?(G__13657_13961[(0)]):(cljs.core.truth_(G__13667_13958)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__13663_13967 = ((G__13665_13956)?(G__13657_13961[(1)]):(cljs.core.truth_(G__13667_13958)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__13241__auto__[(0)] = ((G__13658_13962 + G__13660_13964) * G__13662_13966));

(dest__13241__auto__[(1)] = ((G__13659_13963 + G__13661_13965) * G__13663_13967));

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13200__auto__ = (new Float32Array((2)));
var G__13668_13968 = self__.buf;
(dest__13200__auto__[(0)] = ((1) / (G__13668_13968[(0)])));

(dest__13200__auto__[(1)] = ((1) / (G__13668_13968[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__13200__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13669_13969 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13670_13970 = v.buf;
(dest__13230__auto__[(0)] = ((G__13669_13969[(0)]) / (G__13670_13970[(0)])));

(dest__13230__auto__[(1)] = ((G__13669_13969[(1)]) / (G__13670_13970[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13669_13969[(0)]) / v));

(dest__13230__auto__[(1)] = ((G__13669_13969[(1)]) / v));
} else {
(dest__13230__auto__[(0)] = ((G__13669_13969[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13669_13969[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13671 = self__.buf;
var G__13674 = (new Float32Array((2)));
var G__13675 = (G__13671[(0)]);
var G__13676 = (G__13671[(1)]);
var G__13681 = typeof v1 === 'number';
var G__13682 = typeof v2 === 'number';
if(((G__13681)?G__13682:false)){
(G__13674[(0)] = (G__13675 / v1));

(G__13674[(1)] = (G__13676 / v2));
} else {
var G__13683_13971 = ((!(G__13681))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13684_13972 = ((!(G__13682))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13672_13973 = (cljs.core.truth_(G__13683_13971)?v1.buf:null);
var G__13673_13974 = (cljs.core.truth_(G__13684_13972)?v2.buf:null);
var G__13677_13975 = (cljs.core.truth_(G__13683_13971)?(G__13672_13973[(0)]):((G__13681)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13678_13976 = (cljs.core.truth_(G__13683_13971)?(G__13672_13973[(1)]):((G__13681)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13679_13977 = (cljs.core.truth_(G__13684_13972)?(G__13673_13974[(0)]):((G__13682)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13680_13978 = (cljs.core.truth_(G__13684_13972)?(G__13673_13974[(1)]):((G__13682)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__13674[(0)] = ((G__13675 / G__13677_13975) / G__13679_13977));

(G__13674[(1)] = ((G__13676 / G__13678_13976) / G__13680_13978));
}

return (new thi.ng.geom.vector.Vec2(G__13674,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13230__auto__ = (new Float32Array((2)));
var G__13685_13979 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__13686_13980 = v.buf;
(dest__13230__auto__[(0)] = ((G__13685_13979[(0)]) + (G__13686_13980[(0)])));

(dest__13230__auto__[(1)] = ((G__13685_13979[(1)]) + (G__13686_13980[(1)])));
} else {
if(typeof v === 'number'){
(dest__13230__auto__[(0)] = ((G__13685_13979[(0)]) + v));

(dest__13230__auto__[(1)] = ((G__13685_13979[(1)]) + v));
} else {
(dest__13230__auto__[(0)] = ((G__13685_13979[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__13230__auto__[(1)] = ((G__13685_13979[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__13230__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__13687 = self__.buf;
var G__13690 = (new Float32Array((2)));
var G__13691 = (G__13687[(0)]);
var G__13692 = (G__13687[(1)]);
var G__13697 = typeof v1 === 'number';
var G__13698 = typeof v2 === 'number';
if(((G__13697)?G__13698:false)){
(G__13690[(0)] = (G__13691 + v1));

(G__13690[(1)] = (G__13692 + v2));
} else {
var G__13699_13981 = ((!(G__13697))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__13700_13982 = ((!(G__13698))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__13688_13983 = (cljs.core.truth_(G__13699_13981)?v1.buf:null);
var G__13689_13984 = (cljs.core.truth_(G__13700_13982)?v2.buf:null);
var G__13693_13985 = (cljs.core.truth_(G__13699_13981)?(G__13688_13983[(0)]):((G__13697)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__13694_13986 = (cljs.core.truth_(G__13699_13981)?(G__13688_13983[(1)]):((G__13697)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__13695_13987 = (cljs.core.truth_(G__13700_13982)?(G__13689_13984[(0)]):((G__13698)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__13696_13988 = (cljs.core.truth_(G__13700_13982)?(G__13689_13984[(1)]):((G__13698)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__13690[(0)] = ((G__13691 + G__13693_13985) + G__13695_13987));

(G__13690[(1)] = ((G__13692 + G__13694_13986) + G__13696_13988));
}

return (new thi.ng.geom.vector.Vec2(G__13690,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13200__auto__ = (new Float32Array((2)));
var G__13701_13989 = self__.buf;
(dest__13200__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__13701_13989[(0)])));

(dest__13200__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__13701_13989[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__13200__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13241__auto__ = (new Float32Array((2)));
var G__13711_13990 = (a instanceof thi.ng.geom.vector.Vec2);
var G__13712_13991 = (b instanceof thi.ng.geom.vector.Vec2);
var G__13713_13992 = ((!(G__13711_13990))?typeof a === 'number':null);
var G__13714_13993 = ((!(G__13712_13991))?typeof b === 'number':null);
var G__13702_13994 = self__.buf;
var G__13703_13995 = ((G__13711_13990)?a.buf:null);
var G__13704_13996 = ((G__13712_13991)?b.buf:null);
var G__13705_13997 = (G__13702_13994[(0)]);
var G__13706_13998 = (G__13702_13994[(1)]);
var G__13707_13999 = ((G__13711_13990)?(G__13703_13995[(0)]):(cljs.core.truth_(G__13713_13992)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__13708_14000 = ((G__13711_13990)?(G__13703_13995[(1)]):(cljs.core.truth_(G__13713_13992)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__13709_14001 = ((G__13712_13991)?(G__13704_13996[(0)]):(cljs.core.truth_(G__13714_13993)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__13710_14002 = ((G__13712_13991)?(G__13704_13996[(1)]):(cljs.core.truth_(G__13714_13993)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__13241__auto__[(0)] = ((G__13705_13997 - G__13707_13999) * G__13709_14001));

(dest__13241__auto__[(1)] = ((G__13706_13998 - G__13708_14000) * G__13710_14002));

return (new thi.ng.geom.vector.Vec2(dest__13241__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"thi.ng.geom.vector/Vec2");
});

/**
 * Positional factory function for thi.ng.geom.vector/Vec2.
 */
thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14004_14455 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14005_14456 = v.buf;
(self__.buf[(0)] = ((G__14004_14455[(0)]) - (G__14005_14456[(0)])));

(self__.buf[(1)] = ((G__14004_14455[(1)]) - (G__14005_14456[(1)])));

(self__.buf[(2)] = ((G__14004_14455[(2)]) - (G__14005_14456[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14004_14455[(0)]) - v));

(self__.buf[(1)] = ((G__14004_14455[(1)]) - v));

(self__.buf[(2)] = ((G__14004_14455[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14004_14455[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__14004_14455[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__14004_14455[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14018_14457 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14019_14458 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14020_14459 = ((!(G__14018_14457))?typeof v1 === 'number':null);
var G__14021_14460 = ((!(G__14019_14458))?typeof v2 === 'number':null);
var G__14006_14461 = self__.buf;
var G__14007_14462 = ((G__14018_14457)?v1.buf:null);
var G__14008_14463 = ((G__14019_14458)?v2.buf:null);
var G__14009_14464 = (G__14006_14461[(0)]);
var G__14010_14465 = (G__14006_14461[(1)]);
var G__14011_14466 = (G__14006_14461[(2)]);
var G__14012_14467 = ((G__14018_14457)?(G__14007_14462[(0)]):(cljs.core.truth_(G__14020_14459)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14013_14468 = ((G__14018_14457)?(G__14007_14462[(1)]):(cljs.core.truth_(G__14020_14459)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14014_14469 = ((G__14018_14457)?(G__14007_14462[(2)]):(cljs.core.truth_(G__14020_14459)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14015_14470 = ((G__14019_14458)?(G__14008_14463[(0)]):(cljs.core.truth_(G__14021_14460)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14016_14471 = ((G__14019_14458)?(G__14008_14463[(1)]):(cljs.core.truth_(G__14021_14460)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14017_14472 = ((G__14019_14458)?(G__14008_14463[(2)]):(cljs.core.truth_(G__14021_14460)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__14009_14464 - G__14012_14467) - G__14015_14470));

(self__.buf[(1)] = ((G__14010_14465 - G__14013_14468) - G__14016_14471));

(self__.buf[(2)] = ((G__14011_14466 - G__14014_14469) - G__14017_14472));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14022_14473 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14023_14474 = v.buf;
(self__.buf[(0)] = ((G__14022_14473[(0)]) * (G__14023_14474[(0)])));

(self__.buf[(1)] = ((G__14022_14473[(1)]) * (G__14023_14474[(1)])));

(self__.buf[(2)] = ((G__14022_14473[(2)]) * (G__14023_14474[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14022_14473[(0)]) * v));

(self__.buf[(1)] = ((G__14022_14473[(1)]) * v));

(self__.buf[(2)] = ((G__14022_14473[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14022_14473[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__14022_14473[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__14022_14473[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14036_14475 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14037_14476 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14038_14477 = ((!(G__14036_14475))?typeof v1 === 'number':null);
var G__14039_14478 = ((!(G__14037_14476))?typeof v2 === 'number':null);
var G__14024_14479 = self__.buf;
var G__14025_14480 = ((G__14036_14475)?v1.buf:null);
var G__14026_14481 = ((G__14037_14476)?v2.buf:null);
var G__14027_14482 = (G__14024_14479[(0)]);
var G__14028_14483 = (G__14024_14479[(1)]);
var G__14029_14484 = (G__14024_14479[(2)]);
var G__14030_14485 = ((G__14036_14475)?(G__14025_14480[(0)]):(cljs.core.truth_(G__14038_14477)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14031_14486 = ((G__14036_14475)?(G__14025_14480[(1)]):(cljs.core.truth_(G__14038_14477)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14032_14487 = ((G__14036_14475)?(G__14025_14480[(2)]):(cljs.core.truth_(G__14038_14477)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14033_14488 = ((G__14037_14476)?(G__14026_14481[(0)]):(cljs.core.truth_(G__14039_14478)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14034_14489 = ((G__14037_14476)?(G__14026_14481[(1)]):(cljs.core.truth_(G__14039_14478)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14035_14490 = ((G__14037_14476)?(G__14026_14481[(2)]):(cljs.core.truth_(G__14039_14478)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__14027_14482 * G__14030_14485) * G__14033_14488));

(self__.buf[(1)] = ((G__14028_14483 * G__14031_14486) * G__14034_14489));

(self__.buf[(2)] = ((G__14029_14484 * G__14032_14487) * G__14035_14490));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14052_14491 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14053_14492 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14054_14493 = ((!(G__14052_14491))?typeof a === 'number':null);
var G__14055_14494 = ((!(G__14053_14492))?typeof b === 'number':null);
var G__14040_14495 = self__.buf;
var G__14041_14496 = ((G__14052_14491)?a.buf:null);
var G__14042_14497 = ((G__14053_14492)?b.buf:null);
var G__14043_14498 = (G__14040_14495[(0)]);
var G__14044_14499 = (G__14040_14495[(1)]);
var G__14045_14500 = (G__14040_14495[(2)]);
var G__14046_14501 = ((G__14052_14491)?(G__14041_14496[(0)]):(cljs.core.truth_(G__14054_14493)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__14047_14502 = ((G__14052_14491)?(G__14041_14496[(1)]):(cljs.core.truth_(G__14054_14493)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__14048_14503 = ((G__14052_14491)?(G__14041_14496[(2)]):(cljs.core.truth_(G__14054_14493)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__14049_14504 = ((G__14053_14492)?(G__14042_14497[(0)]):(cljs.core.truth_(G__14055_14494)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__14050_14505 = ((G__14053_14492)?(G__14042_14497[(1)]):(cljs.core.truth_(G__14055_14494)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__14051_14506 = ((G__14053_14492)?(G__14042_14497[(2)]):(cljs.core.truth_(G__14055_14494)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__14043_14498 - G__14046_14501) * G__14049_14504));

(self__.buf[(1)] = ((G__14044_14499 - G__14047_14502) * G__14050_14505));

(self__.buf[(2)] = ((G__14045_14500 - G__14048_14503) * G__14051_14506));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14068_14507 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14069_14508 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14070_14509 = ((!(G__14068_14507))?typeof a === 'number':null);
var G__14071_14510 = ((!(G__14069_14508))?typeof b === 'number':null);
var G__14056_14511 = self__.buf;
var G__14057_14512 = ((G__14068_14507)?a.buf:null);
var G__14058_14513 = ((G__14069_14508)?b.buf:null);
var G__14059_14514 = (G__14056_14511[(0)]);
var G__14060_14515 = (G__14056_14511[(1)]);
var G__14061_14516 = (G__14056_14511[(2)]);
var G__14062_14517 = ((G__14068_14507)?(G__14057_14512[(0)]):(cljs.core.truth_(G__14070_14509)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__14063_14518 = ((G__14068_14507)?(G__14057_14512[(1)]):(cljs.core.truth_(G__14070_14509)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__14064_14519 = ((G__14068_14507)?(G__14057_14512[(2)]):(cljs.core.truth_(G__14070_14509)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__14065_14520 = ((G__14069_14508)?(G__14058_14513[(0)]):(cljs.core.truth_(G__14071_14510)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__14066_14521 = ((G__14069_14508)?(G__14058_14513[(1)]):(cljs.core.truth_(G__14071_14510)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__14067_14522 = ((G__14069_14508)?(G__14058_14513[(2)]):(cljs.core.truth_(G__14071_14510)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__14059_14514 * G__14062_14517) - G__14065_14520));

(self__.buf[(1)] = ((G__14060_14515 * G__14063_14518) - G__14066_14521));

(self__.buf[(2)] = ((G__14061_14516 * G__14064_14519) - G__14067_14522));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14084_14523 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14085_14524 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14086_14525 = ((!(G__14084_14523))?typeof a === 'number':null);
var G__14087_14526 = ((!(G__14085_14524))?typeof b === 'number':null);
var G__14072_14527 = self__.buf;
var G__14073_14528 = ((G__14084_14523)?a.buf:null);
var G__14074_14529 = ((G__14085_14524)?b.buf:null);
var G__14075_14530 = (G__14072_14527[(0)]);
var G__14076_14531 = (G__14072_14527[(1)]);
var G__14077_14532 = (G__14072_14527[(2)]);
var G__14078_14533 = ((G__14084_14523)?(G__14073_14528[(0)]):(cljs.core.truth_(G__14086_14525)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__14079_14534 = ((G__14084_14523)?(G__14073_14528[(1)]):(cljs.core.truth_(G__14086_14525)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__14080_14535 = ((G__14084_14523)?(G__14073_14528[(2)]):(cljs.core.truth_(G__14086_14525)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__14081_14536 = ((G__14085_14524)?(G__14074_14529[(0)]):(cljs.core.truth_(G__14087_14526)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__14082_14537 = ((G__14085_14524)?(G__14074_14529[(1)]):(cljs.core.truth_(G__14087_14526)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__14083_14538 = ((G__14085_14524)?(G__14074_14529[(2)]):(cljs.core.truth_(G__14087_14526)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__14075_14530 * G__14078_14533) + G__14081_14536));

(self__.buf[(1)] = ((G__14076_14531 * G__14079_14534) + G__14082_14537));

(self__.buf[(2)] = ((G__14077_14532 * G__14080_14535) + G__14083_14538));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14088_14539 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14089_14540 = v.buf;
(self__.buf[(0)] = ((G__14088_14539[(0)]) / (G__14089_14540[(0)])));

(self__.buf[(1)] = ((G__14088_14539[(1)]) / (G__14089_14540[(1)])));

(self__.buf[(2)] = ((G__14088_14539[(2)]) / (G__14089_14540[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14088_14539[(0)]) / v));

(self__.buf[(1)] = ((G__14088_14539[(1)]) / v));

(self__.buf[(2)] = ((G__14088_14539[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14088_14539[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__14088_14539[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__14088_14539[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14102_14541 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14103_14542 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14104_14543 = ((!(G__14102_14541))?typeof v1 === 'number':null);
var G__14105_14544 = ((!(G__14103_14542))?typeof v2 === 'number':null);
var G__14090_14545 = self__.buf;
var G__14091_14546 = ((G__14102_14541)?v1.buf:null);
var G__14092_14547 = ((G__14103_14542)?v2.buf:null);
var G__14093_14548 = (G__14090_14545[(0)]);
var G__14094_14549 = (G__14090_14545[(1)]);
var G__14095_14550 = (G__14090_14545[(2)]);
var G__14096_14551 = ((G__14102_14541)?(G__14091_14546[(0)]):(cljs.core.truth_(G__14104_14543)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14097_14552 = ((G__14102_14541)?(G__14091_14546[(1)]):(cljs.core.truth_(G__14104_14543)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14098_14553 = ((G__14102_14541)?(G__14091_14546[(2)]):(cljs.core.truth_(G__14104_14543)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14099_14554 = ((G__14103_14542)?(G__14092_14547[(0)]):(cljs.core.truth_(G__14105_14544)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14100_14555 = ((G__14103_14542)?(G__14092_14547[(1)]):(cljs.core.truth_(G__14105_14544)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14101_14556 = ((G__14103_14542)?(G__14092_14547[(2)]):(cljs.core.truth_(G__14105_14544)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__14093_14548 / G__14096_14551) / G__14099_14554));

(self__.buf[(1)] = ((G__14094_14549 / G__14097_14552) / G__14100_14555));

(self__.buf[(2)] = ((G__14095_14550 / G__14098_14553) / G__14101_14556));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14106_14557 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14107_14558 = v.buf;
(self__.buf[(0)] = ((G__14106_14557[(0)]) + (G__14107_14558[(0)])));

(self__.buf[(1)] = ((G__14106_14557[(1)]) + (G__14107_14558[(1)])));

(self__.buf[(2)] = ((G__14106_14557[(2)]) + (G__14107_14558[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14106_14557[(0)]) + v));

(self__.buf[(1)] = ((G__14106_14557[(1)]) + v));

(self__.buf[(2)] = ((G__14106_14557[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14106_14557[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__14106_14557[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__14106_14557[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14120_14559 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14121_14560 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14122_14561 = ((!(G__14120_14559))?typeof v1 === 'number':null);
var G__14123_14562 = ((!(G__14121_14560))?typeof v2 === 'number':null);
var G__14108_14563 = self__.buf;
var G__14109_14564 = ((G__14120_14559)?v1.buf:null);
var G__14110_14565 = ((G__14121_14560)?v2.buf:null);
var G__14111_14566 = (G__14108_14563[(0)]);
var G__14112_14567 = (G__14108_14563[(1)]);
var G__14113_14568 = (G__14108_14563[(2)]);
var G__14114_14569 = ((G__14120_14559)?(G__14109_14564[(0)]):(cljs.core.truth_(G__14122_14561)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14115_14570 = ((G__14120_14559)?(G__14109_14564[(1)]):(cljs.core.truth_(G__14122_14561)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14116_14571 = ((G__14120_14559)?(G__14109_14564[(2)]):(cljs.core.truth_(G__14122_14561)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14117_14572 = ((G__14121_14560)?(G__14110_14565[(0)]):(cljs.core.truth_(G__14123_14562)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14118_14573 = ((G__14121_14560)?(G__14110_14565[(1)]):(cljs.core.truth_(G__14123_14562)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14119_14574 = ((G__14121_14560)?(G__14110_14565[(2)]):(cljs.core.truth_(G__14123_14562)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__14111_14566 + G__14114_14569) + G__14117_14572));

(self__.buf[(1)] = ((G__14112_14567 + G__14115_14570) + G__14118_14573));

(self__.buf[(2)] = ((G__14113_14568 + G__14116_14571) + G__14119_14574));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14136_14575 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14137_14576 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14138_14577 = ((!(G__14136_14575))?typeof a === 'number':null);
var G__14139_14578 = ((!(G__14137_14576))?typeof b === 'number':null);
var G__14124_14579 = self__.buf;
var G__14125_14580 = ((G__14136_14575)?a.buf:null);
var G__14126_14581 = ((G__14137_14576)?b.buf:null);
var G__14127_14582 = (G__14124_14579[(0)]);
var G__14128_14583 = (G__14124_14579[(1)]);
var G__14129_14584 = (G__14124_14579[(2)]);
var G__14130_14585 = ((G__14136_14575)?(G__14125_14580[(0)]):(cljs.core.truth_(G__14138_14577)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__14131_14586 = ((G__14136_14575)?(G__14125_14580[(1)]):(cljs.core.truth_(G__14138_14577)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__14132_14587 = ((G__14136_14575)?(G__14125_14580[(2)]):(cljs.core.truth_(G__14138_14577)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__14133_14588 = ((G__14137_14576)?(G__14126_14581[(0)]):(cljs.core.truth_(G__14139_14578)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__14134_14589 = ((G__14137_14576)?(G__14126_14581[(1)]):(cljs.core.truth_(G__14139_14578)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__14135_14590 = ((G__14137_14576)?(G__14126_14581[(2)]):(cljs.core.truth_(G__14139_14578)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__14127_14582 + G__14130_14585) * G__14133_14588));

(self__.buf[(1)] = ((G__14128_14583 + G__14131_14586) * G__14134_14589));

(self__.buf[(2)] = ((G__14129_14584 + G__14132_14587) * G__14135_14590));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(2)])),"]"].join('');
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14140_14591 = self__.buf;
var G__14142_14592 = (G__14140_14591[(0)]);
var G__14143_14593 = (G__14140_14591[(1)]);
var G__14144_14594 = (G__14140_14591[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14141_14595 = v.buf;
var G__14145_14596 = (G__14141_14595[(0)]);
var G__14146_14597 = (G__14141_14595[(1)]);
var G__14147_14598 = (G__14141_14595[(2)]);
(b[(0)] = ((G__14143_14593 * G__14147_14598) - (G__14146_14597 * G__14144_14594)));

(b[(1)] = ((G__14144_14594 * G__14145_14596) - (G__14147_14598 * G__14142_14592)));

(b[(2)] = ((G__14142_14592 * G__14146_14597) - (G__14145_14596 * G__14143_14593)));
} else {
var G__14145_14599 = cljs.core.nth.call(null,v,(0),0.0);
var G__14146_14600 = cljs.core.nth.call(null,v,(1),0.0);
var G__14147_14601 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__14143_14593 * G__14147_14601) - (G__14146_14600 * G__14144_14594)));

(b[(1)] = ((G__14144_14594 * G__14145_14599) - (G__14147_14601 * G__14142_14592)));

(b[(2)] = ((G__14142_14592 * G__14146_14600) - (G__14145_14599 * G__14143_14593)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14148 = self__.buf;
var G__14150 = (G__14148[(0)]);
var G__14151 = (G__14148[(1)]);
var G__14152 = (G__14148[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14149 = v.buf;
var G__14153 = (G__14149[(0)]);
var G__14154 = (G__14149[(1)]);
var G__14155 = (G__14149[(2)]);
var d = ((((G__14150 * G__14153) + (G__14151 * G__14154)) + (G__14152 * G__14155)) * 2.0);
(b[(0)] = ((G__14153 * d) - G__14150));

(b[(1)] = ((G__14154 * d) - G__14151));

(b[(2)] = ((G__14155 * d) - G__14152));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__14153 = cljs.core.nth.call(null,v,(0),0.0);
var G__14154 = cljs.core.nth.call(null,v,(1),0.0);
var G__14155 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__14150 * G__14153) + (G__14151 * G__14154)) + (G__14152 * G__14155)) * 2.0);
(b[(0)] = ((G__14153 * d) - G__14150));

(b[(1)] = ((G__14154 * d) - G__14151));

(b[(2)] = ((G__14155 * d) - G__14152));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14156 = self__.buf;
var G__14158 = (G__14156[(0)]);
var G__14159 = (G__14156[(1)]);
var G__14160 = (G__14156[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14157 = v.buf;
var G__14161 = (G__14157[(0)]);
var G__14162 = (G__14157[(1)]);
var G__14163 = (G__14157[(2)]);
var dx = (G__14158 - G__14161);
var dy = (G__14159 - G__14162);
var dz = (G__14160 - G__14163);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__14161 = cljs.core.nth.call(null,v,(0),0.0);
var G__14162 = cljs.core.nth.call(null,v,(1),0.0);
var G__14163 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__14158 - G__14161);
var dy = (G__14159 - G__14162);
var dz = (G__14160 - G__14163);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14164_14602 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14165_14603 = v.buf;
(dest__13335__auto__[(0)] = ((G__14164_14602[(0)]) * (G__14165_14603[(0)])));

(dest__13335__auto__[(1)] = ((G__14164_14602[(1)]) * (G__14165_14603[(1)])));

(dest__13335__auto__[(2)] = ((G__14164_14602[(2)]) * (G__14165_14603[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14164_14602[(0)]) * v));

(dest__13335__auto__[(1)] = ((G__14164_14602[(1)]) * v));

(dest__13335__auto__[(2)] = ((G__14164_14602[(2)]) * v));
} else {
(dest__13335__auto__[(0)] = ((G__14164_14602[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14164_14602[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14164_14602[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = self__._hash;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__14166 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14167 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__14166[(0)]),(G__14167[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__14166[(1)]),(G__14167[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__14166[(2)]),(G__14167[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__14166[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__14166[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__14166[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)]))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2)))));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__14168 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14169 = v.buf;
return ((((G__14168[(0)]) * (G__14169[(0)])) + ((G__14168[(1)]) * (G__14169[(1)]))) + ((G__14168[(2)]) * (G__14169[(2)])));
} else {
return ((((G__14168[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__14168[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__14168[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14170_14604 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14171_14605 = v.buf;
(dest__13335__auto__[(0)] = ((G__14170_14604[(0)]) + (G__14171_14605[(0)])));

(dest__13335__auto__[(1)] = ((G__14170_14604[(1)]) + (G__14171_14605[(1)])));

(dest__13335__auto__[(2)] = ((G__14170_14604[(2)]) + (G__14171_14605[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14170_14604[(0)]) + v));

(dest__13335__auto__[(1)] = ((G__14170_14604[(1)]) + v));

(dest__13335__auto__[(2)] = ((G__14170_14604[(2)]) + v));
} else {
(dest__13335__auto__[(0)] = ((G__14170_14604[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14170_14604[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14170_14604[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:thi.ng.geom.vector.vec3.call(null,v));
return Math.acos(thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,___$1),thi.ng.math.core.normalize.call(null,v__$1)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14172_14606 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14173_14607 = v.buf;
(b[(0)] = (((G__14172_14606[(0)]) + (G__14173_14607[(0)])) * 0.5));

(b[(1)] = (((G__14172_14606[(1)]) + (G__14173_14607[(1)])) * 0.5));

(b[(2)] = (((G__14172_14606[(2)]) + (G__14173_14607[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__14172_14606[(0)]) + v) * 0.5));

(b[(1)] = (((G__14172_14606[(1)]) + v) * 0.5));

(b[(2)] = (((G__14172_14606[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__14172_14606[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__14172_14606[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__14172_14606[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14186_14608 = (v instanceof thi.ng.geom.vector.Vec3);
var G__14187_14609 = (t instanceof thi.ng.geom.vector.Vec3);
var G__14188_14610 = ((!(G__14186_14608))?typeof v === 'number':null);
var G__14189_14611 = ((!(G__14187_14609))?typeof t === 'number':null);
var G__14174_14612 = self__.buf;
var G__14175_14613 = ((G__14186_14608)?v.buf:null);
var G__14176_14614 = ((G__14187_14609)?t.buf:null);
var G__14177_14615 = (G__14174_14612[(0)]);
var G__14178_14616 = (G__14174_14612[(1)]);
var G__14179_14617 = (G__14174_14612[(2)]);
var G__14180_14618 = ((G__14186_14608)?(G__14175_14613[(0)]):(cljs.core.truth_(G__14188_14610)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__14181_14619 = ((G__14186_14608)?(G__14175_14613[(1)]):(cljs.core.truth_(G__14188_14610)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__14182_14620 = ((G__14186_14608)?(G__14175_14613[(2)]):(cljs.core.truth_(G__14188_14610)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__14183_14621 = ((G__14187_14609)?(G__14176_14614[(0)]):(cljs.core.truth_(G__14189_14611)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__14184_14622 = ((G__14187_14609)?(G__14176_14614[(1)]):(cljs.core.truth_(G__14189_14611)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__14185_14623 = ((G__14187_14609)?(G__14176_14614[(2)]):(cljs.core.truth_(G__14189_14611)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__14180_14618 - G__14177_14615) * G__14183_14621) + G__14177_14615));

(b[(1)] = (((G__14181_14619 - G__14178_14616) * G__14184_14622) + G__14178_14616));

(b[(2)] = (((G__14182_14620 - G__14179_14617) * G__14185_14623) + G__14179_14617));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__14202_14624 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14203_14625 = (c instanceof thi.ng.geom.vector.Vec3);
var G__14204_14626 = ((!(G__14202_14624))?typeof b === 'number':null);
var G__14205_14627 = ((!(G__14203_14625))?typeof c === 'number':null);
var G__14190_14628 = self__.buf;
var G__14191_14629 = ((G__14202_14624)?b.buf:null);
var G__14192_14630 = ((G__14203_14625)?c.buf:null);
var G__14193_14631 = (G__14190_14628[(0)]);
var G__14194_14632 = (G__14190_14628[(1)]);
var G__14195_14633 = (G__14190_14628[(2)]);
var G__14196_14634 = ((G__14202_14624)?(G__14191_14629[(0)]):(cljs.core.truth_(G__14204_14626)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__14197_14635 = ((G__14202_14624)?(G__14191_14629[(1)]):(cljs.core.truth_(G__14204_14626)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__14198_14636 = ((G__14202_14624)?(G__14191_14629[(2)]):(cljs.core.truth_(G__14204_14626)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__14199_14637 = ((G__14203_14625)?(G__14192_14630[(0)]):(cljs.core.truth_(G__14205_14627)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__14200_14638 = ((G__14203_14625)?(G__14192_14630[(1)]):(cljs.core.truth_(G__14205_14627)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__14201_14639 = ((G__14203_14625)?(G__14192_14630[(2)]):(cljs.core.truth_(G__14205_14627)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_14640 = (((G__14196_14634 - G__14193_14631) * u) + G__14193_14631);
var y1_14641 = (((G__14197_14635 - G__14194_14632) * u) + G__14194_14632);
var z1_14642 = (((G__14198_14636 - G__14195_14633) * u) + G__14195_14633);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__14199_14637) * u) + G__14199_14637) - x1_14640) * v) + x1_14640));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__14200_14638) * u) + G__14200_14638) - y1_14641) * v) + y1_14641));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__14201_14639) * u) + G__14201_14639) - z1_14642) * v) + z1_14642));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14218_14643 = (v instanceof thi.ng.geom.vector.Vec3);
var G__14219_14644 = (t instanceof thi.ng.geom.vector.Vec3);
var G__14220_14645 = ((!(G__14218_14643))?typeof v === 'number':null);
var G__14221_14646 = ((!(G__14219_14644))?typeof t === 'number':null);
var G__14206_14647 = self__.buf;
var G__14207_14648 = ((G__14218_14643)?v.buf:null);
var G__14208_14649 = ((G__14219_14644)?t.buf:null);
var G__14209_14650 = (G__14206_14647[(0)]);
var G__14210_14651 = (G__14206_14647[(1)]);
var G__14211_14652 = (G__14206_14647[(2)]);
var G__14212_14653 = ((G__14218_14643)?(G__14207_14648[(0)]):(cljs.core.truth_(G__14220_14645)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__14213_14654 = ((G__14218_14643)?(G__14207_14648[(1)]):(cljs.core.truth_(G__14220_14645)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__14214_14655 = ((G__14218_14643)?(G__14207_14648[(2)]):(cljs.core.truth_(G__14220_14645)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__14215_14656 = ((G__14219_14644)?(G__14208_14649[(0)]):(cljs.core.truth_(G__14221_14646)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__14216_14657 = ((G__14219_14644)?(G__14208_14649[(1)]):(cljs.core.truth_(G__14221_14646)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__14217_14658 = ((G__14219_14644)?(G__14208_14649[(2)]):(cljs.core.truth_(G__14221_14646)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__14209_14650,G__14212_14653,G__14215_14656));

(b[(1)] = f.call(null,G__14210_14651,G__14213_14654,G__14216_14657));

(b[(2)] = f.call(null,G__14211_14652,G__14214_14655,G__14217_14658));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14222_14659 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__14223_14660 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__14223_14660[(0)]),(G__14222_14659[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__14223_14660[(1)]),(G__14222_14659[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__14223_14660[(2)]),(G__14222_14659[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__14222_14659[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__14222_14659[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__14222_14659[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__14222_14659[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__14222_14659[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__14222_14659[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__14236_14661 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__14237_14662 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__14238_14663 = ((!(G__14236_14661))?typeof e1 === 'number':null);
var G__14239_14664 = ((!(G__14237_14662))?typeof e2 === 'number':null);
var G__14224_14665 = self__.buf;
var G__14225_14666 = ((G__14236_14661)?e1.buf:null);
var G__14226_14667 = ((G__14237_14662)?e2.buf:null);
var G__14227_14668 = (G__14224_14665[(0)]);
var G__14228_14669 = (G__14224_14665[(1)]);
var G__14229_14670 = (G__14224_14665[(2)]);
var G__14230_14671 = ((G__14236_14661)?(G__14225_14666[(0)]):(cljs.core.truth_(G__14238_14663)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__14231_14672 = ((G__14236_14661)?(G__14225_14666[(1)]):(cljs.core.truth_(G__14238_14663)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__14232_14673 = ((G__14236_14661)?(G__14225_14666[(2)]):(cljs.core.truth_(G__14238_14663)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__14233_14674 = ((G__14237_14662)?(G__14226_14667[(0)]):(cljs.core.truth_(G__14239_14664)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__14234_14675 = ((G__14237_14662)?(G__14226_14667[(1)]):(cljs.core.truth_(G__14239_14664)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__14235_14676 = ((G__14237_14662)?(G__14226_14667[(2)]):(cljs.core.truth_(G__14239_14664)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__14230_14671,G__14233_14674,G__14227_14668));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__14231_14672,G__14234_14675,G__14228_14669));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__14232_14673,G__14235_14676,G__14229_14670));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k <= (2))));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k >= (0))) && ((k <= (2))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14240_14677 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14241_14678 = v.buf;
(dest__13335__auto__[(0)] = (function (){var a__8254__auto__ = (G__14240_14677[(0)]);
var b__8255__auto__ = (G__14241_14678[(0)]);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8254__auto__ = (G__14240_14677[(1)]);
var b__8255__auto__ = (G__14241_14678[(1)]);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8254__auto__ = (G__14240_14677[(2)]);
var b__8255__auto__ = (G__14241_14678[(2)]);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = (function (){var a__8254__auto__ = (G__14240_14677[(0)]);
var b__8255__auto__ = v;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8254__auto__ = (G__14240_14677[(1)]);
var b__8255__auto__ = v;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8254__auto__ = (G__14240_14677[(2)]);
var b__8255__auto__ = v;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
} else {
(dest__13335__auto__[(0)] = (function (){var a__8254__auto__ = (G__14240_14677[(0)]);
var b__8255__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8254__auto__ = (G__14240_14677[(1)]);
var b__8255__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8254__auto__ = (G__14240_14677[(2)]);
var b__8255__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14254_14679 = (v instanceof thi.ng.geom.vector.Vec3);
var G__14255_14680 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14256_14681 = ((!(G__14254_14679))?typeof v === 'number':null);
var G__14257_14682 = ((!(G__14255_14680))?typeof v2 === 'number':null);
var G__14242_14683 = self__.buf;
var G__14243_14684 = ((G__14254_14679)?v.buf:null);
var G__14244_14685 = ((G__14255_14680)?v2.buf:null);
var G__14245_14686 = (G__14242_14683[(0)]);
var G__14246_14687 = (G__14242_14683[(1)]);
var G__14247_14688 = (G__14242_14683[(2)]);
var G__14248_14689 = ((G__14254_14679)?(G__14243_14684[(0)]):(cljs.core.truth_(G__14256_14681)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__14249_14690 = ((G__14254_14679)?(G__14243_14684[(1)]):(cljs.core.truth_(G__14256_14681)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__14250_14691 = ((G__14254_14679)?(G__14243_14684[(2)]):(cljs.core.truth_(G__14256_14681)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__14251_14692 = ((G__14255_14680)?(G__14244_14685[(0)]):(cljs.core.truth_(G__14257_14682)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14252_14693 = ((G__14255_14680)?(G__14244_14685[(1)]):(cljs.core.truth_(G__14257_14682)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14253_14694 = ((G__14255_14680)?(G__14244_14685[(2)]):(cljs.core.truth_(G__14257_14682)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = (function (){var a__8254__auto__ = (function (){var a__8254__auto__ = G__14245_14686;
var b__8255__auto__ = G__14248_14689;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})();
var b__8255__auto__ = G__14251_14692;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13346__auto__[(1)] = (function (){var a__8254__auto__ = (function (){var a__8254__auto__ = G__14246_14687;
var b__8255__auto__ = G__14249_14690;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})();
var b__8255__auto__ = G__14252_14693;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

(dest__13346__auto__[(2)] = (function (){var a__8254__auto__ = (function (){var a__8254__auto__ = G__14247_14688;
var b__8255__auto__ = G__14250_14691;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})();
var b__8255__auto__ = G__14253_14694;
if((a__8254__auto__ <= b__8255__auto__)){
return a__8254__auto__;
} else {
return b__8255__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14258_14695 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14259_14696 = v.buf;
(dest__13335__auto__[(0)] = (function (){var a__8261__auto__ = (G__14258_14695[(0)]);
var b__8262__auto__ = (G__14259_14696[(0)]);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8261__auto__ = (G__14258_14695[(1)]);
var b__8262__auto__ = (G__14259_14696[(1)]);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8261__auto__ = (G__14258_14695[(2)]);
var b__8262__auto__ = (G__14259_14696[(2)]);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = (function (){var a__8261__auto__ = (G__14258_14695[(0)]);
var b__8262__auto__ = v;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8261__auto__ = (G__14258_14695[(1)]);
var b__8262__auto__ = v;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8261__auto__ = (G__14258_14695[(2)]);
var b__8262__auto__ = v;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
} else {
(dest__13335__auto__[(0)] = (function (){var a__8261__auto__ = (G__14258_14695[(0)]);
var b__8262__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(1)] = (function (){var a__8261__auto__ = (G__14258_14695[(1)]);
var b__8262__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13335__auto__[(2)] = (function (){var a__8261__auto__ = (G__14258_14695[(2)]);
var b__8262__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14272_14697 = (v instanceof thi.ng.geom.vector.Vec3);
var G__14273_14698 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14274_14699 = ((!(G__14272_14697))?typeof v === 'number':null);
var G__14275_14700 = ((!(G__14273_14698))?typeof v2 === 'number':null);
var G__14260_14701 = self__.buf;
var G__14261_14702 = ((G__14272_14697)?v.buf:null);
var G__14262_14703 = ((G__14273_14698)?v2.buf:null);
var G__14263_14704 = (G__14260_14701[(0)]);
var G__14264_14705 = (G__14260_14701[(1)]);
var G__14265_14706 = (G__14260_14701[(2)]);
var G__14266_14707 = ((G__14272_14697)?(G__14261_14702[(0)]):(cljs.core.truth_(G__14274_14699)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__14267_14708 = ((G__14272_14697)?(G__14261_14702[(1)]):(cljs.core.truth_(G__14274_14699)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__14268_14709 = ((G__14272_14697)?(G__14261_14702[(2)]):(cljs.core.truth_(G__14274_14699)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__14269_14710 = ((G__14273_14698)?(G__14262_14703[(0)]):(cljs.core.truth_(G__14275_14700)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14270_14711 = ((G__14273_14698)?(G__14262_14703[(1)]):(cljs.core.truth_(G__14275_14700)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14271_14712 = ((G__14273_14698)?(G__14262_14703[(2)]):(cljs.core.truth_(G__14275_14700)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = (function (){var a__8261__auto__ = (function (){var a__8261__auto__ = G__14263_14704;
var b__8262__auto__ = G__14266_14707;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})();
var b__8262__auto__ = G__14269_14710;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13346__auto__[(1)] = (function (){var a__8261__auto__ = (function (){var a__8261__auto__ = G__14264_14705;
var b__8262__auto__ = G__14267_14708;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})();
var b__8262__auto__ = G__14270_14711;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

(dest__13346__auto__[(2)] = (function (){var a__8261__auto__ = (function (){var a__8261__auto__ = G__14265_14706;
var b__8262__auto__ = G__14268_14709;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})();
var b__8262__auto__ = G__14271_14712;
if((a__8261__auto__ >= b__8262__auto__)){
return a__8261__auto__;
} else {
return b__8262__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__14276 = self__.buf;
var G__14277 = (G__14276[(0)]);
var G__14278 = (G__14276[(1)]);
var G__14279 = (G__14276[(2)]);
(b[(0)] = G__14277);

(b[(1)] = ((G__14278 * c) - (G__14279 * s)));

(b[(2)] = ((G__14278 * s) + (G__14279 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__14280 = self__.buf;
var G__14281 = (G__14280[(0)]);
var G__14282 = (G__14280[(1)]);
var G__14283 = (G__14280[(2)]);
(b[(0)] = ((G__14281 * c) + (G__14283 * s)));

(b[(1)] = G__14282);

(b[(2)] = ((G__14283 * c) - (G__14281 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__14284 = self__.buf;
var G__14285 = (G__14284[(0)]);
var G__14286 = (G__14284[(1)]);
var G__14287 = (G__14284[(2)]);
(b[(0)] = ((G__14285 * c) - (G__14286 * s)));

(b[(1)] = ((G__14285 * s) + (G__14286 * c)));

(b[(2)] = G__14287);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__14288 = self__.buf;
var G__14290 = (G__14288[(0)]);
var G__14291 = (G__14288[(1)]);
var G__14292 = (G__14288[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14289 = v.buf;
var G__14293 = (G__14289[(0)]);
var G__14294 = (G__14289[(1)]);
var G__14295 = (G__14289[(2)]);
var ux_SINGLEQUOTE_ = (G__14293 * G__14290);
var uy_SINGLEQUOTE_ = (G__14293 * G__14291);
var uz_SINGLEQUOTE_ = (G__14293 * G__14292);
var vx_SINGLEQUOTE_ = (G__14294 * G__14290);
var vy_SINGLEQUOTE_ = (G__14294 * G__14291);
var vz_SINGLEQUOTE_ = (G__14294 * G__14292);
var wx_SINGLEQUOTE_ = (G__14295 * G__14290);
var wy_SINGLEQUOTE_ = (G__14295 * G__14291);
var wz_SINGLEQUOTE_ = (G__14295 * G__14292);
var vx2 = (G__14293 * G__14293);
var vy2 = (G__14294 * G__14294);
var vz2 = (G__14295 * G__14295);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__14293) + ((((vy2 + vz2) * G__14290) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__14293)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__14294) + ((((vx2 + vz2) * G__14291) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__14294)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__14295) + ((((vx2 + vy2) * G__14292) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__14295)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__14293 = cljs.core.nth.call(null,v,(0),0.0);
var G__14294 = cljs.core.nth.call(null,v,(1),0.0);
var G__14295 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__14293 * G__14290);
var uy_SINGLEQUOTE_ = (G__14293 * G__14291);
var uz_SINGLEQUOTE_ = (G__14293 * G__14292);
var vx_SINGLEQUOTE_ = (G__14294 * G__14290);
var vy_SINGLEQUOTE_ = (G__14294 * G__14291);
var vz_SINGLEQUOTE_ = (G__14294 * G__14292);
var wx_SINGLEQUOTE_ = (G__14295 * G__14290);
var wy_SINGLEQUOTE_ = (G__14295 * G__14291);
var wz_SINGLEQUOTE_ = (G__14295 * G__14292);
var vx2 = (G__14293 * G__14293);
var vy2 = (G__14294 * G__14294);
var vz2 = (G__14295 * G__14295);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__14293) + ((((vy2 + vz2) * G__14290) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__14293)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__14294) + ((((vx2 + vz2) * G__14291) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__14294)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__14295) + ((((vx2 + vy2) * G__14292) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__14295)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.vector.Vec3.prototype.call = (function() {
var G__14713 = null;
var G__14713__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__14713__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__14713 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__14713__2.call(this,self__,k);
case 3:
return G__14713__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14713.cljs$core$IFn$_invoke$arity$2 = G__14713__2;
G__14713.cljs$core$IFn$_invoke$arity$3 = G__14713__3;
return G__14713;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args14003){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14003)));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.math.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__14296 = self__.buf;
var G__14297 = (G__14296[(0)]);
var G__14298 = (G__14296[(1)]);
var G__14299 = (G__14296[(2)]);
var l = Math.sqrt((((G__14297 * G__14297) + (G__14298 * G__14298)) + (G__14299 * G__14299)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__14297 / l));

(b[(1)] = (G__14298 / l));

(b[(2)] = (G__14299 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__14300 = self__.buf;
var G__14301 = (G__14300[(0)]);
var G__14302 = (G__14300[(1)]);
var G__14303 = (G__14300[(2)]);
var l = Math.sqrt((((G__14301 * G__14301) + (G__14302 * G__14302)) + (G__14303 * G__14303)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__14301 * l__$1));

(b[(1)] = (G__14302 * l__$1));

(b[(2)] = (G__14303 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__14304 = self__.buf;
var G__14305 = (G__14304[(0)]);
var G__14306 = (G__14304[(1)]);
var G__14307 = (G__14304[(2)]);
return Math.sqrt((((G__14305 * G__14305) + (G__14306 * G__14306)) + (G__14307 * G__14307)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__14308 = self__.buf;
var G__14309 = (G__14308[(0)]);
var G__14310 = (G__14308[(1)]);
var G__14311 = (G__14308[(2)]);
return (((G__14309 * G__14309) + (G__14310 * G__14310)) + (G__14311 * G__14311));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14324_14714 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14325_14715 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14326_14716 = ((!(G__14324_14714))?typeof a === 'number':null);
var G__14327_14717 = ((!(G__14325_14715))?typeof b === 'number':null);
var G__14312_14718 = self__.buf;
var G__14313_14719 = ((G__14324_14714)?a.buf:null);
var G__14314_14720 = ((G__14325_14715)?b.buf:null);
var G__14315_14721 = (G__14312_14718[(0)]);
var G__14316_14722 = (G__14312_14718[(1)]);
var G__14317_14723 = (G__14312_14718[(2)]);
var G__14318_14724 = ((G__14324_14714)?(G__14313_14719[(0)]):(cljs.core.truth_(G__14326_14716)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__14319_14725 = ((G__14324_14714)?(G__14313_14719[(1)]):(cljs.core.truth_(G__14326_14716)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__14320_14726 = ((G__14324_14714)?(G__14313_14719[(2)]):(cljs.core.truth_(G__14326_14716)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__14321_14727 = ((G__14325_14715)?(G__14314_14720[(0)]):(cljs.core.truth_(G__14327_14717)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__14322_14728 = ((G__14325_14715)?(G__14314_14720[(1)]):(cljs.core.truth_(G__14327_14717)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__14323_14729 = ((G__14325_14715)?(G__14314_14720[(2)]):(cljs.core.truth_(G__14327_14717)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14315_14721 * G__14318_14724) - G__14321_14727));

(dest__13346__auto__[(1)] = ((G__14316_14722 * G__14319_14725) - G__14322_14728));

(dest__13346__auto__[(2)] = ((G__14317_14723 * G__14320_14726) - G__14323_14729));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14328_14730 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14329_14731 = v.buf;
(dest__13335__auto__[(0)] = ((G__14328_14730[(0)]) * (G__14329_14731[(0)])));

(dest__13335__auto__[(1)] = ((G__14328_14730[(1)]) * (G__14329_14731[(1)])));

(dest__13335__auto__[(2)] = ((G__14328_14730[(2)]) * (G__14329_14731[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14328_14730[(0)]) * v));

(dest__13335__auto__[(1)] = ((G__14328_14730[(1)]) * v));

(dest__13335__auto__[(2)] = ((G__14328_14730[(2)]) * v));
} else {
(dest__13335__auto__[(0)] = ((G__14328_14730[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14328_14730[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14328_14730[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14342_14732 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14343_14733 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14344_14734 = ((!(G__14342_14732))?typeof v1 === 'number':null);
var G__14345_14735 = ((!(G__14343_14733))?typeof v2 === 'number':null);
var G__14330_14736 = self__.buf;
var G__14331_14737 = ((G__14342_14732)?v1.buf:null);
var G__14332_14738 = ((G__14343_14733)?v2.buf:null);
var G__14333_14739 = (G__14330_14736[(0)]);
var G__14334_14740 = (G__14330_14736[(1)]);
var G__14335_14741 = (G__14330_14736[(2)]);
var G__14336_14742 = ((G__14342_14732)?(G__14331_14737[(0)]):(cljs.core.truth_(G__14344_14734)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14337_14743 = ((G__14342_14732)?(G__14331_14737[(1)]):(cljs.core.truth_(G__14344_14734)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14338_14744 = ((G__14342_14732)?(G__14331_14737[(2)]):(cljs.core.truth_(G__14344_14734)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14339_14745 = ((G__14343_14733)?(G__14332_14738[(0)]):(cljs.core.truth_(G__14345_14735)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14340_14746 = ((G__14343_14733)?(G__14332_14738[(1)]):(cljs.core.truth_(G__14345_14735)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14341_14747 = ((G__14343_14733)?(G__14332_14738[(2)]):(cljs.core.truth_(G__14345_14735)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14333_14739 * G__14336_14742) * G__14339_14745));

(dest__13346__auto__[(1)] = ((G__14334_14740 * G__14337_14743) * G__14340_14746));

(dest__13346__auto__[(2)] = ((G__14335_14741 * G__14338_14744) * G__14341_14747));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__14346 = self__.buf;
var dest__13324__auto__ = (new Float32Array((3)));
(dest__13324__auto__[(0)] = ((G__14346[(0)]) * x));

(dest__13324__auto__[(1)] = ((G__14346[(1)]) * y));

(dest__13324__auto__[(2)] = ((G__14346[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__13324__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13318__auto__ = (new Float32Array((3)));
var G__14347_14748 = self__.buf;
(dest__13318__auto__[(0)] = (- (G__14347_14748[(0)])));

(dest__13318__auto__[(1)] = (- (G__14347_14748[(1)])));

(dest__13318__auto__[(2)] = (- (G__14347_14748[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__13318__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14348_14749 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14349_14750 = v.buf;
(dest__13335__auto__[(0)] = ((G__14348_14749[(0)]) - (G__14349_14750[(0)])));

(dest__13335__auto__[(1)] = ((G__14348_14749[(1)]) - (G__14349_14750[(1)])));

(dest__13335__auto__[(2)] = ((G__14348_14749[(2)]) - (G__14349_14750[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14348_14749[(0)]) - v));

(dest__13335__auto__[(1)] = ((G__14348_14749[(1)]) - v));

(dest__13335__auto__[(2)] = ((G__14348_14749[(2)]) - v));
} else {
(dest__13335__auto__[(0)] = ((G__14348_14749[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14348_14749[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14348_14749[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14362_14751 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14363_14752 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14364_14753 = ((!(G__14362_14751))?typeof v1 === 'number':null);
var G__14365_14754 = ((!(G__14363_14752))?typeof v2 === 'number':null);
var G__14350_14755 = self__.buf;
var G__14351_14756 = ((G__14362_14751)?v1.buf:null);
var G__14352_14757 = ((G__14363_14752)?v2.buf:null);
var G__14353_14758 = (G__14350_14755[(0)]);
var G__14354_14759 = (G__14350_14755[(1)]);
var G__14355_14760 = (G__14350_14755[(2)]);
var G__14356_14761 = ((G__14362_14751)?(G__14351_14756[(0)]):(cljs.core.truth_(G__14364_14753)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14357_14762 = ((G__14362_14751)?(G__14351_14756[(1)]):(cljs.core.truth_(G__14364_14753)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14358_14763 = ((G__14362_14751)?(G__14351_14756[(2)]):(cljs.core.truth_(G__14364_14753)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14359_14764 = ((G__14363_14752)?(G__14352_14757[(0)]):(cljs.core.truth_(G__14365_14754)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14360_14765 = ((G__14363_14752)?(G__14352_14757[(1)]):(cljs.core.truth_(G__14365_14754)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14361_14766 = ((G__14363_14752)?(G__14352_14757[(2)]):(cljs.core.truth_(G__14365_14754)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14353_14758 - G__14356_14761) - G__14359_14764));

(dest__13346__auto__[(1)] = ((G__14354_14759 - G__14357_14762) - G__14360_14765));

(dest__13346__auto__[(2)] = ((G__14355_14760 - G__14358_14763) - G__14361_14766));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__14366 = self__.buf;
var dest__13324__auto__ = (new Float32Array((3)));
(dest__13324__auto__[(0)] = ((G__14366[(0)]) - x));

(dest__13324__auto__[(1)] = ((G__14366[(1)]) - y));

(dest__13324__auto__[(2)] = ((G__14366[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__13324__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14379_14767 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14380_14768 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14381_14769 = ((!(G__14379_14767))?typeof a === 'number':null);
var G__14382_14770 = ((!(G__14380_14768))?typeof b === 'number':null);
var G__14367_14771 = self__.buf;
var G__14368_14772 = ((G__14379_14767)?a.buf:null);
var G__14369_14773 = ((G__14380_14768)?b.buf:null);
var G__14370_14774 = (G__14367_14771[(0)]);
var G__14371_14775 = (G__14367_14771[(1)]);
var G__14372_14776 = (G__14367_14771[(2)]);
var G__14373_14777 = ((G__14379_14767)?(G__14368_14772[(0)]):(cljs.core.truth_(G__14381_14769)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__14374_14778 = ((G__14379_14767)?(G__14368_14772[(1)]):(cljs.core.truth_(G__14381_14769)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__14375_14779 = ((G__14379_14767)?(G__14368_14772[(2)]):(cljs.core.truth_(G__14381_14769)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__14376_14780 = ((G__14380_14768)?(G__14369_14773[(0)]):(cljs.core.truth_(G__14382_14770)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__14377_14781 = ((G__14380_14768)?(G__14369_14773[(1)]):(cljs.core.truth_(G__14382_14770)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__14378_14782 = ((G__14380_14768)?(G__14369_14773[(2)]):(cljs.core.truth_(G__14382_14770)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14370_14774 * G__14373_14777) + G__14376_14780));

(dest__13346__auto__[(1)] = ((G__14371_14775 * G__14374_14778) + G__14377_14781));

(dest__13346__auto__[(2)] = ((G__14372_14776 * G__14375_14779) + G__14378_14782));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14395_14783 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14396_14784 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14397_14785 = ((!(G__14395_14783))?typeof a === 'number':null);
var G__14398_14786 = ((!(G__14396_14784))?typeof b === 'number':null);
var G__14383_14787 = self__.buf;
var G__14384_14788 = ((G__14395_14783)?a.buf:null);
var G__14385_14789 = ((G__14396_14784)?b.buf:null);
var G__14386_14790 = (G__14383_14787[(0)]);
var G__14387_14791 = (G__14383_14787[(1)]);
var G__14388_14792 = (G__14383_14787[(2)]);
var G__14389_14793 = ((G__14395_14783)?(G__14384_14788[(0)]):(cljs.core.truth_(G__14397_14785)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__14390_14794 = ((G__14395_14783)?(G__14384_14788[(1)]):(cljs.core.truth_(G__14397_14785)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__14391_14795 = ((G__14395_14783)?(G__14384_14788[(2)]):(cljs.core.truth_(G__14397_14785)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__14392_14796 = ((G__14396_14784)?(G__14385_14789[(0)]):(cljs.core.truth_(G__14398_14786)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__14393_14797 = ((G__14396_14784)?(G__14385_14789[(1)]):(cljs.core.truth_(G__14398_14786)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__14394_14798 = ((G__14396_14784)?(G__14385_14789[(2)]):(cljs.core.truth_(G__14398_14786)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__13346__auto__[(0)] = ((G__14386_14790 + G__14389_14793) * G__14392_14796));

(dest__13346__auto__[(1)] = ((G__14387_14791 + G__14390_14794) * G__14393_14797));

(dest__13346__auto__[(2)] = ((G__14388_14792 + G__14391_14795) * G__14394_14798));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13318__auto__ = (new Float32Array((3)));
var G__14399_14799 = self__.buf;
(dest__13318__auto__[(0)] = ((1) / (G__14399_14799[(0)])));

(dest__13318__auto__[(1)] = ((1) / (G__14399_14799[(1)])));

(dest__13318__auto__[(2)] = ((1) / (G__14399_14799[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__13318__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14400_14800 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14401_14801 = v.buf;
(dest__13335__auto__[(0)] = ((G__14400_14800[(0)]) / (G__14401_14801[(0)])));

(dest__13335__auto__[(1)] = ((G__14400_14800[(1)]) / (G__14401_14801[(1)])));

(dest__13335__auto__[(2)] = ((G__14400_14800[(2)]) / (G__14401_14801[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14400_14800[(0)]) / v));

(dest__13335__auto__[(1)] = ((G__14400_14800[(1)]) / v));

(dest__13335__auto__[(2)] = ((G__14400_14800[(2)]) / v));
} else {
(dest__13335__auto__[(0)] = ((G__14400_14800[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14400_14800[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14400_14800[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14414_14802 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14415_14803 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14416_14804 = ((!(G__14414_14802))?typeof v1 === 'number':null);
var G__14417_14805 = ((!(G__14415_14803))?typeof v2 === 'number':null);
var G__14402_14806 = self__.buf;
var G__14403_14807 = ((G__14414_14802)?v1.buf:null);
var G__14404_14808 = ((G__14415_14803)?v2.buf:null);
var G__14405_14809 = (G__14402_14806[(0)]);
var G__14406_14810 = (G__14402_14806[(1)]);
var G__14407_14811 = (G__14402_14806[(2)]);
var G__14408_14812 = ((G__14414_14802)?(G__14403_14807[(0)]):(cljs.core.truth_(G__14416_14804)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14409_14813 = ((G__14414_14802)?(G__14403_14807[(1)]):(cljs.core.truth_(G__14416_14804)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14410_14814 = ((G__14414_14802)?(G__14403_14807[(2)]):(cljs.core.truth_(G__14416_14804)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14411_14815 = ((G__14415_14803)?(G__14404_14808[(0)]):(cljs.core.truth_(G__14417_14805)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14412_14816 = ((G__14415_14803)?(G__14404_14808[(1)]):(cljs.core.truth_(G__14417_14805)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14413_14817 = ((G__14415_14803)?(G__14404_14808[(2)]):(cljs.core.truth_(G__14417_14805)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14405_14809 / G__14408_14812) / G__14411_14815));

(dest__13346__auto__[(1)] = ((G__14406_14810 / G__14409_14813) / G__14412_14816));

(dest__13346__auto__[(2)] = ((G__14407_14811 / G__14410_14814) / G__14413_14817));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__14418 = self__.buf;
var dest__13324__auto__ = (new Float32Array((3)));
(dest__13324__auto__[(0)] = ((G__14418[(0)]) / x));

(dest__13324__auto__[(1)] = ((G__14418[(1)]) / y));

(dest__13324__auto__[(2)] = ((G__14418[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__13324__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__13335__auto__ = (new Float32Array((3)));
var G__14419_14818 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__14420_14819 = v.buf;
(dest__13335__auto__[(0)] = ((G__14419_14818[(0)]) + (G__14420_14819[(0)])));

(dest__13335__auto__[(1)] = ((G__14419_14818[(1)]) + (G__14420_14819[(1)])));

(dest__13335__auto__[(2)] = ((G__14419_14818[(2)]) + (G__14420_14819[(2)])));
} else {
if(typeof v === 'number'){
(dest__13335__auto__[(0)] = ((G__14419_14818[(0)]) + v));

(dest__13335__auto__[(1)] = ((G__14419_14818[(1)]) + v));

(dest__13335__auto__[(2)] = ((G__14419_14818[(2)]) + v));
} else {
(dest__13335__auto__[(0)] = ((G__14419_14818[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__13335__auto__[(1)] = ((G__14419_14818[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__13335__auto__[(2)] = ((G__14419_14818[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__13335__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14433_14820 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__14434_14821 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__14435_14822 = ((!(G__14433_14820))?typeof v1 === 'number':null);
var G__14436_14823 = ((!(G__14434_14821))?typeof v2 === 'number':null);
var G__14421_14824 = self__.buf;
var G__14422_14825 = ((G__14433_14820)?v1.buf:null);
var G__14423_14826 = ((G__14434_14821)?v2.buf:null);
var G__14424_14827 = (G__14421_14824[(0)]);
var G__14425_14828 = (G__14421_14824[(1)]);
var G__14426_14829 = (G__14421_14824[(2)]);
var G__14427_14830 = ((G__14433_14820)?(G__14422_14825[(0)]):(cljs.core.truth_(G__14435_14822)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__14428_14831 = ((G__14433_14820)?(G__14422_14825[(1)]):(cljs.core.truth_(G__14435_14822)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__14429_14832 = ((G__14433_14820)?(G__14422_14825[(2)]):(cljs.core.truth_(G__14435_14822)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__14430_14833 = ((G__14434_14821)?(G__14423_14826[(0)]):(cljs.core.truth_(G__14436_14823)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__14431_14834 = ((G__14434_14821)?(G__14423_14826[(1)]):(cljs.core.truth_(G__14436_14823)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__14432_14835 = ((G__14434_14821)?(G__14423_14826[(2)]):(cljs.core.truth_(G__14436_14823)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__13346__auto__[(0)] = ((G__14424_14827 + G__14427_14830) + G__14430_14833));

(dest__13346__auto__[(1)] = ((G__14425_14828 + G__14428_14831) + G__14431_14834));

(dest__13346__auto__[(2)] = ((G__14426_14829 + G__14429_14832) + G__14432_14835));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__14437 = self__.buf;
var dest__13324__auto__ = (new Float32Array((3)));
(dest__13324__auto__[(0)] = ((G__14437[(0)]) + x));

(dest__13324__auto__[(1)] = ((G__14437[(1)]) + y));

(dest__13324__auto__[(2)] = ((G__14437[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__13324__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__13318__auto__ = (new Float32Array((3)));
var G__14438_14836 = self__.buf;
(dest__13318__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__14438_14836[(0)])));

(dest__13318__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__14438_14836[(1)])));

(dest__13318__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__14438_14836[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__13318__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__13346__auto__ = (new Float32Array((3)));
var G__14451_14837 = (a instanceof thi.ng.geom.vector.Vec3);
var G__14452_14838 = (b instanceof thi.ng.geom.vector.Vec3);
var G__14453_14839 = ((!(G__14451_14837))?typeof a === 'number':null);
var G__14454_14840 = ((!(G__14452_14838))?typeof b === 'number':null);
var G__14439_14841 = self__.buf;
var G__14440_14842 = ((G__14451_14837)?a.buf:null);
var G__14441_14843 = ((G__14452_14838)?b.buf:null);
var G__14442_14844 = (G__14439_14841[(0)]);
var G__14443_14845 = (G__14439_14841[(1)]);
var G__14444_14846 = (G__14439_14841[(2)]);
var G__14445_14847 = ((G__14451_14837)?(G__14440_14842[(0)]):(cljs.core.truth_(G__14453_14839)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__14446_14848 = ((G__14451_14837)?(G__14440_14842[(1)]):(cljs.core.truth_(G__14453_14839)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__14447_14849 = ((G__14451_14837)?(G__14440_14842[(2)]):(cljs.core.truth_(G__14453_14839)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__14448_14850 = ((G__14452_14838)?(G__14441_14843[(0)]):(cljs.core.truth_(G__14454_14840)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__14449_14851 = ((G__14452_14838)?(G__14441_14843[(1)]):(cljs.core.truth_(G__14454_14840)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__14450_14852 = ((G__14452_14838)?(G__14441_14843[(2)]):(cljs.core.truth_(G__14454_14840)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__13346__auto__[(0)] = ((G__14442_14844 - G__14445_14847) * G__14448_14850));

(dest__13346__auto__[(1)] = ((G__14443_14845 - G__14446_14848) * G__14449_14851));

(dest__13346__auto__[(2)] = ((G__14444_14846 - G__14447_14849) * G__14450_14852));

return (new thi.ng.geom.vector.Vec3(dest__13346__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"thi.ng.geom.vector/Vec3");
});

/**
 * Positional factory function for thi.ng.geom.vector/Vec3.
 */
thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__14855){
var G__14853 = (((G__14855 instanceof thi.ng.geom.vector.Vec2))?G__14855.buf:G__14855.buf);
return (G__14853[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__14858){
var G__14856 = (((G__14858 instanceof thi.ng.geom.vector.Vec2))?G__14858.buf:G__14858.buf);
var G__14857 = (new Float32Array(2));
(G__14857[(0)] = (G__14856[(0)]));

(G__14857[(1)] = (G__14856[(0)]));

return (new thi.ng.geom.vector.Vec2(G__14857,null,cljs.core.meta.call(null,G__14858)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__14861){
var G__14859 = (((G__14861 instanceof thi.ng.geom.vector.Vec2))?G__14861.buf:G__14861.buf);
var G__14860 = (new Float32Array(3));
(G__14860[(0)] = (G__14859[(0)]));

(G__14860[(1)] = (G__14859[(0)]));

(G__14860[(2)] = (G__14859[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14860,null,cljs.core.meta.call(null,G__14861)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__14864){
var G__14862 = (((G__14864 instanceof thi.ng.geom.vector.Vec2))?G__14864.buf:G__14864.buf);
var G__14863 = (new Float32Array(3));
(G__14863[(0)] = (G__14862[(0)]));

(G__14863[(1)] = (G__14862[(0)]));

(G__14863[(2)] = (G__14862[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14863,null,cljs.core.meta.call(null,G__14864)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__14867){
var G__14865 = (((G__14867 instanceof thi.ng.geom.vector.Vec2))?G__14867.buf:G__14867.buf);
var G__14866 = (new Float32Array(3));
(G__14866[(0)] = (G__14865[(0)]));

(G__14866[(1)] = (G__14865[(0)]));

(G__14866[(2)] = (G__14865[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14866,null,cljs.core.meta.call(null,G__14867)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__14870){
var G__14868 = (((G__14870 instanceof thi.ng.geom.vector.Vec2))?G__14870.buf:G__14870.buf);
var G__14869 = (new Float32Array(2));
(G__14869[(0)] = (G__14868[(0)]));

(G__14869[(1)] = (G__14868[(1)]));

return (new thi.ng.geom.vector.Vec2(G__14869,null,cljs.core.meta.call(null,G__14870)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__14873){
var G__14871 = (((G__14873 instanceof thi.ng.geom.vector.Vec2))?G__14873.buf:G__14873.buf);
var G__14872 = (new Float32Array(3));
(G__14872[(0)] = (G__14871[(0)]));

(G__14872[(1)] = (G__14871[(1)]));

(G__14872[(2)] = (G__14871[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14872,null,cljs.core.meta.call(null,G__14873)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__14876){
var G__14874 = (((G__14876 instanceof thi.ng.geom.vector.Vec2))?G__14876.buf:G__14876.buf);
var G__14875 = (new Float32Array(3));
(G__14875[(0)] = (G__14874[(0)]));

(G__14875[(1)] = (G__14874[(1)]));

(G__14875[(2)] = (G__14874[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14875,null,cljs.core.meta.call(null,G__14876)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__14879){
var G__14877 = (((G__14879 instanceof thi.ng.geom.vector.Vec2))?G__14879.buf:G__14879.buf);
var G__14878 = (new Float32Array(3));
(G__14878[(0)] = (G__14877[(0)]));

(G__14878[(1)] = (G__14877[(1)]));

(G__14878[(2)] = (G__14877[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14878,null,cljs.core.meta.call(null,G__14879)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__14882){
var G__14880 = (((G__14882 instanceof thi.ng.geom.vector.Vec2))?G__14882.buf:G__14882.buf);
var G__14881 = (new Float32Array(2));
(G__14881[(0)] = (G__14880[(0)]));

(G__14881[(1)] = (G__14880[(2)]));

return (new thi.ng.geom.vector.Vec2(G__14881,null,cljs.core.meta.call(null,G__14882)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__14885){
var G__14883 = (((G__14885 instanceof thi.ng.geom.vector.Vec2))?G__14885.buf:G__14885.buf);
var G__14884 = (new Float32Array(3));
(G__14884[(0)] = (G__14883[(0)]));

(G__14884[(1)] = (G__14883[(2)]));

(G__14884[(2)] = (G__14883[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14884,null,cljs.core.meta.call(null,G__14885)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__14888){
var G__14886 = (((G__14888 instanceof thi.ng.geom.vector.Vec2))?G__14888.buf:G__14888.buf);
var G__14887 = (new Float32Array(3));
(G__14887[(0)] = (G__14886[(0)]));

(G__14887[(1)] = (G__14886[(2)]));

(G__14887[(2)] = (G__14886[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14887,null,cljs.core.meta.call(null,G__14888)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__14891){
var G__14889 = (((G__14891 instanceof thi.ng.geom.vector.Vec2))?G__14891.buf:G__14891.buf);
var G__14890 = (new Float32Array(3));
(G__14890[(0)] = (G__14889[(0)]));

(G__14890[(1)] = (G__14889[(2)]));

(G__14890[(2)] = (G__14889[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14890,null,cljs.core.meta.call(null,G__14891)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__14894){
var G__14892 = (((G__14894 instanceof thi.ng.geom.vector.Vec2))?G__14894.buf:G__14894.buf);
return (G__14892[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__14897){
var G__14895 = (((G__14897 instanceof thi.ng.geom.vector.Vec2))?G__14897.buf:G__14897.buf);
var G__14896 = (new Float32Array(2));
(G__14896[(0)] = (G__14895[(1)]));

(G__14896[(1)] = (G__14895[(0)]));

return (new thi.ng.geom.vector.Vec2(G__14896,null,cljs.core.meta.call(null,G__14897)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__14900){
var G__14898 = (((G__14900 instanceof thi.ng.geom.vector.Vec2))?G__14900.buf:G__14900.buf);
var G__14899 = (new Float32Array(3));
(G__14899[(0)] = (G__14898[(1)]));

(G__14899[(1)] = (G__14898[(0)]));

(G__14899[(2)] = (G__14898[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14899,null,cljs.core.meta.call(null,G__14900)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__14903){
var G__14901 = (((G__14903 instanceof thi.ng.geom.vector.Vec2))?G__14903.buf:G__14903.buf);
var G__14902 = (new Float32Array(3));
(G__14902[(0)] = (G__14901[(1)]));

(G__14902[(1)] = (G__14901[(0)]));

(G__14902[(2)] = (G__14901[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14902,null,cljs.core.meta.call(null,G__14903)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__14906){
var G__14904 = (((G__14906 instanceof thi.ng.geom.vector.Vec2))?G__14906.buf:G__14906.buf);
var G__14905 = (new Float32Array(3));
(G__14905[(0)] = (G__14904[(1)]));

(G__14905[(1)] = (G__14904[(0)]));

(G__14905[(2)] = (G__14904[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14905,null,cljs.core.meta.call(null,G__14906)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__14909){
var G__14907 = (((G__14909 instanceof thi.ng.geom.vector.Vec2))?G__14909.buf:G__14909.buf);
var G__14908 = (new Float32Array(2));
(G__14908[(0)] = (G__14907[(1)]));

(G__14908[(1)] = (G__14907[(1)]));

return (new thi.ng.geom.vector.Vec2(G__14908,null,cljs.core.meta.call(null,G__14909)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__14912){
var G__14910 = (((G__14912 instanceof thi.ng.geom.vector.Vec2))?G__14912.buf:G__14912.buf);
var G__14911 = (new Float32Array(3));
(G__14911[(0)] = (G__14910[(1)]));

(G__14911[(1)] = (G__14910[(1)]));

(G__14911[(2)] = (G__14910[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14911,null,cljs.core.meta.call(null,G__14912)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__14915){
var G__14913 = (((G__14915 instanceof thi.ng.geom.vector.Vec2))?G__14915.buf:G__14915.buf);
var G__14914 = (new Float32Array(3));
(G__14914[(0)] = (G__14913[(1)]));

(G__14914[(1)] = (G__14913[(1)]));

(G__14914[(2)] = (G__14913[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14914,null,cljs.core.meta.call(null,G__14915)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__14918){
var G__14916 = (((G__14918 instanceof thi.ng.geom.vector.Vec2))?G__14918.buf:G__14918.buf);
var G__14917 = (new Float32Array(3));
(G__14917[(0)] = (G__14916[(1)]));

(G__14917[(1)] = (G__14916[(1)]));

(G__14917[(2)] = (G__14916[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14917,null,cljs.core.meta.call(null,G__14918)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__14921){
var G__14919 = (((G__14921 instanceof thi.ng.geom.vector.Vec2))?G__14921.buf:G__14921.buf);
var G__14920 = (new Float32Array(2));
(G__14920[(0)] = (G__14919[(1)]));

(G__14920[(1)] = (G__14919[(2)]));

return (new thi.ng.geom.vector.Vec2(G__14920,null,cljs.core.meta.call(null,G__14921)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__14924){
var G__14922 = (((G__14924 instanceof thi.ng.geom.vector.Vec2))?G__14924.buf:G__14924.buf);
var G__14923 = (new Float32Array(3));
(G__14923[(0)] = (G__14922[(1)]));

(G__14923[(1)] = (G__14922[(2)]));

(G__14923[(2)] = (G__14922[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14923,null,cljs.core.meta.call(null,G__14924)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__14927){
var G__14925 = (((G__14927 instanceof thi.ng.geom.vector.Vec2))?G__14927.buf:G__14927.buf);
var G__14926 = (new Float32Array(3));
(G__14926[(0)] = (G__14925[(1)]));

(G__14926[(1)] = (G__14925[(2)]));

(G__14926[(2)] = (G__14925[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14926,null,cljs.core.meta.call(null,G__14927)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__14930){
var G__14928 = (((G__14930 instanceof thi.ng.geom.vector.Vec2))?G__14930.buf:G__14930.buf);
var G__14929 = (new Float32Array(3));
(G__14929[(0)] = (G__14928[(1)]));

(G__14929[(1)] = (G__14928[(2)]));

(G__14929[(2)] = (G__14928[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14929,null,cljs.core.meta.call(null,G__14930)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__14933){
var G__14931 = (((G__14933 instanceof thi.ng.geom.vector.Vec2))?G__14933.buf:G__14933.buf);
return (G__14931[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__14936){
var G__14934 = (((G__14936 instanceof thi.ng.geom.vector.Vec2))?G__14936.buf:G__14936.buf);
var G__14935 = (new Float32Array(2));
(G__14935[(0)] = (G__14934[(2)]));

(G__14935[(1)] = (G__14934[(0)]));

return (new thi.ng.geom.vector.Vec2(G__14935,null,cljs.core.meta.call(null,G__14936)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__14939){
var G__14937 = (((G__14939 instanceof thi.ng.geom.vector.Vec2))?G__14939.buf:G__14939.buf);
var G__14938 = (new Float32Array(3));
(G__14938[(0)] = (G__14937[(2)]));

(G__14938[(1)] = (G__14937[(0)]));

(G__14938[(2)] = (G__14937[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14938,null,cljs.core.meta.call(null,G__14939)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__14942){
var G__14940 = (((G__14942 instanceof thi.ng.geom.vector.Vec2))?G__14942.buf:G__14942.buf);
var G__14941 = (new Float32Array(3));
(G__14941[(0)] = (G__14940[(2)]));

(G__14941[(1)] = (G__14940[(0)]));

(G__14941[(2)] = (G__14940[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14941,null,cljs.core.meta.call(null,G__14942)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__14945){
var G__14943 = (((G__14945 instanceof thi.ng.geom.vector.Vec2))?G__14945.buf:G__14945.buf);
var G__14944 = (new Float32Array(3));
(G__14944[(0)] = (G__14943[(2)]));

(G__14944[(1)] = (G__14943[(0)]));

(G__14944[(2)] = (G__14943[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14944,null,cljs.core.meta.call(null,G__14945)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__14948){
var G__14946 = (((G__14948 instanceof thi.ng.geom.vector.Vec2))?G__14948.buf:G__14948.buf);
var G__14947 = (new Float32Array(2));
(G__14947[(0)] = (G__14946[(2)]));

(G__14947[(1)] = (G__14946[(1)]));

return (new thi.ng.geom.vector.Vec2(G__14947,null,cljs.core.meta.call(null,G__14948)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__14951){
var G__14949 = (((G__14951 instanceof thi.ng.geom.vector.Vec2))?G__14951.buf:G__14951.buf);
var G__14950 = (new Float32Array(3));
(G__14950[(0)] = (G__14949[(2)]));

(G__14950[(1)] = (G__14949[(1)]));

(G__14950[(2)] = (G__14949[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14950,null,cljs.core.meta.call(null,G__14951)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__14954){
var G__14952 = (((G__14954 instanceof thi.ng.geom.vector.Vec2))?G__14954.buf:G__14954.buf);
var G__14953 = (new Float32Array(3));
(G__14953[(0)] = (G__14952[(2)]));

(G__14953[(1)] = (G__14952[(1)]));

(G__14953[(2)] = (G__14952[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14953,null,cljs.core.meta.call(null,G__14954)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__14957){
var G__14955 = (((G__14957 instanceof thi.ng.geom.vector.Vec2))?G__14957.buf:G__14957.buf);
var G__14956 = (new Float32Array(3));
(G__14956[(0)] = (G__14955[(2)]));

(G__14956[(1)] = (G__14955[(1)]));

(G__14956[(2)] = (G__14955[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14956,null,cljs.core.meta.call(null,G__14957)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__14960){
var G__14958 = (((G__14960 instanceof thi.ng.geom.vector.Vec2))?G__14960.buf:G__14960.buf);
var G__14959 = (new Float32Array(2));
(G__14959[(0)] = (G__14958[(2)]));

(G__14959[(1)] = (G__14958[(2)]));

return (new thi.ng.geom.vector.Vec2(G__14959,null,cljs.core.meta.call(null,G__14960)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__14963){
var G__14961 = (((G__14963 instanceof thi.ng.geom.vector.Vec2))?G__14963.buf:G__14963.buf);
var G__14962 = (new Float32Array(3));
(G__14962[(0)] = (G__14961[(2)]));

(G__14962[(1)] = (G__14961[(2)]));

(G__14962[(2)] = (G__14961[(0)]));

return (new thi.ng.geom.vector.Vec3(G__14962,null,cljs.core.meta.call(null,G__14963)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__14966){
var G__14964 = (((G__14966 instanceof thi.ng.geom.vector.Vec2))?G__14966.buf:G__14966.buf);
var G__14965 = (new Float32Array(3));
(G__14965[(0)] = (G__14964[(2)]));

(G__14965[(1)] = (G__14964[(2)]));

(G__14965[(2)] = (G__14964[(1)]));

return (new thi.ng.geom.vector.Vec3(G__14965,null,cljs.core.meta.call(null,G__14966)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__14969){
var G__14967 = (((G__14969 instanceof thi.ng.geom.vector.Vec2))?G__14969.buf:G__14969.buf);
var G__14968 = (new Float32Array(3));
(G__14968[(0)] = (G__14967[(2)]));

(G__14968[(1)] = (G__14967[(2)]));

(G__14968[(2)] = (G__14967[(2)]));

return (new thi.ng.geom.vector.Vec3(G__14968,null,cljs.core.meta.call(null,G__14969)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__5455__auto__ = (function (){var and__3938__auto__ = ((1) === c);
if(and__3938__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var idx = temp__5455__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if((((c <= cljs.core.count.call(null,keymap))) && ((((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5455__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__14970 = (i + (1));
var G__14971 = cljs.core.next.call(null,n__$1);
i = G__14970;
n__$1 = G__14971;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__14972 = null;
var G__14972__1 = (function (a){
return a;
});
var G__14972__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__14972 = function(a,b){
switch(arguments.length){
case 1:
return G__14972__1.call(this,a);
case 2:
return G__14972__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14972.cljs$core$IFn$_invoke$arity$1 = G__14972__1;
G__14972.cljs$core$IFn$_invoke$arity$2 = G__14972__2;
return G__14972;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__14973 = null;
var G__14973__1 = (function (a){
return a;
});
var G__14973__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__14973 = function(a,b){
switch(arguments.length){
case 1:
return G__14973__1.call(this,a);
case 2:
return G__14973__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14973.cljs$core$IFn$_invoke$arity$1 = G__14973__1;
G__14973.cljs$core$IFn$_invoke$arity$2 = G__14973__2;
return G__14973;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var G__14975 = arguments.length;
switch (G__14975) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
});

thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var G__14978 = arguments.length;
switch (G__14978) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
});

thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var G__14981 = arguments.length;
switch (G__14981) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
});

thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var G__14984 = arguments.length;
switch (G__14984) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
});

thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.call(null,(1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.call(null,(0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var G__14987 = arguments.length;
switch (G__14987) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var G__14990 = arguments.length;
switch (G__14990) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=vector.js.map
