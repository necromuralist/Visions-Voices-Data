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
      };var element = document.getElementById("a5948eff-5cd0-4d97-89b6-53601ea84509");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5948eff-5cd0-4d97-89b6-53601ea84509' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0152332a-db18-43f6-981c-00cb3f2a8438":{"roots":{"references":[{"attributes":{"source":{"id":"2583","type":"ColumnDataSource"}},"id":"2589","type":"CDSView"},{"attributes":{},"id":"2695","type":"PanTool"},{"attributes":{"children":[{"id":"2858","type":"Row"}]},"id":"2859","type":"Column"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2676","subtype":"Figure","type":"Plot"},"ticker":{"id":"2685","type":"BasicTicker"}},"id":"2688","type":"Grid"},{"attributes":{},"id":"2711","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2583","type":"ColumnDataSource"},"glyph":{"id":"2586","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2587","type":"Text"},"selection_glyph":null,"view":{"id":"2589","type":"CDSView"}},"id":"2588","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"eRSuR+Hia0CG61G4HsV+QPQoXI/CRXFAU7gehetRbkCamZmZmRGAQKNwPQrXy2xAAAAAAAAwaEA+CtejcAuGQDUzMzMzuYxAuR6F61EYQ0ApXI/C9XheQJqZmZmZeWtAKFyPwvX4hECtR+F6FPyCQAvXo3A9Mn9AmpmZmZmvhUCmcD0K1/ttQAvXo3A9imNAVLgehetVfEAL16NwPfpRQJmZmZmZ+XZA1qNwPQpjhUByPQrXo7BIQB+F61G4ToNAisL1KFw3akCG61G4HnGBQKdwPQrXi25AxPUoXI9yckBvPQrXo+BgQAAAAAAAeotAXI/C9SiIgECG61G4Hvl7QOlRuB6Fh4NAzczMzMwgdEClcD0K1/GHQM3MzMzMJHBAXY/C9ShQfEBJ4XoUrrdmQAXXo3A9ul9ArkfhehSuVUA0MzMzM7M+QCxcj8L1qCNAaGZmZmYmNUB0PQrXo/AvQGdmZmZm5iFAhetRuB6FM0B7FK5H4XrwP1uPwvUo3CBAfRSuR+F6HEAH16NwPYopQBSuR+F6lDRAPQrXo3A9BkB7FK5H4Xq0P5qZmZmZmck/C9ejcD0K5z+amZmZmZnZPwAAAAAAAAAAU7gehetRyD+kcD0K16PQPxSuR+F6FAhAzszMzMzM9D8zMzMzMzP3P5uZmZmZmfU/PQrXo3A9BkCQwvUoXI/SPwAAAAAAAAAAAAAAAAAAAAAK16NwPQq3Px6F61G4HtU/CtejcD0Ktz8AAAAAAAAAADMzMzMzM8M/AAAAAAAAAAAK16NwPQrHPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"2555","type":"Selection"},"selection_policy":{"id":"2596","type":"UnionRenderers"}},"id":"2554","type":"ColumnDataSource"},{"attributes":{},"id":"2685","type":"BasicTicker"},{"attributes":{},"id":"2690","type":"BasicTicker"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"2709","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2676","subtype":"Figure","type":"Plot"},"ticker":{"id":"2685","type":"BasicTicker"}},"id":"2684","type":"LinearAxis"},{"attributes":{},"id":"2698","type":"ResetTool"},{"attributes":{},"id":"2682","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2518","subtype":"Figure","type":"Plot"},"ticker":{"id":"2527","type":"BasicTicker"}},"id":"2530","type":"Grid"},{"attributes":{},"id":"2680","type":"LinearScale"},{"attributes":{"source":{"id":"2554","type":"ColumnDataSource"}},"id":"2561","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2518","subtype":"Figure","type":"Plot"},"ticker":{"id":"2532","type":"BasicTicker"}},"id":"2535","type":"Grid"},{"attributes":{"items":[],"plot":{"id":"2518","subtype":"Figure","type":"Plot"}},"id":"2568","type":"Legend"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2586","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2676","subtype":"Figure","type":"Plot"},"ticker":{"id":"2690","type":"BasicTicker"}},"id":"2693","type":"Grid"},{"attributes":{"below":[{"id":"2684","type":"LinearAxis"}],"left":[{"id":"2689","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"2684","type":"LinearAxis"},{"id":"2688","type":"Grid"},{"id":"2689","type":"LinearAxis"},{"id":"2693","type":"Grid"},{"id":"2703","type":"BoxAnnotation"},{"id":"2726","type":"Legend"},{"id":"2718","type":"GlyphRenderer"},{"id":"2730","type":"Span"},{"id":"2736","type":"GlyphRenderer"},{"id":"2740","type":"Span"},{"id":"2746","type":"GlyphRenderer"}],"title":{"id":"2675","type":"Title"},"toolbar":{"id":"2699","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2514","type":"Range1d"},"x_scale":{"id":"2680","type":"LinearScale"},"y_range":{"id":"2515","type":"Range1d"},"y_scale":{"id":"2682","type":"LinearScale"}},"id":"2676","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"2551","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2518","subtype":"Figure","type":"Plot"},"ticker":{"id":"2527","type":"BasicTicker"}},"id":"2526","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Hawaii"},"id":"2675","type":"Title"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"2711","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2676","subtype":"Figure","type":"Plot"},"ticker":{"id":"2690","type":"BasicTicker"}},"id":"2689","type":"LinearAxis"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2587","type":"Text"},{"attributes":{},"id":"2709","type":"BasicTickFormatter"},{"attributes":{},"id":"2574","type":"Selection"},{"attributes":{"callback":null,"renderers":[{"id":"2718","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"2674","type":"HoverTool"},{"attributes":{"callback":null,"renderers":[{"id":"2560","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["measles","@{measles}"]]},"id":"2516","type":"HoverTool"},{"attributes":{},"id":"2713","type":"Selection"},{"attributes":{},"id":"2742","type":"Selection"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"2730","type":"Span"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"2740","type":"Span"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"2742","type":"Selection"},"selection_policy":{"id":"2758","type":"UnionRenderers"}},"id":"2741","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2715","type":"Line"},{"attributes":{},"id":"2540","type":"ResetTool"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"2514","type":"Range1d"},{"attributes":{},"id":"2694","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2545","type":"BoxAnnotation"},{"attributes":{},"id":"2584","type":"Selection"},{"attributes":{"overlay":{"id":"2703","type":"BoxAnnotation"}},"id":"2697","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2554","type":"ColumnDataSource"},"glyph":{"id":"2557","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"2559","type":"Line"},"nonselection_glyph":{"id":"2558","type":"Line"},"selection_glyph":null,"view":{"id":"2561","type":"CDSView"}},"id":"2560","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2516","type":"HoverTool"},{"id":"2536","type":"SaveTool"},{"id":"2537","type":"PanTool"},{"id":"2538","type":"WheelZoomTool"},{"id":"2539","type":"BoxZoomTool"},{"id":"2540","type":"ResetTool"}]},"id":"2541","type":"Toolbar"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2734","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2716","type":"Line"},{"attributes":{"children":[{"id":"2518","subtype":"Figure","type":"Plot"},{"id":"2676","subtype":"Figure","type":"Plot"}]},"id":"2858","type":"Row"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"2584","type":"Selection"},"selection_policy":{"id":"2600","type":"UnionRenderers"}},"id":"2583","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2731","type":"ColumnDataSource"},"glyph":{"id":"2734","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2735","type":"Text"},"selection_glyph":null,"view":{"id":"2737","type":"CDSView"}},"id":"2736","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1186.4400000000003,"reset_end":1186.4400000000003,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"2515","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2674","type":"HoverTool"},{"id":"2694","type":"SaveTool"},{"id":"2695","type":"PanTool"},{"id":"2696","type":"WheelZoomTool"},{"id":"2697","type":"BoxZoomTool"},{"id":"2698","type":"ResetTool"}]},"id":"2699","type":"Toolbar"},{"attributes":{},"id":"2532","type":"BasicTicker"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2744","type":"Text"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2717","type":"Line"},{"attributes":{},"id":"2696","type":"WheelZoomTool"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"2553","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2518","subtype":"Figure","type":"Plot"},"ticker":{"id":"2532","type":"BasicTicker"}},"id":"2531","type":"LinearAxis"},{"attributes":{},"id":"2538","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2712","type":"ColumnDataSource"},"glyph":{"id":"2715","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"2717","type":"Line"},"nonselection_glyph":{"id":"2716","type":"Line"},"selection_glyph":null,"view":{"id":"2719","type":"CDSView"}},"id":"2718","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2557","type":"Line"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2745","type":"Text"},{"attributes":{"data_source":{"id":"2741","type":"ColumnDataSource"},"glyph":{"id":"2744","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2745","type":"Text"},"selection_glyph":null,"view":{"id":"2747","type":"CDSView"}},"id":"2746","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"2732","type":"Selection"},"selection_policy":{"id":"2756","type":"UnionRenderers"}},"id":"2731","type":"ColumnDataSource"},{"attributes":{},"id":"2553","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2558","type":"Line"},{"attributes":{"source":{"id":"2741","type":"ColumnDataSource"}},"id":"2747","type":"CDSView"},{"attributes":{"below":[{"id":"2526","type":"LinearAxis"}],"left":[{"id":"2531","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"2526","type":"LinearAxis"},{"id":"2530","type":"Grid"},{"id":"2531","type":"LinearAxis"},{"id":"2535","type":"Grid"},{"id":"2545","type":"BoxAnnotation"},{"id":"2568","type":"Legend"},{"id":"2560","type":"GlyphRenderer"},{"id":"2572","type":"Span"},{"id":"2578","type":"GlyphRenderer"},{"id":"2582","type":"Span"},{"id":"2588","type":"GlyphRenderer"}],"title":{"id":"2517","type":"Title"},"toolbar":{"id":"2541","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2514","type":"Range1d"},"x_scale":{"id":"2522","type":"LinearScale"},"y_range":{"id":"2515","type":"Range1d"},"y_scale":{"id":"2524","type":"LinearScale"}},"id":"2518","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Oregon"},"id":"2517","type":"Title"},{"attributes":{"items":[],"plot":{"id":"2676","subtype":"Figure","type":"Plot"}},"id":"2726","type":"Legend"},{"attributes":{},"id":"2754","type":"UnionRenderers"},{"attributes":{},"id":"2756","type":"UnionRenderers"},{"attributes":{},"id":"2600","type":"UnionRenderers"},{"attributes":{"source":{"id":"2573","type":"ColumnDataSource"}},"id":"2579","type":"CDSView"},{"attributes":{},"id":"2758","type":"UnionRenderers"},{"attributes":{"source":{"id":"2712","type":"ColumnDataSource"}},"id":"2719","type":"CDSView"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2735","type":"Text"},{"attributes":{},"id":"2527","type":"BasicTicker"},{"attributes":{"tools":[{"id":"2516","type":"HoverTool"},{"id":"2536","type":"SaveTool"},{"id":"2537","type":"PanTool"},{"id":"2538","type":"WheelZoomTool"},{"id":"2539","type":"BoxZoomTool"},{"id":"2540","type":"ResetTool"},{"id":"2674","type":"HoverTool"},{"id":"2694","type":"SaveTool"},{"id":"2695","type":"PanTool"},{"id":"2696","type":"WheelZoomTool"},{"id":"2697","type":"BoxZoomTool"},{"id":"2698","type":"ResetTool"}]},"id":"2860","type":"ProxyToolbar"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2576","type":"Text"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"2572","type":"Span"},{"attributes":{},"id":"2732","type":"Selection"},{"attributes":{"toolbar":{"id":"2860","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"2861","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2703","type":"BoxAnnotation"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"2582","type":"Span"},{"attributes":{},"id":"2536","type":"SaveTool"},{"attributes":{"children":[{"id":"2861","type":"ToolbarBox"},{"id":"2859","type":"Column"}]},"id":"2862","type":"Column"},{"attributes":{},"id":"2524","type":"LinearScale"},{"attributes":{},"id":"2598","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2573","type":"ColumnDataSource"},"glyph":{"id":"2576","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2577","type":"Text"},"selection_glyph":null,"view":{"id":"2579","type":"CDSView"}},"id":"2578","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxPQrXo3AqQFG4HoXr2Y1AAAAAAAAAAAAAAAAAAAAAANejcD0K91hA9yhcj8KJkkBcj8L1KNCMQE24HoXrEYtAgetRuB7FV0DNzMzMzISCQPv/////54lAH4XrUbiePUBwPQrXozR4QHM9CtejToBA7VG4HoXLXkBmZmZmZv6BQF6PwvUoXDRA9yhcj8J1OEAzMzMzMzMUQBSuR+F6FBxAYI/C9SjcN0CkcD0K14NNQHkUrkfheiZAKlyPwvUoDEBpZmZmZmYcQLBH4XoUrhxAMzMzMzMz8z/rUbgehesSQFyPwvUoXAFAx8zMzMzMH0DMzMzMzMzsP5qZmZmZmek/AAAAAAAA4D+amZmZmZm5P6RwPQrXozBApXA9CtejAkA+CtejcD0GQArXo3A9Csc/9ihcj8L1/D9RuB6F61EGQIXrUbgehQ1ANTMzMzMz/z/1KFyPwvUQQM3MzMzMzPQ/AAAAAAAAAAAAAAAAAAAAAHwUrkfhegZAXY/C9Shc3z8AAAAAAAAAAHsUrkfherQ/exSuR+F6xD89CtejcD3iP3sUrkfherQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"2713","type":"Selection"},"selection_policy":{"id":"2754","type":"UnionRenderers"}},"id":"2712","type":"ColumnDataSource"},{"attributes":{},"id":"2596","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"2574","type":"Selection"},"selection_policy":{"id":"2598","type":"UnionRenderers"}},"id":"2573","type":"ColumnDataSource"},{"attributes":{},"id":"2551","type":"BasicTickFormatter"},{"attributes":{},"id":"2522","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2559","type":"Line"},{"attributes":{},"id":"2555","type":"Selection"},{"attributes":{},"id":"2537","type":"PanTool"},{"attributes":{"source":{"id":"2731","type":"ColumnDataSource"}},"id":"2737","type":"CDSView"},{"attributes":{"overlay":{"id":"2545","type":"BoxAnnotation"}},"id":"2539","type":"BoxZoomTool"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2577","type":"Text"}],"root_ids":["2862"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"0152332a-db18-43f6-981c-00cb3f2a8438","roots":{"2862":"a5948eff-5cd0-4d97-89b6-53601ea84509"}}];
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