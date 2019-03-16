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
      };var element = document.getElementById("332e76e1-349f-46d7-980d-2436faa41ad9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '332e76e1-349f-46d7-980d-2436faa41ad9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7649b702-28cc-4c56-b4a7-a6c414f89d35":{"roots":{"references":[{"attributes":{},"id":"1348","type":"LinearScale"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"1388","type":"Span"},{"attributes":{},"id":"1420","type":"Selection"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"1398","type":"Span"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_color":{"value":"blue"},"line_width":{"value":3},"location":2003,"plot":null},"id":"1418","type":"Span"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"1375","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1342","subtype":"Figure","type":"Plot"},"ticker":{"id":"1351","type":"BasicTicker"}},"id":"1350","type":"LinearAxis"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1402","type":"Text"},{"attributes":{"callback":null,"data":{"text":["Zero Cases"],"x":[2002],"y":[27000]},"selected":{"id":"1420","type":"Selection"},"selection_policy":{"id":"1440","type":"UnionRenderers"}},"id":"1419","type":"ColumnDataSource"},{"attributes":{},"id":"1379","type":"Selection"},{"attributes":{},"id":"1351","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"1400","type":"Selection"},"selection_policy":{"id":"1436","type":"UnionRenderers"}},"id":"1399","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"1390","type":"Selection"},"selection_policy":{"id":"1434","type":"UnionRenderers"}},"id":"1389","type":"ColumnDataSource"},{"attributes":{},"id":"1400","type":"Selection"},{"attributes":{},"id":"1440","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1342","subtype":"Figure","type":"Plot"},"ticker":{"id":"1351","type":"BasicTicker"}},"id":"1354","type":"Grid"},{"attributes":{},"id":"1432","type":"UnionRenderers"},{"attributes":{"axis_label":"Cases","bounds":"auto","formatter":{"id":"1377","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1342","subtype":"Figure","type":"Plot"},"ticker":{"id":"1356","type":"BasicTicker"}},"id":"1355","type":"LinearAxis"},{"attributes":{},"id":"1375","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Measles In the U.S. by Year"},"id":"1341","type":"Title"},{"attributes":{},"id":"1356","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1381","type":"Line"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1422","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1342","subtype":"Figure","type":"Plot"},"ticker":{"id":"1356","type":"BasicTicker"}},"id":"1359","type":"Grid"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1403","type":"Text"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1423","type":"Text"},{"attributes":{},"id":"1438","type":"UnionRenderers"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"1384","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"]]},"id":"1340","type":"HoverTool"},{"attributes":{},"id":"1436","type":"UnionRenderers"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1413","type":"Text"},{"attributes":{},"id":"1434","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1419","type":"ColumnDataSource"},"glyph":{"id":"1422","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1423","type":"Text"},"selection_glyph":null,"view":{"id":"1425","type":"CDSView"}},"id":"1424","type":"GlyphRenderer"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1392","type":"Text"},{"attributes":{"below":[{"id":"1350","type":"LinearAxis"}],"left":[{"id":"1355","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"1350","type":"LinearAxis"},{"id":"1354","type":"Grid"},{"id":"1355","type":"LinearAxis"},{"id":"1359","type":"Grid"},{"id":"1369","type":"BoxAnnotation"},{"id":"1384","type":"GlyphRenderer"},{"id":"1388","type":"Span"},{"id":"1394","type":"GlyphRenderer"},{"id":"1398","type":"Span"},{"id":"1404","type":"GlyphRenderer"},{"id":"1408","type":"Span"},{"id":"1414","type":"GlyphRenderer"},{"id":"1418","type":"Span"},{"id":"1424","type":"GlyphRenderer"}],"title":{"id":"1341","type":"Title"},"toolbar":{"id":"1365","type":"Toolbar"},"x_range":{"id":"1338","type":"Range1d"},"x_scale":{"id":"1346","type":"LinearScale"},"y_range":{"id":"1339","type":"Range1d"},"y_scale":{"id":"1348","type":"LinearScale"}},"id":"1342","subtype":"Figure","type":"Plot"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1393","type":"Text"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1412","type":"Text"},{"attributes":{"source":{"id":"1419","type":"ColumnDataSource"}},"id":"1425","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1340","type":"HoverTool"},{"id":"1360","type":"SaveTool"},{"id":"1361","type":"PanTool"},{"id":"1362","type":"WheelZoomTool"},{"id":"1363","type":"BoxZoomTool"},{"id":"1364","type":"ResetTool"}]},"id":"1365","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1383","type":"Line"},{"attributes":{},"id":"1360","type":"SaveTool"},{"attributes":{"data_source":{"id":"1389","type":"ColumnDataSource"},"glyph":{"id":"1392","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1393","type":"Text"},"selection_glyph":null,"view":{"id":"1395","type":"CDSView"}},"id":"1394","type":"GlyphRenderer"},{"attributes":{},"id":"1377","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1382","type":"Line"},{"attributes":{},"id":"1361","type":"PanTool"},{"attributes":{"data_source":{"id":"1378","type":"ColumnDataSource"},"glyph":{"id":"1381","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1383","type":"Line"},"nonselection_glyph":{"id":"1382","type":"Line"},"selection_glyph":null,"view":{"id":"1385","type":"CDSView"}},"id":"1384","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1369","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1399","type":"ColumnDataSource"},"glyph":{"id":"1402","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1403","type":"Text"},"selection_glyph":null,"view":{"id":"1405","type":"CDSView"}},"id":"1404","type":"GlyphRenderer"},{"attributes":{},"id":"1362","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1369","type":"BoxAnnotation"}},"id":"1363","type":"BoxZoomTool"},{"attributes":{},"id":"1364","type":"ResetTool"},{"attributes":{"source":{"id":"1389","type":"ColumnDataSource"}},"id":"1395","type":"CDSView"},{"attributes":{"source":{"id":"1399","type":"ColumnDataSource"}},"id":"1405","type":"CDSView"},{"attributes":{"source":{"id":"1378","type":"ColumnDataSource"}},"id":"1385","type":"CDSView"},{"attributes":{"callback":null,"end":30435.47000000004,"reset_end":30435.47000000004,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"1339","type":"Range1d"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1338","type":"Range1d"},{"attributes":{"data_source":{"id":"1409","type":"ColumnDataSource"},"glyph":{"id":"1412","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1413","type":"Text"},"selection_glyph":null,"view":{"id":"1415","type":"CDSView"}},"id":"1414","type":"GlyphRenderer"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"red"},"line_width":{"value":3},"location":1934,"plot":null},"id":"1408","type":"Span"},{"attributes":{"source":{"id":"1409","type":"ColumnDataSource"}},"id":"1415","type":"CDSView"},{"attributes":{},"id":"1390","type":"Selection"},{"attributes":{},"id":"1410","type":"Selection"},{"attributes":{},"id":"1346","type":"LinearScale"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"KlyPwhWH0EAerkfheo7HQF7hehSOd8xAMlyPwtUhzkBN4XoUjkjMQBSuR+Ea/cZAU+F6FN643UD91qNwvX7YQJuZmZn5U8hAgutRuF7cxUCawvUoDM7ZQOZRuB7lc9RA18zMzGxJyUAAAAAAgM7VQK5H4XoUeNRATLgehUur1kDC9ShcHxbTQDYzMzNzTbVABwAAAEAl00CvcD0K927CQLz1KFwPQs5AASlcj1KB1UBOuB6F63LCQA+uR+F6YNFAsszMzHxB0kCB61G4nnDLQFGPwvU4BtRAPDMzM1MJ0kBiZmZmZnzSQOJ6FK5nwNBAfutRuN761ECH61G4XovKQGCPwvUo5MpAtZmZmfmyxkAIKVyPIhvNQIrrUbh+ucVA9KNwPSq0yUDrUbgepZ/CQA6uR+F6JLVABoXrUbhhnUDgUbgehbd+QClcj8L1TIJAz8zMzMxbkUAuMzMzM6qdQEg9CtejiohAc8L1KFzVhkBAuB6F6yl6QBNcj8L15oRA8dajcD2ikEDNo3A9CgqRQFtmZmZmSoNAZI/C9ShscEA3MzMzM8txQDQzMzMzcz9AsvUoXI9CMUAaXI/C9SgvQCCF61G4XkdAZ2ZmZmbmT0DJ9Shcj/JYQLFH4XoUnlNAJVyPwvXISUBzPQrXo9BnQBKuR+F6TG1ABQAAAADIYEAL16NwPco8QBuF61G4niFAf+tRuB6FM0D8//////8UQFyPwvUonDhApnA9CtejO0CD61G4HoUJQHQ9CtejcO0/aGZmZmZm+j+lcD0K16P4P9ijcD0K19M/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"1379","type":"Selection"},"selection_policy":{"id":"1432","type":"UnionRenderers"}},"id":"1378","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Year of the Most Cases"],"x":[1935],"y":[27000]},"selected":{"id":"1410","type":"Selection"},"selection_policy":{"id":"1438","type":"UnionRenderers"}},"id":"1409","type":"ColumnDataSource"}],"root_ids":["1342"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7649b702-28cc-4c56-b4a7-a6c414f89d35","roots":{"1342":"332e76e1-349f-46d7-980d-2436faa41ad9"}}];
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