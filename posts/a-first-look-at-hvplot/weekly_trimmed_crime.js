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
      };var element = document.getElementById("36bd73d0-3379-4f11-8490-89e0572a7ade");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36bd73d0-3379-4f11-8490-89e0572a7ade' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"92ab33dd-d466-4d70-83f2-435a138034c4":{"roots":{"references":[{"attributes":{"source":{"id":"121655","type":"ColumnDataSource"}},"id":"121662","type":"CDSView"},{"attributes":{"overlay":{"id":"121650","type":"BoxAnnotation"}},"id":"121644","type":"BoxZoomTool"},{"attributes":{},"id":"121686","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"121623","subtype":"Figure","type":"Plot"},"ticker":{"id":"121632","type":"DatetimeTicker"}},"id":"121635","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"121622","type":"Title"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"121674","type":"AdaptiveTicker"},{"attributes":{"days":[1,15]},"id":"121678","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"121650","type":"BoxAnnotation"},{"attributes":{},"id":"121643","type":"WheelZoomTool"},{"attributes":{"days":[1,8,15,22]},"id":"121677","type":"DaysTicker"},{"attributes":{},"id":"121656","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"121621","type":"HoverTool"},{"id":"121641","type":"SaveTool"},{"id":"121642","type":"PanTool"},{"id":"121643","type":"WheelZoomTool"},{"id":"121644","type":"BoxZoomTool"},{"id":"121645","type":"ResetTool"}]},"id":"121646","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"id"}},"id":"121660","type":"Line"},{"attributes":{"months":[0,4,8]},"id":"121681","type":"MonthsTicker"},{"attributes":{"axis_label":"id","bounds":"auto","formatter":{"id":"121666","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"121623","subtype":"Figure","type":"Plot"},"ticker":{"id":"121637","type":"BasicTicker"}},"id":"121636","type":"LinearAxis"},{"attributes":{"below":[{"id":"121631","type":"DatetimeAxis"}],"left":[{"id":"121636","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":700,"renderers":[{"id":"121631","type":"DatetimeAxis"},{"id":"121635","type":"Grid"},{"id":"121636","type":"LinearAxis"},{"id":"121640","type":"Grid"},{"id":"121650","type":"BoxAnnotation"},{"id":"121661","type":"GlyphRenderer"}],"title":{"id":"121622","type":"Title"},"toolbar":{"id":"121646","type":"Toolbar"},"x_range":{"id":"121619","type":"Range1d"},"x_scale":{"id":"121627","type":"LinearScale"},"y_range":{"id":"121620","type":"Range1d"},"y_scale":{"id":"121629","type":"LinearScale"}},"id":"121623","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"121666","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1514678400000.0,"reset_end":1514678400000.0,"reset_start":1433030400000.0,"start":1433030400000.0,"tags":[[["date","date",null]]]},"id":"121619","type":"Range1d"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"121679","type":"MonthsTicker"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AACASXTadEIAAMARtdx0QgAAANr13nRCAABAojbhdEIAAIBqd+N0QgAAwDK45XRCAAAA+/jndEIAAEDDOep0QgAAgIt67HRCAADAU7vudEIAAAAc/PB0QgAAQOQ883RCAACArH31dEIAAMB0vvd0QgAAAD3/+XRCAABABUD8dEIAAIDNgP50QgAAwJXBAHVCAAAAXgIDdUIAAEAmQwV1QgAAgO6DB3VCAADAtsQJdUIAAAB/BQx1QgAAQEdGDnVCAACAD4cQdUIAAMDXxxJ1QgAAAKAIFXVCAABAaEkXdUIAAIAwihl1QgAAwPjKG3VCAAAAwQsedUIAAECJTCB1QgAAgFGNInVCAADAGc4kdUIAAADiDid1QgAAQKpPKXVCAACAcpArdUIAAMA60S11QgAAAAMSMHVCAABAy1IydUIAAICTkzR1QgAAwFvUNnVCAAAAJBU5dUIAAEDsVTt1QgAAgLSWPXVCAADAfNc/dUIAAABFGEJ1QgAAQA1ZRHVCAACA1ZlGdUIAAMCd2kh1QgAAAGYbS3VCAABALlxNdUIAAID2nE91QgAAwL7dUXVCAAAAhx5UdUIAAEBPX1Z1QgAAgBegWHVCAADA3+BadUIAAACoIV11QgAAQHBiX3VCAACAOKNhdUIAAMAA5GN1QgAAAMkkZnVCAABAkWVodUIAAIBZpmp1QgAAwCHnbHVCAAAA6idvdUIAAECyaHF1QgAAgHqpc3VCAADAQup1dUIAAAALK3h1QgAAQNNrenVCAACAm6x8dUIAAMBj7X51QgAAACwugXVCAABA9G6DdUIAAIC8r4V1QgAAwITwh3VCAAAATTGKdUIAAEAVcox1QgAAgN2yjnVCAADApfOQdUIAAABuNJN1QgAAQDZ1lXVCAACA/rWXdUIAAMDG9pl1QgAAAI83nHVCAABAV3iedUIAAIAfuaB1QgAAwOf5onVCAAAAsDqldUIAAEB4e6d1QgAAgEC8qXVCAADACP2rdUIAAADRPa51QgAAQJl+sHVCAACAYb+ydUIAAMApALV1QgAAAPJAt3VCAABAuoG5dUIAAICCwrt1QgAAwEoDvnVCAAAAE0TAdUIAAEDbhMJ1QgAAgKPFxHVCAADAawbHdUIAAAA0R8l1QgAAQPyHy3VCAACAxMjNdUIAAMCMCdB1QgAAAFVK0nVCAABAHYvUdUIAAIDly9Z1QgAAwK0M2XVCAAAAdk3bdUIAAEA+jt11QgAAgAbP33VCAADAzg/idUIAAACXUOR1QgAAQF+R5nVCAACAJ9LodUIAAMDvEut1QgAAALhT7XVCAABAgJTvdUIAAIBI1fF1QgAAwBAW9HVCAAAA2Vb2dUIAAEChl/h1QgAAgGnY+nVCAADAMRn9dUIAAAD6Wf91QgAAQMKaAXZCAACAitsDdkIAAMBSHAZ2QgAAABtdCHZCAABA450KdkI=","dtype":"float64","shape":[136]},"date_dt_strings":["2015-05-31 00:00:00","2015-06-07 00:00:00","2015-06-14 00:00:00","2015-06-21 00:00:00","2015-06-28 00:00:00","2015-07-05 00:00:00","2015-07-12 00:00:00","2015-07-19 00:00:00","2015-07-26 00:00:00","2015-08-02 00:00:00","2015-08-09 00:00:00","2015-08-16 00:00:00","2015-08-23 00:00:00","2015-08-30 00:00:00","2015-09-06 00:00:00","2015-09-13 00:00:00","2015-09-20 00:00:00","2015-09-27 00:00:00","2015-10-04 00:00:00","2015-10-11 00:00:00","2015-10-18 00:00:00","2015-10-25 00:00:00","2015-11-01 00:00:00","2015-11-08 00:00:00","2015-11-15 00:00:00","2015-11-22 00:00:00","2015-11-29 00:00:00","2015-12-06 00:00:00","2015-12-13 00:00:00","2015-12-20 00:00:00","2015-12-27 00:00:00","2016-01-03 00:00:00","2016-01-10 00:00:00","2016-01-17 00:00:00","2016-01-24 00:00:00","2016-01-31 00:00:00","2016-02-07 00:00:00","2016-02-14 00:00:00","2016-02-21 00:00:00","2016-02-28 00:00:00","2016-03-06 00:00:00","2016-03-13 00:00:00","2016-03-20 00:00:00","2016-03-27 00:00:00","2016-04-03 00:00:00","2016-04-10 00:00:00","2016-04-17 00:00:00","2016-04-24 00:00:00","2016-05-01 00:00:00","2016-05-08 00:00:00","2016-05-15 00:00:00","2016-05-22 00:00:00","2016-05-29 00:00:00","2016-06-05 00:00:00","2016-06-12 00:00:00","2016-06-19 00:00:00","2016-06-26 00:00:00","2016-07-03 00:00:00","2016-07-10 00:00:00","2016-07-17 00:00:00","2016-07-24 00:00:00","2016-07-31 00:00:00","2016-08-07 00:00:00","2016-08-14 00:00:00","2016-08-21 00:00:00","2016-08-28 00:00:00","2016-09-04 00:00:00","2016-09-11 00:00:00","2016-09-18 00:00:00","2016-09-25 00:00:00","2016-10-02 00:00:00","2016-10-09 00:00:00","2016-10-16 00:00:00","2016-10-23 00:00:00","2016-10-30 00:00:00","2016-11-06 00:00:00","2016-11-13 00:00:00","2016-11-20 00:00:00","2016-11-27 00:00:00","2016-12-04 00:00:00","2016-12-11 00:00:00","2016-12-18 00:00:00","2016-12-25 00:00:00","2017-01-01 00:00:00","2017-01-08 00:00:00","2017-01-15 00:00:00","2017-01-22 00:00:00","2017-01-29 00:00:00","2017-02-05 00:00:00","2017-02-12 00:00:00","2017-02-19 00:00:00","2017-02-26 00:00:00","2017-03-05 00:00:00","2017-03-12 00:00:00","2017-03-19 00:00:00","2017-03-26 00:00:00","2017-04-02 00:00:00","2017-04-09 00:00:00","2017-04-16 00:00:00","2017-04-23 00:00:00","2017-04-30 00:00:00","2017-05-07 00:00:00","2017-05-14 00:00:00","2017-05-21 00:00:00","2017-05-28 00:00:00","2017-06-04 00:00:00","2017-06-11 00:00:00","2017-06-18 00:00:00","2017-06-25 00:00:00","2017-07-02 00:00:00","2017-07-09 00:00:00","2017-07-16 00:00:00","2017-07-23 00:00:00","2017-07-30 00:00:00","2017-08-06 00:00:00","2017-08-13 00:00:00","2017-08-20 00:00:00","2017-08-27 00:00:00","2017-09-03 00:00:00","2017-09-10 00:00:00","2017-09-17 00:00:00","2017-09-24 00:00:00","2017-10-01 00:00:00","2017-10-08 00:00:00","2017-10-15 00:00:00","2017-10-22 00:00:00","2017-10-29 00:00:00","2017-11-05 00:00:00","2017-11-12 00:00:00","2017-11-19 00:00:00","2017-11-26 00:00:00","2017-12-03 00:00:00","2017-12-10 00:00:00","2017-12-17 00:00:00","2017-12-24 00:00:00","2017-12-31 00:00:00"],"id":[1085,1086,1059,1037,1095,1077,1023,1046,1150,1113,1078,948,1050,1053,989,1052,1051,1075,1166,1064,1193,1116,1253,1124,1020,1152,1126,1200,1087,1112,1021,1004,1004,1086,1162,1141,1078,1026,1078,1112,1097,1022,995,1039,1151,1035,1129,1011,1072,1003,965,1052,1103,1074,1003,1097,1066,1227,1069,990,965,1053,1045,1062,1079,1162,1159,1092,1254,1185,1099,1158,1146,1148,1243,1224,1273,1160,1137,1251,1077,1070,1211,1194,926,784,965,1086,1154,1113,1160,1129,1226,1106,1181,1204,1158,1116,1105,1190,1235,1236,1125,1210,1238,1238,1229,1220,1153,1115,1169,1115,1141,1196,1150,1189,1173,1238,1251,1144,1166,1169,1177,1147,1209,1175,1241,1160,1078,1156,1076,1227,1246,1274,1171,1019]},"selected":{"id":"121656","type":"Selection"},"selection_policy":{"id":"121686","type":"UnionRenderers"}},"id":"121655","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"id"}},"id":"121659","type":"Line"},{"attributes":{"callback":null,"renderers":[{"id":"121661","type":"GlyphRenderer"}],"tooltips":[["date","@{date_dt_strings}"],["id","@{id}"]]},"id":"121621","type":"HoverTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"121680","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"121623","subtype":"Figure","type":"Plot"},"ticker":{"id":"121637","type":"BasicTicker"}},"id":"121640","type":"Grid"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"121672","type":"AdaptiveTicker"},{"id":"121673","type":"AdaptiveTicker"},{"id":"121674","type":"AdaptiveTicker"},{"id":"121675","type":"DaysTicker"},{"id":"121676","type":"DaysTicker"},{"id":"121677","type":"DaysTicker"},{"id":"121678","type":"DaysTicker"},{"id":"121679","type":"MonthsTicker"},{"id":"121680","type":"MonthsTicker"},{"id":"121681","type":"MonthsTicker"},{"id":"121682","type":"MonthsTicker"},{"id":"121683","type":"YearsTicker"}]},"id":"121632","type":"DatetimeTicker"},{"attributes":{"callback":null,"end":1274.0,"reset_end":1274.0,"reset_start":784.0,"start":784.0,"tags":[[["id","id",null]]]},"id":"121620","type":"Range1d"},{"attributes":{"months":[0,6]},"id":"121682","type":"MonthsTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"121676","type":"DaysTicker"},{"attributes":{},"id":"121627","type":"LinearScale"},{"attributes":{"data_source":{"id":"121655","type":"ColumnDataSource"},"glyph":{"id":"121658","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"121660","type":"Line"},"nonselection_glyph":{"id":"121659","type":"Line"},"selection_glyph":null,"view":{"id":"121662","type":"CDSView"}},"id":"121661","type":"GlyphRenderer"},{"attributes":{},"id":"121641","type":"SaveTool"},{"attributes":{},"id":"121637","type":"BasicTicker"},{"attributes":{},"id":"121645","type":"ResetTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"121673","type":"AdaptiveTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"121675","type":"DaysTicker"},{"attributes":{"axis_label":"date","bounds":"auto","formatter":{"id":"121664","type":"DatetimeTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"121623","subtype":"Figure","type":"Plot"},"ticker":{"id":"121632","type":"DatetimeTicker"}},"id":"121631","type":"DatetimeAxis"},{"attributes":{},"id":"121664","type":"DatetimeTickFormatter"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"121672","type":"AdaptiveTicker"},{"attributes":{},"id":"121642","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"id"}},"id":"121658","type":"Line"},{"attributes":{},"id":"121683","type":"YearsTicker"},{"attributes":{},"id":"121629","type":"LinearScale"}],"root_ids":["121623"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"92ab33dd-d466-4d70-83f2-435a138034c4","roots":{"121623":"36bd73d0-3379-4f11-8490-89e0572a7ade"}}];
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