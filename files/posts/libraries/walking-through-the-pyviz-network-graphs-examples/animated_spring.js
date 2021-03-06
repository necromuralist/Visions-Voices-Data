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
      };var element = document.getElementById("e949bfaf-fb2b-409b-811c-9e1adba5e777");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e949bfaf-fb2b-409b-811c-9e1adba5e777' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dcab9cb3-3185-418e-8812-4747c859e8ae":{"roots":{"references":[{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"5027","type":"Range1d"},{"attributes":{"axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"5096","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5031","subtype":"Figure","type":"Plot"},"ticker":{"id":"5045","type":"BasicTicker"},"visible":false},"id":"5044","type":"LinearAxis"},{"attributes":{},"id":"5037","type":"LinearScale"},{"attributes":{},"id":"5049","type":"SaveTool"},{"attributes":{},"id":"5040","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["y","y",null]]]},"id":"5028","type":"Range1d"},{"attributes":{},"id":"5045","type":"BasicTicker"},{"attributes":{},"id":"5050","type":"PanTool"},{"attributes":{},"id":"5051","type":"WheelZoomTool"},{"attributes":{},"id":"5108","type":"UnionRenderers"},{"attributes":{"edge_renderer":{"id":"5079","type":"GlyphRenderer"},"inspection_policy":{"id":"5092","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"5068","type":"StaticLayoutProvider"},"node_renderer":{"id":"5074","type":"GlyphRenderer"},"selection_policy":{"id":"5090","type":"NodesAndLinkedEdges"}},"id":"5081","type":"GraphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"node_color","transform":{"id":"5065","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"size":{"units":"screen","value":15}},"id":"5070","type":"Circle"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2}},"id":"5078","type":"MultiLine"},{"attributes":{"below":[{"id":"5039","type":"LinearAxis"}],"left":[{"id":"5044","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"5039","type":"LinearAxis"},{"id":"5043","type":"Grid"},{"id":"5044","type":"LinearAxis"},{"id":"5048","type":"Grid"},{"id":"5059","type":"BoxAnnotation"},{"id":"5081","type":"GraphRenderer"}],"title":{"id":"5030","type":"Title"},"toolbar":{"id":"5055","type":"Toolbar"},"x_range":{"id":"5027","type":"Range1d"},"x_scale":{"id":"5035","type":"LinearScale"},"y_range":{"id":"5028","type":"Range1d"},"y_scale":{"id":"5037","type":"LinearScale"}},"id":"5031","subtype":"Figure","type":"Plot"},{"attributes":{"line_width":{"value":2}},"id":"5076","type":"MultiLine"},{"attributes":{},"id":"5035","type":"LinearScale"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5111","type":"Selection"},"selection_policy":{"id":"5110","type":"UnionRenderers"}},"id":"5067","type":"ColumnDataSource"},{"attributes":{"axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"5094","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5031","subtype":"Figure","type":"Plot"},"ticker":{"id":"5040","type":"BasicTicker"},"visible":false},"id":"5039","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"5065","type":"CategoricalColorMapper"}},"line_color":{"value":"black"},"size":{"units":"screen","value":15}},"id":"5071","type":"Circle"},{"attributes":{},"id":"5111","type":"Selection"},{"attributes":{"factors":["Mr. Hi","Officer"],"palette":["#e41a1c","#377eb8"]},"id":"5065","type":"CategoricalColorMapper"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5029","type":"HoverTool"},{"id":"5049","type":"SaveTool"},{"id":"5050","type":"PanTool"},{"id":"5051","type":"WheelZoomTool"},{"id":"5052","type":"BoxZoomTool"},{"id":"5053","type":"ResetTool"},{"id":"5054","type":"TapTool"}]},"id":"5055","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5031","subtype":"Figure","type":"Plot"},"ticker":{"id":"5045","type":"BasicTicker"}},"id":"5048","type":"Grid"},{"attributes":{},"id":"5053","type":"ResetTool"},{"attributes":{},"id":"5094","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":[{"id":"5081","type":"GraphRenderer"}],"tooltips":[["index","@{index_hover}"],["club","@{club}"]]},"id":"5029","type":"HoverTool"},{"attributes":{"plot":null,"text":"NetworkX Karate Club","text_font_size":{"value":"24pt"}},"id":"5030","type":"Title"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"5065","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15}},"id":"5069","type":"Circle"},{"attributes":{"fill_color":{"value":"limegreen"},"size":{"units":"screen","value":15}},"id":"5072","type":"Circle"},{"attributes":{"line_alpha":{"value":0.2},"line_width":{"value":2}},"id":"5077","type":"MultiLine"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5031","subtype":"Figure","type":"Plot"},"ticker":{"id":"5040","type":"BasicTicker"}},"id":"5043","type":"Grid"},{"attributes":{"graph_layout":{"0":[0.11623576412142585,0.4422305222892817],"1":[0.22470544127173864,0.09981902077490598],"10":[0.980385950129652,0.6110559785642784],"11":[-0.05935512748031796,0.573600399635406],"12":[-0.749390657988725,0.29089868845623573],"13":[-0.6989679988343803,0.9036138728923087],"14":[0.06202053637738753,-0.1619991379267193],"15":[-0.4552829536793409,0.5609429196595561],"16":[-0.07006948405978361,0.14716934560826145],"17":[-0.9494108762614355,0.2460922130259482],"18":[0.24346872259253105,0.2446818018922048],"19":[0.9102770490828648,0.3751398729586197],"2":[-0.13540383648672552,0.30290797238557876],"20":[-0.2643752894798517,-0.11702279082436536],"21":[0.41544327590767854,-0.874616383628395],"22":[0.35338825890420444,0.35265688147377416],"23":[-0.5642013462908707,-0.7364889678854917],"24":[-0.35300005038073545,-0.26443973022826717],"25":[0.15922819247130146,-0.11386709048357407],"26":[1.0,-0.7905359209218897],"27":[-0.5672288637516574,-0.671380427237709],"28":[0.32592719008851356,-0.4864445482530919],"29":[-0.04964126667770609,-0.504270230918567],"3":[-0.10739182898361666,0.797263241610779],"30":[-0.6675704339518791,-0.7737872574886966],"31":[0.3324037479040293,-0.7178778721081279],"32":[-0.5919475320250974,-0.25435795807696104],"33":[0.6634705549378486,-0.8004752149226634],"4":[0.9503167941231868,-0.2247697964961738],"5":[0.6046249787507578,0.06767359237368814],"6":[0.1549010376283026,0.8652678335587932],"7":[-0.8443664250615244,-0.8205245122463786],"8":[-0.946538590384945,0.6783320301798114],"9":[0.5773450674871672,0.7535116523076368]}},"id":"5068","type":"StaticLayoutProvider"},{"attributes":{"overlay":{"id":"5059","type":"BoxAnnotation"}},"id":"5052","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"5067","type":"ColumnDataSource"},"glyph":{"id":"5076","type":"MultiLine"},"hover_glyph":{"id":"5078","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"5077","type":"MultiLine"},"selection_glyph":null,"view":{"id":"5080","type":"CDSView"}},"id":"5079","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5059","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":{"__ndarray__":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAAFQAAABYAAAAXAAAAGAAAABkAAAAaAAAAGwAAABwAAAAdAAAAHgAAAB8AAAAgAAAAIQAAAA==","dtype":"int32","shape":[34]},"index_hover":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"],"node_color":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"]},"selected":{"id":"5109","type":"Selection"},"selection_policy":{"id":"5108","type":"UnionRenderers"}},"id":"5066","type":"ColumnDataSource"},{"attributes":{},"id":"5092","type":"NodesAndLinkedEdges"},{"attributes":{"source":{"id":"5067","type":"ColumnDataSource"}},"id":"5080","type":"CDSView"},{"attributes":{"fill_color":{"field":"node_color","transform":{"id":"5065","type":"CategoricalColorMapper"}},"line_color":{"value":"black"},"size":{"units":"screen","value":15}},"id":"5073","type":"Circle"},{"attributes":{},"id":"5110","type":"UnionRenderers"},{"attributes":{},"id":"5109","type":"Selection"},{"attributes":{"callback":null},"id":"5054","type":"TapTool"},{"attributes":{"source":{"id":"5066","type":"ColumnDataSource"}},"id":"5075","type":"CDSView"},{"attributes":{},"id":"5096","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5066","type":"ColumnDataSource"},"glyph":{"id":"5069","type":"Circle"},"hover_glyph":{"id":"5072","type":"Circle"},"muted_glyph":{"id":"5073","type":"Circle"},"nonselection_glyph":{"id":"5070","type":"Circle"},"selection_glyph":{"id":"5071","type":"Circle"},"view":{"id":"5075","type":"CDSView"}},"id":"5074","type":"GlyphRenderer"},{"attributes":{},"id":"5090","type":"NodesAndLinkedEdges"}],"root_ids":["5031"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"dcab9cb3-3185-418e-8812-4747c859e8ae","roots":{"5031":"e949bfaf-fb2b-409b-811c-9e1adba5e777"}}];
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