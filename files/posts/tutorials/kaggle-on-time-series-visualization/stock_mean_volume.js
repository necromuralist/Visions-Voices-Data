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
      };var element = document.getElementById("2d83123f-ed75-4579-83e0-474bcb95fde5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d83123f-ed75-4579-83e0-474bcb95fde5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5fab01d3-807d-45ff-ad71-cb6e821814dc":{"roots":{"references":[{"attributes":{},"id":"10661","type":"WheelZoomTool"},{"attributes":{"months":[0,4,8]},"id":"10711","type":"MonthsTicker"},{"attributes":{"days":[1,8,15,22]},"id":"10707","type":"DaysTicker"},{"attributes":{},"id":"10715","type":"UnionRenderers"},{"attributes":{},"id":"10660","type":"PanTool"},{"attributes":{},"id":"10717","type":"UnionRenderers"},{"attributes":{"days":[1,15]},"id":"10708","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10639","type":"HoverTool"},{"id":"10659","type":"SaveTool"},{"id":"10660","type":"PanTool"},{"id":"10661","type":"WheelZoomTool"},{"id":"10662","type":"BoxZoomTool"},{"id":"10663","type":"ResetTool"}]},"id":"10664","type":"Toolbar"},{"attributes":{"axis_label":"Volume","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"10675","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"10641","subtype":"Figure","type":"Plot"},"ticker":{"id":"10655","type":"BasicTicker"}},"id":"10654","type":"LinearAxis"},{"attributes":{"source":{"id":"10677","type":"ColumnDataSource"}},"id":"10684","type":"CDSView"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"10710","type":"MonthsTicker"},{"attributes":{},"id":"10713","type":"YearsTicker"},{"attributes":{},"id":"10686","type":"Selection"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"10706","type":"DaysTicker"},{"attributes":{},"id":"10659","type":"SaveTool"},{"attributes":{},"id":"10645","type":"LinearScale"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"10709","type":"MonthsTicker"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"10680","type":"Line"},{"attributes":{"callback":null,"end":56109561.383078165,"reset_end":56109561.383078165,"reset_start":-33612817.80117383,"start":-33612817.80117383,"tags":[[["volume","Volume",null]]]},"id":"10638","type":"Range1d"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"10705","type":"DaysTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"10641","subtype":"Figure","type":"Plot"},"ticker":{"id":"10650","type":"DatetimeTicker"}},"id":"10653","type":"Grid"},{"attributes":{"callback":null,"end":1451606400000.0,"reset_end":1451606400000.0,"reset_start":1262304000000.0,"start":1262304000000.0,"tags":[[["date","Year",null]]]},"id":"10637","type":"Range1d"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"10702","type":"AdaptiveTicker"},{"attributes":{},"id":"10675","type":"BasicTickFormatter"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"10702","type":"AdaptiveTicker"},{"id":"10703","type":"AdaptiveTicker"},{"id":"10704","type":"AdaptiveTicker"},{"id":"10705","type":"DaysTicker"},{"id":"10706","type":"DaysTicker"},{"id":"10707","type":"DaysTicker"},{"id":"10708","type":"DaysTicker"},{"id":"10709","type":"MonthsTicker"},{"id":"10710","type":"MonthsTicker"},{"id":"10711","type":"MonthsTicker"},{"id":"10712","type":"MonthsTicker"},{"id":"10713","type":"YearsTicker"}]},"id":"10650","type":"DatetimeTicker"},{"attributes":{"data_source":{"id":"10685","type":"ColumnDataSource"},"glyph":{"id":"10688","type":"Patch"},"hover_glyph":null,"muted_glyph":{"id":"10690","type":"Patch"},"nonselection_glyph":{"id":"10689","type":"Patch"},"selection_glyph":null,"view":{"id":"10692","type":"CDSView"}},"id":"10691","type":"GlyphRenderer"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"10673","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"10641","subtype":"Figure","type":"Plot"},"ticker":{"id":"10650","type":"DatetimeTicker"}},"id":"10649","type":"DatetimeAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"10641","subtype":"Figure","type":"Plot"},"ticker":{"id":"10655","type":"BasicTicker"}},"id":"10658","type":"Grid"},{"attributes":{"source":{"id":"10685","type":"ColumnDataSource"}},"id":"10692","type":"CDSView"},{"attributes":{"level":"glyph","line_color":{"value":"#8c8c8c"},"line_width":{"value":3},"location":0,"plot":null},"id":"10695","type":"Span"},{"attributes":{"callback":null,"formatters":{"date":"datetime","volume":"numeral"},"mode":"vline","renderers":[{"id":"10683","type":"GlyphRenderer"}],"tooltips":[["Year","@date{%Y}"],["Volume","@volume{0,0.00}"]]},"id":"10639","type":"HoverTool"},{"attributes":{"below":[{"id":"10649","type":"DatetimeAxis"}],"left":[{"id":"10654","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"10649","type":"DatetimeAxis"},{"id":"10653","type":"Grid"},{"id":"10654","type":"LinearAxis"},{"id":"10658","type":"Grid"},{"id":"10668","type":"BoxAnnotation"},{"id":"10683","type":"GlyphRenderer"},{"id":"10691","type":"GlyphRenderer"},{"id":"10695","type":"Span"}],"title":{"id":"10640","type":"Title"},"toolbar":{"id":"10664","type":"Toolbar"},"x_range":{"id":"10637","type":"Range1d"},"x_scale":{"id":"10645","type":"LinearScale"},"y_range":{"id":"10638","type":"Range1d"},"y_scale":{"id":"10647","type":"LinearScale"}},"id":"10641","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.6,"fill_color":"#30a2da","line_alpha":0.6,"x":{"field":"x"},"y":{"field":"y"}},"id":"10688","type":"Patch"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"10682","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUIAAMC9px91QgAAAKssqnRCAABAmLE0dEIAAICFNr9zQgAAAA1pSXNCAABA+u3TckIAAIDncl5yQg==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"081ojiAHgMGGs4sevmt/wYrIbMN6w3vBmFI2Mu3odMEKSme0VxxwwVJihBk8e2/BfxDs7eCAcMH3VVd0Z115QQUMPAoPVHhBloUViq1eeEGocnJjbh5+Qf0eKAwPW4NBZTc78ntBhkHpa6irot2GQQ==","dtype":"float64","shape":[14]}},"selected":{"id":"10686","type":"Selection"},"selection_policy":{"id":"10717","type":"UnionRenderers"}},"id":"10685","type":"ColumnDataSource"},{"attributes":{},"id":"10673","type":"DatetimeTickFormatter"},{"attributes":{},"id":"10647","type":"LinearScale"},{"attributes":{"data_source":{"id":"10677","type":"ColumnDataSource"},"glyph":{"id":"10680","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"10682","type":"Line"},"nonselection_glyph":{"id":"10681","type":"Line"},"selection_glyph":null,"view":{"id":"10684","type":"CDSView"}},"id":"10683","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"10668","type":"BoxAnnotation"}},"id":"10662","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.6,"fill_color":"#30a2da","line_alpha":0.6,"line_color":"black","x":{"field":"x"},"y":{"field":"y"}},"id":"10689","type":"Patch"},{"attributes":{},"id":"10663","type":"ResetTool"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"date_dt_strings":["2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00"],"volume":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"10678","type":"Selection"},"selection_policy":{"id":"10715","type":"UnionRenderers"}},"id":"10677","type":"ColumnDataSource"},{"attributes":{},"id":"10655","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"date"},"y":{"field":"volume"}},"id":"10681","type":"Line"},{"attributes":{"fill_alpha":0.2,"fill_color":"#30a2da","line_alpha":0.2,"line_color":"black","x":{"field":"x"},"y":{"field":"y"}},"id":"10690","type":"Patch"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"10703","type":"AdaptiveTicker"},{"attributes":{},"id":"10678","type":"Selection"},{"attributes":{"months":[0,6]},"id":"10712","type":"MonthsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"10704","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":"Mean NYSE Trading Volume Per Year","text_font_size":{"value":"24pt"}},"id":"10640","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10668","type":"BoxAnnotation"}],"root_ids":["10641"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5fab01d3-807d-45ff-ad71-cb6e821814dc","roots":{"10641":"2d83123f-ed75-4579-83e0-474bcb95fde5"}}];
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