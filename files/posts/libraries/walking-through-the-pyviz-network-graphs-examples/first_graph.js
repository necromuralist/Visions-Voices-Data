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
      };var element = document.getElementById("2b9cdb9c-fb7d-4852-afb8-ff2d79cddff1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b9cdb9c-fb7d-4852-afb8-ff2d79cddff1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4ce1524e-4c34-4889-be13-8d775396329c":{"roots":{"references":[{"attributes":{},"id":"1077","type":"LinearScale"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1135","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1073","subtype":"Figure","type":"Plot"},"ticker":{"id":"1087","type":"BasicTicker"},"visible":false},"id":"1086","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1073","subtype":"Figure","type":"Plot"},"ticker":{"id":"1087","type":"BasicTicker"}},"id":"1090","type":"Grid"},{"attributes":{},"id":"1093","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"1117","type":"MultiLine"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1073","subtype":"Figure","type":"Plot"},"ticker":{"id":"1082","type":"BasicTicker"}},"id":"1085","type":"Grid"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"1116","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1101","type":"BoxAnnotation"},{"attributes":{},"id":"1087","type":"BasicTicker"},{"attributes":{},"id":"1092","type":"PanTool"},{"attributes":{},"id":"1082","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"1070","type":"Range1d"},{"attributes":{},"id":"1143","type":"UnionRenderers"},{"attributes":{},"id":"1131","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"1091","type":"SaveTool"},{"attributes":{"callback":null},"id":"1096","type":"TapTool"},{"attributes":{"overlay":{"id":"1101","type":"BoxAnnotation"}},"id":"1094","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":15}},"id":"1110","type":"Circle"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"1069","type":"Range1d"},{"attributes":{"edge_renderer":{"id":"1118","type":"GlyphRenderer"},"inspection_policy":{"id":"1131","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"1109","type":"StaticLayoutProvider"},"node_renderer":{"id":"1113","type":"GlyphRenderer"},"selection_policy":{"id":"1129","type":"NodesAndLinkedEdges"}},"id":"1120","type":"GraphRenderer"},{"attributes":{},"id":"1133","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"1111","type":"Circle"},{"attributes":{"line_width":{"value":2}},"id":"1115","type":"MultiLine"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"1112","type":"Circle"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"1109","type":"StaticLayoutProvider"},{"attributes":{"plot":null,"text":"We&#x27;re All Connected to Five","text_font_size":{"value":"24pt"}},"id":"1072","type":"Title"},{"attributes":{},"id":"1145","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1107","type":"ColumnDataSource"},"glyph":{"id":"1110","type":"Circle"},"hover_glyph":{"id":"1112","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"1111","type":"Circle"},"selection_glyph":null,"view":{"id":"1114","type":"CDSView"}},"id":"1113","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"1120","type":"GraphRenderer"}],"tooltips":[["index","@{index_hover}"]]},"id":"1071","type":"HoverTool"},{"attributes":{},"id":"1095","type":"ResetTool"},{"attributes":{},"id":"1135","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1081","type":"LinearAxis"}],"left":[{"id":"1086","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"1081","type":"LinearAxis"},{"id":"1085","type":"Grid"},{"id":"1086","type":"LinearAxis"},{"id":"1090","type":"Grid"},{"id":"1101","type":"BoxAnnotation"},{"id":"1120","type":"GraphRenderer"}],"title":{"id":"1072","type":"Title"},"toolbar":{"id":"1097","type":"Toolbar"},"x_range":{"id":"1069","type":"Range1d"},"x_scale":{"id":"1077","type":"LinearScale"},"y_range":{"id":"1070","type":"Range1d"},"y_scale":{"id":"1079","type":"LinearScale"}},"id":"1073","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"1146","type":"Selection"},"selection_policy":{"id":"1145","type":"UnionRenderers"}},"id":"1108","type":"ColumnDataSource"},{"attributes":{},"id":"1146","type":"Selection"},{"attributes":{"source":{"id":"1107","type":"ColumnDataSource"}},"id":"1114","type":"CDSView"},{"attributes":{},"id":"1129","type":"NodesAndLinkedEdges"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1133","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1073","subtype":"Figure","type":"Plot"},"ticker":{"id":"1082","type":"BasicTicker"},"visible":false},"id":"1081","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"index_hover":["0","1","2","3","4","5","6","7","8","9"]},"selected":{"id":"1144","type":"Selection"},"selection_policy":{"id":"1143","type":"UnionRenderers"}},"id":"1107","type":"ColumnDataSource"},{"attributes":{},"id":"1144","type":"Selection"},{"attributes":{"data_source":{"id":"1108","type":"ColumnDataSource"},"glyph":{"id":"1115","type":"MultiLine"},"hover_glyph":{"id":"1117","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"1116","type":"MultiLine"},"selection_glyph":null,"view":{"id":"1119","type":"CDSView"}},"id":"1118","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1071","type":"HoverTool"},{"id":"1091","type":"SaveTool"},{"id":"1092","type":"PanTool"},{"id":"1093","type":"WheelZoomTool"},{"id":"1094","type":"BoxZoomTool"},{"id":"1095","type":"ResetTool"},{"id":"1096","type":"TapTool"}]},"id":"1097","type":"Toolbar"},{"attributes":{"source":{"id":"1108","type":"ColumnDataSource"}},"id":"1119","type":"CDSView"},{"attributes":{},"id":"1079","type":"LinearScale"}],"root_ids":["1073"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"4ce1524e-4c34-4889-be13-8d775396329c","roots":{"1073":"2b9cdb9c-fb7d-4852-afb8-ff2d79cddff1"}}];
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