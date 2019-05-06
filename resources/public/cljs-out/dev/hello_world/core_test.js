// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_world.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('hello_world.scales');
hello_world.core_test.xScale_100_should_return_50 = (function hello_world$core_test$xScale_100_should_return_50(){
return cljs.test.test_var.call(null,hello_world.core_test.xScale_100_should_return_50.cljs$lang$var);
});
hello_world.core_test.xScale_100_should_return_50.cljs$lang$test = (function (){
try{var values__13424__auto__ = (new cljs.core.List(null,hello_world.scales.xScale.call(null,(100)),(new cljs.core.List(null,(50),null,(1),null)),(2),null));
var result__13425__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13424__auto__);
if(cljs.core.truth_(result__13425__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xScale","xScale",460655711,null),(100)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13424__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xScale","xScale",460655711,null),(100)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13424__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__13425__auto__;
}catch (e24028){var t__13469__auto__ = e24028;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xScale","xScale",460655711,null),(100)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13469__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

hello_world.core_test.xScale_100_should_return_50.cljs$lang$var = new cljs.core.Var(function(){return hello_world.core_test.xScale_100_should_return_50;},new cljs.core.Symbol("hello-world.core-test","xScale-100-should-return-50","hello-world.core-test/xScale-100-should-return-50",-908892559,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world.core-test","hello-world.core-test",561169002,null),new cljs.core.Symbol(null,"xScale-100-should-return-50","xScale-100-should-return-50",-1216938472,null),"test/hello_world/core_test.cljs",37,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world.core_test.xScale_100_should_return_50)?hello_world.core_test.xScale_100_should_return_50.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map
