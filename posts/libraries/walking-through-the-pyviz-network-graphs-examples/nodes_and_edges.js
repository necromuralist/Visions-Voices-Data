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
      };var element = document.getElementById("9a8c36e8-e182-4f51-87d0-d8c25174159f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a8c36e8-e182-4f51-87d0-d8c25174159f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c371c045-2af5-4e4c-86a5-7d97a3239987":{"roots":{"references":[{"attributes":{},"id":"21045","type":"ResetTool"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"21020","type":"Range1d"},{"attributes":{"callback":null},"id":"21046","type":"TapTool"},{"attributes":{"data_source":{"id":"21106","type":"ColumnDataSource"},"glyph":{"id":"21109","type":"MultiLine"},"hover_glyph":{"id":"21112","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"21110","type":"MultiLine"},"selection_glyph":{"id":"21111","type":"MultiLine"},"view":{"id":"21114","type":"CDSView"}},"id":"21113","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"21021","type":"HoverTool"},{"id":"21041","type":"SaveTool"},{"id":"21042","type":"PanTool"},{"id":"21043","type":"WheelZoomTool"},{"id":"21044","type":"BoxZoomTool"},{"id":"21045","type":"ResetTool"},{"id":"21046","type":"TapTool"},{"id":"21070","type":"HoverTool"},{"id":"21090","type":"SaveTool"},{"id":"21091","type":"PanTool"},{"id":"21092","type":"WheelZoomTool"},{"id":"21093","type":"BoxZoomTool"},{"id":"21094","type":"ResetTool"},{"id":"21095","type":"TapTool"}]},"id":"21139","type":"ProxyToolbar"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"21019","type":"Range1d"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21066","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21023","subtype":"Figure","type":"Plot"},"ticker":{"id":"21032","type":"BasicTicker"},"visible":false},"id":"21031","type":"LinearAxis"},{"attributes":{"line_color":{"value":"indianred"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"21112","type":"MultiLine"},{"attributes":{"callback":null,"renderers":[{"id":"21064","type":"GlyphRenderer"}],"tooltips":[["index","@{index}"]]},"id":"21021","type":"HoverTool"},{"attributes":{},"id":"21107","type":"Selection"},{"attributes":{},"id":"21094","type":"ResetTool"},{"attributes":{},"id":"21090","type":"SaveTool"},{"attributes":{},"id":"21124","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21023","subtype":"Figure","type":"Plot"},"ticker":{"id":"21032","type":"BasicTicker"}},"id":"21035","type":"Grid"},{"attributes":{"children":[{"id":"21140","type":"ToolbarBox"},{"id":"21138","type":"Column"}]},"id":"21141","type":"Column"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"black"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"21110","type":"MultiLine"},{"attributes":{"children":[{"id":"21142","type":"Div"}],"width":450},"id":"21143","type":"WidgetBox"},{"attributes":{"children":[{"id":"21023","subtype":"Figure","type":"Plot"},{"id":"21072","subtype":"Figure","type":"Plot"}]},"id":"21137","type":"Row"},{"attributes":{"overlay":{"id":"21100","type":"BoxAnnotation"}},"id":"21093","type":"BoxZoomTool"},{"attributes":{"text":"&lt;span style=\\"color:black;font-family:Arial;font-style:bold;font-weight:bold;font-size:24pt\\"&gt;Nodes and Edges&lt;/span&gt;","width":450},"id":"21142","type":"Div"},{"attributes":{},"id":"21081","type":"BasicTicker"},{"attributes":{},"id":"21032","type":"BasicTicker"},{"attributes":{"children":[{"id":"21143","type":"WidgetBox"},{"id":"21141","type":"Column"}]},"id":"21144","type":"Column"},{"attributes":{},"id":"21133","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"21071","type":"Title"},{"attributes":{},"id":"21068","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21100","type":"BoxAnnotation"},{"attributes":{},"id":"21078","type":"LinearScale"},{"attributes":{"callback":null,"data":{"xs":[{"__ndarray__":"AAAAAAAA8L8AAAAAAADwPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+o9Jebd+PpPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9Q6S8378bTPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9O6S8378bTvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+n9Jebd+Ppvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+p9Jebd+Ppvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9S6S8378bTvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9M6S8378bTPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+n9Jebd+PpPw==","dtype":"float64","shape":[2]}],"ys":[{"__ndarray__":"B1wUMyamoTwAAAAAAAAAAA==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxeWnUEI8/iPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTz/VEQTDm/uPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwAVUQTDm/uPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxfWnUEI8/iPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwHXBQzJqahPA==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxdWnUEI8/ivw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTz/VEQTDm/uvw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwAVUQTDm/uvw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxgWnUEI8/ivw==","dtype":"float64","shape":[2]}]},"selected":{"id":"21107","type":"Selection"},"selection_policy":{"id":"21133","type":"UnionRenderers"}},"id":"21106","type":"ColumnDataSource"},{"attributes":{},"id":"21042","type":"PanTool"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkA=","dtype":"float64","shape":[10]},"x":{"__ndarray__":"AAAAAAAA8D+o9Jebd+PpP1DpLzfvxtM/TukvN+/G07+n9Jebd+PpvwAAAAAAAPC/qfSXm3fj6b9S6S8378bTv0zpLzfvxtM/p/SXm3fj6T8=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAAAABeWnUEI8/iP/9URBMOb+4/AFVEEw5v7j9fWnUEI8/iPwdcFDMmpqE8XVp1BCPP4r//VEQTDm/uvwBVRBMOb+6/YFp1BCPP4r8=","dtype":"float64","shape":[10]}},"selected":{"id":"21058","type":"Selection"},"selection_policy":{"id":"21124","type":"UnionRenderers"}},"id":"21057","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21051","type":"BoxAnnotation"}},"id":"21044","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21051","type":"BoxAnnotation"},{"attributes":{},"id":"21115","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"indianred"},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"21063","type":"Scatter"},{"attributes":{"below":[{"id":"21080","type":"LinearAxis"}],"left":[{"id":"21085","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"21080","type":"LinearAxis"},{"id":"21084","type":"Grid"},{"id":"21085","type":"LinearAxis"},{"id":"21089","type":"Grid"},{"id":"21100","type":"BoxAnnotation"},{"id":"21113","type":"GlyphRenderer"}],"title":{"id":"21071","type":"Title"},"toolbar":{"id":"21096","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21019","type":"Range1d"},"x_scale":{"id":"21076","type":"LinearScale"},"y_range":{"id":"21020","type":"Range1d"},"y_scale":{"id":"21078","type":"LinearScale"}},"id":"21072","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21057","type":"ColumnDataSource"}},"id":"21065","type":"CDSView"},{"attributes":{"data_source":{"id":"21057","type":"ColumnDataSource"},"glyph":{"id":"21060","type":"Scatter"},"hover_glyph":{"id":"21063","type":"Scatter"},"muted_glyph":null,"nonselection_glyph":{"id":"21061","type":"Scatter"},"selection_glyph":{"id":"21062","type":"Scatter"},"view":{"id":"21065","type":"CDSView"}},"id":"21064","type":"GlyphRenderer"},{"attributes":{},"id":"21037","type":"BasicTicker"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21115","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21072","subtype":"Figure","type":"Plot"},"ticker":{"id":"21081","type":"BasicTicker"},"visible":false},"id":"21080","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21070","type":"HoverTool"},{"id":"21090","type":"SaveTool"},{"id":"21091","type":"PanTool"},{"id":"21092","type":"WheelZoomTool"},{"id":"21093","type":"BoxZoomTool"},{"id":"21094","type":"ResetTool"},{"id":"21095","type":"TapTool"}]},"id":"21096","type":"Toolbar"},{"attributes":{},"id":"21066","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"21137","type":"Row"}]},"id":"21138","type":"Column"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"21022","type":"Title"},{"attributes":{},"id":"21058","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21021","type":"HoverTool"},{"id":"21041","type":"SaveTool"},{"id":"21042","type":"PanTool"},{"id":"21043","type":"WheelZoomTool"},{"id":"21044","type":"BoxZoomTool"},{"id":"21045","type":"ResetTool"},{"id":"21046","type":"TapTool"}]},"id":"21047","type":"Toolbar"},{"attributes":{},"id":"21029","type":"LinearScale"},{"attributes":{},"id":"21117","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21117","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21072","subtype":"Figure","type":"Plot"},"ticker":{"id":"21086","type":"BasicTicker"},"visible":false},"id":"21085","type":"LinearAxis"},{"attributes":{},"id":"21092","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":[{"id":"21113","type":"GlyphRenderer"}],"tooltips":null},"id":"21070","type":"HoverTool"},{"attributes":{"below":[{"id":"21031","type":"LinearAxis"}],"left":[{"id":"21036","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"21031","type":"LinearAxis"},{"id":"21035","type":"Grid"},{"id":"21036","type":"LinearAxis"},{"id":"21040","type":"Grid"},{"id":"21051","type":"BoxAnnotation"},{"id":"21064","type":"GlyphRenderer"}],"title":{"id":"21022","type":"Title"},"toolbar":{"id":"21047","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21019","type":"Range1d"},"x_scale":{"id":"21027","type":"LinearScale"},"y_range":{"id":"21020","type":"Range1d"},"y_scale":{"id":"21029","type":"LinearScale"}},"id":"21023","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"21023","subtype":"Figure","type":"Plot"},"ticker":{"id":"21037","type":"BasicTicker"}},"id":"21040","type":"Grid"},{"attributes":{},"id":"21076","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"21061","type":"Scatter"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"21111","type":"MultiLine"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"21072","subtype":"Figure","type":"Plot"},"ticker":{"id":"21086","type":"BasicTicker"}},"id":"21089","type":"Grid"},{"attributes":{"callback":null},"id":"21095","type":"TapTool"},{"attributes":{"fill_color":{"value":"limegreen"},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"21062","type":"Scatter"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"21060","type":"Scatter"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"21068","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"21023","subtype":"Figure","type":"Plot"},"ticker":{"id":"21037","type":"BasicTicker"},"visible":false},"id":"21036","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21072","subtype":"Figure","type":"Plot"},"ticker":{"id":"21081","type":"BasicTicker"}},"id":"21084","type":"Grid"},{"attributes":{},"id":"21091","type":"PanTool"},{"attributes":{},"id":"21086","type":"BasicTicker"},{"attributes":{"source":{"id":"21106","type":"ColumnDataSource"}},"id":"21114","type":"CDSView"},{"attributes":{},"id":"21041","type":"SaveTool"},{"attributes":{},"id":"21027","type":"LinearScale"},{"attributes":{"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"21109","type":"MultiLine"},{"attributes":{"toolbar":{"id":"21139","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"21140","type":"ToolbarBox"},{"attributes":{},"id":"21043","type":"WheelZoomTool"}],"root_ids":["21144"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c371c045-2af5-4e4c-86a5-7d97a3239987","roots":{"21144":"9a8c36e8-e182-4f51-87d0-d8c25174159f"}}];
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