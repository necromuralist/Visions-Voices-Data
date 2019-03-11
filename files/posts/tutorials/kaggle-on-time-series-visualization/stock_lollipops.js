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
      };var element = document.getElementById("188e1b48-71ce-4867-925f-a3c183fbcd8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '188e1b48-71ce-4867-925f-a3c183fbcd8a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"54a9ef0e-b800-4e51-bcf6-120a8544e272":{"roots":{"references":[{"attributes":{"data_source":{"id":"24938","type":"ColumnDataSource"},"glyph":{"id":"24941","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"24943","type":"Scatter"},"nonselection_glyph":{"id":"24942","type":"Scatter"},"selection_glyph":null,"view":{"id":"24945","type":"CDSView"}},"id":"24944","type":"GlyphRenderer"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"24953","type":"AdaptiveTicker"},{"attributes":{},"id":"24897","type":"LinearScale"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"24951","type":"AdaptiveTicker"},{"id":"24952","type":"AdaptiveTicker"},{"id":"24953","type":"AdaptiveTicker"},{"id":"24954","type":"DaysTicker"},{"id":"24955","type":"DaysTicker"},{"id":"24956","type":"DaysTicker"},{"id":"24957","type":"DaysTicker"},{"id":"24958","type":"MonthsTicker"},{"id":"24959","type":"MonthsTicker"},{"id":"24960","type":"MonthsTicker"},{"id":"24961","type":"MonthsTicker"},{"id":"24962","type":"YearsTicker"}]},"id":"24902","type":"DatetimeTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"24951","type":"AdaptiveTicker"},{"attributes":{},"id":"24931","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"24893","subtype":"Figure","type":"Plot"},"ticker":{"id":"24902","type":"DatetimeTicker"}},"id":"24905","type":"Grid"},{"attributes":{"days":[1,15]},"id":"24957","type":"DaysTicker"},{"attributes":{},"id":"24926","type":"DatetimeTickFormatter"},{"attributes":{},"id":"24912","type":"PanTool"},{"attributes":{"days":[1,8,15,22]},"id":"24956","type":"DaysTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"24942","type":"Scatter"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"24958","type":"MonthsTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24934","type":"Segment"},{"attributes":{"dimensions":"height","line_color":"#aec7e8"},"id":"24891","type":"CrosshairTool"},{"attributes":{"source":{"id":"24938","type":"ColumnDataSource"}},"id":"24945","type":"CDSView"},{"attributes":{"below":[{"id":"24901","type":"DatetimeAxis"}],"left":[{"id":"24906","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"24901","type":"DatetimeAxis"},{"id":"24905","type":"Grid"},{"id":"24906","type":"LinearAxis"},{"id":"24910","type":"Grid"},{"id":"24921","type":"BoxAnnotation"},{"id":"24936","type":"GlyphRenderer"},{"id":"24944","type":"GlyphRenderer"}],"title":{"id":"24892","type":"Title"},"toolbar":{"id":"24916","type":"Toolbar"},"x_range":{"id":"24888","type":"Range1d"},"x_scale":{"id":"24897","type":"LinearScale"},"y_range":{"id":"24889","type":"Range1d"},"y_scale":{"id":"24899","type":"LinearScale"}},"id":"24893","subtype":"Figure","type":"Plot"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"24955","type":"DaysTicker"},{"attributes":{"plot":null,"text":"NYSE Mean Annual Trading Volume","text_font_size":{"value":"24pt"}},"id":"24892","type":"Title"},{"attributes":{},"id":"24907","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24933","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24890","type":"HoverTool"},{"id":"24891","type":"CrosshairTool"},{"id":"24911","type":"SaveTool"},{"id":"24912","type":"PanTool"},{"id":"24913","type":"WheelZoomTool"},{"id":"24914","type":"BoxZoomTool"},{"id":"24915","type":"ResetTool"}]},"id":"24916","type":"Toolbar"},{"attributes":{"axis_label":"Volume","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"24928","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"24893","subtype":"Figure","type":"Plot"},"ticker":{"id":"24907","type":"BasicTicker"}},"id":"24906","type":"LinearAxis"},{"attributes":{},"id":"24915","type":"ResetTool"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"date_dt_strings":["2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00"],"volume":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"24939","type":"Selection"},"selection_policy":{"id":"24965","type":"UnionRenderers"}},"id":"24938","type":"ColumnDataSource"},{"attributes":{"callback":null,"formatters":{"date":"datetime","volume":"numeral"},"mode":"vline","renderers":[{"id":"24944","type":"GlyphRenderer"}],"tooltips":[["Year","@date{%Y}"],["Volume","@volume{0,0.00}"]]},"id":"24890","type":"HoverTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"24959","type":"MonthsTicker"},{"attributes":{},"id":"24913","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24921","type":"BoxAnnotation"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"24952","type":"AdaptiveTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"24893","subtype":"Figure","type":"Plot"},"ticker":{"id":"24907","type":"BasicTicker"}},"id":"24910","type":"Grid"},{"attributes":{},"id":"24962","type":"YearsTicker"},{"attributes":{"fill_color":{"value":"#4c72b0"},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"24941","type":"Scatter"},{"attributes":{"callback":null,"end":1451606400000.0,"reset_end":1451606400000.0,"reset_start":1262304000000.0,"start":1262304000000.0,"tags":[[["date","Date",null]]]},"id":"24888","type":"Range1d"},{"attributes":{"months":[0,6]},"id":"24961","type":"MonthsTicker"},{"attributes":{},"id":"24939","type":"Selection"},{"attributes":{"source":{"id":"24930","type":"ColumnDataSource"}},"id":"24937","type":"CDSView"},{"attributes":{"axis_label":"Date","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"24926","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"24893","subtype":"Figure","type":"Plot"},"ticker":{"id":"24902","type":"DatetimeTicker"}},"id":"24901","type":"DatetimeAxis"},{"attributes":{},"id":"24899","type":"LinearScale"},{"attributes":{"callback":null,"end":7454074.143082923,"reset_end":7454074.143082923,"reset_start":0.0,"tags":[[["volume","Volume",null]]]},"id":"24889","type":"Range1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AACA53JeckIAAED67dNyQgAAAA1pSXNCAACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUI=","dtype":"float64","shape":[7]},"y0":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[7]},"y1":{"__ndarray__":"Wnj+dAhaW0GIdtWLcy5aQd7qxqlG5VVBIkB4YgJrUkEWd1yrq4RQQbe18/rhLFFB74rWDA25UUE=","dtype":"float64","shape":[7]}},"selected":{"id":"24931","type":"Selection"},"selection_policy":{"id":"24963","type":"UnionRenderers"}},"id":"24930","type":"ColumnDataSource"},{"attributes":{},"id":"24963","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"volume"}},"id":"24943","type":"Scatter"},{"attributes":{},"id":"24928","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"24921","type":"BoxAnnotation"}},"id":"24914","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"24930","type":"ColumnDataSource"},"glyph":{"id":"24933","type":"Segment"},"hover_glyph":null,"muted_glyph":{"id":"24935","type":"Segment"},"nonselection_glyph":{"id":"24934","type":"Segment"},"selection_glyph":null,"view":{"id":"24937","type":"CDSView"}},"id":"24936","type":"GlyphRenderer"},{"attributes":{},"id":"24965","type":"UnionRenderers"},{"attributes":{},"id":"24911","type":"SaveTool"},{"attributes":{"months":[0,4,8]},"id":"24960","type":"MonthsTicker"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24935","type":"Segment"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"24954","type":"DaysTicker"}],"root_ids":["24893"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"54a9ef0e-b800-4e51-bcf6-120a8544e272","roots":{"24893":"188e1b48-71ce-4867-925f-a3c183fbcd8a"}}];
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