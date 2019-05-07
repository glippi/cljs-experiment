(ns ^:figwheel-hooks hello-world.view
  (:require
   [hello-world.scales :refer [xScale]]
   [clojure.string :as str]
   [hello-world.controller :as controller]
))

(def barHeight 20)
(def idx (atom -1))

(defn mapBars [bar]
  (swap! idx inc)
  [:g {:transform (str "translate(0, " (* @idx barHeight) ")" ) }
   [:rect {:width (xScale (:value bar)), :height (- barHeight 1), :fill "red"}]])


(defn screen-component [state]
  [:div
  [:header.bg-gold.sans-serif>div.mw9.center.pa4.pt5-ns.ph7-l
   [:h3.f2.f1-m.f-headline-l.measure-narrow.lh-title.mv0
    [:span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight "ClojureScript + D3 = "]
    [:span.bg-black-90.lh-copy.white.ph2.pv1.tracked-tight.red
     {:dangerouslySetInnerHTML {:__html "&#10084;"}}]
    ]
   [:h4.f3.fw1.georgia.i "A simple barchart experiment"]
  ]

  [:div.flex.flex-row.justify-center.align-center
     [:svg {:style
            {:border "1px solid"
             :background "white"
             :width "500px"
             :height (* barHeight (count (:bars state)))}}

    (for [bar (:bars state)]
        ^{:key (:year bar)}
        [mapBars bar]
      )
    ]
   ]

     [:button
      {:on-click #(controller/add-year 2005 113133)
       }
      ]
   ]
)

