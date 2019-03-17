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
      };var element = document.getElementById("c863ce11-37a0-4482-a370-f2720c2e193b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c863ce11-37a0-4482-a370-f2720c2e193b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7b071572-48a2-4e11-9df0-1b75c63c97f2":{"roots":{"references":[{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33019","type":"Text"},{"attributes":{},"id":"32972","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32985","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"32966","type":"LinearAxis"}],"left":[{"id":"32971","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"32966","type":"LinearAxis"},{"id":"32970","type":"Grid"},{"id":"32971","type":"LinearAxis"},{"id":"32975","type":"Grid"},{"id":"32985","type":"BoxAnnotation"},{"id":"33000","type":"GlyphRenderer"},{"id":"33004","type":"Span"},{"id":"33010","type":"GlyphRenderer"},{"id":"33014","type":"Span"},{"id":"33020","type":"GlyphRenderer"},{"id":"33024","type":"Span"},{"id":"33030","type":"GlyphRenderer"},{"id":"33034","type":"Span"},{"id":"33040","type":"GlyphRenderer"}],"title":{"id":"32957","type":"Title"},"toolbar":{"id":"32981","type":"Toolbar"},"x_range":{"id":"32954","type":"Range1d"},"x_scale":{"id":"32962","type":"LinearScale"},"y_range":{"id":"32955","type":"Range1d"},"y_scale":{"id":"32964","type":"LinearScale"}},"id":"32958","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"33014","type":"Span"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"32958","subtype":"Figure","type":"Plot"},"ticker":{"id":"32972","type":"BasicTicker"}},"id":"32975","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"32999","type":"Line"},{"attributes":{},"id":"32991","type":"BasicTickFormatter"},{"attributes":{},"id":"33036","type":"Selection"},{"attributes":{"source":{"id":"33005","type":"ColumnDataSource"}},"id":"33011","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"32998","type":"Line"},{"attributes":{"source":{"id":"33015","type":"ColumnDataSource"}},"id":"33021","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"33006","type":"Selection"},"selection_policy":{"id":"33050","type":"UnionRenderers"}},"id":"33005","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32956","type":"HoverTool"},{"id":"32976","type":"SaveTool"},{"id":"32977","type":"PanTool"},{"id":"32978","type":"WheelZoomTool"},{"id":"32979","type":"BoxZoomTool"},{"id":"32980","type":"ResetTool"}]},"id":"32981","type":"Toolbar"},{"attributes":{},"id":"32976","type":"SaveTool"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"red"},"line_width":{"value":3},"location":1934,"plot":null},"id":"33024","type":"Span"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33028","type":"Text"},{"attributes":{},"id":"32977","type":"PanTool"},{"attributes":{},"id":"33026","type":"Selection"},{"attributes":{},"id":"32995","type":"Selection"},{"attributes":{},"id":"32978","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"32994","type":"ColumnDataSource"},"glyph":{"id":"32997","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"32999","type":"Line"},"nonselection_glyph":{"id":"32998","type":"Line"},"selection_glyph":null,"view":{"id":"33001","type":"CDSView"}},"id":"33000","type":"GlyphRenderer"},{"attributes":{},"id":"32964","type":"LinearScale"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_color":{"value":"blue"},"line_width":{"value":3},"location":2003,"plot":null},"id":"33034","type":"Span"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"KlyPwhWH0EAerkfheo7HQF7hehSOd8xAMlyPwtUhzkBN4XoUjkjMQBSuR+Ea/cZAU+F6FN643UD91qNwvX7YQJuZmZn5U8hAgutRuF7cxUCawvUoDM7ZQOZRuB7lc9RA18zMzGxJyUAAAAAAgM7VQK5H4XoUeNRATLgehUur1kDC9ShcHxbTQDYzMzNzTbVABwAAAEAl00CvcD0K927CQLz1KFwPQs5AASlcj1KB1UBOuB6F63LCQA+uR+F6YNFAsszMzHxB0kCB61G4nnDLQFGPwvU4BtRAPDMzM1MJ0kBiZmZmZnzSQOJ6FK5nwNBAfutRuN761ECH61G4XovKQGCPwvUo5MpAtZmZmfmyxkAIKVyPIhvNQIrrUbh+ucVA9KNwPSq0yUDrUbgepZ/CQA6uR+F6JLVABoXrUbhhnUDgUbgehbd+QClcj8L1TIJAz8zMzMxbkUAuMzMzM6qdQEg9CtejiohAc8L1KFzVhkBAuB6F6yl6QBNcj8L15oRA8dajcD2ikEDNo3A9CgqRQFtmZmZmSoNAZI/C9ShscEA3MzMzM8txQDQzMzMzcz9AsvUoXI9CMUAaXI/C9SgvQCCF61G4XkdAZ2ZmZmbmT0DJ9Shcj/JYQLFH4XoUnlNAJVyPwvXISUBzPQrXo9BnQBKuR+F6TG1ABQAAAADIYEAL16NwPco8QBuF61G4niFAf+tRuB6FM0D8//////8UQFyPwvUonDhApnA9CtejO0CD61G4HoUJQHQ9CtejcO0/aGZmZmZm+j+lcD0K16P4P9ijcD0K19M/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"32995","type":"Selection"},"selection_policy":{"id":"33048","type":"UnionRenderers"}},"id":"32994","type":"ColumnDataSource"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"32991","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"32958","subtype":"Figure","type":"Plot"},"ticker":{"id":"32967","type":"BasicTicker"}},"id":"32966","type":"LinearAxis"},{"attributes":{"overlay":{"id":"32985","type":"BoxAnnotation"}},"id":"32979","type":"BoxZoomTool"},{"attributes":{"source":{"id":"32994","type":"ColumnDataSource"}},"id":"33001","type":"CDSView"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33038","type":"Text"},{"attributes":{},"id":"33006","type":"Selection"},{"attributes":{},"id":"32980","type":"ResetTool"},{"attributes":{"callback":null,"data":{"text":["Zero Cases"],"x":[2002],"y":[27000]},"selected":{"id":"33036","type":"Selection"},"selection_policy":{"id":"33056","type":"UnionRenderers"}},"id":"33035","type":"ColumnDataSource"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"33004","type":"Span"},{"attributes":{"source":{"id":"33035","type":"ColumnDataSource"}},"id":"33041","type":"CDSView"},{"attributes":{},"id":"32993","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"text":["Year of the Most Cases"],"x":[1935],"y":[27000]},"selected":{"id":"33026","type":"Selection"},"selection_policy":{"id":"33054","type":"UnionRenderers"}},"id":"33025","type":"ColumnDataSource"},{"attributes":{},"id":"33048","type":"UnionRenderers"},{"attributes":{},"id":"33050","type":"UnionRenderers"},{"attributes":{},"id":"32962","type":"LinearScale"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33009","type":"Text"},{"attributes":{},"id":"33016","type":"Selection"},{"attributes":{"data_source":{"id":"33005","type":"ColumnDataSource"},"glyph":{"id":"33008","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33009","type":"Text"},"selection_glyph":null,"view":{"id":"33011","type":"CDSView"}},"id":"33010","type":"GlyphRenderer"},{"attributes":{},"id":"33052","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"33015","type":"ColumnDataSource"},"glyph":{"id":"33018","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33019","type":"Text"},"selection_glyph":null,"view":{"id":"33021","type":"CDSView"}},"id":"33020","type":"GlyphRenderer"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33008","type":"Text"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33029","type":"Text"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"32954","type":"Range1d"},{"attributes":{},"id":"33056","type":"UnionRenderers"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33039","type":"Text"},{"attributes":{"data_source":{"id":"33025","type":"ColumnDataSource"},"glyph":{"id":"33028","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33029","type":"Text"},"selection_glyph":null,"view":{"id":"33031","type":"CDSView"}},"id":"33030","type":"GlyphRenderer"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33018","type":"Text"},{"attributes":{},"id":"32967","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Measles In the U.S. by Year","text_font_size":{"value":"18pt"}},"id":"32957","type":"Title"},{"attributes":{"data_source":{"id":"33035","type":"ColumnDataSource"},"glyph":{"id":"33038","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33039","type":"Text"},"selection_glyph":null,"view":{"id":"33041","type":"CDSView"}},"id":"33040","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"33016","type":"Selection"},"selection_policy":{"id":"33052","type":"UnionRenderers"}},"id":"33015","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":30435.47000000004,"reset_end":30435.47000000004,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"32955","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"32958","subtype":"Figure","type":"Plot"},"ticker":{"id":"32967","type":"BasicTicker"}},"id":"32970","type":"Grid"},{"attributes":{"source":{"id":"33025","type":"ColumnDataSource"}},"id":"33031","type":"CDSView"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"33000","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"]]},"id":"32956","type":"HoverTool"},{"attributes":{},"id":"33054","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"32997","type":"Line"},{"attributes":{"axis_label":"Cases","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"32993","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"32958","subtype":"Figure","type":"Plot"},"ticker":{"id":"32972","type":"BasicTicker"}},"id":"32971","type":"LinearAxis"}],"root_ids":["32958"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7b071572-48a2-4e11-9df0-1b75c63c97f2","roots":{"32958":"c863ce11-37a0-4482-a370-f2720c2e193b"}}];
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