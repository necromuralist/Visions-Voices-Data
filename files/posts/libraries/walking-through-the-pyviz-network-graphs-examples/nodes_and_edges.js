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
      };var element = document.getElementById("08fa283a-f8ba-4f2f-83be-5ca28defc8a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08fa283a-f8ba-4f2f-83be-5ca28defc8a6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"37cdfbd0-7916-4ada-9c2e-9075f81ea998":{"roots":{"references":[{"attributes":{"callback":null},"id":"1501","type":"TapTool"},{"attributes":{"text":"&lt;span style=\\"color:black;font-family:Arial;font-style:bold;font-weight:bold;font-size:24pt\\"&gt;Nodes and Edges&lt;/span&gt;","width":450},"id":"1548","type":"Div"},{"attributes":{"children":[{"id":"1543","type":"Row"}]},"id":"1544","type":"Column"},{"attributes":{},"id":"1448","type":"PanTool"},{"attributes":{"callback":null,"end":1.1412678195541843,"reset_end":1.1412678195541843,"reset_start":-1.1412678195541843,"start":-1.1412678195541843,"tags":[[["y","y",null]]]},"id":"1426","type":"Range1d"},{"attributes":{"below":[{"id":"1486","type":"LinearAxis"}],"left":[{"id":"1491","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"1486","type":"LinearAxis"},{"id":"1490","type":"Grid"},{"id":"1491","type":"LinearAxis"},{"id":"1495","type":"Grid"},{"id":"1506","type":"BoxAnnotation"},{"id":"1519","type":"GlyphRenderer"}],"title":{"id":"1477","type":"Title"},"toolbar":{"id":"1502","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1425","type":"Range1d"},"x_scale":{"id":"1482","type":"LinearScale"},"y_range":{"id":"1426","type":"Range1d"},"y_scale":{"id":"1484","type":"LinearScale"}},"id":"1478","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":1.2,"reset_end":1.2,"reset_start":-1.2,"start":-1.2,"tags":[[["x","x",null]]]},"id":"1425","type":"Range1d"},{"attributes":{},"id":"1435","type":"LinearScale"},{"attributes":{},"id":"1474","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1549","type":"WidgetBox"},{"id":"1547","type":"Column"}]},"id":"1550","type":"Column"},{"attributes":{},"id":"1447","type":"SaveTool"},{"attributes":{"toolbar":{"id":"1545","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1546","type":"ToolbarBox"},{"attributes":{},"id":"1433","type":"LinearScale"},{"attributes":{"source":{"id":"1463","type":"ColumnDataSource"}},"id":"1471","type":"CDSView"},{"attributes":{},"id":"1521","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1429","subtype":"Figure","type":"Plot"},{"id":"1478","subtype":"Figure","type":"Plot"}]},"id":"1543","type":"Row"},{"attributes":{},"id":"1523","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1512","type":"ColumnDataSource"}},"id":"1520","type":"CDSView"},{"attributes":{"fill_color":{"value":"#30a2da"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1466","type":"Scatter"},{"attributes":{"data_source":{"id":"1463","type":"ColumnDataSource"},"glyph":{"id":"1466","type":"Scatter"},"hover_glyph":{"id":"1469","type":"Scatter"},"muted_glyph":null,"nonselection_glyph":{"id":"1467","type":"Scatter"},"selection_glyph":{"id":"1468","type":"Scatter"},"view":{"id":"1471","type":"CDSView"}},"id":"1470","type":"GlyphRenderer"},{"attributes":{},"id":"1531","type":"UnionRenderers"},{"attributes":{},"id":"1449","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1457","type":"BoxAnnotation"}},"id":"1450","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1506","type":"BoxAnnotation"},{"attributes":{},"id":"1443","type":"BasicTicker"},{"attributes":{},"id":"1540","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1512","type":"ColumnDataSource"},"glyph":{"id":"1515","type":"MultiLine"},"hover_glyph":{"id":"1518","type":"MultiLine"},"muted_glyph":null,"nonselection_glyph":{"id":"1516","type":"MultiLine"},"selection_glyph":{"id":"1517","type":"MultiLine"},"view":{"id":"1520","type":"CDSView"}},"id":"1519","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1429","subtype":"Figure","type":"Plot"},"ticker":{"id":"1443","type":"BasicTicker"}},"id":"1446","type":"Grid"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1429","subtype":"Figure","type":"Plot"},"ticker":{"id":"1438","type":"BasicTicker"}},"id":"1441","type":"Grid"},{"attributes":{"fill_color":{"value":"indianred"},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1469","type":"Scatter"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1474","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1429","subtype":"Figure","type":"Plot"},"ticker":{"id":"1443","type":"BasicTicker"},"visible":false},"id":"1442","type":"LinearAxis"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"1477","type":"Title"},{"attributes":{},"id":"1513","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1457","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"indianred"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"1518","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1427","type":"HoverTool"},{"id":"1447","type":"SaveTool"},{"id":"1448","type":"PanTool"},{"id":"1449","type":"WheelZoomTool"},{"id":"1450","type":"BoxZoomTool"},{"id":"1451","type":"ResetTool"},{"id":"1452","type":"TapTool"}]},"id":"1453","type":"Toolbar"},{"attributes":{"fill_color":{"value":"limegreen"},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1468","type":"Scatter"},{"attributes":{},"id":"1438","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1506","type":"BoxAnnotation"}},"id":"1499","type":"BoxZoomTool"},{"attributes":{},"id":"1451","type":"ResetTool"},{"attributes":{},"id":"1500","type":"ResetTool"},{"attributes":{},"id":"1487","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"black"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1467","type":"Scatter"},{"attributes":{"children":[{"id":"1546","type":"ToolbarBox"},{"id":"1544","type":"Column"}]},"id":"1547","type":"Column"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1472","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1429","subtype":"Figure","type":"Plot"},"ticker":{"id":"1438","type":"BasicTicker"},"visible":false},"id":"1437","type":"LinearAxis"},{"attributes":{"callback":null,"renderers":[{"id":"1470","type":"GlyphRenderer"}],"tooltips":[["index","@{index}"]]},"id":"1427","type":"HoverTool"},{"attributes":{"axis_label":"x","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1521","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1478","subtype":"Figure","type":"Plot"},"ticker":{"id":"1487","type":"BasicTicker"},"visible":false},"id":"1486","type":"LinearAxis"},{"attributes":{},"id":"1497","type":"PanTool"},{"attributes":{},"id":"1472","type":"BasicTickFormatter"},{"attributes":{},"id":"1498","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"xs":[{"__ndarray__":"AAAAAAAA8L8AAAAAAADwPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+o9Jebd+PpPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9Q6S8378bTPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9O6S8378bTvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+n9Jebd+Ppvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+p9Jebd+Ppvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9S6S8378bTvw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L9M6S8378bTPw==","dtype":"float64","shape":[2]},{"__ndarray__":"AAAAAAAA8L+n9Jebd+PpPw==","dtype":"float64","shape":[2]}],"ys":[{"__ndarray__":"B1wUMyamoTwAAAAAAAAAAA==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxeWnUEI8/iPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTz/VEQTDm/uPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwAVUQTDm/uPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxfWnUEI8/iPw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwHXBQzJqahPA==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxdWnUEI8/ivw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTz/VEQTDm/uvw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTwAVUQTDm/uvw==","dtype":"float64","shape":[2]},{"__ndarray__":"B1wUMyamoTxgWnUEI8/ivw==","dtype":"float64","shape":[2]}]},"selected":{"id":"1513","type":"Selection"},"selection_policy":{"id":"1540","type":"UnionRenderers"}},"id":"1512","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1452","type":"TapTool"},{"attributes":{"callback":null,"renderers":[{"id":"1519","type":"GlyphRenderer"}],"tooltips":null},"id":"1476","type":"HoverTool"},{"attributes":{},"id":"1496","type":"SaveTool"},{"attributes":{"line_color":{"value":"limegreen"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"1517","type":"MultiLine"},{"attributes":{},"id":"1482","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"black"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"1516","type":"MultiLine"},{"attributes":{},"id":"1464","type":"Selection"},{"attributes":{"below":[{"id":"1437","type":"LinearAxis"}],"left":[{"id":"1442","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":800,"plot_width":800,"renderers":[{"id":"1437","type":"LinearAxis"},{"id":"1441","type":"Grid"},{"id":"1442","type":"LinearAxis"},{"id":"1446","type":"Grid"},{"id":"1457","type":"BoxAnnotation"},{"id":"1470","type":"GlyphRenderer"}],"title":{"id":"1428","type":"Title"},"toolbar":{"id":"1453","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1425","type":"Range1d"},"x_scale":{"id":"1433","type":"LinearScale"},"y_range":{"id":"1426","type":"Range1d"},"y_scale":{"id":"1435","type":"LinearScale"}},"id":"1429","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"1548","type":"Div"}],"width":450},"id":"1549","type":"WidgetBox"},{"attributes":{},"id":"1484","type":"LinearScale"},{"attributes":{"callback":null,"data":{"index":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkA=","dtype":"float64","shape":[10]},"x":{"__ndarray__":"AAAAAAAA8D+o9Jebd+PpP1DpLzfvxtM/TukvN+/G07+n9Jebd+PpvwAAAAAAAPC/qfSXm3fj6b9S6S8378bTv0zpLzfvxtM/p/SXm3fj6T8=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAAAABeWnUEI8/iP/9URBMOb+4/AFVEEw5v7j9fWnUEI8/iPwdcFDMmpqE8XVp1BCPP4r//VEQTDm/uvwBVRBMOb+6/YFp1BCPP4r8=","dtype":"float64","shape":[10]}},"selected":{"id":"1464","type":"Selection"},"selection_policy":{"id":"1531","type":"UnionRenderers"}},"id":"1463","type":"ColumnDataSource"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"1523","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"1478","subtype":"Figure","type":"Plot"},"ticker":{"id":"1492","type":"BasicTicker"},"visible":false},"id":"1491","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1478","subtype":"Figure","type":"Plot"},"ticker":{"id":"1492","type":"BasicTicker"}},"id":"1495","type":"Grid"},{"attributes":{"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"1515","type":"MultiLine"},{"attributes":{},"id":"1492","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1476","type":"HoverTool"},{"id":"1496","type":"SaveTool"},{"id":"1497","type":"PanTool"},{"id":"1498","type":"WheelZoomTool"},{"id":"1499","type":"BoxZoomTool"},{"id":"1500","type":"ResetTool"},{"id":"1501","type":"TapTool"}]},"id":"1502","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1478","subtype":"Figure","type":"Plot"},"ticker":{"id":"1487","type":"BasicTicker"}},"id":"1490","type":"Grid"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"1428","type":"Title"},{"attributes":{"tools":[{"id":"1427","type":"HoverTool"},{"id":"1447","type":"SaveTool"},{"id":"1448","type":"PanTool"},{"id":"1449","type":"WheelZoomTool"},{"id":"1450","type":"BoxZoomTool"},{"id":"1451","type":"ResetTool"},{"id":"1452","type":"TapTool"},{"id":"1476","type":"HoverTool"},{"id":"1496","type":"SaveTool"},{"id":"1497","type":"PanTool"},{"id":"1498","type":"WheelZoomTool"},{"id":"1499","type":"BoxZoomTool"},{"id":"1500","type":"ResetTool"},{"id":"1501","type":"TapTool"}]},"id":"1545","type":"ProxyToolbar"}],"root_ids":["1550"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"37cdfbd0-7916-4ada-9c2e-9075f81ea998","roots":{"1550":"08fa283a-f8ba-4f2f-83be-5ca28defc8a6"}}];
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