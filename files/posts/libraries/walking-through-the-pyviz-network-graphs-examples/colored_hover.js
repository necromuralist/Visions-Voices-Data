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
      };var element = document.getElementById("1898ed6f-c4f6-4e5d-ba9f-6c9bf31cb3e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1898ed6f-c4f6-4e5d-ba9f-6c9bf31cb3e9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"380cec75-ca32-4dc2-bc43-31360c7afa65":{"roots":{"references":[{"attributes":{"edge_renderer":{"id":"2232","type":"GlyphRenderer"},"inspection_policy":{"id":"2245","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"2223","type":"StaticLayoutProvider"},"node_renderer":{"id":"2227","type":"GlyphRenderer"},"selection_policy":{"id":"2243","type":"NodesAndLinkedEdges"}},"id":"2234","type":"GraphRenderer"},{"attributes":{},"id":"2243","type":"NodesAndLinkedEdges"},{"attributes":{"overlay":{"id":"2215","type":"BoxAnnotation"}},"id":"2208","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2187","subtype":"Figure","type":"Plot"},"ticker":{"id":"2201","type":"BasicTicker"}},"id":"2204","type":"Grid"},{"attributes":{},"id":"2247","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2249","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2187","subtype":"Figure","type":"Plot"},"ticker":{"id":"2201","type":"BasicTicker"},"visible":false},"id":"2200","type":"LinearAxis"},{"attributes":{},"id":"2249","type":"BasicTickFormatter"},{"attributes":{},"id":"2201","type":"BasicTicker"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2247","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2187","subtype":"Figure","type":"Plot"},"ticker":{"id":"2196","type":"BasicTicker"},"visible":false},"id":"2195","type":"LinearAxis"},{"attributes":{},"id":"2209","type":"ResetTool"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"2223","type":"StaticLayoutProvider"},{"attributes":{},"id":"2245","type":"EdgesAndLinkedNodes"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"2258","type":"Selection"},"selection_policy":{"id":"2257","type":"UnionRenderers"}},"id":"2221","type":"ColumnDataSource"},{"attributes":{},"id":"2196","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2187","subtype":"Figure","type":"Plot"},"ticker":{"id":"2196","type":"BasicTicker"}},"id":"2199","type":"Grid"},{"attributes":{"callback":null,"data":{"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"end_values":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]},"start_values":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"2260","type":"Selection"},"selection_policy":{"id":"2259","type":"UnionRenderers"}},"id":"2222","type":"ColumnDataSource"},{"attributes":{},"id":"2207","type":"WheelZoomTool"},{"attributes":{},"id":"2205","type":"SaveTool"},{"attributes":{},"id":"2191","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":15}},"id":"2224","type":"Circle"},{"attributes":{},"id":"2206","type":"PanTool"},{"attributes":{},"id":"2193","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"2225","type":"Circle"},{"attributes":{},"id":"2257","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Edge Hover","text_font_size":{"value":"24pt"}},"id":"2186","type":"Title"},{"attributes":{"fill_color":{"value":"red"},"size":{"units":"screen","value":15}},"id":"2226","type":"Circle"},{"attributes":{"data_source":{"id":"2221","type":"ColumnDataSource"},"glyph":{"id":"2224","type":"Circle"},"hover_glyph":{"id":"2226","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"2225","type":"Circle"},"selection_glyph":null,"view":{"id":"2228","type":"CDSView"}},"id":"2227","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"2184","type":"Range1d"},{"attributes":{"below":[{"id":"2195","type":"LinearAxis"}],"left":[{"id":"2200","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"2195","type":"LinearAxis"},{"id":"2199","type":"Grid"},{"id":"2200","type":"LinearAxis"},{"id":"2204","type":"Grid"},{"id":"2215","type":"BoxAnnotation"},{"id":"2234","type":"GraphRenderer"}],"title":{"id":"2186","type":"Title"},"toolbar":{"id":"2211","type":"Toolbar"},"x_range":{"id":"2183","type":"Range1d"},"x_scale":{"id":"2191","type":"LinearScale"},"y_range":{"id":"2184","type":"Range1d"},"y_scale":{"id":"2193","type":"LinearScale"}},"id":"2187","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"2221","type":"ColumnDataSource"}},"id":"2228","type":"CDSView"},{"attributes":{},"id":"2260","type":"Selection"},{"attributes":{},"id":"2259","type":"UnionRenderers"},{"attributes":{"line_width":{"value":2}},"id":"2229","type":"MultiLine"},{"attributes":{"callback":null},"id":"2210","type":"TapTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2185","type":"HoverTool"},{"id":"2205","type":"SaveTool"},{"id":"2206","type":"PanTool"},{"id":"2207","type":"WheelZoomTool"},{"id":"2208","type":"BoxZoomTool"},{"id":"2209","type":"ResetTool"},{"id":"2210","type":"TapTool"}]},"id":"2211","type":"Toolbar"},{"attributes":{"callback":null,"renderers":[{"id":"2234","type":"GraphRenderer"}],"tooltips":[["start","@{start_values}"],["end","@{end_values}"]]},"id":"2185","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"2230","type":"MultiLine"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"2183","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2215","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"pink"},"line_width":{"value":2}},"id":"2231","type":"MultiLine"},{"attributes":{"data_source":{"id":"2222","type":"ColumnDataSource"},"glyph":{"id":"2229","type":"MultiLine"},"hover_glyph":{"id":"2231","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"2230","type":"MultiLine"},"selection_glyph":null,"view":{"id":"2233","type":"CDSView"}},"id":"2232","type":"GlyphRenderer"},{"attributes":{},"id":"2258","type":"Selection"},{"attributes":{"source":{"id":"2222","type":"ColumnDataSource"}},"id":"2233","type":"CDSView"}],"root_ids":["2187"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"380cec75-ca32-4dc2-bc43-31360c7afa65","roots":{"2187":"1898ed6f-c4f6-4e5d-ba9f-6c9bf31cb3e9"}}];
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