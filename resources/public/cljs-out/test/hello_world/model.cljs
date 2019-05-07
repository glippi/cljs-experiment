(ns  ^:figwheel-hooks hello-world.model
  (:require [reagent.core :as r])
)

(defonce model (r/atom {}))

(defn ^:export jsmodel []
  (clj->js @model))
