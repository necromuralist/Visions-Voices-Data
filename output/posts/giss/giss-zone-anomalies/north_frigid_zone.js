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
      };var element = document.getElementById("ada11f1a-cb04-4b79-86ef-250c60d7964d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ada11f1a-cb04-4b79-86ef-250c60d7964d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6666ee81-7f9c-4b14-875b-603e323de721":{"roots":{"references":[{"attributes":{},"id":"17950","type":"UnionRenderers"},{"attributes":{},"id":"17900","type":"BasicTicker"},{"attributes":{"overlay":{"id":"18157","type":"BoxAnnotation"},"x_range":{"id":"17882","type":"Range1d"},"y_range":null},"id":"18156","type":"RangeTool"},{"attributes":{},"id":"17921","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18021","type":"ColumnDataSource"}},"id":"18028","type":"CDSView"},{"attributes":{},"id":"17905","type":"PanTool"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"17927","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"18025","type":"Line"},{"attributes":{},"id":"17892","type":"LinearScale"},{"attributes":{"data_source":{"id":"18021","type":"ColumnDataSource"},"glyph":{"id":"18024","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"18026","type":"Line"},"nonselection_glyph":{"id":"18025","type":"Line"},"selection_glyph":null,"view":{"id":"18028","type":"CDSView"}},"id":"18027","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"18002","subtype":"Figure","type":"Plot"},"ticker":{"id":"18011","type":"BasicTicker"}},"id":"18014","type":"Grid"},{"attributes":{"children":[{"id":"18033","type":"Row"},{"id":"18034","type":"Row"}]},"id":"18035","type":"Column"},{"attributes":{},"id":"18032","type":"BasicTickFormatter"},{"attributes":{},"id":"17904","type":"SaveTool"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"18024","type":"Line"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"18030","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"18002","subtype":"Figure","type":"Plot"},"ticker":{"id":"18011","type":"BasicTicker"}},"id":"18010","type":"LinearAxis"},{"attributes":{},"id":"17908","type":"ResetTool"},{"attributes":{},"id":"17909","type":"ZoomInTool"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"17882","type":"Range1d"},{"attributes":{"overlay":{"id":"17914","type":"BoxAnnotation"}},"id":"17907","type":"BoxZoomTool"},{"attributes":{},"id":"17923","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"17929","type":"Line"},{"attributes":{"callback":null,"data":{"North Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"North_Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"17925","type":"Selection"},"selection_policy":{"id":"17950","type":"UnionRenderers"}},"id":"17924","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"17886","subtype":"Figure","type":"Plot"},"ticker":{"id":"17895","type":"BasicTicker"}},"id":"17898","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"18157","type":"BoxAnnotation"},{"attributes":{},"id":"18011","type":"BasicTicker"},{"attributes":{"items":[],"plot":{"id":"17886","subtype":"Figure","type":"Plot"}},"id":"17938","type":"Legend"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"18032","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"18002","subtype":"Figure","type":"Plot"},"ticker":{"id":"18016","type":"BasicTicker"},"visible":false},"id":"18015","type":"LinearAxis"},{"attributes":{},"id":"18030","type":"BasicTickFormatter"},{"attributes":{"axis_label":"","bounds":"auto","formatter":{"id":"17921","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"17886","subtype":"Figure","type":"Plot"},"ticker":{"id":"17895","type":"BasicTicker"}},"id":"17894","type":"LinearAxis"},{"attributes":{"callback":null,"end":3.05,"reset_end":3.05,"reset_start":-1.64,"start":-1.64,"tags":[[["North Frigid","Temperature Anomaly (C)",null]]]},"id":"17883","type":"Range1d"},{"attributes":{"callback":null,"renderers":[{"id":"17930","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Temperature Anomaly (C)","@{North_Frigid}"]]},"id":"17884","type":"HoverTool"},{"attributes":{},"id":"17906","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17924","type":"ColumnDataSource"}},"id":"17931","type":"CDSView"},{"attributes":{"children":[{"id":"18002","subtype":"Figure","type":"Plot"}]},"id":"18034","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18156","type":"RangeTool"}]},"id":"18020","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"18002","subtype":"Figure","type":"Plot"},"ticker":{"id":"18016","type":"BasicTicker"}},"id":"18019","type":"Grid"},{"attributes":{"callback":null,"data":{"North Frigid":{"__ndarray__":"CtejcD0K778fhetRuB7tv9ejcD0K1/e/ZmZmZmZm1r8fhetRuB71v+F6FK5H4fK/AAAAAAAA9L8fhetRuB75v65H4XoUrve/hetRuB6F67+kcD0K16P0v3sUrkfhevS/H4XrUbge9b8fhetRuB7tv+xRuB6F6/W/uB6F61G47r8AAAAAAAD0v0jhehSuR+m/AAAAAAAA9L/sUbgehevxv83MzMzMzOS/4XoUrkfh4r89CtejcD36v/YoXI/C9eC/16NwPQrX07+amZmZmZnJvz0K16NwPdq/UrgehetR6L/NzMzMzMzcvz0K16NwPeq/CtejcD0K578K16NwPQrXv3sUrkfheuS/H4XrUbge5b/hehSuR+Hiv+F6FK5H4eK/exSuR+F61L/NzMzMzMzkvwrXo3A9CvO/MzMzMzMz6797FK5H4XqUP7gehetRuJ6/9ihcj8L12L+kcD0K16PAP+xRuB6F69E/exSuR+F6xL9cj8L1KFzfP3sUrkfheqS/MzMzMzMz4z97FK5H4XqUPylcj8L1KNw/PQrXo3A92j9xPQrXo3DNP4XrUbgehdu/zczMzMzM5D9SuB6F61HIP+xRuB6F68E/CtejcD0K7z9xPQrXo3DxP83MzMzMzNw/hetRuB6F6z9xPQrXo3DNvwAAAAAAANA/SOF6FK5H8T8UrkfhehTuPwrXo3A9Ctc/KVyPwvUozL8zMzMzMzPrP+xRuB6F67E/pHA9CtejwD97FK5H4XqEv3sUrkfhepS/KVyPwvUovD/sUbgehevpP1K4HoXrUeA/zczMzMzM3L+PwvUoXI/Sv7gehetRuJ4/KVyPwvUovL/hehSuR+HaP3sUrkfhetQ/exSuR+F6xL97FK5H4XrkP3sUrkfheoS/H4XrUbge5b8K16NwPQrHvxSuR+F6FOa/cT0K16Nw3T8pXI/C9SjMv5qZmZmZmak/w/UoXI/Cxb/sUbgeheuxv5qZmZmZmdm/4XoUrkfhyj+kcD0K16PQv5qZmZmZmck/mpmZmZmZqb/hehSuR+HKP7gehetRuJ6/7FG4HoXr4b9mZmZmZmbWP3E9CtejcPU/MzMzMzMz07/D9Shcj8LVP/YoXI/C9dg/rkfhehSu1z+amZmZmZm5Pylcj8L1KMy/PQrXo3A96j/NzMzMzMzcP3E9CtejcOU/j8L1KFyP6j8pXI/C9Si8vxSuR+F6FOY/hetRuB6F2z+PwvUoXI/2Pylcj8L1KOw/PQrXo3A96j+kcD0K16PwP1K4HoXrUeA/j8L1KFyP8j+amZmZmZnxPz0K16NwPfY/9ihcj8L1+D/D9Shcj8LlPwAAAAAAAABA7FG4HoXr+T9mZmZmZmb+P+xRuB6F6/U/rkfhehSu8z+uR+F6FK7/P7gehetRuABAFK5H4XoU/j+4HoXrUbjyP3sUrkfhevw/j8L1KFyP+j9mZmZmZmYIQK5H4XoUrgFA7FG4HoXr/T8=","dtype":"float64","shape":[139]},"Year":[1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]},"selected":{"id":"18022","type":"Selection"},"selection_policy":{"id":"18050","type":"UnionRenderers"}},"id":"18021","type":"ColumnDataSource"},{"attributes":{},"id":"18016","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"17928","type":"Line"},{"attributes":{"plot":null,"text":"North Frigid Zone"},"id":"17885","type":"Title"},{"attributes":{},"id":"17925","type":"Selection"},{"attributes":{},"id":"17895","type":"BasicTicker"},{"attributes":{},"id":"18050","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17894","type":"LinearAxis"}],"left":[{"id":"17899","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":800,"renderers":[{"id":"17894","type":"LinearAxis"},{"id":"17898","type":"Grid"},{"id":"17899","type":"LinearAxis"},{"id":"17903","type":"Grid"},{"id":"17914","type":"BoxAnnotation"},{"id":"17938","type":"Legend"},{"id":"17930","type":"GlyphRenderer"},{"id":"17942","type":"Span"}],"title":{"id":"17885","type":"Title"},"toolbar":{"id":"17910","type":"Toolbar"},"x_range":{"id":"17882","type":"Range1d"},"x_scale":{"id":"17890","type":"LinearScale"},"y_range":{"id":"17883","type":"Range1d"},"y_scale":{"id":"17892","type":"LinearScale"}},"id":"17886","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Temperature Anomaly (C)","bounds":"auto","formatter":{"id":"17923","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"17886","subtype":"Figure","type":"Plot"},"ticker":{"id":"17900","type":"BasicTicker"}},"id":"17899","type":"LinearAxis"},{"attributes":{},"id":"18006","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17884","type":"HoverTool"},{"id":"17904","type":"SaveTool"},{"id":"17905","type":"PanTool"},{"id":"17906","type":"WheelZoomTool"},{"id":"17907","type":"BoxZoomTool"},{"id":"17908","type":"ResetTool"},{"id":"17909","type":"ZoomInTool"}]},"id":"17910","type":"Toolbar"},{"attributes":{"data_source":{"id":"17924","type":"ColumnDataSource"},"glyph":{"id":"17927","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"17929","type":"Line"},"nonselection_glyph":{"id":"17928","type":"Line"},"selection_glyph":null,"view":{"id":"17931","type":"CDSView"}},"id":"17930","type":"GlyphRenderer"},{"attributes":{"level":"glyph","line_alpha":{"value":0.2},"line_width":{"value":2},"location":0,"plot":null},"id":"17942","type":"Span"},{"attributes":{},"id":"17890","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17914","type":"BoxAnnotation"},{"attributes":{},"id":"18022","type":"Selection"},{"attributes":{"callback":null,"end":2018.0,"reset_end":2018.0,"reset_start":1880.0,"start":1880.0,"tags":[[["Year","Year",null]]]},"id":"17999","type":"Range1d"},{"attributes":{},"id":"18008","type":"LinearScale"},{"attributes":{"callback":null,"end":3.05,"reset_end":3.05,"reset_start":-1.64,"start":-1.64,"tags":[[["North Frigid","Temperature Anomaly (C)",null]]]},"id":"18000","type":"Range1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"17886","subtype":"Figure","type":"Plot"},"ticker":{"id":"17900","type":"BasicTicker"}},"id":"17903","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"18001","type":"Title"},{"attributes":{"below":[{"id":"18010","type":"LinearAxis"}],"left":[{"id":"18015","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":800,"renderers":[{"id":"18010","type":"LinearAxis"},{"id":"18014","type":"Grid"},{"id":"18015","type":"LinearAxis"},{"id":"18019","type":"Grid"},{"id":"18027","type":"GlyphRenderer"},{"id":"18157","type":"BoxAnnotation"}],"title":{"id":"18001","type":"Title"},"toolbar":{"id":"18020","type":"Toolbar"},"x_range":{"id":"17999","type":"Range1d"},"x_scale":{"id":"18006","type":"LinearScale"},"y_range":{"id":"18000","type":"Range1d"},"y_scale":{"id":"18008","type":"LinearScale"}},"id":"18002","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"North Frigid"}},"id":"18026","type":"Line"},{"attributes":{"children":[{"id":"17886","subtype":"Figure","type":"Plot"}]},"id":"18033","type":"Row"}],"root_ids":["18035"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"6666ee81-7f9c-4b14-875b-603e323de721","roots":{"18035":"ada11f1a-cb04-4b79-86ef-250c60d7964d"}}];
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