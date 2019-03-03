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
      };var element = document.getElementById("5e346ec9-db34-4143-bfa3-a2fe8d2e0da0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5e346ec9-db34-4143-bfa3-a2fe8d2e0da0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2afd564f-4d9f-435f-b580-c4dd1bd6c992":{"roots":{"references":[{"attributes":{},"id":"6979","type":"SaveTool"},{"attributes":{"text":"&lt;span style=\\"color:black;font-family:Arial;font-style:bold;font-weight:bold;font-size:12pt\\"&gt;State: Alabama&lt;/span&gt;","width":450},"id":"7029","type":"Div"},{"attributes":{"children":[{"id":"7014","type":"Row"},{"id":"7024","type":"Row"}]},"id":"7025","type":"Column"},{"attributes":{},"id":"6965","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6988","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6912","type":"HoverTool"},{"id":"6932","type":"SaveTool"},{"id":"6933","type":"PanTool"},{"id":"6934","type":"WheelZoomTool"},{"id":"6935","type":"BoxZoomTool"},{"id":"6936","type":"ResetTool"}]},"id":"6937","type":"Toolbar"},{"attributes":{},"id":"6936","type":"ResetTool"},{"attributes":{},"id":"6981","type":"WheelZoomTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6954","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6914","subtype":"Figure","type":"Plot"},"ticker":{"id":"6923","type":"BasicTicker"}},"id":"6922","type":"LinearAxis"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"7001","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6961","subtype":"Figure","type":"Plot"},"ticker":{"id":"6970","type":"BasicTicker"}},"id":"6969","type":"LinearAxis"},{"attributes":{"children":[{"id":"7027","type":"ToolbarBox"},{"id":"7025","type":"Column"}]},"id":"7028","type":"Column"},{"attributes":{},"id":"6920","type":"LinearScale"},{"attributes":{},"id":"6994","type":"Selection"},{"attributes":{},"id":"6932","type":"SaveTool"},{"attributes":{},"id":"6954","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"Fl/xFV/xGUCbAjeDwwkdQN/JanljhCNArEPxOhSv9z+H61G4HoUVQD9XW7G/7BNA0Jly3nWVNEBui4MFJf0xQF9GzCoTmfc/6BbVt+Oh+j9Le67hFEgcQM2ZZjMATTtAZ2ZmZmZmIEBcLPnFks8fQGEyVTAqaSlABdIkQXMpN0CMXuK3bPsuQP+cNtBpQwpAhSgbfVlJIUBWQtWfJ5kNQGVsTsbmpDNA3X4ZVkRxEEDI9LKVwf8TQIFyByh3IDFADGJyBTG5E0Dy50km1qElQK0s8MoCzyFApG5F6lakEUDA/AzMz0AvQB5HNI0OP/0/fYv/2RpCI0AghetRuB4cQGkejubhaBlARzDR38lqEEDu1JFX6LYTQHfLCZaRBxFAxfUoXI8SBUBaaqVWamURQNeibzwJ1vY/LPnFkl9s9T/CTuzETuzUP3E9CtejcPM/UrgehetRuD+DKBt9WQnhPxobGxsbG9s/ZIIH80T92z8mBoGVQ4u8PxzHcRzHcZw/CtejcD0Knz9olYnM++/CPwAAAAAAAPh/Iv32deCckT8AAAAAAAD4f58S5ClBnpI/AAAAAAAAAAAAAAAAAAD4fwAAAAAAAPh/5o0RTPR3sj8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/IPuxH/uxnz9Jx6evLQ52PwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4f+1YgTDSjoU/hetRuB6F4z8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"6947","type":"Selection"},"selection_policy":{"id":"7010","type":"UnionRenderers"}},"id":"6946","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6961","subtype":"Figure","type":"Plot"},"ticker":{"id":"6975","type":"BasicTicker"}},"id":"6978","type":"Grid"},{"attributes":{"overlay":{"id":"6988","type":"BoxAnnotation"}},"id":"6982","type":"BoxZoomTool"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"6956","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6914","subtype":"Figure","type":"Plot"},"ticker":{"id":"6928","type":"BasicTicker"}},"id":"6927","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6941","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6969","type":"LinearAxis"}],"left":[{"id":"6974","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"renderers":[{"id":"6969","type":"LinearAxis"},{"id":"6973","type":"Grid"},{"id":"6974","type":"LinearAxis"},{"id":"6978","type":"Grid"},{"id":"6988","type":"BoxAnnotation"},{"id":"6999","type":"GlyphRenderer"}],"title":{"id":"6960","type":"Title"},"toolbar":{"id":"6984","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6910","type":"Range1d"},"x_scale":{"id":"6965","type":"LinearScale"},"y_range":{"id":"6958","type":"Range1d"},"y_scale":{"id":"6967","type":"LinearScale"}},"id":"6961","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Pertusis Incidence","bounds":"auto","formatter":{"id":"7003","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6961","subtype":"Figure","type":"Plot"},"ticker":{"id":"6975","type":"BasicTicker"}},"id":"6974","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"7026","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"7027","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6950","type":"Line"},{"attributes":{},"id":"6983","type":"ResetTool"},{"attributes":{},"id":"6967","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"6913","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6914","subtype":"Figure","type":"Plot"},"ticker":{"id":"6928","type":"BasicTicker"}},"id":"6931","type":"Grid"},{"attributes":{},"id":"7003","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"6910","type":"Range1d"},{"attributes":{"callback":null,"end":1.4980392156862743,"reset_end":1.4980392156862743,"reset_start":0.003,"start":0.003,"tags":[[["pertussis","Pertusis Incidence",null]]]},"id":"6958","type":"Range1d"},{"attributes":{"callback":null,"end":11.351346153846153,"reset_end":11.351346153846153,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"6911","type":"Range1d"},{"attributes":{},"id":"6956","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":[{"id":"6952","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"6912","type":"HoverTool"},{"attributes":{},"id":"6918","type":"LinearScale"},{"attributes":{"overlay":{"id":"6941","type":"BoxAnnotation"}},"id":"6935","type":"BoxZoomTool"},{"attributes":{},"id":"6933","type":"PanTool"},{"attributes":{"data_source":{"id":"6946","type":"ColumnDataSource"},"glyph":{"id":"6949","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6951","type":"Line"},"nonselection_glyph":{"id":"6950","type":"Line"},"selection_glyph":null,"view":{"id":"6953","type":"CDSView"}},"id":"6952","type":"GlyphRenderer"},{"attributes":{},"id":"7010","type":"UnionRenderers"},{"attributes":{},"id":"6980","type":"PanTool"},{"attributes":{},"id":"7020","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6961","subtype":"Figure","type":"Plot"},"ticker":{"id":"6970","type":"BasicTicker"}},"id":"6973","type":"Grid"},{"attributes":{"children":[{"id":"7030","type":"WidgetBox"},{"id":"7028","type":"Column"}]},"id":"7031","type":"Column"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"6996","type":"Line"},{"attributes":{},"id":"6970","type":"BasicTicker"},{"attributes":{"children":[{"id":"7029","type":"Div"}],"width":450},"id":"7030","type":"WidgetBox"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6951","type":"Line"},{"attributes":{},"id":"6947","type":"Selection"},{"attributes":{},"id":"6934","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"6960","type":"Title"},{"attributes":{"source":{"id":"6946","type":"ColumnDataSource"}},"id":"6953","type":"CDSView"},{"attributes":{"callback":null,"renderers":[{"id":"6999","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Pertusis Incidence","@{pertussis}"]]},"id":"6959","type":"HoverTool"},{"attributes":{},"id":"6928","type":"BasicTicker"},{"attributes":{},"id":"6923","type":"BasicTicker"},{"attributes":{"children":[{"id":"6961","subtype":"Figure","type":"Plot"}]},"id":"7024","type":"Row"},{"attributes":{},"id":"6975","type":"BasicTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"6998","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"pertussis"}},"id":"6997","type":"Line"},{"attributes":{"below":[{"id":"6922","type":"LinearAxis"}],"left":[{"id":"6927","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"renderers":[{"id":"6922","type":"LinearAxis"},{"id":"6926","type":"Grid"},{"id":"6927","type":"LinearAxis"},{"id":"6931","type":"Grid"},{"id":"6941","type":"BoxAnnotation"},{"id":"6952","type":"GlyphRenderer"}],"title":{"id":"6913","type":"Title"},"toolbar":{"id":"6937","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6910","type":"Range1d"},"x_scale":{"id":"6918","type":"LinearScale"},"y_range":{"id":"6911","type":"Range1d"},"y_scale":{"id":"6920","type":"LinearScale"}},"id":"6914","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"6912","type":"HoverTool"},{"id":"6932","type":"SaveTool"},{"id":"6933","type":"PanTool"},{"id":"6934","type":"WheelZoomTool"},{"id":"6935","type":"BoxZoomTool"},{"id":"6936","type":"ResetTool"},{"id":"6959","type":"HoverTool"},{"id":"6979","type":"SaveTool"},{"id":"6980","type":"PanTool"},{"id":"6981","type":"WheelZoomTool"},{"id":"6982","type":"BoxZoomTool"},{"id":"6983","type":"ResetTool"}]},"id":"7026","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6959","type":"HoverTool"},{"id":"6979","type":"SaveTool"},{"id":"6980","type":"PanTool"},{"id":"6981","type":"WheelZoomTool"},{"id":"6982","type":"BoxZoomTool"},{"id":"6983","type":"ResetTool"}]},"id":"6984","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6914","subtype":"Figure","type":"Plot"},"ticker":{"id":"6923","type":"BasicTicker"}},"id":"6926","type":"Grid"},{"attributes":{"source":{"id":"6993","type":"ColumnDataSource"}},"id":"7000","type":"CDSView"},{"attributes":{"children":[{"id":"6914","subtype":"Figure","type":"Plot"}]},"id":"7014","type":"Row"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"pertussis":{"__ndarray__":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+/jFkm878RQDWmyQBzFg1ACwkJCQkJ+T//MWWYy/4HQJD3XcQqkQVAivab8lwC+j+PqCLE21UHQAMAAAAAAPw/YOXQItt5A0BrRxCeekMBQISEhISEhPw/Hem1gk8c6T8GTGPANAb0P8P5GJyPwQtAHfRm/DDbCkCVD+N+XVLpP5mZmZmZmeE/NUYw0d/J8j8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+kcD0K16PQPylcj8L1KNw/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H+amZmZmZnJP3A9CtejcN0/mpmZmZmZyT/4HYjfgfidP1k6yYGlk5w/ERERERERoT/hehSuR+GaP67YX3ZPHpY/wmApauRjcj8AAAAAAAAAAClcj8L1KMw/yLnPLiA2lT8AAAAAAAD4fwzGhXYgTXI/AAAAAAAA+H+4HoXrUbh+PxEREREREbE/99kFxKbSoD/TGDCNAdN4P5DRMAEZDXM/kiRJkiRJoj+amZmZmZl5PxZswRZswaY/J2RvQvYm5D/IwPHft93CP1gDcKgK5cg/NE/ddWyxxz/TM8gyJd6xP0TzhcyBZ7I//fFt3GW5uD+BtM70FLiZPzgfg/MxOJ8/","dtype":"float64","shape":[84]}},"selected":{"id":"6994","type":"Selection"},"selection_policy":{"id":"7020","type":"UnionRenderers"}},"id":"6993","type":"ColumnDataSource"},{"attributes":{},"id":"7001","type":"BasicTickFormatter"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6949","type":"Line"},{"attributes":{"data_source":{"id":"6993","type":"ColumnDataSource"},"glyph":{"id":"6996","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6998","type":"Line"},"nonselection_glyph":{"id":"6997","type":"Line"},"selection_glyph":null,"view":{"id":"7000","type":"CDSView"}},"id":"6999","type":"GlyphRenderer"}],"root_ids":["7031"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"2afd564f-4d9f-435f-b580-c4dd1bd6c992","roots":{"7031":"5e346ec9-db34-4143-bfa3-a2fe8d2e0da0"}}];
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