(ns hello-world.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [hello-world.scales :refer [xScale]]))

(deftest xScale-100-should-return-50
  (is (= (xScale 100) 50))
)
