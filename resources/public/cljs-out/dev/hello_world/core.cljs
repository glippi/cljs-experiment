(ns ^:figwheel-hooks hello-world.core
  (:require
   [hello-world.model :as m :refer [model]] 
   [hello-world.controller :as controller] 
   [hello-world.view :as view :refer [screen-component]] 
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [hello-world.http :refer [printResponse]]
   )
  )

(defonce init
  (do
    (print "initializing..." )
    (controller/init )
    (print "initialized")))

(defn get-app-element []
  (gdom/getElement "app"))

(defn app-view []
  [screen-component @model]
)

(defn mount [el]
  (reagent/render-component [app-view] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
