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
      };var element = document.getElementById("3b264531-d9b5-45ae-83f6-16bf70fa0da8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b264531-d9b5-45ae-83f6-16bf70fa0da8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"77955576-6a14-4f3d-8ac6-3462028fc57a":{"roots":{"references":[{"attributes":{},"id":"1072","type":"SaveTool"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1091","type":"Quad"},{"attributes":{},"id":"1073","type":"PanTool"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1094","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1054","subtype":"Figure","type":"Plot"},"ticker":{"id":"1063","type":"BasicTicker"}},"id":"1062","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1086","type":"ColumnDataSource"},"glyph":{"id":"1089","type":"Quad"},"hover_glyph":null,"muted_glyph":{"id":"1091","type":"Quad"},"nonselection_glyph":{"id":"1090","type":"Quad"},"selection_glyph":null,"view":{"id":"1093","type":"CDSView"}},"id":"1092","type":"GlyphRenderer"},{"attributes":{},"id":"1074","type":"WheelZoomTool"},{"attributes":{},"id":"1063","type":"BasicTicker"},{"attributes":{"callback":null,"end":27548.0,"reset_end":27548.0,"reset_start":0.0,"tags":[[["Year_count","Count",null]]]},"id":"1051","type":"Range1d"},{"attributes":{"callback":null,"end":2010.0,"reset_end":2010.0,"reset_start":1930.0,"start":1930.0,"tags":[[["Year","Year",null]]]},"id":"1050","type":"Range1d"},{"attributes":{"source":{"id":"1086","type":"ColumnDataSource"}},"id":"1093","type":"CDSView"},{"attributes":{"overlay":{"id":"1081","type":"BoxAnnotation"}},"id":"1075","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1054","subtype":"Figure","type":"Plot"},"ticker":{"id":"1063","type":"BasicTicker"}},"id":"1066","type":"Grid"},{"attributes":{"below":[{"id":"1062","type":"LinearAxis"}],"left":[{"id":"1067","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1000,"renderers":[{"id":"1062","type":"LinearAxis"},{"id":"1066","type":"Grid"},{"id":"1067","type":"LinearAxis"},{"id":"1071","type":"Grid"},{"id":"1081","type":"BoxAnnotation"},{"id":"1092","type":"GlyphRenderer"}],"title":{"id":"1053","type":"Title"},"toolbar":{"id":"1077","type":"Toolbar"},"x_range":{"id":"1050","type":"Range1d"},"x_scale":{"id":"1058","type":"LinearScale"},"y_range":{"id":"1051","type":"Range1d"},"y_scale":{"id":"1060","type":"LinearScale"}},"id":"1054","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1076","type":"ResetTool"},{"attributes":{"axis_label":"Count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1096","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1054","subtype":"Figure","type":"Plot"},"ticker":{"id":"1068","type":"BasicTicker"}},"id":"1067","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"Year":{"__ndarray__":"AAAAAAA8nkAAAAAAAGSeQAAAAAAAjJ5AAAAAAAC0nkAAAAAAANyeQAAAAAAABJ9AAAAAAAAsn0AAAAAAAFSfQA==","dtype":"float64","shape":[8]},"Year_count":[4160,3571,2961,2741,3136,13351,16519,27548],"left":{"__ndarray__":"AAAAAAAonkAAAAAAAFCeQAAAAAAAeJ5AAAAAAACgnkAAAAAAAMieQAAAAAAA8J5AAAAAAAAYn0AAAAAAAECfQA==","dtype":"float64","shape":[8]},"right":{"__ndarray__":"AAAAAABQnkAAAAAAAHieQAAAAAAAoJ5AAAAAAADInkAAAAAAAPCeQAAAAAAAGJ9AAAAAAABAn0AAAAAAAGifQA==","dtype":"float64","shape":[8]},"top":[4160,3571,2961,2741,3136,13351,16519,27548]},"selected":{"id":"1087","type":"Selection"},"selection_policy":{"id":"1103","type":"UnionRenderers"}},"id":"1086","type":"ColumnDataSource"},{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"numeral"},"mode":"vline","renderers":[{"id":"1092","type":"GlyphRenderer"}],"tooltips":[["Missing","@Year_count{0,0}"],["Decade Center Year","@Year{0}"]]},"id":"1052","type":"HoverTool"},{"attributes":{},"id":"1096","type":"BasicTickFormatter"},{"attributes":{},"id":"1068","type":"BasicTicker"},{"attributes":{},"id":"1094","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1081","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1054","subtype":"Figure","type":"Plot"},"ticker":{"id":"1068","type":"BasicTicker"}},"id":"1071","type":"Grid"},{"attributes":{"plot":null,"text":"Missing Weekly Measles Reports by Decade","text_font_size":{"value":"18pt"}},"id":"1053","type":"Title"},{"attributes":{},"id":"1087","type":"Selection"},{"attributes":{},"id":"1058","type":"LinearScale"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1089","type":"Quad"},{"attributes":{},"id":"1103","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1052","type":"HoverTool"},{"id":"1072","type":"SaveTool"},{"id":"1073","type":"PanTool"},{"id":"1074","type":"WheelZoomTool"},{"id":"1075","type":"BoxZoomTool"},{"id":"1076","type":"ResetTool"}]},"id":"1077","type":"Toolbar"},{"attributes":{},"id":"1060","type":"LinearScale"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1090","type":"Quad"}],"root_ids":["1054"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"77955576-6a14-4f3d-8ac6-3462028fc57a","roots":{"1054":"3b264531-d9b5-45ae-83f6-16bf70fa0da8"}}];
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