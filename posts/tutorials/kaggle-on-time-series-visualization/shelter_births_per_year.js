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
      };var element = document.getElementById("108235f3-e4fc-4afa-b724-a53c18323b6f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '108235f3-e4fc-4afa-b724-a53c18323b6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"05905965-79f1-4a15-acaf-39585bacdbef":{"roots":{"references":[{"attributes":{},"id":"22523","type":"LinearScale"},{"attributes":{"callback":null,"end":14355.12,"reset_end":14355.12,"reset_start":-141.12,"start":-141.12,"tags":[[["y","y",null]]]},"id":"22748","type":"Range1d"},{"attributes":{},"id":"22553","type":"BasicTickFormatter"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"22574","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22517","type":"HoverTool"},{"id":"22537","type":"SaveTool"},{"id":"22538","type":"PanTool"},{"id":"22539","type":"WheelZoomTool"},{"id":"22540","type":"BoxZoomTool"},{"id":"22541","type":"ResetTool"}]},"id":"22542","type":"Toolbar"},{"attributes":{"days":[1,8,15,22]},"id":"22576","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22546","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1483974746181.818,"reset_end":1483974746181.818,"reset_start":661942053818.1818,"start":661942053818.1818,"tags":[[["x","x",null]]]},"id":"22747","type":"Range1d"},{"attributes":{"days":[1,15]},"id":"22577","type":"DaysTicker"},{"attributes":{},"id":"22537","type":"SaveTool"},{"attributes":{"callback":null,"end":1487704477090.9092,"reset_end":1487704477090.9092,"reset_start":658212322909.091,"start":658212322909.091,"tags":[[["x","x",null]]]},"id":"22515","type":"Range1d"},{"attributes":{"months":[0,4,8]},"id":"22580","type":"MonthsTicker"},{"attributes":{"callback":null,"formatters":{"Births":"numeral","birth_date":"datetime"},"mode":"vline","renderers":[{"id":"22564","type":"GlyphRenderer"}],"tooltips":[["Year","@birth_date{%Y}"],["Births","@Births{0,0}"]]},"id":"22517","type":"HoverTool"},{"attributes":{"below":[{"id":"22758","type":"DatetimeAxis"}],"left":[{"id":"22763","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":1100,"renderers":[{"id":"22758","type":"DatetimeAxis"},{"id":"22762","type":"Grid"},{"id":"22763","type":"LinearAxis"},{"id":"22767","type":"Grid"},{"id":"22776","type":"BoxAnnotation"},{"id":"22787","type":"Span"},{"id":"22794","type":"GlyphRenderer"},{"id":"23276","type":"BoxAnnotation"}],"title":{"id":"22749","type":"Title"},"toolbar":{"id":"22773","type":"Toolbar"},"x_range":{"id":"22747","type":"Range1d"},"x_scale":{"id":"22754","type":"LinearScale"},"y_range":{"id":"22748","type":"Range1d"},"y_scale":{"id":"22756","type":"LinearScale"}},"id":"22750","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22812","type":"YearsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"22579","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"22581","type":"MonthsTicker"},{"attributes":{},"id":"22539","type":"WheelZoomTool"},{"attributes":{"items":[],"plot":{"id":"22519","subtype":"Figure","type":"Plot"}},"id":"22584","type":"Legend"},{"attributes":{},"id":"22541","type":"ResetTool"},{"attributes":{"overlay":{"id":"22546","type":"BoxAnnotation"}},"id":"22540","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"22519","subtype":"Figure","type":"Plot"}]},"id":"22936","type":"Row"},{"attributes":{},"id":"22781","type":"DatetimeTickFormatter"},{"attributes":{"source":{"id":"22586","type":"ColumnDataSource"}},"id":"22592","type":"CDSView"},{"attributes":{},"id":"22789","type":"Selection"},{"attributes":{},"id":"22582","type":"YearsTicker"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#c44e52"},"line_dash":[2,4],"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"22787","type":"Span"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22590","type":"Text"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"22578","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"22586","type":"ColumnDataSource"},"glyph":{"id":"22589","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22590","type":"Text"},"selection_glyph":null,"view":{"id":"22592","type":"CDSView"}},"id":"22591","type":"GlyphRenderer"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"22572","type":"AdaptiveTicker"},{"attributes":{},"id":"22754","type":"LinearScale"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"22575","type":"DaysTicker"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"12Pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22589","type":"Text"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]}},"selected":{"id":"22789","type":"Selection"},"selection_policy":{"id":"22813","type":"UnionRenderers"}},"id":"22788","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"22519","subtype":"Figure","type":"Plot"},"ticker":{"id":"22533","type":"BasicTicker"}},"id":"22536","type":"Grid"},{"attributes":{},"id":"22610","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22562","type":"Line"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22551","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22519","subtype":"Figure","type":"Plot"},"ticker":{"id":"22528","type":"DatetimeTicker"},"visible":false},"id":"22527","type":"DatetimeAxis"},{"attributes":{},"id":"22612","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"22749","type":"Title"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22791","type":"Line"},{"attributes":{},"id":"22551","type":"DatetimeTickFormatter"},{"attributes":{},"id":"22533","type":"BasicTicker"},{"attributes":{"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22561","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22792","type":"Line"},{"attributes":{"callback":null,"end":14355.12,"reset_end":14355.12,"reset_start":-141.12,"start":-141.12,"tags":[[["y","y",null]]]},"id":"22516","type":"Range1d"},{"attributes":{},"id":"22756","type":"LinearScale"},{"attributes":{},"id":"22813","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22793","type":"Line"},{"attributes":{"axis_label":"Year","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22781","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22750","subtype":"Figure","type":"Plot"},"ticker":{"id":"22759","type":"DatetimeTicker"}},"id":"22758","type":"DatetimeAxis"},{"attributes":{},"id":"22525","type":"LinearScale"},{"attributes":{"data_source":{"id":"22788","type":"ColumnDataSource"},"glyph":{"id":"22791","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"22793","type":"Line"},"nonselection_glyph":{"id":"22792","type":"Line"},"selection_glyph":null,"view":{"id":"22795","type":"CDSView"}},"id":"22794","type":"GlyphRenderer"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"22573","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"22801","type":"AdaptiveTicker"},{"id":"22802","type":"AdaptiveTicker"},{"id":"22803","type":"AdaptiveTicker"},{"id":"22804","type":"DaysTicker"},{"id":"22805","type":"DaysTicker"},{"id":"22806","type":"DaysTicker"},{"id":"22807","type":"DaysTicker"},{"id":"22808","type":"MonthsTicker"},{"id":"22809","type":"MonthsTicker"},{"id":"22810","type":"MonthsTicker"},{"id":"22811","type":"MonthsTicker"},{"id":"22812","type":"YearsTicker"}]},"id":"22759","type":"DatetimeTicker"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"birth_date_dt_strings":["1991-01-01 00:00:00","1992-01-01 00:00:00","1993-01-01 00:00:00","1994-01-01 00:00:00","1995-01-01 00:00:00","1996-01-01 00:00:00","1997-01-01 00:00:00","1998-01-01 00:00:00","1999-01-01 00:00:00","2000-01-01 00:00:00","2001-01-01 00:00:00","2002-01-01 00:00:00","2003-01-01 00:00:00","2004-01-01 00:00:00","2005-01-01 00:00:00","2006-01-01 00:00:00","2007-01-01 00:00:00","2008-01-01 00:00:00","2009-01-01 00:00:00","2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00","2017-01-01 00:00:00"]},"selected":{"id":"22559","type":"Selection"},"selection_policy":{"id":"22610","type":"UnionRenderers"}},"id":"22558","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22788","type":"ColumnDataSource"}},"id":"22795","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"22750","subtype":"Figure","type":"Plot"},"ticker":{"id":"22759","type":"DatetimeTicker"}},"id":"22762","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"23276","type":"BoxAnnotation"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"22519","subtype":"Figure","type":"Plot"},"ticker":{"id":"22528","type":"DatetimeTicker"}},"id":"22531","type":"Grid"},{"attributes":{"below":[{"id":"22527","type":"DatetimeAxis"}],"left":[{"id":"22532","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"22527","type":"DatetimeAxis"},{"id":"22531","type":"Grid"},{"id":"22532","type":"LinearAxis"},{"id":"22536","type":"Grid"},{"id":"22546","type":"BoxAnnotation"},{"id":"22557","type":"Span"},{"id":"22584","type":"Legend"},{"id":"22564","type":"GlyphRenderer"},{"id":"22591","type":"GlyphRenderer"}],"title":{"id":"22518","type":"Title"},"toolbar":{"id":"22542","type":"Toolbar"},"x_range":{"id":"22515","type":"Range1d"},"x_scale":{"id":"22523","type":"LinearScale"},"y_range":{"id":"22516","type":"Range1d"},"y_scale":{"id":"22525","type":"LinearScale"}},"id":"22519","subtype":"Figure","type":"Plot"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"22801","type":"AdaptiveTicker"},{"attributes":{"axis_label":"y","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22783","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22750","subtype":"Figure","type":"Plot"},"ticker":{"id":"22764","type":"BasicTicker"},"visible":false},"id":"22763","type":"LinearAxis"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#c44e52"},"line_dash":[2,4],"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"22557","type":"Span"},{"attributes":{},"id":"22764","type":"BasicTicker"},{"attributes":{},"id":"22559","type":"Selection"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"22802","type":"AdaptiveTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"22750","subtype":"Figure","type":"Plot"},"ticker":{"id":"22764","type":"BasicTicker"}},"id":"22767","type":"Grid"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"22803","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"22571","type":"AdaptiveTicker"},{"id":"22572","type":"AdaptiveTicker"},{"id":"22573","type":"AdaptiveTicker"},{"id":"22574","type":"DaysTicker"},{"id":"22575","type":"DaysTicker"},{"id":"22576","type":"DaysTicker"},{"id":"22577","type":"DaysTicker"},{"id":"22578","type":"MonthsTicker"},{"id":"22579","type":"MonthsTicker"},{"id":"22580","type":"MonthsTicker"},{"id":"22581","type":"MonthsTicker"},{"id":"22582","type":"YearsTicker"}]},"id":"22528","type":"DatetimeTicker"},{"attributes":{"months":[0,6]},"id":"22811","type":"MonthsTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"22571","type":"AdaptiveTicker"},{"attributes":{},"id":"22783","type":"BasicTickFormatter"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"22804","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22768","type":"SaveTool"},{"id":"22769","type":"PanTool"},{"id":"22770","type":"WheelZoomTool"},{"id":"22771","type":"BoxZoomTool"},{"id":"22772","type":"ResetTool"},{"id":"23275","type":"RangeTool"}]},"id":"22773","type":"Toolbar"},{"attributes":{"overlay":{"id":"23276","type":"BoxAnnotation"},"x_range":{"id":"22515","type":"Range1d"},"y_range":null},"id":"23275","type":"RangeTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"22805","type":"DaysTicker"},{"attributes":{},"id":"22768","type":"SaveTool"},{"attributes":{"days":[1,8,15,22]},"id":"22806","type":"DaysTicker"},{"attributes":{"children":[{"id":"22750","subtype":"Figure","type":"Plot"}]},"id":"22937","type":"Row"},{"attributes":{},"id":"22769","type":"PanTool"},{"attributes":{"days":[1,15]},"id":"22807","type":"DaysTicker"},{"attributes":{},"id":"22770","type":"WheelZoomTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"22808","type":"MonthsTicker"},{"attributes":{"children":[{"id":"22936","type":"Row"},{"id":"22937","type":"Row"}]},"id":"22938","type":"Column"},{"attributes":{"plot":null,"text":"Births Per Year (1991- 2017)","text_font_size":{"value":"24pt"}},"id":"22518","type":"Title"},{"attributes":{"line_alpha":0.2,"line_color":"#4c72b0","line_width":3,"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"22563","type":"Line"},{"attributes":{"overlay":{"id":"22776","type":"BoxAnnotation"}},"id":"22771","type":"BoxZoomTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"22809","type":"MonthsTicker"},{"attributes":{},"id":"22587","type":"Selection"},{"attributes":{},"id":"22538","type":"PanTool"},{"attributes":{},"id":"22772","type":"ResetTool"},{"attributes":{"months":[0,4,8]},"id":"22810","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"22558","type":"ColumnDataSource"},"glyph":{"id":"22561","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"22563","type":"Line"},"nonselection_glyph":{"id":"22562","type":"Line"},"selection_glyph":null,"view":{"id":"22565","type":"CDSView"}},"id":"22564","type":"GlyphRenderer"},{"attributes":{"axis_label":"Births","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"22553","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"22519","subtype":"Figure","type":"Plot"},"ticker":{"id":"22533","type":"BasicTicker"}},"id":"22532","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"text":["Max Year: 2014"],"x":[1393632000000.0],"y":[3553.25]},"selected":{"id":"22587","type":"Selection"},"selection_policy":{"id":"22612","type":"UnionRenderers"}},"id":"22586","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22558","type":"ColumnDataSource"}},"id":"22565","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22776","type":"BoxAnnotation"}],"root_ids":["22938"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"05905965-79f1-4a15-acaf-39585bacdbef","roots":{"22938":"108235f3-e4fc-4afa-b724-a53c18323b6f"}}];
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