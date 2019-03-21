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
      };var element = document.getElementById("3361358b-ea20-4e69-9baf-ff4f67c47703");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3361358b-ea20-4e69-9baf-ff4f67c47703' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d98ea4b4-8437-4f48-bc0f-83a200597810":{"roots":{"references":[{"attributes":{},"id":"22413","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22413","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22350","subtype":"Figure","type":"Plot"},"ticker":{"id":"22364","type":"BasicTicker"},"visible":false},"id":"22363","type":"LinearAxis"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"22346","type":"Range1d"},{"attributes":{},"id":"22356","type":"LinearScale"},{"attributes":{},"id":"22364","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"22424","type":"Selection"},"selection_policy":{"id":"22423","type":"UnionRenderers"}},"id":"22384","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Labeled Nodes","text_font_size":{"value":"24pt"}},"id":"22349","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"22350","subtype":"Figure","type":"Plot"},"ticker":{"id":"22364","type":"BasicTicker"}},"id":"22367","type":"Grid"},{"attributes":{},"id":"22423","type":"UnionRenderers"},{"attributes":{},"id":"22424","type":"Selection"},{"attributes":{},"id":"22359","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22348","type":"HoverTool"},{"id":"22368","type":"SaveTool"},{"id":"22369","type":"PanTool"},{"id":"22370","type":"WheelZoomTool"},{"id":"22371","type":"BoxZoomTool"},{"id":"22372","type":"ResetTool"}]},"id":"22373","type":"Toolbar"},{"attributes":{},"id":"22354","type":"LinearScale"},{"attributes":{},"id":"22368","type":"SaveTool"},{"attributes":{},"id":"22422","type":"Selection"},{"attributes":{},"id":"22369","type":"PanTool"},{"attributes":{"data_source":{"id":"22384","type":"ColumnDataSource"},"glyph":{"id":"22393","type":"MultiLine"},"hover_glyph":{"id":"22395","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"22394","type":"MultiLine"},"selection_glyph":null,"view":{"id":"22397","type":"CDSView"}},"id":"22396","type":"GlyphRenderer"},{"attributes":{},"id":"22370","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"22394","type":"MultiLine"},{"attributes":{"overlay":{"id":"22377","type":"BoxAnnotation"}},"id":"22371","type":"BoxZoomTool"},{"attributes":{"source":{"id":"22384","type":"ColumnDataSource"}},"id":"22397","type":"CDSView"},{"attributes":{},"id":"22421","type":"UnionRenderers"},{"attributes":{},"id":"22372","type":"ResetTool"},{"attributes":{"data_source":{"id":"22383","type":"ColumnDataSource"},"glyph":{"id":"22386","type":"Circle"},"hover_glyph":{"id":"22389","type":"Circle"},"muted_glyph":{"id":"22390","type":"Circle"},"nonselection_glyph":{"id":"22387","type":"Circle"},"selection_glyph":{"id":"22388","type":"Circle"},"view":{"id":"22392","type":"CDSView"}},"id":"22391","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"22382","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"22387","type":"Circle"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"22395","type":"MultiLine"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22382","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22390","type":"Circle"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22382","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22388","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22377","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"22389","type":"Circle"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22411","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22350","subtype":"Figure","type":"Plot"},"ticker":{"id":"22359","type":"BasicTicker"},"visible":false},"id":"22358","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"22350","subtype":"Figure","type":"Plot"},"ticker":{"id":"22359","type":"BasicTicker"}},"id":"22362","type":"Grid"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"22347","type":"Range1d"},{"attributes":{"factors":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"palette":["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999","#e41a1c"]},"id":"22382","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"renderers":[{"id":"22398","type":"GraphRenderer"}],"tooltips":[["Name","@Name"]]},"id":"22348","type":"HoverTool"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"22385","type":"StaticLayoutProvider"},{"attributes":{"line_width":{"value":2}},"id":"22393","type":"MultiLine"},{"attributes":{"below":[{"id":"22358","type":"LinearAxis"}],"left":[{"id":"22363","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"22358","type":"LinearAxis"},{"id":"22362","type":"Grid"},{"id":"22363","type":"LinearAxis"},{"id":"22367","type":"Grid"},{"id":"22377","type":"BoxAnnotation"},{"id":"22398","type":"GraphRenderer"}],"title":{"id":"22349","type":"Title"},"toolbar":{"id":"22373","type":"Toolbar"},"x_range":{"id":"22346","type":"Range1d"},"x_scale":{"id":"22354","type":"LinearScale"},"y_range":{"id":"22347","type":"Range1d"},"y_scale":{"id":"22356","type":"LinearScale"}},"id":"22350","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22407","type":"NodesAndLinkedEdges"},{"attributes":{"edge_renderer":{"id":"22396","type":"GlyphRenderer"},"inspection_policy":{"id":"22409","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"22385","type":"StaticLayoutProvider"},"node_renderer":{"id":"22391","type":"GlyphRenderer"},"selection_policy":{"id":"22407","type":"NodesAndLinkedEdges"}},"id":"22398","type":"GraphRenderer"},{"attributes":{"source":{"id":"22383","type":"ColumnDataSource"}},"id":"22392","type":"CDSView"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22382","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"22386","type":"Circle"},{"attributes":{"callback":null,"data":{"Name":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"index_hover":["0","1","2","3","4","5","6","7","8","9"],"node_color":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"]},"selected":{"id":"22422","type":"Selection"},"selection_policy":{"id":"22421","type":"UnionRenderers"}},"id":"22383","type":"ColumnDataSource"},{"attributes":{},"id":"22409","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"22411","type":"BasicTickFormatter"}],"root_ids":["22350"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d98ea4b4-8437-4f48-bc0f-83a200597810","roots":{"22350":"3361358b-ea20-4e69-9baf-ff4f67c47703"}}];
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