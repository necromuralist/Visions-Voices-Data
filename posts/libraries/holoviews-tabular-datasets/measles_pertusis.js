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
      };var element = document.getElementById("e0b8360d-329e-4304-bd8b-0b14a6a80f57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0b8360d-329e-4304-bd8b-0b14a6a80f57' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9ea70c73-da88-497e-9b22-77c98ed7c8b6":{"roots":{"references":[{"attributes":{"callback":null,"renderers":[{"id":"3540","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"3500","type":"HoverTool"},{"attributes":{},"id":"3568","type":"PanTool"},{"attributes":{"below":[{"id":"3510","type":"LinearAxis"}],"left":[{"id":"3515","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"renderers":[{"id":"3510","type":"LinearAxis"},{"id":"3514","type":"Grid"},{"id":"3515","type":"LinearAxis"},{"id":"3519","type":"Grid"},{"id":"3529","type":"BoxAnnotation"},{"id":"3540","type":"GlyphRenderer"}],"title":{"id":"3501","type":"Title"},"toolbar":{"id":"3525","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3498","type":"Range1d"},"x_scale":{"id":"3506","type":"LinearScale"},"y_range":{"id":"3499","type":"Range1d"},"y_scale":{"id":"3508","type":"LinearScale"}},"id":"3502","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3553","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"3501","type":"Title"},{"attributes":{},"id":"3582","type":"Selection"},{"attributes":{},"id":"3506","type":"LinearScale"},{"attributes":{},"id":"3508","type":"LinearScale"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"3542","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3502","subtype":"Figure","type":"Plot"},"ticker":{"id":"3511","type":"BasicTicker"}},"id":"3510","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3538","type":"Line"},{"attributes":{},"id":"3511","type":"BasicTicker"},{"attributes":{},"id":"3599","type":"UnionRenderers"},{"attributes":{"children":[{"id":"3615","type":"ToolbarBox"},{"id":"3613","type":"Column"}]},"id":"3616","type":"Column"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3537","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"3585","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3502","subtype":"Figure","type":"Plot"},"ticker":{"id":"3511","type":"BasicTicker"}},"id":"3514","type":"Grid"},{"attributes":{},"id":"3542","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"3544","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3502","subtype":"Figure","type":"Plot"},"ticker":{"id":"3516","type":"BasicTicker"}},"id":"3515","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"3586","type":"Line"},{"attributes":{"data_source":{"id":"3534","type":"ColumnDataSource"},"glyph":{"id":"3537","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"3539","type":"Line"},"nonselection_glyph":{"id":"3538","type":"Line"},"selection_glyph":null,"view":{"id":"3541","type":"CDSView"}},"id":"3540","type":"GlyphRenderer"},{"attributes":{},"id":"3516","type":"BasicTicker"},{"attributes":{},"id":"3535","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"3502","subtype":"Figure","type":"Plot"},"ticker":{"id":"3516","type":"BasicTicker"}},"id":"3519","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3539","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3549","subtype":"Figure","type":"Plot"},"ticker":{"id":"3558","type":"BasicTicker"}},"id":"3561","type":"Grid"},{"attributes":{},"id":"3558","type":"BasicTicker"},{"attributes":{"children":[{"id":"3602","type":"Row"},{"id":"3612","type":"Row"}]},"id":"3613","type":"Column"},{"attributes":{},"id":"3520","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"Fl/xFV/xGUCbAjeDwwkdQN/JanljhCNArEPxOhSv9z+H61G4HoUVQD9XW7G/7BNA0Jly3nWVNEBui4MFJf0xQF9GzCoTmfc/6BbVt+Oh+j9Le67hFEgcQM2ZZjMATTtAZ2ZmZmZmIEBcLPnFks8fQGEyVTAqaSlABdIkQXMpN0CMXuK3bPsuQP+cNtBpQwpAhSgbfVlJIUBWQtWfJ5kNQGVsTsbmpDNA3X4ZVkRxEEDI9LKVwf8TQIFyByh3IDFADGJyBTG5E0Dy50km1qElQK0s8MoCzyFApG5F6lakEUDA/AzMz0AvQB5HNI0OP/0/fYv/2RpCI0AghetRuB4cQGkejubhaBlARzDR38lqEEDu1JFX6LYTQHfLCZaRBxFAxfUoXI8SBUBaaqVWamURQNeibzwJ1vY/LPnFkl9s9T/CTuzETuzUP3E9CtejcPM/UrgehetRuD+DKBt9WQnhPxobGxsbG9s/ZIIH80T92z8mBoGVQ4u8PxzHcRzHcZw/CtejcD0Knz9olYnM++/CPwAAAAAAAPh/Iv32deCckT8AAAAAAAD4f58S5ClBnpI/AAAAAAAAAAAAAAAAAAD4fwAAAAAAAPh/5o0RTPR3sj8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/IPuxH/uxnz9Jx6evLQ52PwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4f+1YgTDSjoU/hetRuB6F4z8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"3535","type":"Selection"},"selection_policy":{"id":"3599","type":"UnionRenderers"}},"id":"3534","type":"ColumnDataSource"},{"attributes":{},"id":"3571","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3500","type":"HoverTool"},{"id":"3520","type":"SaveTool"},{"id":"3521","type":"PanTool"},{"id":"3522","type":"WheelZoomTool"},{"id":"3523","type":"BoxZoomTool"},{"id":"3524","type":"ResetTool"}]},"id":"3525","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"3549","subtype":"Figure","type":"Plot"},"ticker":{"id":"3563","type":"BasicTicker"}},"id":"3566","type":"Grid"},{"attributes":{"source":{"id":"3581","type":"ColumnDataSource"}},"id":"3588","type":"CDSView"},{"attributes":{"below":[{"id":"3557","type":"LinearAxis"}],"left":[{"id":"3562","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"renderers":[{"id":"3557","type":"LinearAxis"},{"id":"3561","type":"Grid"},{"id":"3562","type":"LinearAxis"},{"id":"3566","type":"Grid"},{"id":"3576","type":"BoxAnnotation"},{"id":"3587","type":"GlyphRenderer"}],"title":{"id":"3548","type":"Title"},"toolbar":{"id":"3572","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3498","type":"Range1d"},"x_scale":{"id":"3553","type":"LinearScale"},"y_range":{"id":"3546","type":"Range1d"},"y_scale":{"id":"3555","type":"LinearScale"}},"id":"3549","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3555","type":"LinearScale"},{"attributes":{},"id":"3544","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3547","type":"HoverTool"},{"id":"3567","type":"SaveTool"},{"id":"3568","type":"PanTool"},{"id":"3569","type":"WheelZoomTool"},{"id":"3570","type":"BoxZoomTool"},{"id":"3571","type":"ResetTool"}]},"id":"3572","type":"Toolbar"},{"attributes":{},"id":"3589","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3529","type":"BoxAnnotation"},{"attributes":{},"id":"3563","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"3614","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3615","type":"ToolbarBox"},{"attributes":{"axis_label":"Pertusis Incidence","bounds":"auto","formatter":{"id":"3591","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3549","subtype":"Figure","type":"Plot"},"ticker":{"id":"3563","type":"BasicTicker"}},"id":"3562","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"3548","type":"Title"},{"attributes":{"source":{"id":"3534","type":"ColumnDataSource"}},"id":"3541","type":"CDSView"},{"attributes":{"overlay":{"id":"3529","type":"BoxAnnotation"}},"id":"3523","type":"BoxZoomTool"},{"attributes":{},"id":"3524","type":"ResetTool"},{"attributes":{},"id":"3609","type":"UnionRenderers"},{"attributes":{"children":[{"id":"3502","subtype":"Figure","type":"Plot"}]},"id":"3602","type":"Row"},{"attributes":{"callback":null,"end":1.4980392156862743,"reset_end":1.4980392156862743,"reset_start":0.003,"start":0.003,"tags":[[["pertussis","Pertusis Incidence",null]]]},"id":"3546","type":"Range1d"},{"attributes":{},"id":"3522","type":"WheelZoomTool"},{"attributes":{},"id":"3521","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3576","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"3576","type":"BoxAnnotation"}},"id":"3570","type":"BoxZoomTool"},{"attributes":{},"id":"3569","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"3581","type":"ColumnDataSource"},"glyph":{"id":"3584","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"3586","type":"Line"},"nonselection_glyph":{"id":"3585","type":"Line"},"selection_glyph":null,"view":{"id":"3588","type":"CDSView"}},"id":"3587","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"3500","type":"HoverTool"},{"id":"3520","type":"SaveTool"},{"id":"3521","type":"PanTool"},{"id":"3522","type":"WheelZoomTool"},{"id":"3523","type":"BoxZoomTool"},{"id":"3524","type":"ResetTool"},{"id":"3547","type":"HoverTool"},{"id":"3567","type":"SaveTool"},{"id":"3568","type":"PanTool"},{"id":"3569","type":"WheelZoomTool"},{"id":"3570","type":"BoxZoomTool"},{"id":"3571","type":"ResetTool"}]},"id":"3614","type":"ProxyToolbar"},{"attributes":{"callback":null,"end":11.351346153846153,"reset_end":11.351346153846153,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"3499","type":"Range1d"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"3498","type":"Range1d"},{"attributes":{},"id":"3567","type":"SaveTool"},{"attributes":{"callback":null,"renderers":[{"id":"3587","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Pertusis Incidence","@{pertussis}"]]},"id":"3547","type":"HoverTool"},{"attributes":{"children":[{"id":"3617","type":"Div"}],"width":450},"id":"3618","type":"WidgetBox"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"pertussis":{"__ndarray__":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+/jFkm878RQDWmyQBzFg1ACwkJCQkJ+T//MWWYy/4HQJD3XcQqkQVAivab8lwC+j+PqCLE21UHQAMAAAAAAPw/YOXQItt5A0BrRxCeekMBQISEhISEhPw/Hem1gk8c6T8GTGPANAb0P8P5GJyPwQtAHfRm/DDbCkCVD+N+XVLpP5mZmZmZmeE/NUYw0d/J8j8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+kcD0K16PQPylcj8L1KNw/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+amZmZmZnJP3A9CtejcN0/mpmZmZmZyT/4HYjfgfidP1k6yYGlk5w/ERERERERoT/hehSuR+GaP67YX3ZPHpY/wmApauRjcj8AAAAAAAAAAClcj8L1KMw/yLnPLiA2lT8AAAAAAAD4fwzGhXYgTXI/AAAAAAAA+H+4HoXrUbh+PxEREREREbE/99kFxKbSoD/TGDCNAdN4P5DRMAEZDXM/kiRJkiRJoj+amZmZmZl5PxZswRZswaY/J2RvQvYm5D/IwPHft93CP1gDcKgK5cg/NE/ddWyxxz/TM8gyJd6xP0TzhcyBZ7I//fFt3GW5uD+BtM70FLiZPzgfg/MxOJ8/","dtype":"float64","shape":[84]}},"selected":{"id":"3582","type":"Selection"},"selection_policy":{"id":"3609","type":"UnionRenderers"}},"id":"3581","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"3549","subtype":"Figure","type":"Plot"}]},"id":"3612","type":"Row"},{"attributes":{},"id":"3591","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"3618","type":"WidgetBox"},{"id":"3616","type":"Column"}]},"id":"3619","type":"Column"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"3589","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3549","subtype":"Figure","type":"Plot"},"ticker":{"id":"3558","type":"BasicTicker"}},"id":"3557","type":"LinearAxis"},{"attributes":{"text":"&lt;span style=\\"color:black;font-family:Arial;font-style:bold;font-weight:bold;font-size:12pt\\"&gt;State: Alabama&lt;/span&gt;","width":450},"id":"3617","type":"Div"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"3584","type":"Line"}],"root_ids":["3619"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"9ea70c73-da88-497e-9b22-77c98ed7c8b6","roots":{"3619":"e0b8360d-329e-4304-bd8b-0b14a6a80f57"}}];
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