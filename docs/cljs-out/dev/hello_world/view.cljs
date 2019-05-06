(ns hello-world.view
  (:require 
   [hello-world.scales :refer [xScale]] 
   [hello-world.model :as m :refer [model]] 
   [clojure.string :as str]
    [hello-world.controller :as controller]
))



(def barHeight 20)
(def idx (atom -1))

(defn mapBars [bar]
  (swap! idx inc)
  [:g {:transform (str "translate(0, " (* (deref idx) barHeight) ")" ) }
   [:rect {:width (xScale (:value bar)), :height (- barHeight 1), :fill "red"}]
    ]
  )

(defn screen-component [state]
  [:div
    [:div>h1 (:text state)]

     [:svg {:style 
            {:border "1px solid"
             :background "white"
             :width "50%"
             :height (* barHeight (count (:bars state)))}}

    (for [bar (:bars state)]
        ^{:key (:year bar)}
        [mapBars bar]
      )
    ]

     [:button 
      {:on-click #(controller/add-year 2005 113133)
       }
      ]
   ]
)

