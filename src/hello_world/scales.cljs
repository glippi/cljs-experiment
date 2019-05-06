(ns hello-world.scales
  (:require
   [cljsjs.d3]
   [hello-world.model :as m :refer [model]]
  )
)

(def maxValue
  (->> @model
      :bars
      (map :value)
      (apply max)
      int
  ))

(println maxValue)

(defn xScale [x]
  (let [getXCoord
    (-> js/d3
        (.scaleLinear)
        (.domain #js [0 maxValue])
        (.range #js [0 500])
      )]
    (getXCoord x)
  )
)
