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
      };var element = document.getElementById("a4bedaaf-d1cd-402c-90ec-aaa3bfbee449");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a4bedaaf-d1cd-402c-90ec-aaa3bfbee449' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"809534d5-4d82-42bf-bd0f-fbe50f677eaa":{"roots":{"references":[{"attributes":{},"id":"10116","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"10093","type":"Range1d"},{"attributes":{"overlay":{"id":"10122","type":"BoxAnnotation"}},"id":"10117","type":"BoxZoomTool"},{"attributes":{},"id":"10151","type":"UnionRenderers"},{"attributes":{},"id":"10102","type":"LinearScale"},{"attributes":{},"id":"10140","type":"Selection"},{"attributes":{"callback":null,"end":22.606760399351572,"reset_end":22.606760399351572,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"10094","type":"Range1d"},{"attributes":{"line_alpha":0.2,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"10136","type":"Line"},{"attributes":{},"id":"10105","type":"BasicTicker"},{"attributes":{},"id":"10114","type":"SaveTool"},{"attributes":{},"id":"10118","type":"ResetTool"},{"attributes":{},"id":"10100","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10122","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"10096","subtype":"Figure","type":"Plot"},"ticker":{"id":"10110","type":"BasicTicker"}},"id":"10113","type":"Grid"},{"attributes":{},"id":"10129","type":"BasicTickFormatter"},{"attributes":{},"id":"10115","type":"PanTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"10127","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"10096","subtype":"Figure","type":"Plot"},"ticker":{"id":"10105","type":"BasicTicker"}},"id":"10104","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"measles":{"__ndarray__":"+PWImV5CHkDxekO81yYVQNWJnjmw+RlAEeUkvqWpG0A4kk1OW5kZQANncUFhLhRAubhMEVB6KkAKFQxgRfkkQBexgj1g0xZAA5QkxUZyFEBkjaUl+9AlQJYuBCuyRyFA1NTyAIAHFkDnXL2xJ/0iQFkIv6q9HyFAKdp0Sz2UJECSFAscG/kgQJs6z7+vhAJA/KczCxIwIEDza3Au9FUQQMDW7tWVlB1AerjBcqoDIkB7aU8NaoIPQKapnaOpLR5AzlWh0vUKIEA0hdYVPScYQLYOAMdvGiBAEPdJV4urH0C6YigTDdYdQIBHcEXaMBxA5YKF4N61IUDayi0qHhEYQK+dxcRemxdAitR08UqNE0BMxypvfcYYQEqul9DC5RNAAJur5y/sFUCOeVtOvloNQPqc4j6HDQFArUVqdb7h5j9LXBT90EjIP/L3vXDwz9A/0g4nvW5V3D92iTTOKh/oPx+NrPjcPNQ/K6u1hkqX0j/tgh8/DjnHPwk0Qa7N0tE/8oXUSHd52z8zuU/xCwDdP4z9wIVjqdA/e+grOJeBvD9eZlUb+QTAP5Zi8KIWXJI/F8TTE1Rliz8IXTLMgUyYP1389+0Voac/HaXnRTPDrD96R+Kt5qGuP/6xVxWsg60/23HRch7xqT+XZdJ37se6P9qiPeoIk78/byjlSfgrtz88BF7kS5ibPxyxvUZGWYI/wdYAQjAEkz+bdF/9Nr51P4vDvRP0rJI/ZHIhlXSn3D+appuGKKaIP0Os0U5L42I/ilM7U8rZZj/T9wYwJC9jP2bR6wSG+mk/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"10132","type":"Selection"},"selection_policy":{"id":"10151","type":"UnionRenderers"}},"id":"10131","type":"ColumnDataSource"},{"attributes":{},"id":"10153","type":"UnionRenderers"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"10129","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"10096","subtype":"Figure","type":"Plot"},"ticker":{"id":"10110","type":"BasicTicker"}},"id":"10109","type":"LinearAxis"},{"attributes":{"data_source":{"id":"10131","type":"ColumnDataSource"},"glyph":{"id":"10134","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"10136","type":"Line"},"nonselection_glyph":{"id":"10135","type":"Line"},"selection_glyph":null,"view":{"id":"10138","type":"CDSView"}},"id":"10137","type":"GlyphRenderer"},{"attributes":{},"id":"10127","type":"BasicTickFormatter"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"10148","type":"TeeHead"},"plot":{"id":"10096","subtype":"Figure","type":"Plot"},"source":{"id":"10139","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"10149","type":"TeeHead"}},"id":"10141","type":"Whisker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"10096","subtype":"Figure","type":"Plot"},"ticker":{"id":"10105","type":"BasicTicker"}},"id":"10108","type":"Grid"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"10149","type":"TeeHead"},{"attributes":{"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"10134","type":"Line"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"10148","type":"TeeHead"},{"attributes":{"source":{"id":"10131","type":"ColumnDataSource"}},"id":"10138","type":"CDSView"},{"attributes":{"below":[{"id":"10104","type":"LinearAxis"}],"left":[{"id":"10109","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"renderers":[{"id":"10104","type":"LinearAxis"},{"id":"10108","type":"Grid"},{"id":"10109","type":"LinearAxis"},{"id":"10113","type":"Grid"},{"id":"10122","type":"BoxAnnotation"},{"id":"10137","type":"GlyphRenderer"},{"id":"10141","type":"Whisker"}],"title":{"id":"10095","type":"Title"},"toolbar":{"id":"10119","type":"Toolbar"},"x_range":{"id":"10093","type":"Range1d"},"x_scale":{"id":"10100","type":"LinearScale"},"y_range":{"id":"10094","type":"Range1d"},"y_scale":{"id":"10102","type":"LinearScale"}},"id":"10096","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#30a2da","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"10135","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"10095","type":"Title"},{"attributes":{},"id":"10110","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10114","type":"SaveTool"},{"id":"10115","type":"PanTool"},{"id":"10116","type":"WheelZoomTool"},{"id":"10117","type":"BoxZoomTool"},{"id":"10118","type":"ResetTool"}]},"id":"10119","type":"Toolbar"},{"attributes":{},"id":"10132","type":"Selection"},{"attributes":{"callback":null,"data":{"base":[1928,1930,1932,1934,1936,1938,1940,1942,1944,1946,1948,1950,1952,1954,1956,1958,1960,1962,1964,1966,1968,1970,1972,1974,1976,1978,1980,1982,1984,1986,1988,1990,1992,1994,1996,1998,2000,2002,2004,2006,2008,2010],"lower":{"__ndarray__":"QNsmEthZzj9QuNWH6cjzP3wSeBIp2PK/TP0nWNv3DkD1dbDtuTAUwOARv2/xm/A/gIecY0c1pz/greeLZKPZP4K9h6Tl7AdAUM3o5mu2AkC4MUMZiHT/P9hqmvQ0N+M/tHvd4yLm8z9u/RqI4RkJQKJc2X95BgJAggDxwvxnAkA4F+7B20TsP3CDOLdOP/I/HJm2x35f8z+wbN++xOXYvwAb1QlQfFi/XBgVJBUfvD8Y99c7lb+0v1aw51zs5bS/orGNLUSf178WJqcO0QXFvwAj0qSFxa2/9CpKxg9OYr/lkYE4zWuqv0ip71PoDoS/XVpdSmYRpb/AEDw2cBWIv1w4gOBF+5G/Fd1+1YTxlL/6p224Nyihv5eCBchgZ5i/QBW+r9MbJ79PDD0uU2B0vwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[42]},"upper":{"__ndarray__":"i1pAOffILUDL0qMIk4AnQIiUnHBg9CtAELlHplSbNkAJdi2a3nUwQEacqQ48xzRATDiPuUrwJUCiaY8YMLkwQMQ59M789itApBytHImyK0CJcMbSBKYpQCAcvG6DGx1AJvzGSCeZLUAQXvkrZ+4pQJILMrNuVClAqsVOkL7RLkA8vKYIEdclQN62Q5iTfiZA3Me0DkCAI0DFk9CK45sSQGYxHk1NYdg/xmukGIzR6D8CjCegz9TmPwJvWVaJctw/Yq/Nr4yk8z8Sx2rJ1+rlP76q78+pvdM/dgmdDBavnT+oYhxFfmvCP1IeMNzhkcA/hQ8AzOg8wj/zsdD2L4rQPzUQT2r3SrI/TEXArPJ8rT/CtRXmleqxP5iUUKfEhqg/NES58KiSdz/abpSZbC2HPwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[42]}},"selected":{"id":"10140","type":"Selection"},"selection_policy":{"id":"10153","type":"UnionRenderers"}},"id":"10139","type":"ColumnDataSource"}],"root_ids":["10096"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"809534d5-4d82-42bf-bd0f-fbe50f677eaa","roots":{"10096":"a4bedaaf-d1cd-402c-90ec-aaa3bfbee449"}}];
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