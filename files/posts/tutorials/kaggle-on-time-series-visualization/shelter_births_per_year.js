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
      };var element = document.getElementById("1240d42b-9227-4537-83d7-f0c4934c820b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1240d42b-9227-4537-83d7-f0c4934c820b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1929fd89-3257-4b95-bf8a-c5b7fd6d1445":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"116640","subtype":"Figure","type":"Plot"},"ticker":{"id":"116654","type":"BasicTicker"}},"id":"116657","type":"Grid"},{"attributes":{},"id":"116662","type":"ResetTool"},{"attributes":{"days":[1,8,15,22]},"id":"116698","type":"DaysTicker"},{"attributes":{},"id":"116644","type":"LinearScale"},{"attributes":{"callback":null,"end":14213.0,"reset_end":14213.0,"reset_start":1.0,"start":1.0,"tags":[[["y","y",null]]]},"id":"116848","type":"Range1d"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"116700","type":"MonthsTicker"},{"attributes":{},"id":"116646","type":"LinearScale"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116891","type":"Line"},{"attributes":{},"id":"116725","type":"UnionRenderers"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"116673","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"116640","subtype":"Figure","type":"Plot"},"ticker":{"id":"116649","type":"DatetimeTicker"},"visible":false},"id":"116648","type":"DatetimeAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116892","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116684","type":"Line"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"116693","type":"AdaptiveTicker"},{"id":"116694","type":"AdaptiveTicker"},{"id":"116695","type":"AdaptiveTicker"},{"id":"116696","type":"DaysTicker"},{"id":"116697","type":"DaysTicker"},{"id":"116698","type":"DaysTicker"},{"id":"116699","type":"DaysTicker"},{"id":"116700","type":"MonthsTicker"},{"id":"116701","type":"MonthsTicker"},{"id":"116702","type":"MonthsTicker"},{"id":"116703","type":"MonthsTicker"},{"id":"116704","type":"YearsTicker"}]},"id":"116649","type":"DatetimeTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116893","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"116640","subtype":"Figure","type":"Plot"},"ticker":{"id":"116649","type":"DatetimeTicker"}},"id":"116652","type":"Grid"},{"attributes":{"data_source":{"id":"116888","type":"ColumnDataSource"},"glyph":{"id":"116891","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"116893","type":"Line"},"nonselection_glyph":{"id":"116892","type":"Line"},"selection_glyph":null,"view":{"id":"116895","type":"CDSView"}},"id":"116894","type":"GlyphRenderer"},{"attributes":{},"id":"116660","type":"WheelZoomTool"},{"attributes":{"axis_label":"Births","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"116675","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"116640","subtype":"Figure","type":"Plot"},"ticker":{"id":"116654","type":"BasicTicker"}},"id":"116653","type":"LinearAxis"},{"attributes":{"source":{"id":"116888","type":"ColumnDataSource"}},"id":"116895","type":"CDSView"},{"attributes":{"data_source":{"id":"116679","type":"ColumnDataSource"},"glyph":{"id":"116682","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"116684","type":"Line"},"nonselection_glyph":{"id":"116683","type":"Line"},"selection_glyph":null,"view":{"id":"116686","type":"CDSView"}},"id":"116685","type":"GlyphRenderer"},{"attributes":{},"id":"116654","type":"BasicTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"116693","type":"AdaptiveTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"116902","type":"AdaptiveTicker"},{"attributes":{},"id":"116658","type":"SaveTool"},{"attributes":{"overlay":{"id":"116667","type":"BoxAnnotation"}},"id":"116661","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"116638","type":"HoverTool"},{"id":"116658","type":"SaveTool"},{"id":"116659","type":"PanTool"},{"id":"116660","type":"WheelZoomTool"},{"id":"116661","type":"BoxZoomTool"},{"id":"116662","type":"ResetTool"}]},"id":"116663","type":"Toolbar"},{"attributes":{},"id":"116864","type":"BasicTicker"},{"attributes":{"items":[],"plot":{"id":"116640","subtype":"Figure","type":"Plot"}},"id":"116705","type":"Legend"},{"attributes":{},"id":"116659","type":"PanTool"},{"attributes":{"source":{"id":"116679","type":"ColumnDataSource"}},"id":"116686","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"116850","subtype":"Figure","type":"Plot"},"ticker":{"id":"116864","type":"BasicTicker"}},"id":"116867","type":"Grid"},{"attributes":{"callback":null,"end":1483228800000.0,"reset_end":1483228800000.0,"reset_start":662688000000.0,"start":662688000000.0,"tags":[[["x","x",null]]]},"id":"116847","type":"Range1d"},{"attributes":{"callback":null,"end":14213.0,"reset_end":14213.0,"reset_start":1.0,"start":1.0,"tags":[[["y","y",null]]]},"id":"116637","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"117360","type":"BoxAnnotation"},{"attributes":{},"id":"116675","type":"BasicTickFormatter"},{"attributes":{},"id":"116884","type":"BasicTickFormatter"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"116694","type":"AdaptiveTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116683","type":"Line"},{"attributes":{"callback":null,"end":1483228800000.0,"reset_end":1483228800000.0,"reset_start":662688000000.0,"start":662688000000.0,"tags":[[["x","x",null]]]},"id":"116636","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"116868","type":"SaveTool"},{"id":"116869","type":"PanTool"},{"id":"116870","type":"WheelZoomTool"},{"id":"116871","type":"BoxZoomTool"},{"id":"116872","type":"ResetTool"},{"id":"117359","type":"RangeTool"}]},"id":"116873","type":"Toolbar"},{"attributes":{"children":[{"id":"116850","subtype":"Figure","type":"Plot"}]},"id":"117037","type":"Row"},{"attributes":{},"id":"116868","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"birth_date_dt_strings":["1991-01-01 00:00:00","1992-01-01 00:00:00","1993-01-01 00:00:00","1994-01-01 00:00:00","1995-01-01 00:00:00","1996-01-01 00:00:00","1997-01-01 00:00:00","1998-01-01 00:00:00","1999-01-01 00:00:00","2000-01-01 00:00:00","2001-01-01 00:00:00","2002-01-01 00:00:00","2003-01-01 00:00:00","2004-01-01 00:00:00","2005-01-01 00:00:00","2006-01-01 00:00:00","2007-01-01 00:00:00","2008-01-01 00:00:00","2009-01-01 00:00:00","2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00","2017-01-01 00:00:00"]},"selected":{"id":"116680","type":"Selection"},"selection_policy":{"id":"116725","type":"UnionRenderers"}},"id":"116679","type":"ColumnDataSource"},{"attributes":{},"id":"116869","type":"PanTool"},{"attributes":{},"id":"116870","type":"WheelZoomTool"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"116682","type":"Line"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"116696","type":"DaysTicker"},{"attributes":{"overlay":{"id":"116876","type":"BoxAnnotation"}},"id":"116871","type":"BoxZoomTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"116697","type":"DaysTicker"},{"attributes":{},"id":"116872","type":"ResetTool"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#c44e52"},"line_dash":[2,4],"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"116678","type":"Span"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"116850","subtype":"Figure","type":"Plot"},"ticker":{"id":"116859","type":"DatetimeTicker"}},"id":"116862","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"116876","type":"BoxAnnotation"},{"attributes":{},"id":"116913","type":"YearsTicker"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"116884","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"116850","subtype":"Figure","type":"Plot"},"ticker":{"id":"116864","type":"BasicTicker"},"visible":false},"id":"116863","type":"LinearAxis"},{"attributes":{},"id":"116914","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"116667","type":"BoxAnnotation"},{"attributes":{"months":[0,4,8]},"id":"116911","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"116912","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"Births Per Year (1991- 2017)","text_font_size":{"value":"24pt"}},"id":"116639","type":"Title"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"116882","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"116850","subtype":"Figure","type":"Plot"},"ticker":{"id":"116859","type":"DatetimeTicker"}},"id":"116858","type":"DatetimeAxis"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"116902","type":"AdaptiveTicker"},{"id":"116903","type":"AdaptiveTicker"},{"id":"116904","type":"AdaptiveTicker"},{"id":"116905","type":"DaysTicker"},{"id":"116906","type":"DaysTicker"},{"id":"116907","type":"DaysTicker"},{"id":"116908","type":"DaysTicker"},{"id":"116909","type":"MonthsTicker"},{"id":"116910","type":"MonthsTicker"},{"id":"116911","type":"MonthsTicker"},{"id":"116912","type":"MonthsTicker"},{"id":"116913","type":"YearsTicker"}]},"id":"116859","type":"DatetimeTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"116909","type":"MonthsTicker"},{"attributes":{},"id":"116854","type":"LinearScale"},{"attributes":{},"id":"116680","type":"Selection"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"116910","type":"MonthsTicker"},{"attributes":{"children":[{"id":"117036","type":"Row"},{"id":"117037","type":"Row"}]},"id":"117038","type":"Column"},{"attributes":{"months":[0,6]},"id":"116703","type":"MonthsTicker"},{"attributes":{"days":[1,8,15,22]},"id":"116907","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"116908","type":"DaysTicker"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"116849","type":"Title"},{"attributes":{},"id":"116856","type":"LinearScale"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"116905","type":"DaysTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"116701","type":"MonthsTicker"},{"attributes":{},"id":"116882","type":"DatetimeTickFormatter"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"116906","type":"DaysTicker"},{"attributes":{},"id":"116704","type":"YearsTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"116903","type":"AdaptiveTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"116904","type":"AdaptiveTicker"},{"attributes":{},"id":"116889","type":"Selection"},{"attributes":{"below":[{"id":"116858","type":"DatetimeAxis"}],"left":[{"id":"116863","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":1100,"renderers":[{"id":"116858","type":"DatetimeAxis"},{"id":"116862","type":"Grid"},{"id":"116863","type":"LinearAxis"},{"id":"116867","type":"Grid"},{"id":"116876","type":"BoxAnnotation"},{"id":"116887","type":"Span"},{"id":"116894","type":"GlyphRenderer"},{"id":"117360","type":"BoxAnnotation"}],"title":{"id":"116849","type":"Title"},"toolbar":{"id":"116873","type":"Toolbar"},"x_range":{"id":"116847","type":"Range1d"},"x_scale":{"id":"116854","type":"LinearScale"},"y_range":{"id":"116848","type":"Range1d"},"y_scale":{"id":"116856","type":"LinearScale"}},"id":"116850","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#c44e52"},"line_dash":[2,4],"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"116887","type":"Span"},{"attributes":{},"id":"116673","type":"DatetimeTickFormatter"},{"attributes":{"children":[{"id":"116640","subtype":"Figure","type":"Plot"}]},"id":"117036","type":"Row"},{"attributes":{"callback":null,"formatters":{"Births":"numeral","birth_date":"datetime"},"mode":"vline","renderers":[{"id":"116685","type":"GlyphRenderer"}],"tooltips":[["Year","@birth_date{%Y}"],["Births","@Births{0,0}"]]},"id":"116638","type":"HoverTool"},{"attributes":{"overlay":{"id":"117360","type":"BoxAnnotation"},"x_range":{"id":"116636","type":"Range1d"},"y_range":null},"id":"117359","type":"RangeTool"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]}},"selected":{"id":"116889","type":"Selection"},"selection_policy":{"id":"116914","type":"UnionRenderers"}},"id":"116888","type":"ColumnDataSource"},{"attributes":{"months":[0,4,8]},"id":"116702","type":"MonthsTicker"},{"attributes":{"below":[{"id":"116648","type":"DatetimeAxis"}],"left":[{"id":"116653","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"116648","type":"DatetimeAxis"},{"id":"116652","type":"Grid"},{"id":"116653","type":"LinearAxis"},{"id":"116657","type":"Grid"},{"id":"116667","type":"BoxAnnotation"},{"id":"116678","type":"Span"},{"id":"116705","type":"Legend"},{"id":"116685","type":"GlyphRenderer"}],"title":{"id":"116639","type":"Title"},"toolbar":{"id":"116663","type":"Toolbar"},"x_range":{"id":"116636","type":"Range1d"},"x_scale":{"id":"116644","type":"LinearScale"},"y_range":{"id":"116637","type":"Range1d"},"y_scale":{"id":"116646","type":"LinearScale"}},"id":"116640","subtype":"Figure","type":"Plot"},{"attributes":{"days":[1,15]},"id":"116699","type":"DaysTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"116695","type":"AdaptiveTicker"}],"root_ids":["117038"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"1929fd89-3257-4b95-bf8a-c5b7fd6d1445","roots":{"117038":"1240d42b-9227-4537-83d7-f0c4934c820b"}}];
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