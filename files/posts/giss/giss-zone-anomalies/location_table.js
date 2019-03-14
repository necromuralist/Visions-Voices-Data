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
      };var element = document.getElementById("36144cac-ac83-4f60-be2d-26047202ed16");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36144cac-ac83-4f60-be2d-26047202ed16' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c7b4fc95-f854-44e2-b8fe-eafc24f214c8":{"roots":{"references":[{"attributes":{"editor":{"id":"1033","type":"NumberEditor"},"field":"Percentage","formatter":{"id":"1032","type":"NumberFormatter"},"title":"Percentage"},"id":"1034","type":"TableColumn"},{"attributes":{},"id":"1021","type":"Selection"},{"attributes":{},"id":"1040","type":"UnionRenderers"},{"attributes":{},"id":"1028","type":"IntEditor"},{"attributes":{"source":{"id":"1020","type":"ColumnDataSource"}},"id":"1038","type":"CDSView"},{"attributes":{"editor":{"id":"1028","type":"IntEditor"},"field":"Count","formatter":{"id":"1027","type":"NumberFormatter"},"title":"Count"},"id":"1029","type":"TableColumn"},{"attributes":{},"id":"1023","type":"StringEditor"},{"attributes":{"editor":{"id":"1023","type":"StringEditor"},"field":"Value","formatter":{"id":"1022","type":"StringFormatter"},"title":"Value"},"id":"1024","type":"TableColumn"},{"attributes":{"columns":[{"id":"1024","type":"TableColumn"},{"id":"1029","type":"TableColumn"},{"id":"1034","type":"TableColumn"}],"height":300,"reorderable":false,"source":{"id":"1020","type":"ColumnDataSource"},"view":{"id":"1038","type":"CDSView"},"width":700},"id":"1037","type":"DataTable"},{"attributes":{"format":"0,0.0[00000]"},"id":"1032","type":"NumberFormatter"},{"attributes":{},"id":"1033","type":"NumberEditor"},{"attributes":{},"id":"1022","type":"StringFormatter"},{"attributes":{},"id":"1027","type":"NumberFormatter"},{"attributes":{"callback":null,"data":{"Count":[139,139,139,139,139,139,139,139,139,139,139,139,139,139],"Percentage":{"__ndarray__":"j8L1KFyPHECPwvUoXI8cQI/C9ShcjxxAj8L1KFyPHECPwvUoXI8cQI/C9ShcjxxAj8L1KFyPHECPwvUoXI8cQI/C9ShcjxxAj8L1KFyPHECPwvUoXI8cQI/C9ShcjxxAj8L1KFyPHECPwvUoXI8cQA==","dtype":"float64","shape":[14]},"Value":["South Temperate","South Sub-Tropic","Southern Hemisphere","Tropics","North Temperate","Northern Hemisphere","South Frigid","North Sub-Tropic","Tropic of Cancer","North Frigid","Southern Extratropics","Northern Extratropics","Tropic of Capricorn","Global"]},"selected":{"id":"1021","type":"Selection"},"selection_policy":{"id":"1040","type":"UnionRenderers"}},"id":"1020","type":"ColumnDataSource"}],"root_ids":["1037"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c7b4fc95-f854-44e2-b8fe-eafc24f214c8","roots":{"1037":"36144cac-ac83-4f60-be2d-26047202ed16"}}];
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