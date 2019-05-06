(ns hello-world.controller
  (:require
    [hello-world.model :refer [model]]
    [hello-world.http :refer [<GET]])
  (:require-macros [cljs.core.async.macros :refer [go]])
)

(defn swapm! [x y]
  (swap! y (fn [xx] x))
)

(def dataVizEndpoint "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json")

(defn init []
  (go
    (let [remote-data (<! (<GET dataVizEndpoint))
          transformed-data (->> remote-data
                                (map (fn [[year value]]
                                       {:year year :value value})))]
        (-> @model
            (assoc :bars transformed-data)
            (swapm! model)
        )
      )
  )
)

(defn add-year [year value]
  (-> @model
      (update :bars conj {:year year :value value})
      (swapm! model)
  )
)
