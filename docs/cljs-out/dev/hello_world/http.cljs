(ns ^:figwheel-hooks hello-world.http
  (:require
   [ajax.core :refer [POST ajax-request json-request-format json-response-format]]
   [cljs.core.async :refer [chan <! >! put! take!]]
   )
   (:require-macros [cljs.core.async.macros :refer [go]])
  )


(defn channel-reponse [ch]
  (fn get-data-from-response  [resp]
    (let [[ok response] resp
          r ((last resp) :data)]
      (cond
       (true? ok) (put! ch r)
       :else
       (let [errors (get-in response [:response :errors])]
         (print "errors" errors)
         (if (= (type errors) js/Error.)
           (put! ch (ex-info "Operation cannot be performed"  [ "Operation cannot be performed"]))
           ;;else
           (put! ch  (ex-info "Oops!")
                              (if (coll? errors)
                                (map
                                 #(if
                                    (nil? (:error %))
                                    %
                                    (:error %))
                                 errors)
                                ;;else
                                [errors]
                                )))
           ))
       )

   (let [ch (chan)]

     (ajax-request

      {:uri url

       :method :post

       :params (clj->js json)

       :handler (channel-reponse ch)

       :format (json-request-format)

       :response-format (json-response-format {:keywords? true})})

     ch)))


(defn <GET
  ([url]
   (<GET url (fn [resp] ((last resp) :data)))
   )
  ([url from-response]
  (let [ch (chan)]
    (ajax-request
     {:uri url
      :method :get
      :handler (fn [resp]
                 (put! ch (from-response resp)))
      :response-format (json-response-format {:keywords? true})})
    ch)))


(defn printResponse []
  (
  go
  (println 
    (<! ( <GET dataVizEndpoint))
)))
