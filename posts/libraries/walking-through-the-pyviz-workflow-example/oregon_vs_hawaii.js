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
      };var element = document.getElementById("0ac36923-c364-4963-ad01-7cd91ddc6bf7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0ac36923-c364-4963-ad01-7cd91ddc6bf7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"80d838da-c7a3-4756-9618-8821df954c92":{"roots":{"references":[{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6247","type":"Line"},{"attributes":{"source":{"id":"6242","type":"ColumnDataSource"}},"id":"6249","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6362","type":"HoverTool"},{"id":"6382","type":"SaveTool"},{"id":"6383","type":"PanTool"},{"id":"6384","type":"WheelZoomTool"},{"id":"6385","type":"BoxZoomTool"},{"id":"6386","type":"ResetTool"}]},"id":"6387","type":"Toolbar"},{"attributes":{},"id":"6378","type":"BasicTicker"},{"attributes":{},"id":"6420","type":"Selection"},{"attributes":{"below":[{"id":"6372","type":"LinearAxis"}],"left":[{"id":"6377","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"6372","type":"LinearAxis"},{"id":"6376","type":"Grid"},{"id":"6377","type":"LinearAxis"},{"id":"6381","type":"Grid"},{"id":"6391","type":"BoxAnnotation"},{"id":"6414","type":"Legend"},{"id":"6406","type":"GlyphRenderer"},{"id":"6418","type":"Span"},{"id":"6424","type":"GlyphRenderer"},{"id":"6428","type":"Span"},{"id":"6434","type":"GlyphRenderer"}],"title":{"id":"6363","type":"Title"},"toolbar":{"id":"6387","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6202","type":"Range1d"},"x_scale":{"id":"6368","type":"LinearScale"},"y_range":{"id":"6203","type":"Range1d"},"y_scale":{"id":"6370","type":"LinearScale"}},"id":"6364","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Oregon"},"id":"6205","type":"Title"},{"attributes":{"overlay":{"id":"6233","type":"BoxAnnotation"}},"id":"6227","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"6261","type":"ColumnDataSource"},"glyph":{"id":"6264","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6265","type":"Text"},"selection_glyph":null,"view":{"id":"6267","type":"CDSView"}},"id":"6266","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"6420","type":"Selection"},"selection_policy":{"id":"6444","type":"UnionRenderers"}},"id":"6419","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6364","subtype":"Figure","type":"Plot"},"ticker":{"id":"6373","type":"BasicTicker"}},"id":"6376","type":"Grid"},{"attributes":{},"id":"6272","type":"Selection"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"6398","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6364","subtype":"Figure","type":"Plot"},"ticker":{"id":"6378","type":"BasicTicker"}},"id":"6377","type":"LinearAxis"},{"attributes":{"source":{"id":"6429","type":"ColumnDataSource"}},"id":"6435","type":"CDSView"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6238","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6206","subtype":"Figure","type":"Plot"},"ticker":{"id":"6215","type":"BasicTicker"}},"id":"6214","type":"LinearAxis"},{"attributes":{"tools":[{"id":"6204","type":"HoverTool"},{"id":"6224","type":"SaveTool"},{"id":"6225","type":"PanTool"},{"id":"6226","type":"WheelZoomTool"},{"id":"6227","type":"BoxZoomTool"},{"id":"6228","type":"ResetTool"},{"id":"6362","type":"HoverTool"},{"id":"6382","type":"SaveTool"},{"id":"6383","type":"PanTool"},{"id":"6384","type":"WheelZoomTool"},{"id":"6385","type":"BoxZoomTool"},{"id":"6386","type":"ResetTool"}]},"id":"6548","type":"ProxyToolbar"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6265","type":"Text"},{"attributes":{"children":[{"id":"6549","type":"ToolbarBox"},{"id":"6547","type":"Column"}]},"id":"6550","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6404","type":"Line"},{"attributes":{},"id":"6396","type":"BasicTickFormatter"},{"attributes":{},"id":"6386","type":"ResetTool"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"6262","type":"Selection"},"selection_policy":{"id":"6286","type":"UnionRenderers"}},"id":"6261","type":"ColumnDataSource"},{"attributes":{"callback":null,"renderers":[{"id":"6248","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"6204","type":"HoverTool"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6274","type":"Text"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6275","type":"Text"},{"attributes":{},"id":"6384","type":"WheelZoomTool"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"6428","type":"Span"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6396","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6364","subtype":"Figure","type":"Plot"},"ticker":{"id":"6373","type":"BasicTicker"}},"id":"6372","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6419","type":"ColumnDataSource"},"glyph":{"id":"6422","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6423","type":"Text"},"selection_glyph":null,"view":{"id":"6425","type":"CDSView"}},"id":"6424","type":"GlyphRenderer"},{"attributes":{},"id":"6446","type":"UnionRenderers"},{"attributes":{},"id":"6368","type":"LinearScale"},{"attributes":{},"id":"6382","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6246","type":"Line"},{"attributes":{},"id":"6286","type":"UnionRenderers"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6422","type":"Text"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"6202","type":"Range1d"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6405","type":"Line"},{"attributes":{},"id":"6373","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6245","type":"Line"},{"attributes":{"children":[{"id":"6546","type":"Row"}]},"id":"6547","type":"Column"},{"attributes":{"items":[],"plot":{"id":"6206","subtype":"Figure","type":"Plot"}},"id":"6256","type":"Legend"},{"attributes":{},"id":"6442","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6233","type":"BoxAnnotation"},{"attributes":{},"id":"6370","type":"LinearScale"},{"attributes":{},"id":"6243","type":"Selection"},{"attributes":{"data_source":{"id":"6242","type":"ColumnDataSource"},"glyph":{"id":"6245","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6247","type":"Line"},"nonselection_glyph":{"id":"6246","type":"Line"},"selection_glyph":null,"view":{"id":"6249","type":"CDSView"}},"id":"6248","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6429","type":"ColumnDataSource"},"glyph":{"id":"6432","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6433","type":"Text"},"selection_glyph":null,"view":{"id":"6435","type":"CDSView"}},"id":"6434","type":"GlyphRenderer"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6423","type":"Text"},{"attributes":{"below":[{"id":"6214","type":"LinearAxis"}],"left":[{"id":"6219","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"6214","type":"LinearAxis"},{"id":"6218","type":"Grid"},{"id":"6219","type":"LinearAxis"},{"id":"6223","type":"Grid"},{"id":"6233","type":"BoxAnnotation"},{"id":"6256","type":"Legend"},{"id":"6248","type":"GlyphRenderer"},{"id":"6260","type":"Span"},{"id":"6266","type":"GlyphRenderer"},{"id":"6270","type":"Span"},{"id":"6276","type":"GlyphRenderer"}],"title":{"id":"6205","type":"Title"},"toolbar":{"id":"6229","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6202","type":"Range1d"},"x_scale":{"id":"6210","type":"LinearScale"},"y_range":{"id":"6203","type":"Range1d"},"y_scale":{"id":"6212","type":"LinearScale"}},"id":"6206","subtype":"Figure","type":"Plot"},{"attributes":{"items":[],"plot":{"id":"6364","subtype":"Figure","type":"Plot"}},"id":"6414","type":"Legend"},{"attributes":{"children":[{"id":"6206","subtype":"Figure","type":"Plot"},{"id":"6364","subtype":"Figure","type":"Plot"}]},"id":"6546","type":"Row"},{"attributes":{"callback":null,"end":1186.4400000000003,"reset_end":1186.4400000000003,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"6203","type":"Range1d"},{"attributes":{},"id":"6238","type":"BasicTickFormatter"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6433","type":"Text"},{"attributes":{},"id":"6430","type":"Selection"},{"attributes":{},"id":"6226","type":"WheelZoomTool"},{"attributes":{},"id":"6262","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6364","subtype":"Figure","type":"Plot"},"ticker":{"id":"6378","type":"BasicTicker"}},"id":"6381","type":"Grid"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"6240","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6206","subtype":"Figure","type":"Plot"},"ticker":{"id":"6220","type":"BasicTicker"}},"id":"6219","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6391","type":"BoxAnnotation"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6264","type":"Text"},{"attributes":{"callback":null,"renderers":[{"id":"6406","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"6362","type":"HoverTool"},{"attributes":{"source":{"id":"6400","type":"ColumnDataSource"}},"id":"6407","type":"CDSView"},{"attributes":{},"id":"6225","type":"PanTool"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"6260","type":"Span"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"6430","type":"Selection"},"selection_policy":{"id":"6446","type":"UnionRenderers"}},"id":"6429","type":"ColumnDataSource"},{"attributes":{},"id":"6444","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6271","type":"ColumnDataSource"},"glyph":{"id":"6274","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6275","type":"Text"},"selection_glyph":null,"view":{"id":"6277","type":"CDSView"}},"id":"6276","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"6548","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"6549","type":"ToolbarBox"},{"attributes":{},"id":"6220","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6204","type":"HoverTool"},{"id":"6224","type":"SaveTool"},{"id":"6225","type":"PanTool"},{"id":"6226","type":"WheelZoomTool"},{"id":"6227","type":"BoxZoomTool"},{"id":"6228","type":"ResetTool"}]},"id":"6229","type":"Toolbar"},{"attributes":{"source":{"id":"6271","type":"ColumnDataSource"}},"id":"6277","type":"CDSView"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6432","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6206","subtype":"Figure","type":"Plot"},"ticker":{"id":"6220","type":"BasicTicker"}},"id":"6223","type":"Grid"},{"attributes":{"source":{"id":"6419","type":"ColumnDataSource"}},"id":"6425","type":"CDSView"},{"attributes":{},"id":"6401","type":"Selection"},{"attributes":{},"id":"6215","type":"BasicTicker"},{"attributes":{},"id":"6240","type":"BasicTickFormatter"},{"attributes":{},"id":"6398","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6391","type":"BoxAnnotation"}},"id":"6385","type":"BoxZoomTool"},{"attributes":{},"id":"6383","type":"PanTool"},{"attributes":{},"id":"6212","type":"LinearScale"},{"attributes":{"data_source":{"id":"6400","type":"ColumnDataSource"},"glyph":{"id":"6403","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6405","type":"Line"},"nonselection_glyph":{"id":"6404","type":"Line"},"selection_glyph":null,"view":{"id":"6407","type":"CDSView"}},"id":"6406","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Hawaii"},"id":"6363","type":"Title"},{"attributes":{},"id":"6228","type":"ResetTool"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"6270","type":"Span"},{"attributes":{"source":{"id":"6261","type":"ColumnDataSource"}},"id":"6267","type":"CDSView"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxPQrXo3AqQFG4HoXr2Y1AAAAAAAAAAAAAAAAAAAAAANejcD0K91hA9yhcj8KJkkBcj8L1KNCMQE24HoXrEYtAgetRuB7FV0DNzMzMzISCQPv/////54lAH4XrUbiePUBwPQrXozR4QHM9CtejToBA7VG4HoXLXkBmZmZmZv6BQF6PwvUoXDRA9yhcj8J1OEAzMzMzMzMUQBSuR+F6FBxAYI/C9SjcN0CkcD0K14NNQHkUrkfheiZAKlyPwvUoDEBpZmZmZmYcQLBH4XoUrhxAMzMzMzMz8z/rUbgehesSQFyPwvUoXAFAx8zMzMzMH0DMzMzMzMzsP5qZmZmZmek/AAAAAAAA4D+amZmZmZm5P6RwPQrXozBApXA9CtejAkA+CtejcD0GQArXo3A9Csc/9ihcj8L1/D9RuB6F61EGQIXrUbgehQ1ANTMzMzMz/z/1KFyPwvUQQM3MzMzMzPQ/AAAAAAAAAAAAAAAAAAAAAHwUrkfhegZAXY/C9Shc3z8AAAAAAAAAAHsUrkfherQ/exSuR+F6xD89CtejcD3iP3sUrkfherQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"6401","type":"Selection"},"selection_policy":{"id":"6442","type":"UnionRenderers"}},"id":"6400","type":"ColumnDataSource"},{"attributes":{},"id":"6224","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"eRSuR+Hia0CG61G4HsV+QPQoXI/CRXFAU7gehetRbkCamZmZmRGAQKNwPQrXy2xAAAAAAAAwaEA+CtejcAuGQDUzMzMzuYxAuR6F61EYQ0ApXI/C9XheQJqZmZmZeWtAKFyPwvX4hECtR+F6FPyCQAvXo3A9Mn9AmpmZmZmvhUCmcD0K1/ttQAvXo3A9imNAVLgehetVfEAL16NwPfpRQJmZmZmZ+XZA1qNwPQpjhUByPQrXo7BIQB+F61G4ToNAisL1KFw3akCG61G4HnGBQKdwPQrXi25AxPUoXI9yckBvPQrXo+BgQAAAAAAAeotAXI/C9SiIgECG61G4Hvl7QOlRuB6Fh4NAzczMzMwgdEClcD0K1/GHQM3MzMzMJHBAXY/C9ShQfEBJ4XoUrrdmQAXXo3A9ul9ArkfhehSuVUA0MzMzM7M+QCxcj8L1qCNAaGZmZmYmNUB0PQrXo/AvQGdmZmZm5iFAhetRuB6FM0B7FK5H4XrwP1uPwvUo3CBAfRSuR+F6HEAH16NwPYopQBSuR+F6lDRAPQrXo3A9BkB7FK5H4Xq0P5qZmZmZmck/C9ejcD0K5z+amZmZmZnZPwAAAAAAAAAAU7gehetRyD+kcD0K16PQPxSuR+F6FAhAzszMzMzM9D8zMzMzMzP3P5uZmZmZmfU/PQrXo3A9BkCQwvUoXI/SPwAAAAAAAAAAAAAAAAAAAAAK16NwPQq3Px6F61G4HtU/CtejcD0Ktz8AAAAAAAAAADMzMzMzM8M/AAAAAAAAAAAK16NwPQrHPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"6243","type":"Selection"},"selection_policy":{"id":"6284","type":"UnionRenderers"}},"id":"6242","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"6272","type":"Selection"},"selection_policy":{"id":"6288","type":"UnionRenderers"}},"id":"6271","type":"ColumnDataSource"},{"attributes":{},"id":"6288","type":"UnionRenderers"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"6418","type":"Span"},{"attributes":{},"id":"6284","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6206","subtype":"Figure","type":"Plot"},"ticker":{"id":"6215","type":"BasicTicker"}},"id":"6218","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6403","type":"Line"},{"attributes":{},"id":"6210","type":"LinearScale"}],"root_ids":["6550"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"80d838da-c7a3-4756-9618-8821df954c92","roots":{"6550":"0ac36923-c364-4963-ad01-7cd91ddc6bf7"}}];
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