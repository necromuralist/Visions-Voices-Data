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
      };var element = document.getElementById("9c0721d1-633c-4066-b149-4efddfb0305c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c0721d1-633c-4066-b149-4efddfb0305c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"44365bc6-e83b-451c-a7d4-74e87974eba2":{"roots":{"references":[{"attributes":{},"id":"21799","type":"SaveTool"},{"attributes":{},"id":"21841","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21781","subtype":"Figure","type":"Plot"},"ticker":{"id":"21790","type":"BasicTicker"}},"id":"21793","type":"Grid"},{"attributes":{"line_color":{"value":"pink"},"line_width":{"value":2}},"id":"21825","type":"MultiLine"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21843","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21781","subtype":"Figure","type":"Plot"},"ticker":{"id":"21795","type":"BasicTicker"},"visible":false},"id":"21794","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21779","type":"HoverTool"},{"id":"21799","type":"SaveTool"},{"id":"21800","type":"PanTool"},{"id":"21801","type":"WheelZoomTool"},{"id":"21802","type":"BoxZoomTool"},{"id":"21803","type":"ResetTool"},{"id":"21804","type":"TapTool"}]},"id":"21805","type":"Toolbar"},{"attributes":{"source":{"id":"21816","type":"ColumnDataSource"}},"id":"21827","type":"CDSView"},{"attributes":{"callback":null},"id":"21804","type":"TapTool"},{"attributes":{},"id":"21790","type":"BasicTicker"},{"attributes":{},"id":"21795","type":"BasicTicker"},{"attributes":{},"id":"21839","type":"EdgesAndLinkedNodes"},{"attributes":{"below":[{"id":"21789","type":"LinearAxis"}],"left":[{"id":"21794","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"21789","type":"LinearAxis"},{"id":"21793","type":"Grid"},{"id":"21794","type":"LinearAxis"},{"id":"21798","type":"Grid"},{"id":"21809","type":"BoxAnnotation"},{"id":"21828","type":"GraphRenderer"}],"title":{"id":"21780","type":"Title"},"toolbar":{"id":"21805","type":"Toolbar"},"x_range":{"id":"21777","type":"Range1d"},"x_scale":{"id":"21785","type":"LinearScale"},"y_range":{"id":"21778","type":"Range1d"},"y_scale":{"id":"21787","type":"LinearScale"}},"id":"21781","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21803","type":"ResetTool"},{"attributes":{"line_width":{"value":2}},"id":"21823","type":"MultiLine"},{"attributes":{},"id":"21852","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"size":{"units":"screen","value":15}},"id":"21820","type":"Circle"},{"attributes":{},"id":"21851","type":"UnionRenderers"},{"attributes":{},"id":"21853","type":"UnionRenderers"},{"attributes":{},"id":"21800","type":"PanTool"},{"attributes":{},"id":"21801","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"21852","type":"Selection"},"selection_policy":{"id":"21851","type":"UnionRenderers"}},"id":"21815","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21815","type":"ColumnDataSource"}},"id":"21822","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"21826","type":"GlyphRenderer"},"inspection_policy":{"id":"21839","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"21817","type":"StaticLayoutProvider"},"node_renderer":{"id":"21821","type":"GlyphRenderer"},"selection_policy":{"id":"21837","type":"NodesAndLinkedEdges"}},"id":"21828","type":"GraphRenderer"},{"attributes":{"data_source":{"id":"21816","type":"ColumnDataSource"},"glyph":{"id":"21823","type":"MultiLine"},"hover_glyph":{"id":"21825","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"21824","type":"MultiLine"},"selection_glyph":null,"view":{"id":"21827","type":"CDSView"}},"id":"21826","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"21781","subtype":"Figure","type":"Plot"},"ticker":{"id":"21795","type":"BasicTicker"}},"id":"21798","type":"Grid"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"21778","type":"Range1d"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"21777","type":"Range1d"},{"attributes":{},"id":"21843","type":"BasicTickFormatter"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21841","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21781","subtype":"Figure","type":"Plot"},"ticker":{"id":"21790","type":"BasicTicker"},"visible":false},"id":"21789","type":"LinearAxis"},{"attributes":{},"id":"21785","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"21819","type":"Circle"},{"attributes":{},"id":"21854","type":"Selection"},{"attributes":{"plot":null,"text":"Edge Hover","text_font_size":{"value":"24pt"}},"id":"21780","type":"Title"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"21817","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"data":{"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"end_values":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]},"start_values":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"21854","type":"Selection"},"selection_policy":{"id":"21853","type":"UnionRenderers"}},"id":"21816","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"21824","type":"MultiLine"},{"attributes":{},"id":"21837","type":"NodesAndLinkedEdges"},{"attributes":{"data_source":{"id":"21815","type":"ColumnDataSource"},"glyph":{"id":"21818","type":"Circle"},"hover_glyph":{"id":"21820","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21819","type":"Circle"},"selection_glyph":null,"view":{"id":"21822","type":"CDSView"}},"id":"21821","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21809","type":"BoxAnnotation"},{"attributes":{},"id":"21787","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":15}},"id":"21818","type":"Circle"},{"attributes":{"callback":null,"renderers":[{"id":"21828","type":"GraphRenderer"}],"tooltips":[["start","@{start_values}"],["end","@{end_values}"]]},"id":"21779","type":"HoverTool"},{"attributes":{"overlay":{"id":"21809","type":"BoxAnnotation"}},"id":"21802","type":"BoxZoomTool"}],"root_ids":["21781"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"44365bc6-e83b-451c-a7d4-74e87974eba2","roots":{"21781":"9c0721d1-633c-4066-b149-4efddfb0305c"}}];
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