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
      };var element = document.getElementById("ba9438e1-8263-49e7-99fb-0de3eb2a3b8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba9438e1-8263-49e7-99fb-0de3eb2a3b8c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"457ebf7b-6f9f-487f-9fdc-5b08ece1766e":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1862","type":"Line"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"1864","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"]]},"id":"1820","type":"HoverTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1863","type":"Line"},{"attributes":{"data_source":{"id":"1889","type":"ColumnDataSource"},"glyph":{"id":"1892","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1893","type":"Text"},"selection_glyph":null,"view":{"id":"1895","type":"CDSView"}},"id":"1894","type":"GlyphRenderer"},{"attributes":{},"id":"1831","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1822","subtype":"Figure","type":"Plot"},"ticker":{"id":"1831","type":"BasicTicker"}},"id":"1834","type":"Grid"},{"attributes":{"data_source":{"id":"1858","type":"ColumnDataSource"},"glyph":{"id":"1861","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1863","type":"Line"},"nonselection_glyph":{"id":"1862","type":"Line"},"selection_glyph":null,"view":{"id":"1865","type":"CDSView"}},"id":"1864","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Measles In the U.S. by Year"},"id":"1821","type":"Title"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1883","type":"Text"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1893","type":"Text"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"1854","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1822","subtype":"Figure","type":"Plot"},"ticker":{"id":"1831","type":"BasicTicker"}},"id":"1830","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1869","type":"ColumnDataSource"},"glyph":{"id":"1872","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1873","type":"Text"},"selection_glyph":null,"view":{"id":"1875","type":"CDSView"}},"id":"1874","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1830","type":"LinearAxis"}],"left":[{"id":"1835","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"1830","type":"LinearAxis"},{"id":"1834","type":"Grid"},{"id":"1835","type":"LinearAxis"},{"id":"1839","type":"Grid"},{"id":"1849","type":"BoxAnnotation"},{"id":"1864","type":"GlyphRenderer"},{"id":"1868","type":"Span"},{"id":"1874","type":"GlyphRenderer"},{"id":"1878","type":"Span"},{"id":"1884","type":"GlyphRenderer"},{"id":"1888","type":"Span"},{"id":"1894","type":"GlyphRenderer"},{"id":"1898","type":"Span"},{"id":"1904","type":"GlyphRenderer"}],"title":{"id":"1821","type":"Title"},"toolbar":{"id":"1845","type":"Toolbar"},"x_range":{"id":"1818","type":"Range1d"},"x_scale":{"id":"1826","type":"LinearScale"},"y_range":{"id":"1819","type":"Range1d"},"y_scale":{"id":"1828","type":"LinearScale"}},"id":"1822","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1858","type":"ColumnDataSource"}},"id":"1865","type":"CDSView"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_color":{"value":"blue"},"line_width":{"value":3},"location":2003,"plot":null},"id":"1898","type":"Span"},{"attributes":{},"id":"1836","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1822","subtype":"Figure","type":"Plot"},"ticker":{"id":"1836","type":"BasicTicker"}},"id":"1839","type":"Grid"},{"attributes":{},"id":"1900","type":"Selection"},{"attributes":{},"id":"1854","type":"BasicTickFormatter"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"1868","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1820","type":"HoverTool"},{"id":"1840","type":"SaveTool"},{"id":"1841","type":"PanTool"},{"id":"1842","type":"WheelZoomTool"},{"id":"1843","type":"BoxZoomTool"},{"id":"1844","type":"ResetTool"}]},"id":"1845","type":"Toolbar"},{"attributes":{"callback":null,"end":30435.47000000004,"reset_end":30435.47000000004,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"1819","type":"Range1d"},{"attributes":{"source":{"id":"1879","type":"ColumnDataSource"}},"id":"1885","type":"CDSView"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1902","type":"Text"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1849","type":"BoxAnnotation"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1873","type":"Text"},{"attributes":{"callback":null,"data":{"text":["Zero Cases"],"x":[2002],"y":[27000]},"selected":{"id":"1900","type":"Selection"},"selection_policy":{"id":"1920","type":"UnionRenderers"}},"id":"1899","type":"ColumnDataSource"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"1878","type":"Span"},{"attributes":{},"id":"1856","type":"BasicTickFormatter"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1903","type":"Text"},{"attributes":{"data_source":{"id":"1879","type":"ColumnDataSource"},"glyph":{"id":"1882","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1883","type":"Text"},"selection_glyph":null,"view":{"id":"1885","type":"CDSView"}},"id":"1884","type":"GlyphRenderer"},{"attributes":{},"id":"1890","type":"Selection"},{"attributes":{"axis_label":"Cases","bounds":"auto","formatter":{"id":"1856","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1822","subtype":"Figure","type":"Plot"},"ticker":{"id":"1836","type":"BasicTicker"}},"id":"1835","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1849","type":"BoxAnnotation"}},"id":"1843","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1899","type":"ColumnDataSource"},"glyph":{"id":"1902","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1903","type":"Text"},"selection_glyph":null,"view":{"id":"1905","type":"CDSView"}},"id":"1904","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1869","type":"ColumnDataSource"}},"id":"1875","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["Year of the Most Cases"],"x":[1935],"y":[27000]},"selected":{"id":"1890","type":"Selection"},"selection_policy":{"id":"1918","type":"UnionRenderers"}},"id":"1889","type":"ColumnDataSource"},{"attributes":{},"id":"1844","type":"ResetTool"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"red"},"line_width":{"value":3},"location":1934,"plot":null},"id":"1888","type":"Span"},{"attributes":{"source":{"id":"1899","type":"ColumnDataSource"}},"id":"1905","type":"CDSView"},{"attributes":{},"id":"1880","type":"Selection"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1882","type":"Text"},{"attributes":{},"id":"1912","type":"UnionRenderers"},{"attributes":{},"id":"1828","type":"LinearScale"},{"attributes":{},"id":"1842","type":"WheelZoomTool"},{"attributes":{},"id":"1914","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"KlyPwhWH0EAerkfheo7HQF7hehSOd8xAMlyPwtUhzkBN4XoUjkjMQBSuR+Ea/cZAU+F6FN643UD91qNwvX7YQJuZmZn5U8hAgutRuF7cxUCawvUoDM7ZQOZRuB7lc9RA18zMzGxJyUAAAAAAgM7VQK5H4XoUeNRATLgehUur1kDC9ShcHxbTQDYzMzNzTbVABwAAAEAl00CvcD0K927CQLz1KFwPQs5AASlcj1KB1UBOuB6F63LCQA+uR+F6YNFAsszMzHxB0kCB61G4nnDLQFGPwvU4BtRAPDMzM1MJ0kBiZmZmZnzSQOJ6FK5nwNBAfutRuN761ECH61G4XovKQGCPwvUo5MpAtZmZmfmyxkAIKVyPIhvNQIrrUbh+ucVA9KNwPSq0yUDrUbgepZ/CQA6uR+F6JLVABoXrUbhhnUDgUbgehbd+QClcj8L1TIJAz8zMzMxbkUAuMzMzM6qdQEg9CtejiohAc8L1KFzVhkBAuB6F6yl6QBNcj8L15oRA8dajcD2ikEDNo3A9CgqRQFtmZmZmSoNAZI/C9ShscEA3MzMzM8txQDQzMzMzcz9AsvUoXI9CMUAaXI/C9SgvQCCF61G4XkdAZ2ZmZmbmT0DJ9Shcj/JYQLFH4XoUnlNAJVyPwvXISUBzPQrXo9BnQBKuR+F6TG1ABQAAAADIYEAL16NwPco8QBuF61G4niFAf+tRuB6FM0D8//////8UQFyPwvUonDhApnA9CtejO0CD61G4HoUJQHQ9CtejcO0/aGZmZmZm+j+lcD0K16P4P9ijcD0K19M/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"1859","type":"Selection"},"selection_policy":{"id":"1912","type":"UnionRenderers"}},"id":"1858","type":"ColumnDataSource"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1872","type":"Text"},{"attributes":{"source":{"id":"1889","type":"ColumnDataSource"}},"id":"1895","type":"CDSView"},{"attributes":{},"id":"1916","type":"UnionRenderers"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1818","type":"Range1d"},{"attributes":{},"id":"1859","type":"Selection"},{"attributes":{},"id":"1918","type":"UnionRenderers"},{"attributes":{},"id":"1826","type":"LinearScale"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"1880","type":"Selection"},"selection_policy":{"id":"1916","type":"UnionRenderers"}},"id":"1879","type":"ColumnDataSource"},{"attributes":{},"id":"1870","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"1870","type":"Selection"},"selection_policy":{"id":"1914","type":"UnionRenderers"}},"id":"1869","type":"ColumnDataSource"},{"attributes":{},"id":"1920","type":"UnionRenderers"},{"attributes":{},"id":"1841","type":"PanTool"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1892","type":"Text"},{"attributes":{},"id":"1840","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1861","type":"Line"}],"root_ids":["1822"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"457ebf7b-6f9f-487f-9fdc-5b08ece1766e","roots":{"1822":"ba9438e1-8263-49e7-99fb-0de3eb2a3b8c"}}];
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