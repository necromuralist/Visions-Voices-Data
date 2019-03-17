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
      };var element = document.getElementById("726ce751-7b16-477e-8289-aabbe90f4ed0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '726ce751-7b16-477e-8289-aabbe90f4ed0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f8a3d515-c1a4-4ca5-a81e-3e86ef0ed3b1":{"roots":{"references":[{"attributes":{},"id":"48924","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"48913","type":"ColumnDataSource"}},"id":"48920","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"48881","subtype":"Figure","type":"Plot"},"ticker":{"id":"48890","type":"BasicTicker"}},"id":"48893","type":"Grid"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"48881","subtype":"Figure","type":"Plot"},"ticker":{"id":"48895","type":"BasicTicker"}},"id":"48898","type":"Grid"},{"attributes":{"overlay":{"id":"48908","type":"BoxAnnotation"}},"id":"48902","type":"BoxZoomTool"},{"attributes":{"axis_label":"Median Measles Cases","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"48924","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"48881","subtype":"Figure","type":"Plot"},"ticker":{"id":"48895","type":"BasicTicker"}},"id":"48894","type":"LinearAxis"},{"attributes":{},"id":"48903","type":"ResetTool"},{"attributes":{},"id":"48900","type":"PanTool"},{"attributes":{},"id":"48887","type":"LinearScale"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"48922","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"48881","subtype":"Figure","type":"Plot"},"ticker":{"id":"48890","type":"BasicTicker"}},"id":"48889","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"48879","type":"HoverTool"},{"id":"48899","type":"SaveTool"},{"id":"48900","type":"PanTool"},{"id":"48901","type":"WheelZoomTool"},{"id":"48902","type":"BoxZoomTool"},{"id":"48903","type":"ResetTool"}]},"id":"48904","type":"Toolbar"},{"attributes":{},"id":"48931","type":"UnionRenderers"},{"attributes":{"below":[{"id":"48889","type":"LinearAxis"}],"left":[{"id":"48894","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"48889","type":"LinearAxis"},{"id":"48893","type":"Grid"},{"id":"48894","type":"LinearAxis"},{"id":"48898","type":"Grid"},{"id":"48908","type":"BoxAnnotation"},{"id":"48919","type":"GlyphRenderer"}],"title":{"id":"48880","type":"Title"},"toolbar":{"id":"48904","type":"Toolbar"},"x_range":{"id":"48877","type":"Range1d"},"x_scale":{"id":"48885","type":"LinearScale"},"y_range":{"id":"48878","type":"Range1d"},"y_scale":{"id":"48887","type":"LinearScale"}},"id":"48881","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48899","type":"SaveTool"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"48877","type":"Range1d"},{"attributes":{"callback":null,"renderers":[{"id":"48919","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"48879","type":"HoverTool"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"uB6F61G4BEDD9Shcj8L9P6RwPQrXowNAH4XrUbge/T+PwvUoXI/2P65H4XoUrv0/ZmZmZmbmEkBxPQrXo3AHQBSuR+F6FPA/w/UoXI/C9T9SuB6F61EGQKRwPQrXowJAzczMzMzM+D/D9Shcj8IFQOxRuB6F6whAUrgehetRDkCkcD0K16P6P5qZmZmZmek/4XoUrkfhAkA9CtejcD3yPwAAAAAAAAZA16NwPQrXBUAAAAAAAAD4P65H4XoUrgdAFK5H4XoUBkCPwvUoXI8AQLgehetRuApAzczMzMzMAECkcD0K16MGQFK4HoXrUQRA7FG4HoXrCUBcj8L1KFwFQK5H4XoUrgFAMzMzMzMzA0DNzMzMzMwCQOxRuB6F6/s/j8L1KFyP/j8fhetRuB7tP+xRuB6F6+E/CtejcD0Kxz97FK5H4XqkP3sUrkfheqQ/pHA9CtejwD+amZmZmZnJP7gehetRuK4/exSuR+F6pD97FK5H4XqUP3sUrkfhepQ/exSuR+F6lD97FK5H4XqkP7gehetRuJ4/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"48914","type":"Selection"},"selection_policy":{"id":"48931","type":"UnionRenderers"}},"id":"48913","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"measles","text_font_size":{"value":"18pt"}},"id":"48880","type":"Title"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"48918","type":"Line"},{"attributes":{},"id":"48901","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"48913","type":"ColumnDataSource"},"glyph":{"id":"48916","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"48918","type":"Line"},"nonselection_glyph":{"id":"48917","type":"Line"},"selection_glyph":null,"view":{"id":"48920","type":"CDSView"}},"id":"48919","type":"GlyphRenderer"},{"attributes":{},"id":"48914","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"48916","type":"Line"},{"attributes":{},"id":"48890","type":"BasicTicker"},{"attributes":{"callback":null,"end":4.725,"reset_end":4.725,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"48878","type":"Range1d"},{"attributes":{},"id":"48885","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"48908","type":"BoxAnnotation"},{"attributes":{},"id":"48922","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"48917","type":"Line"},{"attributes":{},"id":"48895","type":"BasicTicker"}],"root_ids":["48881"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"f8a3d515-c1a4-4ca5-a81e-3e86ef0ed3b1","roots":{"48881":"726ce751-7b16-477e-8289-aabbe90f4ed0"}}];
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