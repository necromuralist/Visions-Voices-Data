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
      };var element = document.getElementById("7a5f6d06-eede-4cf0-8881-6ddd5d408ca9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7a5f6d06-eede-4cf0-8881-6ddd5d408ca9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"de7bb4f9-6cee-4996-91ad-a27128c47a50":{"roots":{"references":[{"attributes":{},"id":"1847","type":"UnionRenderers"},{"attributes":{},"id":"1830","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1752","subtype":"Figure","type":"Plot"},"ticker":{"id":"1766","type":"BasicTicker"}},"id":"1769","type":"Grid"},{"attributes":{"plot":null,"text":"Measles In the U.S. by Year","text_font_size":{"value":"18pt"}},"id":"1751","type":"Title"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1812","type":"Text"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"1794","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"]]},"id":"1750","type":"HoverTool"},{"attributes":{},"id":"1786","type":"BasicTickFormatter"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1813","type":"Text"},{"attributes":{"data_source":{"id":"1799","type":"ColumnDataSource"},"glyph":{"id":"1802","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1803","type":"Text"},"selection_glyph":null,"view":{"id":"1805","type":"CDSView"}},"id":"1804","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1750","type":"HoverTool"},{"id":"1770","type":"SaveTool"},{"id":"1771","type":"PanTool"},{"id":"1772","type":"WheelZoomTool"},{"id":"1773","type":"BoxZoomTool"},{"id":"1774","type":"ResetTool"}]},"id":"1775","type":"Toolbar"},{"attributes":{"below":[{"id":"1760","type":"LinearAxis"}],"left":[{"id":"1765","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"1760","type":"LinearAxis"},{"id":"1764","type":"Grid"},{"id":"1765","type":"LinearAxis"},{"id":"1769","type":"Grid"},{"id":"1779","type":"BoxAnnotation"},{"id":"1794","type":"GlyphRenderer"},{"id":"1798","type":"Span"},{"id":"1804","type":"GlyphRenderer"},{"id":"1808","type":"Span"},{"id":"1814","type":"GlyphRenderer"},{"id":"1818","type":"Span"},{"id":"1824","type":"GlyphRenderer"},{"id":"1828","type":"Span"},{"id":"1834","type":"GlyphRenderer"}],"title":{"id":"1751","type":"Title"},"toolbar":{"id":"1775","type":"Toolbar"},"x_range":{"id":"1748","type":"Range1d"},"x_scale":{"id":"1756","type":"LinearScale"},"y_range":{"id":"1749","type":"Range1d"},"y_scale":{"id":"1758","type":"LinearScale"}},"id":"1752","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1789","type":"Selection"},{"attributes":{},"id":"1770","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1779","type":"BoxAnnotation"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1803","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1792","type":"Line"},{"attributes":{"callback":null,"data":{"text":["Zero Cases"],"x":[2002],"y":[27000]},"selected":{"id":"1830","type":"Selection"},"selection_policy":{"id":"1849","type":"UnionRenderers"}},"id":"1829","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1799","type":"ColumnDataSource"}},"id":"1805","type":"CDSView"},{"attributes":{"data_source":{"id":"1829","type":"ColumnDataSource"},"glyph":{"id":"1832","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1833","type":"Text"},"selection_glyph":null,"view":{"id":"1835","type":"CDSView"}},"id":"1834","type":"GlyphRenderer"},{"attributes":{},"id":"1771","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1791","type":"Line"},{"attributes":{"source":{"id":"1829","type":"ColumnDataSource"}},"id":"1835","type":"CDSView"},{"attributes":{},"id":"1772","type":"WheelZoomTool"},{"attributes":{},"id":"1849","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1788","type":"ColumnDataSource"},"glyph":{"id":"1791","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1793","type":"Line"},"nonselection_glyph":{"id":"1792","type":"Line"},"selection_glyph":null,"view":{"id":"1795","type":"CDSView"}},"id":"1794","type":"GlyphRenderer"},{"attributes":{},"id":"1843","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1779","type":"BoxAnnotation"}},"id":"1773","type":"BoxZoomTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1823","type":"Text"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1822","type":"Text"},{"attributes":{},"id":"1774","type":"ResetTool"},{"attributes":{},"id":"1845","type":"UnionRenderers"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"1808","type":"Span"},{"attributes":{},"id":"1841","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1819","type":"ColumnDataSource"},"glyph":{"id":"1822","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1823","type":"Text"},"selection_glyph":null,"view":{"id":"1825","type":"CDSView"}},"id":"1824","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":30435.47000000004,"reset_end":30435.47000000004,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"1749","type":"Range1d"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1793","type":"Line"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1748","type":"Range1d"},{"attributes":{"source":{"id":"1819","type":"ColumnDataSource"}},"id":"1825","type":"CDSView"},{"attributes":{},"id":"1820","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"1810","type":"Selection"},"selection_policy":{"id":"1845","type":"UnionRenderers"}},"id":"1809","type":"ColumnDataSource"},{"attributes":{},"id":"1810","type":"Selection"},{"attributes":{"source":{"id":"1788","type":"ColumnDataSource"}},"id":"1795","type":"CDSView"},{"attributes":{},"id":"1756","type":"LinearScale"},{"attributes":{},"id":"1800","type":"Selection"},{"attributes":{},"id":"1758","type":"LinearScale"},{"attributes":{},"id":"1784","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1809","type":"ColumnDataSource"}},"id":"1815","type":"CDSView"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1784","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1752","subtype":"Figure","type":"Plot"},"ticker":{"id":"1761","type":"BasicTicker"}},"id":"1760","type":"LinearAxis"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"1798","type":"Span"},{"attributes":{"data_source":{"id":"1809","type":"ColumnDataSource"},"glyph":{"id":"1812","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1813","type":"Text"},"selection_glyph":null,"view":{"id":"1815","type":"CDSView"}},"id":"1814","type":"GlyphRenderer"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_color":{"value":"blue"},"line_width":{"value":3},"location":2003,"plot":null},"id":"1828","type":"Span"},{"attributes":{},"id":"1761","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"text":["Year of the Most Cases"],"x":[1935],"y":[27000]},"selected":{"id":"1820","type":"Selection"},"selection_policy":{"id":"1847","type":"UnionRenderers"}},"id":"1819","type":"ColumnDataSource"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1832","type":"Text"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"KlyPwhWH0EAerkfheo7HQF7hehSOd8xAMlyPwtUhzkBN4XoUjkjMQBSuR+Ea/cZAU+F6FN643UD91qNwvX7YQJuZmZn5U8hAgutRuF7cxUCawvUoDM7ZQOZRuB7lc9RA18zMzGxJyUAAAAAAgM7VQK5H4XoUeNRATLgehUur1kDC9ShcHxbTQDYzMzNzTbVABwAAAEAl00CvcD0K927CQLz1KFwPQs5AASlcj1KB1UBOuB6F63LCQA+uR+F6YNFAsszMzHxB0kCB61G4nnDLQFGPwvU4BtRAPDMzM1MJ0kBiZmZmZnzSQOJ6FK5nwNBAfutRuN761ECH61G4XovKQGCPwvUo5MpAtZmZmfmyxkAIKVyPIhvNQIrrUbh+ucVA9KNwPSq0yUDrUbgepZ/CQA6uR+F6JLVABoXrUbhhnUDgUbgehbd+QClcj8L1TIJAz8zMzMxbkUAuMzMzM6qdQEg9CtejiohAc8L1KFzVhkBAuB6F6yl6QBNcj8L15oRA8dajcD2ikEDNo3A9CgqRQFtmZmZmSoNAZI/C9ShscEA3MzMzM8txQDQzMzMzcz9AsvUoXI9CMUAaXI/C9SgvQCCF61G4XkdAZ2ZmZmbmT0DJ9Shcj/JYQLFH4XoUnlNAJVyPwvXISUBzPQrXo9BnQBKuR+F6TG1ABQAAAADIYEAL16NwPco8QBuF61G4niFAf+tRuB6FM0D8//////8UQFyPwvUonDhApnA9CtejO0CD61G4HoUJQHQ9CtejcO0/aGZmZmZm+j+lcD0K16P4P9ijcD0K19M/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"1789","type":"Selection"},"selection_policy":{"id":"1841","type":"UnionRenderers"}},"id":"1788","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"1800","type":"Selection"},"selection_policy":{"id":"1843","type":"UnionRenderers"}},"id":"1799","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1752","subtype":"Figure","type":"Plot"},"ticker":{"id":"1761","type":"BasicTicker"}},"id":"1764","type":"Grid"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1833","type":"Text"},{"attributes":{"axis_label":"Cases","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1786","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1752","subtype":"Figure","type":"Plot"},"ticker":{"id":"1766","type":"BasicTicker"}},"id":"1765","type":"LinearAxis"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1802","type":"Text"},{"attributes":{},"id":"1766","type":"BasicTicker"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"red"},"line_width":{"value":3},"location":1934,"plot":null},"id":"1818","type":"Span"}],"root_ids":["1752"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"de7bb4f9-6cee-4996-91ad-a27128c47a50","roots":{"1752":"7a5f6d06-eede-4cf0-8881-6ddd5d408ca9"}}];
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