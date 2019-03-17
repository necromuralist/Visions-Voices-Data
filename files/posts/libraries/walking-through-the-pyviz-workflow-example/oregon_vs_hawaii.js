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
      };var element = document.getElementById("2afd056c-6190-4252-86e5-9b4f272e2e0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2afd056c-6190-4252-86e5-9b4f272e2e0f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7968e41c-11ce-4b73-ad43-85f2bd156438":{"roots":{"references":[{"attributes":{},"id":"41839","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"42033","type":"Line"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxPQrXo3AqQFG4HoXr2Y1AAAAAAAAAAAAAAAAAAAAAANejcD0K91hA9yhcj8KJkkBcj8L1KNCMQE24HoXrEYtAgetRuB7FV0DNzMzMzISCQPv/////54lAH4XrUbiePUBwPQrXozR4QHM9CtejToBA7VG4HoXLXkBmZmZmZv6BQF6PwvUoXDRA9yhcj8J1OEAzMzMzMzMUQBSuR+F6FBxAYI/C9SjcN0CkcD0K14NNQHkUrkfheiZAKlyPwvUoDEBpZmZmZmYcQLBH4XoUrhxAMzMzMzMz8z/rUbgehesSQFyPwvUoXAFAx8zMzMzMH0DMzMzMzMzsP5qZmZmZmek/AAAAAAAA4D+amZmZmZm5P6RwPQrXozBApXA9CtejAkA+CtejcD0GQArXo3A9Csc/9ihcj8L1/D9RuB6F61EGQIXrUbgehQ1ANTMzMzMz/z/1KFyPwvUQQM3MzMzMzPQ/AAAAAAAAAAAAAAAAAAAAAHwUrkfhegZAXY/C9Shc3z8AAAAAAAAAAHsUrkfherQ/exSuR+F6xD89CtejcD3iP3sUrkfherQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"42030","type":"Selection"},"selection_policy":{"id":"42071","type":"UnionRenderers"}},"id":"42029","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"42049","type":"Selection"},"selection_policy":{"id":"42073","type":"UnionRenderers"}},"id":"42048","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"42175","type":"Row"}]},"id":"42176","type":"Column"},{"attributes":{"source":{"id":"42058","type":"ColumnDataSource"}},"id":"42064","type":"CDSView"},{"attributes":{},"id":"42071","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1186.4400000000003,"reset_end":1186.4400000000003,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"41832","type":"Range1d"},{"attributes":{},"id":"42073","type":"UnionRenderers"},{"attributes":{},"id":"42013","type":"WheelZoomTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42062","type":"Text"},{"attributes":{},"id":"41894","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"42032","type":"Line"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41896","type":"Text"},{"attributes":{},"id":"41857","type":"ResetTool"},{"attributes":{"items":[],"plot":{"id":"41993","subtype":"Figure","type":"Plot"}},"id":"42043","type":"Legend"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42051","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"41991","type":"HoverTool"},{"id":"42011","type":"SaveTool"},{"id":"42012","type":"PanTool"},{"id":"42013","type":"WheelZoomTool"},{"id":"42014","type":"BoxZoomTool"},{"id":"42015","type":"ResetTool"}]},"id":"42016","type":"Toolbar"},{"attributes":{"overlay":{"id":"41862","type":"BoxAnnotation"}},"id":"41856","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Measles in Oregon","text_font_size":{"value":"18pt"}},"id":"41834","type":"Title"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"42028","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"41993","subtype":"Figure","type":"Plot"},"ticker":{"id":"42007","type":"BasicTicker"}},"id":"42006","type":"LinearAxis"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"41868","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"41835","subtype":"Figure","type":"Plot"},"ticker":{"id":"41844","type":"BasicTicker"}},"id":"41843","type":"LinearAxis"},{"attributes":{"source":{"id":"42048","type":"ColumnDataSource"}},"id":"42054","type":"CDSView"},{"attributes":{},"id":"42030","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41862","type":"BoxAnnotation"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41897","type":"Text"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"42020","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"41835","subtype":"Figure","type":"Plot"},"ticker":{"id":"41849","type":"BasicTicker"}},"id":"41852","type":"Grid"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41904","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"41833","type":"HoverTool"},{"id":"41853","type":"SaveTool"},{"id":"41854","type":"PanTool"},{"id":"41855","type":"WheelZoomTool"},{"id":"41856","type":"BoxZoomTool"},{"id":"41857","type":"ResetTool"}]},"id":"41858","type":"Toolbar"},{"attributes":{"items":[],"plot":{"id":"41835","subtype":"Figure","type":"Plot"}},"id":"41885","type":"Legend"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"41993","subtype":"Figure","type":"Plot"},"ticker":{"id":"42002","type":"BasicTicker"}},"id":"42005","type":"Grid"},{"attributes":{"children":[{"id":"42178","type":"ToolbarBox"},{"id":"42176","type":"Column"}]},"id":"42179","type":"Column"},{"attributes":{},"id":"41853","type":"SaveTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"42034","type":"Line"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"41993","subtype":"Figure","type":"Plot"},"ticker":{"id":"42007","type":"BasicTicker"}},"id":"42010","type":"Grid"},{"attributes":{},"id":"41870","type":"BasicTickFormatter"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42052","type":"Text"},{"attributes":{},"id":"41855","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"41894","type":"Selection"},"selection_policy":{"id":"41915","type":"UnionRenderers"}},"id":"41893","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"42020","type":"BoxAnnotation"}},"id":"42014","type":"BoxZoomTool"},{"attributes":{},"id":"41913","type":"UnionRenderers"},{"attributes":{},"id":"42075","type":"UnionRenderers"},{"attributes":{},"id":"41854","type":"PanTool"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"42026","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"41993","subtype":"Figure","type":"Plot"},"ticker":{"id":"42002","type":"BasicTicker"}},"id":"42001","type":"LinearAxis"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"41870","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"41835","subtype":"Figure","type":"Plot"},"ticker":{"id":"41849","type":"BasicTicker"}},"id":"41848","type":"LinearAxis"},{"attributes":{"tools":[{"id":"41833","type":"HoverTool"},{"id":"41853","type":"SaveTool"},{"id":"41854","type":"PanTool"},{"id":"41855","type":"WheelZoomTool"},{"id":"41856","type":"BoxZoomTool"},{"id":"41857","type":"ResetTool"},{"id":"41991","type":"HoverTool"},{"id":"42011","type":"SaveTool"},{"id":"42012","type":"PanTool"},{"id":"42013","type":"WheelZoomTool"},{"id":"42014","type":"BoxZoomTool"},{"id":"42015","type":"ResetTool"}]},"id":"42177","type":"ProxyToolbar"},{"attributes":{},"id":"42049","type":"Selection"},{"attributes":{"plot":null,"text":"Measles in Hawaii","text_font_size":{"value":"18pt"}},"id":"41992","type":"Title"},{"attributes":{"below":[{"id":"41843","type":"LinearAxis"}],"left":[{"id":"41848","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":550,"renderers":[{"id":"41843","type":"LinearAxis"},{"id":"41847","type":"Grid"},{"id":"41848","type":"LinearAxis"},{"id":"41852","type":"Grid"},{"id":"41862","type":"BoxAnnotation"},{"id":"41885","type":"Legend"},{"id":"41877","type":"GlyphRenderer"},{"id":"41889","type":"Span"},{"id":"41892","type":"Span"},{"id":"41898","type":"GlyphRenderer"},{"id":"41905","type":"GlyphRenderer"}],"title":{"id":"41834","type":"Title"},"toolbar":{"id":"41858","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"41831","type":"Range1d"},"x_scale":{"id":"41839","type":"LinearScale"},"y_range":{"id":"41832","type":"Range1d"},"y_scale":{"id":"41841","type":"LinearScale"}},"id":"41835","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41841","type":"LinearScale"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"42047","type":"Span"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"42059","type":"Selection"},"selection_policy":{"id":"42075","type":"UnionRenderers"}},"id":"42058","type":"ColumnDataSource"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"41889","type":"Span"},{"attributes":{},"id":"41868","type":"BasicTickFormatter"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"42057","type":"Span"},{"attributes":{},"id":"42007","type":"BasicTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"41876","type":"Line"},{"attributes":{"source":{"id":"41871","type":"ColumnDataSource"}},"id":"41878","type":"CDSView"},{"attributes":{"toolbar":{"id":"42177","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"42178","type":"ToolbarBox"},{"attributes":{},"id":"41917","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"41835","subtype":"Figure","type":"Plot"},"ticker":{"id":"41844","type":"BasicTicker"}},"id":"41847","type":"Grid"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"41892","type":"Span"},{"attributes":{"data_source":{"id":"42048","type":"ColumnDataSource"},"glyph":{"id":"42051","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42052","type":"Text"},"selection_glyph":null,"view":{"id":"42054","type":"CDSView"}},"id":"42053","type":"GlyphRenderer"},{"attributes":{},"id":"42012","type":"PanTool"},{"attributes":{"data_source":{"id":"42029","type":"ColumnDataSource"},"glyph":{"id":"42032","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"42034","type":"Line"},"nonselection_glyph":{"id":"42033","type":"Line"},"selection_glyph":null,"view":{"id":"42036","type":"CDSView"}},"id":"42035","type":"GlyphRenderer"},{"attributes":{},"id":"41997","type":"LinearScale"},{"attributes":{"children":[{"id":"41835","subtype":"Figure","type":"Plot"},{"id":"41993","subtype":"Figure","type":"Plot"}]},"id":"42175","type":"Row"},{"attributes":{"below":[{"id":"42001","type":"LinearAxis"}],"left":[{"id":"42006","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":550,"renderers":[{"id":"42001","type":"LinearAxis"},{"id":"42005","type":"Grid"},{"id":"42006","type":"LinearAxis"},{"id":"42010","type":"Grid"},{"id":"42020","type":"BoxAnnotation"},{"id":"42043","type":"Legend"},{"id":"42035","type":"GlyphRenderer"},{"id":"42047","type":"Span"},{"id":"42053","type":"GlyphRenderer"},{"id":"42057","type":"Span"},{"id":"42063","type":"GlyphRenderer"}],"title":{"id":"41992","type":"Title"},"toolbar":{"id":"42016","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"41831","type":"Range1d"},"x_scale":{"id":"41997","type":"LinearScale"},"y_range":{"id":"41832","type":"Range1d"},"y_scale":{"id":"41999","type":"LinearScale"}},"id":"41993","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"41875","type":"Line"},{"attributes":{},"id":"41844","type":"BasicTicker"},{"attributes":{"source":{"id":"41900","type":"ColumnDataSource"}},"id":"41906","type":"CDSView"},{"attributes":{},"id":"42026","type":"BasicTickFormatter"},{"attributes":{},"id":"41915","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"41900","type":"ColumnDataSource"},"glyph":{"id":"41903","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"41904","type":"Text"},"selection_glyph":null,"view":{"id":"41906","type":"CDSView"}},"id":"41905","type":"GlyphRenderer"},{"attributes":{},"id":"41849","type":"BasicTicker"},{"attributes":{},"id":"41901","type":"Selection"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"41831","type":"Range1d"},{"attributes":{},"id":"42028","type":"BasicTickFormatter"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42061","type":"Text"},{"attributes":{},"id":"42015","type":"ResetTool"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"41901","type":"Selection"},"selection_policy":{"id":"41917","type":"UnionRenderers"}},"id":"41900","type":"ColumnDataSource"},{"attributes":{},"id":"42002","type":"BasicTicker"},{"attributes":{"data_source":{"id":"41871","type":"ColumnDataSource"},"glyph":{"id":"41874","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"41876","type":"Line"},"nonselection_glyph":{"id":"41875","type":"Line"},"selection_glyph":null,"view":{"id":"41878","type":"CDSView"}},"id":"41877","type":"GlyphRenderer"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"42035","type":"GlyphRenderer"}],"tooltips":[["Measles Cases","@measles{0,0}"],["Year","@Year"]]},"id":"41991","type":"HoverTool"},{"attributes":{},"id":"41999","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"41874","type":"Line"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"41877","type":"GlyphRenderer"}],"tooltips":[["Measles Cases","@measles{0,0}"],["Year","@Year"]]},"id":"41833","type":"HoverTool"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41903","type":"Text"},{"attributes":{},"id":"41872","type":"Selection"},{"attributes":{},"id":"42059","type":"Selection"},{"attributes":{"source":{"id":"42029","type":"ColumnDataSource"}},"id":"42036","type":"CDSView"},{"attributes":{"source":{"id":"41893","type":"ColumnDataSource"}},"id":"41899","type":"CDSView"},{"attributes":{},"id":"42011","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"eRSuR+Hia0CG61G4HsV+QPQoXI/CRXFAU7gehetRbkCamZmZmRGAQKNwPQrXy2xAAAAAAAAwaEA+CtejcAuGQDUzMzMzuYxAuR6F61EYQ0ApXI/C9XheQJqZmZmZeWtAKFyPwvX4hECtR+F6FPyCQAvXo3A9Mn9AmpmZmZmvhUCmcD0K1/ttQAvXo3A9imNAVLgehetVfEAL16NwPfpRQJmZmZmZ+XZA1qNwPQpjhUByPQrXo7BIQB+F61G4ToNAisL1KFw3akCG61G4HnGBQKdwPQrXi25AxPUoXI9yckBvPQrXo+BgQAAAAAAAeotAXI/C9SiIgECG61G4Hvl7QOlRuB6Fh4NAzczMzMwgdEClcD0K1/GHQM3MzMzMJHBAXY/C9ShQfEBJ4XoUrrdmQAXXo3A9ul9ArkfhehSuVUA0MzMzM7M+QCxcj8L1qCNAaGZmZmYmNUB0PQrXo/AvQGdmZmZm5iFAhetRuB6FM0B7FK5H4XrwP1uPwvUo3CBAfRSuR+F6HEAH16NwPYopQBSuR+F6lDRAPQrXo3A9BkB7FK5H4Xq0P5qZmZmZmck/C9ejcD0K5z+amZmZmZnZPwAAAAAAAAAAU7gehetRyD+kcD0K16PQPxSuR+F6FAhAzszMzMzM9D8zMzMzMzP3P5uZmZmZmfU/PQrXo3A9BkCQwvUoXI/SPwAAAAAAAAAAAAAAAAAAAAAK16NwPQq3Px6F61G4HtU/CtejcD0Ktz8AAAAAAAAAADMzMzMzM8M/AAAAAAAAAAAK16NwPQrHPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[84]}},"selected":{"id":"41872","type":"Selection"},"selection_policy":{"id":"41913","type":"UnionRenderers"}},"id":"41871","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"41893","type":"ColumnDataSource"},"glyph":{"id":"41896","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"41897","type":"Text"},"selection_glyph":null,"view":{"id":"41899","type":"CDSView"}},"id":"41898","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"42058","type":"ColumnDataSource"},"glyph":{"id":"42061","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42062","type":"Text"},"selection_glyph":null,"view":{"id":"42064","type":"CDSView"}},"id":"42063","type":"GlyphRenderer"}],"root_ids":["42179"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7968e41c-11ce-4b73-ad43-85f2bd156438","roots":{"42179":"2afd056c-6190-4252-86e5-9b4f272e2e0f"}}];
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