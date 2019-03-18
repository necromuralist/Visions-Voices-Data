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
      };var element = document.getElementById("d4b7b792-b833-46c8-baaa-dd67da1e0ed9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4b7b792-b833-46c8-baaa-dd67da1e0ed9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b516b4f-5d4d-4012-bd86-215340c9ca02":{"roots":{"references":[{"attributes":{},"id":"3093","type":"LinearScale"},{"attributes":{},"id":"3164","type":"UnionRenderers"},{"attributes":{},"id":"2995","type":"Selection"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"2986","type":"Span"},{"attributes":{},"id":"3143","type":"Selection"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"3119","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3087","subtype":"Figure","type":"Plot"},"ticker":{"id":"3096","type":"BasicTicker"}},"id":"3095","type":"LinearAxis"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"3141","type":"Span"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"2995","type":"Selection"},"selection_policy":{"id":"3010","type":"UnionRenderers"}},"id":"2994","type":"ColumnDataSource"},{"attributes":{},"id":"3091","type":"LinearScale"},{"attributes":{"source":{"id":"2987","type":"ColumnDataSource"}},"id":"2993","type":"CDSView"},{"attributes":{"data_source":{"id":"2987","type":"ColumnDataSource"},"glyph":{"id":"2990","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2991","type":"Text"},"selection_glyph":null,"view":{"id":"2993","type":"CDSView"}},"id":"2992","type":"GlyphRenderer"},{"attributes":{},"id":"3096","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"3143","type":"Selection"},"selection_policy":{"id":"3166","type":"UnionRenderers"}},"id":"3142","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3087","subtype":"Figure","type":"Plot"},"ticker":{"id":"3096","type":"BasicTicker"}},"id":"3099","type":"Grid"},{"attributes":{"plot":null,"text":"Measles in Hawaii","text_font_size":{"value":"18pt"}},"id":"3086","type":"Title"},{"attributes":{"tools":[{"id":"2927","type":"HoverTool"},{"id":"2947","type":"SaveTool"},{"id":"2948","type":"PanTool"},{"id":"2949","type":"WheelZoomTool"},{"id":"2950","type":"BoxZoomTool"},{"id":"2951","type":"ResetTool"},{"id":"3085","type":"HoverTool"},{"id":"3105","type":"SaveTool"},{"id":"3106","type":"PanTool"},{"id":"3107","type":"WheelZoomTool"},{"id":"3108","type":"BoxZoomTool"},{"id":"3109","type":"ResetTool"}]},"id":"3271","type":"ProxyToolbar"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"3121","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3087","subtype":"Figure","type":"Plot"},"ticker":{"id":"3101","type":"BasicTicker"}},"id":"3100","type":"LinearAxis"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2991","type":"Text"},{"attributes":{"toolbar":{"id":"3271","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3272","type":"ToolbarBox"},{"attributes":{"callback":null,"end":1186.4400000000003,"reset_end":1186.4400000000003,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"2926","type":"Range1d"},{"attributes":{},"id":"3101","type":"BasicTicker"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"2925","type":"Range1d"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3145","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"3087","subtype":"Figure","type":"Plot"},"ticker":{"id":"3101","type":"BasicTicker"}},"id":"3104","type":"Grid"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"2971","type":"GlyphRenderer"}],"tooltips":[["Measles Cases","@measles{0,0}"],["Year","@Year"]]},"id":"2927","type":"HoverTool"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3146","type":"Text"},{"attributes":{"below":[{"id":"2937","type":"LinearAxis"}],"left":[{"id":"2942","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":550,"renderers":[{"id":"2937","type":"LinearAxis"},{"id":"2941","type":"Grid"},{"id":"2942","type":"LinearAxis"},{"id":"2946","type":"Grid"},{"id":"2956","type":"BoxAnnotation"},{"id":"2979","type":"Legend"},{"id":"2971","type":"GlyphRenderer"},{"id":"2983","type":"Span"},{"id":"2986","type":"Span"},{"id":"2992","type":"GlyphRenderer"},{"id":"2999","type":"GlyphRenderer"}],"title":{"id":"2928","type":"Title"},"toolbar":{"id":"2952","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2925","type":"Range1d"},"x_scale":{"id":"2933","type":"LinearScale"},"y_range":{"id":"2926","type":"Range1d"},"y_scale":{"id":"2935","type":"LinearScale"}},"id":"2929","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3121","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"3272","type":"ToolbarBox"},{"id":"3270","type":"Column"}]},"id":"3273","type":"Column"},{"attributes":{"plot":null,"text":"Measles in Oregon","text_font_size":{"value":"18pt"}},"id":"2928","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2969","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3085","type":"HoverTool"},{"id":"3105","type":"SaveTool"},{"id":"3106","type":"PanTool"},{"id":"3107","type":"WheelZoomTool"},{"id":"3108","type":"BoxZoomTool"},{"id":"3109","type":"ResetTool"}]},"id":"3110","type":"Toolbar"},{"attributes":{"source":{"id":"2965","type":"ColumnDataSource"}},"id":"2972","type":"CDSView"},{"attributes":{},"id":"3105","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2968","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2956","type":"BoxAnnotation"},{"attributes":{},"id":"2933","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"2970","type":"Line"},{"attributes":{},"id":"2988","type":"Selection"},{"attributes":{},"id":"3106","type":"PanTool"},{"attributes":{"data_source":{"id":"2965","type":"ColumnDataSource"},"glyph":{"id":"2968","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"2970","type":"Line"},"nonselection_glyph":{"id":"2969","type":"Line"},"selection_glyph":null,"view":{"id":"2972","type":"CDSView"}},"id":"2971","type":"GlyphRenderer"},{"attributes":{},"id":"2935","type":"LinearScale"},{"attributes":{},"id":"3107","type":"WheelZoomTool"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"2961","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2929","subtype":"Figure","type":"Plot"},"ticker":{"id":"2938","type":"BasicTicker"}},"id":"2937","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3114","type":"BoxAnnotation"}},"id":"3108","type":"BoxZoomTool"},{"attributes":{},"id":"2938","type":"BasicTicker"},{"attributes":{},"id":"3109","type":"ResetTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2929","subtype":"Figure","type":"Plot"},"ticker":{"id":"2938","type":"BasicTicker"}},"id":"2941","type":"Grid"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"2963","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"2929","subtype":"Figure","type":"Plot"},"ticker":{"id":"2943","type":"BasicTicker"}},"id":"2942","type":"LinearAxis"},{"attributes":{},"id":"3168","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3114","type":"BoxAnnotation"},{"attributes":{"items":[],"plot":{"id":"2929","subtype":"Figure","type":"Plot"}},"id":"2979","type":"Legend"},{"attributes":{},"id":"2943","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2929","subtype":"Figure","type":"Plot"},"ticker":{"id":"2943","type":"BasicTicker"}},"id":"2946","type":"Grid"},{"attributes":{"children":[{"id":"2929","subtype":"Figure","type":"Plot"},{"id":"3087","subtype":"Figure","type":"Plot"}]},"id":"3269","type":"Row"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2990","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2927","type":"HoverTool"},{"id":"2947","type":"SaveTool"},{"id":"2948","type":"PanTool"},{"id":"2949","type":"WheelZoomTool"},{"id":"2950","type":"BoxZoomTool"},{"id":"2951","type":"ResetTool"}]},"id":"2952","type":"Toolbar"},{"attributes":{},"id":"2947","type":"SaveTool"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"3153","type":"Selection"},"selection_policy":{"id":"3168","type":"UnionRenderers"}},"id":"3152","type":"ColumnDataSource"},{"attributes":{},"id":"2948","type":"PanTool"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"3151","type":"Span"},{"attributes":{},"id":"2949","type":"WheelZoomTool"},{"attributes":{},"id":"3153","type":"Selection"},{"attributes":{"overlay":{"id":"2956","type":"BoxAnnotation"}},"id":"2950","type":"BoxZoomTool"},{"attributes":{},"id":"3124","type":"Selection"},{"attributes":{},"id":"2951","type":"ResetTool"},{"attributes":{"source":{"id":"3142","type":"ColumnDataSource"}},"id":"3148","type":"CDSView"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"eRSuR+Hia0CG61G4HsV+QPQoXI/CRXFAU7gehetRbkCamZmZmRGAQKNwPQrXy2xAAAAAAAAwaEA+CtejcAuGQDUzMzMzuYxAuR6F61EYQ0ApXI/C9XheQJqZmZmZeWtAKFyPwvX4hECtR+F6FPyCQAvXo3A9Mn9AmpmZmZmvhUCmcD0K1/ttQAvXo3A9imNAVLgehetVfEAL16NwPfpRQJmZmZmZ+XZA1qNwPQpjhUByPQrXo7BIQB+F61G4ToNAisL1KFw3akCG61G4HnGBQKdwPQrXi25AxPUoXI9yckBvPQrXo+BgQAAAAAAAeotAXI/C9SiIgECG61G4Hvl7QOlRuB6Fh4NAzczMzMwgdEClcD0K1/GHQM3MzMzMJHBAXY/C9ShQfEBJ4XoUrrdmQAXXo3A9ul9ArkfhehSuVUA0MzMzM7M+QCxcj8L1qCNAaGZmZmYmNUB0PQrXo/AvQGdmZmZm5iFAhetRuB6FM0B7FK5H4XrwP1uPwvUo3CBAfRSuR+F6HEAH16NwPYopQBSuR+F6lDRAPQrXo3A9BkB7FK5H4Xq0P5qZmZmZmck/C9ejcD0K5z+amZmZmZnZPwAAAAAAAAAAU7gehetRyD+kcD0K16PQPxSuR+F6FAhAzszMzMzM9D8zMzMzMzP3P5uZmZmZmfU/PQrXo3A9BkCQwvUoXI/SPwAAAAAAAAAAAAAAAAAAAAAK16NwPQq3Px6F61G4HtU/CtejcD0Ktz8AAAAAAAAAADMzMzMzM8M/AAAAAAAAAAAK16NwPQrHPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"2966","type":"Selection"},"selection_policy":{"id":"3006","type":"UnionRenderers"}},"id":"2965","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxPQrXo3AqQFG4HoXr2Y1AAAAAAAAAAAAAAAAAAAAAANejcD0K91hA9yhcj8KJkkBcj8L1KNCMQE24HoXrEYtAgetRuB7FV0DNzMzMzISCQPv/////54lAH4XrUbiePUBwPQrXozR4QHM9CtejToBA7VG4HoXLXkBmZmZmZv6BQF6PwvUoXDRA9yhcj8J1OEAzMzMzMzMUQBSuR+F6FBxAYI/C9SjcN0CkcD0K14NNQHkUrkfheiZAKlyPwvUoDEBpZmZmZmYcQLBH4XoUrhxAMzMzMzMz8z/rUbgehesSQFyPwvUoXAFAx8zMzMzMH0DMzMzMzMzsP5qZmZmZmek/AAAAAAAA4D+amZmZmZm5P6RwPQrXozBApXA9CtejAkA+CtejcD0GQArXo3A9Csc/9ihcj8L1/D9RuB6F61EGQIXrUbgehQ1ANTMzMzMz/z/1KFyPwvUQQM3MzMzMzPQ/AAAAAAAAAAAAAAAAAAAAAHwUrkfhegZAXY/C9Shc3z8AAAAAAAAAAHsUrkfherQ/exSuR+F6xD89CtejcD3iP3sUrkfherQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"3124","type":"Selection"},"selection_policy":{"id":"3164","type":"UnionRenderers"}},"id":"3123","type":"ColumnDataSource"},{"attributes":{},"id":"2966","type":"Selection"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"3129","type":"GlyphRenderer"}],"tooltips":[["Measles Cases","@measles{0,0}"],["Year","@Year"]]},"id":"3085","type":"HoverTool"},{"attributes":{"source":{"id":"3152","type":"ColumnDataSource"}},"id":"3158","type":"CDSView"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"2983","type":"Span"},{"attributes":{"data_source":{"id":"3142","type":"ColumnDataSource"},"glyph":{"id":"3145","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3146","type":"Text"},"selection_glyph":null,"view":{"id":"3148","type":"CDSView"}},"id":"3147","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3152","type":"ColumnDataSource"},"glyph":{"id":"3155","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3156","type":"Text"},"selection_glyph":null,"view":{"id":"3158","type":"CDSView"}},"id":"3157","type":"GlyphRenderer"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2997","type":"Text"},{"attributes":{},"id":"3166","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3126","type":"Line"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2998","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3127","type":"Line"},{"attributes":{},"id":"3119","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2994","type":"ColumnDataSource"},"glyph":{"id":"2997","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2998","type":"Text"},"selection_glyph":null,"view":{"id":"3000","type":"CDSView"}},"id":"2999","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3128","type":"Line"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3155","type":"Text"},{"attributes":{"source":{"id":"2994","type":"ColumnDataSource"}},"id":"3000","type":"CDSView"},{"attributes":{"data_source":{"id":"3123","type":"ColumnDataSource"},"glyph":{"id":"3126","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"3128","type":"Line"},"nonselection_glyph":{"id":"3127","type":"Line"},"selection_glyph":null,"view":{"id":"3130","type":"CDSView"}},"id":"3129","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3156","type":"Text"},{"attributes":{"children":[{"id":"3269","type":"Row"}]},"id":"3270","type":"Column"},{"attributes":{"below":[{"id":"3095","type":"LinearAxis"}],"left":[{"id":"3100","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":550,"renderers":[{"id":"3095","type":"LinearAxis"},{"id":"3099","type":"Grid"},{"id":"3100","type":"LinearAxis"},{"id":"3104","type":"Grid"},{"id":"3114","type":"BoxAnnotation"},{"id":"3137","type":"Legend"},{"id":"3129","type":"GlyphRenderer"},{"id":"3141","type":"Span"},{"id":"3147","type":"GlyphRenderer"},{"id":"3151","type":"Span"},{"id":"3157","type":"GlyphRenderer"}],"title":{"id":"3086","type":"Title"},"toolbar":{"id":"3110","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2925","type":"Range1d"},"x_scale":{"id":"3091","type":"LinearScale"},"y_range":{"id":"2926","type":"Range1d"},"y_scale":{"id":"3093","type":"LinearScale"}},"id":"3087","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3006","type":"UnionRenderers"},{"attributes":{"source":{"id":"3123","type":"ColumnDataSource"}},"id":"3130","type":"CDSView"},{"attributes":{},"id":"3008","type":"UnionRenderers"},{"attributes":{"items":[],"plot":{"id":"3087","subtype":"Figure","type":"Plot"}},"id":"3137","type":"Legend"},{"attributes":{},"id":"3010","type":"UnionRenderers"},{"attributes":{},"id":"2963","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"2988","type":"Selection"},"selection_policy":{"id":"3008","type":"UnionRenderers"}},"id":"2987","type":"ColumnDataSource"},{"attributes":{},"id":"2961","type":"BasicTickFormatter"}],"root_ids":["3273"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"2b516b4f-5d4d-4012-bd86-215340c9ca02","roots":{"3273":"d4b7b792-b833-46c8-baaa-dd67da1e0ed9"}}];
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