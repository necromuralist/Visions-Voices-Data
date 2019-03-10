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
      };var element = document.getElementById("6ca452e8-d318-45b0-bd37-b3ed8d32fe8b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6ca452e8-d318-45b0-bd37-b3ed8d32fe8b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4583345c-284c-4bb8-a9f2-71cb8eef404d":{"roots":{"references":[{"attributes":{},"id":"5151","type":"Selection"},{"attributes":{},"id":"5119","type":"LinearScale"},{"attributes":{"source":{"id":"5158","type":"ColumnDataSource"}},"id":"5165","type":"CDSView"},{"attributes":{"source":{"id":"5150","type":"ColumnDataSource"}},"id":"5157","type":"CDSView"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"5146","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5113","subtype":"Figure","type":"Plot"},"ticker":{"id":"5122","type":"DatetimeTicker"}},"id":"5121","type":"DatetimeAxis"},{"attributes":{"data_source":{"id":"5150","type":"ColumnDataSource"},"glyph":{"id":"5153","type":"Segment"},"hover_glyph":null,"muted_glyph":{"id":"5155","type":"Segment"},"nonselection_glyph":{"id":"5154","type":"Segment"},"selection_glyph":null,"view":{"id":"5157","type":"CDSView"}},"id":"5156","type":"GlyphRenderer"},{"attributes":{"days":[1,15]},"id":"5178","type":"DaysTicker"},{"attributes":{},"id":"5189","type":"Selection"},{"attributes":{},"id":"5185","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5113","subtype":"Figure","type":"Plot"},"ticker":{"id":"5122","type":"DatetimeTicker"}},"id":"5125","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5163","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5141","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#c44e52"},"line_color":{"value":"#c44e52"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5191","type":"Scatter"},{"attributes":{"data_source":{"id":"5158","type":"ColumnDataSource"},"glyph":{"id":"5161","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"5163","type":"Scatter"},"nonselection_glyph":{"id":"5162","type":"Scatter"},"selection_glyph":null,"view":{"id":"5165","type":"CDSView"}},"id":"5164","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":20579.8,"reset_end":20579.8,"reset_start":0.0,"tags":[[["count","Count",null]]]},"id":"5107","type":"Range1d"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"5172","type":"AdaptiveTicker"},{"id":"5173","type":"AdaptiveTicker"},{"id":"5174","type":"AdaptiveTicker"},{"id":"5175","type":"DaysTicker"},{"id":"5176","type":"DaysTicker"},{"id":"5177","type":"DaysTicker"},{"id":"5178","type":"DaysTicker"},{"id":"5179","type":"MonthsTicker"},{"id":"5180","type":"MonthsTicker"},{"id":"5181","type":"MonthsTicker"},{"id":"5182","type":"MonthsTicker"},{"id":"5183","type":"YearsTicker"}]},"id":"5122","type":"DatetimeTicker"},{"attributes":{"callback":null,"data":{"count":[4505,18709,18506,17671,17659,1206],"date":{"__ndarray__":"AACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUIAAEA2dZV1QgAAAEnwCnZC","dtype":"float64","shape":[6]},"date_dt_strings":["2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00","2017-01-01 00:00:00","2018-01-01 00:00:00"]},"selected":{"id":"5159","type":"Selection"},"selection_policy":{"id":"5217","type":"UnionRenderers"}},"id":"5158","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5113","subtype":"Figure","type":"Plot"},"ticker":{"id":"5127","type":"BasicTicker"}},"id":"5130","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#c44e52"},"line_alpha":{"value":0.2},"line_color":{"value":"#c44e52"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5193","type":"Scatter"},{"attributes":{"callback":null,"end":1514764800000.0,"reset_end":1514764800000.0,"reset_start":662688000000.0,"start":662688000000.0,"tags":[[["date","Year",null]]]},"id":"5106","type":"Range1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AACAhTa/c0IAAECYsTR0QgAAAKssqnRCAADAvacfdUIAAEA2dZV1QgAAAEnwCnZC","dtype":"float64","shape":[6]},"y0":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"AAAAAACZsUAAAAAAQEXSQAAAAACAEtJAAAAAAMBB0UAAAAAAwD7RQAAAAAAA2JJA","dtype":"float64","shape":[6]}},"selected":{"id":"5151","type":"Selection"},"selection_policy":{"id":"5185","type":"UnionRenderers"}},"id":"5150","type":"ColumnDataSource"},{"attributes":{},"id":"5127","type":"BasicTicker"},{"attributes":{},"id":"5242","type":"UnionRenderers"},{"attributes":{"axis_label":"Count","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"5148","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5113","subtype":"Figure","type":"Plot"},"ticker":{"id":"5127","type":"BasicTicker"}},"id":"5126","type":"LinearAxis"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"5172","type":"AdaptiveTicker"},{"attributes":{"months":[0,4,8]},"id":"5181","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"5182","type":"MonthsTicker"},{"attributes":{},"id":"5159","type":"Selection"},{"attributes":{"source":{"id":"5188","type":"ColumnDataSource"}},"id":"5195","type":"CDSView"},{"attributes":{"callback":null,"data":{"count":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"date_dt_strings":["1991-01-01 00:00:00","1992-01-01 00:00:00","1993-01-01 00:00:00","1994-01-01 00:00:00","1995-01-01 00:00:00","1996-01-01 00:00:00","1997-01-01 00:00:00","1998-01-01 00:00:00","1999-01-01 00:00:00","2000-01-01 00:00:00","2001-01-01 00:00:00","2002-01-01 00:00:00","2003-01-01 00:00:00","2004-01-01 00:00:00","2005-01-01 00:00:00","2006-01-01 00:00:00","2007-01-01 00:00:00","2008-01-01 00:00:00","2009-01-01 00:00:00","2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00","2017-01-01 00:00:00"]},"selected":{"id":"5189","type":"Selection"},"selection_policy":{"id":"5242","type":"UnionRenderers"}},"id":"5188","type":"ColumnDataSource"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"5173","type":"AdaptiveTicker"},{"attributes":{"label":{"value":"Outcomes"},"renderers":[{"id":"5164","type":"GlyphRenderer"}]},"id":"5187","type":"LegendItem"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"5176","type":"DaysTicker"},{"attributes":{},"id":"5148","type":"BasicTickFormatter"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"5174","type":"AdaptiveTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#c44e52"},"line_alpha":{"value":0.1},"line_color":{"value":"#c44e52"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5192","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5108","type":"HoverTool"},{"id":"5109","type":"CrosshairTool"},{"id":"5131","type":"SaveTool"},{"id":"5132","type":"PanTool"},{"id":"5133","type":"WheelZoomTool"},{"id":"5134","type":"BoxZoomTool"},{"id":"5135","type":"ResetTool"}]},"id":"5136","type":"Toolbar"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"5179","type":"MonthsTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"5175","type":"DaysTicker"},{"attributes":{"data_source":{"id":"5188","type":"ColumnDataSource"},"glyph":{"id":"5191","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"5193","type":"Scatter"},"nonselection_glyph":{"id":"5192","type":"Scatter"},"selection_glyph":null,"view":{"id":"5195","type":"CDSView"}},"id":"5194","type":"GlyphRenderer"},{"attributes":{},"id":"5217","type":"UnionRenderers"},{"attributes":{"below":[{"id":"5121","type":"DatetimeAxis"}],"left":[{"id":"5126","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"5121","type":"DatetimeAxis"},{"id":"5125","type":"Grid"},{"id":"5126","type":"LinearAxis"},{"id":"5130","type":"Grid"},{"id":"5141","type":"BoxAnnotation"},{"id":"5156","type":"GlyphRenderer"},{"id":"5186","type":"Legend"},{"id":"5164","type":"GlyphRenderer"},{"id":"5194","type":"GlyphRenderer"}],"title":{"id":"5112","type":"Title"},"toolbar":{"id":"5136","type":"Toolbar"},"x_range":{"id":"5106","type":"Range1d"},"x_scale":{"id":"5117","type":"LinearScale"},"y_range":{"id":"5107","type":"Range1d"},"y_scale":{"id":"5119","type":"LinearScale"}},"id":"5113","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Births"},"renderers":[{"id":"5194","type":"GlyphRenderer"}]},"id":"5218","type":"LegendItem"},{"attributes":{},"id":"5133","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#4c72b0"},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5161","type":"Scatter"},{"attributes":{},"id":"5131","type":"SaveTool"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"days":[1,8,15,22]},"id":"5177","type":"DaysTicker"},{"attributes":{},"id":"5132","type":"PanTool"},{"attributes":{},"id":"5183","type":"YearsTicker"},{"attributes":{},"id":"5135","type":"ResetTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"5180","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"Shelter Animal Births vs Outcomes Per Year","text_font_size":{"value":"24pt"}},"id":"5112","type":"Title"},{"attributes":{},"id":"5146","type":"DatetimeTickFormatter"},{"attributes":{"click_policy":"mute","items":[{"id":"5187","type":"LegendItem"},{"id":"5218","type":"LegendItem"}],"label_text_font_size":{"value":"24pt"},"location":"top_left","plot":{"id":"5113","subtype":"Figure","type":"Plot"}},"id":"5186","type":"Legend"},{"attributes":{"overlay":{"id":"5141","type":"BoxAnnotation"}},"id":"5134","type":"BoxZoomTool"},{"attributes":{"callback":null,"formatters":{"count":"numeral","date":"datetime"},"mode":"vline","renderers":[{"id":"5164","type":"GlyphRenderer"},{"id":"5194","type":"GlyphRenderer"}],"tooltips":[["Year","@date{%Y}"],["Count","@count{0,0}"]]},"id":"5108","type":"HoverTool"},{"attributes":{"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5153","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"date"},"y":{"field":"count"}},"id":"5162","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5155","type":"Segment"},{"attributes":{"line_color":"#aec7e8"},"id":"5109","type":"CrosshairTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5154","type":"Segment"}],"root_ids":["5113"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"4583345c-284c-4bb8-a9f2-71cb8eef404d","roots":{"5113":"6ca452e8-d318-45b0-bd37-b3ed8d32fe8b"}}];
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