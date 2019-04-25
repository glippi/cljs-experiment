(ns ^:figwheel-hooks hello-world.core
  (:require
   [hello-world.scales :refer [xScale]] 
   [clojure.string :as str]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   ))

(def bars
  [{
    :year 2000 :value 1000
   },
   {
    :year 2001 :value 2000
   },
   {
    :year 2002 :value 3000
   }]
)

(defn mapBars [bar]
(js/console.log (xScale (bar :value)))
  [:div.bg-red.h4.mv3
    {:key (bar :value)}
    {:style 
      {:width (str/join [(xScale (bar :value)) "px"])}
    }
  ]
)

(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
    [:div>h1 (:text @app-state)]
    (map mapBars bars)
     [:svg {:style {:border "1px solid"
                 :background "white"
                 :width "100%"
                 :height "150px"}}
      [:g
   [:circle {:r 50, :cx 75, :cy 75, :fill "green"}]
   [:circle {:r 25, :cx 75, :cy 75, :fill "blue"}]
   [:path {:stroke-width 12
           :stroke "white"
           :fill "none"
           :d "M 30,40 C 100,40 50,110 120,110"}]

   ]]
   ]
)

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
