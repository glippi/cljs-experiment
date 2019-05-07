(ns ^:figwheel-hooks hello-world.scales
  (:require
   [cljsjs.d3]
   [hello-world.model :as m :refer [model]]
  ))

(defn maxValue [values]
  (->> values
      :bars
      (map :value)
      (apply max)
      (int)
  ))

(defn xScale [x]
  (let [getXCoord
    (-> js/d3
        (.scaleLinear)
        (.domain #js [0 (maxValue @model)])
        (.range #js [0 500])
      )]
    (getXCoord x))
)
