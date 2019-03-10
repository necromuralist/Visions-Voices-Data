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
      };var element = document.getElementById("479c8e63-eba4-439f-946b-5a087796c709");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '479c8e63-eba4-439f-946b-5a087796c709' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"05daba3d-fc64-4bb7-9f4f-8c8b692f6de7":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"122185","type":"SaveTool"},{"id":"122186","type":"PanTool"},{"id":"122187","type":"WheelZoomTool"},{"id":"122188","type":"BoxZoomTool"},{"id":"122189","type":"ResetTool"},{"id":"122733","type":"RangeTool"}]},"id":"122190","type":"Toolbar"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"122017","type":"AdaptiveTicker"},{"attributes":{},"id":"121975","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"122175","type":"DatetimeAxis"}],"left":[{"id":"122180","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":100,"plot_width":1100,"renderers":[{"id":"122175","type":"DatetimeAxis"},{"id":"122179","type":"Grid"},{"id":"122180","type":"LinearAxis"},{"id":"122184","type":"Grid"},{"id":"122193","type":"BoxAnnotation"},{"id":"122208","type":"GlyphRenderer"},{"id":"122212","type":"Span"},{"id":"122219","type":"GlyphRenderer"},{"id":"122734","type":"BoxAnnotation"}],"title":{"id":"122166","type":"Title"},"toolbar":{"id":"122190","type":"Toolbar"},"x_range":{"id":"122164","type":"Range1d"},"x_scale":{"id":"122171","type":"LinearScale"},"y_range":{"id":"122165","type":"Range1d"},"y_scale":{"id":"122173","type":"LinearScale"}},"id":"122167","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"121992","type":"Selection"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#55a868"},"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"122212","type":"Span"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"122166","type":"Title"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"122016","type":"AdaptiveTicker"},{"id":"122017","type":"AdaptiveTicker"},{"id":"122018","type":"AdaptiveTicker"},{"id":"122019","type":"DaysTicker"},{"id":"122020","type":"DaysTicker"},{"id":"122021","type":"DaysTicker"},{"id":"122022","type":"DaysTicker"},{"id":"122023","type":"MonthsTicker"},{"id":"122024","type":"MonthsTicker"},{"id":"122025","type":"MonthsTicker"},{"id":"122026","type":"MonthsTicker"},{"id":"122027","type":"YearsTicker"}]},"id":"121964","type":"DatetimeTicker"},{"attributes":{"below":[{"id":"121963","type":"DatetimeAxis"}],"left":[{"id":"121968","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1100,"renderers":[{"id":"121963","type":"DatetimeAxis"},{"id":"121967","type":"Grid"},{"id":"121968","type":"LinearAxis"},{"id":"121972","type":"Grid"},{"id":"121982","type":"BoxAnnotation"},{"id":"121997","type":"GlyphRenderer"},{"id":"122001","type":"Span"},{"id":"122008","type":"GlyphRenderer"}],"title":{"id":"121954","type":"Title"},"toolbar":{"id":"121978","type":"Toolbar"},"x_range":{"id":"121951","type":"Range1d"},"x_scale":{"id":"121959","type":"LinearScale"},"y_range":{"id":"121952","type":"Range1d"},"y_scale":{"id":"121961","type":"LinearScale"}},"id":"121955","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"122189","type":"ResetTool"},{"attributes":{},"id":"122214","type":"Selection"},{"attributes":{"source":{"id":"122002","type":"ColumnDataSource"}},"id":"122009","type":"CDSView"},{"attributes":{"data_source":{"id":"122002","type":"ColumnDataSource"},"glyph":{"id":"122005","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"122007","type":"Scatter"},"nonselection_glyph":{"id":"122006","type":"Scatter"},"selection_glyph":null,"view":{"id":"122009","type":"CDSView"}},"id":"122008","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1483228800000.0,"reset_end":1483228800000.0,"reset_start":662688000000.0,"start":662688000000.0,"tags":[[["birth_date","Date of Birth",null]]]},"id":"121951","type":"Range1d"},{"attributes":{"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"121994","type":"Segment"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]}},"selected":{"id":"122214","type":"Selection"},"selection_policy":{"id":"122241","type":"UnionRenderers"}},"id":"122213","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":15634.2,"reset_end":15634.2,"reset_start":0.0,"tags":[[["Births","Births",null]]]},"id":"121952","type":"Range1d"},{"attributes":{"callback":null,"end":14213.0,"reset_end":14213.0,"reset_start":0.0,"tags":[[["Births","Births",null]]]},"id":"122165","type":"Range1d"},{"attributes":{"overlay":{"id":"122193","type":"BoxAnnotation"}},"id":"122188","type":"BoxZoomTool"},{"attributes":{"months":[0,6]},"id":"122237","type":"MonthsTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122006","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"122193","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1483228800000.0,"reset_end":1483228800000.0,"reset_start":662688000000.0,"start":662688000000.0,"tags":[[["birth_date","Date of Birth",null]]]},"id":"122164","type":"Range1d"},{"attributes":{"fill_color":{"value":"#4c72b0"},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":5},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122216","type":"Scatter"},{"attributes":{},"id":"122030","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122007","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.1},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":5},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122217","type":"Scatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"y0":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[27]},"y1":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAIkAAAAAAAAAcQAAAAAAAACZAAAAAAAAAOUAAAAAAAEBQQAAAAAAAQFxAAAAAAADAaEAAAAAAAKBxQAAAAAAAwHhAAAAAAACweEAAAAAAAOCFQAAAAAAA0IlAAAAAAADskEAAAAAAANSVQAAAAAAA5JhAAAAAAABSoEAAAAAAAO6jQAAAAAAASK9AAAAAAACKuEAAAAAAABnGQAAAAACAwstAAAAAAICny0AAAAAAAHrEQAAAAAAAqbdA","dtype":"float64","shape":[27]}},"selected":{"id":"121992","type":"Selection"},"selection_policy":{"id":"122028","type":"UnionRenderers"}},"id":"121991","type":"ColumnDataSource"},{"attributes":{},"id":"121974","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4c72b0"},"line_alpha":{"value":0.2},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":5},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122218","type":"Scatter"},{"attributes":{"fill_color":{"value":"#4c72b0"},"line_color":{"value":"#4c72b0"},"size":{"units":"screen","value":10},"x":{"field":"birth_date"},"y":{"field":"Births"}},"id":"122005","type":"Scatter"},{"attributes":{"data_source":{"id":"122213","type":"ColumnDataSource"},"glyph":{"id":"122216","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"122218","type":"Scatter"},"nonselection_glyph":{"id":"122217","type":"Scatter"},"selection_glyph":null,"view":{"id":"122220","type":"CDSView"}},"id":"122219","type":"GlyphRenderer"},{"attributes":{},"id":"121990","type":"BasicTickFormatter"},{"attributes":{},"id":"122186","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"121995","type":"Segment"},{"attributes":{"source":{"id":"122213","type":"ColumnDataSource"}},"id":"122220","type":"CDSView"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"122227","type":"AdaptiveTicker"},{"attributes":{},"id":"122187","type":"WheelZoomTool"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"121988","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"121955","subtype":"Figure","type":"Plot"},"ticker":{"id":"121964","type":"DatetimeTicker"},"visible":false},"id":"121963","type":"DatetimeAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"122167","subtype":"Figure","type":"Plot"},"ticker":{"id":"122176","type":"DatetimeTicker"}},"id":"122179","type":"Grid"},{"attributes":{"plot":null,"text":"","text_font_size":{"value":"24pt"}},"id":"121954","type":"Title"},{"attributes":{"children":[{"id":"122375","type":"Row"},{"id":"122376","type":"Row"}]},"id":"122377","type":"Column"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"122228","type":"AdaptiveTicker"},{"attributes":{"callback":null,"data":{"Births":[1,1,1,9,7,11,25,65,113,198,282,396,395,700,826,1083,1397,1593,2089,2551,4004,6282,11314,14213,14159,10484,6057],"birth_date":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"birth_date_dt_strings":["1991-01-01 00:00:00","1992-01-01 00:00:00","1993-01-01 00:00:00","1994-01-01 00:00:00","1995-01-01 00:00:00","1996-01-01 00:00:00","1997-01-01 00:00:00","1998-01-01 00:00:00","1999-01-01 00:00:00","2000-01-01 00:00:00","2001-01-01 00:00:00","2002-01-01 00:00:00","2003-01-01 00:00:00","2004-01-01 00:00:00","2005-01-01 00:00:00","2006-01-01 00:00:00","2007-01-01 00:00:00","2008-01-01 00:00:00","2009-01-01 00:00:00","2010-01-01 00:00:00","2011-01-01 00:00:00","2012-01-01 00:00:00","2013-01-01 00:00:00","2014-01-01 00:00:00","2015-01-01 00:00:00","2016-01-01 00:00:00","2017-01-01 00:00:00"]},"selected":{"id":"122003","type":"Selection"},"selection_policy":{"id":"122030","type":"UnionRenderers"}},"id":"122002","type":"ColumnDataSource"},{"attributes":{},"id":"122027","type":"YearsTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[2,2],"line_width":{"value":0.5},"plot":null,"render_mode":"css"},"id":"122734","type":"BoxAnnotation"},{"attributes":{},"id":"122173","type":"LinearScale"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"122229","type":"AdaptiveTicker"},{"attributes":{},"id":"121959","type":"LinearScale"},{"attributes":{},"id":"122003","type":"Selection"},{"attributes":{},"id":"122028","type":"UnionRenderers"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"122230","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"122231","type":"DaysTicker"},{"attributes":{},"id":"122171","type":"LinearScale"},{"attributes":{"axis_label":"Births","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"122201","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"122167","subtype":"Figure","type":"Plot"},"ticker":{"id":"122181","type":"BasicTicker"},"visible":false},"id":"122180","type":"LinearAxis"},{"attributes":{},"id":"122185","type":"SaveTool"},{"attributes":{"overlay":{"id":"122734","type":"BoxAnnotation"},"x_range":{"id":"121951","type":"Range1d"},"y_range":null},"id":"122733","type":"RangeTool"},{"attributes":{"days":[1,8,15,22]},"id":"122232","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"122233","type":"DaysTicker"},{"attributes":{"children":[{"id":"122378","type":"Div"}],"width":450},"id":"122379","type":"WidgetBox"},{"attributes":{"days":[1,15]},"id":"122022","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"122234","type":"MonthsTicker"},{"attributes":{"axis_label":"Year of Birth","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"122199","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"122167","subtype":"Figure","type":"Plot"},"ticker":{"id":"122176","type":"DatetimeTicker"}},"id":"122175","type":"DatetimeAxis"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"122024","type":"MonthsTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"122016","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"122026","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"122235","type":"MonthsTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"121953","type":"HoverTool"},{"id":"121973","type":"SaveTool"},{"id":"121974","type":"PanTool"},{"id":"121975","type":"WheelZoomTool"},{"id":"121976","type":"BoxZoomTool"},{"id":"121977","type":"ResetTool"}]},"id":"121978","type":"Toolbar"},{"attributes":{"months":[0,4,8]},"id":"122025","type":"MonthsTicker"},{"attributes":{},"id":"121977","type":"ResetTool"},{"attributes":{"text":"&lt;span style=\\"color:black;font-family:Arial;font-style:bold;font-weight:bold;font-size:24pt\\"&gt;Shelter Animal Births Per Year (1991- 2017)&lt;/span&gt;","width":450},"id":"122378","type":"Div"},{"attributes":{"days":[1,8,15,22]},"id":"122021","type":"DaysTicker"},{"attributes":{"months":[0,4,8]},"id":"122236","type":"MonthsTicker"},{"attributes":{"children":[{"id":"122379","type":"WidgetBox"},{"id":"122377","type":"Column"}]},"id":"122380","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"121982","type":"BoxAnnotation"},{"attributes":{},"id":"121988","type":"DatetimeTickFormatter"},{"attributes":{"children":[{"id":"121955","subtype":"Figure","type":"Plot"}]},"id":"122375","type":"Row"},{"attributes":{"children":[{"id":"122167","subtype":"Figure","type":"Plot"}]},"id":"122376","type":"Row"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"122020","type":"DaysTicker"},{"attributes":{},"id":"122181","type":"BasicTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"122023","type":"MonthsTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"122227","type":"AdaptiveTicker"},{"id":"122228","type":"AdaptiveTicker"},{"id":"122229","type":"AdaptiveTicker"},{"id":"122230","type":"DaysTicker"},{"id":"122231","type":"DaysTicker"},{"id":"122232","type":"DaysTicker"},{"id":"122233","type":"DaysTicker"},{"id":"122234","type":"MonthsTicker"},{"id":"122235","type":"MonthsTicker"},{"id":"122236","type":"MonthsTicker"},{"id":"122237","type":"MonthsTicker"},{"id":"122238","type":"YearsTicker"}]},"id":"122176","type":"DatetimeTicker"},{"attributes":{},"id":"122241","type":"UnionRenderers"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"122019","type":"DaysTicker"},{"attributes":{},"id":"122239","type":"UnionRenderers"},{"attributes":{},"id":"121961","type":"LinearScale"},{"attributes":{},"id":"121973","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAADWlJY0IAAIAyXzRkQgAAgCP6H2VCAAAASfAKZkIAAIBu5vVmQgAAAJTc4GdCAAAAhXfMaEIAAICqbbdpQgAAANBjompCAACA9VmNa0IAAIDm9HhsQgAAAAzrY21CAACAMeFObkIAAABX1zlvQgAAACS5EnBCAADANjSIcEIAAIBJr/1wQgAAQFwqc3FCAADA1PfocUIAAIDncl5yQgAAQPrt03JCAAAADWlJc0IAAICFNr9zQgAAQJixNHRCAAAAqyyqdEIAAMC9px91QgAAQDZ1lXVC","dtype":"float64","shape":[27]},"y0":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[27]},"y1":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAIkAAAAAAAAAcQAAAAAAAACZAAAAAAAAAOUAAAAAAAEBQQAAAAAAAQFxAAAAAAADAaEAAAAAAAKBxQAAAAAAAwHhAAAAAAACweEAAAAAAAOCFQAAAAAAA0IlAAAAAAADskEAAAAAAANSVQAAAAAAA5JhAAAAAAABSoEAAAAAAAO6jQAAAAAAASK9AAAAAAACKuEAAAAAAABnGQAAAAACAwstAAAAAAICny0AAAAAAAHrEQAAAAAAAqbdA","dtype":"float64","shape":[27]}},"selected":{"id":"122203","type":"Selection"},"selection_policy":{"id":"122239","type":"UnionRenderers"}},"id":"122202","type":"ColumnDataSource"},{"attributes":{},"id":"122203","type":"Selection"},{"attributes":{"overlay":{"id":"121982","type":"BoxAnnotation"}},"id":"121976","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"121955","subtype":"Figure","type":"Plot"},"ticker":{"id":"121964","type":"DatetimeTicker"}},"id":"121967","type":"Grid"},{"attributes":{},"id":"122199","type":"DatetimeTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"121955","subtype":"Figure","type":"Plot"},"ticker":{"id":"121969","type":"BasicTicker"}},"id":"121972","type":"Grid"},{"attributes":{},"id":"122238","type":"YearsTicker"},{"attributes":{"dimension":"height","level":"glyph","line_color":{"value":"#55a868"},"line_width":{"value":3},"location":1388534400000,"plot":null},"id":"122001","type":"Span"},{"attributes":{"axis_label":"Births","axis_label_text_font_size":{"value":"24pt"},"bounds":"auto","formatter":{"id":"121990","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"121955","subtype":"Figure","type":"Plot"},"ticker":{"id":"121969","type":"BasicTicker"}},"id":"121968","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"122205","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"122206","type":"Segment"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"122207","type":"Segment"},{"attributes":{"data_source":{"id":"121991","type":"ColumnDataSource"},"glyph":{"id":"121994","type":"Segment"},"hover_glyph":null,"muted_glyph":{"id":"121996","type":"Segment"},"nonselection_glyph":{"id":"121995","type":"Segment"},"selection_glyph":null,"view":{"id":"121998","type":"CDSView"}},"id":"121997","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"122167","subtype":"Figure","type":"Plot"},"ticker":{"id":"122181","type":"BasicTicker"}},"id":"122184","type":"Grid"},{"attributes":{},"id":"121969","type":"BasicTicker"},{"attributes":{"source":{"id":"121991","type":"ColumnDataSource"}},"id":"121998","type":"CDSView"},{"attributes":{"data_source":{"id":"122202","type":"ColumnDataSource"},"glyph":{"id":"122205","type":"Segment"},"hover_glyph":null,"muted_glyph":{"id":"122207","type":"Segment"},"nonselection_glyph":{"id":"122206","type":"Segment"},"selection_glyph":null,"view":{"id":"122209","type":"CDSView"}},"id":"122208","type":"GlyphRenderer"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"122018","type":"AdaptiveTicker"},{"attributes":{"callback":null,"formatters":{"Births":"numeral","birth_date":"datetime"},"mode":"vline","renderers":[{"id":"122008","type":"GlyphRenderer"}],"tooltips":[["Year","@birth_date{%Y}"],["Births","@Births{0,0}"]]},"id":"121953","type":"HoverTool"},{"attributes":{"source":{"id":"122202","type":"ColumnDataSource"}},"id":"122209","type":"CDSView"},{"attributes":{},"id":"122201","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#c44e52"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"121996","type":"Segment"}],"root_ids":["122380"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"05daba3d-fc64-4bb7-9f4f-8c8b692f6de7","roots":{"122380":"479c8e63-eba4-439f-946b-5a087796c709"}}];
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