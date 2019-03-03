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
      };var element = document.getElementById("a78fd3e5-9234-410a-b6f3-267875eab6aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a78fd3e5-9234-410a-b6f3-267875eab6aa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0d620f48-9a3c-4407-8748-1eed79ecbe42":{"roots":{"references":[{"attributes":{"source":{"id":"7778","type":"ColumnDataSource"}},"id":"7785","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7705","type":"HoverTool"},{"id":"7727","type":"SaveTool"},{"id":"7728","type":"PanTool"},{"id":"7729","type":"WheelZoomTool"},{"id":"7730","type":"BoxZoomTool"},{"id":"7731","type":"ResetTool"}]},"id":"7732","type":"Toolbar"},{"attributes":{},"id":"7715","type":"LinearScale"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"7741","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"7709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7718","type":"BasicTicker"}},"id":"7717","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"slateblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7765","type":"Line"},{"attributes":{},"id":"7718","type":"BasicTicker"},{"attributes":{},"id":"7713","type":"LinearScale"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"7743","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"7709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7723","type":"BasicTicker"}},"id":"7722","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"7708","type":"Title"},{"attributes":{"line_color":"cadetblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7781","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"7709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7718","type":"BasicTicker"}},"id":"7721","type":"Grid"},{"attributes":{},"id":"7723","type":"BasicTicker"},{"attributes":{"line_alpha":0.2,"line_color":"slateblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7766","type":"Line"},{"attributes":{},"id":"7746","type":"Selection"},{"attributes":{},"id":"7762","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"7709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7723","type":"BasicTicker"}},"id":"7726","type":"Grid"},{"attributes":{},"id":"7741","type":"BasicTickFormatter"},{"attributes":{},"id":"7794","type":"UnionRenderers"},{"attributes":{},"id":"7807","type":"UnionRenderers"},{"attributes":{"below":[{"id":"7717","type":"LinearAxis"}],"left":[{"id":"7722","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":500,"plot_width":1000,"renderers":[{"id":"7717","type":"LinearAxis"},{"id":"7721","type":"Grid"},{"id":"7722","type":"LinearAxis"},{"id":"7726","type":"Grid"},{"id":"7736","type":"BoxAnnotation"},{"id":"7759","type":"Legend"},{"id":"7751","type":"GlyphRenderer"},{"id":"7767","type":"GlyphRenderer"},{"id":"7784","type":"GlyphRenderer"}],"title":{"id":"7708","type":"Title"},"toolbar":{"id":"7732","type":"Toolbar"},"x_range":{"id":"7703","type":"Range1d"},"x_scale":{"id":"7713","type":"LinearScale"},"y_range":{"id":"7704","type":"Range1d"},"y_scale":{"id":"7715","type":"LinearScale"}},"id":"7709","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7748","type":"Line"},{"attributes":{},"id":"7743","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7736","type":"BoxAnnotation"}},"id":"7730","type":"BoxZoomTool"},{"attributes":{},"id":"7779","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7749","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7750","type":"Line"},{"attributes":{},"id":"7775","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7745","type":"ColumnDataSource"},"glyph":{"id":"7748","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"7750","type":"Line"},"nonselection_glyph":{"id":"7749","type":"Line"},"selection_glyph":null,"view":{"id":"7752","type":"CDSView"}},"id":"7751","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7778","type":"ColumnDataSource"},"glyph":{"id":"7781","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"7783","type":"Line"},"nonselection_glyph":{"id":"7782","type":"Line"},"selection_glyph":null,"view":{"id":"7785","type":"CDSView"}},"id":"7784","type":"GlyphRenderer"},{"attributes":{},"id":"7727","type":"SaveTool"},{"attributes":{},"id":"7728","type":"PanTool"},{"attributes":{"source":{"id":"7761","type":"ColumnDataSource"}},"id":"7768","type":"CDSView"},{"attributes":{"callback":null,"end":2010.0,"reset_end":2010.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"7703","type":"Range1d"},{"attributes":{"source":{"id":"7745","type":"ColumnDataSource"}},"id":"7752","type":"CDSView"},{"attributes":{"line_color":"slateblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7764","type":"Line"},{"attributes":{"click_policy":"mute","items":[{"id":"7760","type":"LegendItem"},{"id":"7777","type":"LegendItem"},{"id":"7796","type":"LegendItem"}],"plot":{"id":"7709","subtype":"Figure","type":"Plot"}},"id":"7759","type":"Legend"},{"attributes":{"label":{"value":"Oregon"},"renderers":[{"id":"7767","type":"GlyphRenderer"}]},"id":"7777","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"cadetblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7782","type":"Line"},{"attributes":{"callback":null,"renderers":[{"id":"7751","type":"GlyphRenderer"},{"id":"7767","type":"GlyphRenderer"},{"id":"7784","type":"GlyphRenderer"}],"tooltips":[["State","@{State}"],["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"7705","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7736","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"State":["Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon","Oregon"],"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"XlscLCgpEUBPG+i0gU4jQFT3DokqQhVAvV1175CoEkBv5EZu5MYjQO4dElWEuBFAT+zETuzEDUDq+PS1xSErQDZeukkMYjJA948pw1z25z+j/aY8l8ACQD09PT09PRFANdBpA532K0DntIFOG1ApQIIExY8x9yNAEw3cIqCHLUCHxJaUGmoUQA902kCnDQpANMCcZfNvIUD01F3HFnv3PxOQ0TABGSFA9LXFwYJSKkB98rBQa5rvP4y9TSzMNylAlEWb0e0eEUChfNzUKcAnQCzPJZA1zBJAjTaj2z0YGEAm6fj0tcUEQH19fX19PTFAYTJVMCopJUCvR+F6FKYiQPfa4mBBCShAQ0JCQkJCGUBVnksga3gtQPYoXI/C9RZARKoQd93DIUD3KFyPwvULQOWBG7VO6ANAh0QVId6u+j9HbuRGbuTiP7B4RRLfq8g/F65H4XoU3j+q7jq22NvUP6aaPO4sYcc/BvAWSFD82D97FK5H4XrQPziM2fduBcY/Re0Z3wBkwz/NUjpDV8TRP0HXfLUZBtw/8rBQa5p3rD+xqTTk3Gd3P08b6LSBTns/uR6F61G4nj/fvJp4VjSCPwAAAAAAAPh/4thaenL0cz8wlvxiyS+GPw102kCnDbA/4clqeWMEoz+PwvUoXI+yP9vO91Pjpas/K1cMX4o/sj+39xTpKkh8PwAAAAAAAPh/AAAAAAAA+H/7EbgfgfthP+ATR3qt4IM/CtejcD0Ktz8AAAAAAAD4fzWt480JJWo/AAAAAAAA+H8zdEWcHwdwPwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"7762","type":"Selection"},"selection_policy":{"id":"7794","type":"UnionRenderers"}},"id":"7761","type":"ColumnDataSource"},{"attributes":{},"id":"7729","type":"WheelZoomTool"},{"attributes":{"label":{"value":"Idaho"},"renderers":[{"id":"7751","type":"GlyphRenderer"}]},"id":"7760","type":"LegendItem"},{"attributes":{"label":{"value":"Washington"},"renderers":[{"id":"7784","type":"GlyphRenderer"}]},"id":"7796","type":"LegendItem"},{"attributes":{"callback":null,"end":22.709019607843135,"reset_end":22.709019607843135,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"7704","type":"Range1d"},{"attributes":{"callback":null,"data":{"State":["Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington","Washington"],"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"y+afMU2GGkD5gR/4gR8TQBrTZIA5SyhA9cSRXiv4DkCEc0aU9kYpQHDYPqULcghAly7IYfuUIkCRqCLE2zUkQLHh6ZWyjCJAN5wCac81AEB175CoIkQBQLXoG0+CtTZAFa5H4XooM0AXrkfherQDQNyTh4Va0ylAaWvllTBHMEAt7NyGs3gWQE0b6LSBThhApApx1z0kJECZ1AloImz0Pw2hwRAa7CVAMjMzMzMzJUAq4zkThEgHQKtH4XoUji5Ao0Y+JoHmE0DbExlI708jQL4FEhQ/JjFADnTaQKe1IUDh39/f398iQJdkMf7KFyhATBAi9ZNcH0DxiyW/WFolQFllwxHTniJAojvVbgiiF0DxycNCrSksQFoVEltSagxAk4eFWtP8KkC1Uiu1UqsTQCRYi77xJApAWuiFXuiFC0BeJ3ZiJ3bWPxaMSuoENKE/W+xtYmG+2T/StcqGI6blP0cDeAskKOI/X8cWe5tY4D9sMwx4Dy+oPzHab8pzCcQ/TdGRXP5Dyj8mba28EubQP2prDmP2vcs/f2q8dJMY4D8h2/l+ary0P20a0KYBbWo/MKl8GPfrkj8SERERERGRP9pApw102rQ/R7bz/dR4qT8/QVpnegq8PxIyVHaYupw/nhLkKUGecj8LlJLhNwOfP87ZkWWFNsc/jB9mGwEspT8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H98E7I3IXuDPzJrDFFUC5Q/Ti5oaq8KiD8AAAAAAAAAAAAAAAAAAPh/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"7779","type":"Selection"},"selection_policy":{"id":"7807","type":"UnionRenderers"}},"id":"7778","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"cadetblue","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"7783","type":"Line"},{"attributes":{},"id":"7731","type":"ResetTool"},{"attributes":{"data_source":{"id":"7761","type":"ColumnDataSource"},"glyph":{"id":"7764","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"7766","type":"Line"},"nonselection_glyph":{"id":"7765","type":"Line"},"selection_glyph":null,"view":{"id":"7768","type":"CDSView"}},"id":"7767","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"State":["Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho"],"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"lI5PX1sc6D/xhclUwagJQAGdNtBpYxBALrHtEtsu6T99+byXz3vZP5dDi2znWxNAQuLw2nsKGEDTDzX9UJMQQO/STWIQWBdAMTMzMzNDFEAnA8xZNl8gQLe4uLi4OCtAbz0K16MgHEDjehSuRwEBQF9LyAc9mx9AI+n+wqeyK0C1k7ZWXgkPQAR+/asBOBVA8dJNYhBYIUBMfrHkFwvxPwR5SpCnBBlAR+F6FK6nI0AIgZVDi+wZQKzeTtpaeR5ABzptoNNWEEDt3IazeJobQDss1JrmXS1AbbvlBMvIA0DptIFOG+gYQBo8R6BoKyVAuFtOsIy8KUD8xZJfLPkVQBBjIKjKnyNADNejcD2KFkCK9pvyXAISQNxApw102idAXJHE9ypeGkBjDaP9pnwhQF3EKpH3XRNAnhd6oRd68j+f2Imd2ImtP+RzMD4H49M/XE6wjDyI0j9DwCjV5HHnP0hoJWU8Z9I/Q/FjzF1L5D+6Is6PAwjCP5iXl5eXl6c/s/lnTJNBEUCiWqDg70XZPwmL2fTckYM/Oluqs6U6qz8AAAAAAAD4fyD4gR/4gX8/AAAAAAAA+H+amZmZmZmZPwAAAAAAAPh/zDnnnHPOyT8e1EEd1EFtPwAAAAAAAPh/AAAAAAAA+H8RERERERHBP36w4xZKfbA/xNETHD3B9T8AAAAAAAD4fwAAAAAAAPh/uB6F61G4fj/hE0d6reCTP3sUrkfhenQ/XI/C9ShcGkB7FK5H4Xq0PwAAAAAAAPh/AAAAAAAA+H8yLpFaiiBtPwAAAAAAAAAAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"7746","type":"Selection"},"selection_policy":{"id":"7775","type":"UnionRenderers"}},"id":"7745","type":"ColumnDataSource"}],"root_ids":["7709"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"0d620f48-9a3c-4407-8748-1eed79ecbe42","roots":{"7709":"a78fd3e5-9234-410a-b6f3-267875eab6aa"}}];
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