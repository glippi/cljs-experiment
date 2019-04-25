// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11578){
var map__11579 = p__11578;
var map__11579__$1 = ((((!((map__11579 == null)))?(((((map__11579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11579):map__11579);
var m = map__11579__$1;
var n = cljs.core.get.call(null,map__11579__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11581_11603 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11582_11604 = null;
var count__11583_11605 = (0);
var i__11584_11606 = (0);
while(true){
if((i__11584_11606 < count__11583_11605)){
var f_11607 = cljs.core._nth.call(null,chunk__11582_11604,i__11584_11606);
cljs.core.println.call(null,"  ",f_11607);


var G__11608 = seq__11581_11603;
var G__11609 = chunk__11582_11604;
var G__11610 = count__11583_11605;
var G__11611 = (i__11584_11606 + (1));
seq__11581_11603 = G__11608;
chunk__11582_11604 = G__11609;
count__11583_11605 = G__11610;
i__11584_11606 = G__11611;
continue;
} else {
var temp__5457__auto___11612 = cljs.core.seq.call(null,seq__11581_11603);
if(temp__5457__auto___11612){
var seq__11581_11613__$1 = temp__5457__auto___11612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11581_11613__$1)){
var c__4351__auto___11614 = cljs.core.chunk_first.call(null,seq__11581_11613__$1);
var G__11615 = cljs.core.chunk_rest.call(null,seq__11581_11613__$1);
var G__11616 = c__4351__auto___11614;
var G__11617 = cljs.core.count.call(null,c__4351__auto___11614);
var G__11618 = (0);
seq__11581_11603 = G__11615;
chunk__11582_11604 = G__11616;
count__11583_11605 = G__11617;
i__11584_11606 = G__11618;
continue;
} else {
var f_11619 = cljs.core.first.call(null,seq__11581_11613__$1);
cljs.core.println.call(null,"  ",f_11619);


var G__11620 = cljs.core.next.call(null,seq__11581_11613__$1);
var G__11621 = null;
var G__11622 = (0);
var G__11623 = (0);
seq__11581_11603 = G__11620;
chunk__11582_11604 = G__11621;
count__11583_11605 = G__11622;
i__11584_11606 = G__11623;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11624 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11624);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11624)))?cljs.core.second.call(null,arglists_11624):arglists_11624));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11585_11625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11586_11626 = null;
var count__11587_11627 = (0);
var i__11588_11628 = (0);
while(true){
if((i__11588_11628 < count__11587_11627)){
var vec__11589_11629 = cljs.core._nth.call(null,chunk__11586_11626,i__11588_11628);
var name_11630 = cljs.core.nth.call(null,vec__11589_11629,(0),null);
var map__11592_11631 = cljs.core.nth.call(null,vec__11589_11629,(1),null);
var map__11592_11632__$1 = ((((!((map__11592_11631 == null)))?(((((map__11592_11631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11592_11631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11592_11631):map__11592_11631);
var doc_11633 = cljs.core.get.call(null,map__11592_11632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11634 = cljs.core.get.call(null,map__11592_11632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11630);

cljs.core.println.call(null," ",arglists_11634);

if(cljs.core.truth_(doc_11633)){
cljs.core.println.call(null," ",doc_11633);
} else {
}


var G__11635 = seq__11585_11625;
var G__11636 = chunk__11586_11626;
var G__11637 = count__11587_11627;
var G__11638 = (i__11588_11628 + (1));
seq__11585_11625 = G__11635;
chunk__11586_11626 = G__11636;
count__11587_11627 = G__11637;
i__11588_11628 = G__11638;
continue;
} else {
var temp__5457__auto___11639 = cljs.core.seq.call(null,seq__11585_11625);
if(temp__5457__auto___11639){
var seq__11585_11640__$1 = temp__5457__auto___11639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11585_11640__$1)){
var c__4351__auto___11641 = cljs.core.chunk_first.call(null,seq__11585_11640__$1);
var G__11642 = cljs.core.chunk_rest.call(null,seq__11585_11640__$1);
var G__11643 = c__4351__auto___11641;
var G__11644 = cljs.core.count.call(null,c__4351__auto___11641);
var G__11645 = (0);
seq__11585_11625 = G__11642;
chunk__11586_11626 = G__11643;
count__11587_11627 = G__11644;
i__11588_11628 = G__11645;
continue;
} else {
var vec__11594_11646 = cljs.core.first.call(null,seq__11585_11640__$1);
var name_11647 = cljs.core.nth.call(null,vec__11594_11646,(0),null);
var map__11597_11648 = cljs.core.nth.call(null,vec__11594_11646,(1),null);
var map__11597_11649__$1 = ((((!((map__11597_11648 == null)))?(((((map__11597_11648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11597_11648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11597_11648):map__11597_11648);
var doc_11650 = cljs.core.get.call(null,map__11597_11649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11651 = cljs.core.get.call(null,map__11597_11649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11647);

cljs.core.println.call(null," ",arglists_11651);

if(cljs.core.truth_(doc_11650)){
cljs.core.println.call(null," ",doc_11650);
} else {
}


var G__11652 = cljs.core.next.call(null,seq__11585_11640__$1);
var G__11653 = null;
var G__11654 = (0);
var G__11655 = (0);
seq__11585_11625 = G__11652;
chunk__11586_11626 = G__11653;
count__11587_11627 = G__11654;
i__11588_11628 = G__11655;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__11599 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11600 = null;
var count__11601 = (0);
var i__11602 = (0);
while(true){
if((i__11602 < count__11601)){
var role = cljs.core._nth.call(null,chunk__11600,i__11602);
var temp__5457__auto___11656__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___11656__$1)){
var spec_11657 = temp__5457__auto___11656__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11657));
} else {
}


var G__11658 = seq__11599;
var G__11659 = chunk__11600;
var G__11660 = count__11601;
var G__11661 = (i__11602 + (1));
seq__11599 = G__11658;
chunk__11600 = G__11659;
count__11601 = G__11660;
i__11602 = G__11661;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__11599);
if(temp__5457__auto____$1){
var seq__11599__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11599__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11599__$1);
var G__11662 = cljs.core.chunk_rest.call(null,seq__11599__$1);
var G__11663 = c__4351__auto__;
var G__11664 = cljs.core.count.call(null,c__4351__auto__);
var G__11665 = (0);
seq__11599 = G__11662;
chunk__11600 = G__11663;
count__11601 = G__11664;
i__11602 = G__11665;
continue;
} else {
var role = cljs.core.first.call(null,seq__11599__$1);
var temp__5457__auto___11666__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___11666__$2)){
var spec_11667 = temp__5457__auto___11666__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11667));
} else {
}


var G__11668 = cljs.core.next.call(null,seq__11599__$1);
var G__11669 = null;
var G__11670 = (0);
var G__11671 = (0);
seq__11599 = G__11668;
chunk__11600 = G__11669;
count__11601 = G__11670;
i__11602 = G__11671;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
