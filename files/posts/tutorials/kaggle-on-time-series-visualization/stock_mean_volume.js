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
      };var element = document.getElementById("7e7ad56b-bc40-47f2-81df-211c792cc2aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7e7ad56b-bc40-47f2-81df-211c792cc2aa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7c9a9851-9bee-4295-aecd-d66a0ca14a0a":{"roots":{"references":[{"attributes":{"months":[0,6]},"id":"24403","type":"MonthsTicker"},{"attributes":{"days":[1,15]},"id":"24399","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"24398","type":"DaysTicker"},{"attributes":{},"id":"24404","type":"YearsTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24362","type":"BoxAnnotation"},{"attributes":{},"id":"24341","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"24376","type":"Line"},{"attributes":{"overlay":{"id":"24362","type":"BoxAnnotation"}},"id":"24356","type":"BoxZoomTool"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"24396","type":"DaysTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"24393","type":"AdaptiveTicker"},{"id":"24394","type":"AdaptiveTicker"},{"id":"24395","type":"AdaptiveTicker"},{"id":"24396","type":"DaysTicker"},{"id":"24397","type":"DaysTicker"},{"id":"24398","type":"DaysTicker"},{"id":"24399","type":"DaysTicker"},{"id":"24400","type":"MonthsTicker"},{"id":"24401","type":"MonthsTicker"},{"id":"24402","type":"MonthsTicker"},{"id":"24403","type":"MonthsTicker"},{"id":"24404","type":"YearsTicker"}]},"id":"24344","type":"DatetimeTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"24397","type":"DaysTicker"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"24374","type":"Line"},{"attributes":{},"id":"24355","type":"WheelZoomTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"24395","type":"AdaptiveTicker"},{"attributes":{},"id":"24380","type":"Selection"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"24367","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"24335","subtype":"Figure","type":"Plot"},"ticker":{"id":"24344","type":"DatetimeTicker"}},"id":"24343","type":"DatetimeAxis"},{"attributes":{"source":{"id":"24371","type":"ColumnDataSource"}},"id":"24378","type":"CDSView"},{"attributes":{},"id":"24357","type":"ResetTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"24394","type":"AdaptiveTicker"},{"attributes":{"data_source":{"id":"24371","type":"ColumnDataSource"},"glyph":{"id":"24374","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"24376","type":"Line"},"nonselection_glyph":{"id":"24375","type":"Line"},"selection_glyph":null,"view":{"id":"24378","type":"CDSView"}},"id":"24377","type":"GlyphRenderer"},{"attributes":{},"id":"24369","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"24375","type":"Line"},{"attributes":{},"id":"24372","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24333","type":"HoverTool"},{"id":"24353","type":"SaveTool"},{"id":"24354","type":"PanTool"},{"id":"24355","type":"WheelZoomTool"},{"id":"24356","type":"BoxZoomTool"},{"id":"24357","type":"ResetTool"}]},"id":"24358","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"24335","subtype":"Figure","type":"Plot"},"ticker":{"id":"24344","type":"DatetimeTicker"}},"id":"24347","type":"Grid"},{"attributes":{},"id":"24405","type":"UnionRenderers"},{"attributes":{},"id":"24349","type":"BasicTicker"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"24391","type":"TeeHead"},"plot":{"id":"24335","subtype":"Figure","type":"Plot"},"source":{"id":"24379","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"24392","type":"TeeHead"}},"id":"24381","type":"Whisker"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"24392","type":"TeeHead"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"24393","type":"AdaptiveTicker"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"24391","type":"TeeHead"},{"attributes":{"level":"glyph","line_color":{"value":"#8c8c8c"},"line_width":{"value":3},"location":0,"plot":null},"id":"24385","type":"Span"},{"attributes":{"axis_label":"Volume","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"24369","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"24335","subtype":"Figure","type":"Plot"},"ticker":{"id":"24349","type":"BasicTicker"}},"id":"24348","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"base":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"lower":{"__ndarray__":"081ojiAHgMGGs4sevmt/wYrIbMN6w3vBmFI2Mu3odMEKSme0VxxwwVJihBk8e2/BfxDs7eCAcME=","dtype":"float64","shape":[7]},"upper":{"__ndarray__":"6Wuoq6LdhkFlNzvye0GGQf0eKAwPW4NBqHJyY24efkGWhRWKrV54QQUMPAoPVHhB91VXdGddeUE=","dtype":"float64","shape":[7]}},"selected":{"id":"24380","type":"Selection"},"selection_policy":{"id":"24407","type":"UnionRenderers"}},"id":"24379","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"date_dt_strings":["2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00"],"volume":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"24372","type":"Selection"},"selection_policy":{"id":"24405","type":"UnionRenderers"}},"id":"24371","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":56109561.383078165,"reset_end":56109561.383078165,"reset_start":-33612817.80117383,"start":-33612817.80117383,"tags":[[["volume","Volume",null]]]},"id":"24332","type":"Range1d"},{"attributes":{},"id":"24339","type":"LinearScale"},{"attributes":{},"id":"24367","type":"DatetimeTickFormatter"},{"attributes":{},"id":"24354","type":"PanTool"},{"attributes":{"below":[{"id":"24343","type":"DatetimeAxis"}],"left":[{"id":"24348","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"24343","type":"DatetimeAxis"},{"id":"24347","type":"Grid"},{"id":"24348","type":"LinearAxis"},{"id":"24352","type":"Grid"},{"id":"24362","type":"BoxAnnotation"},{"id":"24377","type":"GlyphRenderer"},{"id":"24381","type":"Whisker"},{"id":"24385","type":"Span"}],"title":{"id":"24334","type":"Title"},"toolbar":{"id":"24358","type":"Toolbar"},"x_range":{"id":"24331","type":"Range1d"},"x_scale":{"id":"24339","type":"LinearScale"},"y_range":{"id":"24332","type":"Range1d"},"y_scale":{"id":"24341","type":"LinearScale"}},"id":"24335","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24407","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Mean NYSE Trading Volume Per Year","text_font_size":{"value":"24pt"}},"id":"24334","type":"Title"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"24400","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"24335","subtype":"Figure","type":"Plot"},"ticker":{"id":"24349","type":"BasicTicker"}},"id":"24352","type":"Grid"},{"attributes":{"callback":null,"formatters":{"date":"datetime","volume":"numeral"},"mode":"vline","renderers":[{"id":"24377","type":"GlyphRenderer"}],"tooltips":[["Year","@date{%Y}"],["Volume","@volume{0,0.00}"]]},"id":"24333","type":"HoverTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"24401","type":"MonthsTicker"},{"attributes":{},"id":"24353","type":"SaveTool"},{"attributes":{"months":[0,4,8]},"id":"24402","type":"MonthsTicker"},{"attributes":{"callback":null,"end":1451606400000.0,"reset_end":1451606400000.0,"reset_start":1262304000000.0,"start":1262304000000.0,"tags":[[["date","Year",null]]]},"id":"24331","type":"Range1d"}],"root_ids":["24335"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7c9a9851-9bee-4295-aecd-d66a0ca14a0a","roots":{"24335":"7e7ad56b-bc40-47f2-81df-211c792cc2aa"}}];
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