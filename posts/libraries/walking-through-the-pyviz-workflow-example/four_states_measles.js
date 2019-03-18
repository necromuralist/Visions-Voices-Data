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
      };var element = document.getElementById("9d388cfc-ccc6-47a2-bfb1-fc9b3ac234bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d388cfc-ccc6-47a2-bfb1-fc9b3ac234bc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dd6f19dd-640a-4d59-a156-752ea728c18f":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3925","type":"HoverTool"},{"id":"3948","type":"SaveTool"},{"id":"3949","type":"PanTool"},{"id":"3950","type":"WheelZoomTool"},{"id":"3951","type":"BoxZoomTool"},{"id":"3952","type":"ResetTool"}]},"id":"3953","type":"Toolbar"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"4141","type":"Selection"},"selection_policy":{"id":"4170","type":"UnionRenderers"}},"id":"4140","type":"ColumnDataSource"},{"attributes":{},"id":"3995","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"State":["Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"getRuB6VaEC3HoXrUfg5QIbrUbgehSFAfRSuR+EyaED3KFyPwo1vQML1KFyPymZAULgehetpcEDJzMzMzGRuQB+F61G4mnpAMjMzMzOxhUATrkfhehh1QFS4HoXrgVlA4noUrkexeEA2MzMzM1eEQHkUrkfhymZAexSuR+E+cECYmZmZmRl7QHI9CtejkElAMzMzMzMzcUAUrkfhevB/QM7MzMzMQHRAhutRuB5hdkAK16NwPYJoQD4K16NwRXRAjsL1KFzxhkBsPQrXo3BcQCpcj8L12HNAZmZmZmZufkDsUbgehX+CQGtmZmZm5m5AHYXrUbheekABAAAAAJxxQKFwPQrXQ21ApXA9CtfjgUDVo3A9CgN1QMH1KFyPanxA9Shcj8LdbkBhZmZmZgZOQAEAAAAAAAhAfBSuR+F6KUCkcD0K16MqQDMzMzMz80FArkfhehQuLED4KFyPwrU/QOxRuB6F6xlAzczMzMzMAkDD9ShcjwpsQI/C9ShcjzJAhetRuB6F2z+4HoXrUbgCQAAAAAAAAAAAmpmZmZmZyT8AAAAAAAAAAJqZmZmZmbk/AAAAAAAAAAD+//////8YQJqZmZmZmbk/AAAAAAAAAAAAAAAAAAAAAJmZmZmZmek/hutRuB6FAUA2MzMzMxNFQAAAAAAAAAAAAAAAAAAAAAAK16NwPQrHPx+F61G4HtU/exSuR+F6xD9cj8L1KFwaQHsUrkfherQ/AAAAAAAAAAAAAAAAAAAAAHsUrkfhesQ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"3983","type":"Selection"},"selection_policy":{"id":"4014","type":"UnionRenderers"}},"id":"3982","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4140","type":"ColumnDataSource"}},"id":"4146","type":"CDSView"},{"attributes":{"label":{"value":"Hawaii"},"renderers":[{"id":"3972","type":"GlyphRenderer"}]},"id":"3981","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3986","type":"Line"},{"attributes":{"callback":null,"data":{"State":["Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"4noUrkdhXUCZmZmZmc1xQPcoXI/Cf49Ah+tRuB45ekAghetRuD52QOV6FK5HOpZAGK5H4XpkVEBACtejcO1bQNijcD0Kf5FA4XoUrkfVnkBM4XoUrsd9QB+F61G4JmRApnA9CtdjgkAL16NwPYiRQLcehetRhoZA4XoUrkfpZUBkZmZmZmp6QHwUrkfhWopAm5mZmZlZdUAqXI/C9SCFQGZmZmZmwnJAUbgehesJekCQwvUoXB+EQLkehetRlH9AonA9Ctdvh0CD61G4Hh18QHgUrkfhxI9AhOtRuB6FgED0KFyPwqWQQB+F61G4jINApnA9Ctefc0BmZmZmZmJ0QD4K16NwdZJAw/UoXI8mfkAghetRuByCQChcj8L1YoFA1qNwPQoLcUB7FK5H4XpIQON6FK5HYSNA4noUrkchMUDC9ShcjwIwQCCF61G4PlxAzMzMzMzMAkBxPQrXo1BIQJuZmZmZGUdA6lG4HoXrG0AqXI/C9XhQQJmZmZmZ6V1Auh6F61G4K0B6FK5H4XofQKRwPQrXo9A/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF61G4HoU0QLgehetRuM4/XI/C9SgcMUBSuB6F61EjQBSuR+F6FPo/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"4000","type":"Selection"},"selection_policy":{"id":"4035","type":"UnionRenderers"}},"id":"3999","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3969","type":"Line"},{"attributes":{"below":[{"id":"3938","type":"LinearAxis"}],"left":[{"id":"3943","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"3938","type":"LinearAxis"},{"id":"3942","type":"Grid"},{"id":"3943","type":"LinearAxis"},{"id":"3947","type":"Grid"},{"id":"3957","type":"BoxAnnotation"},{"id":"3980","type":"Legend"},{"id":"3972","type":"GlyphRenderer"},{"id":"3988","type":"GlyphRenderer"},{"id":"4005","type":"GlyphRenderer"},{"id":"4024","type":"GlyphRenderer"},{"id":"4139","type":"Span"},{"id":"4145","type":"GlyphRenderer"},{"id":"4149","type":"Span"},{"id":"4155","type":"GlyphRenderer"},{"id":"3980","type":"Legend"}],"right":[{"id":"3980","type":"Legend"}],"title":{"id":"3929","type":"Title"},"toolbar":{"id":"3953","type":"Toolbar"},"x_range":{"id":"3923","type":"Range1d"},"x_scale":{"id":"3934","type":"LinearScale"},"y_range":{"id":"3924","type":"Range1d"},"y_scale":{"id":"3936","type":"LinearScale"}},"id":"3930","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Measles 1930 - 2005","text_font_size":{"value":"18pt"}},"id":"3929","type":"Title"},{"attributes":{"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3985","type":"Line"},{"attributes":{},"id":"3983","type":"Selection"},{"attributes":{"callback":null,"data":{"State":["North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"AQAAAABAXUBSuB6F68FhQIbrUbge4XNADNejcD1ad0DYo3A9Co2EQDIzMzMzJ3JAh+tRuB6FMEDNzMzMzMwgQJuZmZmZ+4pAROF6FK5ZikCcmZmZmaFiQGdmZmZm5mtA33oUrkchcUAL16NwPfSIQHkUrkfhIoRA1aNwPQoHUEDsUbgehWtEQMP1KFyPgm1AaGZmZmbOakBlZmZmZr5uQIzC9Shcz09ASeF6FK6vekAJ16NwPQJ7QPcoXI/CzW9AfBSuR+FifEAqXI/C9Xx5QO5RuB6Fp3ZAAAAAAACqg0BxPQrXo1SGQLcehetRHIxAJ1yPwvVoeED//////297QPUoXI/COYJApnA9CtcvhUClcD0K12mJQK1H4XoUeoNAGK5H4XqUakCD61G4HuVhQBeuR+F61DZAkML1KFwPKkD8/////59JQPQoXI/CFUJAfBSuR+H6IkBzPQrXo3AmQEjhehSuRxdApnA9Ctd7YEBwPQrXo3DdP/YoXI/C9RJAbj0K16NwO0DNzMzMzMwEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzMzMzPDP1uPwvUoXAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzMzMzPDPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"4019","type":"Selection"},"selection_policy":{"id":"4050","type":"UnionRenderers"}},"id":"4018","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4018","type":"ColumnDataSource"}},"id":"4025","type":"CDSView"},{"attributes":{"callback":null,"data":{"State":["Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii"],"Year":[1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],"measles":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHE9CtejcCpAUbgehevZjUAAAAAAAAAAAAAAAAAAAAAA16NwPQr3WED3KFyPwomSQFyPwvUo0IxATbgehesRi0CB61G4HsVXQM3MzMzMhIJA+//////niUAfhetRuJ49QHA9CtejNHhAcz0K16NOgEDtUbgehcteQGZmZmZm/oFAXo/C9ShcNED3KFyPwnU4QDMzMzMzMxRAFK5H4XoUHEBgj8L1KNw3QKRwPQrXg01AeRSuR+F6JkAqXI/C9SgMQGlmZmZmZhxAsEfhehSuHEAzMzMzMzPzP+tRuB6F6xJAXI/C9ShcAUDHzMzMzMwfQMzMzMzMzOw/mpmZmZmZ6T8AAAAAAADgP5qZmZmZmbk/pHA9CtejMEClcD0K16MCQD4K16NwPQZACtejcD0Kxz/2KFyPwvX8P1G4HoXrUQZAhetRuB6FDUA1MzMzMzP/P/UoXI/C9RBAzczMzMzM9D8AAAAAAAAAAAAAAAAAAAAAfBSuR+F6BkBdj8L1KFzfPwAAAAAAAAAAexSuR+F6tD97FK5H4XrEPz0K16NwPeI/exSuR+F6tD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[76]}},"selected":{"id":"3967","type":"Selection"},"selection_policy":{"id":"3995","type":"UnionRenderers"}},"id":"3966","type":"ColumnDataSource"},{"attributes":{},"id":"3949","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3957","type":"BoxAnnotation"},{"attributes":{"label":{"value":"Idaho"},"renderers":[{"id":"3988","type":"GlyphRenderer"}]},"id":"3998","type":"LegendItem"},{"attributes":{},"id":"4151","type":"Selection"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"renderers":[{"id":"3972","type":"GlyphRenderer"},{"id":"3988","type":"GlyphRenderer"},{"id":"4005","type":"GlyphRenderer"},{"id":"4024","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"],["State","@State"]]},"id":"3925","type":"HoverTool"},{"attributes":{"callback":null,"end":1973.32,"reset_end":1973.32,"reset_start":0.0,"tags":[[["measles","measles",null]]]},"id":"3924","type":"Range1d"},{"attributes":{"data_source":{"id":"4018","type":"ColumnDataSource"},"glyph":{"id":"4021","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"4023","type":"Line"},"nonselection_glyph":{"id":"4022","type":"Line"},"selection_glyph":null,"view":{"id":"4025","type":"CDSView"}},"id":"4024","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4140","type":"ColumnDataSource"},"glyph":{"id":"4143","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4144","type":"Text"},"selection_glyph":null,"view":{"id":"4146","type":"CDSView"}},"id":"4145","type":"GlyphRenderer"},{"attributes":{},"id":"4141","type":"Selection"},{"attributes":{"data_source":{"id":"4150","type":"ColumnDataSource"},"glyph":{"id":"4153","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4154","type":"Text"},"selection_glyph":null,"view":{"id":"4156","type":"CDSView"}},"id":"4155","type":"GlyphRenderer"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4144","type":"Text"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"4139","type":"Span"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4153","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4003","type":"Line"},{"attributes":{},"id":"3950","type":"WheelZoomTool"},{"attributes":{"source":{"id":"3982","type":"ColumnDataSource"}},"id":"3989","type":"CDSView"},{"attributes":{"data_source":{"id":"3999","type":"ColumnDataSource"},"glyph":{"id":"4002","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"4004","type":"Line"},"nonselection_glyph":{"id":"4003","type":"Line"},"selection_glyph":null,"view":{"id":"4006","type":"CDSView"}},"id":"4005","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3987","type":"Line"},{"attributes":{},"id":"3962","type":"BasicTickFormatter"},{"attributes":{"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4002","type":"Line"},{"attributes":{},"id":"4014","type":"UnionRenderers"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4154","type":"Text"},{"attributes":{},"id":"3952","type":"ResetTool"},{"attributes":{"source":{"id":"4150","type":"ColumnDataSource"}},"id":"4156","type":"CDSView"},{"attributes":{},"id":"3948","type":"SaveTool"},{"attributes":{},"id":"3964","type":"BasicTickFormatter"},{"attributes":{},"id":"4000","type":"Selection"},{"attributes":{"callback":null,"end":2005.0,"reset_end":2005.0,"reset_start":1930.0,"start":1930.0,"tags":[[["Year","Year",null]]]},"id":"3923","type":"Range1d"},{"attributes":{"data_source":{"id":"3982","type":"ColumnDataSource"},"glyph":{"id":"3985","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"3987","type":"Line"},"nonselection_glyph":{"id":"3986","type":"Line"},"selection_glyph":null,"view":{"id":"3989","type":"CDSView"}},"id":"3988","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4004","type":"Line"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"3962","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3930","subtype":"Figure","type":"Plot"},"ticker":{"id":"3939","type":"BasicTicker"}},"id":"3938","type":"LinearAxis"},{"attributes":{"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4021","type":"Line"},{"attributes":{"overlay":{"id":"3957","type":"BoxAnnotation"}},"id":"3951","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"3930","subtype":"Figure","type":"Plot"},"ticker":{"id":"3944","type":"BasicTicker"}},"id":"3947","type":"Grid"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"4149","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3970","type":"Line"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"3964","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"3930","subtype":"Figure","type":"Plot"},"ticker":{"id":"3944","type":"BasicTicker"}},"id":"3943","type":"LinearAxis"},{"attributes":{"source":{"id":"3999","type":"ColumnDataSource"}},"id":"4006","type":"CDSView"},{"attributes":{},"id":"4170","type":"UnionRenderers"},{"attributes":{"label":{"value":"North Dakota"},"renderers":[{"id":"4024","type":"GlyphRenderer"}]},"id":"4038","type":"LegendItem"},{"attributes":{},"id":"4019","type":"Selection"},{"attributes":{},"id":"4172","type":"UnionRenderers"},{"attributes":{},"id":"3934","type":"LinearScale"},{"attributes":{"click_policy":"mute","items":[{"id":"3981","type":"LegendItem"},{"id":"3998","type":"LegendItem"},{"id":"4017","type":"LegendItem"},{"id":"4038","type":"LegendItem"}],"label_text_font_size":{"value":"18pt"},"location":[0,0],"plot":{"id":"3930","subtype":"Figure","type":"Plot"}},"id":"3980","type":"Legend"},{"attributes":{},"id":"3967","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4022","type":"Line"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"4151","type":"Selection"},"selection_policy":{"id":"4172","type":"UnionRenderers"}},"id":"4150","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#d62728","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"4023","type":"Line"},{"attributes":{},"id":"3944","type":"BasicTicker"},{"attributes":{"source":{"id":"3966","type":"ColumnDataSource"}},"id":"3973","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3930","subtype":"Figure","type":"Plot"},"ticker":{"id":"3939","type":"BasicTicker"}},"id":"3942","type":"Grid"},{"attributes":{},"id":"3936","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"3971","type":"Line"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4143","type":"Text"},{"attributes":{"data_source":{"id":"3966","type":"ColumnDataSource"},"glyph":{"id":"3969","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"3971","type":"Line"},"nonselection_glyph":{"id":"3970","type":"Line"},"selection_glyph":null,"view":{"id":"3973","type":"CDSView"}},"id":"3972","type":"GlyphRenderer"},{"attributes":{},"id":"4050","type":"UnionRenderers"},{"attributes":{},"id":"3939","type":"BasicTicker"},{"attributes":{"label":{"value":"Montana"},"renderers":[{"id":"4005","type":"GlyphRenderer"}]},"id":"4017","type":"LegendItem"},{"attributes":{},"id":"4035","type":"UnionRenderers"}],"root_ids":["3930"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"dd6f19dd-640a-4d59-a156-752ea728c18f","roots":{"3930":"9d388cfc-ccc6-47a2-bfb1-fc9b3ac234bc"}}];
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