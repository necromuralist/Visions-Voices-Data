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
      };var element = document.getElementById("f45d870f-796e-4c70-8b75-a2096302f00d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f45d870f-796e-4c70-8b75-a2096302f00d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3b2c6bba-0df7-40c0-a6db-0ab311a1126b":{"roots":{"references":[{"attributes":{"source":{"id":"44494","type":"ColumnDataSource"}},"id":"44501","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"44453","type":"HoverTool"},{"id":"44476","type":"SaveTool"},{"id":"44477","type":"PanTool"},{"id":"44478","type":"WheelZoomTool"},{"id":"44479","type":"BoxZoomTool"},{"id":"44480","type":"ResetTool"}]},"id":"44481","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"44458","subtype":"Figure","type":"Plot"},"ticker":{"id":"44472","type":"BasicTicker"}},"id":"44475","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44498","type":"Line"},{"attributes":{"below":[{"id":"44466","type":"LinearAxis"}],"left":[{"id":"44471","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"44466","type":"LinearAxis"},{"id":"44470","type":"Grid"},{"id":"44471","type":"LinearAxis"},{"id":"44475","type":"Grid"},{"id":"44485","type":"BoxAnnotation"},{"id":"44508","type":"Legend"},{"id":"44500","type":"GlyphRenderer"},{"id":"44516","type":"GlyphRenderer"},{"id":"44533","type":"GlyphRenderer"},{"id":"44552","type":"GlyphRenderer"},{"id":"44667","type":"Span"},{"id":"44673","type":"GlyphRenderer"},{"id":"44677","type":"Span"},{"id":"44683","type":"GlyphRenderer"},{"id":"44508","type":"Legend"}],"right":[{"id":"44508","type":"Legend"}],"title":{"id":"44457","type":"Title"},"toolbar":{"id":"44481","type":"Toolbar"},"x_range":{"id":"44451","type":"Range1d"},"x_scale":{"id":"44462","type":"LinearScale"},"y_range":{"id":"44452","type":"Range1d"},"y_scale":{"id":"44464","type":"LinearScale"}},"id":"44458","subtype":"Figure","type":"Plot"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44682","type":"Text"},{"attributes":{"line_alpha":0.2,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44532","type":"Line"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"44669","type":"Selection"},"selection_policy":{"id":"44699","type":"UnionRenderers"}},"id":"44668","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44515","type":"Line"},{"attributes":{"source":{"id":"44546","type":"ColumnDataSource"}},"id":"44553","type":"CDSView"},{"attributes":{},"id":"44543","type":"UnionRenderers"},{"attributes":{"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44513","type":"Line"},{"attributes":{},"id":"44699","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"44527","type":"ColumnDataSource"},"glyph":{"id":"44530","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"44532","type":"Line"},"nonselection_glyph":{"id":"44531","type":"Line"},"selection_glyph":null,"view":{"id":"44534","type":"CDSView"}},"id":"44533","type":"GlyphRenderer"},{"attributes":{"source":{"id":"44668","type":"ColumnDataSource"}},"id":"44674","type":"CDSView"},{"attributes":{"callback":null,"data":{"State":["Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"4noUrkdhXUCZmZmZmc1xQPcoXI/Cf49Ah+tRuB45ekAghetRuD52QOV6FK5HOpZAGK5H4XpkVEBACtejcO1bQNijcD0Kf5FA4XoUrkfVnkBM4XoUrsd9QB+F61G4JmRApnA9CtdjgkAL16NwPYiRQLcehetRhoZA4XoUrkfpZUBkZmZmZmp6QHwUrkfhWopAm5mZmZlZdUAqXI/C9SCFQGZmZmZmwnJAUbgehesJekCQwvUoXB+EQLkehetRlH9AonA9Ctdvh0CD61G4Hh18QHgUrkfhxI9AhOtRuB6FgED0KFyPwqWQQB+F61G4jINApnA9Ctefc0BmZmZmZmJ0QD4K16NwdZJAw/UoXI8mfkAghetRuByCQChcj8L1YoFA1qNwPQoLcUB7FK5H4XpIQON6FK5HYSNA4noUrkchMUDC9ShcjwIwQCCF61G4PlxAzMzMzMzMAkBxPQrXo1BIQJuZmZmZGUdA6lG4HoXrG0AqXI/C9XhQQJmZmZmZ6V1Auh6F61G4K0B6FK5H4XofQKRwPQrXo9A/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF61G4HoU0QLgehetRuM4/XI/C9SgcMUBSuB6F61EjQBSuR+F6FPo/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"44528","type":"Selection"},"selection_policy":{"id":"44564","type":"UnionRenderers"}},"id":"44527","type":"ColumnDataSource"},{"attributes":{"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44530","type":"Line"},{"attributes":{"callback":null,"data":{"State":["North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"AQAAAABAXUBSuB6F68FhQIbrUbge4XNADNejcD1ad0DYo3A9Co2EQDIzMzMzJ3JAh+tRuB6FMEDNzMzMzMwgQJuZmZmZ+4pAROF6FK5ZikCcmZmZmaFiQGdmZmZm5mtA33oUrkchcUAL16NwPfSIQHkUrkfhIoRA1aNwPQoHUEDsUbgehWtEQMP1KFyPgm1AaGZmZmbOakBlZmZmZr5uQIzC9Shcz09ASeF6FK6vekAJ16NwPQJ7QPcoXI/CzW9AfBSuR+FifEAqXI/C9Xx5QO5RuB6Fp3ZAAAAAAACqg0BxPQrXo1SGQLcehetRHIxAJ1yPwvVoeED//////297QPUoXI/COYJApnA9CtcvhUClcD0K12mJQK1H4XoUeoNAGK5H4XqUakCD61G4HuVhQBeuR+F61DZAkML1KFwPKkD8/////59JQPQoXI/CFUJAfBSuR+H6IkBzPQrXo3AmQEjhehSuRxdApnA9Ctd7YEBwPQrXo3DdP/YoXI/C9RJAbj0K16NwO0DNzMzMzMwEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzMzMzPDP1uPwvUoXAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzMzMzPDPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"44547","type":"Selection"},"selection_policy":{"id":"44579","type":"UnionRenderers"}},"id":"44546","type":"ColumnDataSource"},{"attributes":{},"id":"44579","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"44485","type":"BoxAnnotation"}},"id":"44479","type":"BoxZoomTool"},{"attributes":{},"id":"44493","type":"BasicTickFormatter"},{"attributes":{},"id":"44524","type":"UnionRenderers"},{"attributes":{},"id":"44528","type":"Selection"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"44677","type":"Span"},{"attributes":{},"id":"44701","type":"UnionRenderers"},{"attributes":{},"id":"44547","type":"Selection"},{"attributes":{"source":{"id":"44510","type":"ColumnDataSource"}},"id":"44517","type":"CDSView"},{"attributes":{"callback":null,"data":{"State":["Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHE9CtejcCpAUbgehevZjUAAAAAAAAAAAAAAAAAAAAAA16NwPQr3WED3KFyPwomSQFyPwvUo0IxATbgehesRi0CB61G4HsVXQM3MzMzMhIJA+//////niUAfhetRuJ49QHA9CtejNHhAcz0K16NOgEDtUbgehcteQGZmZmZm/oFAXo/C9ShcNED3KFyPwnU4QDMzMzMzMxRAFK5H4XoUHEBgj8L1KNw3QKRwPQrXg01AeRSuR+F6JkAqXI/C9SgMQGlmZmZmZhxAsEfhehSuHEAzMzMzMzPzP+tRuB6F6xJAXI/C9ShcAUDHzMzMzMwfQMzMzMzMzOw/mpmZmZmZ6T8AAAAAAADgP5qZmZmZmbk/pHA9CtejMEClcD0K16MCQD4K16NwPQZACtejcD0Kxz/2KFyPwvX8P1G4HoXrUQZAhetRuB6FDUA1MzMzMzP/P/UoXI/C9RBAzczMzMzM9D8AAAAAAAAAAAAAAAAAAAAAfBSuR+F6BkBdj8L1KFzfPwAAAAAAAAAAexSuR+F6tD97FK5H4XrEPz0K16NwPeI/exSuR+F6tD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"44495","type":"Selection"},"selection_policy":{"id":"44524","type":"UnionRenderers"}},"id":"44494","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"44679","type":"Selection"},"selection_policy":{"id":"44701","type":"UnionRenderers"}},"id":"44678","type":"ColumnDataSource"},{"attributes":{},"id":"44495","type":"Selection"},{"attributes":{"data_source":{"id":"44668","type":"ColumnDataSource"},"glyph":{"id":"44671","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44672","type":"Text"},"selection_glyph":null,"view":{"id":"44674","type":"CDSView"}},"id":"44673","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"State":["Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"getRuB6VaEC3HoXrUfg5QIbrUbgehSFAfRSuR+EyaED3KFyPwo1vQML1KFyPymZAULgehetpcEDJzMzMzGRuQB+F61G4mnpAMjMzMzOxhUATrkfhehh1QFS4HoXrgVlA4noUrkexeEA2MzMzM1eEQHkUrkfhymZAexSuR+E+cECYmZmZmRl7QHI9CtejkElAMzMzMzMzcUAUrkfhevB/QM7MzMzMQHRAhutRuB5hdkAK16NwPYJoQD4K16NwRXRAjsL1KFzxhkBsPQrXo3BcQCpcj8L12HNAZmZmZmZufkDsUbgehX+CQGtmZmZm5m5AHYXrUbheekABAAAAAJxxQKFwPQrXQ21ApXA9CtfjgUDVo3A9CgN1QMH1KFyPanxA9Shcj8LdbkBhZmZmZgZOQAEAAAAAAAhAfBSuR+F6KUCkcD0K16MqQDMzMzMz80FArkfhehQuLED4KFyPwrU/QOxRuB6F6xlAzczMzMzMAkDD9ShcjwpsQI/C9ShcjzJAhetRuB6F2z+4HoXrUbgCQAAAAAAAAAAAmpmZmZmZyT8AAAAAAAAAAJqZmZmZmbk/AAAAAAAAAAD+//////8YQJqZmZmZmbk/AAAAAAAAAAAAAAAAAAAAAJmZmZmZmek/hutRuB6FAUA2MzMzMxNFQAAAAAAAAAAAAAAAAAAAAAAK16NwPQrHPx+F61G4HtU/exSuR+F6xD9cj8L1KFwaQHsUrkfherQ/AAAAAAAAAAAAAAAAAAAAAHsUrkfhesQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"44511","type":"Selection"},"selection_policy":{"id":"44543","type":"UnionRenderers"}},"id":"44510","type":"ColumnDataSource"},{"attributes":{},"id":"44480","type":"ResetTool"},{"attributes":{},"id":"44472","type":"BasicTicker"},{"attributes":{"data_source":{"id":"44546","type":"ColumnDataSource"},"glyph":{"id":"44549","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"44551","type":"Line"},"nonselection_glyph":{"id":"44550","type":"Line"},"selection_glyph":null,"view":{"id":"44553","type":"CDSView"}},"id":"44552","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44499","type":"Line"},{"attributes":{},"id":"44511","type":"Selection"},{"attributes":{},"id":"44477","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44550","type":"Line"},{"attributes":{"label":{"value":"Hawaii"},"renderers":[{"id":"44500","type":"GlyphRenderer"}]},"id":"44509","type":"LegendItem"},{"attributes":{},"id":"44462","type":"LinearScale"},{"attributes":{},"id":"44476","type":"SaveTool"},{"attributes":{"source":{"id":"44678","type":"ColumnDataSource"}},"id":"44684","type":"CDSView"},{"attributes":{"label":{"value":"Idaho"},"renderers":[{"id":"44516","type":"GlyphRenderer"}]},"id":"44526","type":"LegendItem"},{"attributes":{"data_source":{"id":"44510","type":"ColumnDataSource"},"glyph":{"id":"44513","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"44515","type":"Line"},"nonselection_glyph":{"id":"44514","type":"Line"},"selection_glyph":null,"view":{"id":"44517","type":"CDSView"}},"id":"44516","type":"GlyphRenderer"},{"attributes":{"label":{"value":"North Dakota"},"renderers":[{"id":"44552","type":"GlyphRenderer"}]},"id":"44566","type":"LegendItem"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"renderers":[{"id":"44500","type":"GlyphRenderer"},{"id":"44516","type":"GlyphRenderer"},{"id":"44533","type":"GlyphRenderer"},{"id":"44552","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"],["State","@State"]]},"id":"44453","type":"HoverTool"},{"attributes":{},"id":"44564","type":"UnionRenderers"},{"attributes":{"callback":null,"end":2005.0,"reset_end":2005.0,"reset_start":1930.0,"start":1930.0,"tags":[[["Year","Year",null]]]},"id":"44451","type":"Range1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44497","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44551","type":"Line"},{"attributes":{},"id":"44464","type":"LinearScale"},{"attributes":{"data_source":{"id":"44494","type":"ColumnDataSource"},"glyph":{"id":"44497","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"44499","type":"Line"},"nonselection_glyph":{"id":"44498","type":"Line"},"selection_glyph":null,"view":{"id":"44501","type":"CDSView"}},"id":"44500","type":"GlyphRenderer"},{"attributes":{},"id":"44478","type":"WheelZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"44458","subtype":"Figure","type":"Plot"},"ticker":{"id":"44467","type":"BasicTicker"}},"id":"44470","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44485","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44514","type":"Line"},{"attributes":{"plot":null,"text":"Measles 1930 - 2005","text_font_size":{"value":"18pt"}},"id":"44457","type":"Title"},{"attributes":{},"id":"44467","type":"BasicTicker"},{"attributes":{"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44549","type":"Line"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"44667","type":"Span"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"44491","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"44458","subtype":"Figure","type":"Plot"},"ticker":{"id":"44467","type":"BasicTicker"}},"id":"44466","type":"LinearAxis"},{"attributes":{},"id":"44491","type":"BasicTickFormatter"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44671","type":"Text"},{"attributes":{"source":{"id":"44527","type":"ColumnDataSource"}},"id":"44534","type":"CDSView"},{"attributes":{},"id":"44669","type":"Selection"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"44493","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"44458","subtype":"Figure","type":"Plot"},"ticker":{"id":"44472","type":"BasicTicker"}},"id":"44471","type":"LinearAxis"},{"attributes":{},"id":"44679","type":"Selection"},{"attributes":{"callback":null,"end":1973.32,"reset_end":1973.32,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"44452","type":"Range1d"},{"attributes":{"click_policy":"mute","items":[{"id":"44509","type":"LegendItem"},{"id":"44526","type":"LegendItem"},{"id":"44545","type":"LegendItem"},{"id":"44566","type":"LegendItem"}],"label_text_font_size":{"value":"18pt"},"location":[0,0],"plot":{"id":"44458","subtype":"Figure","type":"Plot"}},"id":"44508","type":"Legend"},{"attributes":{"data_source":{"id":"44678","type":"ColumnDataSource"},"glyph":{"id":"44681","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44682","type":"Text"},"selection_glyph":null,"view":{"id":"44684","type":"CDSView"}},"id":"44683","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Montana"},"renderers":[{"id":"44533","type":"GlyphRenderer"}]},"id":"44545","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"44531","type":"Line"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44672","type":"Text"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44681","type":"Text"}],"root_ids":["44458"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"3b2c6bba-0df7-40c0-a6db-0ab311a1126b","roots":{"44458":"f45d870f-796e-4c70-8b75-a2096302f00d"}}];
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