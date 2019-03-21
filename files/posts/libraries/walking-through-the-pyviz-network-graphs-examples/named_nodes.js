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
      };var element = document.getElementById("b08b52fb-88c9-453e-950f-c71b2f1f6cd4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b08b52fb-88c9-453e-950f-c71b2f1f6cd4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d6d5ba8e-d075-46fb-82e0-851b4df99be4":{"roots":{"references":[{"attributes":{"plot":null,"text":"Labeled Nodes","text_font_size":{"value":"24pt"}},"id":"2374","type":"Title"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"2420","type":"MultiLine"},{"attributes":{},"id":"2379","type":"LinearScale"},{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"2449","type":"Selection"},"selection_policy":{"id":"2448","type":"UnionRenderers"}},"id":"2409","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2407","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2415","type":"Circle"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2407","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"2411","type":"Circle"},{"attributes":{},"id":"2381","type":"LinearScale"},{"attributes":{"data_source":{"id":"2409","type":"ColumnDataSource"},"glyph":{"id":"2418","type":"MultiLine"},"hover_glyph":{"id":"2420","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"2419","type":"MultiLine"},"selection_glyph":null,"view":{"id":"2422","type":"CDSView"}},"id":"2421","type":"GlyphRenderer"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2436","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2375","subtype":"Figure","type":"Plot"},"ticker":{"id":"2384","type":"BasicTicker"},"visible":false},"id":"2383","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"2414","type":"Circle"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2407","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2413","type":"Circle"},{"attributes":{},"id":"2384","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"2407","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"2412","type":"Circle"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"2419","type":"MultiLine"},{"attributes":{"edge_renderer":{"id":"2421","type":"GlyphRenderer"},"inspection_policy":{"id":"2434","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"2410","type":"StaticLayoutProvider"},"node_renderer":{"id":"2416","type":"GlyphRenderer"},"selection_policy":{"id":"2432","type":"NodesAndLinkedEdges"}},"id":"2423","type":"GraphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2375","subtype":"Figure","type":"Plot"},"ticker":{"id":"2384","type":"BasicTicker"}},"id":"2387","type":"Grid"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2438","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2375","subtype":"Figure","type":"Plot"},"ticker":{"id":"2389","type":"BasicTicker"},"visible":false},"id":"2388","type":"LinearAxis"},{"attributes":{},"id":"2432","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"2389","type":"BasicTicker"},{"attributes":{},"id":"2447","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2375","subtype":"Figure","type":"Plot"},"ticker":{"id":"2389","type":"BasicTicker"}},"id":"2392","type":"Grid"},{"attributes":{},"id":"2449","type":"Selection"},{"attributes":{"line_width":{"value":2}},"id":"2418","type":"MultiLine"},{"attributes":{},"id":"2434","type":"NodesAndLinkedEdges"},{"attributes":{"data_source":{"id":"2408","type":"ColumnDataSource"},"glyph":{"id":"2411","type":"Circle"},"hover_glyph":{"id":"2414","type":"Circle"},"muted_glyph":{"id":"2415","type":"Circle"},"nonselection_glyph":{"id":"2412","type":"Circle"},"selection_glyph":{"id":"2413","type":"Circle"},"view":{"id":"2417","type":"CDSView"}},"id":"2416","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2373","type":"HoverTool"},{"id":"2393","type":"SaveTool"},{"id":"2394","type":"PanTool"},{"id":"2395","type":"WheelZoomTool"},{"id":"2396","type":"BoxZoomTool"},{"id":"2397","type":"ResetTool"}]},"id":"2398","type":"Toolbar"},{"attributes":{},"id":"2438","type":"BasicTickFormatter"},{"attributes":{},"id":"2393","type":"SaveTool"},{"attributes":{},"id":"2436","type":"BasicTickFormatter"},{"attributes":{},"id":"2394","type":"PanTool"},{"attributes":{"source":{"id":"2409","type":"ColumnDataSource"}},"id":"2422","type":"CDSView"},{"attributes":{},"id":"2446","type":"UnionRenderers"},{"attributes":{"factors":["Barbara","Gloria"],"palette":["#e41a1c","#377eb8"]},"id":"2407","type":"CategoricalColorMapper"},{"attributes":{},"id":"2448","type":"UnionRenderers"},{"attributes":{},"id":"2395","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"2371","type":"Range1d"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"2372","type":"Range1d"},{"attributes":{"overlay":{"id":"2402","type":"BoxAnnotation"}},"id":"2396","type":"BoxZoomTool"},{"attributes":{"source":{"id":"2408","type":"ColumnDataSource"}},"id":"2417","type":"CDSView"},{"attributes":{"callback":null,"data":{"Name":["Barbara","Barbara","Barbara","Barbara","Barbara","Gloria","Barbara","Barbara","Barbara","Barbara"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"index_hover":["0","1","2","3","4","5","6","7","8","9"],"node_color":["Barbara","Barbara","Barbara","Barbara","Barbara","Gloria","Barbara","Barbara","Barbara","Barbara"]},"selected":{"id":"2447","type":"Selection"},"selection_policy":{"id":"2446","type":"UnionRenderers"}},"id":"2408","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2383","type":"LinearAxis"}],"left":[{"id":"2388","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"2383","type":"LinearAxis"},{"id":"2387","type":"Grid"},{"id":"2388","type":"LinearAxis"},{"id":"2392","type":"Grid"},{"id":"2402","type":"BoxAnnotation"},{"id":"2423","type":"GraphRenderer"}],"title":{"id":"2374","type":"Title"},"toolbar":{"id":"2398","type":"Toolbar"},"x_range":{"id":"2371","type":"Range1d"},"x_scale":{"id":"2379","type":"LinearScale"},"y_range":{"id":"2372","type":"Range1d"},"y_scale":{"id":"2381","type":"LinearScale"}},"id":"2375","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2397","type":"ResetTool"},{"attributes":{"callback":null,"renderers":[{"id":"2423","type":"GraphRenderer"}],"tooltips":[["Name","@Name"]]},"id":"2373","type":"HoverTool"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"2410","type":"StaticLayoutProvider"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2402","type":"BoxAnnotation"}],"root_ids":["2375"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d6d5ba8e-d075-46fb-82e0-851b4df99be4","roots":{"2375":"b08b52fb-88c9-453e-950f-c71b2f1f6cd4"}}];
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