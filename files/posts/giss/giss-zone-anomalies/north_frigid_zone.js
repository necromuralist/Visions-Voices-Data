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
      };var element = document.getElementById("dc917e1b-f53e-4369-89cf-ec82319e0227");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc917e1b-f53e-4369-89cf-ec82319e0227' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"352d3a38-7fc7-43bd-9664-22307a7a7f70":{"roots":{"references":[{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"6646","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6600","subtype":"Figure","type":"Plot"},"ticker":{"id":"6609","type":"BasicTicker"}},"id":"6608","type":"LinearAxis"},{"attributes":{},"id":"6667","type":"BasicTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6677","type":"Line"},{"attributes":{"data_source":{"id":"6672","type":"ColumnDataSource"},"glyph":{"id":"6675","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6677","type":"Line"},"nonselection_glyph":{"id":"6676","type":"Line"},"selection_glyph":null,"view":{"id":"6679","type":"CDSView"}},"id":"6678","type":"GlyphRenderer"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"6682","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6653","subtype":"Figure","type":"Plot"},"ticker":{"id":"6667","type":"BasicTicker"},"visible":false},"id":"6666","type":"LinearAxis"},{"attributes":{},"id":"6619","type":"PanTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6653","subtype":"Figure","type":"Plot"},"ticker":{"id":"6662","type":"BasicTicker"}},"id":"6665","type":"Grid"},{"attributes":{"plot":null,"text":"North Frigid Zone"},"id":"6599","type":"Title"},{"attributes":{},"id":"6648","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"24N-90N":{"__ndarray__":"UrgehetR2L97FK5H4XrUv+xRuB6F69G/CtejcD0K17/sUbgehevhv4/C9Shcj+K/UrgehetR4L9xPQrXo3Ddv+F6FK5H4dq/7FG4HoXr0b8UrkfhehTevz0K16NwPdq/mpmZmZmZ2b8UrkfhehTev3sUrkfhetS/UrgehetR2L8K16NwPQrXv8P1KFyPwtW/exSuR+F61L/hehSuR+HKv1K4HoXrUci/uB6F61G4vr/2KFyPwvXgv7gehetRuN6/UrgehetR4L/2KFyPwvXYv3E9CtejcM2/PQrXo3A94r8UrkfhehTev1yPwvUoXN+/9ihcj8L12L9SuB6F61HYvz0K16NwPeK/PQrXo3A92r9xPQrXo3DNvwrXo3A9Cse/j8L1KFyP0r89CtejcD3av1K4HoXrUdi/mpmZmZmZ2b9SuB6F61HIv7gehetRuK4/mpmZmZmZyb+amZmZmZm5vwrXo3A9Cre/AAAAAAAAAAC4HoXrUbiuP5qZmZmZmbm/exSuR+F6pL/D9Shcj8LVvwrXo3A9Crc/uB6F61G4nj+amZmZmZmpP7gehetRuM6/CtejcD0Kxz97FK5H4XqUv7gehetRuJ6/CtejcD0Kxz/D9Shcj8LVP3E9CtejcM0/KVyPwvUovD97FK5H4XqUPwrXo3A9Crc/exSuR+F61D+uR+F6FK7XP3sUrkfherQ/uB6F61G4rj+4HoXrUbi+P6RwPQrXo8A/KVyPwvUovD8K16NwPQq3v3sUrkfherQ/CtejcD0Ktz8fhetRuB7VP3sUrkfhepQ/exSuR+F6lD8AAAAAAADQv7gehetRuJ4/KVyPwvUovD8zMzMzMzPDPwrXo3A9Crc/CtejcD0Kxz+PwvUoXI/SP8P1KFyPwsU/uB6F61G4zr97FK5H4XrEv7gehetRuL6/pHA9CtejwD8K16NwPQq3v6RwPQrXo9C/mpmZmZmZub+4HoXrUbiuv2ZmZmZmZta/uB6F61G4vj/D9Shcj8LFv7gehetRuL4/pHA9Ctej0L+kcD0K16PAP7gehetRuJ6/uB6F61G4nr/sUbgeheuxP1K4HoXrUeA/7FG4HoXrsb+4HoXrUbjOP7gehetRuJ4/uB6F61G4nr8pXI/C9Si8P3sUrkfherQ/4XoUrkfh2j+F61G4HoXbP9ejcD0K1+M/FK5H4XoU3j97FK5H4Xq0P+xRuB6F68E/KVyPwvUo3D+4HoXrUbjmP0jhehSuR9E/mpmZmZmZ4T89CtejcD3qP1yPwvUoXOc/uB6F61G45j+amZmZmZnpP4/C9Shcj+o/PQrXo3A96j8AAAAAAADoP65H4XoUru8/FK5H4XoU7j8fhetRuB7xP4XrUbgehes/XI/C9Shc5z8K16NwPQrvP3E9CtejcO0/uB6F61G47j+F61G4HoXrP6RwPQrXo/A/16NwPQrX8z8AAAAAAAD4Px+F61G4HvU/CtejcD0K8z8=","dtype":"float64","shape":[139]},"A_24N_hyphen_minus_90N":{"__ndarray__":"UrgehetR2L97FK5H4XrUv+xRuB6F69G/CtejcD0K17/sUbgehevhv4/C9Shcj+K/UrgehetR4L9xPQrXo3Ddv+F6FK5H4dq/7FG4HoXr0b8UrkfhehTevz0K16NwPdq/mpmZmZmZ2b8UrkfhehTev3sUrkfhetS/UrgehetR2L8K16NwPQrXv8P1KFyPwtW/exSuR+F61L/hehSuR+HKv1K4HoXrUci/uB6F61G4vr/2KFyPwvXgv7gehetRuN6/UrgehetR4L/2KFyPwvXYv3E9CtejcM2/PQrXo3A94r8UrkfhehTev1yPwvUoXN+/9ihcj8L12L9SuB6F61HYvz0K16NwPeK/PQrXo3A92r9xPQrXo3DNvwrXo3A9Cse/j8L1KFyP0r89CtejcD3av1K4HoXrUdi/mpmZmZmZ2b9SuB6F61HIv7gehetRuK4/mpmZmZmZyb+amZmZmZm5vwrXo3A9Cre/AAAAAAAAAAC4HoXrUbiuP5qZmZmZmbm/exSuR+F6pL/D9Shcj8LVvwrXo3A9Crc/uB6F61G4nj+amZmZmZmpP7gehetRuM6/CtejcD0Kxz97FK5H4XqUv7gehetRuJ6/CtejcD0Kxz/D9Shcj8LVP3E9CtejcM0/KVyPwvUovD97FK5H4XqUPwrXo3A9Crc/exSuR+F61D+uR+F6FK7XP3sUrkfherQ/uB6F61G4rj+4HoXrUbi+P6RwPQrXo8A/KVyPwvUovD8K16NwPQq3v3sUrkfherQ/CtejcD0Ktz8fhetRuB7VP3sUrkfhepQ/exSuR+F6lD8AAAAAAADQv7gehetRuJ4/KVyPwvUovD8zMzMzMzPDPwrXo3A9Crc/CtejcD0Kxz+PwvUoXI/SP8P1KFyPwsU/uB6F61G4zr97FK5H4XrEv7gehetRuL6/pHA9CtejwD8K16NwPQq3v6RwPQrXo9C/mpmZmZmZub+4HoXrUbiuv2ZmZmZmZta/uB6F61G4vj/D9Shcj8LFv7gehetRuL4/pHA9Ctej0L+kcD0K16PAP7gehetRuJ6/uB6F61G4nr/sUbgeheuxP1K4HoXrUeA/7FG4HoXrsb+4HoXrUbjOP7gehetRuJ4/uB6F61G4nr8pXI/C9Si8P3sUrkfherQ/4XoUrkfh2j+F61G4HoXbP9ejcD0K1+M/FK5H4XoU3j97FK5H4Xq0P+xRuB6F68E/KVyPwvUo3D+4HoXrUbjmP0jhehSuR9E/mpmZmZmZ4T89CtejcD3qP1yPwvUoXOc/uB6F61G45j+amZmZmZnpP4/C9Shcj+o/PQrXo3A96j8AAAAAAADoP65H4XoUru8/FK5H4XoU7j8fhetRuB7xP4XrUbgehes/XI/C9Shc5z8K16NwPQrvP3E9CtejcO0/uB6F61G47j+F61G4HoXrP6RwPQrXo/A/16NwPQrX8z8AAAAAAAD4Px+F61G4HvU/CtejcD0K8z8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"6639","type":"Selection"},"selection_policy":{"id":"6698","type":"UnionRenderers"}},"id":"6638","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"6684","type":"Row"},{"id":"6685","type":"Row"}]},"id":"6686","type":"Column"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"6808","type":"BoxAnnotation"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6680","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6653","subtype":"Figure","type":"Plot"},"ticker":{"id":"6662","type":"BasicTicker"}},"id":"6661","type":"LinearAxis"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6675","type":"Line"},{"attributes":{},"id":"6618","type":"SaveTool"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6643","type":"Line"},{"attributes":{"source":{"id":"6672","type":"ColumnDataSource"}},"id":"6679","type":"CDSView"},{"attributes":{},"id":"6673","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6642","type":"Line"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"6648","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6600","subtype":"Figure","type":"Plot"},"ticker":{"id":"6614","type":"BasicTicker"}},"id":"6613","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6638","type":"ColumnDataSource"},"glyph":{"id":"6641","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6643","type":"Line"},"nonselection_glyph":{"id":"6642","type":"Line"},"selection_glyph":null,"view":{"id":"6645","type":"CDSView"}},"id":"6644","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"6653","subtype":"Figure","type":"Plot"}]},"id":"6685","type":"Row"},{"attributes":{"children":[{"id":"6600","subtype":"Figure","type":"Plot"}]},"id":"6684","type":"Row"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"6596","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6807","type":"RangeTool"}]},"id":"6671","type":"Toolbar"},{"attributes":{},"id":"6604","type":"LinearScale"},{"attributes":{},"id":"6623","type":"PanTool"},{"attributes":{"below":[{"id":"6661","type":"LinearAxis"}],"left":[{"id":"6666","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":800,"renderers":[{"id":"6661","type":"LinearAxis"},{"id":"6665","type":"Grid"},{"id":"6666","type":"LinearAxis"},{"id":"6670","type":"Grid"},{"id":"6678","type":"GlyphRenderer"},{"id":"6808","type":"BoxAnnotation"}],"title":{"id":"6652","type":"Title"},"toolbar":{"id":"6671","type":"Toolbar"},"x_range":{"id":"6650","type":"Range1d"},"x_scale":{"id":"6657","type":"LinearScale"},"y_range":{"id":"6651","type":"Range1d"},"y_scale":{"id":"6659","type":"LinearScale"}},"id":"6653","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6700","type":"UnionRenderers"},{"attributes":{},"id":"6639","type":"Selection"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"6650","type":"Range1d"},{"attributes":{},"id":"6622","type":"ResetTool"},{"attributes":{},"id":"6662","type":"BasicTicker"},{"attributes":{},"id":"6680","type":"BasicTickFormatter"},{"attributes":{},"id":"6698","type":"UnionRenderers"},{"attributes":{},"id":"6606","type":"LinearScale"},{"attributes":{},"id":"6624","type":"ZoomInTool"},{"attributes":{"plot":null,"text":""},"id":"6652","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6600","subtype":"Figure","type":"Plot"},"ticker":{"id":"6614","type":"BasicTicker"}},"id":"6617","type":"Grid"},{"attributes":{},"id":"6659","type":"LinearScale"},{"attributes":{"overlay":{"id":"6630","type":"BoxAnnotation"}},"id":"6621","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":1.5,"reset_end":1.5,"reset_start":-0.58,"start":-0.58,"tags":[[["24N-90N","Temperature Anomaly (C)",null]]]},"id":"6651","type":"Range1d"},{"attributes":{"overlay":{"id":"6808","type":"BoxAnnotation"},"x_range":{"id":"6596","type":"Range1d"},"y_range":null},"id":"6807","type":"RangeTool"},{"attributes":{"callback":null,"data":{"24N-90N":{"__ndarray__":"UrgehetR2L97FK5H4XrUv+xRuB6F69G/CtejcD0K17/sUbgehevhv4/C9Shcj+K/UrgehetR4L9xPQrXo3Ddv+F6FK5H4dq/7FG4HoXr0b8UrkfhehTevz0K16NwPdq/mpmZmZmZ2b8UrkfhehTev3sUrkfhetS/UrgehetR2L8K16NwPQrXv8P1KFyPwtW/exSuR+F61L/hehSuR+HKv1K4HoXrUci/uB6F61G4vr/2KFyPwvXgv7gehetRuN6/UrgehetR4L/2KFyPwvXYv3E9CtejcM2/PQrXo3A94r8UrkfhehTev1yPwvUoXN+/9ihcj8L12L9SuB6F61HYvz0K16NwPeK/PQrXo3A92r9xPQrXo3DNvwrXo3A9Cse/j8L1KFyP0r89CtejcD3av1K4HoXrUdi/mpmZmZmZ2b9SuB6F61HIv7gehetRuK4/mpmZmZmZyb+amZmZmZm5vwrXo3A9Cre/AAAAAAAAAAC4HoXrUbiuP5qZmZmZmbm/exSuR+F6pL/D9Shcj8LVvwrXo3A9Crc/uB6F61G4nj+amZmZmZmpP7gehetRuM6/CtejcD0Kxz97FK5H4XqUv7gehetRuJ6/CtejcD0Kxz/D9Shcj8LVP3E9CtejcM0/KVyPwvUovD97FK5H4XqUPwrXo3A9Crc/exSuR+F61D+uR+F6FK7XP3sUrkfherQ/uB6F61G4rj+4HoXrUbi+P6RwPQrXo8A/KVyPwvUovD8K16NwPQq3v3sUrkfherQ/CtejcD0Ktz8fhetRuB7VP3sUrkfhepQ/exSuR+F6lD8AAAAAAADQv7gehetRuJ4/KVyPwvUovD8zMzMzMzPDPwrXo3A9Crc/CtejcD0Kxz+PwvUoXI/SP8P1KFyPwsU/uB6F61G4zr97FK5H4XrEv7gehetRuL6/pHA9CtejwD8K16NwPQq3v6RwPQrXo9C/mpmZmZmZub+4HoXrUbiuv2ZmZmZmZta/uB6F61G4vj/D9Shcj8LFv7gehetRuL4/pHA9Ctej0L+kcD0K16PAP7gehetRuJ6/uB6F61G4nr/sUbgeheuxP1K4HoXrUeA/7FG4HoXrsb+4HoXrUbjOP7gehetRuJ4/uB6F61G4nr8pXI/C9Si8P3sUrkfherQ/4XoUrkfh2j+F61G4HoXbP9ejcD0K1+M/FK5H4XoU3j97FK5H4Xq0P+xRuB6F68E/KVyPwvUo3D+4HoXrUbjmP0jhehSuR9E/mpmZmZmZ4T89CtejcD3qP1yPwvUoXOc/uB6F61G45j+amZmZmZnpP4/C9Shcj+o/PQrXo3A96j8AAAAAAADoP65H4XoUru8/FK5H4XoU7j8fhetRuB7xP4XrUbgehes/XI/C9Shc5z8K16NwPQrvP3E9CtejcO0/uB6F61G47j+F61G4HoXrP6RwPQrXo/A/16NwPQrX8z8AAAAAAAD4Px+F61G4HvU/CtejcD0K8z8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"6673","type":"Selection"},"selection_policy":{"id":"6700","type":"UnionRenderers"}},"id":"6672","type":"ColumnDataSource"},{"attributes":{},"id":"6620","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":[{"id":"6644","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Temperature Anomaly (C)","@{A_24N_hyphen_minus_90N}"]]},"id":"6598","type":"HoverTool"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6641","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6600","subtype":"Figure","type":"Plot"},"ticker":{"id":"6609","type":"BasicTicker"}},"id":"6612","type":"Grid"},{"attributes":{},"id":"6646","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6608","type":"LinearAxis"}],"left":[{"id":"6613","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"6608","type":"LinearAxis"},{"id":"6612","type":"Grid"},{"id":"6613","type":"LinearAxis"},{"id":"6617","type":"Grid"},{"id":"6630","type":"BoxAnnotation"},{"id":"6644","type":"GlyphRenderer"}],"title":{"id":"6599","type":"Title"},"toolbar":{"id":"6626","type":"Toolbar"},"x_range":{"id":"6596","type":"Range1d"},"x_scale":{"id":"6604","type":"LinearScale"},"y_range":{"id":"6597","type":"Range1d"},"y_scale":{"id":"6606","type":"LinearScale"}},"id":"6600","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"6638","type":"ColumnDataSource"}},"id":"6645","type":"CDSView"},{"attributes":{},"id":"6682","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"24N-90N"}},"id":"6676","type":"Line"},{"attributes":{},"id":"6609","type":"BasicTicker"},{"attributes":{},"id":"6657","type":"LinearScale"},{"attributes":{},"id":"6625","type":"ResetTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6653","subtype":"Figure","type":"Plot"},"ticker":{"id":"6667","type":"BasicTicker"}},"id":"6670","type":"Grid"},{"attributes":{},"id":"6614","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6598","type":"HoverTool"},{"id":"6618","type":"SaveTool"},{"id":"6619","type":"PanTool"},{"id":"6620","type":"WheelZoomTool"},{"id":"6621","type":"BoxZoomTool"},{"id":"6622","type":"ResetTool"},{"id":"6623","type":"PanTool"},{"id":"6624","type":"ZoomInTool"},{"id":"6625","type":"ResetTool"}]},"id":"6626","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6630","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1.5,"reset_end":1.5,"reset_start":-0.58,"start":-0.58,"tags":[[["24N-90N","Temperature Anomaly (C)",null]]]},"id":"6597","type":"Range1d"}],"root_ids":["6686"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"352d3a38-7fc7-43bd-9664-22307a7a7f70","roots":{"6686":"dc917e1b-f53e-4369-89cf-ec82319e0227"}}];
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