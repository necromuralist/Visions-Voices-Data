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
      };var element = document.getElementById("9711b5b4-83ef-4e9e-b406-5fe3859f6bf3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9711b5b4-83ef-4e9e-b406-5fe3859f6bf3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"61ee6a86-10de-4bd5-a022-1d76fb05a5bb":{"roots":{"references":[{"attributes":{},"id":"4577","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4571","type":"HoverTool"},{"id":"4590","type":"SaveTool"},{"id":"4591","type":"PanTool"},{"id":"4592","type":"WheelZoomTool"},{"id":"4593","type":"BoxZoomTool"},{"id":"4594","type":"ResetTool"}]},"id":"4595","type":"Toolbar"},{"attributes":{},"id":"4590","type":"SaveTool"},{"attributes":{},"id":"4579","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"State","transform":{"id":"4604","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"4609","type":"VBar"},{"attributes":{"data_source":{"id":"4605","type":"ColumnDataSource"},"glyph":{"id":"4608","type":"VBar"},"hover_glyph":null,"muted_glyph":{"id":"4610","type":"VBar"},"nonselection_glyph":{"id":"4609","type":"VBar"},"selection_glyph":null,"view":{"id":"4612","type":"CDSView"}},"id":"4611","type":"GlyphRenderer"},{"attributes":{},"id":"4591","type":"PanTool"},{"attributes":{"axis_label":"Year, State","bounds":"auto","formatter":{"id":"4614","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"4573","subtype":"Figure","type":"Plot"},"ticker":{"id":"4582","type":"CategoricalTicker"}},"id":"4581","type":"CategoricalAxis"},{"attributes":{},"id":"4606","type":"Selection"},{"attributes":{"callback":null,"renderers":[{"id":"4611","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["State","@{State}"],["Measles Incidence","@{measles}"]]},"id":"4571","type":"HoverTool"},{"attributes":{},"id":"4592","type":"WheelZoomTool"},{"attributes":{},"id":"4582","type":"CategoricalTicker"},{"attributes":{"factors":["Idaho","Oregon","Washington"],"palette":["#30a2da","#fc4f30","#e5ae38"]},"id":"4604","type":"CategoricalColorMapper"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"State","transform":{"id":"4604","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"4610","type":"VBar"},{"attributes":{"callback":null,"factors":[["1928","Idaho"],["1928","Oregon"],["1928","Washington"],["1929","Idaho"],["1929","Oregon"],["1929","Washington"],["1930","Idaho"],["1930","Oregon"],["1930","Washington"],["1931","Idaho"],["1931","Oregon"],["1931","Washington"],["1932","Idaho"],["1932","Oregon"],["1932","Washington"],["1933","Idaho"],["1933","Oregon"],["1933","Washington"],["1934","Idaho"],["1934","Oregon"],["1934","Washington"],["1935","Idaho"],["1935","Oregon"],["1935","Washington"],["1936","Idaho"],["1936","Oregon"],["1936","Washington"],["1937","Idaho"],["1937","Oregon"],["1937","Washington"]],"tags":[[["Year","Year",null],["State","State",null]]]},"id":"4569","type":"FactorRange"},{"attributes":{"source":{"id":"4605","type":"ColumnDataSource"}},"id":"4612","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4573","subtype":"Figure","type":"Plot"},"ticker":{"id":"4582","type":"CategoricalTicker"}},"id":"4584","type":"Grid"},{"attributes":{"overlay":{"id":"4599","type":"BoxAnnotation"}},"id":"4593","type":"BoxZoomTool"},{"attributes":{},"id":"4615","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":18.383000000000003,"reset_end":18.383000000000003,"reset_start":0,"tags":[[["measles","Measles Incidence",null]]]},"id":"4570","type":"Range1d"},{"attributes":{},"id":"4594","type":"ResetTool"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"4615","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"4573","subtype":"Figure","type":"Plot"},"ticker":{"id":"4586","type":"BasicTicker"}},"id":"4585","type":"LinearAxis"},{"attributes":{},"id":"4623","type":"UnionRenderers"},{"attributes":{},"id":"4586","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"State","transform":{"id":"4604","type":"CategoricalColorMapper"}},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"4608","type":"VBar"},{"attributes":{"below":[{"id":"4581","type":"CategoricalAxis"}],"left":[{"id":"4585","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":800,"renderers":[{"id":"4581","type":"CategoricalAxis"},{"id":"4584","type":"Grid"},{"id":"4585","type":"LinearAxis"},{"id":"4589","type":"Grid"},{"id":"4599","type":"BoxAnnotation"},{"id":"4611","type":"GlyphRenderer"}],"title":{"id":"4572","type":"Title"},"toolbar":{"id":"4595","type":"Toolbar"},"x_range":{"id":"4569","type":"FactorRange"},"x_scale":{"id":"4577","type":"CategoricalScale"},"y_range":{"id":"4570","type":"Range1d"},"y_scale":{"id":"4579","type":"LinearScale"}},"id":"4573","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4599","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"4573","subtype":"Figure","type":"Plot"},"ticker":{"id":"4586","type":"BasicTicker"}},"id":"4589","type":"Grid"},{"attributes":{},"id":"4614","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"4572","type":"Title"},{"attributes":{"callback":null,"data":{"State":["Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington"],"Year":["1928","1929","1930","1931","1932","1933","1934","1935","1936","1937","1928","1929","1930","1931","1932","1933","1934","1935","1936","1937","1928","1929","1930","1931","1932","1933","1934","1935","1936","1937"],"measles":{"__ndarray__":"lI5PX1sc6D/xhclUwagJQAGdNtBpYxBALrHtEtsu6T99+byXz3vZP5dDi2znWxNAQuLw2nsKGEDTDzX9UJMQQO/STWIQWBdAMTMzMzNDFEBeWxwsKCkRQE8b6LSBTiNAVPcOiSpCFUC9XXXvkKgSQG/kRm7kxiNA7h0SVYS4EUBP7MRO7MQNQOr49LXFIStANl66SQxiMkD3jynDXPbnP8vmnzFNhhpA+YEf+IEfE0Aa02SAOUsoQPXEkV4r+A5AhHNGlPZGKUBw2D6lC3IIQJcuyGH7lCJAkagixNs1JECx4emVsowiQDecAmnPNQBA","dtype":"float64","shape":[30]},"xoffsets":[["1928","Idaho"],["1929","Idaho"],["1930","Idaho"],["1931","Idaho"],["1932","Idaho"],["1933","Idaho"],["1934","Idaho"],["1935","Idaho"],["1936","Idaho"],["1937","Idaho"],["1928","Oregon"],["1929","Oregon"],["1930","Oregon"],["1931","Oregon"],["1932","Oregon"],["1933","Oregon"],["1934","Oregon"],["1935","Oregon"],["1936","Oregon"],["1937","Oregon"],["1928","Washington"],["1929","Washington"],["1930","Washington"],["1931","Washington"],["1932","Washington"],["1933","Washington"],["1934","Washington"],["1935","Washington"],["1936","Washington"],["1937","Washington"]]},"selected":{"id":"4606","type":"Selection"},"selection_policy":{"id":"4623","type":"UnionRenderers"}},"id":"4605","type":"ColumnDataSource"}],"root_ids":["4573"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"61ee6a86-10de-4bd5-a022-1d76fb05a5bb","roots":{"4573":"9711b5b4-83ef-4e9e-b406-5fe3859f6bf3"}}];
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