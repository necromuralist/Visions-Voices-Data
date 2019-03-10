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
      };var element = document.getElementById("dadfcccd-a5b1-4ccb-8a2e-92f3ff0c7e4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dadfcccd-a5b1-4ccb-8a2e-92f3ff0c7e4e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f5d83107-dd76-44c8-991d-878219bf3904":{"roots":{"references":[{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"11238","type":"AdaptiveTicker"},{"id":"11239","type":"AdaptiveTicker"},{"id":"11240","type":"AdaptiveTicker"},{"id":"11241","type":"DaysTicker"},{"id":"11242","type":"DaysTicker"},{"id":"11243","type":"DaysTicker"},{"id":"11244","type":"DaysTicker"},{"id":"11245","type":"MonthsTicker"},{"id":"11246","type":"MonthsTicker"},{"id":"11247","type":"MonthsTicker"},{"id":"11248","type":"MonthsTicker"},{"id":"11249","type":"YearsTicker"}]},"id":"11188","type":"DatetimeTicker"},{"attributes":{"days":[1,15]},"id":"11244","type":"DaysTicker"},{"attributes":{"overlay":{"id":"11207","type":"BoxAnnotation"}},"id":"11200","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"11179","subtype":"Figure","type":"Plot"},"ticker":{"id":"11188","type":"DatetimeTicker"}},"id":"11191","type":"Grid"},{"attributes":{"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"11219","type":"Segment"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"11245","type":"MonthsTicker"},{"attributes":{"axis_label":"Volume","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"11214","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"11179","subtype":"Figure","type":"Plot"},"ticker":{"id":"11193","type":"BasicTicker"}},"id":"11192","type":"LinearAxis"},{"attributes":{"days":[1,8,15,22]},"id":"11243","type":"DaysTicker"},{"attributes":{},"id":"11212","type":"DatetimeTickFormatter"},{"attributes":{},"id":"11193","type":"BasicTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"11242","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11176","type":"HoverTool"},{"id":"11177","type":"CrosshairTool"},{"id":"11197","type":"SaveTool"},{"id":"11198","type":"PanTool"},{"id":"11199","type":"WheelZoomTool"},{"id":"11200","type":"BoxZoomTool"},{"id":"11201","type":"ResetTool"}]},"id":"11202","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"11179","subtype":"Figure","type":"Plot"},"ticker":{"id":"11193","type":"BasicTicker"}},"id":"11196","type":"Grid"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"11241","type":"DaysTicker"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"date_dt_strings":["2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00"],"volume":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"11225","type":"Selection"},"selection_policy":{"id":"11253","type":"UnionRenderers"}},"id":"11224","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11207","type":"BoxAnnotation"},{"attributes":{"source":{"id":"11224","type":"ColumnDataSource"}},"id":"11231","type":"CDSView"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"11240","type":"AdaptiveTicker"},{"attributes":{"data_source":{"id":"11224","type":"ColumnDataSource"},"glyph":{"id":"11227","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"11229","type":"Scatter"},"nonselection_glyph":{"id":"11228","type":"Scatter"},"selection_glyph":null,"view":{"id":"11231","type":"CDSView"}},"id":"11230","type":"GlyphRenderer"},{"attributes":{},"id":"11214","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"11221","type":"Segment"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"11239","type":"AdaptiveTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"11238","type":"AdaptiveTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"11220","type":"Segment"},{"attributes":{},"id":"11197","type":"SaveTool"},{"attributes":{},"id":"11225","type":"Selection"},{"attributes":{},"id":"11198","type":"PanTool"},{"attributes":{"callback":null,"end":1451606400000.0,"reset_end":1451606400000.0,"reset_start":1262304000000.0,"start":1262304000000.0,"tags":[[["date","Date",null]]]},"id":"11174","type":"Range1d"},{"attributes":{"callback":null,"end":7454074.143082923,"reset_end":7454074.143082923,"reset_start":0.0,"tags":[[["volume","Volume",null]]]},"id":"11175","type":"Range1d"},{"attributes":{},"id":"11199","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"11216","type":"ColumnDataSource"},"glyph":{"id":"11219","type":"Segment"},"hover_glyph":null,"muted_glyph":{"id":"11221","type":"Segment"},"nonselection_glyph":{"id":"11220","type":"Segment"},"selection_glyph":null,"view":{"id":"11223","type":"CDSView"}},"id":"11222","type":"GlyphRenderer"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"11246","type":"MonthsTicker"},{"attributes":{"source":{"id":"11216","type":"ColumnDataSource"}},"id":"11223","type":"CDSView"},{"attributes":{"callback":null,"formatters":{"date":"datetime","volume":"numeral"},"mode":"vline","renderers":[{"id":"11230","type":"GlyphRenderer"}],"tooltips":[["Year","@date{%Y}"],["Volume","@volume{0,0.00}"]]},"id":"11176","type":"HoverTool"},{"attributes":{"months":[0,4,8]},"id":"11247","type":"MonthsTicker"},{"attributes":{"below":[{"id":"11187","type":"DatetimeAxis"}],"left":[{"id":"11192","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"11187","type":"DatetimeAxis"},{"id":"11191","type":"Grid"},{"id":"11192","type":"LinearAxis"},{"id":"11196","type":"Grid"},{"id":"11207","type":"BoxAnnotation"},{"id":"11222","type":"GlyphRenderer"},{"id":"11230","type":"GlyphRenderer"}],"title":{"id":"11178","type":"Title"},"toolbar":{"id":"11202","type":"Toolbar"},"x_range":{"id":"11174","type":"Range1d"},"x_scale":{"id":"11183","type":"LinearScale"},"y_range":{"id":"11175","type":"Range1d"},"y_scale":{"id":"11185","type":"LinearScale"}},"id":"11179","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"y0":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[7]},"y1":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"11217","type":"Selection"},"selection_policy":{"id":"11251","type":"UnionRenderers"}},"id":"11216","type":"ColumnDataSource"},{"attributes":{"months":[0,6]},"id":"11248","type":"MonthsTicker"},{"attributes":{"line_color":"#aec7e8"},"id":"11177","type":"CrosshairTool"},{"attributes":{"fill_color":{"value":"#4c72b0"},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"11227","type":"Scatter"},{"attributes":{},"id":"11249","type":"YearsTicker"},{"attributes":{"plot":null,"text":"NYSE Mean Annual Trading Volume","text_font_size":{"value":"24pt"}},"id":"11178","type":"Title"},{"attributes":{},"id":"11251","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"11229","type":"Scatter"},{"attributes":{},"id":"11253","type":"UnionRenderers"},{"attributes":{},"id":"11183","type":"LinearScale"},{"attributes":{},"id":"11217","type":"Selection"},{"attributes":{},"id":"11185","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"11228","type":"Scatter"},{"attributes":{"axis_label":"Date","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"11212","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"11179","subtype":"Figure","type":"Plot"},"ticker":{"id":"11188","type":"DatetimeTicker"}},"id":"11187","type":"DatetimeAxis"},{"attributes":{},"id":"11201","type":"ResetTool"}],"root_ids":["11179"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"f5d83107-dd76-44c8-991d-878219bf3904","roots":{"11179":"dadfcccd-a5b1-4ccb-8a2e-92f3ff0c7e4e"}}];
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