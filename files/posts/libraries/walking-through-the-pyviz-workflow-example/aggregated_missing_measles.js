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
      };var element = document.getElementById("7547e433-353d-4933-97c1-656be26b6fbf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7547e433-353d-4933-97c1-656be26b6fbf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fb145f2c-131c-441a-b15d-5e10f3ffd105":{"roots":{"references":[{"attributes":{},"id":"30345","type":"LinearScale"},{"attributes":{},"id":"30350","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Missing Measles Reports by Year","text_font_size":{"value":"18pt"}},"id":"30340","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"30377","type":"Line"},{"attributes":{},"id":"30374","type":"Selection"},{"attributes":{},"id":"30347","type":"LinearScale"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"count":[499,465,476,450,502,390,326,395,528,509,297,287,381,347,252,396,392,344,286,361,583,229,311,298,329,383,117,305,178,269,298,473,383,383,346,578,379,60,118,54,119,321,178,158,246,288,405,453,330,323,416,339,548,1146,1339,1927,1693,1566,1171,1393,1603,965,813,1253,1567,1954,1605,1777,1534,1755,2111,2150,2047,1867,2418,2652,2652,2652,2652,2652,2652,2652,2652,2652]},"selected":{"id":"30374","type":"Selection"},"selection_policy":{"id":"30391","type":"UnionRenderers"}},"id":"30373","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30339","type":"HoverTool"},{"id":"30359","type":"SaveTool"},{"id":"30360","type":"PanTool"},{"id":"30361","type":"WheelZoomTool"},{"id":"30362","type":"BoxZoomTool"},{"id":"30363","type":"ResetTool"}]},"id":"30364","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"30341","subtype":"Figure","type":"Plot"},"ticker":{"id":"30350","type":"BasicTicker"}},"id":"30353","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"30378","type":"Line"},{"attributes":{"overlay":{"id":"30368","type":"BoxAnnotation"}},"id":"30362","type":"BoxZoomTool"},{"attributes":{"axis_label":"count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"30384","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"30341","subtype":"Figure","type":"Plot"},"ticker":{"id":"30355","type":"BasicTicker"}},"id":"30354","type":"LinearAxis"},{"attributes":{},"id":"30391","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30373","type":"ColumnDataSource"},"glyph":{"id":"30376","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"30378","type":"Line"},"nonselection_glyph":{"id":"30377","type":"Line"},"selection_glyph":null,"view":{"id":"30380","type":"CDSView"}},"id":"30379","type":"GlyphRenderer"},{"attributes":{},"id":"30361","type":"WheelZoomTool"},{"attributes":{"source":{"id":"30373","type":"ColumnDataSource"}},"id":"30380","type":"CDSView"},{"attributes":{},"id":"30355","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"count"}},"id":"30376","type":"Line"},{"attributes":{},"id":"30360","type":"PanTool"},{"attributes":{},"id":"30382","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Missing Count","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"30382","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"30341","subtype":"Figure","type":"Plot"},"ticker":{"id":"30350","type":"BasicTicker"}},"id":"30349","type":"LinearAxis"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"30337","type":"Range1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"30341","subtype":"Figure","type":"Plot"},"ticker":{"id":"30355","type":"BasicTicker"}},"id":"30358","type":"Grid"},{"attributes":{},"id":"30384","type":"BasicTickFormatter"},{"attributes":{},"id":"30359","type":"SaveTool"},{"attributes":{"callback":null,"end":2652.0,"reset_end":2652.0,"reset_start":54.0,"start":54.0,"tags":[[["count","count",null]]]},"id":"30338","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30368","type":"BoxAnnotation"},{"attributes":{"callback":null,"formatters":{"Count":"numeral","Year":"numeral"},"mode":"vline","renderers":[{"id":"30379","type":"GlyphRenderer"}],"tooltips":[["Missing","@count{0,0}"],["Year","@Year{0}"]]},"id":"30339","type":"HoverTool"},{"attributes":{},"id":"30363","type":"ResetTool"},{"attributes":{"below":[{"id":"30349","type":"LinearAxis"}],"left":[{"id":"30354","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":800,"renderers":[{"id":"30349","type":"LinearAxis"},{"id":"30353","type":"Grid"},{"id":"30354","type":"LinearAxis"},{"id":"30358","type":"Grid"},{"id":"30368","type":"BoxAnnotation"},{"id":"30379","type":"GlyphRenderer"}],"title":{"id":"30340","type":"Title"},"toolbar":{"id":"30364","type":"Toolbar"},"x_range":{"id":"30337","type":"Range1d"},"x_scale":{"id":"30345","type":"LinearScale"},"y_range":{"id":"30338","type":"Range1d"},"y_scale":{"id":"30347","type":"LinearScale"}},"id":"30341","subtype":"Figure","type":"Plot"}],"root_ids":["30341"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"fb145f2c-131c-441a-b15d-5e10f3ffd105","roots":{"30341":"7547e433-353d-4933-97c1-656be26b6fbf"}}];
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