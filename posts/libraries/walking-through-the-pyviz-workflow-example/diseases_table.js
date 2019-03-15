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
      };var element = document.getElementById("bcc429ba-49ed-4ec7-a602-681c6cffb895");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bcc429ba-49ed-4ec7-a602-681c6cffb895' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"70b72ecd-5e97-4624-9f48-800c3d267a38":{"roots":{"references":[{"attributes":{},"id":"1038","type":"IntEditor"},{"attributes":{},"id":"1053","type":"NumberEditor"},{"attributes":{"editor":{"id":"1038","type":"IntEditor"},"field":"Week","formatter":{"id":"1037","type":"NumberFormatter"},"title":"Week"},"id":"1039","type":"TableColumn"},{"attributes":{"editor":{"id":"1053","type":"NumberEditor"},"field":"pertussis","formatter":{"id":"1052","type":"NumberFormatter"},"title":"pertussis"},"id":"1054","type":"TableColumn"},{"attributes":{},"id":"1042","type":"StringFormatter"},{"attributes":{"callback":null,"data":{"State":["Alabama","Alabama","Alabama","Alabama","Alabama"],"Week":[1,2,3,4,5],"Year":[1928,1928,1928,1928,1928],"measles":{"__ndarray__":"XI/C9ShcDUAAAAAAAAAZQM3MzMzMzB9AKVyPwvUoKUCPwvUoXA8gQA==","dtype":"float64","shape":[5]},"pertussis":{"__ndarray__":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[5]}},"selected":{"id":"1031","type":"Selection"},"selection_policy":{"id":"1059","type":"UnionRenderers"}},"id":"1030","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1030","type":"ColumnDataSource"}},"id":"1058","type":"CDSView"},{"attributes":{},"id":"1043","type":"StringEditor"},{"attributes":{},"id":"1031","type":"Selection"},{"attributes":{"editor":{"id":"1043","type":"StringEditor"},"field":"State","formatter":{"id":"1042","type":"StringFormatter"},"title":"State"},"id":"1044","type":"TableColumn"},{"attributes":{"columns":[{"id":"1034","type":"TableColumn"},{"id":"1039","type":"TableColumn"},{"id":"1044","type":"TableColumn"},{"id":"1049","type":"TableColumn"},{"id":"1054","type":"TableColumn"}],"height":300,"reorderable":false,"source":{"id":"1030","type":"ColumnDataSource"},"view":{"id":"1058","type":"CDSView"},"width":700},"id":"1057","type":"DataTable"},{"attributes":{"format":"0,0.0[00000]"},"id":"1047","type":"NumberFormatter"},{"attributes":{},"id":"1032","type":"NumberFormatter"},{"attributes":{},"id":"1048","type":"NumberEditor"},{"attributes":{},"id":"1033","type":"IntEditor"},{"attributes":{},"id":"1059","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1048","type":"NumberEditor"},"field":"measles","formatter":{"id":"1047","type":"NumberFormatter"},"title":"measles"},"id":"1049","type":"TableColumn"},{"attributes":{"editor":{"id":"1033","type":"IntEditor"},"field":"Year","formatter":{"id":"1032","type":"NumberFormatter"},"title":"Year"},"id":"1034","type":"TableColumn"},{"attributes":{"format":"0,0.0[00000]"},"id":"1052","type":"NumberFormatter"},{"attributes":{},"id":"1037","type":"NumberFormatter"}],"root_ids":["1057"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"70b72ecd-5e97-4624-9f48-800c3d267a38","roots":{"1057":"bcc429ba-49ed-4ec7-a602-681c6cffb895"}}];
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