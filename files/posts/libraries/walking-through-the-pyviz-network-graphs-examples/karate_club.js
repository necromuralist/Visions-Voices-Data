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
      };var element = document.getElementById("e5a4d0ac-cd15-41f4-b284-b3af3a0f467c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5a4d0ac-cd15-41f4-b284-b3af3a0f467c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1381a671-f61e-462a-a1d4-19aeeddb1407":{"roots":{"references":[{"attributes":{},"id":"3031","type":"Selection"},{"attributes":{},"id":"3032","type":"UnionRenderers"},{"attributes":{},"id":"2977","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAAFQAAABYAAAAXAAAAGAAAABkAAAAaAAAAGwAAABwAAAAdAAAAHgAAAB8AAAAgAAAAIQAAAA==","dtype":"int32","shape":[34]},"index_hover":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"],"node_color":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"]},"selected":{"id":"3031","type":"Selection"},"selection_policy":{"id":"3030","type":"UnionRenderers"}},"id":"2992","type":"ColumnDataSource"},{"attributes":{},"id":"3033","type":"Selection"},{"attributes":{"callback":null,"end":1.1999999998246922,"reset_end":1.1999999998246922,"reset_start":-1.1999999980716145,"start":-1.1999999980716145,"tags":[[["x","x",null]]]},"id":"2953","type":"Range1d"},{"attributes":{},"id":"2975","type":"SaveTool"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"3033","type":"Selection"},"selection_policy":{"id":"3032","type":"UnionRenderers"}},"id":"2993","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1.1948809963276639,"reset_end":1.1948809963276639,"reset_start":-1.194881045530559,"start":-1.194881045530559,"tags":[[["y","y",null]]]},"id":"2954","type":"Range1d"},{"attributes":{"factors":["Mr. Hi","Officer"],"palette":["#e41a1c","#377eb8"]},"id":"2991","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"renderers":[{"id":"3007","type":"GraphRenderer"}],"tooltips":[["index","@{index_hover}"],["club","@{club}"]]},"id":"2955","type":"HoverTool"},{"attributes":{},"id":"2976","type":"PanTool"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2991","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"2995","type":"Circle"},{"attributes":{"below":[{"id":"2965","type":"LinearAxis"}],"left":[{"id":"2970","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"2965","type":"LinearAxis"},{"id":"2969","type":"Grid"},{"id":"2970","type":"LinearAxis"},{"id":"2974","type":"Grid"},{"id":"2985","type":"BoxAnnotation"},{"id":"3007","type":"GraphRenderer"}],"title":{"id":"2956","type":"Title"},"toolbar":{"id":"2981","type":"Toolbar"},"x_range":{"id":"2953","type":"Range1d"},"x_scale":{"id":"2961","type":"LinearScale"},"y_range":{"id":"2954","type":"Range1d"},"y_scale":{"id":"2963","type":"LinearScale"}},"id":"2957","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"2991","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"2996","type":"Circle"},{"attributes":{"plot":null,"text":"NetworkX Karate Club","text_font_size":{"value":"24pt"}},"id":"2956","type":"Title"},{"attributes":{},"id":"3030","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2955","type":"HoverTool"},{"id":"2975","type":"SaveTool"},{"id":"2976","type":"PanTool"},{"id":"2977","type":"WheelZoomTool"},{"id":"2978","type":"BoxZoomTool"},{"id":"2979","type":"ResetTool"},{"id":"2980","type":"TapTool"}]},"id":"2981","type":"Toolbar"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2991","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2997","type":"Circle"},{"attributes":{"graph_layout":{"0":[1.0,5.200874811222461e-09],"1":[0.9829730987698075,0.18374951687777052],"10":[-0.2736629534524478,0.9618256731695953],"11":[-0.4457383143150295,0.8951633020694276],"12":[-0.6026346669454482,0.7980172083092125],"13":[-0.7390088423744644,0.6736956880896635],"14":[-0.8502171619409874,0.5264321613022418],"15":[-0.9324721677053746,0.3612417925562752],"16":[-0.9829730970167299,0.1837495317789317],"17":[-0.9999999982469223,-8.222190168562394e-08],"18":[-0.9829730970167299,-0.18374946177253734],"19":[-0.9324722273100193,-0.36124172254988085],"2":[0.932472229063097,0.36124167334698576],"20":[-0.8502171619409874,-0.5264320912958473],"21":[-0.7390089019791091,-0.6736956776879138],"22":[-0.6026347265500929,-0.7980171383028182],"23":[-0.44573837391967425,-0.895163291667678],"24":[-0.27366289384780307,-0.9618256627678456],"25":[-0.0922681605182429,-0.9957342087090403],"26":[0.09226818462306245,-0.9957342087090403],"27":[0.27366292540320325,-0.9618256627678456],"28":[0.44573837567275204,-0.895163291667678],"29":[0.6026347283031706,-0.7980171383028182],"3":[0.8502171040894204,0.5264321613022418],"30":[0.7390087845228973,-0.6736957968972033],"31":[0.8502170444847756,-0.5264322701097816],"32":[0.932472229063097,-0.36124169274755846],"33":[0.9829730987698075,-0.18374944687137618],"4":[0.7390089037321868,0.6736956284850187],"5":[0.6026346686985259,0.7980172083092125],"6":[0.4457383458704297,0.8951633020694276],"7":[0.27366298500784797,0.9618256731695953],"8":[0.09226837088757722,0.9957341595061452],"9":[-0.09226833188159647,0.9957341595061452]}},"id":"2994","type":"StaticLayoutProvider"},{"attributes":{},"id":"2961","type":"LinearScale"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"3004","type":"MultiLine"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"2998","type":"Circle"},{"attributes":{"edge_renderer":{"id":"3005","type":"GlyphRenderer"},"inspection_policy":{"id":"3018","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"2994","type":"StaticLayoutProvider"},"node_renderer":{"id":"3000","type":"GlyphRenderer"},"selection_policy":{"id":"3016","type":"NodesAndLinkedEdges"}},"id":"3007","type":"GraphRenderer"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2991","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2999","type":"Circle"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"3003","type":"MultiLine"},{"attributes":{"data_source":{"id":"2993","type":"ColumnDataSource"},"glyph":{"id":"3002","type":"MultiLine"},"hover_glyph":{"id":"3004","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"3003","type":"MultiLine"},"selection_glyph":null,"view":{"id":"3006","type":"CDSView"}},"id":"3005","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2992","type":"ColumnDataSource"},"glyph":{"id":"2995","type":"Circle"},"hover_glyph":{"id":"2998","type":"Circle"},"muted_glyph":{"id":"2999","type":"Circle"},"nonselection_glyph":{"id":"2996","type":"Circle"},"selection_glyph":{"id":"2997","type":"Circle"},"view":{"id":"3001","type":"CDSView"}},"id":"3000","type":"GlyphRenderer"},{"attributes":{"axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"3022","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2957","subtype":"Figure","type":"Plot"},"ticker":{"id":"2971","type":"BasicTicker"},"visible":false},"id":"2970","type":"LinearAxis"},{"attributes":{"source":{"id":"2992","type":"ColumnDataSource"}},"id":"3001","type":"CDSView"},{"attributes":{},"id":"2971","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2957","subtype":"Figure","type":"Plot"},"ticker":{"id":"2971","type":"BasicTicker"}},"id":"2974","type":"Grid"},{"attributes":{},"id":"3020","type":"BasicTickFormatter"},{"attributes":{},"id":"3016","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"3018","type":"NodesAndLinkedEdges"},{"attributes":{"line_width":{"value":2}},"id":"3002","type":"MultiLine"},{"attributes":{},"id":"2979","type":"ResetTool"},{"attributes":{"source":{"id":"2993","type":"ColumnDataSource"}},"id":"3006","type":"CDSView"},{"attributes":{"overlay":{"id":"2985","type":"BoxAnnotation"}},"id":"2978","type":"BoxZoomTool"},{"attributes":{},"id":"2966","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2957","subtype":"Figure","type":"Plot"},"ticker":{"id":"2966","type":"BasicTicker"}},"id":"2969","type":"Grid"},{"attributes":{"axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"3020","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2957","subtype":"Figure","type":"Plot"},"ticker":{"id":"2966","type":"BasicTicker"},"visible":false},"id":"2965","type":"LinearAxis"},{"attributes":{},"id":"2963","type":"LinearScale"},{"attributes":{"callback":null},"id":"2980","type":"TapTool"},{"attributes":{},"id":"3022","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2985","type":"BoxAnnotation"}],"root_ids":["2957"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"1381a671-f61e-462a-a1d4-19aeeddb1407","roots":{"2957":"e5a4d0ac-cd15-41f4-b284-b3af3a0f467c"}}];
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