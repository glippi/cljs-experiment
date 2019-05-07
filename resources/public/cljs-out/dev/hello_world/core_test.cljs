(ns hello-world.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [hello-world.scales :refer [xScale, maxValue]]))

(def fakeValues
  {:bars {:value 1}, {:value 2}, {:value 3}})

(deftest maxValue-of-fakeValues
  (is (= (maxValue fakeValues) 3))
)
