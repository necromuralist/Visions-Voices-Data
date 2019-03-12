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
      };var element = document.getElementById("18b6baf0-fb8a-4fc6-9586-2606a125df8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '18b6baf0-fb8a-4fc6-9586-2606a125df8c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"53b6195a-dff0-4c5b-ab4b-57e027bf127a":{"roots":{"references":[{"attributes":{"below":[{"id":"5491","type":"LinearAxis"}],"left":[{"id":"5496","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"5491","type":"LinearAxis"},{"id":"5495","type":"Grid"},{"id":"5496","type":"LinearAxis"},{"id":"5500","type":"Grid"},{"id":"5511","type":"BoxAnnotation"},{"id":"5535","type":"Legend"},{"id":"5527","type":"GlyphRenderer"},{"id":"5539","type":"Span"}],"title":{"id":"5482","type":"Title"},"toolbar":{"id":"5507","type":"Toolbar"},"x_range":{"id":"5479","type":"Range1d"},"x_scale":{"id":"5487","type":"LinearScale"},"y_range":{"id":"5480","type":"Range1d"},"y_scale":{"id":"5489","type":"LinearScale"}},"id":"5483","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5618","type":"ColumnDataSource"}},"id":"5625","type":"CDSView"},{"attributes":{"data_source":{"id":"5618","type":"ColumnDataSource"},"glyph":{"id":"5621","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"5623","type":"Line"},"nonselection_glyph":{"id":"5622","type":"Line"},"selection_glyph":null,"view":{"id":"5625","type":"CDSView"}},"id":"5624","type":"GlyphRenderer"},{"attributes":{},"id":"5502","type":"PanTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5483","subtype":"Figure","type":"Plot"},"ticker":{"id":"5497","type":"BasicTicker"}},"id":"5500","type":"Grid"},{"attributes":{},"id":"5503","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5623","type":"Line"},{"attributes":{"children":[{"id":"5483","subtype":"Figure","type":"Plot"}]},"id":"5630","type":"Row"},{"attributes":{"callback":null,"renderers":[{"id":"5527","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Temperature Anomaly (C)","@{North_Frigid}"]]},"id":"5481","type":"HoverTool"},{"attributes":{},"id":"5613","type":"BasicTicker"},{"attributes":{"source":{"id":"5521","type":"ColumnDataSource"}},"id":"5528","type":"CDSView"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"5626","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5599","subtype":"Figure","type":"Plot"},"ticker":{"id":"5608","type":"BasicTicker"}},"id":"5607","type":"LinearAxis"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"5479","type":"Range1d"},{"attributes":{},"id":"5501","type":"SaveTool"},{"attributes":{},"id":"5603","type":"LinearScale"},{"attributes":{"items":[],"plot":{"id":"5483","subtype":"Figure","type":"Plot"}},"id":"5535","type":"Legend"},{"attributes":{"plot":null,"text":""},"id":"5598","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5481","type":"HoverTool"},{"id":"5501","type":"SaveTool"},{"id":"5502","type":"PanTool"},{"id":"5503","type":"WheelZoomTool"},{"id":"5504","type":"BoxZoomTool"},{"id":"5505","type":"ResetTool"},{"id":"5506","type":"ZoomInTool"}]},"id":"5507","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5511","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":3.05,"reset_end":3.05,"reset_start":-1.64,"start":-1.64,"tags":[[["North Frigid","Temperature Anomaly (C)",null]]]},"id":"5480","type":"Range1d"},{"attributes":{},"id":"5519","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"5599","subtype":"Figure","type":"Plot"}]},"id":"5631","type":"Row"},{"attributes":{},"id":"5619","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5599","subtype":"Figure","type":"Plot"},"ticker":{"id":"5608","type":"BasicTicker"}},"id":"5611","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5525","type":"Line"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"5628","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5599","subtype":"Figure","type":"Plot"},"ticker":{"id":"5613","type":"BasicTicker"},"visible":false},"id":"5612","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5521","type":"ColumnDataSource"},"glyph":{"id":"5524","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"5526","type":"Line"},"nonselection_glyph":{"id":"5525","type":"Line"},"selection_glyph":null,"view":{"id":"5528","type":"CDSView"}},"id":"5527","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"5607","type":"LinearAxis"}],"left":[{"id":"5612","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":800,"renderers":[{"id":"5607","type":"LinearAxis"},{"id":"5611","type":"Grid"},{"id":"5612","type":"LinearAxis"},{"id":"5616","type":"Grid"},{"id":"5624","type":"GlyphRenderer"},{"id":"5754","type":"BoxAnnotation"}],"title":{"id":"5598","type":"Title"},"toolbar":{"id":"5617","type":"Toolbar"},"x_range":{"id":"5596","type":"Range1d"},"x_scale":{"id":"5603","type":"LinearScale"},"y_range":{"id":"5597","type":"Range1d"},"y_scale":{"id":"5605","type":"LinearScale"}},"id":"5599","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5608","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5622","type":"Line"},{"attributes":{},"id":"5605","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"5754","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5753","type":"RangeTool"}]},"id":"5617","type":"Toolbar"},{"attributes":{"level":"glyph","line_alpha":{"value":0.2},"line_width":{"value":2},"location":0,"plot":null},"id":"5539","type":"Span"},{"attributes":{"callback":null,"data":{"North Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"5619","type":"Selection"},"selection_policy":{"id":"5646","type":"UnionRenderers"}},"id":"5618","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"5754","type":"BoxAnnotation"},"x_range":{"id":"5479","type":"Range1d"},"y_range":null},"id":"5753","type":"RangeTool"},{"attributes":{},"id":"5497","type":"BasicTicker"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5621","type":"Line"},{"attributes":{"callback":null,"data":{"North Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"North_Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"5522","type":"Selection"},"selection_policy":{"id":"5545","type":"UnionRenderers"}},"id":"5521","type":"ColumnDataSource"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5524","type":"Line"},{"attributes":{},"id":"5626","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"5519","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5483","subtype":"Figure","type":"Plot"},"ticker":{"id":"5497","type":"BasicTicker"}},"id":"5496","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5599","subtype":"Figure","type":"Plot"},"ticker":{"id":"5613","type":"BasicTicker"}},"id":"5616","type":"Grid"},{"attributes":{"callback":null,"end":3.05,"reset_end":3.05,"reset_start":-1.64,"start":-1.64,"tags":[[["North Frigid","Temperature Anomaly (C)",null]]]},"id":"5597","type":"Range1d"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"5526","type":"Line"},{"attributes":{},"id":"5628","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5511","type":"BoxAnnotation"}},"id":"5504","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"5596","type":"Range1d"},{"attributes":{},"id":"5492","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5483","subtype":"Figure","type":"Plot"},"ticker":{"id":"5492","type":"BasicTicker"}},"id":"5495","type":"Grid"},{"attributes":{},"id":"5646","type":"UnionRenderers"},{"attributes":{"children":[{"id":"5630","type":"Row"},{"id":"5631","type":"Row"}]},"id":"5632","type":"Column"},{"attributes":{},"id":"5505","type":"ResetTool"},{"attributes":{},"id":"5487","type":"LinearScale"},{"attributes":{},"id":"5489","type":"LinearScale"},{"attributes":{},"id":"5506","type":"ZoomInTool"},{"attributes":{},"id":"5522","type":"Selection"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"5517","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5483","subtype":"Figure","type":"Plot"},"ticker":{"id":"5492","type":"BasicTicker"}},"id":"5491","type":"LinearAxis"},{"attributes":{},"id":"5545","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"North Frigid Zone"},"id":"5482","type":"Title"},{"attributes":{},"id":"5517","type":"BasicTickFormatter"}],"root_ids":["5632"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"53b6195a-dff0-4c5b-ab4b-57e027bf127a","roots":{"5632":"18b6baf0-fb8a-4fc6-9586-2606a125df8c"}}];
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