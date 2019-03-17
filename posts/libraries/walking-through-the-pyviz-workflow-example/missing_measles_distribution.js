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
      };var element = document.getElementById("26f00f41-51a8-4898-a2c0-7aa804187532");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '26f00f41-51a8-4898-a2c0-7aa804187532' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"94a6b374-97a3-4927-8674-bf5316071181":{"roots":{"references":[{"attributes":{"below":[{"id":"26045","type":"LinearAxis"}],"left":[{"id":"26050","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":800,"renderers":[{"id":"26045","type":"LinearAxis"},{"id":"26049","type":"Grid"},{"id":"26050","type":"LinearAxis"},{"id":"26054","type":"Grid"},{"id":"26064","type":"BoxAnnotation"},{"id":"26075","type":"GlyphRenderer"}],"title":{"id":"26036","type":"Title"},"toolbar":{"id":"26060","type":"Toolbar"},"x_range":{"id":"26033","type":"Range1d"},"x_scale":{"id":"26041","type":"LinearScale"},"y_range":{"id":"26034","type":"Range1d"},"y_scale":{"id":"26043","type":"LinearScale"}},"id":"26037","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"26073","type":"Quad"},{"attributes":{},"id":"26080","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"26037","subtype":"Figure","type":"Plot"},"ticker":{"id":"26046","type":"BasicTicker"}},"id":"26049","type":"Grid"},{"attributes":{},"id":"26057","type":"WheelZoomTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"26078","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"26037","subtype":"Figure","type":"Plot"},"ticker":{"id":"26046","type":"BasicTicker"}},"id":"26045","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26035","type":"HoverTool"},{"id":"26055","type":"SaveTool"},{"id":"26056","type":"PanTool"},{"id":"26057","type":"WheelZoomTool"},{"id":"26058","type":"BoxZoomTool"},{"id":"26059","type":"ResetTool"}]},"id":"26060","type":"Toolbar"},{"attributes":{},"id":"26087","type":"UnionRenderers"},{"attributes":{},"id":"26046","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26064","type":"BoxAnnotation"},{"attributes":{"source":{"id":"26069","type":"ColumnDataSource"}},"id":"26076","type":"CDSView"},{"attributes":{},"id":"26051","type":"BasicTicker"},{"attributes":{},"id":"26041","type":"LinearScale"},{"attributes":{},"id":"26043","type":"LinearScale"},{"attributes":{"callback":null,"end":13260.0,"reset_end":13260.0,"reset_start":0.0,"tags":[[["Year_count","Count",null]]]},"id":"26034","type":"Range1d"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"26072","type":"Quad"},{"attributes":{},"id":"26055","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Year":{"__ndarray__":"zczMzEwonkBmZmZm5jieQAAAAACASZ5AmpmZmRlankAzMzMzs2qeQM3MzMxMe55AZmZmZuaLnkAAAAAAgJyeQJqZmZkZrZ5AMzMzM7O9nkDNzMzMTM6eQGZmZmbm3p5AAAAAAIDvnkCamZmZGQCfQDMzMzOzEJ9AzczMzEwhn0BmZmZm5jGfQAAAAACAQp9AmpmZmRlTn0AzMzMzs2OfQA==","dtype":"float64","shape":[20]},"Year_count":[2392,1639,1474,1387,1574,1167,1252,1537,1363,612,870,1511,2449,7696,4774,6379,7177,8482,10608,13260],"left":{"__ndarray__":"AAAAAAAgnkCamZmZmTCeQDMzMzMzQZ5AzczMzMxRnkBmZmZmZmKeQAAAAAAAc55AmpmZmZmDnkAzMzMzM5SeQM3MzMzMpJ5AZmZmZma1nkAAAAAAAMaeQJqZmZmZ1p5AMzMzMzPnnkDNzMzMzPeeQGZmZmZmCJ9AAAAAAAAZn0CamZmZmSmfQDMzMzMzOp9AzczMzMxKn0BmZmZmZlufQA==","dtype":"float64","shape":[20]},"right":{"__ndarray__":"mpmZmZkwnkAzMzMzM0GeQM3MzMzMUZ5AZmZmZmZinkAAAAAAAHOeQJqZmZmZg55AMzMzMzOUnkDNzMzMzKSeQGZmZmZmtZ5AAAAAAADGnkCamZmZmdaeQDMzMzMz555AzczMzMz3nkBmZmZmZgifQAAAAAAAGZ9AmpmZmZkpn0AzMzMzMzqfQM3MzMzMSp9AZmZmZmZbn0AAAAAAAGyfQA==","dtype":"float64","shape":[20]},"top":[2392,1639,1474,1387,1574,1167,1252,1537,1363,612,870,1511,2449,7696,4774,6379,7177,8482,10608,13260]},"selected":{"id":"26070","type":"Selection"},"selection_policy":{"id":"26087","type":"UnionRenderers"}},"id":"26069","type":"ColumnDataSource"},{"attributes":{},"id":"26056","type":"PanTool"},{"attributes":{"overlay":{"id":"26064","type":"BoxAnnotation"}},"id":"26058","type":"BoxZoomTool"},{"attributes":{"axis_label":"Count","bounds":"auto","formatter":{"id":"26080","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"26037","subtype":"Figure","type":"Plot"},"ticker":{"id":"26051","type":"BasicTicker"}},"id":"26050","type":"LinearAxis"},{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"datetime"},"mode":"vline","renderers":[{"id":"26075","type":"GlyphRenderer"}],"tooltips":[["Missing","@Year_count{0,0}"],["Year","@Year{%Y}"]]},"id":"26035","type":"HoverTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"26037","subtype":"Figure","type":"Plot"},"ticker":{"id":"26051","type":"BasicTicker"}},"id":"26054","type":"Grid"},{"attributes":{"plot":null,"text":"Missing Measles Counts by Year"},"id":"26036","type":"Title"},{"attributes":{},"id":"26078","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"26069","type":"ColumnDataSource"},"glyph":{"id":"26072","type":"Quad"},"hover_glyph":null,"muted_glyph":{"id":"26074","type":"Quad"},"nonselection_glyph":{"id":"26073","type":"Quad"},"selection_glyph":null,"view":{"id":"26076","type":"CDSView"}},"id":"26075","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"26033","type":"Range1d"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"26074","type":"Quad"},{"attributes":{},"id":"26059","type":"ResetTool"},{"attributes":{},"id":"26070","type":"Selection"}],"root_ids":["26037"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"94a6b374-97a3-4927-8674-bf5316071181","roots":{"26037":"26f00f41-51a8-4898-a2c0-7aa804187532"}}];
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