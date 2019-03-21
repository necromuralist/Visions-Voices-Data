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
      };var element = document.getElementById("e5cb808d-4cd4-4294-860e-2687d37a4e41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5cb808d-4cd4-4294-860e-2687d37a4e41' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"59959ad8-521f-4ae1-8267-6940dd2731b0":{"roots":{"references":[{"attributes":{},"id":"21601","type":"LinearScale"},{"attributes":{},"id":"21657","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"21629","type":"ColumnDataSource"}},"id":"21636","type":"CDSView"},{"attributes":{"below":[{"id":"21603","type":"LinearAxis"}],"left":[{"id":"21608","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"21603","type":"LinearAxis"},{"id":"21607","type":"Grid"},{"id":"21608","type":"LinearAxis"},{"id":"21612","type":"Grid"},{"id":"21623","type":"BoxAnnotation"},{"id":"21642","type":"GraphRenderer"}],"title":{"id":"21594","type":"Title"},"toolbar":{"id":"21619","type":"Toolbar"},"x_range":{"id":"21591","type":"Range1d"},"x_scale":{"id":"21599","type":"LinearScale"},"y_range":{"id":"21592","type":"Range1d"},"y_scale":{"id":"21601","type":"LinearScale"}},"id":"21595","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21593","type":"HoverTool"},{"id":"21613","type":"SaveTool"},{"id":"21614","type":"PanTool"},{"id":"21615","type":"WheelZoomTool"},{"id":"21616","type":"BoxZoomTool"},{"id":"21617","type":"ResetTool"},{"id":"21618","type":"TapTool"}]},"id":"21619","type":"Toolbar"},{"attributes":{},"id":"21655","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":15}},"id":"21632","type":"Circle"},{"attributes":{},"id":"21665","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"21666","type":"Selection"},"selection_policy":{"id":"21665","type":"UnionRenderers"}},"id":"21629","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"21595","subtype":"Figure","type":"Plot"},"ticker":{"id":"21609","type":"BasicTicker"}},"id":"21612","type":"Grid"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"21638","type":"MultiLine"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21595","subtype":"Figure","type":"Plot"},"ticker":{"id":"21604","type":"BasicTicker"}},"id":"21607","type":"Grid"},{"attributes":{"callback":null},"id":"21618","type":"TapTool"},{"attributes":{"callback":null,"data":{"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"end_values":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]},"start_values":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"21668","type":"Selection"},"selection_policy":{"id":"21667","type":"UnionRenderers"}},"id":"21630","type":"ColumnDataSource"},{"attributes":{},"id":"21667","type":"UnionRenderers"},{"attributes":{},"id":"21651","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"21666","type":"Selection"},{"attributes":{},"id":"21668","type":"Selection"},{"attributes":{},"id":"21614","type":"PanTool"},{"attributes":{"edge_renderer":{"id":"21640","type":"GlyphRenderer"},"inspection_policy":{"id":"21653","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"21631","type":"StaticLayoutProvider"},"node_renderer":{"id":"21635","type":"GlyphRenderer"},"selection_policy":{"id":"21651","type":"NodesAndLinkedEdges"}},"id":"21642","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"21592","type":"Range1d"},{"attributes":{"overlay":{"id":"21623","type":"BoxAnnotation"}},"id":"21616","type":"BoxZoomTool"},{"attributes":{},"id":"21604","type":"BasicTicker"},{"attributes":{},"id":"21609","type":"BasicTicker"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"21631","type":"StaticLayoutProvider"},{"attributes":{"line_width":{"value":2}},"id":"21637","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"21633","type":"Circle"},{"attributes":{"source":{"id":"21630","type":"ColumnDataSource"}},"id":"21641","type":"CDSView"},{"attributes":{},"id":"21653","type":"EdgesAndLinkedNodes"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"21634","type":"Circle"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21657","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21595","subtype":"Figure","type":"Plot"},"ticker":{"id":"21609","type":"BasicTicker"},"visible":false},"id":"21608","type":"LinearAxis"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21655","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21595","subtype":"Figure","type":"Plot"},"ticker":{"id":"21604","type":"BasicTicker"},"visible":false},"id":"21603","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21623","type":"BoxAnnotation"},{"attributes":{},"id":"21613","type":"SaveTool"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"21639","type":"MultiLine"},{"attributes":{},"id":"21615","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"21630","type":"ColumnDataSource"},"glyph":{"id":"21637","type":"MultiLine"},"hover_glyph":{"id":"21639","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"21638","type":"MultiLine"},"selection_glyph":null,"view":{"id":"21641","type":"CDSView"}},"id":"21640","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"21591","type":"Range1d"},{"attributes":{},"id":"21617","type":"ResetTool"},{"attributes":{"plot":null,"text":"Edge Hover","text_font_size":{"value":"24pt"}},"id":"21594","type":"Title"},{"attributes":{"callback":null,"renderers":[{"id":"21642","type":"GraphRenderer"}],"tooltips":[["start","@{start_values}"],["end","@{end_values}"]]},"id":"21593","type":"HoverTool"},{"attributes":{"data_source":{"id":"21629","type":"ColumnDataSource"},"glyph":{"id":"21632","type":"Circle"},"hover_glyph":{"id":"21634","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21633","type":"Circle"},"selection_glyph":null,"view":{"id":"21636","type":"CDSView"}},"id":"21635","type":"GlyphRenderer"},{"attributes":{},"id":"21599","type":"LinearScale"}],"root_ids":["21595"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"59959ad8-521f-4ae1-8267-6940dd2731b0","roots":{"21595":"e5cb808d-4cd4-4294-860e-2687d37a4e41"}}];
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