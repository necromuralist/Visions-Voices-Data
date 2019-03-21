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
      };var element = document.getElementById("a991c8b1-f3bc-44bc-9c44-6978668c0c12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a991c8b1-f3bc-44bc-9c44-6978668c0c12' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a6b747cf-3579-48cc-aa24-42b40fd89cf3":{"roots":{"references":[{"attributes":{},"id":"2019","type":"SaveTool"},{"attributes":{},"id":"2061","type":"BasicTickFormatter"},{"attributes":{},"id":"2063","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2009","type":"LinearAxis"}],"left":[{"id":"2014","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"2009","type":"LinearAxis"},{"id":"2013","type":"Grid"},{"id":"2014","type":"LinearAxis"},{"id":"2018","type":"Grid"},{"id":"2029","type":"BoxAnnotation"},{"id":"2048","type":"GraphRenderer"}],"title":{"id":"2000","type":"Title"},"toolbar":{"id":"2025","type":"Toolbar"},"x_range":{"id":"1997","type":"Range1d"},"x_scale":{"id":"2005","type":"LinearScale"},"y_range":{"id":"1998","type":"Range1d"},"y_scale":{"id":"2007","type":"LinearScale"}},"id":"2001","subtype":"Figure","type":"Plot"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"2037","type":"StaticLayoutProvider"},{"attributes":{},"id":"2059","type":"EdgesAndLinkedNodes"},{"attributes":{"callback":null},"id":"2024","type":"TapTool"},{"attributes":{},"id":"2015","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"2072","type":"Selection"},"selection_policy":{"id":"2071","type":"UnionRenderers"}},"id":"2035","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Edge Hover","text_font_size":{"value":"24pt"}},"id":"2000","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2001","subtype":"Figure","type":"Plot"},"ticker":{"id":"2015","type":"BasicTicker"}},"id":"2018","type":"Grid"},{"attributes":{},"id":"2074","type":"Selection"},{"attributes":{"callback":null,"data":{"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"end_values":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]},"start_values":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"2074","type":"Selection"},"selection_policy":{"id":"2073","type":"UnionRenderers"}},"id":"2036","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2001","subtype":"Figure","type":"Plot"},"ticker":{"id":"2010","type":"BasicTicker"}},"id":"2013","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2029","type":"BoxAnnotation"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2063","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2001","subtype":"Figure","type":"Plot"},"ticker":{"id":"2015","type":"BasicTicker"},"visible":false},"id":"2014","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":15}},"id":"2038","type":"Circle"},{"attributes":{},"id":"2010","type":"BasicTicker"},{"attributes":{},"id":"2071","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"1997","type":"Range1d"},{"attributes":{"callback":null,"renderers":[{"id":"2048","type":"GraphRenderer"}],"tooltips":[["start","@{start_values}"],["end","@{end_values}"]]},"id":"1999","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"2039","type":"Circle"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"2040","type":"Circle"},{"attributes":{},"id":"2007","type":"LinearScale"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2061","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2001","subtype":"Figure","type":"Plot"},"ticker":{"id":"2010","type":"BasicTicker"},"visible":false},"id":"2009","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2035","type":"ColumnDataSource"},"glyph":{"id":"2038","type":"Circle"},"hover_glyph":{"id":"2040","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"2039","type":"Circle"},"selection_glyph":null,"view":{"id":"2042","type":"CDSView"}},"id":"2041","type":"GlyphRenderer"},{"attributes":{},"id":"2005","type":"LinearScale"},{"attributes":{"source":{"id":"2035","type":"ColumnDataSource"}},"id":"2042","type":"CDSView"},{"attributes":{},"id":"2023","type":"ResetTool"},{"attributes":{"line_width":{"value":2}},"id":"2043","type":"MultiLine"},{"attributes":{},"id":"2021","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"2029","type":"BoxAnnotation"}},"id":"2022","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"2044","type":"MultiLine"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"1998","type":"Range1d"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"2045","type":"MultiLine"},{"attributes":{"data_source":{"id":"2036","type":"ColumnDataSource"},"glyph":{"id":"2043","type":"MultiLine"},"hover_glyph":{"id":"2045","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"2044","type":"MultiLine"},"selection_glyph":null,"view":{"id":"2047","type":"CDSView"}},"id":"2046","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2036","type":"ColumnDataSource"}},"id":"2047","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"2046","type":"GlyphRenderer"},"inspection_policy":{"id":"2059","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"2037","type":"StaticLayoutProvider"},"node_renderer":{"id":"2041","type":"GlyphRenderer"},"selection_policy":{"id":"2057","type":"NodesAndLinkedEdges"}},"id":"2048","type":"GraphRenderer"},{"attributes":{},"id":"2020","type":"PanTool"},{"attributes":{},"id":"2073","type":"UnionRenderers"},{"attributes":{},"id":"2057","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"2072","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1999","type":"HoverTool"},{"id":"2019","type":"SaveTool"},{"id":"2020","type":"PanTool"},{"id":"2021","type":"WheelZoomTool"},{"id":"2022","type":"BoxZoomTool"},{"id":"2023","type":"ResetTool"},{"id":"2024","type":"TapTool"}]},"id":"2025","type":"Toolbar"}],"root_ids":["2001"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a6b747cf-3579-48cc-aa24-42b40fd89cf3","roots":{"2001":"a991c8b1-f3bc-44bc-9c44-6978668c0c12"}}];
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