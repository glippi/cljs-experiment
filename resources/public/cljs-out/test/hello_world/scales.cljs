(ns ^:figwheel-hooks hello-world.scales
  (:require [cljsjs.d3])
)

(defn xScale [x]
  (let [getXCoord
    (-> js/d3 
        (.scaleLinear)
        (.domain #js [0 1000])
        (.range #js [ 0 500])
      )]
    (getXCoord x)
  )
)
