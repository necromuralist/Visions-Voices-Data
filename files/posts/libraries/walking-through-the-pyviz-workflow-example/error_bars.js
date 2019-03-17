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
      };var element = document.getElementById("6dd24aaa-d419-4455-9f1f-ea0ca99b0b7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6dd24aaa-d419-4455-9f1f-ea0ca99b0b7f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"502fcfae-1d3a-40fa-a198-9d9f54edc4be":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"48569","subtype":"Figure","type":"Plot"},"ticker":{"id":"48578","type":"BasicTicker"}},"id":"48581","type":"Grid"},{"attributes":{"data_source":{"id":"48605","type":"ColumnDataSource"},"glyph":{"id":"48608","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"48610","type":"Line"},"nonselection_glyph":{"id":"48609","type":"Line"},"selection_glyph":null,"view":{"id":"48612","type":"CDSView"}},"id":"48611","type":"GlyphRenderer"},{"attributes":{},"id":"48647","type":"UnionRenderers"},{"attributes":{"text_align":"right","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48623","type":"Text"},{"attributes":{"data_source":{"id":"48620","type":"ColumnDataSource"},"glyph":{"id":"48623","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48624","type":"Text"},"selection_glyph":null,"view":{"id":"48626","type":"CDSView"}},"id":"48625","type":"GlyphRenderer"},{"attributes":{},"id":"48602","type":"BasicTickFormatter"},{"attributes":{},"id":"48604","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"48569","subtype":"Figure","type":"Plot"},"ticker":{"id":"48583","type":"BasicTicker"}},"id":"48586","type":"Grid"},{"attributes":{},"id":"48621","type":"Selection"},{"attributes":{"callback":null,"data":{"base":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"lower":{"__ndarray__":"ryFqexelGMAmumJ63C8GwIQ7tCKNaRDAuAgC2ResFMC9MhTBMbIcwGgzll+ikwXAuxV7hkgIIMDcAHPRzKQcwJt0oULQOCXAE3udH9InEsAZno65Y1wpwOl6KLbRJy3AgaYLNyz6EcDWVjSwzecawJqGzg+/kR3ArKkc/r3VF8BYqoJPQt8VwBS3pGvxnQLAXDIt6/5tGMAPeK5nDd4QwPZhMq95jg7A6FfCwMk9FcAuvug42l8DwOLlB16IORXAArBQQPm+FcA+xhJViukTwMA8+TUtlRPAsTZoKKgPHsDufhsqMr8LwO87Rt57FBbA5p+QK0gZEcCu6EptJTQJwBSLaH+u0Q3AAF6KlvrGAcBwAx5zr6kJwCqTlgEoKRLAV9xV5tkRFsASLHHPcHsHwG6Wx408swDAV8eW5T317L/10GKHl+LIv37fURgfgNu/ZjADfYy74L8CF5k5vsnpvzyUWJ3/V+O/zD4wpZDK4r/GyecUUCLZv5bdYDqct+6/fuJbDNVg8b+tuh3+Rkjpv69Rix+Ebui/Hi13Zlwmy79eLRta/k7Sv2Q6SC+P6Ka/DsqGrDgNob/S+asoP2Cyv/hfl3AwJ9K/thrhDSqt0L8Mfsou41/Qv/qPmDrQdsu/h+LVNKdFx793z7rEz57Rv8oNbffwoc2/ZlzD30dU0796aXvZaDa4v4GY0/YXuaq/LCVwb5VMvL/BycKm/Auiv9sXLS4rPMW/MYM2cvoF2L8qifKo/q2tv0K3aCMRQYG/gBL550bQjL8pVlGnibKHv1wWtC16i4W/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]},"upper":{"__ndarray__":"5Pnp7wLiNUDCLxztKZsrQMJLUFLTfzFASwrspzMuM0CjAZDJEqU0QJd6QH8+NSpARxPi7c0XQUDbMcu1Q2M9QIah75H4VjZArNV88jD4LUBL9SgviY9BQOA0oWn/JEBAFOiXFdvKL0DSETAxBRo6QNy1V7X42zhAjwT8yqyJOkCt10jQl8M2QOLA1NYUNhxA7BtKRQCuNkBqKA60dukoQDDXimCHyzJAkXt+cLp8N0AIPiD1wvskQFigozuZbDRAUg0oFvqHNUCYKKDWmFwxQNeWgTm3EjVAP/Qi4gFBN0BcgfR/bMUyQBxek3Sq6jNA5u0E5AWHNkBacw+f3z8vQH9SvqYQui9AA+8gd7vuKECRMrQ89CEwQFNNJnRaiC5AUB65v90YMUDC2pNo45UkQE3Pr6YHcBlABgR50P3RAkB3gvx0laPiP8+9oLQ71O0/bTKkmmS89j/UJgnigKACQPU+wVToHfQ/dC1WZEhJ8z+vuOYnhn3oP40f//+QF/k/dycm2UsGAEBGBkkT45/7P9ifa9TZDPU/8f6nrKsd3D9kbnLredDhP/Id5Ut5JbY/pGvhHzqDrj806AFV8GC9PzKWXaw+ZNg/cveidjUy2D+ii//VzP/YP8tPR+6+tdU/l+9F2bzt0T+3UTFDuAngP18J2K1rId8/eldAc76c3z+0uaeBLObCPwMhBYbo0rM/4PSa1iDswj9/ad3V2TCoP1UW0gXI3so/YS8Uia/32z9T1Zai3NuxP5a1S5DCwog/1o5azQP+kz/xtL/inbuPP5bTusyd+Io/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"48614","type":"Selection"},"selection_policy":{"id":"48647","type":"UnionRenderers"}},"id":"48613","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["Newer Vaccine"],"x":[1969],"y":[27000]},"selected":{"id":"48631","type":"Selection"},"selection_policy":{"id":"48651","type":"UnionRenderers"}},"id":"48630","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"mean"}},"id":"48609","type":"Line"},{"attributes":{"source":{"id":"48630","type":"ColumnDataSource"}},"id":"48636","type":"CDSView"},{"attributes":{},"id":"48578","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"48596","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Mean National Measles Cases By Year","text_font_size":{"value":"18pt"}},"id":"48568","type":"Title"},{"attributes":{"callback":null,"end":2011.0,"reset_end":2011.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"48565","type":"Range1d"},{"attributes":{"source":{"id":"48605","type":"ColumnDataSource"}},"id":"48612","type":"CDSView"},{"attributes":{},"id":"48575","type":"LinearScale"},{"attributes":{},"id":"48589","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":[{"id":"48611","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["mean","@{mean}"]]},"id":"48567","type":"HoverTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"mean"}},"id":"48610","type":"Line"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"48642","type":"TeeHead"},{"attributes":{"callback":null,"data":{"text":["Vaccine Introduced"],"x":[1962],"y":[27000]},"selected":{"id":"48621","type":"Selection"},"selection_policy":{"id":"48649","type":"UnionRenderers"}},"id":"48620","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48633","type":"Text"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"48643","type":"TeeHead"},{"attributes":{"callback":null,"end":35.12137403011237,"reset_end":35.12137403011237,"reset_start":0.0,"tags":[[["mean","mean",null]]]},"id":"48566","type":"Range1d"},{"attributes":{},"id":"48614","type":"Selection"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"48602","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"48569","subtype":"Figure","type":"Plot"},"ticker":{"id":"48578","type":"BasicTicker"}},"id":"48577","type":"LinearAxis"},{"attributes":{},"id":"48649","type":"UnionRenderers"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"48643","type":"TeeHead"},"plot":{"id":"48569","subtype":"Figure","type":"Plot"},"source":{"id":"48613","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"48642","type":"TeeHead"}},"id":"48615","type":"Whisker"},{"attributes":{"axis_label":"mean","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"48604","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"48569","subtype":"Figure","type":"Plot"},"ticker":{"id":"48583","type":"BasicTicker"}},"id":"48582","type":"LinearAxis"},{"attributes":{"overlay":{"id":"48596","type":"BoxAnnotation"}},"id":"48590","type":"BoxZoomTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48634","type":"Text"},{"attributes":{"text_align":"right","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48624","type":"Text"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1963,"plot":null},"id":"48619","type":"Span"},{"attributes":{"below":[{"id":"48577","type":"LinearAxis"}],"left":[{"id":"48582","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":1000,"renderers":[{"id":"48577","type":"LinearAxis"},{"id":"48581","type":"Grid"},{"id":"48582","type":"LinearAxis"},{"id":"48586","type":"Grid"},{"id":"48596","type":"BoxAnnotation"},{"id":"48611","type":"GlyphRenderer"},{"id":"48615","type":"Whisker"},{"id":"48619","type":"Span"},{"id":"48625","type":"GlyphRenderer"},{"id":"48629","type":"Span"},{"id":"48635","type":"GlyphRenderer"}],"title":{"id":"48568","type":"Title"},"toolbar":{"id":"48592","type":"Toolbar"},"x_range":{"id":"48565","type":"Range1d"},"x_scale":{"id":"48573","type":"LinearScale"},"y_range":{"id":"48566","type":"Range1d"},"y_scale":{"id":"48575","type":"LinearScale"}},"id":"48569","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"Year"},"y":{"field":"mean"}},"id":"48608","type":"Line"},{"attributes":{},"id":"48573","type":"LinearScale"},{"attributes":{"source":{"id":"48620","type":"ColumnDataSource"}},"id":"48626","type":"CDSView"},{"attributes":{},"id":"48591","type":"ResetTool"},{"attributes":{},"id":"48651","type":"UnionRenderers"},{"attributes":{"dimension":"height","level":"glyph","line_alpha":{"value":0.5},"line_width":{"value":3},"location":1968,"plot":null},"id":"48629","type":"Span"},{"attributes":{},"id":"48645","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"48630","type":"ColumnDataSource"},"glyph":{"id":"48633","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48634","type":"Text"},"selection_glyph":null,"view":{"id":"48636","type":"CDSView"}},"id":"48635","type":"GlyphRenderer"},{"attributes":{},"id":"48631","type":"Selection"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],"mean":{"__ndarray__":"8eIeInpxH0A5gYPOMg8WQMJ5RhPgyhpAOhBXY1sGHEDn6ZWyDPEaQL3tWudV0BRAsZuGmHcrKkCkcW6BEDomQHLOPeEgdRdAIxiu4kfkFECJm4qB4HAmQEssLvgVtiFA0xQS+sTNFkAd/CLFEWAjQDUUZPGIdyFAJNp0Sz2UJEAXLWg8x0shQFhlAiEc5wJAVc9+ioCSIEBj7DYAcHoQQOMVSVVw8x1Al+VNAEgtIkB8DuZmzCMQQMBNQ0huPB5AUeETxjsYIEAQ7raCbMQYQKdHA+xrLSBAJc0RsC96H0D9ImJ1DJseQEGeA/oWyxxA7MUg2bNAIkAvubxD1vIYQLov5AalRRhAg1d+0fx8FEBG5KCcfNkZQL4DW3PGcxVAdU5HjM4oF0B6H29pDm4NQBYEzF9pFgFAYaQmrlwp5z9znEcm39XIPxDOdygsFNA/dTRFuDy93D8mwkWnIlzoP6/pKQzR49Q/HRx8IwDI0z+Xp+U6vNjHP4NhncWFd9M/3tjgS4VX3T/eUXQof/fdPwLuS4kvq9E/xdDY8voUvT9rr8l89VHBP38BgmhjYpU/LkO15gLsij/D3KtYYgGWP+XYGO849Kg/8XIHoy0Urj8qG2pO0z+xPzgf7ENb6a8/T/lr+6QrqT/tp0+DQem8P3qCITJzUMA/Jvb5Ju2QuD/cE6hT4CubPwtTbSpy2Yk/KomLe1gXkz/1fmq8dJN4P+v5k15zipY/fWHttqiNnz/thexw6iZ4P1P5i7PFBl4/WRZ4ZYFXZj+Rvdx2KBJgP+T0GnyOtFU/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/","dtype":"float64","shape":[84]}},"selected":{"id":"48606","type":"Selection"},"selection_policy":{"id":"48645","type":"UnionRenderers"}},"id":"48605","type":"ColumnDataSource"},{"attributes":{},"id":"48583","type":"BasicTicker"},{"attributes":{},"id":"48588","type":"PanTool"},{"attributes":{},"id":"48606","type":"Selection"},{"attributes":{},"id":"48587","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"48567","type":"HoverTool"},{"id":"48587","type":"SaveTool"},{"id":"48588","type":"PanTool"},{"id":"48589","type":"WheelZoomTool"},{"id":"48590","type":"BoxZoomTool"},{"id":"48591","type":"ResetTool"}]},"id":"48592","type":"Toolbar"}],"root_ids":["48569"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"502fcfae-1d3a-40fa-a198-9d9f54edc4be","roots":{"48569":"6dd24aaa-d419-4455-9f1f-ea0ca99b0b7f"}}];
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