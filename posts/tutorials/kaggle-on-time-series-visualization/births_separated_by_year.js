(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("a59eefd3-7673-4fba-9482-8ddee261d3e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a59eefd3-7673-4fba-9482-8ddee261d3e5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d67d4cd7-b19f-4722-b2cb-0fdedd27b397":{"roots":{"references":[{"attributes":{"plot":null,"text":"year: 1991"},"id":"23957","type":"Title"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"24011","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"24021","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"23958","subtype":"Figure","type":"Plot"},"ticker":{"id":"23972","type":"DatetimeTicker"}},"id":"23975","type":"Grid"},{"attributes":{"below":[{"id":"23966","type":"LinearAxis"}],"left":[{"id":"23971","type":"DatetimeAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1100,"renderers":[{"id":"23966","type":"LinearAxis"},{"id":"23970","type":"Grid"},{"id":"23971","type":"DatetimeAxis"},{"id":"23975","type":"Grid"},{"id":"23985","type":"BoxAnnotation"},{"id":"23996","type":"GlyphRenderer"}],"title":{"id":"23957","type":"Title"},"toolbar":{"id":"23981","type":"Toolbar"},"x_range":{"id":"23954","type":"Range1d"},"x_scale":{"id":"23962","type":"LinearScale"},"y_range":{"id":"23955","type":"Range1d"},"y_scale":{"id":"23964","type":"LinearScale"}},"id":"23958","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"Births":[6057],"birth_date":{"__ndarray__":"AABANnWVdUI=","dtype":"float64","shape":[1]},"birth_date_dt_strings":["2017-01-01 00:00:00"]},"selected":{"id":"23991","type":"Selection"},"selection_policy":{"id":"24023","type":"UnionRenderers"}},"id":"23990","type":"ColumnDataSource"},{"attributes":{"months":[0,4,8]},"id":"24020","type":"MonthsTicker"},{"attributes":{"callback":null,"renderers":[{"id":"23996","type":"GlyphRenderer"}],"tooltips":[["Births","@{Births}"],["birth_date","@{birth_date_dt_strings}"]]},"id":"23956","type":"HoverTool"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"24011","type":"AdaptiveTicker"},{"id":"24012","type":"AdaptiveTicker"},{"id":"24013","type":"AdaptiveTicker"},{"id":"24014","type":"DaysTicker"},{"id":"24015","type":"DaysTicker"},{"id":"24016","type":"DaysTicker"},{"id":"24017","type":"DaysTicker"},{"id":"24018","type":"MonthsTicker"},{"id":"24019","type":"MonthsTicker"},{"id":"24020","type":"MonthsTicker"},{"id":"24021","type":"MonthsTicker"},{"id":"24022","type":"YearsTicker"}]},"id":"23972","type":"DatetimeTicker"},{"attributes":{"callback":null,"end":662688001000.0,"reset_end":662688001000.0,"reset_start":662687999000.0,"start":662687999000.0,"tags":[[["birth_date","birth_date",null]]]},"id":"23955","type":"Range1d"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"24019","type":"MonthsTicker"},{"attributes":{"callback":null,"end":2.0,"reset_end":2.0,"reset_start":0.0,"start":0.0,"tags":[[["Births","Births",null]]]},"id":"23954","type":"Range1d"},{"attributes":{"axis_label":"birth_date","bounds":"auto","formatter":{"id":"24000","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"23958","subtype":"Figure","type":"Plot"},"ticker":{"id":"23972","type":"DatetimeTicker"}},"id":"23971","type":"DatetimeAxis"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"24018","type":"MonthsTicker"},{"attributes":{},"id":"23978","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"23985","type":"BoxAnnotation"}},"id":"23979","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"23958","subtype":"Figure","type":"Plot"},"ticker":{"id":"23967","type":"BasicTicker"}},"id":"23970","type":"Grid"},{"attributes":{"days":[1,15]},"id":"24017","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23956","type":"HoverTool"},{"id":"23976","type":"SaveTool"},{"id":"23977","type":"PanTool"},{"id":"23978","type":"WheelZoomTool"},{"id":"23979","type":"BoxZoomTool"},{"id":"23980","type":"ResetTool"}]},"id":"23981","type":"Toolbar"},{"attributes":{"data_source":{"id":"23990","type":"ColumnDataSource"},"glyph":{"id":"23993","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"23995","type":"Line"},"nonselection_glyph":{"id":"23994","type":"Line"},"selection_glyph":null,"view":{"id":"23997","type":"CDSView"}},"id":"23996","type":"GlyphRenderer"},{"attributes":{},"id":"23980","type":"ResetTool"},{"attributes":{},"id":"23967","type":"BasicTicker"},{"attributes":{},"id":"24022","type":"YearsTicker"},{"attributes":{},"id":"24000","type":"DatetimeTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23985","type":"BoxAnnotation"},{"attributes":{"days":[1,8,15,22]},"id":"24016","type":"DaysTicker"},{"attributes":{},"id":"23991","type":"Selection"},{"attributes":{"axis_label":"Births","bounds":"auto","formatter":{"id":"23998","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"23958","subtype":"Figure","type":"Plot"},"ticker":{"id":"23967","type":"BasicTicker"}},"id":"23966","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Births"},"y":{"field":"birth_date"}},"id":"23993","type":"Line"},{"attributes":{},"id":"23977","type":"PanTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"24015","type":"DaysTicker"},{"attributes":{},"id":"23964","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Births"},"y":{"field":"birth_date"}},"id":"23994","type":"Line"},{"attributes":{},"id":"23976","type":"SaveTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"24012","type":"AdaptiveTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"24014","type":"DaysTicker"},{"attributes":{"source":{"id":"23990","type":"ColumnDataSource"}},"id":"23997","type":"CDSView"},{"attributes":{},"id":"23962","type":"LinearScale"},{"attributes":{},"id":"23998","type":"BasicTickFormatter"},{"attributes":{},"id":"24023","type":"UnionRenderers"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"24013","type":"AdaptiveTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Births"},"y":{"field":"birth_date"}},"id":"23995","type":"Line"}],"root_ids":["23958"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d67d4cd7-b19f-4722-b2cb-0fdedd27b397","roots":{"23958":"a59eefd3-7673-4fba-9482-8ddee261d3e5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();