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
      };var element = document.getElementById("102b2a55-6138-4dd5-85d2-17454c59beb1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '102b2a55-6138-4dd5-85d2-17454c59beb1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6e1c18e6-f843-4548-a41b-a6df39ee5ac1":{"roots":{"references":[{"attributes":{},"id":"1726","type":"LinearScale"},{"attributes":{"plot":null,"text":"Measles In the U.S. by Year"},"id":"1721","type":"Title"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"red"},"line_width":{"value":3},"location":1934,"plot":null},"id":"1774","type":"Span"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#fc4f30"},"line_width":{"value":3},"location":1968,"plot":null},"id":"1771","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1762","type":"Line"},{"attributes":{},"id":"1741","type":"PanTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"1754","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1722","subtype":"Figure","type":"Plot"},"ticker":{"id":"1731","type":"BasicTicker"}},"id":"1730","type":"LinearAxis"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#30a2da"},"line_width":{"value":3},"location":1963,"plot":null},"id":"1768","type":"Span"},{"attributes":{},"id":"1731","type":"BasicTicker"},{"attributes":{},"id":"1740","type":"SaveTool"},{"attributes":{},"id":"1742","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1763","type":"Line"},{"attributes":{},"id":"1759","type":"Selection"},{"attributes":{"source":{"id":"1758","type":"ColumnDataSource"}},"id":"1765","type":"CDSView"},{"attributes":{"overlay":{"id":"1749","type":"BoxAnnotation"}},"id":"1743","type":"BoxZoomTool"},{"attributes":{},"id":"1744","type":"ResetTool"},{"attributes":{},"id":"1756","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1749","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1722","subtype":"Figure","type":"Plot"},"ticker":{"id":"1736","type":"BasicTicker"}},"id":"1739","type":"Grid"},{"attributes":{"data_source":{"id":"1758","type":"ColumnDataSource"},"glyph":{"id":"1761","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1763","type":"Line"},"nonselection_glyph":{"id":"1762","type":"Line"},"selection_glyph":null,"view":{"id":"1765","type":"CDSView"}},"id":"1764","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"1764","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"1720","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1720","type":"HoverTool"},{"id":"1740","type":"SaveTool"},{"id":"1741","type":"PanTool"},{"id":"1742","type":"WheelZoomTool"},{"id":"1743","type":"BoxZoomTool"},{"id":"1744","type":"ResetTool"}]},"id":"1745","type":"Toolbar"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1718","type":"Range1d"},{"attributes":{},"id":"1754","type":"BasicTickFormatter"},{"attributes":{},"id":"1781","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1722","subtype":"Figure","type":"Plot"},"ticker":{"id":"1731","type":"BasicTicker"}},"id":"1734","type":"Grid"},{"attributes":{"callback":null,"end":30435.47000000004,"reset_end":30435.47000000004,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"1719","type":"Range1d"},{"attributes":{"axis_label":"Cases","bounds":"auto","formatter":{"id":"1756","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1722","subtype":"Figure","type":"Plot"},"ticker":{"id":"1736","type":"BasicTicker"}},"id":"1735","type":"LinearAxis"},{"attributes":{},"id":"1736","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1761","type":"Line"},{"attributes":{"below":[{"id":"1730","type":"LinearAxis"}],"left":[{"id":"1735","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":700,"renderers":[{"id":"1730","type":"LinearAxis"},{"id":"1734","type":"Grid"},{"id":"1735","type":"LinearAxis"},{"id":"1739","type":"Grid"},{"id":"1749","type":"BoxAnnotation"},{"id":"1764","type":"GlyphRenderer"},{"id":"1768","type":"Span"},{"id":"1771","type":"Span"},{"id":"1774","type":"Span"}],"title":{"id":"1721","type":"Title"},"toolbar":{"id":"1745","type":"Toolbar"},"x_range":{"id":"1718","type":"Range1d"},"x_scale":{"id":"1726","type":"LinearScale"},"y_range":{"id":"1719","type":"Range1d"},"y_scale":{"id":"1728","type":"LinearScale"}},"id":"1722","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"KlyPwhWH0EAerkfheo7HQF7hehSOd8xAMlyPwtUhzkBN4XoUjkjMQBSuR+Ea/cZAU+F6FN643UD91qNwvX7YQJuZmZn5U8hAgutRuF7cxUCawvUoDM7ZQOZRuB7lc9RA18zMzGxJyUAAAAAAgM7VQK5H4XoUeNRATLgehUur1kDC9ShcHxbTQDYzMzNzTbVABwAAAEAl00CvcD0K927CQLz1KFwPQs5AASlcj1KB1UBOuB6F63LCQA+uR+F6YNFAsszMzHxB0kCB61G4nnDLQFGPwvU4BtRAPDMzM1MJ0kBiZmZmZnzSQOJ6FK5nwNBAfutRuN761ECH61G4XovKQGCPwvUo5MpAtZmZmfmyxkAIKVyPIhvNQIrrUbh+ucVA9KNwPSq0yUDrUbgepZ/CQA6uR+F6JLVABoXrUbhhnUDgUbgehbd+QClcj8L1TIJAz8zMzMxbkUAuMzMzM6qdQEg9CtejiohAc8L1KFzVhkBAuB6F6yl6QBNcj8L15oRA8dajcD2ikEDNo3A9CgqRQFtmZmZmSoNAZI/C9ShscEA3MzMzM8txQDQzMzMzcz9AsvUoXI9CMUAaXI/C9SgvQCCF61G4XkdAZ2ZmZmbmT0DJ9Shcj/JYQLFH4XoUnlNAJVyPwvXISUBzPQrXo9BnQBKuR+F6TG1ABQAAAADIYEAL16NwPco8QBuF61G4niFAf+tRuB6FM0D8//////8UQFyPwvUonDhApnA9CtejO0CD61G4HoUJQHQ9CtejcO0/aGZmZmZm+j+lcD0K16P4P9ijcD0K19M/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"1759","type":"Selection"},"selection_policy":{"id":"1781","type":"UnionRenderers"}},"id":"1758","type":"ColumnDataSource"},{"attributes":{},"id":"1728","type":"LinearScale"}],"root_ids":["1722"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"6e1c18e6-f843-4548-a41b-a6df39ee5ac1","roots":{"1722":"102b2a55-6138-4dd5-85d2-17454c59beb1"}}];
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