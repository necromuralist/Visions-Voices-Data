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
      };var element = document.getElementById("932eaf79-bf57-4bab-86b6-0393965859dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '932eaf79-bf57-4bab-86b6-0393965859dd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a9042f6c-7660-4ee9-a171-624b0da7da2e":{"roots":{"references":[{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"22934","type":"Range1d"},{"attributes":{},"id":"23014","type":"Selection"},{"attributes":{},"id":"23003","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"22933","type":"Range1d"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22969","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22976","type":"Circle"},{"attributes":{},"id":"23001","type":"BasicTickFormatter"},{"attributes":{},"id":"23013","type":"UnionRenderers"},{"attributes":{},"id":"22951","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"22977","type":"Circle"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22969","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"22974","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"22937","subtype":"Figure","type":"Plot"},"ticker":{"id":"22946","type":"BasicTicker"}},"id":"22949","type":"Grid"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"22937","subtype":"Figure","type":"Plot"},"ticker":{"id":"22951","type":"BasicTicker"}},"id":"22954","type":"Grid"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22969","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22978","type":"Circle"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22971","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22983","type":"MultiLine"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22971","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22985","type":"MultiLine"},{"attributes":{"edge_renderer":{"id":"22986","type":"GlyphRenderer"},"inspection_policy":{"id":"22999","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"22973","type":"StaticLayoutProvider"},"node_renderer":{"id":"22979","type":"GlyphRenderer"},"selection_policy":{"id":"22997","type":"NodesAndLinkedEdges"}},"id":"22988","type":"GraphRenderer"},{"attributes":{},"id":"23011","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22935","type":"HoverTool"},{"id":"22955","type":"SaveTool"},{"id":"22956","type":"PanTool"},{"id":"22957","type":"WheelZoomTool"},{"id":"22958","type":"BoxZoomTool"},{"id":"22959","type":"ResetTool"}]},"id":"22960","type":"Toolbar"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"23003","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22937","subtype":"Figure","type":"Plot"},"ticker":{"id":"22951","type":"BasicTicker"},"visible":false},"id":"22950","type":"LinearAxis"},{"attributes":{"data_source":{"id":"22970","type":"ColumnDataSource"},"glyph":{"id":"22974","type":"Circle"},"hover_glyph":{"id":"22977","type":"Circle"},"muted_glyph":{"id":"22978","type":"Circle"},"nonselection_glyph":{"id":"22975","type":"Circle"},"selection_glyph":{"id":"22976","type":"Circle"},"view":{"id":"22980","type":"CDSView"}},"id":"22979","type":"GlyphRenderer"},{"attributes":{},"id":"22955","type":"SaveTool"},{"attributes":{"high":0.8325178386060007,"low":0.14599673756510556,"palette":["#0c0786","#100787","#130689","#15068a","#18068b","#1b068c","#1d068d","#1f058e","#21058f","#230590","#250591","#270592","#290593","#2b0594","#2d0494","#2f0495","#310496","#330497","#340498","#360498","#380499","#3a049a","#3b039a","#3d039b","#3f039c","#40039c","#42039d","#44039e","#45039e","#47029f","#49029f","#4a02a0","#4c02a1","#4e02a1","#4f02a2","#5101a2","#5201a3","#5401a3","#5601a3","#5701a4","#5901a4","#5a00a5","#5c00a5","#5e00a5","#5f00a6","#6100a6","#6200a6","#6400a7","#6500a7","#6700a7","#6800a7","#6a00a7","#6c00a8","#6d00a8","#6f00a8","#7000a8","#7200a8","#7300a8","#7500a8","#7601a8","#7801a8","#7901a8","#7b02a8","#7c02a7","#7e03a7","#7f03a7","#8104a7","#8204a7","#8405a6","#8506a6","#8607a6","#8807a5","#8908a5","#8b09a4","#8c0aa4","#8e0ca4","#8f0da3","#900ea3","#920fa2","#9310a1","#9511a1","#9612a0","#9713a0","#99149f","#9a159e","#9b179e","#9d189d","#9e199c","#9f1a9b","#a01b9b","#a21c9a","#a31d99","#a41e98","#a51f97","#a72197","#a82296","#a92395","#aa2494","#ac2593","#ad2692","#ae2791","#af2890","#b02a8f","#b12b8f","#b22c8e","#b42d8d","#b52e8c","#b62f8b","#b7308a","#b83289","#b93388","#ba3487","#bb3586","#bc3685","#bd3784","#be3883","#bf3982","#c03b81","#c13c80","#c23d80","#c33e7f","#c43f7e","#c5407d","#c6417c","#c7427b","#c8447a","#c94579","#ca4678","#cb4777","#cc4876","#cd4975","#ce4a75","#cf4b74","#d04d73","#d14e72","#d14f71","#d25070","#d3516f","#d4526e","#d5536d","#d6556d","#d7566c","#d7576b","#d8586a","#d95969","#da5a68","#db5b67","#dc5d66","#dc5e66","#dd5f65","#de6064","#df6163","#df6262","#e06461","#e16560","#e26660","#e3675f","#e3685e","#e46a5d","#e56b5c","#e56c5b","#e66d5a","#e76e5a","#e87059","#e87158","#e97257","#ea7356","#ea7455","#eb7654","#ec7754","#ec7853","#ed7952","#ed7b51","#ee7c50","#ef7d4f","#ef7e4e","#f0804d","#f0814d","#f1824c","#f2844b","#f2854a","#f38649","#f38748","#f48947","#f48a47","#f58b46","#f58d45","#f68e44","#f68f43","#f69142","#f79241","#f79341","#f89540","#f8963f","#f8983e","#f9993d","#f99a3c","#fa9c3b","#fa9d3a","#fa9f3a","#faa039","#fba238","#fba337","#fba436","#fca635","#fca735","#fca934","#fcaa33","#fcac32","#fcad31","#fdaf31","#fdb030","#fdb22f","#fdb32e","#fdb52d","#fdb62d","#fdb82c","#fdb92b","#fdbb2b","#fdbc2a","#fdbe29","#fdc029","#fdc128","#fdc328","#fdc427","#fdc626","#fcc726","#fcc926","#fccb25","#fccc25","#fcce25","#fbd024","#fbd124","#fbd324","#fad524","#fad624","#fad824","#f9d924","#f9db24","#f8dd24","#f8df24","#f7e024","#f7e225","#f6e425","#f6e525","#f5e726","#f5e926","#f4ea26","#f3ec26","#f3ee26","#f2f026","#f2f126","#f1f326","#f0f525","#f0f623","#eff821"]},"id":"22971","type":"LinearColorMapper"},{"attributes":{},"id":"22946","type":"BasicTicker"},{"attributes":{"source":{"id":"22970","type":"ColumnDataSource"}},"id":"22980","type":"CDSView"},{"attributes":{},"id":"22956","type":"PanTool"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22971","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22981","type":"MultiLine"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"22973","type":"StaticLayoutProvider"},{"attributes":{"data_source":{"id":"22972","type":"ColumnDataSource"},"glyph":{"id":"22981","type":"MultiLine"},"hover_glyph":{"id":"22984","type":"MultiLine"},"muted_glyph":{"id":"22985","type":"MultiLine"},"nonselection_glyph":{"id":"22982","type":"MultiLine"},"selection_glyph":{"id":"22983","type":"MultiLine"},"view":{"id":"22987","type":"CDSView"}},"id":"22986","type":"GlyphRenderer"},{"attributes":{},"id":"22957","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"field":"edge_color","transform":{"id":"22971","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22982","type":"MultiLine"},{"attributes":{},"id":"22999","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"22997","type":"NodesAndLinkedEdges"},{"attributes":{"overlay":{"id":"22964","type":"BoxAnnotation"}},"id":"22958","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"edge_color":{"__ndarray__":"jiDqLW2b2j+S4m+3U1jQP2JIaF2lZeI/t8dEc/yj6j/Ki50TSXTZPyA0cuDlxeU/nbN1DJ+s5z/sGJVmBbDCP+d+0vOkeeM/oHfBUtkP3D8=","dtype":"float64","shape":[10]},"edge_line_width":{"__ndarray__":"WVSyPCShEEA220ulaG4EQHpawrQO/xZA0vwKyH2mIEC87oRYW9EPQCjBjlhfNxtAhCCTz8aXHUAnXzrABlz3P6EexzAOWBhAxOq40+eJEUA=","dtype":"float64","shape":[10]},"end":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"start":{"__ndarray__":"BQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAA==","dtype":"int32","shape":[10]}},"selected":{"id":"23014","type":"Selection"},"selection_policy":{"id":"23013","type":"UnionRenderers"}},"id":"22972","type":"ColumnDataSource"},{"attributes":{},"id":"22943","type":"LinearScale"},{"attributes":{},"id":"23012","type":"Selection"},{"attributes":{},"id":"22959","type":"ResetTool"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"field":"edge_line_width"}},"id":"22984","type":"MultiLine"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"23001","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22937","subtype":"Figure","type":"Plot"},"ticker":{"id":"22946","type":"BasicTicker"},"visible":false},"id":"22945","type":"LinearAxis"},{"attributes":{},"id":"22941","type":"LinearScale"},{"attributes":{"source":{"id":"22972","type":"ColumnDataSource"}},"id":"22987","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22964","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Nodes From a Dataset","text_font_size":{"value":"24pt"}},"id":"22936","type":"Title"},{"attributes":{"callback":null,"data":{"Name":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"index_hover":["0","1","2","3","4","5","6","7","8","9"],"node_color":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"]},"selected":{"id":"23012","type":"Selection"},"selection_policy":{"id":"23011","type":"UnionRenderers"}},"id":"22970","type":"ColumnDataSource"},{"attributes":{"factors":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"palette":["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999","#e41a1c"]},"id":"22969","type":"CategoricalColorMapper"},{"attributes":{"below":[{"id":"22945","type":"LinearAxis"}],"left":[{"id":"22950","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"22945","type":"LinearAxis"},{"id":"22949","type":"Grid"},{"id":"22950","type":"LinearAxis"},{"id":"22954","type":"Grid"},{"id":"22964","type":"BoxAnnotation"},{"id":"22988","type":"GraphRenderer"}],"title":{"id":"22936","type":"Title"},"toolbar":{"id":"22960","type":"Toolbar"},"x_range":{"id":"22933","type":"Range1d"},"x_scale":{"id":"22941","type":"LinearScale"},"y_range":{"id":"22934","type":"Range1d"},"y_scale":{"id":"22943","type":"LinearScale"}},"id":"22937","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":[{"id":"22988","type":"GraphRenderer"}],"tooltips":[["Name","@Name"]]},"id":"22935","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"22969","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"22975","type":"Circle"}],"root_ids":["22937"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a9042f6c-7660-4ee9-a171-624b0da7da2e","roots":{"22937":"932eaf79-bf57-4bab-86b6-0393965859dd"}}];
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