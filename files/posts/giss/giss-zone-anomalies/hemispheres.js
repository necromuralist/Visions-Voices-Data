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
      };var element = document.getElementById("a6c8abdb-4e7d-46ac-b11f-396b9f5d3d36");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6c8abdb-4e7d-46ac-b11f-396b9f5d3d36' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"374b9ffe-0135-4c88-9e1e-620e75d07592":{"roots":{"references":[{"attributes":{"data_source":{"id":"37410","type":"ColumnDataSource"},"glyph":{"id":"37413","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"37415","type":"Line"},"nonselection_glyph":{"id":"37414","type":"Line"},"selection_glyph":null,"view":{"id":"37417","type":"CDSView"}},"id":"37416","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Southern Hemisphere"},"renderers":[{"id":"37416","type":"GlyphRenderer"}]},"id":"37428","type":"LegendItem"},{"attributes":{"callback":null,"renderers":[{"id":"37383","type":"GlyphRenderer"},{"id":"37399","type":"GlyphRenderer"},{"id":"37416","type":"GlyphRenderer"}],"tooltips":[["location","@{location}"],["Year","@{Year}"],["difference_from_normal","@{difference_from_normal}"]]},"id":"37337","type":"HoverTool"},{"attributes":{"axis_label":"Difference From Normal (C)","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"37376","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"37341","subtype":"Figure","type":"Plot"},"ticker":{"id":"37355","type":"BasicTicker"}},"id":"37354","type":"LinearAxis"},{"attributes":{"source":{"id":"37393","type":"ColumnDataSource"}},"id":"37400","type":"CDSView"},{"attributes":{},"id":"37374","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"37393","type":"ColumnDataSource"},"glyph":{"id":"37396","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"37398","type":"Line"},"nonselection_glyph":{"id":"37397","type":"Line"},"selection_glyph":null,"view":{"id":"37400","type":"CDSView"}},"id":"37399","type":"GlyphRenderer"},{"attributes":{},"id":"37439","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37398","type":"Line"},{"attributes":{},"id":"37426","type":"UnionRenderers"},{"attributes":{},"id":"37350","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.26,"reset_end":1.26,"reset_start":-0.54,"start":-0.54,"tags":[[["difference_from_normal","difference_from_normal",null]]]},"id":"37336","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"37341","subtype":"Figure","type":"Plot"},"ticker":{"id":"37350","type":"BasicTicker"}},"id":"37353","type":"Grid"},{"attributes":{},"id":"37376","type":"BasicTickFormatter"},{"attributes":{"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37396","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37368","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#ff7f0e","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37397","type":"Line"},{"attributes":{"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37413","type":"Line"},{"attributes":{"level":"glyph","line_color":{"value":"#30a2da"},"line_width":{"value":3},"location":0,"plot":null},"id":"37515","type":"Span"},{"attributes":{"overlay":{"id":"37368","type":"BoxAnnotation"}},"id":"37362","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37414","type":"Line"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"37374","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"37341","subtype":"Figure","type":"Plot"},"ticker":{"id":"37350","type":"BasicTicker"}},"id":"37349","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Difference by Hemisphere","text_font_size":{"value":"24pt"}},"id":"37340","type":"Title"},{"attributes":{"callback":null,"data":{"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],"difference_from_normal":{"__ndarray__":"uB6F61G4rr97FK5H4XqEv3sUrkfheoS/uB6F61G4rr8zMzMzMzPDv7gehetRuM6/uB6F61G4zr8zMzMzMzPTv+xRuB6F68G/uB6F61G4rr8fhetRuB7Vv+F6FK5H4cq/exSuR+F6xL9SuB6F61HIv7gehetRuM6/exSuR+F6xL+4HoXrUbiev+xRuB6F67G/7FG4HoXr0b97FK5H4XrEvwrXo3A9Cre/4XoUrkfhyr8AAAAAAADQv/YoXI/C9di/XI/C9Shc37+kcD0K16PQv3E9CtejcM2/exSuR+F61L/hehSuR+Hav7gehetRuN6/hetRuB6F278UrkfhehTevwAAAAAAANC/SOF6FK5H0b+4HoXrUbi+v6RwPQrXo8C/16NwPQrX079mZmZmZmbWv5qZmZmZmcm/mpmZmZmZyb8AAAAAAADQv+xRuB6F69G/MzMzMzMz078zMzMzMzPTv2ZmZmZmZta/MzMzMzMz07+amZmZmZnJv4/C9Shcj9K/MzMzMzMz079SuB6F61HYv4/C9Shcj9K/cT0K16Nwzb9I4XoUrkfRvx+F61G4HtW/SOF6FK5H0b97FK5H4XrUv+xRuB6F69G/mpmZmZmZyb/hehSuR+HKvzMzMzMzM8O/7FG4HoXrsT8zMzMzMzPDPwAAAAAAAAAAexSuR+F6lL8zMzMzMzPDPwrXo3A9Crc/w/UoXI/Cxb/sUbgehevBv5qZmZmZmcm/CtejcD0Kx7+amZmZmZnJv8P1KFyPwsW/uB6F61G4nr97FK5H4Xq0vwAAAAAAANC/mpmZmZmZyb97FK5H4XrEv3sUrkfheqQ/uB6F61G4nr+4HoXrUbiuv7gehetRuL6/exSuR+F6lD97FK5H4Xq0v3sUrkfhepS/mpmZmZmZyb97FK5H4Xq0vwrXo3A9Cre/exSuR+F6tL8K16NwPQq3vzMzMzMzM8M/CtejcD0Ktz+4HoXrUbievylcj8L1KMw/KVyPwvUozD+4HoXrUbieP3sUrkfhepQ/AAAAAAAAAABxPQrXo3DNPylcj8L1KLw/uB6F61G4zj9SuB6F61HYP0jhehSuR9E/KVyPwvUozD9SuB6F61HYP4/C9Shcj9I/AAAAAAAA0D+4HoXrUbjOPz0K16NwPdo/KVyPwvUo3D+PwvUoXI/SP65H4XoUrtc/PQrXo3A92j97FK5H4XrUP4/C9Shcj9I/pHA9Ctej0D/Xo3A9CtfTP/YoXI/C9dg/PQrXo3A92j+kcD0K16PgPzMzMzMzM9M/MzMzMzMz0z+F61G4HoXbP0jhehSuR+E/XI/C9Shc3z+amZmZmZnZP1K4HoXrUeA/zczMzMzM3D9xPQrXo3DdP/YoXI/C9dg/PQrXo3A94j/2KFyPwvXgP3E9CtejcN0/FK5H4XoU3j9I4XoUrkfhP+xRuB6F6+E/hetRuB6F4z+4HoXrUbjmP8P1KFyPwuU/H4XrUbge5T8=","dtype":"float64","shape":[139]},"location":["Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere"]},"selected":{"id":"37411","type":"Selection"},"selection_policy":{"id":"37439","type":"UnionRenderers"}},"id":"37410","type":"ColumnDataSource"},{"attributes":{},"id":"37355","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37337","type":"HoverTool"},{"id":"37359","type":"SaveTool"},{"id":"37360","type":"PanTool"},{"id":"37361","type":"WheelZoomTool"},{"id":"37362","type":"BoxZoomTool"},{"id":"37363","type":"ResetTool"}]},"id":"37364","type":"Toolbar"},{"attributes":{"label":{"value":"Global"},"renderers":[{"id":"37383","type":"GlyphRenderer"}]},"id":"37392","type":"LegendItem"},{"attributes":{"callback":null,"data":{"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],"difference_from_normal":{"__ndarray__":"CtejcD0Kx7+amZmZmZm5vylcj8L1KLy/UrgehetRyL+PwvUoXI/Sv9ejcD0K19O/exSuR+F61L9mZmZmZmbWvwrXo3A9Cse/KVyPwvUovL+uR+F6FK7Xv3E9CtejcM2/SOF6FK5H0b97FK5H4XrUv9ejcD0K19O/cT0K16Nwzb8pXI/C9Si8v7gehetRuL6/7FG4HoXr0b9SuB6F61HIvwrXo3A9Cre/exSuR+F6xL8zMzMzMzPTv/YoXI/C9di/XI/C9Shc37+PwvUoXI/Sv3E9CtejcM2/mpmZmZmZ2b+F61G4HoXbvxSuR+F6FN6/hetRuB6F27+F61G4HoXbvwrXo3A9Cte/ZmZmZmZm1r97FK5H4XrEv7gehetRuL6/H4XrUbge1b8pXI/C9Sjcv+xRuB6F69G/SOF6FK5H0b8AAAAAAADQv8P1KFyPwsW/SOF6FK5H0b+4HoXrUbjOvwAAAAAAANC/mpmZmZmZyb97FK5H4Xq0v5qZmZmZmcm/UrgehetRyL/D9Shcj8LVv+xRuB6F68G/mpmZmZmZub97FK5H4XrEvzMzMzMzM9O/7FG4HoXrwb+amZmZmZnJv3sUrkfhesS/exSuR+F6pL+4HoXrUbiev7gehetRuJ6/KVyPwvUovD8K16NwPQrHP5qZmZmZmak/7FG4HoXrsT/hehSuR+HKPwrXo3A9Crc/7FG4HoXrsb97FK5H4Xqkv5qZmZmZmbm/mpmZmZmZub8K16NwPQrHv7gehetRuK6/exSuR+F6hD/sUbgeheuxPzMzMzMzM8O/7FG4HoXrwb+amZmZmZnJv3sUrkfheqQ/7FG4HoXrsT+4HoXrUbieP3sUrkfhepS/mpmZmZmZqT97FK5H4XqkP+xRuB6F67E/mpmZmZmZyb+amZmZmZm5v5qZmZmZmam/exSuR+F6lL97FK5H4Xq0v+xRuB6F67E/uB6F61G4nj8K16NwPQq3v3sUrkfheoQ/exSuR+F6xD97FK5H4Xq0v3sUrkfhepS/KVyPwvUovL/D9Shcj8LFP+xRuB6F67E/exSuR+F6xD9I4XoUrkfRPx+F61G4HtU/7FG4HoXrwT/Xo3A9CtfTP3sUrkfhesQ/uB6F61G4vj8K16NwPQrHP8P1KFyPwtU/PQrXo3A92j+PwvUoXI/SPylcj8L1KNw/PQrXo3A92j8pXI/C9SjMP7gehetRuM4/16NwPQrX0z/NzMzMzMzcP8P1KFyPwtU/FK5H4XoU3j/Xo3A9CtfjP5qZmZmZmdk/mpmZmZmZ2T/2KFyPwvXgP9ejcD0K1+M/hetRuB6F4z/2KFyPwvXgP3E9CtejcOU/hetRuB6F4z97FK5H4XrkP1K4HoXrUeA/KVyPwvUo5D9mZmZmZmbmP4/C9Shcj+I/hetRuB6F4z97FK5H4XrkP1yPwvUoXOc/hetRuB6F6z9cj8L1KFzvP83MzMzMzOw/PQrXo3A96j8=","dtype":"float64","shape":[139]},"location":["Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global","Global"]},"selected":{"id":"37378","type":"Selection"},"selection_policy":{"id":"37407","type":"UnionRenderers"}},"id":"37377","type":"ColumnDataSource"},{"attributes":{},"id":"37363","type":"ResetTool"},{"attributes":{"below":[{"id":"37349","type":"LinearAxis"}],"left":[{"id":"37354","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1200,"renderers":[{"id":"37349","type":"LinearAxis"},{"id":"37353","type":"Grid"},{"id":"37354","type":"LinearAxis"},{"id":"37358","type":"Grid"},{"id":"37368","type":"BoxAnnotation"},{"id":"37391","type":"Legend"},{"id":"37383","type":"GlyphRenderer"},{"id":"37399","type":"GlyphRenderer"},{"id":"37416","type":"GlyphRenderer"},{"id":"37515","type":"Span"},{"id":"37391","type":"Legend"}],"right":[{"id":"37391","type":"Legend"}],"title":{"id":"37340","type":"Title"},"toolbar":{"id":"37364","type":"Toolbar"},"x_range":{"id":"37335","type":"Range1d"},"x_scale":{"id":"37345","type":"LinearScale"},"y_range":{"id":"37336","type":"Range1d"},"y_scale":{"id":"37347","type":"LinearScale"}},"id":"37341","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37394","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"37341","subtype":"Figure","type":"Plot"},"ticker":{"id":"37355","type":"BasicTicker"}},"id":"37358","type":"Grid"},{"attributes":{},"id":"37347","type":"LinearScale"},{"attributes":{"click_policy":"mute","items":[{"id":"37392","type":"LegendItem"},{"id":"37409","type":"LegendItem"},{"id":"37428","type":"LegendItem"}],"label_text_font_size":{"value":"24pt"},"location":[0,0],"plot":{"id":"37341","subtype":"Figure","type":"Plot"}},"id":"37391","type":"Legend"},{"attributes":{"source":{"id":"37377","type":"ColumnDataSource"}},"id":"37384","type":"CDSView"},{"attributes":{},"id":"37378","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37382","type":"Line"},{"attributes":{"data_source":{"id":"37377","type":"ColumnDataSource"},"glyph":{"id":"37380","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"37382","type":"Line"},"nonselection_glyph":{"id":"37381","type":"Line"},"selection_glyph":null,"view":{"id":"37384","type":"CDSView"}},"id":"37383","type":"GlyphRenderer"},{"attributes":{},"id":"37345","type":"LinearScale"},{"attributes":{},"id":"37407","type":"UnionRenderers"},{"attributes":{"label":{"value":"Northern Hemisphere"},"renderers":[{"id":"37399","type":"GlyphRenderer"}]},"id":"37409","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37381","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37380","type":"Line"},{"attributes":{},"id":"37360","type":"PanTool"},{"attributes":{},"id":"37359","type":"SaveTool"},{"attributes":{},"id":"37411","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#2ca02c","line_width":2,"x":{"field":"Year"},"y":{"field":"difference_from_normal"}},"id":"37415","type":"Line"},{"attributes":{},"id":"37361","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"37335","type":"Range1d"},{"attributes":{"source":{"id":"37410","type":"ColumnDataSource"}},"id":"37417","type":"CDSView"},{"attributes":{"callback":null,"data":{"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],"difference_from_normal":{"__ndarray__":"16NwPQrX079SuB6F61HIv+F6FK5H4cq/16NwPQrX07+F61G4HoXbv5qZmZmZmdm/PQrXo3A92r89CtejcD3av3E9CtejcM2/w/UoXI/Cxb/hehSuR+Hav6RwPQrXo9C/rkfhehSu17/NzMzMzMzcv1K4HoXrUdi/j8L1KFyP0r+amZmZmZnJv8P1KFyPwsW/j8L1KFyP0r/hehSuR+HKvwrXo3A9Cre/mpmZmZmZub9mZmZmZmbWv/YoXI/C9di/AAAAAAAA4L/Xo3A9CtfTv3E9CtejcM2/FK5H4XoU3r9xPQrXo3DdvxSuR+F6FN6/KVyPwvUo3L+amZmZmZnZv83MzMzMzNy/hetRuB6F279SuB6F61HIvylcj8L1KLy/CtejcD0K179I4XoUrkfhv65H4XoUrte/H4XrUbge1b8AAAAAAADQv+xRuB6F67G/uB6F61G4zr8K16NwPQrHv+xRuB6F68G/mpmZmZmZub+amZmZmZmpP5qZmZmZmbm/7FG4HoXrsb8zMzMzMzPTv3sUrkfhepQ/mpmZmZmZqT+amZmZmZmpv6RwPQrXo9C/exSuR+F6hL8K16NwPQq3v3sUrkfheqS/uB6F61G4vj+4HoXrUbi+P3sUrkfherQ/w/UoXI/CxT+4HoXrUbjOPylcj8L1KLw/MzMzMzMzwz9I4XoUrkfRPwrXo3A9Crc/exSuR+F6pD+4HoXrUbiuP3sUrkfheoS/uB6F61G4nr/D9Shcj8LFv5qZmZmZmak/uB6F61G4rj9xPQrXo3DNP3sUrkfheqS/mpmZmZmZub+kcD0K16PQv3sUrkfheqQ/w/UoXI/CxT8pXI/C9Si8P3sUrkfherQ/exSuR+F6tD8zMzMzMzPDP3sUrkfhesQ/UrgehetRyL+kcD0K16PAvwAAAAAAAAAAuB6F61G4nj+4HoXrUbiuv3sUrkfheoS/uB6F61G4nr97FK5H4XrEvwrXo3A9Cse/mpmZmZmZuT+amZmZmZnJv7gehetRuK6/4XoUrkfhyr8pXI/C9Si8P3sUrkfhepQ/exSuR+F6tD97FK5H4XrEP/YoXI/C9dg/mpmZmZmZqT+kcD0K16PQP3sUrkfheqQ/exSuR+F6hL+kcD0K16PAP0jhehSuR9E/UrgehetR2D+PwvUoXI/SP1K4HoXrUeA/PQrXo3A92j+4HoXrUbi+P1K4HoXrUcg/CtejcD0K1z+PwvUoXI/iP+xRuB6F69E/9ihcj8L14D9cj8L1KFznPwAAAAAAAOA/AAAAAAAA4D8pXI/C9SjkP7gehetRuOY/XI/C9Shc5z9xPQrXo3DlP4/C9Shcj+o/9ihcj8L16D/sUbgehevpP3sUrkfheuQ/FK5H4XoU5j+F61G4HoXrP2ZmZmZmZuY/UrgehetR6D+uR+F6FK7nP3sUrkfheuw/7FG4HoXr8T8pXI/C9Sj0P8P1KFyPwvE/rkfhehSu7z8=","dtype":"float64","shape":[139]},"location":["Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere","Northern Hemisphere"]},"selected":{"id":"37394","type":"Selection"},"selection_policy":{"id":"37426","type":"UnionRenderers"}},"id":"37393","type":"ColumnDataSource"}],"root_ids":["37341"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"374b9ffe-0135-4c88-9e1e-620e75d07592","roots":{"37341":"a6c8abdb-4e7d-46ac-b11f-396b9f5d3d36"}}];
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