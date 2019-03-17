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
      };var element = document.getElementById("5e9460f9-a79e-48c7-b7a1-8c96e8749009");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5e9460f9-a79e-48c7-b7a1-8c96e8749009' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b433b04a-b1d1-4ad8-8e82-febe1faad3ac":{"roots":{"references":[{"attributes":{"below":[{"id":"30212","type":"LinearAxis"}],"left":[{"id":"30217","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":800,"renderers":[{"id":"30212","type":"LinearAxis"},{"id":"30216","type":"Grid"},{"id":"30217","type":"LinearAxis"},{"id":"30221","type":"Grid"},{"id":"30231","type":"BoxAnnotation"},{"id":"30242","type":"GlyphRenderer"}],"title":{"id":"30203","type":"Title"},"toolbar":{"id":"30227","type":"Toolbar"},"x_range":{"id":"30200","type":"Range1d"},"x_scale":{"id":"30208","type":"LinearScale"},"y_range":{"id":"30201","type":"Range1d"},"y_scale":{"id":"30210","type":"LinearScale"}},"id":"30204","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"30236","type":"ColumnDataSource"}},"id":"30243","type":"CDSView"},{"attributes":{},"id":"30218","type":"BasicTicker"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"30245","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"30204","subtype":"Figure","type":"Plot"},"ticker":{"id":"30213","type":"BasicTicker"}},"id":"30212","type":"LinearAxis"},{"attributes":{},"id":"30223","type":"PanTool"},{"attributes":{"plot":null,"text":"Missing Weekly Measles Reports by Decade","text_font_size":{"value":"18pt"}},"id":"30203","type":"Title"},{"attributes":{},"id":"30208","type":"LinearScale"},{"attributes":{"axis_label":"Count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"30247","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"30204","subtype":"Figure","type":"Plot"},"ticker":{"id":"30218","type":"BasicTicker"}},"id":"30217","type":"LinearAxis"},{"attributes":{},"id":"30224","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30202","type":"HoverTool"},{"id":"30222","type":"SaveTool"},{"id":"30223","type":"PanTool"},{"id":"30224","type":"WheelZoomTool"},{"id":"30225","type":"BoxZoomTool"},{"id":"30226","type":"ResetTool"}]},"id":"30227","type":"Toolbar"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"30239","type":"Quad"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"30204","subtype":"Figure","type":"Plot"},"ticker":{"id":"30218","type":"BasicTicker"}},"id":"30221","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"30240","type":"Quad"},{"attributes":{"callback":null,"data":{"Year":{"__ndarray__":"AAAAAAA8nkAAAAAAAGSeQAAAAAAAjJ5AAAAAAAC0nkAAAAAAANyeQAAAAAAABJ9AAAAAAAAsn0AAAAAAAFSfQA==","dtype":"float64","shape":[8]},"Year_count":[4160,3571,2961,2741,3136,13351,16519,27548],"left":{"__ndarray__":"AAAAAAAonkAAAAAAAFCeQAAAAAAAeJ5AAAAAAACgnkAAAAAAAMieQAAAAAAA8J5AAAAAAAAYn0AAAAAAAECfQA==","dtype":"float64","shape":[8]},"right":{"__ndarray__":"AAAAAABQnkAAAAAAAHieQAAAAAAAoJ5AAAAAAADInkAAAAAAAPCeQAAAAAAAGJ9AAAAAAABAn0AAAAAAAGifQA==","dtype":"float64","shape":[8]},"top":[4160,3571,2961,2741,3136,13351,16519,27548]},"selected":{"id":"30237","type":"Selection"},"selection_policy":{"id":"30254","type":"UnionRenderers"}},"id":"30236","type":"ColumnDataSource"},{"attributes":{},"id":"30222","type":"SaveTool"},{"attributes":{},"id":"30254","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30231","type":"BoxAnnotation"},{"attributes":{},"id":"30210","type":"LinearScale"},{"attributes":{},"id":"30213","type":"BasicTicker"},{"attributes":{"callback":null,"end":2010.0,"reset_end":2010.0,"reset_start":1930.0,"start":1930.0,"tags":[[["Year","Year",null]]]},"id":"30200","type":"Range1d"},{"attributes":{},"id":"30245","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":27548.0,"reset_end":27548.0,"reset_start":0.0,"tags":[[["Year_count","Count",null]]]},"id":"30201","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"30204","subtype":"Figure","type":"Plot"},"ticker":{"id":"30213","type":"BasicTicker"}},"id":"30216","type":"Grid"},{"attributes":{"overlay":{"id":"30231","type":"BoxAnnotation"}},"id":"30225","type":"BoxZoomTool"},{"attributes":{},"id":"30247","type":"BasicTickFormatter"},{"attributes":{},"id":"30237","type":"Selection"},{"attributes":{},"id":"30226","type":"ResetTool"},{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"numeral"},"mode":"vline","renderers":[{"id":"30242","type":"GlyphRenderer"}],"tooltips":[["Missing","@Year_count{0,0}"],["Decade Center Year","@Year{0}"]]},"id":"30202","type":"HoverTool"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"right":{"field":"right"},"top":{"field":"top"}},"id":"30241","type":"Quad"},{"attributes":{"data_source":{"id":"30236","type":"ColumnDataSource"},"glyph":{"id":"30239","type":"Quad"},"hover_glyph":null,"muted_glyph":{"id":"30241","type":"Quad"},"nonselection_glyph":{"id":"30240","type":"Quad"},"selection_glyph":null,"view":{"id":"30243","type":"CDSView"}},"id":"30242","type":"GlyphRenderer"}],"root_ids":["30204"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b433b04a-b1d1-4ad8-8e82-febe1faad3ac","roots":{"30204":"5e9460f9-a79e-48c7-b7a1-8c96e8749009"}}];
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