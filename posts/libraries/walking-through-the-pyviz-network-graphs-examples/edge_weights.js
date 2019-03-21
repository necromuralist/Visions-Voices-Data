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
      };var element = document.getElementById("4fb5ca16-c1f6-442d-a6f7-ae25b994f10a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4fb5ca16-c1f6-442d-a6f7-ae25b994f10a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6b9a8df1-8a25-4ff8-b5d6-796db5dcb609":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"22543","subtype":"Figure","type":"Plot"},"ticker":{"id":"22552","type":"BasicTicker"}},"id":"22555","type":"Grid"},{"attributes":{},"id":"22620","type":"Selection"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22611","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22543","subtype":"Figure","type":"Plot"},"ticker":{"id":"22557","type":"BasicTicker"},"visible":false},"id":"22556","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"22585","type":"Circle"},{"attributes":{"callback":null},"id":"22566","type":"TapTool"},{"attributes":{},"id":"22621","type":"UnionRenderers"},{"attributes":{},"id":"22552","type":"BasicTicker"},{"attributes":{},"id":"22622","type":"Selection"},{"attributes":{},"id":"22607","type":"EdgesAndLinkedNodes"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"field":"edge_color","transform":{"id":"22579","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22590","type":"MultiLine"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22579","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22589","type":"MultiLine"},{"attributes":{},"id":"22549","type":"LinearScale"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22577","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22586","type":"Circle"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22609","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22543","subtype":"Figure","type":"Plot"},"ticker":{"id":"22552","type":"BasicTicker"},"visible":false},"id":"22551","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAA==","dtype":"int32","shape":[10]},"node_color":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"]},"selected":{"id":"22620","type":"Selection"},"selection_policy":{"id":"22619","type":"UnionRenderers"}},"id":"22578","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Edge Weights","text_font_size":{"value":"24pt"}},"id":"22542","type":"Title"},{"attributes":{},"id":"22565","type":"ResetTool"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22579","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22591","type":"MultiLine"},{"attributes":{},"id":"22547","type":"LinearScale"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"22540","type":"Range1d"},{"attributes":{},"id":"22563","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"22571","type":"BoxAnnotation"}},"id":"22564","type":"BoxZoomTool"},{"attributes":{},"id":"22611","type":"BasicTickFormatter"},{"attributes":{"edge_renderer":{"id":"22594","type":"GlyphRenderer"},"inspection_policy":{"id":"22607","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"22581","type":"StaticLayoutProvider"},"node_renderer":{"id":"22587","type":"GlyphRenderer"},"selection_policy":{"id":"22605","type":"NodesAndLinkedEdges"}},"id":"22596","type":"GraphRenderer"},{"attributes":{},"id":"22609","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"22578","type":"ColumnDataSource"},"glyph":{"id":"22582","type":"Circle"},"hover_glyph":{"id":"22585","type":"Circle"},"muted_glyph":{"id":"22586","type":"Circle"},"nonselection_glyph":{"id":"22583","type":"Circle"},"selection_glyph":{"id":"22584","type":"Circle"},"view":{"id":"22588","type":"CDSView"}},"id":"22587","type":"GlyphRenderer"},{"attributes":{"high":0.8325178386060007,"low":0.14599673756510556,"palette":["#440154","#440255","#440357","#450558","#45065a","#45085b","#46095c","#460b5e","#460c5f","#460e61","#470f62","#471163","#471265","#471466","#471567","#471669","#47186a","#48196b","#481a6c","#481c6e","#481d6f","#481e70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472a79","#472b7a","#472c7b","#462d7c","#462f7c","#46307d","#46317e","#45327f","#45347f","#453580","#453681","#443781","#443982","#433a83","#433b83","#433c84","#423d84","#423e85","#424085","#414186","#414286","#404387","#404487","#3f4587","#3f4788","#3e4888","#3e4989","#3d4a89","#3d4b89","#3d4c89","#3c4d8a","#3c4e8a","#3b508a","#3b518a","#3a528b","#3a538b","#39548b","#39558b","#38568b","#38578c","#37588c","#37598c","#365a8c","#365b8c","#355c8c","#355d8c","#345e8d","#345f8d","#33608d","#33618d","#32628d","#32638d","#31648d","#31658d","#31668d","#30678d","#30688d","#2f698d","#2f6a8d","#2e6b8e","#2e6c8e","#2e6d8e","#2d6e8e","#2d6f8e","#2c708e","#2c718e","#2c728e","#2b738e","#2b748e","#2a758e","#2a768e","#2a778e","#29788e","#29798e","#287a8e","#287a8e","#287b8e","#277c8e","#277d8e","#277e8e","#267f8e","#26808e","#26818e","#25828e","#25838d","#24848d","#24858d","#24868d","#23878d","#23888d","#23898d","#22898d","#228a8d","#228b8d","#218c8d","#218d8c","#218e8c","#208f8c","#20908c","#20918c","#1f928c","#1f938b","#1f948b","#1f958b","#1f968b","#1e978a","#1e988a","#1e998a","#1e998a","#1e9a89","#1e9b89","#1e9c89","#1e9d88","#1e9e88","#1e9f88","#1ea087","#1fa187","#1fa286","#1fa386","#20a485","#20a585","#21a685","#21a784","#22a784","#23a883","#23a982","#24aa82","#25ab81","#26ac81","#27ad80","#28ae7f","#29af7f","#2ab07e","#2bb17d","#2cb17d","#2eb27c","#2fb37b","#30b47a","#32b57a","#33b679","#35b778","#36b877","#38b976","#39b976","#3bba75","#3dbb74","#3ebc73","#40bd72","#42be71","#44be70","#45bf6f","#47c06e","#49c16d","#4bc26c","#4dc26b","#4fc369","#51c468","#53c567","#55c666","#57c665","#59c764","#5bc862","#5ec961","#60c960","#62ca5f","#64cb5d","#67cc5c","#69cc5b","#6bcd59","#6dce58","#70ce56","#72cf55","#74d054","#77d052","#79d151","#7cd24f","#7ed24e","#81d34c","#83d34b","#86d449","#88d547","#8bd546","#8dd644","#90d643","#92d741","#95d73f","#97d83e","#9ad83c","#9dd93a","#9fd938","#a2da37","#a5da35","#a7db33","#aadb32","#addc30","#afdc2e","#b2dd2c","#b5dd2b","#b7dd29","#bade27","#bdde26","#bfdf24","#c2df22","#c5df21","#c7e01f","#cae01e","#cde01d","#cfe11c","#d2e11b","#d4e11a","#d7e219","#dae218","#dce218","#dfe318","#e1e318","#e4e318","#e7e419","#e9e419","#ece41a","#eee51b","#f1e51c","#f3e51e","#f6e61f","#f8e621","#fae622","#fde724"]},"id":"22579","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"22539","type":"Range1d"},{"attributes":{"factors":["Anne","Barbara","Carol","Donna","Eleanor","Francis","Gloria","Helen","Iris","Janet"],"palette":["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999","#e41a1c"]},"id":"22577","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"renderers":[{"id":"22596","type":"GraphRenderer"}],"tooltips":[["start","@{start_values}"],["end","@{end_values}"],["Weight","@{Weight}"]]},"id":"22541","type":"HoverTool"},{"attributes":{},"id":"22562","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"22577","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"22583","type":"Circle"},{"attributes":{"source":{"id":"22578","type":"ColumnDataSource"}},"id":"22588","type":"CDSView"},{"attributes":{"callback":null,"data":{"Weight":{"__ndarray__":"jiDqLW2b2j+S4m+3U1jQP2JIaF2lZeI/t8dEc/yj6j/Ki50TSXTZPyA0cuDlxeU/nbN1DJ+s5z/sGJVmBbDCP+d+0vOkeeM/oHfBUtkP3D8=","dtype":"float64","shape":[10]},"edge_color":{"__ndarray__":"jiDqLW2b2j+S4m+3U1jQP2JIaF2lZeI/t8dEc/yj6j/Ki50TSXTZPyA0cuDlxeU/nbN1DJ+s5z/sGJVmBbDCP+d+0vOkeeM/oHfBUtkP3D8=","dtype":"float64","shape":[10]},"edge_line_width":{"__ndarray__":"WVSyPCShEEA220ulaG4EQHpawrQO/xZA0vwKyH2mIEC87oRYW9EPQCjBjlhfNxtAhCCTz8aXHUAnXzrABlz3P6EexzAOWBhAxOq40+eJEUA=","dtype":"float64","shape":[10]},"end":[0,1,2,3,4,5,6,7,8,9],"end_values":[0,1,2,3,4,5,6,7,8,9],"start":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]},"start_values":{"__ndarray__":"AAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEA=","dtype":"float64","shape":[10]}},"selected":{"id":"22622","type":"Selection"},"selection_policy":{"id":"22621","type":"UnionRenderers"}},"id":"22580","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"field":"edge_line_width"}},"id":"22592","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22541","type":"HoverTool"},{"id":"22561","type":"SaveTool"},{"id":"22562","type":"PanTool"},{"id":"22563","type":"WheelZoomTool"},{"id":"22564","type":"BoxZoomTool"},{"id":"22565","type":"ResetTool"},{"id":"22566","type":"TapTool"}]},"id":"22567","type":"Toolbar"},{"attributes":{"line_color":{"field":"edge_color","transform":{"id":"22579","type":"LinearColorMapper"}},"line_width":{"field":"edge_line_width"}},"id":"22593","type":"MultiLine"},{"attributes":{},"id":"22619","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22571","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22577","type":"CategoricalColorMapper"}},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15}},"id":"22584","type":"Circle"},{"attributes":{},"id":"22561","type":"SaveTool"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.8090169943749475,0.5877852522924731],"2":[0.30901699437494745,0.9510565162951535],"3":[-0.30901699437494734,0.9510565162951536],"4":[-0.8090169943749473,0.5877852522924732],"5":[-1.0,1.2246467991473532e-16],"6":[-0.8090169943749476,-0.587785252292473],"7":[-0.30901699437494756,-0.9510565162951535],"8":[0.30901699437494723,-0.9510565162951536],"9":[0.8090169943749473,-0.5877852522924734]}},"id":"22581","type":"StaticLayoutProvider"},{"attributes":{"data_source":{"id":"22580","type":"ColumnDataSource"},"glyph":{"id":"22589","type":"MultiLine"},"hover_glyph":{"id":"22592","type":"MultiLine"},"muted_glyph":{"id":"22593","type":"MultiLine"},"nonselection_glyph":{"id":"22590","type":"MultiLine"},"selection_glyph":{"id":"22591","type":"MultiLine"},"view":{"id":"22595","type":"CDSView"}},"id":"22594","type":"GlyphRenderer"},{"attributes":{"source":{"id":"22580","type":"ColumnDataSource"}},"id":"22595","type":"CDSView"},{"attributes":{"below":[{"id":"22551","type":"LinearAxis"}],"left":[{"id":"22556","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"22551","type":"LinearAxis"},{"id":"22555","type":"Grid"},{"id":"22556","type":"LinearAxis"},{"id":"22560","type":"Grid"},{"id":"22571","type":"BoxAnnotation"},{"id":"22596","type":"GraphRenderer"}],"title":{"id":"22542","type":"Title"},"toolbar":{"id":"22567","type":"Toolbar"},"x_range":{"id":"22539","type":"Range1d"},"x_scale":{"id":"22547","type":"LinearScale"},"y_range":{"id":"22540","type":"Range1d"},"y_scale":{"id":"22549","type":"LinearScale"}},"id":"22543","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"22577","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"22582","type":"Circle"},{"attributes":{},"id":"22557","type":"BasicTicker"},{"attributes":{},"id":"22605","type":"NodesAndLinkedEdges"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"22543","subtype":"Figure","type":"Plot"},"ticker":{"id":"22557","type":"BasicTicker"}},"id":"22560","type":"Grid"}],"root_ids":["22543"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"6b9a8df1-8a25-4ff8-b5d6-796db5dcb609","roots":{"22543":"4fb5ca16-c1f6-442d-a6f7-ae25b994f10a"}}];
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