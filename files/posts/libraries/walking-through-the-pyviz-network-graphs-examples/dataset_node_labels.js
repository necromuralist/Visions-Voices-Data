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
      };var element = document.getElementById("5aba0f29-e1a4-4420-938a-770a2c068059");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5aba0f29-e1a4-4420-938a-770a2c068059' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a89620b0-ce73-43a8-839e-6d4001adc334":{"roots":{"references":[{"attributes":{"high":0.874320208106132,"low":0.009559888734352873,"palette":["#0c0786","#100787","#130689","#15068a","#18068b","#1b068c","#1d068d","#1f058e","#21058f","#230590","#250591","#270592","#290593","#2b0594","#2d0494","#2f0495","#310496","#330497","#340498","#360498","#380499","#3a049a","#3b039a","#3d039b","#3f039c","#40039c","#42039d","#44039e","#45039e","#47029f","#49029f","#4a02a0","#4c02a1","#4e02a1","#4f02a2","#5101a2","#5201a3","#5401a3","#5601a3","#5701a4","#5901a4","#5a00a5","#5c00a5","#5e00a5","#5f00a6","#6100a6","#6200a6","#6400a7","#6500a7","#6700a7","#6800a7","#6a00a7","#6c00a8","#6d00a8","#6f00a8","#7000a8","#7200a8","#7300a8","#7500a8","#7601a8","#7801a8","#7901a8","#7b02a8","#7c02a7","#7e03a7","#7f03a7","#8104a7","#8204a7","#8405a6","#8506a6","#8607a6","#8807a5","#8908a5","#8b09a4","#8c0aa4","#8e0ca4","#8f0da3","#900ea3","#920fa2","#9310a1","#9511a1","#9612a0","#9713a0","#99149f","#9a159e","#9b179e","#9d189d","#9e199c","#9f1a9b","#a01b9b","#a21c9a","#a31d99","#a41e98","#a51f97","#a72197","#a82296","#a92395","#aa2494","#ac2593","#ad2692","#ae2791","#af2890","#b02a8f","#b12b8f","#b22c8e","#b42d8d","#b52e8c","#b62f8b","#b7308a","#b83289","#b93388","#ba3487","#bb3586","#bc3685","#bd3784","#be3883","#bf3982","#c03b81","#c13c80","#c23d80","#c33e7f","#c43f7e","#c5407d","#c6417c","#c7427b","#c8447a","#c94579","#ca4678","#cb4777","#cc4876","#cd4975","#ce4a75","#cf4b74","#d04d73","#d14e72","#d14f71","#d25070","#d3516f","#d4526e","#d5536d","#d6556d","#d7566c","#d7576b","#d8586a","#d95969","#da5a68","#db5b67","#dc5d66","#dc5e66","#dd5f65","#de6064","#df6163","#df6262","#e06461","#e16560","#e26660","#e3675f","#e3685e","#e46a5d","#e56b5c","#e56c5b","#e66d5a","#e76e5a","#e87059","#e87158","#e97257","#ea7356","#ea7455","#eb7654","#ec7754","#ec7853","#ed7952","#ed7b51","#ee7c50","#ef7d4f","#ef7e4e","#f0804d","#f0814d","#f1824c","#f2844b","#f2854a","#f38649","#f38748","#f48947","#f48a47","#f58b46","#f58d45","#f68e44","#f68f43","#f69142","#f79241","#f79341","#f89540","#f8963f","#f8983e","#f9993d","#f99a3c","#fa9c3b","#fa9d3a","#fa9f3a","#faa039","#fba238","#fba337","#fba436","#fca635","#fca735","#fca934","#fcaa33","#fcac32","#fcad31","#fdaf31","#fdb030","#fdb22f","#fdb32e","#fdb52d","#fdb62d","#fdb82c","#fdb92b","#fdbb2b","#fdbc2a","#fdbe29","#fdc029","#fdc128","#fdc328","#fdc427","#fdc626","#fcc726","#fcc926","#fccb25","#fccc25","#fcce25","#fbd024","#fbd124","#fbd324","#fad524","#fad624","#fad824","#f9d924","#f9db24","#f8dd24","#f8df24","#f7e024","#f7e225","#f6e425","#f6e525","#f5e726","#f5e926","#f4ea26","#f3ec26","#f3ee26","#f2f026","#f2f126","#f1f326","#f0f525","#f0f623","#eff821"]},"id":"2798","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"2760","type":"Range1d"},{"attributes":{"callback":null,"renderers":[{"id":"2815","type":"GraphRenderer"}],"tooltips":[["Name","@Name"]]},"id":"2762","type":"HoverTool"},{"attributes":{"overlay":{"id":"2791","type":"BoxAnnotation"}},"id":"2785","type":"BoxZoomTool"},{"attributes":{"factors":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"palette":["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999","#e41a1c"]},"id":"2796","type":"CategoricalColorMapper"},{"attributes":{},"id":"2786","type":"ResetTool"},{"attributes":{"below":[{"id":"2772","type":"LinearAxis"}],"left":[{"id":"2777","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"2772","type":"LinearAxis"},{"id":"2776","type":"Grid"},{"id":"2777","type":"LinearAxis"},{"id":"2781","type":"Grid"},{"id":"2791","type":"BoxAnnotation"},{"id":"2815","type":"GraphRenderer"}],"title":{"id":"2763","type":"Title"},"toolbar":{"id":"2787","type":"Toolbar"},"x_range":{"id":"2760","type":"Range1d"},"x_scale":{"id":"2768","type":"LinearScale"},"y_range":{"id":"2761","type":"Range1d"},"y_scale":{"id":"2770","type":"LinearScale"}},"id":"2764","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"2761","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2762","type":"HoverTool"},{"id":"2782","type":"SaveTool"},{"id":"2783","type":"PanTool"},{"id":"2784","type":"WheelZoomTool"},{"id":"2785","type":"BoxZoomTool"},{"id":"2786","type":"ResetTool"}]},"id":"2787","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2791","type":"BoxAnnotation"},{"attributes":{},"id":"2826","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"2830","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2796","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2805","type":"Circle"},{"attributes":{"source":{"id":"2797","type":"ColumnDataSource"}},"id":"2807","type":"CDSView"},{"attributes":{},"id":"2828","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2796","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"2803","type":"Circle"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"2800","type":"StaticLayoutProvider"},{"attributes":{},"id":"2768","type":"LinearScale"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"2804","type":"Circle"},{"attributes":{"source":{"id":"2799","type":"ColumnDataSource"}},"id":"2814","type":"CDSView"},{"attributes":{},"id":"2770","type":"LinearScale"},{"attributes":{"plot":null,"text":"Nodes From a Dataset","text_font_size":{"value":"24pt"}},"id":"2763","type":"Title"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2828","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2764","subtype":"Figure","type":"Plot"},"ticker":{"id":"2773","type":"BasicTicker"},"visible":false},"id":"2772","type":"LinearAxis"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"2798","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"2810","type":"MultiLine"},{"attributes":{"data_source":{"id":"2797","type":"ColumnDataSource"},"glyph":{"id":"2801","type":"Circle"},"hover_glyph":{"id":"2804","type":"Circle"},"muted_glyph":{"id":"2805","type":"Circle"},"nonselection_glyph":{"id":"2802","type":"Circle"},"selection_glyph":{"id":"2803","type":"Circle"},"view":{"id":"2807","type":"CDSView"}},"id":"2806","type":"GlyphRenderer"},{"attributes":{},"id":"2773","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"field":"edge_color","transform":{"id":"2798","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"2809","type":"MultiLine"},{"attributes":{},"id":"2840","type":"UnionRenderers"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"2798","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"2812","type":"MultiLine"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2764","subtype":"Figure","type":"Plot"},"ticker":{"id":"2773","type":"BasicTicker"}},"id":"2776","type":"Grid"},{"attributes":{},"id":"2782","type":"SaveTool"},{"attributes":{},"id":"2841","type":"Selection"},{"attributes":{},"id":"2783","type":"PanTool"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"field":"edge_line_width"}},"id":"2811","type":"MultiLine"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2764","subtype":"Figure","type":"Plot"},"ticker":{"id":"2778","type":"BasicTicker"}},"id":"2781","type":"Grid"},{"attributes":{"data_source":{"id":"2799","type":"ColumnDataSource"},"glyph":{"id":"2808","type":"MultiLine"},"hover_glyph":{"id":"2811","type":"MultiLine"},"muted_glyph":{"id":"2812","type":"MultiLine"},"nonselection_glyph":{"id":"2809","type":"MultiLine"},"selection_glyph":{"id":"2810","type":"MultiLine"},"view":{"id":"2814","type":"CDSView"}},"id":"2813","type":"GlyphRenderer"},{"attributes":{},"id":"2784","type":"WheelZoomTool"},{"attributes":{},"id":"2778","type":"BasicTicker"},{"attributes":{},"id":"2839","type":"Selection"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"2830","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2764","subtype":"Figure","type":"Plot"},"ticker":{"id":"2778","type":"BasicTicker"},"visible":false},"id":"2777","type":"LinearAxis"},{"attributes":{},"id":"2838","type":"UnionRenderers"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"2798","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"2808","type":"MultiLine"},{"attributes":{"callback":null,"data":{"edge_color":{"__ndarray__":"0KmR06wQtD+l6H1M8mrjP5bgLCqKCdk/YEZUkEDMyz8th4FfbvrrP4BTvYsilIM/HAk15pzy6D9WmGZVQLfjPz5mGgteJeY/zl4qbpGx0D8=","dtype":"float64","shape":[10]},"edge_line_width":{"__ndarray__":"RBR2CNgU6T/OYp3frkUYQLwYuLTsSw9A/Ks0WqhfAUB89LD7hHwhQGCorC4rebg/Y0vCH0QvH0BsPsBqEKUYQM7/4I21rhtAgva0yfXdBEA=","dtype":"float64","shape":[10]},"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"2841","type":"Selection"},"selection_policy":{"id":"2840","type":"UnionRenderers"}},"id":"2799","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"2796","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"2802","type":"Circle"},{"attributes":{},"id":"2824","type":"NodesAndLinkedEdges"},{"attributes":{"edge_renderer":{"id":"2813","type":"GlyphRenderer"},"inspection_policy":{"id":"2826","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"2800","type":"StaticLayoutProvider"},"node_renderer":{"id":"2806","type":"GlyphRenderer"},"selection_policy":{"id":"2824","type":"NodesAndLinkedEdges"}},"id":"2815","type":"GraphRenderer"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"2796","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"2801","type":"Circle"},{"attributes":{"callback":null,"data":{"Name":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"index_hover":["0","1","2","3","4","5","6","7","8","9"],"node_color":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"]},"selected":{"id":"2839","type":"Selection"},"selection_policy":{"id":"2838","type":"UnionRenderers"}},"id":"2797","type":"ColumnDataSource"}],"root_ids":["2764"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a89620b0-ce73-43a8-839e-6d4001adc334","roots":{"2764":"5aba0f29-e1a4-4420-938a-770a2c068059"}}];
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