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
      };var element = document.getElementById("4ca9b967-a66d-424f-ae27-6cd948a4da31");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ca9b967-a66d-424f-ae27-6cd948a4da31' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5b638d60-7070-4333-aac5-3629c1bc6f91":{"roots":{"references":[{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"49557","type":"Range1d"},{"attributes":{},"id":"49579","type":"SaveTool"},{"attributes":{},"id":"49583","type":"ResetTool"},{"attributes":{},"id":"49602","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"49593","type":"ColumnDataSource"},"glyph":{"id":"49596","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"49598","type":"Line"},"nonselection_glyph":{"id":"49597","type":"Line"},"selection_glyph":null,"view":{"id":"49600","type":"CDSView"}},"id":"49599","type":"GlyphRenderer"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"49602","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"49561","subtype":"Figure","type":"Plot"},"ticker":{"id":"49570","type":"BasicTicker"}},"id":"49569","type":"LinearAxis"},{"attributes":{},"id":"49565","type":"LinearScale"},{"attributes":{"source":{"id":"49593","type":"ColumnDataSource"}},"id":"49600","type":"CDSView"},{"attributes":{},"id":"49567","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"49596","type":"Line"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"18pt"}},"id":"49560","type":"Title"},{"attributes":{},"id":"49594","type":"Selection"},{"attributes":{"below":[{"id":"49569","type":"LinearAxis"}],"left":[{"id":"49574","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"49569","type":"LinearAxis"},{"id":"49573","type":"Grid"},{"id":"49574","type":"LinearAxis"},{"id":"49578","type":"Grid"},{"id":"49588","type":"BoxAnnotation"},{"id":"49599","type":"GlyphRenderer"}],"title":{"id":"49560","type":"Title"},"toolbar":{"id":"49584","type":"Toolbar"},"x_range":{"id":"49557","type":"Range1d"},"x_scale":{"id":"49565","type":"LinearScale"},"y_range":{"id":"49558","type":"Range1d"},"y_scale":{"id":"49567","type":"LinearScale"}},"id":"49561","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"49597","type":"Line"},{"attributes":{},"id":"49575","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"49561","subtype":"Figure","type":"Plot"},"ticker":{"id":"49575","type":"BasicTicker"}},"id":"49578","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"49559","type":"HoverTool"},{"id":"49579","type":"SaveTool"},{"id":"49580","type":"PanTool"},{"id":"49581","type":"WheelZoomTool"},{"id":"49582","type":"BoxZoomTool"},{"id":"49583","type":"ResetTool"}]},"id":"49584","type":"Toolbar"},{"attributes":{"axis_label":"Median Measles Cases","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"49604","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"49561","subtype":"Figure","type":"Plot"},"ticker":{"id":"49575","type":"BasicTicker"}},"id":"49574","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"49598","type":"Line"},{"attributes":{"callback":null,"renderers":[{"id":"49599","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"49559","type":"HoverTool"},{"attributes":{},"id":"49604","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"49561","subtype":"Figure","type":"Plot"},"ticker":{"id":"49570","type":"BasicTicker"}},"id":"49573","type":"Grid"},{"attributes":{},"id":"49611","type":"UnionRenderers"},{"attributes":{},"id":"49570","type":"BasicTicker"},{"attributes":{"overlay":{"id":"49588","type":"BoxAnnotation"}},"id":"49582","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49588","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"MzMzMzMzY0AK16NwPUpTQB+F61G43ldAAAAAAABgW0CPwvUoXH9jQAAAAAAAoFRA16NwPQqPaEDNzMzMzARhQIXrUbge1W1AXI/C9SjMVkC4HoXrUZR9QBSuR+F6WIVAw/UoXI/CXECPwvUoXJdjQI/C9Shcb29AAAAAAABwYEDNzMzMzFxaQD0K16Nw/UpAPQrXo3AFYkBxPQrXoyBUQIXrUbgexVhA16NwPQp/YkAAAAAAAGBMQClcj8L1EGNApHA9CtfTYkD2KFyPwrVlQNejcD0KZ3ZAXI/C9SjEYUD2KFyPwsVXQGZmZmZm/mFAH4XrUbgOXEAAAAAAABBYQB+F61G4LlhAH4XrUbheWED2KFyPwjVXQB+F61G4bllAhetRuB4lakCkcD0K1wNLQFyPwvUoHERAj8L1KFwPP0C4HoXrUbgdQHsUrkfheidAcT0K16NwNkApXI/C9ag4QNejcD0K1zpASOF6FK7HLEBmZmZmZuYhQK5H4XoU7jlAuB6F61F4OUBmZmZmZqYwQHE9Ctej8DVA7FG4HoXrGEBcj8L1KFwaQPYoXI/C9fA/ZmZmZmZm5j9mZmZmZmb6P1yPwvUo3CJApHA9CtejFEDXo3A9CtckQM3MzMzMzAxA16NwPQrXD0DXo3A9CtcZQHE9CtejcBFAuB6F61G4GUCamZmZmZkBQBSuR+F6FOY/AAAAAAAABEDD9Shcj8LtPz0K16NwPQ5Aw/UoXI/CI0AUrkfhehTyP6RwPQrXo8A/uB6F61G4zj8AAAAAAADQP3sUrkfhesQ/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"49594","type":"Selection"},"selection_policy":{"id":"49611","type":"UnionRenderers"}},"id":"49593","type":"ColumnDataSource"},{"attributes":{},"id":"49581","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":683.06,"reset_end":683.06,"reset_start":0.13,"start":0.13,"tags":[[["measles","measles",null]]]},"id":"49558","type":"Range1d"},{"attributes":{},"id":"49580","type":"PanTool"}],"root_ids":["49561"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5b638d60-7070-4333-aac5-3629c1bc6f91","roots":{"49561":"4ca9b967-a66d-424f-ae27-6cd948a4da31"}}];
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