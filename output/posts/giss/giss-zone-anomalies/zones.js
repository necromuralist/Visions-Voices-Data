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
      };var element = document.getElementById("5e2b6da8-5c1e-4d90-a7f7-f74e6cdf49ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5e2b6da8-5c1e-4d90-a7f7-f74e6cdf49ec' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d44dba46-572a-48c2-86b6-19baa28a75f4":{"roots":{"references":[{"attributes":{"callback":null,"data":{"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],"distance_from_normal":{"__ndarray__":"uB6F61G4rr97FK5H4XqEv3sUrkfheoS/uB6F61G4rr8zMzMzMzPDv7gehetRuM6/uB6F61G4zr8zMzMzMzPTv+xRuB6F68G/uB6F61G4rr8fhetRuB7Vv+F6FK5H4cq/exSuR+F6xL9SuB6F61HIv7gehetRuM6/exSuR+F6xL+4HoXrUbiev+xRuB6F67G/7FG4HoXr0b97FK5H4XrEvwrXo3A9Cre/4XoUrkfhyr8AAAAAAADQv/YoXI/C9di/XI/C9Shc37+kcD0K16PQv3E9CtejcM2/exSuR+F61L/hehSuR+Hav7gehetRuN6/hetRuB6F278UrkfhehTevwAAAAAAANC/SOF6FK5H0b+4HoXrUbi+v6RwPQrXo8C/16NwPQrX079mZmZmZmbWv5qZmZmZmcm/mpmZmZmZyb8AAAAAAADQv+xRuB6F69G/MzMzMzMz078zMzMzMzPTv2ZmZmZmZta/MzMzMzMz07+amZmZmZnJv4/C9Shcj9K/MzMzMzMz079SuB6F61HYv4/C9Shcj9K/cT0K16Nwzb9I4XoUrkfRvx+F61G4HtW/SOF6FK5H0b97FK5H4XrUv+xRuB6F69G/mpmZmZmZyb/hehSuR+HKvzMzMzMzM8O/7FG4HoXrsT8zMzMzMzPDPwAAAAAAAAAAexSuR+F6lL8zMzMzMzPDPwrXo3A9Crc/w/UoXI/Cxb/sUbgehevBv5qZmZmZmcm/CtejcD0Kx7+amZmZmZnJv8P1KFyPwsW/uB6F61G4nr97FK5H4Xq0vwAAAAAAANC/mpmZmZmZyb97FK5H4XrEv3sUrkfheqQ/uB6F61G4nr+4HoXrUbiuv7gehetRuL6/exSuR+F6lD97FK5H4Xq0v3sUrkfhepS/mpmZmZmZyb97FK5H4Xq0vwrXo3A9Cre/exSuR+F6tL8K16NwPQq3vzMzMzMzM8M/CtejcD0Ktz+4HoXrUbievylcj8L1KMw/KVyPwvUozD+4HoXrUbieP3sUrkfhepQ/AAAAAAAAAABxPQrXo3DNPylcj8L1KLw/uB6F61G4zj9SuB6F61HYP0jhehSuR9E/KVyPwvUozD9SuB6F61HYP4/C9Shcj9I/AAAAAAAA0D+4HoXrUbjOPz0K16NwPdo/KVyPwvUo3D+PwvUoXI/SP65H4XoUrtc/PQrXo3A92j97FK5H4XrUP4/C9Shcj9I/pHA9Ctej0D/Xo3A9CtfTP/YoXI/C9dg/PQrXo3A92j+kcD0K16PgPzMzMzMzM9M/MzMzMzMz0z+F61G4HoXbP0jhehSuR+E/XI/C9Shc3z+amZmZmZnZP1K4HoXrUeA/zczMzMzM3D9xPQrXo3DdP/YoXI/C9dg/PQrXo3A94j/2KFyPwvXgP3E9CtejcN0/FK5H4XoU3j9I4XoUrkfhP+xRuB6F6+E/hetRuB6F4z+4HoXrUbjmP8P1KFyPwuU/H4XrUbge5T8=","dtype":"float64","shape":[139]}},"selected":{"id":"1093","type":"Selection"},"selection_policy":{"id":"1115","type":"UnionRenderers"}},"id":"1092","type":"ColumnDataSource"},{"attributes":{},"id":"1103","type":"BasicTickFormatter"},{"attributes":{},"id":"1074","type":"BasicTicker"},{"attributes":{"callback":null,"formatters":{"difference_from_normal":"numeral"},"mode":"vline","renderers":[{"id":"1098","type":"GlyphRenderer"}],"tooltips":[["Year","@Year"],["Difference from Normal","@difference_from_normal"]]},"id":"1058","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1058","type":"HoverTool"},{"id":"1078","type":"SaveTool"},{"id":"1079","type":"PanTool"},{"id":"1080","type":"WheelZoomTool"},{"id":"1081","type":"BoxZoomTool"},{"id":"1082","type":"ResetTool"}]},"id":"1083","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1060","subtype":"Figure","type":"Plot"},"ticker":{"id":"1074","type":"BasicTicker"}},"id":"1077","type":"Grid"},{"attributes":{},"id":"1101","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1092","type":"ColumnDataSource"},"glyph":{"id":"1095","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1097","type":"Line"},"nonselection_glyph":{"id":"1096","type":"Line"},"selection_glyph":null,"view":{"id":"1099","type":"CDSView"}},"id":"1098","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"location: 24N-44N"},"id":"1059","type":"Title"},{"attributes":{"source":{"id":"1092","type":"ColumnDataSource"}},"id":"1099","type":"CDSView"},{"attributes":{},"id":"1093","type":"Selection"},{"attributes":{},"id":"1064","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"distance_from_normal"}},"id":"1096","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"distance_from_normal"}},"id":"1097","type":"Line"},{"attributes":{},"id":"1078","type":"SaveTool"},{"attributes":{},"id":"1066","type":"LinearScale"},{"attributes":{},"id":"1115","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1087","type":"BoxAnnotation"},{"attributes":{},"id":"1079","type":"PanTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"1101","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1060","subtype":"Figure","type":"Plot"},"ticker":{"id":"1069","type":"BasicTicker"}},"id":"1068","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"distance_from_normal"}},"id":"1095","type":"Line"},{"attributes":{},"id":"1080","type":"WheelZoomTool"},{"attributes":{},"id":"1069","type":"BasicTicker"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"1056","type":"Range1d"},{"attributes":{"overlay":{"id":"1087","type":"BoxAnnotation"}},"id":"1081","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1060","subtype":"Figure","type":"Plot"},"ticker":{"id":"1069","type":"BasicTicker"}},"id":"1072","type":"Grid"},{"attributes":{"callback":null,"end":1.06,"reset_end":1.06,"reset_start":-0.59,"start":-0.59,"tags":[[["distance_from_normal","distance_from_normal",null]]]},"id":"1057","type":"Range1d"},{"attributes":{},"id":"1082","type":"ResetTool"},{"attributes":{"axis_label":"distance_from_normal","bounds":"auto","formatter":{"id":"1103","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1060","subtype":"Figure","type":"Plot"},"ticker":{"id":"1074","type":"BasicTicker"}},"id":"1073","type":"LinearAxis"},{"attributes":{"below":[{"id":"1068","type":"LinearAxis"}],"left":[{"id":"1073","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1100,"renderers":[{"id":"1068","type":"LinearAxis"},{"id":"1072","type":"Grid"},{"id":"1073","type":"LinearAxis"},{"id":"1077","type":"Grid"},{"id":"1087","type":"BoxAnnotation"},{"id":"1098","type":"GlyphRenderer"}],"title":{"id":"1059","type":"Title"},"toolbar":{"id":"1083","type":"Toolbar"},"x_range":{"id":"1056","type":"Range1d"},"x_scale":{"id":"1064","type":"LinearScale"},"y_range":{"id":"1057","type":"Range1d"},"y_scale":{"id":"1066","type":"LinearScale"}},"id":"1060","subtype":"Figure","type":"Plot"}],"root_ids":["1060"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d44dba46-572a-48c2-86b6-19baa28a75f4","roots":{"1060":"5e2b6da8-5c1e-4d90-a7f7-f74e6cdf49ec"}}];
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