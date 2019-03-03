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
      };var element = document.getElementById("e398babc-d5bc-451c-bb10-02ce9f5163d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e398babc-d5bc-451c-bb10-02ce9f5163d0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"511c512e-ce77-471a-84b6-d65cdb2bde9a":{"roots":{"references":[{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"1791","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1812","type":"SaveTool"},{"id":"1813","type":"PanTool"},{"id":"1814","type":"WheelZoomTool"},{"id":"1815","type":"BoxZoomTool"},{"id":"1816","type":"ResetTool"}]},"id":"1817","type":"Toolbar"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"1846","type":"TeeHead"},"plot":{"id":"1794","subtype":"Figure","type":"Plot"},"source":{"id":"1837","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"1847","type":"TeeHead"}},"id":"1839","type":"Whisker"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1833","type":"Line"},{"attributes":{},"id":"1827","type":"BasicTickFormatter"},{"attributes":{},"id":"1813","type":"PanTool"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1834","type":"Line"},{"attributes":{},"id":"1814","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1820","type":"BoxAnnotation"}},"id":"1815","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":35.11629898786702,"reset_end":35.11629898786702,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"1792","type":"Range1d"},{"attributes":{},"id":"1816","type":"ResetTool"},{"attributes":{},"id":"1825","type":"BasicTickFormatter"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"1846","type":"TeeHead"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1820","type":"BoxAnnotation"},{"attributes":{},"id":"1838","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1794","subtype":"Figure","type":"Plot"},"ticker":{"id":"1808","type":"BasicTicker"}},"id":"1811","type":"Grid"},{"attributes":{},"id":"1808","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1794","subtype":"Figure","type":"Plot"},"ticker":{"id":"1803","type":"BasicTicker"}},"id":"1806","type":"Grid"},{"attributes":{"source":{"id":"1829","type":"ColumnDataSource"}},"id":"1836","type":"CDSView"},{"attributes":{},"id":"1803","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"base":[1928,1930,1932,1934,1936,1938,1940,1942,1944,1946,1948,1950,1952,1954,1956,1958,1960,1962,1964,1966,1968,1970,1972,1974,1976,1978,1980,1982,1984,1986,1988,1990,1992,1994,1996,1998,2000,2002,2004,2006,2008,2010],"lower":{"__ndarray__":"w4AEvcGhGMAIMo1yAmcQwHM0i6/hrhzAxeET7vUFIMDfMo/a0zYlwKmtZYfKWSnALXi5ud/3EcDKRFVJTo4dwISoSYoP3BXAEDROdeFqGMA6Nurd4IgOwLJYvR4HXQPABNwBXQC8FcD2NJPJjZITwKJXjMyXugvAcAOb6V0WEcDo2OCuQs0NwJiSoQZkpQnAtYjWy00PFsCWGkGXh7EAwEFtI0IU4Mi/Lnjdf/C54L+aNiffaVbjvyrGQJ0zINm/pHFaQHhf8b8bRDiQnGzov8qB2klaTdK/8jhICucKob/3y8FlWSTSv/AIVWUZXtC/2whudgtCx78IpCwovp7Nv5dyEj7AMri/wl9BIopIvL/XamcNajnFv74XNzVBpq2/ZOH8A//IjL/GYMSXMX6FvwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[42]},"upper":{"__ndarray__":"qZFQgC3hNUBjiUamMH8xQBDCLcU+pDRASkbIRzkXQUCogOZd+lU2QC+5nuLijkFA6tDu1rTJL0BoZbmDHNs4QDiX+h7LwjZAWVzS5zitNkC50WFG1MoyQKhklS4O+yRAUlhU3TuHNUDkFGheDxI1QHOcQjTZxDJAyIaHU0uGNkD0ZZyy9bgvQHakJM9qITBAaEkZuToYMUBhkWwrLW8ZQIqprKP0ouI/UVYRnJa79j8kkKh1HR30P+E2E+x3fOg/CW8lc50FAEAOGcIM5gv1P5sYUuOnz+E/itqifeiArj8xAoihZ2HYP4QWigwD/tg/wQIS+u7r0T9+1DdG0h/fP0I+8zNY5MI/K5IDMBvqwj9RaQzlBtzKP50cuej917E/SHZc21/6kz8AHss2VeuKPwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[42]}},"selected":{"id":"1838","type":"Selection"},"selection_policy":{"id":"1852","type":"UnionRenderers"}},"id":"1837","type":"ColumnDataSource"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"1825","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1794","subtype":"Figure","type":"Plot"},"ticker":{"id":"1803","type":"BasicTicker"}},"id":"1802","type":"LinearAxis"},{"attributes":{},"id":"1830","type":"Selection"},{"attributes":{"below":[{"id":"1802","type":"LinearAxis"}],"left":[{"id":"1807","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":500,"plot_width":1000,"renderers":[{"id":"1802","type":"LinearAxis"},{"id":"1806","type":"Grid"},{"id":"1807","type":"LinearAxis"},{"id":"1811","type":"Grid"},{"id":"1820","type":"BoxAnnotation"},{"id":"1835","type":"GlyphRenderer"},{"id":"1839","type":"Whisker"}],"title":{"id":"1793","type":"Title"},"toolbar":{"id":"1817","type":"Toolbar"},"x_range":{"id":"1791","type":"Range1d"},"x_scale":{"id":"1798","type":"LinearScale"},"y_range":{"id":"1792","type":"Range1d"},"y_scale":{"id":"1800","type":"LinearScale"}},"id":"1794","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1812","type":"SaveTool"},{"attributes":{},"id":"1800","type":"LinearScale"},{"attributes":{},"id":"1852","type":"UnionRenderers"},{"attributes":{},"id":"1798","type":"LinearScale"},{"attributes":{"data_source":{"id":"1829","type":"ColumnDataSource"},"glyph":{"id":"1832","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"1834","type":"Line"},"nonselection_glyph":{"id":"1833","type":"Line"},"selection_glyph":null,"view":{"id":"1836","type":"CDSView"}},"id":"1835","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"8eIeInpxH0A5gYPOMg8WQMJ5RhPgyhpAOhBXY1sGHEDn6ZWyDPEaQL3tWudV0BRAsZuGmHcrKkCkcW6BEDomQHLOPeEgdRdAIxiu4kfkFECJm4qB4HAmQEssLvgVtiFA0xQS+sTNFkAd/CLFEWAjQDUUZPGIdyFAJNp0Sz2UJEAXLWg8x0shQFhlAiEc5wJAVc9+ioCSIEBj7DYAcHoQQOMVSVVw8x1Al+VNAEgtIkB8DuZmzCMQQMBNQ0huPB5AUeETxjsYIEAQ7raCbMQYQKdHA+xrLSBAJc0RsC96H0D9ImJ1DJseQEGeA/oWyxxA7MUg2bNAIkAvubxD1vIYQLov5AalRRhAg1d+0fx8FEBG5KCcfNkZQL4DW3PGcxVAdU5HjM4oF0B6H29pDm4NQBYEzF9pFgFAYaQmrlwp5z9znEcm39XIPxDOdygsFNA/dTRFuDy93D8mwkWnIlzoP6/pKQzR49Q/HRx8IwDI0z+Xp+U6vNjHP4NhncWFd9M/3tjgS4VX3T/eUXQof/fdPwLuS4kvq9E/xdDY8voUvT9rr8l89VHBP38BgmhjYpU/LkO15gLsij/D3KtYYgGWP+XYGO849Kg/8XIHoy0Urj8qG2pO0z+xPzgf7ENb6a8/T/lr+6QrqT/tp0+DQem8P3qCITJzUMA/Jvb5Ju2QuD/cE6hT4CubPwtTbSpy2Yk/KomLe1gXkz/1fmq8dJN4P+v5k15zipY/fWHttqiNnz/thexw6iZ4P1P5i7PFBl4/WRZ4ZYFXZj+Rvdx2KBJgP+T0GnyOtFU/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"1830","type":"Selection"},"selection_policy":{"id":"1850","type":"UnionRenderers"}},"id":"1829","type":"ColumnDataSource"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"1832","type":"Line"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"1827","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1794","subtype":"Figure","type":"Plot"},"ticker":{"id":"1808","type":"BasicTicker"}},"id":"1807","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"1793","type":"Title"},{"attributes":{},"id":"1850","type":"UnionRenderers"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"1847","type":"TeeHead"}],"root_ids":["1794"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"511c512e-ce77-471a-84b6-d65cdb2bde9a","roots":{"1794":"e398babc-d5bc-451c-bb10-02ce9f5163d0"}}];
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