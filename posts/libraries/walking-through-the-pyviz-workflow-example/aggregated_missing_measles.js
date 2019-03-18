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
      };var element = document.getElementById("84285ed8-6ae8-4029-b7fa-98b877b35529");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '84285ed8-6ae8-4029-b7fa-98b877b35529' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"db71be97-6d7b-4346-904d-b5f3aeb366a2":{"roots":{"references":[{"attributes":{},"id":"1205","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1218","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1191","subtype":"Figure","type":"Plot"},"ticker":{"id":"1205","type":"BasicTicker"}},"id":"1208","type":"Grid"},{"attributes":{},"id":"1231","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1187","type":"Range1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"1226","type":"Line"},{"attributes":{},"id":"1224","type":"Selection"},{"attributes":{},"id":"1197","type":"LinearScale"},{"attributes":{"callback":null,"end":2652.0,"reset_end":2652.0,"reset_start":54.0,"start":54.0,"tags":[[["count","count",null]]]},"id":"1188","type":"Range1d"},{"attributes":{"axis_label":"count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1233","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1191","subtype":"Figure","type":"Plot"},"ticker":{"id":"1205","type":"BasicTicker"}},"id":"1204","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1189","type":"HoverTool"},{"id":"1209","type":"SaveTool"},{"id":"1210","type":"PanTool"},{"id":"1211","type":"WheelZoomTool"},{"id":"1212","type":"BoxZoomTool"},{"id":"1213","type":"ResetTool"}]},"id":"1214","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"1227","type":"Line"},{"attributes":{"below":[{"id":"1199","type":"LinearAxis"}],"left":[{"id":"1204","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1000,"renderers":[{"id":"1199","type":"LinearAxis"},{"id":"1203","type":"Grid"},{"id":"1204","type":"LinearAxis"},{"id":"1208","type":"Grid"},{"id":"1218","type":"BoxAnnotation"},{"id":"1229","type":"GlyphRenderer"}],"title":{"id":"1190","type":"Title"},"toolbar":{"id":"1214","type":"Toolbar"},"x_range":{"id":"1187","type":"Range1d"},"x_scale":{"id":"1195","type":"LinearScale"},"y_range":{"id":"1188","type":"Range1d"},"y_scale":{"id":"1197","type":"LinearScale"}},"id":"1191","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1209","type":"SaveTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"1228","type":"Line"},{"attributes":{"axis_label":"Missing Count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"1231","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1191","subtype":"Figure","type":"Plot"},"ticker":{"id":"1200","type":"BasicTicker"}},"id":"1199","type":"LinearAxis"},{"attributes":{},"id":"1210","type":"PanTool"},{"attributes":{"plot":null,"text":"Missing Measles Reports by Year","text_font_size":{"value":"18pt"}},"id":"1190","type":"Title"},{"attributes":{},"id":"1200","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1223","type":"ColumnDataSource"},"glyph":{"id":"1226","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1228","type":"Line"},"nonselection_glyph":{"id":"1227","type":"Line"},"selection_glyph":null,"view":{"id":"1230","type":"CDSView"}},"id":"1229","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1191","subtype":"Figure","type":"Plot"},"ticker":{"id":"1200","type":"BasicTicker"}},"id":"1203","type":"Grid"},{"attributes":{},"id":"1211","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1223","type":"ColumnDataSource"}},"id":"1230","type":"CDSView"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"count":[499,465,476,450,502,390,326,395,528,509,297,287,381,347,252,396,392,344,286,361,583,229,311,298,329,383,117,305,178,269,298,473,383,383,346,578,379,60,118,54,119,321,178,158,246,288,405,453,330,323,416,339,548,1146,1339,1927,1693,1566,1171,1393,1603,965,813,1253,1567,1954,1605,1777,1534,1755,2111,2150,2047,1867,2418,2652,2652,2652,2652,2652,2652,2652,2652,2652]},"selected":{"id":"1224","type":"Selection"},"selection_policy":{"id":"1240","type":"UnionRenderers"}},"id":"1223","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1218","type":"BoxAnnotation"}},"id":"1212","type":"BoxZoomTool"},{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"numeral"},"mode":"vline","renderers":[{"id":"1229","type":"GlyphRenderer"}],"tooltips":[["Missing","@count{0,0}"],["Year","@Year{0}"]]},"id":"1189","type":"HoverTool"},{"attributes":{},"id":"1240","type":"UnionRenderers"},{"attributes":{},"id":"1213","type":"ResetTool"},{"attributes":{},"id":"1233","type":"BasicTickFormatter"},{"attributes":{},"id":"1195","type":"LinearScale"}],"root_ids":["1191"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"db71be97-6d7b-4346-904d-b5f3aeb366a2","roots":{"1191":"84285ed8-6ae8-4029-b7fa-98b877b35529"}}];
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