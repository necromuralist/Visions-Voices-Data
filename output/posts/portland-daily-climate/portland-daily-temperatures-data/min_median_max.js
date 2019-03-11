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
      };var element = document.getElementById("7c709de1-0f61-4c48-a13b-23db78f0d775");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7c709de1-0f61-4c48-a13b-23db78f0d775' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"12840e4b-6bac-42ad-b5a9-66856b1170c5":{"roots":{"references":[{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"4221","type":"AdaptiveTicker"},{"attributes":{"overlay":{"id":"4196","type":"BoxAnnotation"}},"id":"4190","type":"BoxZoomTool"},{"attributes":{"source":{"id":"4233","type":"ColumnDataSource"}},"id":"4240","type":"CDSView"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"4226","type":"MonthsTicker"},{"attributes":{"days":[1,8,15,22]},"id":"4224","type":"DaysTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4210","type":"Line"},{"attributes":{"line_color":"#2ca02c","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4265","type":"Line"},{"attributes":{},"id":"4173","type":"LinearScale"},{"attributes":{"label":{"value":"Maximum"},"renderers":[{"id":"4211","type":"GlyphRenderer"}]},"id":"4232","type":"LegendItem"},{"attributes":{"data_source":{"id":"4262","type":"ColumnDataSource"},"glyph":{"id":"4265","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"4267","type":"Line"},"nonselection_glyph":{"id":"4266","type":"Line"},"selection_glyph":null,"view":{"id":"4269","type":"CDSView"}},"id":"4268","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"Variable":["Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum","Minimum"],"date":{"__ndarray__":"AACAmwijasIAAAB2ErhpwgAAgFAczWjCAAAAKybiZ8IAAAA6i/ZmwgAAgBSVC2bCAAAA754gZcIAAIDJqDVkwgAAgNgNSmPCAAAAsxdfYsIAAICNIXRhwgAAAGgriWDCAAAA7iA7X8IAAACjNGVdwgAAAFhIj1vCAAAADVy5WcIAAAArJuJXwgAAAOA5DFbCAAAAlU02VMIAAABKYWBSwgAAAGgriVDCAAAAOn5mTcIAAACkpbpJwgAAAA7NDkbCAAAASmFgQsIAAABoEWk9wgAAADxgETbCAAAAIF5zLcIAAAAgXnMdwgAAAABwmZTBAAAAQCtKHUIAAAD4d1QtQgAAAIQTBzZCAAAAsMRePUIAAADuOltCQgAAAIQTB0ZCAAAASH+1SUIAAADeV2FNQgAAADqYhlBCAAAAhYRcUkIAAABnujNUQgAAALKmCVZCAAAA/ZLfV0IAAABIf7VZQgAAACq1jFtCAAAAdaFiXUIAAADAjThfQgAAgAU9h2BCAACA9tdyYUIAAAAczl1iQgAAgEHESGNCAAAAZ7ozZEIAAABYVR9lQgAAgH1LCmZCAAAAo0H1ZkIAAIDIN+BnQgAAgLnSy2hCAAAA38i2aUIAAIAEv6FqQgAAACq1jGtCAAAAG1B4bEIAAIBARmNtQgAAAGY8Tm5CAACAizI5b0IAAEC+ZhJwQgAAANHhh3BCAADA41z9cEIAAID213JxQgAAAG+l6HFCAADAgSBeckIAAICUm9NyQgAAQKcWSXNCAADAH+S+c0IAAIAyXzR0QgAAQEXaqXRCAAAAWFUfdUIAAIDQIpV1QgAAQOOdCnZCAAAA9hiAdkI=","dtype":"float64","shape":[79]},"date_dt_strings":["1940-12-31 00:00:00","1941-12-31 00:00:00","1942-12-31 00:00:00","1943-12-31 00:00:00","1944-12-31 00:00:00","1945-12-31 00:00:00","1946-12-31 00:00:00","1947-12-31 00:00:00","1948-12-31 00:00:00","1949-12-31 00:00:00","1950-12-31 00:00:00","1951-12-31 00:00:00","1952-12-31 00:00:00","1953-12-31 00:00:00","1954-12-31 00:00:00","1955-12-31 00:00:00","1956-12-31 00:00:00","1957-12-31 00:00:00","1958-12-31 00:00:00","1959-12-31 00:00:00","1960-12-31 00:00:00","1961-12-31 00:00:00","1962-12-31 00:00:00","1963-12-31 00:00:00","1964-12-31 00:00:00","1965-12-31 00:00:00","1966-12-31 00:00:00","1967-12-31 00:00:00","1968-12-31 00:00:00","1969-12-31 00:00:00","1970-12-31 00:00:00","1971-12-31 00:00:00","1972-12-31 00:00:00","1973-12-31 00:00:00","1974-12-31 00:00:00","1975-12-31 00:00:00","1976-12-31 00:00:00","1977-12-31 00:00:00","1978-12-31 00:00:00","1979-12-31 00:00:00","1980-12-31 00:00:00","1981-12-31 00:00:00","1982-12-31 00:00:00","1983-12-31 00:00:00","1984-12-31 00:00:00","1985-12-31 00:00:00","1986-12-31 00:00:00","1987-12-31 00:00:00","1988-12-31 00:00:00","1989-12-31 00:00:00","1990-12-31 00:00:00","1991-12-31 00:00:00","1992-12-31 00:00:00","1993-12-31 00:00:00","1994-12-31 00:00:00","1995-12-31 00:00:00","1996-12-31 00:00:00","1997-12-31 00:00:00","1998-12-31 00:00:00","1999-12-31 00:00:00","2000-12-31 00:00:00","2001-12-31 00:00:00","2002-12-31 00:00:00","2003-12-31 00:00:00","2004-12-31 00:00:00","2005-12-31 00:00:00","2006-12-31 00:00:00","2007-12-31 00:00:00","2008-12-31 00:00:00","2009-12-31 00:00:00","2010-12-31 00:00:00","2011-12-31 00:00:00","2012-12-31 00:00:00","2013-12-31 00:00:00","2014-12-31 00:00:00","2015-12-31 00:00:00","2016-12-31 00:00:00","2017-12-31 00:00:00","2018-12-31 00:00:00"],"value":{"__ndarray__":"AAAAAACAQ0AAAAAAAIBBQAAAAAAAAD5AAAAAAAAAOEAAAAAAAIBCQAAAAAAAAEFAAAAAAACAQkAAAAAAAAA/QAAAAAAAgEBAAAAAAAAAN0AAAAAAAAAwQAAAAAAAADpAAAAAAAAAOkAAAAAAAABFQAAAAAAAADhAAAAAAAAAOUAAAAAAAAA7QAAAAAAAADZAAAAAAAAAREAAAAAAAAA6QAAAAAAAAD1AAAAAAACAQEAAAAAAAAA9QAAAAAAAADVAAAAAAAAAMUAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQEAAAAAAAAAsQAAAAAAAADZAAAAAAAAAPkAAAAAAAIBAQAAAAAAAADhAAAAAAAAAPkAAAAAAAAA6QAAAAAAAAEJAAAAAAAAAQkAAAAAAAAA+QAAAAAAAADNAAAAAAAAANUAAAAAAAAA7QAAAAAAAgEJAAAAAAAAAPUAAAAAAAAA0QAAAAAAAAD1AAAAAAAAAOEAAAAAAAIBCQAAAAAAAAEJAAAAAAAAAQUAAAAAAAAAuQAAAAAAAADNAAAAAAAAAQUAAAAAAAABBQAAAAAAAAD9AAAAAAAAAQkAAAAAAAAA/QAAAAAAAADdAAAAAAACAQkAAAAAAAAA4QAAAAAAAgERAAAAAAACAQEAAAAAAAABEQAAAAAAAAENAAAAAAACAQUAAAAAAAAA4QAAAAAAAAEBAAAAAAACAQUAAAAAAAAA+QAAAAAAAADhAAAAAAAAAPkAAAAAAAAA+QAAAAAAAgEBAAAAAAAAAQkAAAAAAAAA8QAAAAAAAADdAAAAAAACAQkAAAAAAAABAQAAAAAAAADxAAAAAAAAAQUA=","dtype":"float64","shape":[79]}},"selected":{"id":"4263","type":"Selection"},"selection_policy":{"id":"4315","type":"UnionRenderers"}},"id":"4262","type":"ColumnDataSource"},{"attributes":{},"id":"4188","type":"PanTool"},{"attributes":{"data_source":{"id":"4233","type":"ColumnDataSource"},"glyph":{"id":"4236","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"4238","type":"Line"},"nonselection_glyph":{"id":"4237","type":"Line"},"selection_glyph":null,"view":{"id":"4240","type":"CDSView"}},"id":"4239","type":"GlyphRenderer"},{"attributes":{"axis_label":"","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"4203","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"4169","subtype":"Figure","type":"Plot"},"ticker":{"id":"4183","type":"BasicTicker"}},"id":"4182","type":"LinearAxis"},{"attributes":{"click_policy":"mute","items":[{"id":"4232","type":"LegendItem"},{"id":"4261","type":"LegendItem"},{"id":"4292","type":"LegendItem"}],"label_text_font_size":{"value":"18pt"},"location":[0,0],"plot":{"id":"4169","subtype":"Figure","type":"Plot"}},"id":"4231","type":"Legend"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"4222","type":"DaysTicker"},{"attributes":{"callback":null,"data":{"Variable":["Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum","Maximum"],"date":{"__ndarray__":"AACAmwijasIAAAB2ErhpwgAAgFAczWjCAAAAKybiZ8IAAAA6i/ZmwgAAgBSVC2bCAAAA754gZcIAAIDJqDVkwgAAgNgNSmPCAAAAsxdfYsIAAICNIXRhwgAAAGgriWDCAAAA7iA7X8IAAACjNGVdwgAAAFhIj1vCAAAADVy5WcIAAAArJuJXwgAAAOA5DFbCAAAAlU02VMIAAABKYWBSwgAAAGgriVDCAAAAOn5mTcIAAACkpbpJwgAAAA7NDkbCAAAASmFgQsIAAABoEWk9wgAAADxgETbCAAAAIF5zLcIAAAAgXnMdwgAAAABwmZTBAAAAQCtKHUIAAAD4d1QtQgAAAIQTBzZCAAAAsMRePUIAAADuOltCQgAAAIQTB0ZCAAAASH+1SUIAAADeV2FNQgAAADqYhlBCAAAAhYRcUkIAAABnujNUQgAAALKmCVZCAAAA/ZLfV0IAAABIf7VZQgAAACq1jFtCAAAAdaFiXUIAAADAjThfQgAAgAU9h2BCAACA9tdyYUIAAAAczl1iQgAAgEHESGNCAAAAZ7ozZEIAAABYVR9lQgAAgH1LCmZCAAAAo0H1ZkIAAIDIN+BnQgAAgLnSy2hCAAAA38i2aUIAAIAEv6FqQgAAACq1jGtCAAAAG1B4bEIAAIBARmNtQgAAAGY8Tm5CAACAizI5b0IAAEC+ZhJwQgAAANHhh3BCAADA41z9cEIAAID213JxQgAAAG+l6HFCAADAgSBeckIAAICUm9NyQgAAQKcWSXNCAADAH+S+c0IAAIAyXzR0QgAAQEXaqXRCAAAAWFUfdUIAAIDQIpV1QgAAQOOdCnZCAAAA9hiAdkI=","dtype":"float64","shape":[79]},"date_dt_strings":["1940-12-31 00:00:00","1941-12-31 00:00:00","1942-12-31 00:00:00","1943-12-31 00:00:00","1944-12-31 00:00:00","1945-12-31 00:00:00","1946-12-31 00:00:00","1947-12-31 00:00:00","1948-12-31 00:00:00","1949-12-31 00:00:00","1950-12-31 00:00:00","1951-12-31 00:00:00","1952-12-31 00:00:00","1953-12-31 00:00:00","1954-12-31 00:00:00","1955-12-31 00:00:00","1956-12-31 00:00:00","1957-12-31 00:00:00","1958-12-31 00:00:00","1959-12-31 00:00:00","1960-12-31 00:00:00","1961-12-31 00:00:00","1962-12-31 00:00:00","1963-12-31 00:00:00","1964-12-31 00:00:00","1965-12-31 00:00:00","1966-12-31 00:00:00","1967-12-31 00:00:00","1968-12-31 00:00:00","1969-12-31 00:00:00","1970-12-31 00:00:00","1971-12-31 00:00:00","1972-12-31 00:00:00","1973-12-31 00:00:00","1974-12-31 00:00:00","1975-12-31 00:00:00","1976-12-31 00:00:00","1977-12-31 00:00:00","1978-12-31 00:00:00","1979-12-31 00:00:00","1980-12-31 00:00:00","1981-12-31 00:00:00","1982-12-31 00:00:00","1983-12-31 00:00:00","1984-12-31 00:00:00","1985-12-31 00:00:00","1986-12-31 00:00:00","1987-12-31 00:00:00","1988-12-31 00:00:00","1989-12-31 00:00:00","1990-12-31 00:00:00","1991-12-31 00:00:00","1992-12-31 00:00:00","1993-12-31 00:00:00","1994-12-31 00:00:00","1995-12-31 00:00:00","1996-12-31 00:00:00","1997-12-31 00:00:00","1998-12-31 00:00:00","1999-12-31 00:00:00","2000-12-31 00:00:00","2001-12-31 00:00:00","2002-12-31 00:00:00","2003-12-31 00:00:00","2004-12-31 00:00:00","2005-12-31 00:00:00","2006-12-31 00:00:00","2007-12-31 00:00:00","2008-12-31 00:00:00","2009-12-31 00:00:00","2010-12-31 00:00:00","2011-12-31 00:00:00","2012-12-31 00:00:00","2013-12-31 00:00:00","2014-12-31 00:00:00","2015-12-31 00:00:00","2016-12-31 00:00:00","2017-12-31 00:00:00","2018-12-31 00:00:00"],"value":{"__ndarray__":"AAAAAACAU0AAAAAAAMBZQAAAAAAAQFpAAAAAAABAV0AAAAAAAABaQAAAAAAAAFlAAAAAAACAWUAAAAAAAABXQAAAAAAAgFdAAAAAAABAV0AAAAAAAMBXQAAAAAAAQFhAAAAAAADAWEAAAAAAAMBXQAAAAAAAgFVAAAAAAACAWEAAAAAAAIBZQAAAAAAAAFdAAAAAAACAWUAAAAAAAIBYQAAAAAAAAFlAAAAAAAAAWkAAAAAAAEBXQAAAAAAAQFdAAAAAAACAV0AAAAAAAMBaQAAAAAAAwFdAAAAAAACAWUAAAAAAAMBYQAAAAAAAQFhAAAAAAACAWUAAAAAAAEBZQAAAAAAAAFpAAAAAAADAWEAAAAAAAABYQAAAAAAAwFdAAAAAAAAAV0AAAAAAAEBaQAAAAAAAQFlAAAAAAAAAWkAAAAAAAEBZQAAAAAAAwFpAAAAAAAAAWUAAAAAAAABZQAAAAAAAAFlAAAAAAABAWUAAAAAAAABZQAAAAAAAgFlAAAAAAABAWkAAAAAAAEBXQAAAAAAAQFlAAAAAAAAAWUAAAAAAAEBZQAAAAAAAQFhAAAAAAADAWUAAAAAAAMBYQAAAAAAAAFlAAAAAAACAV0AAAAAAAEBZQAAAAAAAQFdAAAAAAACAWEAAAAAAAIBYQAAAAAAAgFlAAAAAAAAAWUAAAAAAAMBZQAAAAAAAAFhAAAAAAAAAWkAAAAAAAIBZQAAAAAAAgFlAAAAAAACAWkAAAAAAAIBYQAAAAAAAAFhAAAAAAACAWUAAAAAAAEBYQAAAAAAAwFhAAAAAAADAWUAAAAAAAABZQAAAAAAAQFpAAAAAAACAVUA=","dtype":"float64","shape":[79]}},"selected":{"id":"4206","type":"Selection"},"selection_policy":{"id":"4259","type":"UnionRenderers"}},"id":"4205","type":"ColumnDataSource"},{"attributes":{},"id":"4191","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4165","type":"HoverTool"},{"id":"4187","type":"SaveTool"},{"id":"4188","type":"PanTool"},{"id":"4189","type":"WheelZoomTool"},{"id":"4190","type":"BoxZoomTool"},{"id":"4191","type":"ResetTool"}]},"id":"4192","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"#ff7f0e","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4238","type":"Line"},{"attributes":{"below":[{"id":"4177","type":"DatetimeAxis"}],"left":[{"id":"4182","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_width":1000,"renderers":[{"id":"4177","type":"DatetimeAxis"},{"id":"4181","type":"Grid"},{"id":"4182","type":"LinearAxis"},{"id":"4186","type":"Grid"},{"id":"4196","type":"BoxAnnotation"},{"id":"4231","type":"Legend"},{"id":"4211","type":"GlyphRenderer"},{"id":"4239","type":"GlyphRenderer"},{"id":"4268","type":"GlyphRenderer"},{"id":"4231","type":"Legend"}],"right":[{"id":"4231","type":"Legend"}],"title":{"id":"4168","type":"Title"},"toolbar":{"id":"4192","type":"Toolbar"},"x_range":{"id":"4163","type":"Range1d"},"x_scale":{"id":"4173","type":"LinearScale"},"y_range":{"id":"4164","type":"Range1d"},"y_scale":{"id":"4175","type":"LinearScale"}},"id":"4169","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"Variable":["Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median","Median"],"date":{"__ndarray__":"AACAmwijasIAAAB2ErhpwgAAgFAczWjCAAAAKybiZ8IAAAA6i/ZmwgAAgBSVC2bCAAAA754gZcIAAIDJqDVkwgAAgNgNSmPCAAAAsxdfYsIAAICNIXRhwgAAAGgriWDCAAAA7iA7X8IAAACjNGVdwgAAAFhIj1vCAAAADVy5WcIAAAArJuJXwgAAAOA5DFbCAAAAlU02VMIAAABKYWBSwgAAAGgriVDCAAAAOn5mTcIAAACkpbpJwgAAAA7NDkbCAAAASmFgQsIAAABoEWk9wgAAADxgETbCAAAAIF5zLcIAAAAgXnMdwgAAAABwmZTBAAAAQCtKHUIAAAD4d1QtQgAAAIQTBzZCAAAAsMRePUIAAADuOltCQgAAAIQTB0ZCAAAASH+1SUIAAADeV2FNQgAAADqYhlBCAAAAhYRcUkIAAABnujNUQgAAALKmCVZCAAAA/ZLfV0IAAABIf7VZQgAAACq1jFtCAAAAdaFiXUIAAADAjThfQgAAgAU9h2BCAACA9tdyYUIAAAAczl1iQgAAgEHESGNCAAAAZ7ozZEIAAABYVR9lQgAAgH1LCmZCAAAAo0H1ZkIAAIDIN+BnQgAAgLnSy2hCAAAA38i2aUIAAIAEv6FqQgAAACq1jGtCAAAAG1B4bEIAAIBARmNtQgAAAGY8Tm5CAACAizI5b0IAAEC+ZhJwQgAAANHhh3BCAADA41z9cEIAAID213JxQgAAAG+l6HFCAADAgSBeckIAAICUm9NyQgAAQKcWSXNCAADAH+S+c0IAAIAyXzR0QgAAQEXaqXRCAAAAWFUfdUIAAIDQIpV1QgAAQOOdCnZCAAAA9hiAdkI=","dtype":"float64","shape":[79]},"date_dt_strings":["1940-12-31 00:00:00","1941-12-31 00:00:00","1942-12-31 00:00:00","1943-12-31 00:00:00","1944-12-31 00:00:00","1945-12-31 00:00:00","1946-12-31 00:00:00","1947-12-31 00:00:00","1948-12-31 00:00:00","1949-12-31 00:00:00","1950-12-31 00:00:00","1951-12-31 00:00:00","1952-12-31 00:00:00","1953-12-31 00:00:00","1954-12-31 00:00:00","1955-12-31 00:00:00","1956-12-31 00:00:00","1957-12-31 00:00:00","1958-12-31 00:00:00","1959-12-31 00:00:00","1960-12-31 00:00:00","1961-12-31 00:00:00","1962-12-31 00:00:00","1963-12-31 00:00:00","1964-12-31 00:00:00","1965-12-31 00:00:00","1966-12-31 00:00:00","1967-12-31 00:00:00","1968-12-31 00:00:00","1969-12-31 00:00:00","1970-12-31 00:00:00","1971-12-31 00:00:00","1972-12-31 00:00:00","1973-12-31 00:00:00","1974-12-31 00:00:00","1975-12-31 00:00:00","1976-12-31 00:00:00","1977-12-31 00:00:00","1978-12-31 00:00:00","1979-12-31 00:00:00","1980-12-31 00:00:00","1981-12-31 00:00:00","1982-12-31 00:00:00","1983-12-31 00:00:00","1984-12-31 00:00:00","1985-12-31 00:00:00","1986-12-31 00:00:00","1987-12-31 00:00:00","1988-12-31 00:00:00","1989-12-31 00:00:00","1990-12-31 00:00:00","1991-12-31 00:00:00","1992-12-31 00:00:00","1993-12-31 00:00:00","1994-12-31 00:00:00","1995-12-31 00:00:00","1996-12-31 00:00:00","1997-12-31 00:00:00","1998-12-31 00:00:00","1999-12-31 00:00:00","2000-12-31 00:00:00","2001-12-31 00:00:00","2002-12-31 00:00:00","2003-12-31 00:00:00","2004-12-31 00:00:00","2005-12-31 00:00:00","2006-12-31 00:00:00","2007-12-31 00:00:00","2008-12-31 00:00:00","2009-12-31 00:00:00","2010-12-31 00:00:00","2011-12-31 00:00:00","2012-12-31 00:00:00","2013-12-31 00:00:00","2014-12-31 00:00:00","2015-12-31 00:00:00","2016-12-31 00:00:00","2017-12-31 00:00:00","2018-12-31 00:00:00"],"value":{"__ndarray__":"AAAAAACASUAAAAAAAABQQAAAAAAAAE9AAAAAAAAATkAAAAAAAMBOQAAAAAAAAE5AAAAAAAAATkAAAAAAAIBPQAAAAAAAAE1AAAAAAAAAT0AAAAAAAABNQAAAAAAAgE5AAAAAAACAT0AAAAAAAABOQAAAAAAAAE5AAAAAAAAATUAAAAAAAIBNQAAAAAAAAE5AAAAAAACAT0AAAAAAAIBOQAAAAAAAAE5AAAAAAACATUAAAAAAAABOQAAAAAAAgE1AAAAAAAAATUAAAAAAAIBPQAAAAAAAgE5AAAAAAAAATkAAAAAAAABOQAAAAAAAAE9AAAAAAAAAT0AAAAAAAIBNQAAAAAAAwE5AAAAAAAAAT0AAAAAAAABPQAAAAAAAgE1AAAAAAAAAT0AAAAAAAIBOQAAAAAAAgE5AAAAAAAAAUEAAAAAAAIBOQAAAAAAAAE9AAAAAAACATkAAAAAAAABPQAAAAAAAAE5AAAAAAACATkAAAAAAAABPQAAAAAAAQFBAAAAAAAAAT0AAAAAAAIBPQAAAAAAAgE9AAAAAAACATkAAAAAAAEBQQAAAAAAAgE9AAAAAAAAAUEAAAAAAAABPQAAAAAAAAE5AAAAAAACATkAAAAAAAIBNQAAAAAAAAE5AAAAAAACATkAAAAAAAABOQAAAAAAAAE5AAAAAAACATkAAAAAAAIBPQAAAAAAAAE9AAAAAAAAAT0AAAAAAAIBOQAAAAAAAwE1AAAAAAACATkAAAAAAAIBOQAAAAAAAAE1AAAAAAAAAT0AAAAAAAIBOQAAAAAAAgE9AAAAAAABAUEAAAAAAAIBPQAAAAAAAAE5AAAAAAACASkA=","dtype":"float64","shape":[79]}},"selected":{"id":"4234","type":"Selection"},"selection_policy":{"id":"4290","type":"UnionRenderers"}},"id":"4233","type":"ColumnDataSource"},{"attributes":{"months":[0,4,8]},"id":"4228","type":"MonthsTicker"},{"attributes":{},"id":"4175","type":"LinearScale"},{"attributes":{},"id":"4234","type":"Selection"},{"attributes":{"months":[0,6]},"id":"4229","type":"MonthsTicker"},{"attributes":{},"id":"4206","type":"Selection"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"4227","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"Mean Portland Temperatures Per Year","text_font_size":{"value":"18pt"}},"id":"4168","type":"Title"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"4219","type":"AdaptiveTicker"},{"id":"4220","type":"AdaptiveTicker"},{"id":"4221","type":"AdaptiveTicker"},{"id":"4222","type":"DaysTicker"},{"id":"4223","type":"DaysTicker"},{"id":"4224","type":"DaysTicker"},{"id":"4225","type":"DaysTicker"},{"id":"4226","type":"MonthsTicker"},{"id":"4227","type":"MonthsTicker"},{"id":"4228","type":"MonthsTicker"},{"id":"4229","type":"MonthsTicker"},{"id":"4230","type":"YearsTicker"}]},"id":"4178","type":"DatetimeTicker"},{"attributes":{},"id":"4183","type":"BasicTicker"},{"attributes":{"line_color":"#ff7f0e","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4236","type":"Line"},{"attributes":{"source":{"id":"4205","type":"ColumnDataSource"}},"id":"4212","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#2ca02c","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4267","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4209","type":"Line"},{"attributes":{"label":{"value":"Minimum"},"renderers":[{"id":"4268","type":"GlyphRenderer"}]},"id":"4292","type":"LegendItem"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"4220","type":"AdaptiveTicker"},{"attributes":{},"id":"4263","type":"Selection"},{"attributes":{},"id":"4201","type":"DatetimeTickFormatter"},{"attributes":{"label":{"value":"Median"},"renderers":[{"id":"4239","type":"GlyphRenderer"}]},"id":"4261","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4196","type":"BoxAnnotation"},{"attributes":{"callback":null,"renderers":[{"id":"4211","type":"GlyphRenderer"},{"id":"4239","type":"GlyphRenderer"},{"id":"4268","type":"GlyphRenderer"}],"tooltips":[["Variable","@{Variable}"],["date","@{date_dt_strings}"],["value","@{value}"]]},"id":"4165","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2ca02c","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4266","type":"Line"},{"attributes":{"axis_label":"date","axis_label_text_font_size":{"value":"18pt"},"bounds":"auto","formatter":{"id":"4201","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"4169","subtype":"Figure","type":"Plot"},"ticker":{"id":"4178","type":"DatetimeTicker"}},"id":"4177","type":"DatetimeAxis"},{"attributes":{"days":[1,15]},"id":"4225","type":"DaysTicker"},{"attributes":{"callback":null,"end":1546214400000.0,"reset_end":1546214400000.0,"reset_start":-915235200000.0,"start":-915235200000.0,"tags":[[["date","date",null]]]},"id":"4163","type":"Range1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4208","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#ff7f0e","line_width":2,"x":{"field":"date"},"y":{"field":"value"}},"id":"4237","type":"Line"},{"attributes":{"data_source":{"id":"4205","type":"ColumnDataSource"},"glyph":{"id":"4208","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"4210","type":"Line"},"nonselection_glyph":{"id":"4209","type":"Line"},"selection_glyph":null,"view":{"id":"4212","type":"CDSView"}},"id":"4211","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4262","type":"ColumnDataSource"}},"id":"4269","type":"CDSView"},{"attributes":{},"id":"4230","type":"YearsTicker"},{"attributes":{},"id":"4290","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4169","subtype":"Figure","type":"Plot"},"ticker":{"id":"4178","type":"DatetimeTicker"}},"id":"4181","type":"Grid"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"4219","type":"AdaptiveTicker"},{"attributes":{},"id":"4187","type":"SaveTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"4223","type":"DaysTicker"},{"attributes":{},"id":"4315","type":"UnionRenderers"},{"attributes":{},"id":"4259","type":"UnionRenderers"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"4169","subtype":"Figure","type":"Plot"},"ticker":{"id":"4183","type":"BasicTicker"}},"id":"4186","type":"Grid"},{"attributes":{},"id":"4189","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":107.0,"reset_end":107.0,"reset_start":14.0,"start":14.0,"tags":[[["value","value",null]]]},"id":"4164","type":"Range1d"},{"attributes":{},"id":"4203","type":"BasicTickFormatter"}],"root_ids":["4169"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"12840e4b-6bac-42ad-b5a9-66856b1170c5","roots":{"4169":"7c709de1-0f61-4c48-a13b-23db78f0d775"}}];
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