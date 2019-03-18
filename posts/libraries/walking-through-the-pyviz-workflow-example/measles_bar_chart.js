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
      };var element = document.getElementById("db2fbc58-2d62-4f36-be4d-b2b9e8f15191");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db2fbc58-2d62-4f36-be4d-b2b9e8f15191' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2d5aa43a-9c71-44c0-bed5-8c8bf58aca31":{"roots":{"references":[{"attributes":{"callback":null,"data":{"State":["Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Hawaii","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Idaho","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","Montana","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota","North Dakota"],"Year":["1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970"],"measles":{"__ndarray__":"+//////niUAfhetRuJ49QHA9CtejNHhAcz0K16NOgEDtUbgehcteQGZmZmZm/oFAXo/C9ShcNED3KFyPwnU4QDMzMzMzMxRAFK5H4XoUHEBgj8L1KNw3QB2F61G4XnpAAQAAAACccUChcD0K10NtQKVwPQrX44FA1aNwPQoDdUDB9Shcj2p8QPUoXI/C3W5AYWZmZmYGTkABAAAAAAAIQHwUrkfheilApHA9CtejKkCmcD0K159zQGZmZmZmYnRAPgrXo3B1kkDD9ShcjyZ+QCCF61G4HIJAKFyPwvVigUDWo3A9CgtxQHsUrkfhekhA43oUrkdhI0DiehSuRyExQML1KFyPAjBAJ1yPwvVoeED//////297QPUoXI/COYJApnA9CtcvhUClcD0K12mJQK1H4XoUeoNAGK5H4XqUakCD61G4HuVhQBeuR+F61DZAkML1KFwPKkD8/////59JQA==","dtype":"float64","shape":[44]},"xoffsets":[["1960","Hawaii"],["1961","Hawaii"],["1962","Hawaii"],["1963","Hawaii"],["1964","Hawaii"],["1965","Hawaii"],["1966","Hawaii"],["1967","Hawaii"],["1968","Hawaii"],["1969","Hawaii"],["1970","Hawaii"],["1960","Idaho"],["1961","Idaho"],["1962","Idaho"],["1963","Idaho"],["1964","Idaho"],["1965","Idaho"],["1966","Idaho"],["1967","Idaho"],["1968","Idaho"],["1969","Idaho"],["1970","Idaho"],["1960","Montana"],["1961","Montana"],["1962","Montana"],["1963","Montana"],["1964","Montana"],["1965","Montana"],["1966","Montana"],["1967","Montana"],["1968","Montana"],["1969","Montana"],["1970","Montana"],["1960","North Dakota"],["1961","North Dakota"],["1962","North Dakota"],["1963","North Dakota"],["1964","North Dakota"],["1965","North Dakota"],["1966","North Dakota"],["1967","North Dakota"],["1968","North Dakota"],["1969","North Dakota"],["1970","North Dakota"]]},"selected":{"id":"7614","type":"Selection"},"selection_policy":{"id":"7630","type":"UnionRenderers"}},"id":"7613","type":"ColumnDataSource"},{"attributes":{},"id":"7600","type":"WheelZoomTool"},{"attributes":{},"id":"7614","type":"Selection"},{"attributes":{},"id":"7623","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"State","transform":{"id":"7612","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.2},"line_color":{"value":"black"},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"7618","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"State","transform":{"id":"7612","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"7617","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"7581","subtype":"Figure","type":"Plot"},"ticker":{"id":"7590","type":"CategoricalTicker"}},"id":"7592","type":"Grid"},{"attributes":{},"id":"7585","type":"CategoricalScale"},{"attributes":{},"id":"7622","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"7623","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"7581","subtype":"Figure","type":"Plot"},"ticker":{"id":"7594","type":"BasicTicker"}},"id":"7593","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7613","type":"ColumnDataSource"},"glyph":{"id":"7616","type":"VBar"},"hover_glyph":null,"muted_glyph":{"id":"7618","type":"VBar"},"nonselection_glyph":{"id":"7617","type":"VBar"},"selection_glyph":null,"view":{"id":"7620","type":"CDSView"}},"id":"7619","type":"GlyphRenderer"},{"attributes":{},"id":"7598","type":"SaveTool"},{"attributes":{},"id":"7587","type":"LinearScale"},{"attributes":{},"id":"7599","type":"PanTool"},{"attributes":{"plot":null,"text":"Measles Count by Year","text_font_size":{"value":"18pt"}},"id":"7580","type":"Title"},{"attributes":{"callback":null,"formatters":{"measles":"numeral"},"mode":"vline","renderers":[{"id":"7619","type":"GlyphRenderer"}],"tooltips":[["Measles","@measles{0,0}"],["Year","@Year"],["State","@State"]]},"id":"7579","type":"HoverTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"7581","subtype":"Figure","type":"Plot"},"ticker":{"id":"7594","type":"BasicTicker"}},"id":"7597","type":"Grid"},{"attributes":{},"id":"7630","type":"UnionRenderers"},{"attributes":{"factors":["Hawaii","Idaho","Montana","North Dakota"],"palette":["#1f77b4","#ff7f0e","#2ca02c","#d62728"]},"id":"7612","type":"CategoricalColorMapper"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7607","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7579","type":"HoverTool"},{"id":"7598","type":"SaveTool"},{"id":"7599","type":"PanTool"},{"id":"7600","type":"WheelZoomTool"},{"id":"7601","type":"BoxZoomTool"},{"id":"7602","type":"ResetTool"}]},"id":"7603","type":"Toolbar"},{"attributes":{"callback":null,"end":1181.3600000000001,"reset_end":1181.3600000000001,"reset_start":0,"tags":[[["measles","measles",null]]]},"id":"7578","type":"Range1d"},{"attributes":{},"id":"7594","type":"BasicTicker"},{"attributes":{},"id":"7602","type":"ResetTool"},{"attributes":{"below":[{"id":"7589","type":"CategoricalAxis"}],"left":[{"id":"7593","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1000,"renderers":[{"id":"7589","type":"CategoricalAxis"},{"id":"7592","type":"Grid"},{"id":"7593","type":"LinearAxis"},{"id":"7597","type":"Grid"},{"id":"7607","type":"BoxAnnotation"},{"id":"7619","type":"GlyphRenderer"}],"title":{"id":"7580","type":"Title"},"toolbar":{"id":"7603","type":"Toolbar"},"x_range":{"id":"7577","type":"FactorRange"},"x_scale":{"id":"7585","type":"CategoricalScale"},"y_range":{"id":"7578","type":"Range1d"},"y_scale":{"id":"7587","type":"LinearScale"}},"id":"7581","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Year, State","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"7622","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"7581","subtype":"Figure","type":"Plot"},"ticker":{"id":"7590","type":"CategoricalTicker"}},"id":"7589","type":"CategoricalAxis"},{"attributes":{},"id":"7590","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":[["1960","Hawaii"],["1960","Idaho"],["1960","Montana"],["1960","North Dakota"],["1961","Hawaii"],["1961","Idaho"],["1961","Montana"],["1961","North Dakota"],["1962","Hawaii"],["1962","Idaho"],["1962","Montana"],["1962","North Dakota"],["1963","Hawaii"],["1963","Idaho"],["1963","Montana"],["1963","North Dakota"],["1964","Hawaii"],["1964","Idaho"],["1964","Montana"],["1964","North Dakota"],["1965","Hawaii"],["1965","Idaho"],["1965","Montana"],["1965","North Dakota"],["1966","Hawaii"],["1966","Idaho"],["1966","Montana"],["1966","North Dakota"],["1967","Hawaii"],["1967","Idaho"],["1967","Montana"],["1967","North Dakota"],["1968","Hawaii"],["1968","Idaho"],["1968","Montana"],["1968","North Dakota"],["1969","Hawaii"],["1969","Idaho"],["1969","Montana"],["1969","North Dakota"],["1970","Hawaii"],["1970","Idaho"],["1970","Montana"],["1970","North Dakota"]],"tags":[[["Year","Year",null],["State","State",null]]]},"id":"7577","type":"FactorRange"},{"attributes":{"fill_color":{"field":"State","transform":{"id":"7612","type":"CategoricalColorMapper"}},"top":{"field":"measles"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"7616","type":"VBar"},{"attributes":{"overlay":{"id":"7607","type":"BoxAnnotation"}},"id":"7601","type":"BoxZoomTool"},{"attributes":{"source":{"id":"7613","type":"ColumnDataSource"}},"id":"7620","type":"CDSView"}],"root_ids":["7581"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"2d5aa43a-9c71-44c0-bed5-8c8bf58aca31","roots":{"7581":"db2fbc58-2d62-4f36-be4d-b2b9e8f15191"}}];
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