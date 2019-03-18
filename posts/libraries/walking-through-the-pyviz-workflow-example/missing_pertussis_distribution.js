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
      };var element = document.getElementById("f7664a4d-5cad-4b77-bc63-21c98a270f15");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7664a4d-5cad-4b77-bc63-21c98a270f15' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b62b4548-ce92-4edc-b0b3-5f3ecf8b8105":{"roots":{"references":[{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"numeral"},"mode":"vline","renderers":[{"id":"1365","type":"GlyphRenderer"}],"tooltips":[["Missing","@Year_count{0,0}"],["Decade Center Year","@Year{0}"]]},"id":"1325","type":"HoverTool"},{"attributes":{},"id":"1341","type":"BasicTicker"},{"attributes":{},"id":"1369","type":"BasicTickFormatter"},{"attributes":{},"id":"1360","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1327","subtype":"Figure","type":"Plot"},"ticker":{"id":"1341","type":"BasicTicker"}},"id":"1344","type":"Grid"},{"attributes":{},"id":"1367","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Missing Pertussis by Decade","text_font_size":{"value":"18pt"}},"id":"1326","type":"Title"},{"attributes":{"callback":null,"data":{"Year":{"__ndarray__":"AAAAAAA8nkAAAAAAAGSeQAAAAAAAjJ5AAAAAAAC0nkAAAAAAANyeQAAAAAAABJ9AAAAAAAAsn0AAAAAAAFSfQA==","dtype":"float64","shape":[8]},"Year_count":[21706,2591,13392,26520,23221,10372,5688,4657],"left":{"__ndarray__":"AAAAAAAonkAAAAAAAFCeQAAAAAAAeJ5AAAAAAACgnkAAAAAAAMieQAAAAAAA8J5AAAAAAAAYn0AAAAAAAECfQA==","dtype":"float64","shape":[8]},"right":{"__ndarray__":"AAAAAABQnkAAAAAAAHieQAAAAAAAoJ5AAAAAAADInkAAAAAAAPCeQAAAAAAAGJ9AAAAAAABAn0AAAAAAAGifQA==","dtype":"float64","shape":[8]},"top":[21706,2591,13392,26520,23221,10372,5688,4657]},"selected":{"id":"1360","type":"Selection"},"selection_policy":{"id":"1376","type":"UnionRenderers"}},"id":"1359","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1359","type":"ColumnDataSource"}},"id":"1366","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1325","type":"HoverTool"},{"id":"1345","type":"SaveTool"},{"id":"1346","type":"PanTool"},{"id":"1347","type":"WheelZoomTool"},{"id":"1348","type":"BoxZoomTool"},{"id":"1349","type":"ResetTool"}]},"id":"1350","type":"Toolbar"},{"attributes":{},"id":"1331","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1354","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1359","type":"ColumnDataSource"},"glyph":{"id":"1362","type":"Quad"},"hover_glyph":null,"muted_glyph":{"id":"1364","type":"Quad"},"nonselection_glyph":{"id":"1363","type":"Quad"},"selection_glyph":null,"view":{"id":"1366","type":"CDSView"}},"id":"1365","type":"GlyphRenderer"},{"attributes":{},"id":"1333","type":"LinearScale"},{"attributes":{},"id":"1349","type":"ResetTool"},{"attributes":{},"id":"1345","type":"SaveTool"},{"attributes":{"overlay":{"id":"1354","type":"BoxAnnotation"}},"id":"1348","type":"BoxZoomTool"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1367","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1327","subtype":"Figure","type":"Plot"},"ticker":{"id":"1336","type":"BasicTicker"}},"id":"1335","type":"LinearAxis"},{"attributes":{},"id":"1346","type":"PanTool"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1363","type":"Quad"},{"attributes":{},"id":"1336","type":"BasicTicker"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1364","type":"Quad"},{"attributes":{},"id":"1347","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":26520.0,"reset_end":26520.0,"reset_start":0.0,"tags":[[["Year_count","Count",null]]]},"id":"1324","type":"Range1d"},{"attributes":{},"id":"1376","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1327","subtype":"Figure","type":"Plot"},"ticker":{"id":"1336","type":"BasicTicker"}},"id":"1339","type":"Grid"},{"attributes":{"callback":null,"end":2010.0,"reset_end":2010.0,"reset_start":1930.0,"start":1930.0,"tags":[[["Year","Year",null]]]},"id":"1323","type":"Range1d"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1362","type":"Quad"},{"attributes":{"axis_label":"Count of Missing","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1369","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1327","subtype":"Figure","type":"Plot"},"ticker":{"id":"1341","type":"BasicTicker"}},"id":"1340","type":"LinearAxis"},{"attributes":{"below":[{"id":"1335","type":"LinearAxis"}],"left":[{"id":"1340","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":700,"renderers":[{"id":"1335","type":"LinearAxis"},{"id":"1339","type":"Grid"},{"id":"1340","type":"LinearAxis"},{"id":"1344","type":"Grid"},{"id":"1354","type":"BoxAnnotation"},{"id":"1365","type":"GlyphRenderer"}],"title":{"id":"1326","type":"Title"},"toolbar":{"id":"1350","type":"Toolbar"},"x_range":{"id":"1323","type":"Range1d"},"x_scale":{"id":"1331","type":"LinearScale"},"y_range":{"id":"1324","type":"Range1d"},"y_scale":{"id":"1333","type":"LinearScale"}},"id":"1327","subtype":"Figure","type":"Plot"}],"root_ids":["1327"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b62b4548-ce92-4edc-b0b3-5f3ecf8b8105","roots":{"1327":"f7664a4d-5cad-4b77-bc63-21c98a270f15"}}];
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